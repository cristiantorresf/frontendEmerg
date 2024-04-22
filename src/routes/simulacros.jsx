
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


export const Component = function AnalisisR() {

  return (
    <Container sx={{ py: 2 }}>
      <Typography sx={{ mb: 2 }} level="h2">
        SIMULACROS
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
          <CardContent sx={{ minHeight: 0 ,background: "#a2c4c9", fontWeight: "bold"}}>
            <Typography level=" " sx={{ textAlign: "center" }}>
              SIMULACROS {" "}
            </Typography>   
          </CardContent>
        </Card>       
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr",
          gridTemplateRows: "1fr",
          gap: "2px",
          marginTop: "1px",
        }}
      > 
        <Card sx={{ background: "", gridRow: "1 / 2" }}>
          <Title
            text="SIMULACRO"
            sx={{ fontWeight: "bold" }}
          />
        </Card>      
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="FECHA DE EJECUTADO"
            sx={{ fontWeight: "bold" }}
          />
        </Card>  
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="SOPORTES" 
            sx={{ fontWeight: "bold" }}
          />
        </Card>    
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="OBSERVACIONES"
            sx={{ fontWeight: "bold" }}
          />
        </Card>  
        <Card sx={{ background: " ", gridRow: "1 / 2" }}>
          <Title
            text="ACCIONES PARA LA MEJORA"
            sx={{ fontWeight: "bold" }}
          />
        </Card>              
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr",
          gridTemplateRows: "1fr",
          gap: "2px",
          marginTop: "1px",
        }}
      >
         <Card sx={{ background: "#f0fde6", gridRow: "1 / 2" }}>
          <Title text="S-001 " />
        </Card>       
        <Card sx={{ background: "#f0fde6", gridRow: "2 / 3" }}>
          <Title text="S-002 " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "3/ 4"  }}>
          <Title text="S-003 " />
        </Card>
        <Card sx={{ background: "#f0fde6",gridRow: "4 / 5" }}>
          <Title text="S-004 "/>
        </Card>        
        <Card sx={{ background: "#f0fde6",gridRow: "5 / 5" }}>
          <Title text="S-005 "/>
        </Card> 
        <Card sx={{ background: "#f0fde6",gridRow: "6 / 6" }}>
          <Title text="S-006 "/>
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
        </Card>        <Card sx={{ background: " #fde6f0 ",gridRow: "6 / 6"  }}>
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
        <Card sx={{ background: "pink ", gridRow: "6 / 6" }}>
          <Title text=" " />
        </Card>

        <Card sx={{ background: " #e6fde8",gridRow: "1 / 1"  }}>
          <Title text=" " />       
        </Card>
        <Card sx={{ background: " #e6fde8",gridRow: "2 / 2" }}>
          <Title text=" "/>        
        </Card> 
        <Card sx={{ background: " #e6fde8", gridRow: "3 / 3" }}>
          <Title text=" " />        
        </Card>      
        <Card sx={{ background: " #e6fde8",gridRow: "4 / 4" }}>
          <Title text=" "/>        
        </Card> 
        <Card sx={{ background: " #e6fde8", gridRow: "5 / 5" }}>
          <Title text=" " />        
        </Card>            
         <Card sx={{ background: " #e6fde8", gridRow: "6 / 6" }}>
          <Title text=" " />        
        </Card> 

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
        <Card sx={{ background: "#f0fde6",gridRow: "6 / 6" }}>
          <Title text=" "/>
        </Card> 
      <hr />
      <br />
      </Box>

      <hr />
      <br />

    </Container>
  );
};
