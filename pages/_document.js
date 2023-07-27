import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ColorModeScript } from "@chakra-ui/react";
import customTheme from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <meta
          name="google-site-verification"
          content="G5-YxlawZ0uWzgIWD2QTtG8Qr_6y_npPXSAUAlTJI_A"
        />
      </Head>

      <body>
        <ColorModeScript initialColorMode={customTheme.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
