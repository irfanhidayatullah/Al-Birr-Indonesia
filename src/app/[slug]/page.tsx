import { getEntriesByServicesSlug } from "@/libs/contentful";
import { Box, Container, Image, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { FC } from "react";

interface ServicesBySlug {
  params: { slug: string };
}

const serviceDetail: FC<ServicesBySlug> = async ({ params }) => {
  const serviceDetail = await getEntriesByServicesSlug(params.slug);
  console.log("ini adalah service", serviceDetail);

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <Text fontSize="35px" fontWeight="semibold"  mt="20px">
            {children}
          </Text>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList spacing={"8px"} fontSize="20px">{children}</UnorderedList>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text mt="10px" fontSize="20px">{children}</Text>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <OrderedList mt="10px" fontSize="20px">{children}</OrderedList>;
      },
    },
  };

  return (
    <Box>
      <Container maxW="7xl" mt="50px" maxH="100%">
        <Image
          src={serviceDetail?.logoServices.fields.file.url}
          margin="auto"
          h="150px"
          borderRadius="20px"
        ></Image>
        <Box mt="30px">
          {documentToReactComponents(
            serviceDetail?.servicesDetail,
            RICHTEXT_OPTIONS
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default serviceDetail;
