/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */
import { Box, Card, CardContent, Container, Typography } from "@mui/joy";


export const Component = function Georeferencia() {


  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        Caracteristicas de georeferenciación
      </Typography>
      <Typography sx={{ mb: 2 }} level="h4">
        Características de las instalaciones
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        <form>
          <label>Clasificacion de la edificacion: </label>
        </form>
        <form>
          <label>
            <select>
              <option value="1"></option>
              <option value="2">Zona Industrial</option>
              <option value="3">Zona Residencial</option>
              <option value="4">Zona Comercial</option>
              <option value="5">Zona Mixta</option>
            </select>
          </label>
        </form>
        <form>
          <label>Numero de piso:</label>
        </form>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>Numero de entradas y salidas:</label>
        </form>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>Area total MTS:</label>
        </form>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>RUTAS DE EVACUACIÓN :</label>
        </form>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>
        <form>
          <label>Espacios de Densidad Poblacional cercanos</label>
        </form>

        <form>
          <label>
            <select>
              <option value="1"></option>
              <option value="2">Colegios</option>
              <option value="3">Iglesias</option>
              <option value="4">Centro Comercial</option>
              <option value="5">Centro de Atencion Medica</option>
              <option value="6">Parques</option>
              <option value="7">
                Otro <input type="test" name="name" />
              </option>
            </select>
          </label>
        </form>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr" },
          gap: 2,
        }}
      >
        <Typography sx={{ mb: 2 }} level="h4">
          Descripcion de la ocupacion
        </Typography>
      </Box>
      <br />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        <Typography sx={{ mb: 2 }} level="h4">
          Cantidad
        </Typography>
        <Typography sx={{ mb: 2 }} level="h4">
          Horario De Ocupacion
        </Typography>
      </Box>
      <br></br>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr 1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        <form>
          <label> Trabajadores:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Desde:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Hasta:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Contratista:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Desde:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Hasta:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Trabajadores:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Desde:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Hasta:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Contratista :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Desde:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Hasta:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>
      </Box>{" "}
      <br></br>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr " },
          gap: 2,
        }}
      >
        <form>
          <label>
            ¿Alguna persona cuenta con alguna condición especial que amerite un
            tratamiento especial? :{" "}
          </label>
          <select>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </form>
        <br></br>
        <form>
          <label>
            CUÁL :
            <input type="text" name="name" />
          </label>
        </form>
        <br></br>
        <Typography sx={{ mb: 2 }} level="h4">
          Características de las instalaciones
        </Typography>
        <br></br>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        <form>
          <label>Sistema Ventilacion Mecanica:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Ascensores:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Sotanos:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Red Hidraulica:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Transformadores:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Plantas Electricas :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Escaleras:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Zonas de parqueo:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Areas Especiales:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Almacenamiento de quimicos:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Maquinas y equipos:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Control y restricciones de acceso:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <br />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr " },
          gap: 2,
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 150 }}>
            <Typography level="h4">Ubicacion*</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
