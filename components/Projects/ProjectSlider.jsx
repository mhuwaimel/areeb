"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { sliderData, sliderSittings } from "@/data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Button,
  Container,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProjectSlider = () => {
  const router = useRouter();
  const colorBrand = useColorModeValue("#4c5353", "gray.800");
  const textsizeC = useBreakpointValue({ base: "sm", md: "md" });
  const color1 = useColorModeValue("#4c5353", "#4c5353");
  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div
        dir="rtl"
        className="absolute left-0 flex flex-wrap gap-3 swiper-buttons -top-16"
      >
        <Button
          color={useColorModeValue("#4c5353", "#F2F4CD")}
          className="text-dark-blue py-1 px-2 dark:bg-[#eee] rounded-md shadow hover:scale-110 transition-all ease-in"
          onClick={() => swiper.slideNext()}
        >
          <FaChevronRight width={19} />
        </Button>
        <Button
          color={useColorModeValue("#4c5353", "#F2F4CD")}
          className="text-dark-blue py-1 px-2 dark:bg-[#eee] rounded-md shadow hover:scale-110 transition-all ease-in"
          onClick={() => swiper.slidePrev()}
        >
          <FaChevronLeft width={19} />
        </Button>
      </div>
    );
  };
  return (
    <Container maxW={"7xl"} id="projects">
      <div className="container mt-4 h-[70dvh] overflow-hidden paddings innerWidth">
        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ y: "3rem", opacity: 0 }}
            transition={{ duration: 1, type: "tween" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flexColStart"
          >
            <Text
              color={useColorModeValue("#4c5353", "#F2F4CD")}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              className="font-alexandria"
            >
              آخر مشاريعنا
            </Text>
          </motion.div>
        </div>
        <Swiper {...sliderSittings}>
          <SwiperButtons />
          {sliderData.map((card, index) => (
            <SwiperSlide
              onClick={() => router.push(`/projects/${card.id}`)}
              key={index}
            >
              <div className="gap-3 p-4 m-auto transition-all ease-in-out cursor-pointer swiper-card bg-gray-50 dark:bg-black/10 flexColStart hover:scale-105 rounded-2xl max-w-max">
                <Image
                  className="max-w-[15rem] w-full"
                  src={card.image}
                  alt={card.name}
                  objectFit={"cover"}
                  fill={"Menu"}
                ></Image>

                <Text
                  as={"h4"}
                  color={colorBrand}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={textsizeC}
                  className="font-changa"
                >
                  {card.name}
                </Text>
                <Text as={"p"} color={color1} className="font-changa">
                  {card.detail}
                </Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default ProjectSlider;
