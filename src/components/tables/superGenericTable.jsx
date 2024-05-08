import React, {useEffect, useRef, useState} from 'react';
import Table from '@mui/joy/Table';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import {TABLETYPE, useCheckServerHealthCheck, usePublishAnswersFromState} from "../../hooks/tables/fetchQuestions";
import {calculateButtonDisabled, populateAnswersState} from "./store";
import {Mosaic} from "react-loading-indicators";
import {Box} from "@mui/joy";
import Summary from "./Summary";

function calcPromedio(selectedAnswers) {
    const questions = selectedAnswers?.questions;
    if (!questions) return 0
    const promedioTotal = questions.reduce((ac, cv) => ac + cv.score, 0) / selectedAnswers.questions.length;
    return promedioTotal
}

function calcTotal(selectedAnswers) {
    const questions = selectedAnswers?.questions;
    if (!questions) return 0
    const calificacionTotal = questions.reduce((ac, cv) => ac + cv.score, 0)
    return calificacionTotal
}

function mapQuestionSections(selectedAnswers) {
    // como hay secciones de preguntas como servicios y sistemas alternos
    // la idea es separar el arreglo en dos
    // cada uno con su seccion y preguntas para renderizarlo mas facil
    // {servicios:[], }
    if (!selectedAnswers?.questions) return {}
    const res = selectedAnswers.questions.reduce((acc, question) => {
        const { questionType } = question;
        acc[questionType] = acc[questionType] || [];
        acc[questionType].push(question);
        return acc;
    }, {});
    const final =  Object.entries(res)
    console.log("🚀final >> ", final)
    return final
}

export const SuperGenericTable = ({tableType = TABLETYPE.PERSON}) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const {serverOk} = useCheckServerHealthCheck()
    const promedio = calcPromedio(selectedAnswers);
    const total = calcTotal(selectedAnswers);
    const isButtonDisable = calculateButtonDisabled(selectedAnswers);
    const [hasError, setHasError] = useState(false);
    const {publishState, publish} = usePublishAnswersFromState()
    const countRender = useRef(0)
    const questionSections = mapQuestionSections(selectedAnswers);
    console.log("🚀questionSections >> ", questionSections)
    // ciclos de vida del componente
    useEffect(() => {
        // This ensures the function inside only runs once after the initial render
        if (countRender.current === 0) {
            (async () => {
                const answersStateFromBackend = await populateAnswersState(tableType);
                setSelectedAnswers(answersStateFromBackend);
                console.log("🤬 render >>", countRender.current); // Should log 0 initially
            })();
        }
        countRender.current++;
    }, []); // Empty dependency array ensures this runs only on the first render


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
    return serverOk ? (
        <>
            {publishState?.loading && (<Box sx={{
                position: 'fixed',
                bottom: "0",
                top: "0",
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#000000d6',
                zIndex: '99999'
            }}>
                <Mosaic color="#32cd32" size="medium" text="" textColor=""/>
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
                {questionSections?.length && questionSections.map(([sectionName, questions]) => (
                    <React.Fragment key={sectionName}>
                        <tr>
                            <th colSpan="4" style={{ background: 'blue', color: 'white' }}>{sectionName}</th>
                        </tr>
                        {questions.map(question => (
                            <tr key={question._id}>
                                <td>{question.question}</td>
                                <td>
                                    <Select value={question.answer} onChange={(_dom, value) => handleChange(question, value, 'answer')}>
                                        <Option value="SI">SI</Option>
                                        <Option value="NO">NO</Option>
                                        <Option value="PARCIAL">PARCIAL</Option>
                                    </Select>
                                </td>
                                <td>
                                    <Input value={question.score.toString()} disabled />
                                </td>
                                <td>
                                    <Textarea minRows={2} value={question.observation || ""} onChange={(e) => handleChange(question, e.target.value, 'observation')} />
                                </td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </Table>
            <Button onClick={sendResponse} disabled={isButtonDisable}>Enviar Respuesta</Button>
            {selectedAnswers?.questions?.length && <Summary data={selectedAnswers.questions} tableType={tableType}/>}

        </>
    ) : null;
}
