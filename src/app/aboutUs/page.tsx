import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      <Container maxW="7xl" pt={{base: "40px", md: "100px"}}>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={6}>
          <GridItem w="100%">
            <Text fontSize="45px" fontWeight="semibold" mt="20px" align="center">Tentang Kami</Text>
            <Text align="justify" fontSize="20px" py="3" px="9">Perusahaan kami, Al-Birr Indonesia, adalah induk perusahaan yang membawahi Al-Birr Klambi, AB T-Shirt, M66 T-Shirt, dan Al-Birr Transportation. Berdiri sejak 1 Februari tahun 2019, bermula dari resto rumahan yang fokus pada penjualan di Go Food dan Grab Food. Meski hanya bertahan sekitar 9 bulan tidak lantas membuat founder pasrah begitu saja, mencoba peruntungan baru dengan memulai bisnis pada industri pakaian bernama Al-Birr Klambi pada akhir 2019 yang berfokus pada kualitas premium dan harga yang cukup terjangkau. Masih di industri yang sama, 9 bulan kemudian kami menciptakan merek baru bernama AB T-Shirt, dan disusul M66 T-Shirt 2 bulan kemudian ,untuk produk dengan harga yang lebih terjangkau. Di sisi lain keberadaan Al-Birr Indonesia yang berada di Kota Yogyakarta menjadi alasan utama ikut berperan sebagai pelaku wisata dengan membuat merek bernama Al-Birr Transportation pada tahun 2023 untuk mengakomodir kebutuhan transportasi wisatawan lokal dan mancanegara yang ingin berlibur di kota Yogyakarta dan sekitarnya.</Text>
          </GridItem>
          <GridItem w="100%" h="750px">
            <Image
              src="/AboutUs_CompanyProfile.png"
              borderRadius="full"
              maxH="600px"
              mx="auto"
              pt="20px"
            ></Image>
            <Text
              align="center"
              fontSize="45px"
              color="blakc"
              fontWeight="semibold"
            >
              Irfan H
            </Text>
            <Text align="center" fontSize="25px">
              Founder Al-Birr Indonesia
            </Text>
            <Text align="center" fontSize="19px" fontWeight="semibold">
              2019 - Saat ini
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
