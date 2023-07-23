import { links } from "@/data";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
const NavLink = ({ path, children }) => {
  const { pathname } = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      as={NextLink}
      href={path}
      px={2}
      py={2}
      fontSize="xl"
      fontWeight="semibold"
      textTransform="uppercase"
      variant="none"
      _activeLink={{ color: "brand.400" }}
      _hover={{ textDecoration: "none", color: "brand.400" }}
      fontFamily="heading"
    >
      <Box>{children}</Box>
    </Link>
  );
};
export default NavLink;
