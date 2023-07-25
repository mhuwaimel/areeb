import { Fragment } from "react";
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
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Seo from "@/components/common/Seo";
import { NextSeo } from "next-seo";
const contactOptions = [
  {
    label: "العنوان",
    value: "الرياض ,حي العارض - شارع إبراهيم الصديقي 7626 ",
    icon: GoLocation,
  },
  {
    label: "الاتصال",
    value: "+966537621261",
    icon: BsPhone,
  },
  {
    label: "البريد الالكتروني",
    value: "info@MAreeb.com",
    icon: HiOutlineMail,
  },
];

const Contact = () => {
  const colorBrand = useColorModeValue("#4c5353", "#F2F4CD");
  return (
    <>
      <Seo pageTitle={"تواصل معنا"}></Seo>
      <NextSeo
        title=" تواصل معنا "
        description="مساكن عريب الغقارية |  تواصل معنا"
        openGraph={{
          type: "",

          url: "whttps://mareeb.vercel.app/contact",
          images: {
            url: "https://mareeb.vercel.app/images/img/kitchen-2400367_1920.jpg",
            width: 800,
            height: 600,
            alt: "مساكن عريب الغقارية | مشاريعنا العقارية",
          },
          site_name: "مساكن عريب العقارية",
        }}
      />
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
        <Stack spacing={10}>
          <Flex align="center" justify="center" direction="column">
            <Heading fontSize="4xl" mb={2}>
              <Text className="font-tajawal">تواصل معنا</Text>
            </Heading>
            <Text
              fontSize="md"
              size={"xs"}
              className="font-cairo"
              textAlign="center"
            >
              فريق عمل مساكن عريب جاهز لتقديم الخبرة و النصيحة العقارية في كل ما
              يتعلق بالقطاع العقاري في مدينة الرياض. نرجو تعبئة النموذج أدناه
              وسيتم التواصل معكم من قبل مستشار مساكن عريب.
            </Text>
          </Flex>
          <Stack
            spacing={{ base: 6, md: 0 }}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            {contactOptions.map((option, index) => (
              <Fragment key={index}>
                <Stack
                  spacing={3}
                  direction="column"
                  justify="center"
                  alignItems="center"
                  px={3}
                >
                  <Icon as={option.icon} w={10} h={10} color={colorBrand} />
                  <Text
                    fontSize="lg"
                    className="font-changa"
                    fontWeight="semibold"
                  >
                    {option.label}
                  </Text>
                  <Text
                    fontSize="md"
                    className="font-changa"
                    textAlign="center"
                  >
                    {option.value}
                  </Text>
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex d={{ base: "none", md: "flex" }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          </Stack>
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            mt={3}
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
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    rounded="md"
                  />
                </FormControl>
              </Stack>
              <FormControl id="subject">
                <FormLabel className="font-cairo">الموضوع</FormLabel>
                <Input type="text" placeholder="استشارة" rounded="md" />
              </FormControl>
              <FormControl id="message">
                <FormLabel className="font-cairo">الرسالة</FormLabel>
                <Textarea
                  size="lg"
                  placeholder="فضلاَ اكتب رسالتك"
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
        </Stack>
      </Container>
    </>
  );
};

export default Contact;
