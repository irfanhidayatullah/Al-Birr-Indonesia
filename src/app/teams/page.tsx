"use client";

import {
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  console.log(teamMembers);

  useEffect(() => {
    const getRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomUser();
  }, []);
  return (
    <Container maxW={{base:"xl", md: "7xl"}} pt="100px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          justifyContent="center"
          gap={4}
        >
          {teamMembers?.map((member, index) => {
            return (
              <GridItem key={index} maxW="300px">
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
