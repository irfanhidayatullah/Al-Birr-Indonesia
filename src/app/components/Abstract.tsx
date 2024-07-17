import Button from "@/components/Button";
import { getEntriesByAbstract } from "@/libs/contentful";
import { Box, Container, Grid, Text } from "@chakra-ui/react";

const Abstract = async () => {
  const abstract = await getEntriesByAbstract();
  return (
    <Box>
      <Container maxW="7xl" maxH={{ md: "500px" }}>
        <Grid justifyItems="center" margin="auto">
          <Text px={{ md: "100px" }} textAlign="justify" noOfLines={3}>
            {abstract?.[0]?.abstract}
          </Text>
          <Button href="/aboutUs" bgColor="#4285f6" color="white" mt="20px">
            Lihat Detail
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};
export default Abstract;
