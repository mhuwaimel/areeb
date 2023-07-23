import * as React from "react";

import {
  Show,
  Flex,
  useColorMode,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowDownIcon,
  EmailIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { nav_links } from "@/data";
import ThemeToggleButton from "../UI/ThemeToggleButton";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

export default function MobileHeaderComponent({
  isOpen,
  onClose,
  activeHref,
  setActiveHref,
}) {
  const pathname = usePathname();
  const colorBrand = useColorModeValue("#4c5353", "#F2F4CD");
  return (
    <Show below="xl">
      {/* Mobile Header Navigation Overlay */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="top" size="full">
        <DrawerContent
          backgroundColor={useColorModeValue("#F2F4CD", "gray.700")}
          paddingY={4}
          className="font-alexandria"
        >
          <DrawerCloseButton
            size="lg"
            color={useColorModeValue("#4c5353", "#F2F4CD")}
          />
          <DrawerHeader />
          <DrawerBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              height="full"
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowGap="6"
                className="font-alexandria"
              >
                {nav_links.map(({ title, href }, index) => (
                  <Link
                    key={`${title} - ${index}`}
                    href={`${href}`}
                    className={`font-alexandria border-b-2 border-transparent ${
                      pathname === href ? "active" : ""
                    }`}
                    color={colorBrand}
                    fontWeight="medium"
                    fontSize={{ base: "1rem", md: "1.25rem" }}
                    _hover={{
                      color: "primary",
                    }}
                  >
                    {title}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <div className="flex items-center justify-center p-5">
              <ThemeToggleButton></ThemeToggleButton>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Show>
  );
}
