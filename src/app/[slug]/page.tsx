import { getEntriesByServicesSlug } from "@/libs/contentful";
import { FC } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Box, Container, Image, Table, Text, UnorderedList } from "@chakra-ui/react";
import ServicesMP from "../components/ServicesMP";

interface ServicesBySlug {
  params: { slug: string };
}

const serviceDetail: FC<ServicesBySlug> = async ({ params }) => {
  const serviceDetail = await getEntriesByServicesSlug(params.slug);

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <Text fontSize={"25px"} fontWeight="semibold">
            {children}
          </Text>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList spacing={"8px"}>{children}</UnorderedList>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text mt="10px">{children}</Text>;
      },
    },
  };

  return (
    <Box>
      <Container maxW="7xl" mt="70px" h="700px">
        <Image src={serviceDetail?.logoServices.fields.file.url} margin='auto' h="100px" borderRadius="20px"></Image>
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
