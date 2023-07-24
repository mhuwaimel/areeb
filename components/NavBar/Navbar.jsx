import * as React from "react";

import {
  Box,
  Container,
  Flex,
  Hide,
  Show,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import MobileHeaderComponent from "./MobileHeaderComponent";
import { nav_links } from "@/data";
import ThemeToggleButton from "../UI/ThemeToggleButton";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import NextLink from "next/link";
export default function NavBar() {
  const colorBrand = useColorModeValue("#4c5353", "#F2F4CD");
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeNavigationLink, setActiveNavigationLink] =
    React.useState("home");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const onClickHandleActiveNavigation = (href) => {
    setActiveNavigationLink(href);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  return (
    <React.Fragment>
      <Box
        as="header"
        shadow={isScrolled ? "lg" : "none"}
        top={0}
        left={0}
        right={0}
        position="fixed"
        backdropFilter={{
          base: "none",
          lg: isScrolled ? "blur(1.25rem)" : "none",
        }}
        bg={useColorModeValue("white", "gray.700")}
        className="sticky top-0 left-0 w-full bg-white shadow-2xl shadow-black/20"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        transition="background-color 300ms"
      >
        {/* Header Container */}
        <Container
          width="100%"
          paddingX="1rem"
          maxWidth={{
            sm: "40rem",
            md: "48rem",
            lg: "75rem",
            xl: "82rem",
            "2xl": "98rem",
          }}
          height={{
            base: isScrolled ? "calc(3rem + 1rem)" : "calc(4rem + 1rem)",
            md: isScrolled ? "calc(4rem + 1rem)" : "calc(5rem + 1rem)",
          }}
          transition="all 300ms"
        >
          <Flex
            as="nav"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Header Logo */}
            <Logo></Logo>
            <Text
              display={{ base: "flex", md: "none" }}
              textAlign={useBreakpointValue({ base: "center" })}
              onClick={() => router.push("/")}
              mr={{ base: "2", md: "0" }}
              color={useColorModeValue("#4c5353", "#F2F4CD")}
              className="text-transparent cursor-pointer text-md font-alexandria md:text-xl bg-clip-text bg-gradient-to-r "
            >
              مساكن عريب العقارية
            </Text>
            {/* Header Navigation Link List (Laptop Devices Only) */}
            <Show above="xl">
              <Flex alignItems="center" columnGap="12" className="font-almarai">
                {nav_links.map(({ title, href }, index) => (
                  <Link
                    key={`${title} - ${index}`}
                    href={`${href}`}
                    className={` border-b-2 border-transparent ${
                      pathname === href ? "active" : ""
                    }`}
                    color={colorBrand}
                    fontWeight="medium"
                    fontSize="1.1rem"
                    scroll={false}
                    _hover={{
                      color: "primary",
                      textDecoration: "none",
                    }}
                    onClick={() => onClickHandleActiveNavigation(href)}
                  >
                    {title}
                  </Link>
                ))}
              </Flex>
            </Show>

            {/* Theme Toggle Button */}
            <Show above="xl">
              <Flex justifyContent="center" alignItems="center">
                <ThemeToggleButton color={{}}></ThemeToggleButton>
              </Flex>
            </Show>

            {/* Header Sidebar Links Open / Close Button */}
            <Hide above="xl">
              <Box
                as="button"
                padding="4"
                borderRadius="md"
                color={useColorModeValue("#4c5353", "#F2F4CD")}
                display="flex"
                fontSize={"x-large"}
                justifyContent="center"
                alignItems="center"
                transition="all 300ms"
                onClick={onToggle}
              >
                {isOpen ? <IoClose /> : <CgMenu />}
              </Box>
            </Hide>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Header Navigation (Tablet & Phone Only) */}
      <MobileHeaderComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        activeHref={activeNavigationLink}
        setActiveHref={setActiveNavigationLink}
      />
    </React.Fragment>
  );
}
