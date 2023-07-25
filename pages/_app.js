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
        src="https://www.googletagmanager.com/gtag/js?id=G-Q0TWF20Y20"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q0TWF20Y20', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      {/*  */}

      <ChakraProvider theme={customTheme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ChakraProvider>
    </>
  );
}
