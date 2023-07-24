import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const WhatsappButton = () => {
  const iconColor = useColorModeValue("#128C7E", "#25D366");
  return (
    <div>
      <a
        href="https://wa.me/966537621261"
        target="blank"
        className="fixed left-2 md:bottom-2/4 bottom-1/4 z-[1000]"
      >
        <AiOutlineWhatsApp
          color={iconColor}
          className="w-12 h-12 text-4xl "
        ></AiOutlineWhatsApp>
      </a>
    </div>
  );
};

export default WhatsappButton;
