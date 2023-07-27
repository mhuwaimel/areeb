import fonts from "@/styles/fonts";
import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/Navbar";
import WhatsappButton from "../UI/WhatsappButton/WhatsappButton";
import Footer from "../Footer/Footer";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";
import { animations } from "@/utils/animations";
import AnimSwitcher from "@/utils/AnimSwitcher";
import { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

const variants = {
  out: {
    opacity: 0,
    transition: {},
  },
  in: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
export default function RootLayout({ children }) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page.
        */}
        <NextSeo
          useAppDir={true}
          themeColor="#4c5353"
          titleTemplate="%s | مساكن عريب العقارية"
        />
      </Head>

      <Box>
        <div
          className={`flex flex-col min-h-screen  ${fonts} transition-all ease-in `}
          dir="rtl"
        >
          {router.pathname === "/auth" ? null : <NavBar />}
          {/* <div className="flex-grow">{children}</div> */}
          <AnimSwitcher
            anims={animations}
            setAnimation={setAnimation}
            setExitBeforeEnter={setExitBefore}
            startIndex={startIndex}
          />

          <LazyMotion features={domAnimation}>
            <AnimatePresence mode={!exitBefore}>
              <m.div
                key={router.route.concat(animation.name)}
                className="page-wrap"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
              >
                <Box
                  w="100vw"
                  display="flex"
                  className="max-w-full mt-16"
                  flexDirection="column"
                >
                  {children}
                </Box>
              </m.div>
            </AnimatePresence>
          </LazyMotion>

          <WhatsappButton></WhatsappButton>
          <Footer />
        </div>
      </Box>
    </>
  );
}
