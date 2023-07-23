import fonts from "@/styles/fonts";
import { Box } from "@chakra-ui/react";

import { useRouter } from "next/router";
import NavBar from "../NavBar/Navbar";
import WhatsappButton from "../UI/WhatsappButton/WhatsappButton";
import Footer from "../Footer/Footer";

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <Box>
      <div
        className={`flex flex-col  ${fonts} transition-all ease-in `}
        dir="rtl"
      >
        {router.pathname === "/auth" ? null : <NavBar />}
        {/* <div className="flex-grow">{children}</div> */}
        <Box
          w="100vw"
          display="flex"
          className="max-w-full mt-24"
          flexDirection="column"
        >
          {children}
        </Box>
        <WhatsappButton></WhatsappButton>
        <Footer />
      </div>
    </Box>
  );
}
