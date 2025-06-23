import React from "react";
import '../globals.css';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";



const HeroSection: React.FC = () => (
  <Box
    sx={{
      width: 1425,
      height: 676,
      top: 98,
      left: 0,
      backgroundImage: 'url("/images/hero-chair.jpg")',
      backgroundPosition: "center center",
      //backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      
    }}
  >
    <Paper
      elevation={4}
      sx={{
        position: "static",
        width: { xs: "50%", md: 716 },      
        height: { xs: "auto", md: 402 },    
        mx: { xs: "auto", md: 0 },
        my: { xs: "auto", md: 0 },
        p: { xs: 2.5, md: 4 },
        background: "rgba(0, 0, 0, 0.36)",
        color: "#fff",
        boxShadow: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: 'Proxima Nova',
        backdropFilter: "blur(2px)",
        borderRadius:0,
        '@media (min-width:1200px)': {
          position: "absolute",
          top: 255,
          left: 650, 
        },
      }}
    >
      <Typography
  variant="h5"
  gutterBottom
  sx={{
    color: "#fff",
    fontFamily: 'Proxima Nova, Arial, sans-serif',
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "48px",
    mb: 2,
  }}
>
        New Generation Ceramic Tile
      </Typography>
      <Typography
  variant="body1"
  gutterBottom
  sx={{
    color: "#fff",
    opacity: 1,
    fontFamily: 'Proxima Nova',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: 1,
    mb: 4,
  }}
>
        Perfectus amet risus felis, lacus ornare. Montes ac interdum, ullamcorper massa tristique, consequat. Elementum interdum, varius integer. Nulla aenean malesuada eget eu, eu dictum. Pharetra sagittis et integer sit. Magna massa amet odio.
      </Typography>
      <button className="btn-light">LEARN MORE</button>
    </Paper>
  </Box>
);

export default HeroSection;
