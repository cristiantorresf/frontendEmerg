
/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

//import {faStickyNote} from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, Container, List, Typography } from "@mui/joy";





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

export const Component = function AnalisisR() {

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        INVENTARIO DE RECURSOS
      </Typography>
      <Typography level="h2">
        Camillas - Botiquines
      </Typography>

      <hr />
      <br />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr" },
          gap: 2,
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 0 ,background: "#a2c4c9",fontWeight: "bold"}}>
            <Typography level=" " sx={{ textAlign: "center" }}>
              CAMILLAS DE EMERGENCIA {" "}
            </Typography>   
          </CardContent>
        </Card>       
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr" 
         },
        }}
      > 
        <Card sx={{ background: "", gridRow: "1 / 2" }}>
          <Title
            text="CÓDIGO"
            sx={{ fontWeight: "bold" }}
          />
        </Card>      
        <Card sx={{ background: "#a2c4c9", gridRow: "1 / 2" }}>
          <Title
            text="UBICACIÓN"
            sx={{ fontWeight: "bold" }}
          />
        </Card>  
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="SEDE"
            sx={{ fontWeight: "bold" }}
          />
        </Card>         
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gap: "1px",
          marginTop: "1px",
        }}
      >
         <Card sx={{ background: "#f0fde6", gridRow: "1 / 2" }}>
          <Title text=" E-001" />
        </Card>       
        <Card sx={{ background: "#f0fde6", gridRow: "2 / 3" }}>
          <Title text="E-002 " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "3/ 4"  }}>
          <Title text="E-003 " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "4 / 5" }}>
          <Title text="E-004 "/>
        </Card>        
        <Card sx={{ background: "#f0fde6",gridRow: "5 / 5" }}>
          <Title text=" E-005"/>
        </Card> 
        
        <Card sx={{ background: " #fde6f0 ", gridRow: "2 / 1" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "2/ 2"  }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "3 / 3" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: " #fde6f0 ", gridRow: "4/ 4" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "5 / 5"  }}>
          <Title text=" " />
        </Card>

        <Card sx={{ background: " pink",gridRow: "2 / 1" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: " pink ", gridRow: "3 / 2" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " pink",gridRow: "3 / 3"  }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " pink",gridRow: "4 / 4" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: "pink ", gridRow: "5 / 5" }}>
          <Title text=" " />
        </Card>

        <hr />
        <br />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr" 
         },
        }}
      >
        <Card>
          <CardContent sx={{ minHeight: 0 ,background: "#a2c4c9",fontWeight: "bold"}}>
            <Typography level=" " sx={{ textAlign: "center" }}>
              BOTIQUINES {" "}
            </Typography>   
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr" 
         },
        }}
      > 
        <Card sx={{ background: "", gridRow: "1 / 2" }}>
          <Title
            text="CÓDIGO"
            sx={{ fontWeight: "bold" }}
          />
        </Card>      
        <Card sx={{ background: "#a2c4c9", gridRow: "1 / 2" }}>
          <Title
            text="UBICACIÓN"
            sx={{ fontWeight: "bold" }}
          />
        </Card>  
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="SEDE"
            sx={{ fontWeight: "bold" }}
          />
        </Card>         
        <Card sx={{ background: "#a2c4c9", gridRow: "1 / 2" }}>
          <Title
            text="TIPO DE BOTIQUÍN"
            sx={{ fontWeight: "bold" }}
          />
        </Card>          
      </Box>


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
          gap: "1px",
          marginTop: "1px",
        }}
      >
         <Card sx={{ background: "#f0fde6", gridRow: "1 / 2" }}>
          <Title text=" " />
        </Card>       
        <Card sx={{ background: "#f0fde6", gridRow: "2 / 3" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "3/ 4"  }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "4 / 5" }}>
          <Title text=" "/>
        </Card>        
        <Card sx={{ background: "#f0fde6",gridRow: "5 / 5" }}>
          <Title text=" "/>
        </Card> 
        
        <Card sx={{ background: " #fde6f0 ", gridRow: "2 / 1" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "2/ 2"  }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "3 / 3" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: " #fde6f0 ", gridRow: "4/ 4" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " #fde6f0 ",gridRow: "5 / 5"  }}>
          <Title text=" " />
        </Card>

        <Card sx={{ background: " pink",gridRow: "2 / 1" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: " pink ", gridRow: "3 / 2" }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " pink",gridRow: "3 / 3"  }}>
          <Title text=" " />
        </Card>
        <Card sx={{ background: " pink",gridRow: "4 / 4" }}>
          <Title text=" "/>
        </Card> 
        <Card sx={{ background: "pink ", gridRow: "5 / 5" }}>
          <Title text=" " />
        </Card>


        <Card sx={{ background: " #e6fde8",gridRow: "1 / 1"  }}>
          <Title text=" " />
          <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="TipoA">Tipo A</option>
              <option value="TipoB">Tipo B</option>
              <option value="TipoC">Tipo C</option>
            </select>
          </label>
        </form>          
        </Card>
        <Card sx={{ background: " #e6fde8",gridRow: "2 / 2" }}>
          <Title text=" "/>
          <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="TipoA">Tipo A</option>
              <option value="TipoB">Tipo B</option>
              <option value="TipoC">Tipo C</option>
            </select>
          </label>
        </form>          
        </Card> 
        <Card sx={{ background: " #e6fde8", gridRow: "4 / 3" }}>
          <Title text=" " />
          <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="TipoA">Tipo A</option>
              <option value="TipoB">Tipo B</option>
              <option value="TipoC">Tipo C</option>
            </select>
          </label>
        </form>          
        </Card>
        <Card sx={{ background: " #e6fde8",gridRow: "4 / 4"  }}>
          <Title text=" " />
          <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="TipoA">Tipo A</option>
              <option value="TipoB">Tipo B</option>
              <option value="TipoC">Tipo C</option>
            </select>
          </label>
        </form>          
        </Card>
        <Card sx={{ background: "#e6fde8",gridRow: "5 / 5" }}>
          <Title text=" "/>
          <form>
          <label>
            <select>
              <option selected value="Principal">
                {" "}
              </option>
              <option value="TipoA">Tipo A</option>
              <option value="TipoB">Tipo B</option>
              <option value="TipoC">Tipo C</option>
            </select>
          </label>
        </form>          
        </Card> 
      </Box>






      <hr />
      <br />

    </Container>
  );
};
