import { getEntriesByWelcoming } from "@/libs/contentful";
import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Jumbotron = async () => {
  const welcoming = await getEntriesByWelcoming();
  return (
    <Box>
      <Container maxW="7xl" pt={{base: "40px", md: "70px"}}>
        <Grid maxH={{ md: "500px" }}>
          <GridItem textAlign="center" alignContent="center">
            <Image
              m="auto"
              maxW={{ base: "200px", md: "500px" }}
              src={welcoming?.[0]?.imageWelcoming.fields.file.url}
            ></Image>
            <Text fontSize={{ base: "25px", md: "35px" }} pt={7} pb={3}>
              {welcoming?.[0]?.taglinewelcoming}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Jumbotron;
