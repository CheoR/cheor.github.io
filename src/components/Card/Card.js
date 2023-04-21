import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

function Buttons(props) {
  return props?.data?.frontmatter ? (
    <Link to={`/blog/${props.data?.frontmatter.slug}`}>
      <Button size="small">Read</Button>
    </Link>
  ) : (
    <>
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
    </>
  );
}

function CardD(props) {
  let alt;
  let description;
  let image;
  let title;
  let tags;

  if (props.data?.frontmatter) {
    image = getImage(props.data?.frontmatter.hero_image);
    description = props.data?.body;
    alt = props.data?.frontmatter.hero_image_alt;
    tags = props.data?.frontmatter.tags.sort();
    title = props.data?.frontmatter.title;
  } else {
    alt = props.data.description;
    description = props.data.description;
    image = props.data.preview;
    tags = props.data?.tags.sort();
    title = props.data.title;
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        maxHeight: 400,
        width: 345,
      }}
    >
      <GatsbyImage image={image} alt={alt} />
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
                {title}
              </Typography>
            </Box>
          </Grid>
          {props.data?.frontmatter?.datePublished && (
            <Grid item>
              <Box>
                <Typography gutterBottom variant="caption" component="div">
                  Published: {props.data?.frontmatter.datePublished}
                </Typography>
              </Box>
            </Grid>
          )}
          <Grid item>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {tags.map((tag) => (
                <Typography key={tag} variant="caption">
                  #{tag}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ background: "white" }}>
        <Buttons data={props.data} />
      </CardActions>
    </Card>
  );
}

export default CardD;
