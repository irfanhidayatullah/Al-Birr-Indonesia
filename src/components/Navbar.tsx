import { Box, Container, Flex, Grid, Image } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box bgColor="#e2e8f0" pos="fixed" w="100%" zIndex="999">
      <Container maxW="7xl">
        <Grid py="9px">
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Image src="/Logo_AlBirrIndonesia.png" maxH="45px"></Image>
            </Link>
            <Flex gap={6}>
              <Link href="/">Beranda</Link>
              <Link href="/aboutUs">Tentang</Link>
              <Link href="/services">Layanan</Link>
              <Link href="/teams">Tim</Link>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
