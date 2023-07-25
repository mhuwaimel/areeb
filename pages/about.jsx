import {
  Container,
  Box,
  chakra,
  Text,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
  MdOutlinePersonPin,
  MdPermDeviceInformation,
  MdOutlineFlashlightOn,
} from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { PiExcludeBold } from "react-icons/pi";
import { SiSololearn } from "react-icons/si";
import Seo from "@/components/common/Seo";

const features = [
  {
    heading: "الملكية والنشاط",
    content:
      "نــــرســــــــــم مستــــقـــــــبــــــل المــجـــتمـعـــات العــمـــرانــيــة بحلـوة مبتـكـرة ومـستدامة",
    icon: TbActivityHeartbeat,
  },
  {
    heading: "المكتسبات",
    content: `اكتسبت قاعدة علاقات محلية وإقليمية وعالمية، نالت خلالها العديد من الجوائز كأفضل مطور عقاري، كما أنجزت مشاريع عقارية نوعية بمجالاتٍ مختلفة وقامت سمو من عام 2008م بتطوير نحو 7 ملايين متر مربع من الأراضي وتعمل حالياً على تنفيذ مشروعات تمتد على مساحة ٤٥ مليون متر مربع.`,
    icon: SiSololearn,
  },
  {
    heading: "التفرد والتميز",
    content:
      "تفــــــردت بقدرتهــــــا علـــــى الابتكار والإبــــداع بمجــــال التطــــوير، أنجزت مشاريع عقارية نوعية بمجالات مختلفة، كما تميزت في كونها تقدم منظومة تطويرية متكاملة بــــدءاً مـــــن دراســـــة الفـــــرص مروراً بالتخطيط والهندسة، التخطيـــط المالـــــــي، اســـــتراتيجية التســــويق، التنفيذ بإدارة مهنية واحترافية، وصولاً لمرحلة تسليم المشروع.",
    icon: PiExcludeBold,
  },
  {
    heading: "الآمال والطموحات",
    content: `تعمل حالياً على تطوير مشاريع ضخمـــــــة متعـــددة الاستخدامات تلبي متطلبات وتطلعات العملاء والمستثـــــــمرين بشــــــكلٍ خـــــــاص وتـــهدف لتحقيـــــــق احتياجـــــــات المجتمع والأجيــال القادمة بشكلٍ عام.`,
    icon: MdOutlinePersonPin,
  },
];
import { NextSeo } from "next-seo";

const Features = () => {
  const colorBrand = useColorModeValue("#4c5353", "#F2F4CD");
  return (
    <>
      <NextSeo
        title="  تعرف علينا "
        description="مساكن عريب الغقارية |   تعرف علينا"
        openGraph={{
          type: "",

          url: "whttps://mareeb.vercel.app/about",
          images: {
            url: "https://mareeb.vercel.app/images/kitchen-2400367_1920.jpg",
            width: 800,
            height: 600,
            alt: "مساكن عريب الغقارية |   تعرف علينا",
          },
          site_name: "مساكن عريب العقارية",
        }}
      />
      <Seo pageTitle={"تعرف علينا"} />
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <chakra.h3
          className="font-almarai"
          fontSize="4xl"
          fontWeight="bold"
          mb={3}
          textAlign="center"
        >
          تعرف علينا
        </chakra.h3>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          placeItems="center"
          spacing={16}
          mt={12}
          mb={4}
        >
          {features.map((feature, index) => (
            <Box key={index} textAlign="center">
              <Icon as={feature.icon} w={10} h={10} color={colorBrand} />
              <chakra.h3
                className="font-cairo"
                fontWeight="semibold"
                fontSize="2xl"
              >
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md">{feature.content}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Features;
