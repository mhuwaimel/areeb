import ProjectSlider from "@/components/Projects/ProjectSlider";
import Seo from "@/components/common/Seo";
import { NEXT_SEO_DEFAULT } from "@/next-seo.config";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Divider,
  Box,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Seo pageTitle=""></Seo>
      <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"url(../Images/Img/StockSnap_1WHSOUCBY7.jpg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          align={"center"}
          // px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              className="font-almarai"
              mr={{ base: 6, md: "none" }}
            >
              سهلناها لك ووفرنا لك أفضل الإستثمارات العقارية في المملكة بمعايير
              عالية أعتمد عليها مجموعة من الخبراء العقاريين
            </Text>
            <Stack direction={"row"} mr={{ base: 6, md: "none" }}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                className="font-alexandria"
                onClick={() => router.push("/projects")}
                _hover={{ bg: "blue.500" }}
              >
                مشاريعنا
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Divider orientation="horizontal" />

      <Flex display={"flex"} alignItems="center">
        <ProjectSlider></ProjectSlider>
      </Flex>
    </>
  );
}
