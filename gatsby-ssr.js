/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
import React from "react";
import { ToggleThemeProvider } from "./src/context/Theme";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

export const wrapRootElement = ({ element }) => (
  <ToggleThemeProvider>
    { element }
  </ToggleThemeProvider>
)
