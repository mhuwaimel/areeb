import Seo from "@/components/common/Seo";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { NextSeo } from "next-seo";

const advertise = () => {
  return (
    <div>
      <Seo pageTitle={"أعلن عن عقارك"}></Seo>
      <NextSeo
        title=" أعلن عن عقارك "
        description="يمكنكم الإعلان عن عقاركم مع مساكن عريب "
        openGraph={{
          type: "",

          url: "whttps://mareeb.vercel.app/advertise",
          images: {
            url: "https://mareeb.vercel.app/images/img/kitchen-2400367_1920.jpg",
            width: 800,
            height: 600,
            alt: "مساكن عريب الغقارية |  أعلن عن عقارك",
          },
          site_name: "مساكن عريب العقارية",
        }}
      />
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Box align="center" justify="center" direction="row">
          <Box transition="background-color 300ms">
            <Text
              fontWeight={"bold"}
              className="tracking-wide main-title font-changa text-md md:text-lgs"
            >
              يمكنكم الإعلان عن عقاركم مع مساكن عريب عن طريق تعبئة جميع البيانات
              المطلوبة أدناه بحيث يمكنكم رفع أكثر من صورة أو فيديو , وبعد إرسال
              العقار سيقوم مستشارك العقاري بالتواصل معكم عن طريق معلومات التواصل
              المزودة من قبلكم. في حال احتجتم إلى مساعدة أخرى يمكنكم زيارة صفحة
              تواصل معنا و التحدث مع أحد مستشاري مساكن عريب.
            </Text>
          </Box>
        </Box>

        <VStack
          as="form"
          spacing={8}
          w="100%"
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack
              w="100%"
              spacing={3}
              className="font-cairo"
              direction={{ base: "column", md: "row" }}
            >
              <FormControl id="name">
                <FormLabel>الاسم </FormLabel>
                <Input type="text" placeholder="اسمك الكامل" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <Stack
              w="100%"
              spacing={3}
              className="font-cairo"
              direction={{ base: "column", md: "row" }}
            >
              <FormControl id="phone">
                <FormLabel>رقم الهاتف </FormLabel>
                <Input type="number" placeholder="0500000" rounded="md" />
              </FormControl>
              <FormControl id="type">
                <FormLabel>نوع العقار </FormLabel>
                <Input
                  type="text"
                  placeholder="فلة - ارض - مخطط"
                  rounded="md"
                />
              </FormControl>
            </Stack>
            <Stack
              w="100%"
              spacing={3}
              className="font-cairo"
              direction={{ base: "column", md: "row" }}
            >
              <FormControl id="Hai">
                <FormLabel>الحي </FormLabel>
                <Input type="number" rounded="md" />
              </FormControl>
              <FormControl id="Mokhatat">
                <FormLabel>رقم المخطط </FormLabel>
                <Input type="text" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="message">
              <FormLabel className="font-cairo">التفاصيل</FormLabel>
              <Textarea
                size="lg"
                placeholder="فضلاَ اكتب التفاصيل"
                rounded="md"
              />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: "green.500",
              }}
              rounded="md"
              className="font-cairo"
              w={{ base: "100%", md: "max-content" }}
            >
              إرسـال
            </Button>
          </VStack>
        </VStack>
      </Container>
    </div>
  );
};

export default advertise;
