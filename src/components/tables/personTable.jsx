import React, {useEffect, useState} from 'react';
import {atom, useAtom} from 'jotai';
import Table from '@mui/joy/Table';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import {enqueueSnackbar} from "notistack";
import axios from "axios";
import {getLoggedUser} from "../../hooks/auth/auth";

const calcBtnDisabled = (selectedAnswers) => {
    const questions = selectedAnswers?.questions
    if (!questions) return true
    const len = questions.filter(e => Object.keys(e).includes('score')).length
    if (len === 0) return true
    console.log("🚀 len >>", len)
    return !(len >= 3)
}

export const questionsAtom = atom({type: 'questionState'});

async function calculatePreviousAnswer() {
    const userId = getLoggedUser()?.id
    if (!userId) return {}
    //obtener loas respuestas por usuario
    const response = await fetch(`http://localhost:4400/api/respuesta/usuario/${userId}`)
    const userResponses = await response.json()
    console.log("🚀 userResponses >>", userResponses)
    return userResponses?.questionId ? userResponses : {}
}

async function calcAnswerRecord() {
    const userId = getLoggedUser()?.id
    if (!userId) return false
    const response = await fetch(`http://localhost:4400/api/respuesta/usuario/${userId}`)
    const userResponses = await response.json()
    return !!userResponses?.questionId
}

export const responsesAtom = atom(calculatePreviousAnswer());

const userRecord = atom(calcAnswerRecord());

const isButtonDisabled = atom(get => {
    const responses = get(responsesAtom)
    return calcBtnDisabled(responses)
})

function isEmpty(object) {
    return Object.keys(object).length === 0;
}

export const PersonTable = () => {
    const loggedUserData = getLoggedUser()
    const [data, setQuestions] = useAtom(questionsAtom);
    const [selectedAnswers, setSelectedAnswers] = useAtom(responsesAtom);
    const [isBtnDisabled] = useAtom(isButtonDisabled)
    const [hasError, setHasError] = useState(false);
    const [usuarioYaRespondio, setUsuarioYaRespondio] = useAtom(userRecord)


    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await axios.get('http://localhost:4400/api/preguntas/person');
                console.log("🚀 result >>", result)
                setQuestions({...result.data, type: 'questionState'});
                if (result?.data?.id && result?.data?.questions) {
                    const questions = result.data.questions.map(e => {
                        const {name, _id} = e
                        return {
                            question: name,
                            _id,
                            answer: 'SI'
                        }
                    })
                    console.log("🚀 selectedAnswers >>", selectedAnswers)
                    if (!usuarioYaRespondio) {
                        setSelectedAnswers({questionId: result.data.id, questions})
                    } else {
                        const username = getLoggedUser()?.username
                        enqueueSnackbar(`El usuario ${username} ya resolvio esta tabla`, {
                            HideDuration: 3000,
                            preventDuplicates: true,
                            variant: "info"
                        })
                    }
                } else {
                    console.log("🚀 backend has an error >>")
                    setHasError(true)
                }

            };
            fetchData();
        } catch (e) {
            console.log("🚀 e >>", e)
            setHasError(true)
        }

    }, [setQuestions]);

    if (hasError) return <h4>🙀Error 🤯 No hay comunicación con el servidor.</h4>

    const handleChange = (question, newValue, field = 'answer') => {
        console.log("🚀 questionId, newValue >>", {question, newValue, id: data.id})
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
        setSelectedAnswers(oldResponses => ({
            ...oldResponses,
            questions: clonedQuestions
        }));
    };

    const sendResponse = () => {
        console.log("🚀 what about to send >>", selectedAnswers)
        if (!loggedUserData?.id) {
            // show snackbar that user is not registered
            enqueueSnackbar('Usuario no tiene ID', {
                HideDuration: 3000,
                preventDuplicates: true,
                variant: "info"
            })
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
            console.log("🚀 selectedAnswers >>", selectedAnswers)
            const dataToUpdate = {
                answers: selectedAnswers.questions.map(e => {
                    const {answer, score, observation, name, _id} = e
                    return {answer, score, observation, question:name, _id}
                })
            }
            const id = selectedAnswers?.value?.id
            if (!id) {
                enqueueSnackbar('No tenemos id del record que queremos actualizar', {
                    autoHideDuration: 3000,
                    preventDuplicates: true,
                    variant: 'error'
                })
                return
            }
            fetch(`http://localhost:4400/api/respuestas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToUpdate)
            })
            enqueueSnackbar('La respuesta se ha actualizado con Exito 🥳🤩', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'success'
            })
        } else {
            // si no hay ningun registro en la base de datos crear
            // recordad que solo es un regiustro por usuario para poder administrarlo de mejor manera
            // in the questions object eliminate the _id property
            fetch('http://localhost:4400/api/respuestas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recordData)
            })
            enqueueSnackbar('La respuesta se envio con Exito 🥳🤩', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant: 'success'
            })
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
                {data?.questions?.map((question, index) => (
                    <tr key={question._id} style={{height: '6rem'}}>
                        <th style={{whiteSpace: 'normal'}}>{question.name}</th>
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
