import { getEntriesByServicesSlug } from "@/libs/contentful";
import { FC } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Box } from "@chakra-ui/react";

interface ServicesBySlug {
  params: { slug: string };
}

const serviceDetail: FC<ServicesBySlug> = async ({ params }) => {
  const serviceDetail = await getEntriesByServicesSlug(params.slug);

  return <Box>{documentToReactComponents(serviceDetail?.servicesDetail)}</Box>;
};

export default serviceDetail;
