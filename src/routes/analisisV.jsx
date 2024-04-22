
import {Box, Card, CardContent, Container, Typography} from "@mui/joy";
import {PersonTable} from "../components/tables/personTable";
import {useToggleSidebar} from "../hooks/navigation/sidebarHooks";
import {useTheme} from "@mui/material/styles";
// import ErrorBoundary from "../components/errorBoundaty";
import { ErrorBoundary } from "react-error-boundary";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {isUserAuthenticated} from "../hooks/auth/auth";




const Title = ({text}) => (
    <CardContent
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}
    >
        <Typography level="h4" sx={{textAlign: "center"}}>
            {text}{" "}
        </Typography>
    </CardContent>
);

const Duration = ({text}) => (
    <CardContent
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Typography level="h4">{text}</Typography>
    </CardContent>
);
const CustomList = ({listItems}) => {
    return (
        <CardContent sx={{minHeight: 0}}>
            <Typography
                level="inherit"
                sx={{
                    textAlign: "left",
                    color: "black",
                    "& .custom-list": {
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        "& li::before": {
                            content: '"* "',
                            paddingRight: "5px",
                        },
                    },
                }}
            >
                <ul className="custom-list">
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Typography>
        </CardContent>
    );
};

const LeftTitle = ({text, sx}) => (
    <CardContent sx={{minHeight: 0}}>
        <Typography
            level="h4"
            sx={{
                ...sx,
                textAlign: "center",
                writingMode: "vertical-rl", // Cambiado de vertical-lr a vertical-rl
                display: "flex",
                letterSpacing: "5px",
                flexDirection: "column-reverse", // Invierte el orden de los elementos del flex container
                justifyContent: "center",
                transform: "rotate(180deg)",
                height: "100%",
                alignItems: "center",
            }}
        >
            {text}{" "}
        </Typography>
    </CardContent>
);

export const Component = function AnalisisR() {
    const [open] = useToggleSidebar()
    const [serverOk, setServerOk] = useState(true);
    const theme = useTheme();
    const user = isUserAuthenticated();
    useEffect(() => {
        if (!user) {
            enqueueSnackbar('Necesitas loguearte primero', {
                autoHideDuration: 4000,
                preventDuplicates: true,
                variant:'info',
                onClose: () => window.location.href = '/customLogin'
            })
            return
        }
        fetch('http://localhost:4400/api/healthcheck').then((response) => {
            console.log("🚀 response >>", response)
            enqueueSnackbar('Conectado al servidor', {
                autoHideDuration: 3000,
                preventDuplicates: true,
                variant:'success'
            })
        }).catch(() =>{
            setServerOk(false)
            enqueueSnackbar('No hay conexion con el servidor', {
                autoHideDuration: 7000,
                preventDuplicates: true,
                variant:'error'
            })

        })
    },[serverOk, setServerOk, user])
    setInterval(() => {
        if(!serverOk){
            enqueueSnackbar('No hay conexion con el servidor', {
                autoHideDuration: 7000,
                preventDuplicates: true,
                variant:'error'
            })
        }
    },20000)
    return (
        <Container sx={{
            ...(!open && {
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: 5,
                    paddingRight: 5,
                    maxWidth: 'none'
                },
                [theme.breakpoints.up('xl')]: {
                    maxWidth: 'none',
                },
            }),
        }}>
            <Typography sx={{mb: 2}} level="h2">
                CONSOLIDADO DE ANÁLISIS DE RIESGO
            </Typography>
            <Typography level="h4">
                Análisis Vulnerabilidad de Personas
            </Typography>

            <hr/>
            <br/>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {sm: "1fr 1fr", md: "1fr 1fr"},
                    gap: 2,
                }}
            >
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        sm: "1fr 1fr", md: "1fr 1fr"
                    },
                }}
            >
                <Card sx={{background: "", gridRow: "1 / 2"}}>
                    <Title
                        text="Nombre de la sede"
                        sx={{fontWeight: "bold"}}
                    />
                </Card>
                <Card sx={{background: "#a2c4c9", gridRow: "1 / 2"}}>
                    <Title
                        text="LOGYK FG SAS"
                        sx={{fontWeight: "bold"}}
                    />
                </Card>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {sm: "1fr 9fr", md: "1fr 9fr"},
                }}
            >
                <Card sx={{background: "", gridRow: "1 / 2"}}>
                    <Title
                        text="Fecha"
                        sx={{fontWeight: "bold"}}
                    />
                </Card>
                <Card sx={{background: "", gridRow: "1 / 2"}}>
                    <Title
                        text=" "
                        sx={{fontWeight: "bold"}}
                    />
                </Card>
            </Box>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "4fr 1fr 1fr 4fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: "6px",
                    marginTop: "5px",
                }}
            >
                <Card sx={{background: "#9fc5f8", gridRow: "1 / 4"}}>
                    <Title
                        text="Punto a evaluar"
                        sx={{fontWeight: "bold"}}
                    />
                </Card>
                <Card sx={{background: "#9fc5f8", gridRow: "2 / 1"}}>
                    <Title
                        text="Respuesta"
                        sx={{fontWeight: "bold"}}
                    />
                </Card>

                <Card sx={{background: "#9fc5f8", gridRow: "2 / 2"}}>
                    <Title text="Sí No/ Parcial"/>
                </Card>
                <Card sx={{background: "#9fc5f8", gridRow: "3/ 1"}}>
                    <Title text="Calificación"/>
                </Card>
                <Card sx={{background: "#9fc5f8", gridRow: "4 / 1"}}>
                    <Title text="OBSERVACIONES/ RECOMENDACIONES"/>
                </Card>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        sm: "1fr", md: "1fr"
                    },
                }}
            >
                <Card>
                    <CardContent sx={{minHeight: 0, background: "#a2c4c9"}}>
                        <Typography level="h4" sx={{textAlign: "left"}}>
                            1. Gestión organizacional {" "}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "4fr 1fr 1fr 4fr",
                    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
                    gap: "5px",
                    marginTop: "8px",
                }}
            >
                <Card sx={{background: "#f0fde6", gridRow: "1 / 2"}}>
                    <Title
                        text="¿Existe una política general en Gestión del Riesgo donde se indica la prevención y preparación para afrontar una emergencia?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "2 / 3"}}>
                    <Title
                        text="¿Se promueve y se practica activamente con los funcionarios y colaboradores el programa de preparación para una emergencia?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "3/ 4"}}>
                    <Title
                        text="¿Existe un esquema organizacional para la respuesta a emergencias con funciones y responsables asignados(Brigadas, Sistema Comando de Incidentes - SCI, entre otros) y se mantiene actualizado?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "4 / 5"}}>
                    <Title
                        text="¿Existen instrumentos o formatos, folletos como material de difusión en temas de prevención y control de emergencias?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "5 / 5"}}>
                    <Title
                        text="¿Existe una brigada de emergencia o en su defecto algún integrante de la misma, dentro de la sede?"/>
                </Card>

                <Card sx={{background: " #fde6f0 ", gridRow: "2 / 1"}}>
                    <Title text="NO"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "2/ 2"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: "#fde6f0", gridRow: "3 / 3"}}>
                    <Title text="NO"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "4/ 4"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "5 / 5"}}>
                    <Title text="SÍ"/>
                </Card>

                <Card sx={{background: " pink", gridRow: "2 / 1"}}>
                    <Title text="0"/>
                </Card>
                <Card sx={{background: " pink ", gridRow: "3 / 2"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: " pink", gridRow: "3 / 3"}}>
                    <Title text="0"/>
                </Card>
                <Card sx={{background: " pink", gridRow: "4 / 4"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: "pink ", gridRow: "5 / 5"}}>
                    <Title text="1"/>
                </Card>


                <Card sx={{background: "#e6fde8", gridRow: "1 / 1"}}>
                    <Title text="Se sugiere plantear una política de Emergencia"/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "2 / 2"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "4 / 3"}}>
                    <Title
                        text="Identificar el personal con autoridad y capacitación para liderar una potencial emergencia"/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "4 / 4"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "5 / 5"}}>
                    <Title text=" "/>
                </Card>

            </Box>

            <hr/>
            <br/>


            <hr/>
            {serverOk && <PersonTable/>}
        </Container>

    );
};
