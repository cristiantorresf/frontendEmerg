export async function fetchAnswerByUserLogged(userId){

    const res = await fetch(`http://localhost:4400/api/respuesta/usuario/${userId}`)
    return res.json();
}
