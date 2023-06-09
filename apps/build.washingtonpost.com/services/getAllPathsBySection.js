import fs from "fs";
import globby from "globby";
import path from "path";

export const getAllPathsBySection = async (input) => {
  const folder = path.join(process.cwd(), `docs/${input}`);

  const paths = fs
    .readdirSync(folder)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return paths;
};

export const getAllPathsByCategory = async (input) => {
  const folder = path.join(process.cwd(), `docs/${input}`);

  const files = await globby(`${folder}/**/*.mdx`);

  const paths = files.map((file) => {
    const path = file.split("docs/resources")[1].replace(/\.mdx?$/, "");
    let category = "";
    let slug = path;

    if (!!path.match(/\/[a-z]+\//g)) {
      category = path.match(/\/[a-z]+\//g)[0].replace(/\//g, "");
      slug = path.replace(/\/[a-z]+\//g, "");
    }

    return {
      params: {
        category,
        slug: slug.replace(/\//g, ""),
      },
    };
  });

  return paths;
};
