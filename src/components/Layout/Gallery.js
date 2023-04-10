import { Box, Grid } from "@mui/material";
import React from "react";

export default function Gallery({ data, Card }) {
  return (
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
  );
}
