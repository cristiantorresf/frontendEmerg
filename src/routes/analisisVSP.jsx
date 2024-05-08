/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

//import {faStickyNote} from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Box, Card, CardContent, Container, Typography} from "@mui/joy";
import {SuperGenericTable} from "../components/tables/superGenericTable";
import {TABLETYPE} from "../hooks/tables/fetchQuestions";


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

    return (
        <Container sx={{py: 2}}>
            <Typography sx={{mb: 2}} level="h2">
                CONSOLIDADO DE ANÁLISIS DE RIESGO
            </Typography>
            <Typography level="h4">
                Análisis de de Sistema y Procesos
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
                            1. Suministros {" "}
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
                    <Title text="¿Se cuenta con suministro de energía?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "2 / 3"}}>
                    <Title text="¿Se cuenta con suministros de gas ¨¨natural - propano¨?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "3/ 4"}}>
                    <Title text="¿Se cuenta con suministros de agua?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "4 / 5"}}>
                    <Title text="¿Se cuentan con un programa de recolección de basuras y manejo de residuos?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "5 / 5"}}>
                    <Title text="¿Se cuenta con un servicio de radio y comunicaciones?"/>
                </Card>

                <Card sx={{background: " #fde6f0 ", gridRow: "2 / 1"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "2/ 2"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "3 / 3"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "4/ 4"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: "  #fde6f0 ", gridRow: "5 / 5"}}>
                    <Title text="SÍ"/>
                </Card>

                <Card sx={{background: " pink", gridRow: "2 / 1"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: " pink ", gridRow: "3 / 2"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: " pink", gridRow: "3 / 3"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: " pink", gridRow: "4 / 4"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: "pink ", gridRow: "5 / 5"}}>
                    <Title text="1"/>
                </Card>


                <Card sx={{background: "#e6fde8", gridRow: "1 / 1"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "2 / 2"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "4 / 3"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "4 / 4"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "5 / 5"}}>
                    <Title text=" "/>
                </Card>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        sm: "5fr 1fr 4fr", md: "1fr 1fr 1fr"
                    },
                }}
            >
                <Card>
                    <CardContent sx={{minHeight: 0, background: "#a2c4c9", gridRow: "1 / 1"}}>
                        <Typography level="h4" sx={{textAlign: "center"}}>
                            Promedio de suministros {" "}
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent sx={{minHeight: 0, background: "#a2c4c9", gridRow: "2 / 1"}}>
                        <Typography level="h4" sx={{textAlign: "center"}}>
                            0.80 {" "}
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent sx={{minHeight: 0, background: "#a2c4c9", gridRow: "3 / 1"}}>
                        <Typography level="h4" sx={{textAlign: "center"}}>
                            _ {" "}
                        </Typography>
                    </CardContent>
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
                            2. Sistemas alternos {" "}
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
                    <Title text="¿Se cuenta con un tanque de reserva de agua?"/>
                </Card>
                <Card sx={{background: "#f0fde6", gridRow: "2 / 3"}}>
                    <Title text="¿Se cuenta con una planta eléctrica?"/>
                </Card>


                <Card sx={{background: " #fde6f0 ", gridRow: "2 / 1"}}>
                    <Title text="SÍ"/>
                </Card>
                <Card sx={{background: " #fde6f0 ", gridRow: "2/ 2"}}>
                    <Title text="SÍ"/>
                </Card>


                <Card sx={{background: " pink", gridRow: "2 / 1"}}>
                    <Title text="1"/>
                </Card>
                <Card sx={{background: " pink ", gridRow: "3 / 2"}}>
                    <Title text="1"/>
                </Card>

                <Card sx={{background: "#e6fde8", gridRow: "1 / 1"}}>
                    <Title text=" "/>
                </Card>
                <Card sx={{background: "#e6fde8", gridRow: "2 / 2"}}>
                    <Title text="La empresa requiere energía alterna "/>
                </Card>

            </Box>
            <SuperGenericTable tableType={TABLETYPE.SYSPROS}/>

            <hr/>
            <br/>

        </Container>
    );
};
