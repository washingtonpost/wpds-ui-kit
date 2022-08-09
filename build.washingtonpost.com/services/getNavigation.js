import { getDocsListBySection } from ".";

const cache = new Map();

export const getNavigation = async () => {
  let navData = [];

  if (cache.has("nav")) {
    navData = cache.get("nav");
  } else {
    const foundationDocs = await getDocsListBySection("foundations");
    const componentDocs = await getDocsListBySection("components");

    // filter out content from docs

    const foundationDocsList = foundationDocs.map((doc) => {
      const { data, content, slug, filePath } = doc;

      return {
        data: {
          title: data?.title || "",
          order: data?.order || null,
          status: data?.status || "",
        },
        slug,
        filePath,
      };
    });

    const componentDocsList = componentDocs.map((doc) => {
      const { data, content, slug, filePath } = doc;

      return {
        data: {
          title: data?.title || "",
          order: data?.order || null,
          status: data?.status || "",
        },
        slug,
        filePath,
      };
    });

    navData = [
      {
        sortItems: true,
        category: "Foundations",
        docs: foundationDocsList,
      },
      {
        category: "Components",
        docs: componentDocsList,
      },
    ];

    // add to cache
    cache.set("nav", navData);
  }

  return navData;
};
