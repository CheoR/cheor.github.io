import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Gallery from "../components/Gallery/Gallery";
import Card from "../components/Card/ProjectCard";
import Layout from "../components/Layout/Layout";
import useDarkTheme from "../hooks/useTheme";
import { SEO } from "../components/SEO/SEO";
import { PROJECTS } from "../data/data";

const chips = [
  "All",
  ...new Set(PROJECTS.map((project) => project.tags).flat(1)),
];

function Home() {
  const [data, setData] = useState(PROJECTS);
  const [theme] = useDarkTheme(true);

  const filterChips = (chip) => {
    if (chip === "All") {
      setData(PROJECTS);
    } else {
      setData(() => PROJECTS.filter((obj) => obj.tags.includes(chip)));
    }
  };

  const filterSearch = (searchTerm) => {
    if (!searchTerm) setData(PROJECTS);
    setData(() =>
      PROJECTS.filter((obj) =>
        obj.description.toLowerCase().includes(searchTerm?.toLowerCase())
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout pageTitle="">
        <Gallery
          data={data}
          chips={chips}
          filterChips={filterChips}
          filterSearch={filterSearch}
          Card={Card}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default Home;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Home Page" />;
