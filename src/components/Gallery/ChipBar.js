import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Typography,
} from "@mui/material";

function ChipBar({ select, tags }) {
  return (
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
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {tags.sort().map((chip) => {
          return (
            <Chip
              key={chip}
              label={chip}
              variant="outlined"
              sx={{
                border: "2px solid rgb(25, 118, 210)",
                width: "120px",
              }}
              clickable={true}
              onClick={() => select(chip)}
            />
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default ChipBar;
