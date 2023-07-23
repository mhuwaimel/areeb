import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";
import customTheme from "@/styles/theme";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";

import Head from "next/head";
import { useRouter } from "next/router";
import "swiper/css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <RootLayout>
          <ScaleFade key={router.route} initialScale={0.9} in="true">
            <Component {...pageProps} />
          </ScaleFade>
        </RootLayout>
      </ChakraProvider>
    </>
  );
}
