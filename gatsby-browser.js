import React from "react";

import { ToggleThemeProvider } from "./src/context/Theme";

export const wrapRootElement = ({ element }) => (
  <ToggleThemeProvider>
    { element }
  </ToggleThemeProvider>
)
