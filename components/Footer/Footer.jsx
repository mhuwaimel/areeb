import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      color={useColorModeValue("#4c5353", "#F2F4CD")}
      sx={{
        // position: "-webkit-sticky",
        // /* Safari */ position: "sticky",
        bottom: "0",
        left: 0,
      }}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text className="font-tajawal">
          كل الحقوق محفوظة لدى شركة مساكن عريب العقارية @
          {new Date().getFullYear()}
        </Text>
      </Container>
    </Box>
  );
}
