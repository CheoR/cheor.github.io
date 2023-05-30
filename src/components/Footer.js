import React from "react";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { SOCIALS } from "../data/data";

const Footer = () => {
  return (
    <Grid
      component="footer"
      container
      sx={{ background: "rgb(197, 206, 219)" }}
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
  );
};

export default Footer;
