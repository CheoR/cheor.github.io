import React, { useState } from "react";

import Gallery from "../components/Gallery/Gallery";
import Card from "../components/Card/ProjectCard";
import { SEO } from "../components/SEO/SEO";
import { PROJECTS } from "../data/data";

const chips = [
  "All",
  ...new Set(PROJECTS.map((project) => project.tags).flat(1)),
];

function Home() {
  const [data, setData] = useState(PROJECTS);

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
    <Gallery
      data={data}
      chips={chips}
      filterChips={filterChips}
      filterSearch={filterSearch}
      Card={Card}
    />
  );
}

export default Home;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Cheo's Home Page" />;
