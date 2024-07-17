import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Wrap,
} from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Container maxW="7xl" h={{ md: "500px" }} mt="50px">
      <Container maxW="7xl" bgColor="#e2e8f0" borderRadius="full">
        <Text fontWeight="semibold" fontSize="3xl" align="center" py="10px">
          Testimoni
        </Text>
      </Container>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={5} pt="30px">
        <GridItem boxShadow="base" p="6" rounded="md" bg="white" mt="10">
          <Box>
            <Wrap justify="center">
              <Avatar
                name="Andi Suwandi"
                size="xl"
                mt="-15%"
                src="/Andi Suwandi.png"
              />
            </Wrap>
            <Text
              pt="10px"
              fontSize="20px"
              fontWeight="semibold"
              align="center"
            >
              Andi Suwandi
            </Text>
            <Text fontSize="17px" align="center">
              Customer Al-Birr Klambi
            </Text>

            <Flex flexDir="column" justify="space-between" h="200px" pb="4">
              <Text fontSize="17px" align="center" pt="5">
                "Terimakasih Harga sesuai pelayanan Ramah"
              </Text>

              <Text align="center">
                Ulasan dari{" "}
                <Text
                  as="span"
                  bgColor="#3a985a"
                  p="2"
                  color="white"
                  rounded="xl"
                >
                  Google
                </Text>
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" p="6" rounded="md" bg="white" mt="10">
          <Box>
            <Wrap justify="center">
              <Avatar
                name="Catherine and Ian"
                size="xl"
                mt="-15%"
                src="/Catherine and Ian_ABT.png"
              />
            </Wrap>
            <Text
              pt="10px"
              fontSize="20px"
              fontWeight="semibold"
              align="center"
            >
              Catherine and Ian
            </Text>
            <Text fontSize="17px" align="center">
              Customer Al-Birr Transportation
            </Text>

            <Flex flexDir="column" justify="space-between" h="200px" pb="4">
              <Text fontSize="17px" align="center" pt="5">
                "Excellent Service, Excellent Driver, We are the grateful. That was amazing!"
              </Text>

              <Text align="center">
                Ulasan dari{" "}
                <Text
                  as="span"
                  bgColor="#4285f6"
                  p="2"
                  color="white"
                  rounded="xl"
                >
                  Video
                </Text>
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" p="6" rounded="md" bg="white" mt="10">
          <Box>
            <Wrap justify="center">
              <Avatar
                name="Nur Laili Rufi'i"
                size="xl"
                mt="-15%"
                src="/Nur Laili Rufi'i.png"
              />
            </Wrap>
            <Text
              pt="10px"
              fontSize="20px"
              fontWeight="semibold"
              align="center"
            >
              Nur Laili Rufi'i
            </Text>
            <Text fontSize="17px" align="center">
              Customer Al-Birr Klambi
            </Text>

            <Flex flexDir="column" justify="space-between" h="200px" pb="4">
              <Text fontSize="17px" align="center" pt="5">
                "Owner baik banget, bagus kainnya"
              </Text>

              <Text align="center">
                Ulasan dari{" "}
                <Text
                  as="span"
                  bgColor="#3a985a"
                  p="2"
                  color="white"
                  rounded="xl"
                >
                  Google
                </Text>
              </Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Testimonials;
