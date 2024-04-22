//import {faStickyNote} from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, Container, Typography } from "@mui/joy";


export const Component = function AnalisisR() {

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        CONSOLIDADO ANALISIS DE RIESGO
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h4">
              1 - Análisis de Amenazas <br></br>2 - Análisis de Vulnerabilidad
              Personas <br></br>3 - Análisis Recursos<br></br> 4 - Análisis de
              Vulnerabilidad Sistemas Y Procesos <br></br>5 - Consolidado
              Análisis Riesgo<br></br>- Procedimiento e Instructivo{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
