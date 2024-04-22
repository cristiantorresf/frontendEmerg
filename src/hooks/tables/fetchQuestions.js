import axios from "axios";

export const useFetchQuestions = async () => {

    try {
        const result = await axios('http://localhost:4400/api/preguntas/person');
        if (result.data && result.data.length > 0) throw new Error('no data');
        return {
            questions: result.data?.questions,
            id: result.data._id,
        }

    } catch (error) {
        console.log('🔥 error', error?.message)
        return null
    }


}
