import Seo from "@/components/common/Seo";
import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { NextSeo } from "next-seo";

const Index = () => {
  const { query } = useRouter();

  return (
    <>
      <NextSeo
        title={query.name}
        description={`مساكن عريب الغقارية |    ${query.name}`}
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
        <Seo pageTitle={query.name}></Seo>
        <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
          <Box height={"60vh"} align="center" justify="center" direction="row">
            <Box transition="linear">
              <Text
                fontWeight={"bold"}
                className="tracking-wide main-title font-tajawal text-md md:text-lgs"
              >
                {query.name}
              </Text>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Index;
