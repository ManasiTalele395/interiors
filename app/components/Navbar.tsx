'use client';

import React from "react";
import {AppBar,Toolbar,IconButton,Box,Button,Drawer,List,ListItem,ListItemText,ListItemButton,useMediaQuery,Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const navLinks = [
  "Home",
  "Prices",
  "Products & Services",
  "Showrooms",
  "Company",
  "Blog",
  "Contact",
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const fontFamily = "var(--font-proxima-nova)";

  return (
    <AppBar position="sticky" color="inherit" >
      <Toolbar
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          fontFamily, 
          minHeight: 120,
          width:"100%",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          color="black"
          sx={{
            width: 162,
            height: 57,
            fontSize: 40,
            lineHeight: "57px",
            textAlign: "center",
            mb: 1,
            flex:1,
          }}
        >
          Logo
        </Typography>
  
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
            <SearchIcon />
            {navLinks.map((link) => (
              
              <Button
                key={link}
                color="inherit"
                sx={{ fontWeight: 500, fontFamily }}
              >
                {link}
              </Button>
            ))}
            <ShoppingCartOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
          </Box>
        )}
        {/* Mobile Nav */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            aria-label="menu"
            sx={{ mt: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
        )}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List sx={{ width: 200 }}>
            {navLinks.map((link) => (
              <ListItem key={link} disablePadding>
                <ListItemButton onClick={() => setDrawerOpen(false)}>
                  <ListItemText
                    primary={link}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
