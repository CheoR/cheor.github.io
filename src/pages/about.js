import React from "react";
import { Box, Link, Typography } from "@mui/material";

import { SEO } from "../components/SEO/SEO";
import { ICONS } from "../data/data";

const AboutPage = () => {
  return (
    <Box>
      <Typography mb={2} textAlign="center" variant="h2">
        Hi, I'm Cheo
      </Typography>
      <Typography paragraph textAlign="left" variant="body1">
        I have been programming as a hobby on/off for years. I started with C++
        in highschool and dabbled with a bit of other languages since then. In
        college, I used Prolog for a computational linguistics course where we{" "}
        <Link
          aria-label="University of California - Santa Cruz Computational Linguistics Speech-Operated Roboic Cars"
          color="inherit"
          href="https://news.ucsc.edu/2008/06/2278.html"
          rel="noreferrer"
          target="_blank"
          underline="hover"
        >
          drove robotic cars using our voice.
        </Link>
      </Typography>
      <Typography paragraph textAlign="left" variant="body1">
        After college I continued learning at a local community college and
        state school. Doing so taught me to plan, build, and automate tools
        which eased my workload in the transportation/logistics/freight shipping
        industries. When I was laid off in December 2020, I decided to enrolled
        at the
        <Link
          aria-label="Nashville Software School"
          color="inherit"
          href="https://nashvillesoftwareschool.com/"
          rel="noreferrer"
          target="_blank"
          underline="hover"
        >
          Nashville Software School.
        </Link>
        NSS reinforced my skillset and taught me to use the latest technologies.
      </Typography>
      <Typography paragraph textAlign="left" variant="body1">
        In my free time I like to catch up on (computational) linguistics,
        explore local parks, and volunteer. I look forward to collaborating with
        you on future endeavors.
      </Typography>
      <Box>
        <Typography gutterBottom textAlign="left" variant="h6">
          Languages and Tools I'm familiar with ( right now ):
        </Typography>
        <Box
        // TODO: figure out why display: flex hides some icons
        //   sx={{
        //     background: "pink",
        //     display: "flex",
        //     justifyItems: "center",
        //     justifyContent: "center",
        //   }}
        >
          {ICONS.map((img) => (
            <Link
              aria-label={img.alt}
              href={img.href}
              rel="noreferrer"
              target="_blank"
              mr={3}
            >
              <Box
                alt={img.alt}
                component="img"
                src={img.src}
                sx={{
                  maxHeight: { xs: 30, md: 40 },
                  maxWidth: { xs: 30, md: 40 },
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;

// eslint-disable-next-line
export const Head = () => <SEO title="About Cheo" description="About Page" />;
