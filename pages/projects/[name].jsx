import Seo from "@/components/common/Seo";
import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const projectName = router.query.name;
  return (
    <div>
      <Seo pageTitle={projectName}></Seo>
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Box align="center" justify="center" direction="row">
          <Box transition="linear">
            <Text
              fontWeight={"bold"}
              className="tracking-wide main-title font-tajawal text-md md:text-lgs"
            >
              {projectName}
            </Text>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default index;
