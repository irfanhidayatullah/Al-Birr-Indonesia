import { getEntriesByServices } from "@/libs/contentful";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const ServicesMP = async () => {
  const servicesMainPages = await getEntriesByServices();

  return (
    <Box>
      <Container maxW="7xl" mt={{base:"50px"}} minH='100vh'>
        <Flex justify="center" alignItems="center" h="full">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            justifyContent="center"
            gap={6}
          >
            {servicesMainPages?.map((servicesMainPage, index) => {
              return (
                <GridItem key={index}>
                  <Card>
                    <CardBody>
                      <Image
                        src={servicesMainPage.logoServices.fields.file.url}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">
                          {servicesMainPage.descriptionBrand}
                        </Heading>
                        <Text noOfLines={3}>
                          {servicesMainPage.abstractChildCompany}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Link href={servicesMainPage.waLink} target="_blank">
                          <Button
                            variant="solid"
                            bgColor="#4285f6"
                            color="white"
                          >
                            Hubungi Kami
                          </Button>
                        </Link>
                        <Link href={servicesMainPage.slug}>
                          <Button variant="ghost" color="#4285f6">
                            Lihat Detail
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesMP;
