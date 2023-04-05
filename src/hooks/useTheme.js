// // https://cimdalli.github.io/mui-theme-generator/
import { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const getTheme = (isDark) => {
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      ...(isDark
        ? {
            // palette values for dark mode
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
            // palette values for light mode
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

function useDarkTheme(isDark = false) {
  const [mode, setMode] = useState(isDark);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return [theme, setMode];
}

export default useDarkTheme;
