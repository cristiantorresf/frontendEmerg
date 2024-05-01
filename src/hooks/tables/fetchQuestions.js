import {enqueueSnackbar} from "notistack";
import {useEffect, useRef, useState} from "react";
import {getLoggedUser} from "../auth/auth";
import {sendNotification, VARIANTS} from "./notifications";

export const TABLETYPE = {
    PERSON: 'Person',
    RESOURCES: 'Resources',
    SYSPROS: 'SystemsAndProcess'
}

export const obtenerRespuestasState = async (userId = '', questionId = '') => {
    const payload = { questionId, userId }
    const config  = {
        method:'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch('http://localhost:4400/api/respuestas/state',config)
    const data = await response.json();
    console.log("🚀>>", {data})
    return data;
}

export const usePublishAnswersFromState = () => {
    const [publishState, setPublishState] = useState({loading:false, success:false})

    const publish = async (responsesState) => {
        setPublishState(s => ({...s, loading:true}))
        try {
            const config = {
                method:'POST',
                body: JSON.stringify(responsesState),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch('http://localhost:4400/api/respuestas/publicar', config)
            const data = await response.json();
            if (response.status === 200) {
                setTimeout(async () => {
                    setPublishState(s => ({...s, loading:false, success: true}))
                    console.log("🚀>>", {data})
                    if (data?.error){
                        sendNotification('Error estructura de data', VARIANTS.ERROR)
                    }
                },1400)
            }
            console.log("🚀>>", {data})
            sendNotification('Respuesta Enviada con Exito', VARIANTS.SUCCESS)
            return data
        } catch (e) {
            setPublishState(s => ({...s, loading:false, success: false}))
        }
    }
    return {publishState, publish}
}

export const useCheckServerHealthCheck = (forceRedirectAuth = false) => {
    const countRender = useRef(0);
    const [serverOk, setServerOk] = useState(true);
    const user = getLoggedUser()

    useEffect(() => {
        if (forceRedirectAuth) {
            if (!user) {
                enqueueSnackbar('Necesitas loguearte primero', {
                    autoHideDuration: 4000,
                    preventDuplicates: true,
                    variant:'info',
                    onClose: () => window.location.href = '/customLogin'
                })
                return
            }
        }
        checkServerHealthCheck(setServerOk,countRender)
    },[])
    setInterval(() => {
        if(!serverOk){
            enqueueSnackbar('No hay conexion con el servidor', {
                autoHideDuration: 7000,
                preventDuplicates: true,
                variant:'error'
            })
        }
    },20000)
    return {serverOk}
}


export const checkServerHealthCheck = (cb, countRender) => {
    console.log("🚀>>", {countRender})
    fetch('http://localhost:4400/api/healthcheck').then((response) => {
        console.log("🚀 response >>", response)
        if (countRender.current === 0) {
            enqueueSnackbar('Conectado al servidor', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant:'success'
            })
        }
        countRender.current++
    }).catch(() =>{
        cb(false)
        enqueueSnackbar('No hay conexion con el servidor', {
            autoHideDuration: 7000,
            preventDuplicates: true,
            variant:'error'
        })

    })
}
