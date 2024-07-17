import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor="#e2e8f0">
      <Container maxW={{base:"xl", md: "7xl"}} mt="75px">
        <Flex gap={5} py={3} justify="center">
          <Image src="/Logo_AlBirrIndonesia.png" maxH="25px"></Image>
          <Text>+62 851 5677 3001</Text>
        </Flex>
        <Divider mb={3} borderColor="#000000" borderWidth="1.3px" />
        <Flex justify="center" pb={3}>
          Copyright © 2024 Al-Birr Indonesia
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
