import React from "react";
import Layout from "./src/components/Layout/Layout";
import { ToggleThemeProvider } from "./src/context/Theme";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ToggleThemeProvider>
    { element }
  </ToggleThemeProvider>
)