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
  InputAdornment,
} from "@mui/material";

const Gallery = ({ data, chips, filterChips, filterSearch, Card }) => {
  const inputField = useRef();

  return (
    <Grid>
      <Grid item>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            label="Search"
            // not
            // working
            // w="100%"
            sx={{ width: "100%" }}
            variant="standard"
            value={inputField.value}
            onChange={(e) => filterSearch(e.target.value)}
          />
        </Grid>
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
