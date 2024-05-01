// import create from "zustand";
// import {devtools} from "zustand/middleware";
// import {obtenerRespuestasState} from "../../hooks/tables/fetchQuestions";
import {useEffect} from "react";
import {obtenerRespuestasState} from "../../hooks/tables/fetchQuestions";

async function calculatePreviousAnswer() {
    const response = await obtenerRespuestasState()
    console.log("🚀>>", {response})
    return response;
}

// async function calculatePreviousAnswer() {
//     const response = await obtenerRespuestasState()
//     console.log("🚀>>", {response})
//     return response;
// }
//
// const useStore = create((set) => ({
//     questions: [],
//     selectedAnswers: [],
//     isBtnDisabled: false,
//     populateAnswersState: () => {
//         set({ selectedAnswers:"asdhaksdhjakshjsa" });
//     },
//     // populateAnswersState: async () => {
//     //     const selectedAnswers = await calculatePreviousAnswer()
//     //     set({ selectedAnswers });
//     // },
//     updateSelectedAnswers: (newState) => set((state) => ({
//         selectedAnswers: {...state.selectedAnswers, ...newState},
//     })),
// }));

export function TableMejorado(props) {
    // const createState = useStore(s => s.populateAnswersState);
    useEffect(()=>{
        // createState()
        calculatePreviousAnswer()
    },[])
    return (
        <>
            <h1>Person Table Mejorado</h1>
        </>
    )
}
