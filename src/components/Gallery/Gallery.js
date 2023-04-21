import React from "react";

import useSearchAndFilter from "../../hooks/useSearchAndFilter";
import CardLayout from "../Layout/Gallery";
import SearchBar from "./SearchBar";
import ChipBar from "./ChipBar";

function Gallery({ data, filters }) {
  const { cards, search, select, tags } = useSearchAndFilter({
    data,
    filters,
  });

  return (
    <>
      <SearchBar search={search} />
      <ChipBar select={select} tags={tags} />
      <CardLayout data={cards} />
    </>
  );
}

export default Gallery;
