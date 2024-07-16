import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      <Container maxW="7xl">
        <Grid templateColumns="repeat (2, 1fr)">
          <GridItem>
            <Text>GRID 1, KIRI: About Us -- History-milestones, Teams-a brief description of their experience, & Culture -- company's values and what makes it unique --</Text>
            <Text>Detail 1: Founded - Menampilkan Angka di atas </Text>
            <Text>Detail 2: Jumlah Vendor - Menampilkan Angka di atas </Text>
            <Text>Detail 2: Projects Done - Menampilkan Angka di atas </Text>
            <Text>Detail 2: Jumlah 5-Stars Review - Menampilkan Angka di atas </Text>
          </GridItem>
          <GridItem>
            <Text>GRID 2, KANAN: Foto GW</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
