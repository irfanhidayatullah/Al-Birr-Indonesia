import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
});

export const getEntriesByWelcoming = async () => {
  const response = await client.getEntries({
    content_type: "companyProfileWelcoming",
  });

  try {
    const companyProfileWelcoming = response.items.map(
      (companyProfileWelcoming: any) => {
        return {
          imageWelcoming: companyProfileWelcoming.fields.logoAlBirr,
          taglinewelcoming: companyProfileWelcoming.fields.TaglineAlBirr,
        };
      }
    );
    return companyProfileWelcoming;
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByAbstract = async () => {
  const response = await client.getEntries({ content_type: "abstract" });

  try {
    const abstractcompany = response.items.map((abstract: any) => {
      return {
        abstract: abstract.fields.abstract,
      };
    });
    return abstractcompany;
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByServices = async () => {
  const response = await client.getEntries({ content_type: "servicesMp" });

  try {
    const servicescompany = response.items.map((servicesMp: any) => {
      return {
        logoServices: servicesMp.fields.logoServices,
        descriptionBrand: servicesMp.fields.descriptionBrand,
        servicesDetail: servicesMp.fields.servicesDetail,
        slug: servicesMp.fields.slug,
        abstractChildCompany: servicesMp.fields.abstractChildCompany,
        waLink: servicesMp.fields.waLink,
      };
    });
    return servicescompany;
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByServicesSlug = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: "servicesMp",
      "fields.slug": slug,
    });

    const servicescompany = response.items.map((servicesMp: any) => {
      return {
        logoServices: servicesMp.fields.logoServices,
        descriptionBrand: servicesMp.fields.descriptionBrand,
        servicesDetail: servicesMp.fields.servicesDetail,
        slug: servicesMp.fields.slug,
        abstractChildCompany: servicesMp.fields.abstractChildCompany,
        waLink: servicesMp.fields.waLink,
      };
    });
    return servicescompany[0];
  } catch (error) {
    console.log(error);
  }
};

export const getEntriesByAboutUs = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: "companyProfileAboutUs",
    });

    const aoutCompany = response.items.map((servicesMp: any) => {
      return {
        logoServices: servicesMp.fields.logoServices,
      };
    });
    return aoutCompany;
  } catch (error) {
    console.log(error);
  }
};
