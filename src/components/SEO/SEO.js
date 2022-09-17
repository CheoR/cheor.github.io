import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

export const SEO = ({
  title,
  description,
  image,
  pathname,
  keywords,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    keywords: defaultKeywords,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname || ""}`,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${defaultImage || image}`,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="image" content={seo.image} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
