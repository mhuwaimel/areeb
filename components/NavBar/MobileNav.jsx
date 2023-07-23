import {
  Box,
  Badge,
  Flex,
  HStack,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerBody,
  Icon,
  Text,
  useDisclosure,
  Button,
  Image,
  useToast,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import NavLink from "./NavLink";
import { links } from "@/data";
import { useRef } from "react";

const MobileNav = ({
  width,
  placement = "right",
  children,
  title = "Menu",
  footer,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex className="md:hidden" display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen} variant="none">
        <IoMdMenu size="26px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        modifiers={[
          { name: "preventOverflow", options: { padding: 8 } },
          { name: "flip", options: { padding: 8 } },
        ]}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton
            alignSelf="end"
            px={8}
            py={8}
            _hover={{ backgroundColor: "none" }}
          />
          <DrawerBody pt={8}>
            <VStack alignItems="left">
              {links.map((item, i) => (
                <NavLink
                  key={item.linkName}
                  path={item.path}
                  color="brand.500"
                  alt={item.linkName}
                >
                  {item.linkName}
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default MobileNav;
