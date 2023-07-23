import React from "react";
import {
  Box,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import logoLight from "@/public/Images/areeb_logo_w_light.png";
import logoDark from "@/public/Images/areeb_logo_dark-svg.png";
import Image from "next/image";
export default function Logo(props) {
  const router = useRouter();
  return (
    <Box {...props}>
      <Image
        onClick={() => router.push("/")}
        objectFit="cover"
        src={useColorModeValue(logoDark, logoLight)}
        className="md:max-w-[100%] max-w-[80%] cursor-pointer"
        alt="Logo"
      ></Image>
    </Box>
  );
}
