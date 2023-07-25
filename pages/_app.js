import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";
import customTheme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import "swiper/css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ChakraProvider>
    </>
  );
}
