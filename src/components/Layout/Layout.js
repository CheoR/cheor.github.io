import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import useDarkTheme from "../../hooks/useTheme";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import "../global.css";

const Layout = ({ pageTitle, children }) => {
  const [theme] = useDarkTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
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
    </ThemeProvider>
  );
};

export default Layout;
