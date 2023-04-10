import React, { useRef } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ search }) {
  const inputField = useRef();

  return (
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
        sx={{ width: "100%" }}
        variant="standard"
        value={inputField.current}
        onChange={(e) => search(e.target.value)}
      />
    </Grid>
  );
}

export default SearchBar;
