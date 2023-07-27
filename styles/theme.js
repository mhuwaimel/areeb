import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// const breakpoints = createBreakpoints({
//   sm: "30em", // 480px
//   md: "48em", // 768px
//   lg: "62em", // 992px
//   xl: "80em", // 1280px
//   "2xl": "96em", // 1536px
// });

export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  // breakpoints,
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  config,
};

const customTheme = extendTheme(overrides);

export default customTheme;
