import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1280px",
  "2xl": "1536px",
};

const THEME = extendTheme({
  config,
  breakpoints,
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "html, body": {
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      },

      // "::-webkit-scrollbar": {
      //   width: "10px",
      // },

      // "::-webkit-scrollbar-track": {
      //   background: "#f1f1f1",
      // },

      // "::-webkit-scrollbar-thumb": {
      //   background: "#D9D9D9",
      // },

      // "::-webkit-scrollbar-thumb:hover": {
      //   background: "#555",
      // },

      button: {
        cursor: "pointer",
      },
    },
  },
});

export default THEME;
