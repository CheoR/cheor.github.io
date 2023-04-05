import React, { useRef } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Gallery = ({ data, chips, filterChips, filterSearch, Card }) => {
  const inputField = useRef();

  return (
    <Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
        px={3}
      >
        <TextField
          label="Search"
          sx={{ width: "100%", alignText: "right" }}
          variant="standard"
          value={inputField.value}
          onChange={(e) => filterSearch(e.target.value)}
        />
        <SearchIcon />
      </Grid>
      <Grid item px={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter By Tech</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {chips.sort().map((chip) => {
              return (
                <Chip
                  key={chip}
                  label={chip}
                  variant="outlined"
                  sx={{ border: "2px solid rgb(25, 118, 210)" }}
                  clickable={true}
                  onClick={() => filterChips(chip)}
                />
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        gap={1}
        p={1}
      >
        {data.length > 0 ? (
          data.map((obj) => (
            <Grid item>
              <Card key={obj.id} data={obj} />
            </Grid>
          ))
        ) : (
          <Box>Nothing Found</Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Gallery;
