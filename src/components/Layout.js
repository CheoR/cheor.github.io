import React, { useContext }  from "react";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { useStaticQuery, graphql } from "gatsby"
import { CssBaseline } from "@mui/material"

import { ToggleThemeContext } from "../context/Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  const { theme } = useContext(ToggleThemeContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
    </ThemeProvider>
  );
};

export default Layout;
