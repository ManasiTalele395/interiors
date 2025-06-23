import React from "react";
import '../globals.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const products = [
  {
    title: "Bathroom Tiles",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
    img: "/images/bathroom-tile.jpg",
  },
  {
    title: "Marble",
    description: "Ante mus blandit sapien sociosqu",
    img: "/images/marble.jpg",
  },
  {
    title: "Outdoor Flooring",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
    img: "/images/outdoor-flooring.jpg",
  },
  {
    title: "Kitchen Interior",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
    img: "/images/kitchen-interior.jpg",
  },
];

const ProductsSection = () => (
  <Box sx={{ maxWidth: 1200, mx: "auto", my: 6 }}>
    <Typography
      variant="h4"
      className="text-title center-text"
      sx={{ mb: 2,
        fontFamily: 'Proxima Nova',
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '48px',
        letterSpacing: 0,
        verticalAlign: 'middle',}}
    >
      Products
    </Typography>

    <Box
      sx={{
        width: 150,
        height: 5,
        bgcolor: '#C4C4C4',
        mx: 'auto',      
        mb: 4,           
      }}
    />
    
    <Typography
      variant="body1"
      color="text.secondary"
      className="center-text"
      sx={{ mb: 6, maxWidth: "700px", mx: "auto" }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
    </Typography>

    <Grid container spacing={4} >
      <Grid size={{ xs: 12, md: 5 }} sx={{ width:575,height: 638 }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={products[0].img}
            alt={products[0].title}
            className="product-img"
          />
          <Box className="product-overlay">
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: 18 }}>
              {products[0].title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 14 }}>
              {products[0].description}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }} sx={{ height: 638 }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={products[1].img}
            alt={products[1].title}
            className="product-img"
          />
          <Box className='product-overlay '>
            <Typography variant="h6" sx={{ fontWeight: 700,mb:0.5, fontSize: 18 }}>
              {products[1].title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 14 }}>
              {products[1].description}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Grid container direction="column" spacing={6} sx={{ height: '100%' }}>
          {[2, 3].map((i) => (
            <Grid key={i} sx={{ width:454,height: 295 }}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <img
                  src={products[i].img}
                  alt={products[i].title}
                  className="product-img"
                />
                <Box
                  className='product-overlay '
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: 18 }}>
                    {products[i].title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {products[i].description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default ProductsSection;
