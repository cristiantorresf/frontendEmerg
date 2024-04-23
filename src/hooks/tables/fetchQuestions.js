
export const TABLETYPE = {
    PERSON: 'person',
    RESOURCES: 'resource',
    SYSPROS: 'syspros'
}

export const fetchTableQuestions = async (tableType) => {
    try {
        const fetchOperation = await fetch(`http://localhost:4400/api/preguntas/${tableType}`);
        const result = await fetchOperation.json()
        console.log(`🚀 resultado consultando la tabla ${tableType} >>`, result)
        if (result?.id && result?.questions) {
            const answersMapped = result.questions.map(e => {
                const {name, _id} = e
                return {
                    question: name,
                    _id,
                    answer: 'SI'
                }
            })
            const questions = {...result, type: 'questionState'}
            const answers = {questionId: result.id, questions:answersMapped}
            return {questions, answers}
        } else {
         console.log("🚀 Error en la consulta >>")
            return null
        }
    } catch (error) {
        console.log('🔥 error', error?.message)
        throw new Error('Asegurarse que el servidor este corriendo 😡')
    }
}
