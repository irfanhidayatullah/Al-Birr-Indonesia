import Button from "@/components/Button";
import { getEntriesByAbstract } from "@/libs/contentful";
import { Box, Container, Grid, Text } from "@chakra-ui/react";

const Abstract = async () => {
  const abstract = await getEntriesByAbstract();
  return (
    <Box>
      <Container maxW="7xl" maxH={{ md: "500px" }}>
        <Grid justifyItems="center" h="300px" margin="auto">
          <Text px="100px" textAlign="justify">{abstract?.[0]?.abstract}</Text>
          <Button href="/aboutUs" mt="-30px" bgColor="#4285f6" color="white">Lihat Detail</Button>
        </Grid>
      </Container>
    </Box>
  );
};
export default Abstract;
