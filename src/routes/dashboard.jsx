import { Box, Card, CardContent, Container, Typography } from "@mui/joy";
import Tabla1 from "../img/tabla 1.PNG"
import Tabla2 from "../img/Tabla 2.PNG"
import Tabla3 from "../img/Tabla 3.PNG"
import Tabla4 from "../img/Tabla 4.PNG"
import Tabla5 from "../img/Tabla 5.PNG"
export const Component = function Dashboard() {

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        Tablero de control
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
            <Typography level="h3">Indicador 1: </Typography>
            <img src={Tabla1} alt="" />
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h3">Indicador 2:</Typography>
            <img src={Tabla2} alt="" />
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h3">Indicador 3:</Typography>
            <img src={Tabla3} alt="" />
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h3">Indicador 4:</Typography>
            <img src={Tabla4} alt="" />
          </CardContent>
        </Card>
        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h3">Indicador 5:</Typography>
            <img src={Tabla5} alt="" />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
