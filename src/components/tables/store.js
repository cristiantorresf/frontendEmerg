import create from "zustand";
import {devtools} from "zustand/middleware";
import {getLoggedUser} from "../../hooks/auth/auth";
import {obtenerRespuestasState} from "../../hooks/tables/fetchQuestions";

const calcBtnDisabled = (selectedAnswers) => {
    const questions = selectedAnswers?.questions
    if (!questions) return true
    const len = questions.filter(e => Object.keys(e).includes('score')).length
    if (len === 0) return true
    console.log("🚀 len >>", len)
    return !(len >= 3)
}

export const calcZustandButtonDisabled = (state) => {
    const selectedAnswers = state.selectedAnswers
    return calcBtnDisabled(selectedAnswers);
}

async function calculatePreviousAnswer(tableType) {
    const userId = getLoggedUser()?.id;
    const response = await obtenerRespuestasState(userId, tableType )
    console.log("🚀>>", {response})
    return response;
}

export const useStore = create(devtools((set) => ({
    questions: [],
    selectedAnswers: [],
    isBtnDisabled: false,
    usuarioYaRespondio: false,
    populateAnswersState: async (tableType) => {
        const selectedAnswers = await calculatePreviousAnswer(tableType)
        localStorage.setItem('questionId', selectedAnswers?.questionId);
        set({ selectedAnswers });
    },
    updateSelectedAnswers: (newState) => set((state) => ({
        selectedAnswers: {...state.selectedAnswers, ...newState},
    })),
})));
