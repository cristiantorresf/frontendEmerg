import React, {useEffect, useState} from 'react';
import {atom, useAtom} from 'jotai';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import Table from '@mui/joy/Table';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import {getLoggedUser} from "../../hooks/auth/auth";
import {sendNotification, VARIANTS} from "../../hooks/tables/notifications";
import {TABLETYPE, fetchTableQuestions} from "../../hooks/tables/fetchQuestions";
import {registerAnswer, updateAnswer} from "../../hooks/tables/publishAnswers";
import {fetchAnswerByUserLogged} from "../../hooks/tables/fetchAnswers";

const calcBtnDisabled = (selectedAnswers) => {
    const questions = selectedAnswers?.questions
    if (!questions) return true
    const len = questions.filter(e => Object.keys(e).includes('score')).length
    if (len === 0) return true
    console.log("🚀 len >>", len)
    return !(len >= 3)
}

const fetchCollectionQuestionsAtom = async () => {
    const {questions, answers} = await fetchTableQuestions(TABLETYPE.PERSON)
    return {questions, answers}
};
export const getUserResponses = async() => {
    const userId = getLoggedUser()?.id;
    if (!userId) return {};
    const userResponses = await fetchAnswerByUserLogged(userId);
    return userResponses;
}
async function calculatePreviousAnswer() {
    //obtener las respuestas del usuario
    // const userResponses = await get(userResponsesAtom);
    const userResponses = await getUserResponses()
    console.log("🚀 userResponses >>", userResponses)
    if (!userResponses?.questionId) {
        const {_questions, answers} = await fetchCollectionQuestionsAtom();
        return answers
    }
    return userResponses
}
const useStore = create(devtools((set) => ({
    questions: [],
    selectedAnswers: [],
    isBtnDisabled: false,
    populateAnswersState: async () => {
        const selectedAnswers = await calculatePreviousAnswer()
        set({ selectedAnswers });
    },
    updateSelectedAnswers: (newState) => set((state) => ({
        selectedAnswers: {...state.selectedAnswers, ...newState},
    })),
})));

async function calcAnswerRecord(get) {
    // const userResponses = await get(userResponsesAtom);
    const userResponses = await getUserResponses()
    return !!userResponses?.questionId
}

export const responsesAtom = atom(calculatePreviousAnswer);

const answerRecordAtom = atom(calcAnswerRecord);

const calcZustandStateAnswers = (state) => {
    const selectedAnswers = state.selectedAnswers
    const updateState = state.updateSelectedAnswers;
    return [selectedAnswers, updateState];
}

const calcZustandButtonDisabled = (state) => {
    const selectedAnswers = state.selectedAnswers
    return calcBtnDisabled(selectedAnswers);
}

export const PersonTable = () => {
    const loggedUserData = getLoggedUser()

    const [selectedAnswers, setSelectedAnswers] = useStore(calcZustandStateAnswers);
    const [isBtnDisabled] = useStore(calcZustandButtonDisabled)
    const [hasError, setHasError] = useState(false);
    const [usuarioYaRespondio, setUsuarioYaRespondio] = useAtom(answerRecordAtom)
    console.log("🚀>>", {selectedAnswers})
    console.log("🚀>>", {usuarioYaRespondio})
    useEffect(() => {
        (async () => {
            console.log("🚀>>", {usuarioYaRespondio})
            if (usuarioYaRespondio) {
                const username = getLoggedUser()?.username
                sendNotification(`El usuario ${username} ya resolvió esta tabla`, VARIANTS.INFO)
            }
        })();
    }, [usuarioYaRespondio, getLoggedUser, sendNotification]);


    if (hasError) return <h4>🙀Error 🤯 No hay comunicación con el servidor.</h4>

    const handleChange = (question, newValue, field = 'answer') => {
        console.log("🚀 questionId, newValue >>", {question, newValue, id: selectedAnswers.id})
        const {name, _id, type} = question
        const clonedQuestions = [...selectedAnswers.questions]
        const found = clonedQuestions.find(c => c._id === _id);
        if (!found) {
            console.log(`🚀 no se encontro la question en el estado con id ${_id} >>`)
            return
        }
        if (field === 'answer') {
            found.answer = newValue
        }
        if (field === 'score') {
            found.score = parseInt(newValue)
        }
        if (field === 'observation') {
            found.observation = newValue
        }
        console.log("🚀>>", {clonedQuestions})
        setSelectedAnswers(oldResponses => ({
            ...oldResponses,
            questions: clonedQuestions
        }));
    };

    const sendResponse = async () => {
        console.log("🚀 what about to send >>", selectedAnswers)
        if (!loggedUserData?.id) {
            // show snackbar that user is not registered
            sendNotification('Usuario no tiene ID', VARIANTS.INFO)
        }
        const recordData = {...selectedAnswers}
        recordData.answers = selectedAnswers.questions.map(e => {
            if (!Object.keys(e).includes('score')) {
                return {...e, score: 0}
            }
            return e
        })
        recordData.userId = loggedUserData.id
        console.log("🚀 recordData >>", recordData)
        if (usuarioYaRespondio) {
            //put request para actualizar y no crear otro campo
            // solo es un registro por usuario en la base de datos
            sendNotification('Actualizando Respuesta', VARIANTS.INFO,{autoHideDuration:500})
            console.log("🚀 selectedAnswers >>", selectedAnswers)
            const dataToUpdate = {
                answers: selectedAnswers.questions.map(e => {
                    const {answer, score, observation, name, _id} = e
                    return {answer, score, observation, question: name, _id}
                })
            }
            const id = selectedAnswers?.value?.id
            if (!id) {
                sendNotification('No tenemos id del record que queremos actualizar', VARIANTS.ERROR)
                return
            }
            await updateAnswer(dataToUpdate, id)
            sendNotification('La respuesta se ha actualizado con Exito 🥳🤩', VARIANTS.SUCCESS)
        } else {
            // si no hay ningun registro en la base de datos crear
            // recordad que solo es un regiustro por usuario para poder administrarlo de mejor manera
            // in the questions object eliminate the _id property
            await registerAnswer(recordData)
            const config = {onClose: () => window.location.reload()};
            sendNotification('La respuesta se envio con Exito 🥳🤩', VARIANTS.SUCCESS, config)
        }
    }
    return (
        <>
            <Table aria-label="tabla personas" sx={{'& tr > *:not(:first-child)': {textAlign: 'right'}}}
                   borderAxis="bothBetween"
                   size="md"
                   stickyHeader
                   variant="soft">
                <thead>
                <tr>
                    <th style={{width: '40%'}}>PUNTOS A EVALUAR</th>
                    <th>RESPUESTA</th>
                    <th>CALIFICACION</th>
                    <th style={{width: '30%'}}>OBSERVACIONES / RECOMENDACIONES</th>
                </tr>
                </thead>
                <tbody>
                {selectedAnswers?.questions?.map((question, index) => (
                    <tr key={question._id} style={{height: '6rem'}}>
                        <th style={{whiteSpace: 'normal'}}>{question.question}</th>
                        <th><Select value={selectedAnswers.questions[index]?.answer || 'SI'}
                                    onChange={(_dom, value) => handleChange(question, value)}>
                            <Option value="SI">SI</Option>
                            <Option value="NO">NO</Option>
                            <Option value="PARCIAL">PARCIAL</Option>
                        </Select></th>
                        <th><Input placeholder="Calificacion" variant="outlined"
                                   value={selectedAnswers.questions[index]?.score || '0'}
                                   onChange={(e) => handleChange(question, e.target.value, 'score')}/></th>
                        <th><Textarea value={selectedAnswers.questions[index]?.observation || ' '} minRows={2}
                                      onChange={(e) => handleChange(question, e.target.value, 'observation')}/>
                        </th>
                    </tr>

                ))}
                </tbody>
            </Table>
            <Button onClick={sendResponse} disabled={isBtnDisabled}>Enviar Respuesta</Button>
        </>
    );
}
