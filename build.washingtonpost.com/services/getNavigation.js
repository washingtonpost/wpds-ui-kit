import { getDocsListBySection, getResourcesCategories } from ".";

const cache = new Map();

export const getNavigation = async () => {
  let navData = [];

  if (cache.has("nav")) {
    navData = cache.get("nav");
  } else {
    const foundationDocs = await getDocsListBySection("foundations");
    const componentDocs = await getDocsListBySection("components");
    const accessibilityDocs = await getDocsListBySection("accessibility");
    const resourceCategories = await getResourcesCategories("resources");

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

    const accessibilityDocsList = accessibilityDocs.map((doc) => {
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

    const resourceCategoriesList = resourceCategories
      .map((category) => {
        const { data, content, slug, filePath } = category;
        return {
          data: {
            title: `${data?.kicker}` || "",
            order: data?.order || null,
            status: data?.status || "",
          },
          slug,
          filePath: "",
        };
      })
      .sort((a, b) => {
        // alpha sort
        return a.data.title.localeCompare(b.data.title);
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
      {
        category: "Accessibility",
        docs: accessibilityDocsList,
      },
      {
        category: "Resources",
        docs: resourceCategoriesList,
      },
    ];

    // add to cache
    cache.set("nav", navData);
  }

  return navData;
};
