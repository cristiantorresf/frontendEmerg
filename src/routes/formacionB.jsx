/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */
import { Box, Card, CardContent, Container, Typography } from "@mui/joy";


export const Component = function FormacionB() {


  return (
    <Container sx={{ py: 5 }}>
      <Typography level="h2" gutterBottom>
        FORMACIÓN DE BRIGADISTAS
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "2fr", md: "1fr 1fr  " },
          gap: 3,
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 170 }}>
            <Typography level="h4">
              VIDEO 1: PERFIL Y FUNCIONES DEL BRIGADISTA <br></br> VIDEO 2:
              TIPOS DE BRIGADA – COE
              <br></br> VIDEO 3: PRIMEROS AUXILIOS<br></br> VIDEO 4: CONTROL DE
              INCENDIOS <br></br>VIDEO 5: EVACUACION
            </Typography>
          </CardContent>
        </Card>
        <br></br>
      </Box>
      <br></br> <br></br> <br></br>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        <form>
          <label>EVALUACIÓN </label>
        </form>
        <br></br>
        <form>
          <label> DESCARGAR CERTIFICADO </label>
        </form>
      </Box>
    </Container>
  );
};
