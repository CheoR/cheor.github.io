import React from "react";

import { ToggleThemeProvider } from "./src/context/Theme";
import Layout from "./src/components/Layout/Layout";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ToggleThemeProvider>
    { element }
  </ToggleThemeProvider>
)
