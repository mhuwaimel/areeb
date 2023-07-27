/* eslint-disable @next/next/inline-script-id */
import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";
import customTheme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Script from "next/script";
import "swiper/css";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";
import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      /* invoke analytics function only for production */
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}
      </Script>
      {/*  */}

      <ChakraProvider theme={customTheme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ChakraProvider>
    </>
  );
}
