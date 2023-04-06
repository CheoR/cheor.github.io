import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { ToggleThemeProvider } from "../../context/Theme";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "../global.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <ToggleThemeProvider>
      <Grid
        container
        sx={{
          // flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item sx={{ flex: 1 }} mb={1}>
          <Container component="main">
            <Box mt={10}>
              <Typography sx={{ textAlign: "center" }}>{pageTitle}</Typography>
            </Box>
            {children}
          </Container>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ToggleThemeProvider>
  );
};

export default Layout;
