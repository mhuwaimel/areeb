import {
  Almarai,
  Cairo,
  Changa,
  Tajawal,
  Alexandria,
  Alkalami,
} from "next/font/google";

const almarai = Almarai({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-almarai",
});

const cairo = Cairo({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-cairo",
});
const changa = Changa({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-changa",
});
const tajawal = Tajawal({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-tajawal",
});
const alexandria = Alexandria({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-alexandria",
});
const alkalami = Alkalami({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-alkalami",
});
const fonts = [
  almarai.variable,
  cairo.variable,
  changa.variable,
  tajawal.variable,
  alexandria.variable,
  alkalami.variable,
].join(" ");

export default fonts;
