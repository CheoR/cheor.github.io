import React from "react";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SOCIALS } from "../../data/data";

const Footer = () => {
  return (
    <Box component="footer">
      <Grid container>
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
        <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
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
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &copy; CheoR {new Date().getFullYear().toString()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
