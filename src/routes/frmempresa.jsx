/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Box, Card, CardContent, Container, Typography } from "@mui/joy";


export const Component = function Empresa(){


  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        Perfil de la empresa
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr 1fr " },
          gap: 2,
        }}
      >
        <form>
          <label>Razon social de la empresa:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Identificacion empleador:</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Direccion de la sede :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Telefono :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Direccion de la sede :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Telefono :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Direccion de la sede :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Telefono :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Correo electronico* :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Departamento :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Municipio :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Barrio* :</label>
        </form>

        <form>
          <label>
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>Linderos sectorial:</label>
        </form>

        <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="Norte">Norte</option>
              <option value="sur">Sur</option>
              <option value="Oriente">Oriente</option>
              <option value="Occidente">Occidente</option>
            </select>
          </label>
        </form>

        <form>
          <label> Vias de acceso :</label>
          <br></br>
        </form>
        <form>
          <label>
            Principales :
            <input type="text" name="principales" />
            <br></br>
          </label>
          <label>
            Alternas:
            <input type="text" name="alternas" />
          </label>
        </form>

        <form>
          <label>Nombre responsable SST* :</label>
        </form>

        <form>
          <label>
            <input type="text" name="rSst" />
          </label>
        </form>

        <form>
          <label>
            ¿El líder SSt de la empresa es el mismo que hace el documento? :
          </label>
        </form>

        <form>
          <label>
            <select>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </label>
        </form>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr  " },
          gap: 2,
        }}
      >
        <Typography level="h4">IMAGEN DE LA EMPRESA / FACHADA*</Typography>
        <br></br>
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
            <input type="file" />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
