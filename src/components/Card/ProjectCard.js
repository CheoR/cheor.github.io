import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

const ProjectCard = (props) => {
  return (
    <Card sx={{ width: 345, maxHeight: 400 }}>
      <CardMedia
        component="img"
        sx={{ height: 100, background: "rgb(197, 206, 219)" }}
        image={props.data.preview}
        alt=""
      />
      <CardContent
        sx={{
          height: 250,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {props.data.label}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                {props.data?.tags.map((tag) => (
                  <Typography key={tag} variant="subtitle1">
                    #{tag}
                  </Typography>
                ))}
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textOverflow: "ellipsis", maxLength: 10 }}
              >
                {props.data.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={props.data.link}
          target="_blank"
          rel="noopener"
        >
          demo
        </Button>
        <Button
          size="small"
          href={props.data.repo}
          target="_blank"
          rel="noopener"
        >
          gitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
