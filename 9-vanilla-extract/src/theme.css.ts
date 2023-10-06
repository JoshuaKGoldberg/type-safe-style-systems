import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    background: "#eeeeff",
    foreground: "purple",
  },
  space: {
    medium: "1rem",
  },
});
