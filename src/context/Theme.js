// // https://cimdalli.github.io/mui-theme-generator/
import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const ToggleThemeContext = createContext();
const _getTheme = (isDark) => {
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      ...(isDark
        ? {
            // dark mode palette values
            primary: {
              main: "#3b3b4c",
              light: "#e7e7f5",
            },
            secondary: {
              main: "#d1da06",
            },
            divider: "#fff",
            background: {
              default: "#303030",
              paper: "#424242",
            },
            text: {
              primary: "#fff",
              secondary: colors.grey[500],
            },
          }
        : {
            // light mode palette values
            primary: {
              main: "#3b3b4c",
              light: "#e7e7f5",
            },
            secondary: {
              main: "#d1da06",
            },
            divider: "#201F1F",
            background: {
              default: "#fafafa",
              paper: "#fff",
            },
            text: {
              primary: colors.grey[900],
              secondary: colors.grey[800],
            },
          }),
    },
  });
  return theme;
};
export const ToggleThemeProvider = ({ children }) => {
  const [mode, toggleTheme] = useState(false);
  const theme = useMemo(() => _getTheme(mode), [mode]);
  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
