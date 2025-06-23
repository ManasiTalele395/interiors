import React from "react";
import {Box,Typography,Card,CardMedia,Button,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Grid from "@mui/material/Grid";


const solutions = [
  { img: "/images/solution1.jpg" },
  { img: "/images/solution2.jpg" },
  { img: "/images/solution3.jpg" },
];

const CreativeSolutions: React.FC = () => (
    <Box className="section-container">
    <Grid container spacing={6} alignItems="center">
      
     
      <Grid size={{ xs: 12, md: 7 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Creative Solutions <br /> by Professional Designers
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "90%", lineHeight: 1.8 }}
        >
          Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
        </Typography>

     
        <Grid container spacing={5} sx={{ mb: 4 }}>
          {solutions.map((solution, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}  sx={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ width: 257,
                  height: 325,
                  //display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius:0,
                    }}>
                <CardMedia
                  component="img"
                  image={solution.img}
                  alt={`solution-${index}`}
                  sx={{
                    width: 257,
                    height: 325,
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

     
      <Grid size={{ xs: 12, md: 5 }} sx={{ position: "relative" }}>
        <Card sx={{  overflow: "hidden", borderRadius:0 }}>
          <CardMedia
            component="img"
            height="726"
            image="/images/solution4.jpg"
            alt="Video Tour"
            sx={{ objectFit: "cover",height: { xs: 300, md: 700 } }}
          />
        </Card>

       
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            backgroundColor: "#fff",
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#111",
              color: "#fff",
              p: 1.2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayCircleOutlineIcon fontSize="small" />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={500}>
              Watch
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              Video-tour
            </Typography>
          </Box>
        </Box>
      </Grid>
      <button className="btn-dark">READ MORE</button>
    </Grid>
  </Box>
);

export default CreativeSolutions;
