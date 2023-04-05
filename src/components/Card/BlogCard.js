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

const BlogCard = (props) => {
  const image = getImage(props.data?.frontmatter.hero_image);

  return (
    <Card sx={{ width: 345, maxHeight: 400 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <GatsbyImage
          image={image}
          alt={props.data?.frontmatter.hero_image_alt}
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
                  {props.data?.frontmatter.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography gutterBottom variant="caption" component="div">
                  Published: {props.data?.frontmatter.datePublished}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {props.data?.frontmatter.tags.map((tag) => (
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
                  {props.data?.body}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ background: "white" }}>
          <Link to={`/blog/${props.data?.frontmatter.slug}`}>
            <Button size="small">Read</Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

export default BlogCard;
