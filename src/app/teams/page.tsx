"use client";

import {
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getRandomUser();
  }, []);

  if (loading) {
    return (
      <Container maxW="7xl" mt="50px" minH="100vh">
        <Flex justify="center" align="center" mt="50vh">
          <Spinner speed="1s" />
        </Flex>
      </Container>
    );
  } else
    return (
      <Container maxW="7xl" mt="30px" minH="100vh">
        <Text fontSize="45px" fontWeight="semibold" mb="20px" align="center">
          Tim Kami
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={3}
        >
          {teamMembers?.map((member, index) => {
            return (
              <GridItem key={index}>
                <Card align="center">
                  <CardBody>
                    <Flex direction="column" justify="center" align="center">
                      <Image
                        src={member.picture.large}
                        borderRadius="lg"
                        h="150px"
                        w="150px"
                        objectFit="cover"
                      />
                      <Text fontWeight="semibold" mt="10px" textAlign="center">
                        {member.name.title}. {member.name.first}{" "}
                        {member.name.last}
                      </Text>
                      <Text>{member.email}</Text>
                    </Flex>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    );
};

export default Teams;
