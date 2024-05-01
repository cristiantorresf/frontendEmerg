import React, {useEffect, useState} from 'react';
import Table from '@mui/joy/Table';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import {getLoggedUser} from "../../hooks/auth/auth";
import {sendNotification, VARIANTS} from "../../hooks/tables/notifications";
import {TABLETYPE, usePublishAnswersFromState} from "../../hooks/tables/fetchQuestions";
import {calcZustandButtonDisabled, useStore} from "./store";
import {Mosaic} from "react-loading-indicators";
import {Box} from "@mui/joy";
import Summary from "./Summary";

function calcPromedio(state) {
    const questions = state?.selectedAnswers?.questions;
    if (!questions) return 0
    const promedioTotal = questions.reduce((ac,cv) => ac+cv.score,0) / state.selectedAnswers.questions.length;
    return promedioTotal
}

function calcTotal(state) {
    const questions = state?.selectedAnswers?.questions;
    if (!questions) return 0
    const calificacionTotal = questions.reduce((ac,cv) => ac+cv.score,0)
    return calificacionTotal
}

export const SuperGenericTable = ({tableType= TABLETYPE.PERSON}) => {
    const selectedAnswers = useStore(s => s.selectedAnswers);
    const setSelectedAnswers = useStore(s => s.updateSelectedAnswers)
    const populateAnswersState = useStore(s => s.populateAnswersState)
    const promedio = useStore(calcPromedio);
    const total = useStore(calcTotal)
    const isButtonDisable = useStore(calcZustandButtonDisabled)
    const [hasError, setHasError] = useState(false);
    const {publishState, publish} = usePublishAnswersFromState()
    // ciclos de vida del componente
    useEffect(() => {
        console.log("🚀>>", {selectedAnswers})
        populateAnswersState(tableType)
    }, [populateAnswersState]);


    if (hasError || !selectedAnswers) return <h4>🙀Error 🤯 No hay comunicación con el servidor.</h4>

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
            found.score = newValue === 'SI' ? 1 : 0
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
        publish(selectedAnswers);
    }
    return (
        <>
            {publishState?.loading && (<Box sx={{position:'fixed', bottom:"0", top:"0", left:'0', right:'0', display:'flex',justifyContent:'center',alignItems:'center', background:'#000000d6', zIndex:'99999'}}>
                <Mosaic color="#32cd32" size="medium" text="" textColor="" />
            </Box>)}

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
                {selectedAnswers && selectedAnswers?.questions && selectedAnswers?.questions?.map((question, index) => (
                    <tr key={question._id} style={{height: '6rem'}}>
                        <th style={{whiteSpace: 'normal'}}>{question.question}</th>
                        <th><Select value={selectedAnswers.questions[index]?.answer || 'SI'}
                                    onChange={(_dom, value) => handleChange(question, value)}>
                            <Option value="SI">SI</Option>
                            <Option value="NO">NO</Option>
                            <Option value="PARCIAL">PARCIAL</Option>
                        </Select></th>
                        <th><Input placeholder="Calificacion" variant="outlined"
                                   disabled={true}
                                   value={selectedAnswers.questions[index]?.score || '0'}
                                   onChange={(e) => handleChange(question, e.target.value, 'score')}/></th>
                        <th><Textarea value={selectedAnswers.questions[index]?.observation || ' '} minRows={2}
                                      onChange={(e) => handleChange(question, e.target.value, 'observation')}/>
                        </th>
                    </tr>

                ))}
                </tbody>
            </Table>
            <Button onClick={sendResponse} disabled={isButtonDisable}>Enviar Respuesta</Button>
            <Summary promedio={promedio} total={total} />

        </>
    );
}
