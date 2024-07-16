import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Grid border="1px solid black" mt="50px">
          <Heading textAlign="center">Our Services</Heading>
          <GridItem>
            <Text>Al-Birr Klambi: Logo + Name + descripton, link ke rich text</Text>
          </GridItem>
          <GridItem>
            <Text>AB T-Shirt: Logo + Name + descripton, link ke rich text</Text>
          </GridItem>
          <GridItem>
            <Text>M66 T-Shirt: Logo + Name + descripton, link ke rich text</Text>
          </GridItem>
          <GridItem>
            <Text>Al-Birr Transportation: Logo + Name + descripton, link ke rich text</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
