import { Box, Card, CardContent, Container, List, Typography } from "@mui/joy";

import CronogramaImagen from "../img/Cronograma.png"
import {useToggleSidebar} from "../hooks/navigation/sidebarHooks";
import {useTheme} from "@mui/material/styles";



const Title = ({ text }) => (
  <CardContent
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}
  >
    <Typography level="h4" sx={{ textAlign: "center" }}>
      {text}{" "}
    </Typography>
  </CardContent>
);

const Duration = ({ text }) => (
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
const CustomList = ({ listItems }) => {
  return (
    <CardContent sx={{ minHeight: 0 }}>
      <Typography
        level="inherit"
        sx={{
          textAlign: "left",
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

const LeftTitle = ({ text, sx }) => (
  <CardContent sx={{ minHeight: 0 }}>
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

export const Component = function Comites() {
    const [open] = useToggleSidebar()
    const theme = useTheme();
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
      <Typography sx={{ mb: 2 }} level="h2">
        COMITÉS
      </Typography>
      <Typography level="h4">
        La empresa cuenta con un grupo multidisciplinario,servicio médico
        asistencial, seguridad y salud en el trabajo y brigadas de emergencia;
        quienes apoyan la actuación y actividades que sean necesarios para la
        implementación, capacitación, entrenamiento y actuación en caso de
        emergencia.
      </Typography>
      <hr /> <br />

      <Card>
        <CardContent sx={{ minHeight: 150 }}>
          <Typography level="h3">Cronograma: </Typography>
          <img style={{width:'100%'}} src={CronogramaImagen} alt=" " />
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr", md: "1fr 1fr"
         },
        }}
      >
        <Card sx={{ background: "", gridRow: "1 / 2" }}>
        <button id="button">Comité Operativo de Emergencias…</button>
        </Card>
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="Archivo descargable"
            sx={{ fontWeight: "bold" }}
          />
           <input type="file" />
        </Card>
      </Box>
      <hr /> <br />
      <Typography level="h4">
        El comité de Emergencias es responsable de la toma de decisiones antes,
        durante y después de una emergencia.
      </Typography>
      <Typography level="h4">
        El comité de Emergencias es la máxima autoridad responsable de prevenir
        y preparar las acciones de coordinación de una emergencia que implique
        una respuesta especializada hasta que se hagan presentes las autoridades
        o los organismos de socorro externos. momento en el cual se debe delegar
        con los respectivos responsables, sin dejar de ser apoyo y fuente de
        información para una respuesta adecuada,la cual requiere de la
        participación decidida del Nivel Directivo.
      </Typography>
      <Typography level="h4">
        El comité de Emergencias tiene como objetivos principales:
        <List>
        - Asegurar y proteger la vida humana y los bienes de la entidad.<br />
        - Coordinar y tomar decisiones antes, durante y después de las emergencias internas y externas.<br />
        - El comité de emergencias está basado en la estructura organizacional del Sistema Comando de Incidente.</List>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 0 }}>
            <Typography level="h4" sx={{ textAlign: "center" }}>
              Funciones del Comité Operativo de Emergencias{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* papa grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr 3fr",
          gridTemplateRows: "repeat(8, min-content)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Card sx={{ gridColumn: "2 / 4" }}>
          <CardContent sx={{ minHeight: 0 }}>
            <Typography level="h4" sx={{ textAlign: "center" }}>
              Funciones del Comité Operativo de Emergencias
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ gridColumn: "4 / 5" }}>
          <CardContent sx={{ minHeight: 0 }}>
            <Typography level="h4" sx={{ textAlign: "center" }}>
              Funciones del Comité Operativo de Emergencias
            </Typography>
          </CardContent>
        </Card>
        {/* Columna 1 */}
        <Card sx={{ gridRow: "1 / 9", background: "#a2c4c9" }}>
          <LeftTitle text="Sociales" sx={{ fontWeight: "bold" }} />
        </Card>
        {/* Columna 2 */}
        <Card
          sx={{
            gridRow: "2 / 5",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography level="h4" sx={{ textAlign: "center" }}>
              COMANDANTE DE INCIDENTE O JEFE DE EMERGENCIAS{" "}
            </Typography>
          </CardContent>
        </Card>
        {/* Columna 3 */}
        <Card>
          <Duration text="ANTES" />
        </Card>
        {/* Columna 4 */}
        <Card>
          <CustomList
            listItems={[
              "Brindar información a la comunidad de la Organización sobre la atención de emergencias.",
              "Realizar el Análisis de Riesgo de la Organización.",
              "Programar jornadas de capacitación.",
              "Realizar acciones de intervención y mitigación sobre los riesgos identificados en el Análisis de Riesgo.",
              "Desarrollar ejercicios de entrenamiento (Simulaciones y simulacros).",
            ]}
          />
        </Card>

        <Card sx={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>
          <Duration text="DURANTE" />
        </Card>

        <Card sx={{ gridColumn: "4 / 5" }}>
          <CustomList
            listItems={[
              "Evaluar las propiedades del incidente o emergencia",
              "Determinar los objetivos operacionales",
              "Desarrollar y ejecutar los Planes de Acción",
              "Desarrollar una estructura organizativa apropiada",
              "Administrar los recursos, suministros y servicios",
              "Mantener la coordinación",
            ]}
          />
        </Card>

        <Card sx={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>
          <Duration text="DESPUÉS" />
        </Card>

        <Card sx={{ gridColumn: "4 / 5" }}>
          <CustomList
            listItems={[
              "Auditar el resultado de las medidas de actuación previstas en el plan para analizarlas y evaluarlas",
              "Coordinar la recolección de los informes de daños y pérdidas ocasionadas por el incidente y emergencia",
              "Elaborar informe final",
            ]}
          />
        </Card>

        <Card>
          <Title text=" SEGURIDAD OPERACIONAL" />
        </Card>

        <Card>
          <Duration text="DURANTE" />
        </Card>

        <Card>
          <CustomList
            listItems={[
              "Garantizar el aseguramiento de la zona de impacto para el cumplimiento de los operativos de respuesta para emergencia velando por el control de la situacion",
              "Vigilar y evaluar las situaciones peligrosas e inseguras",
              "Garantizar la seguridad de los grupos o brigadas de emergencia",
            ]}
          />
        </Card>

        <Card>
          <Title text="ENLACE" />
        </Card>

        <Card>
          <Duration text="DURANTE" />
        </Card>

        <Card>
          <CustomList
            listItems={[
              "Obtener un reporte rápido del comandante de incidente",
              "Identificar a los representantes de cada una de las organizaciones incluyendo su comunicación y lineas de información",
              "Responder a las solicitudes del personal del incidente para establecer contactos con otras organizaciones",
            ]}
          />
        </Card>

        <Card>
          <Title text="INFORMACIÓN PÚBLICA" />
        </Card>

        <Card>
          <Duration text="DURANTE" />
        </Card>

        <Card>
          <CustomList
            listItems={[
              "Formular e emitir la información acerca del incidente a los medios de prensa, otras instituciones u organizaciones relevantes externas.", "Respetar las limitaciones para la emisión de la información que imponga el comandante de Incidente",
            ]}
          />
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr 3fr",
          gridTemplateRows: "3rem repeat(3, min-content)",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Card sx={{ background: "#a2c4c9", gridRow: "1 / 5" }}>
          <LeftTitle
            text="Sección de Planificación"
            sx={{ fontWeight: "bold" }}
          />
        </Card>

        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="JEFE DE SECCIÓN" />
        </Card>
        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="UNIDAD" />
        </Card>
        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="FUNCIONES" />
        </Card>

        <Card sx={{ gridRow: "2 / 5" }}>
          <Title
            text="Supervisar la preparación de los Planes de Acción. Proporcionar predicciones periódicas acerca del potencial del incidente. Organizar la información acerca de estrategias alternativas. Compilar y distribuir información
            acerca del estado del incidente"
          />
        </Card>
        <Card>
          <Duration text="SITUACIONAL" />
        </Card>
        <Card>
          <CustomList
            listItems={[
              "Recolectar y organizar la información acerca de estado de la situación del Incidente.",
            ]}
          />
        </Card>
        <Card>
          <Duration text=" DOCUMENTACIÓN" />
        </Card>
        <Card>
          <CustomList
            listItems={[
              "Mantener los archivos completos y precisos del Incidente.",
              "Proporcionar servicios de fotocopiado al personal del Incidente.",
              "Almacenar los archivos del incidente para cualquier finalidad legal, analítica o histórica.",
              "Consolidar información de todas las ramas y unidades de la estructura organizacional del Incidente.",
            ]}
          />
        </Card>
        <Card>
          <Duration text=" RECURSOS" />
        </Card>
        <Card>
          <CustomList
            listItems={[
              "Establecer todas las actividades de registro de recursos, suministros y servicios para el incidente.",
              "Preparar y procesar la información acerca de los cambios en el estado de los recursos, suministros y servicios en el incidente",
              "Preparar y mantener todos los anuncios, cartas y listas que reflejen el estado actual y ubicación de los recursos, suministros, suministros y servicios para el transporte y apoyo a los vehículos.",
              "Mantener una lista Maestra de registro de llegadas de los recursos, suministros y servicios para el incidente.",
            ]}
          />
        </Card>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr 3fr",
          gridTemplateRows: "3rem min-content",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Card sx={{ background: "#a2c4c9", gridRow: "1 / 3", height: "26rem" }}>
          <LeftTitle
            text="Seccion de Operaciones"
            sx={{ fontWeight: "bold" }}
          />
        </Card>

        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="JEFE DE SECCIÓN" />
        </Card>
        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="RAMA" />
        </Card>
        <Card sx={{ background: "#9fc5f8" }}>
          <Title text="FUNCIONES" />
        </Card>

        <Card sx={{ gridRow: "2 / 3" }}>
          <Title
            text="Elaborar y actualizar los planes de acción. Mantener informado al Comandante de Incidente acerca de las actividades especiales,
            incidente y ocurrencia."
          />
        </Card>
        <Card>
          <Duration text="PLAN DE ACCIÓN" />
        </Card>
        <Card>
          <CustomList
            listItems={[
              "Desarrollar los componentes operacionales de los Planes de Acción",
              "Asignar el personal de Operaciones de acuerdo con los Planes de Acción, con los respectivos jefes o coordinadores",
              "Supervisar las operaciones",
              "Determinar las necesidades y solicitar recursos suministros o servicios adicionales.",
            ]}
          />
        </Card>
      </Box>

      <hr /> <br />
      {/* por aca puede ser */}

    </Container>
  );
};
