/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const pagePaths = await globby(["pages/**/*.js", "!pages/_*.js"]);
  const pageRoutes = pagePaths
    .filter(
      (pagePath) => !pagePath.includes("/[") && !pagePath.includes("/test"),
    )
    .map((pagePath) =>
      pagePath.replace("pages", "").replace(".js", "").replace("/index", ""),
    );

  const paths = await globby(["docs"]);
  const docs = paths.map((postPath) => {
    return postPath.replace("docs", "").replace(".mdx", "");
  });

  const allRoutes = [...pageRoutes, ...docs].sort();

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
      <url>
      <loc>${`https://build.washingtonpost.com${route}`}</loc>
      </url>
      `;
    })
    .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);

  console.log("Sitemap generated");
})();
