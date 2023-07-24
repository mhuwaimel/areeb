import Seo from "@/components/common/Seo";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdOutlineArrowBack } from "react-icons/md";
export default function NotFound() {
  const router = useRouter();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Seo pageTitle={"Error خطأ"}></Seo>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" className="font-alexandria" mt={3} mb={2}>
        صفحة عير صحيحة
      </Text>
      <Text className="font-alexandria" color={"gray.500"} mb={6}>
        الصفحة التي تبحث عنها غير صحيحة
      </Text>

      <Button
        colorScheme="teal"
        onClick={() => router.back()}
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        rightIcon={<MdOutlineArrowBack></MdOutlineArrowBack>}
      >
        عودة
      </Button>
    </Box>
  );
}
