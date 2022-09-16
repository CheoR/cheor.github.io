import React, { useState } from "react";
import { Box, Chip, Stack } from "@mui/material";

const ChipBar = ({ data }) => {
  let allChips = [
    "All",
    ...new Set(data.map((project) => project.tags).flat(1)),
  ];

  allChips = allChips.map((tag, idx) => ({ key: idx, label: tag }));

  const [chips, setChips] = useState(allChips);

  const addProjects = () => undefined;
  const removeProjects = () => undefined;
  const toggleChip = (e) => console.log("chip clicked is ", e.target);

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        // height: "100%",
        background: "red",
        justifyContent: "space-evenly",
        overflow: "auto",
        gap: 1,
        width: "100%",
        // flexWrap: "wrap",
      }}
      p={1}
    >
      {chips.map((tag) => {
        return (
          <Chip
            key={tag.key}
            label={tag.label}
            variant="outlined"
            sx={{ background: "green" }}
            clickable
            onClick={toggleChip}
          />
        );
      })}
    </Box>
    // <Stack
    //   direction="row"
    //   gap={1}
    //   sx={{
    //     background: "pink",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     overflow: "scroll",
    //   }}
    //   p={1}
    // >
    //   {allChips.map((tag) => {
    //     return <Chip label={tag} variant="outlined" />;
    //   })}
    // </Stack>
  );
};

export default ChipBar;
