import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";

import { SOCIALS } from "../data/data";

const Footer = () => {
  return (
    <AppBar component="footer" sx={{ position: "sticky" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            component="footer"
            container
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Let's Connect!
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "space-between",
                  md: "center",
                },
                width: "100%",
                px: 2,
              }}
            >
              <Typography
                variant="h7"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                &copy; CheoR {new Date().getFullYear().toString()}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <IconButton
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
