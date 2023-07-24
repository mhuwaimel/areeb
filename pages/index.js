import ProjectSlider from "@/components/Projects/ProjectSlider";
import Seo from "@/components/common/Seo";
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

export default function WithBackgroundImage() {
  return (
    <>
      <Seo pageTitle=""></Seo>
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
            >
              سهلناها لك ووفرنا لك أفضل الإستثمارات العقارية في المملكة بمعايير
              عالية أعتمد عليها مجموعة من الخبراء العقاريين
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                className="font-alexandria"
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
