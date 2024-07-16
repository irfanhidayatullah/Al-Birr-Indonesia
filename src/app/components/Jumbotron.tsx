import { getEntriesByWelcoming } from "@/libs/contentful";
import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Jumbotron = async () => {
  const welcoming = await getEntriesByWelcoming();
  return (
    <Box>
      <Container maxW="7xl">
        <Grid maxH={{ md: "500px" }} pt="75px">
          <GridItem textAlign="center" alignContent="center">
            <Image
              m="auto"
              maxW={{ base: "250px", md: "500px" }}
              src={welcoming?.[0]?.imageWelcoming.fields.file.url}
            ></Image>
            <Text fontSize={{ base: "55px", md: "35px" }} pt={7} pb={3}>
              {welcoming?.[0]?.taglinewelcoming}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Jumbotron;
