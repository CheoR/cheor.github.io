import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Box component="main">
      <title>Page Not found</title>
      <Typography
        component="div"
        display="flex"
        gutterBottom
        sx={{ justifyContent: "center" }}
        variant="h5"
      >
        Page not found{" "}
        <Box aria-label="Pensive emoji" component="span" ml={2} role="img">
          😔
        </Box>
      </Typography>
      <Box display="flex" sx={{ justifyContent: "center" }}>
        <Link to={`/`}>
          <Button size="small" variant="contained">
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
