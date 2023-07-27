import Seo from "@/components/common/Seo";
import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { NextSeo } from "next-seo";
import { sliderData } from "@/data";

const Index = ({ data }) => {
  const { query } = useRouter();

  return (
    <>
      <NextSeo
        title={data[0].name}
        description={`مساكن عريب الغقارية |    ${data[0].name}`}
        openGraph={{
          type: "",

          url: "whttps://mareeb.vercel.app/projects",
          images: {
            url: "https://mareeb.vercel.app/images/kitchen-2400367_1920.jpg",
            width: 800,
            height: 600,
            alt: "مساكن عريب الغقارية |   تعرف علينا",
          },
          site_name: "مساكن عريب العقارية",
        }}
      />
      <div>
        <Seo pageTitle={data[0].name}></Seo>

        <Flex
          w={"full"}
          h={"100dvh"}
          backgroundImage={"url(/project345678.webp)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack w={"full"} justify={"center"}>
            <Stack maxW={"2xl"} align={"center"} className="-mt-44" spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                {data[0].name}
              </Text>
              <Stack direction={"column"}>
                <Button
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"blackAlpha.700"}
                  _hover={{ bg: "whiteAlpha.500" }}
                >
                  الموقع على الخريطة
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  var newArray = sliderData.filter((item) => item.id == context.query.name);
  return { props: { data: newArray } };
}
export default Index;
