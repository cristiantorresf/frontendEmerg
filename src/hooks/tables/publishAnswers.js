export function registerAnswer(answerData) {
    return fetch('http://localhost:4400/api/respuestas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData)
    })
}

export function updateAnswer(dataToUpdate, id){
    return fetch(`http://localhost:4400/api/respuestas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToUpdate)
    })
}
