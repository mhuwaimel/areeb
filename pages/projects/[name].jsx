import Seo from "@/components/common/Seo";
import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { query } = useRouter();

  return (
    <div>
      <Seo pageTitle={query.name}></Seo>
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Box align="center" justify="center" direction="row">
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
  );
};

export default Index;
