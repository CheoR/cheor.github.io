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
            primary: colors.deepOrange,
            divider: colors.deepOrange[700],
            background: {
              default: colors.deepOrange[900],
              paper: colors.deepOrange[900],
            },
            text: {
              primary: "#fff",
              secondary: colors.grey[500],
            },
          }
        : {
            // light mode palette values
            primary: colors.amber,
            divider: colors.amber[200],
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
