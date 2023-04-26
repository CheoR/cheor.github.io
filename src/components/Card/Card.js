import React from "react";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
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
        href={props.data.repo}
        target="_blank"
        rel="noopener"
      >
        gitHub
      </Button>
      {props.data.link && (
        <Button
          size="small"
          href={props.data.link}
          target="_blank"
          rel="noopener"
        >
          demo
        </Button>
      )}
    </>
  );
}

function Image(props) {
  if (props.data?.frontmatter) {
    const image = getImage(props.data?.frontmatter.hero_image);
    // return <StaticImage alt={props.data.alt} src={image} />;
    return (
      <GatsbyImage
        alt={props.data.alt}
        image={image}
        style={{ maxHeight: 64, objectFit: "scale-down" }}
      />
    );
  }

  return (
    <img
      alt={props.data.alt}
      src={
        props.data.image ||
        "https://placehold.co/300x200.png?text=🙂&font=roboto"
      } // "https://picsum.photos/640/360"}
      style={{ maxHeight: 64, objectFit: "cover" }}
      // loading="lazy"
    />
  );
}

function CardD(props) {
  let description;
  let title;
  let tags;

  if (props.data?.frontmatter) {
    description = props.data?.body;
    tags = props.data?.frontmatter.tags.sort();
    title = props.data?.frontmatter.title;
  } else {
    description = props.data.description;
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
      <Image data={props.data} />
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
                {title.slice(0, 28)}
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
