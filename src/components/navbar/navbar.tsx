import React from "react";
import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme";

export default function NavBar(){

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar variant="regular" className="flex-r">
              <Box maxWidth={"20%"}>
                <Typography variant="h6" color="inherit" component="div">
                  Embezzlement Ensamble
                </Typography>
              </Box>
              <Link variant="h6" color="inherit" component="div">
                Products
              </Link>
              <Link variant="h6" color="inherit" component="div">
                About Us
              </Link>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
    )
}

