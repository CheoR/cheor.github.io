import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import "../global.css";

const Layout = ({ pageTitle, children }) => {
  return (
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
  );
};

export default Layout;
