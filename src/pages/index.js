import React from "react";
import Gallery from "../components/Gallery/Gallery";
import { SEO } from "../components/SEO";
import { PROJECTS } from "../data/data";
import Layout from "../components/Layout";

const filters = {
  search: (searchTerm) =>
    PROJECTS.filter((project) =>
      project.description.toLowerCase().includes(searchTerm?.toLowerCase())
    ),
  select: (tag) => PROJECTS.filter((project) => project.tags.includes(tag)),
  tags: ["All", ...new Set(PROJECTS.flatMap((project) => project.tags))],
};

function Home() {
  return <Gallery data={PROJECTS} filters={filters} />;
}

export default Home;

// eslint-disable-next-line
export const Head = () => <SEO title="Home" description="Cheo's Home Page" />;
