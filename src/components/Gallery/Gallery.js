import React from "react";
import { Box, Grid } from "@mui/material";

import useSearchAndFilter from "../../hooks/useSearchAndFilter";
import SearchBar from "./SearchBar";
import ChipBar from "./ChipBar";
import Card from "../Card";

function Gallery({ data, filters }) {
  const { cards, search, select, tags } = useSearchAndFilter({
    data,
    filters,
  });

  return (
    <>
      <SearchBar search={search} />
      <ChipBar select={select} tags={tags} />
      <Grid
        container
        display="flex"
        flexWrap="wrap"
        sx={{
          justifyContent: {
            xs: "center",
            sm: "space-evenly",
            lg: "left",
          },
          gap: {
            xs: 2,
            sm: 3,
          },
          p: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        {cards.length > 0 ? (
          cards.map((obj) => (
            <Grid item key={obj.id}>
              <Card key={obj.id} data={obj} />
            </Grid>
          ))
        ) : (
          <Box>Nothing Found</Box>
        )}
      </Grid>
    </>
  );
}

export default Gallery;
