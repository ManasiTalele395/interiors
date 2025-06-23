import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const VisionSection: React.FC = () => (
  <Box sx={{ py: 6}}>
    <Box
      sx={{
        position: "relative",
        width: 1301,
        height: 526,
        mx: "auto",
        overflow: "hidden",
      }}
    >
     
      <Box
        component="img"
        src="/images/vision-room.jpg"
        alt="Vision Room"
        sx={{
          width: "100%",
          height: "100%",
          ml: "15%", 
        }}
      />

    
      <Paper
        elevation={4}
        sx={{
          position: "absolute",
          top: { xs: 32, md: 64 },
          left: { xs: 32, md: 64 },
          width: { xs: 300, sm: 500, md: 708 }, 
          maxWidth: { xs: '100%', md: 600 },
          p: 9,
          bgcolor: "#F7F7F7",
          borderRadius:0,
        }}
      >
        <Typography variant="h5" fontWeight={700} fontSize={48} gutterBottom>
          Vision
        </Typography>
        <Typography variant="body1" color="#616161" fontWeight={400} fontSize={20} gutterBottom>
          Praesent massa lacus, luctus et elit. Mauris ac dictum risus. Etiam euismod, magna nec ultricies pretium, a feugiat elit erat at ligula.
        </Typography>
        <button className="btn-dark">LEARN MORE</button>
      </Paper>
    </Box>
  </Box>
);

export default VisionSection;
