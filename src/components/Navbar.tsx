"use client";

import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bgColor="#e2e8f0" pos="sticky" zIndex="999">
      <Container maxW={{ base: "xl", md: "7xl" }}>
        <Grid py="9px">
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Image src="/Logo_AlBirrIndonesia.png" maxH="45px"></Image>
            </Link>
            <Flex display={{ base: "none", md: "flex" }} gap={6}>
              <Link href="/">Beranda</Link>
              <Link href="/aboutUs">Tentang</Link>
              <Link href="/services">Layanan</Link>
              <Link href="/teams">Tim</Link>
            </Flex>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              bgColor="#e2e8f0"
              icon={<GiHamburgerMenu />}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
            />
          </Flex>
        </Grid>
      </Container>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={6} mt="24px">
                <Link href="/" onClick={onClose}>
                  Beranda
                </Link>
                <Link href="/aboutUs" onClick={onClose}>
                  Tentang
                </Link>
                <Link href="/services" onClick={onClose}>
                  Layanan
                </Link>
                <Link href="/teams" onClick={onClose}>
                  Tim
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
