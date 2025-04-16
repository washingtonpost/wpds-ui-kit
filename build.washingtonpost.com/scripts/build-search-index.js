const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const DOCS_DIR = path.join(__dirname, "../docs");
const OUTPUT_FILE = path.join(__dirname, "../public/search-index.json");

/**
 * Extract plain text from MDX content without rendering
 * This is a simpler approach that doesn't require JSX parsing
 */
function extractTextFromMdx(content) {
  // Remove code blocks
  let text = content.replace(/```[\s\S]*?```/g, "");

  // Remove import statements
  text = text.replace(/import[\s\S]*?from\s+['"].*?['"]\s*;?/g, "");

  // Remove JSX tags
  text = text.replace(/<[^>]*>/g, " ");

  // Remove Markdown headings
  text = text.replace(/#{1,6}\s+(.*)/g, "$1");

  // Remove Markdown links but keep link text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // Remove Markdown image syntax
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, "");

  // Remove special Markdown characters
  text = text.replace(/[*_~`]/g, "");

  // Normalize whitespace
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

/**
 * Build search index from MDX files
 */
async function buildSearchIndex() {
  const mdxFiles = glob.sync(`${DOCS_DIR}/**/*.mdx`);
  const searchIndex = [];

  for (const file of mdxFiles) {
    try {
      const content = fs.readFileSync(file, "utf-8");
      const { data: frontmatter, content: mdxContent } = matter(content);

      const relativePath = path.relative(DOCS_DIR, file);
      const url = `/${relativePath.replace(/\.mdx$/, "")}`;

      // Extract text without JSX rendering
      const plainText = extractTextFromMdx(mdxContent);

      searchIndex.push({
        title: frontmatter.title || "",
        description: frontmatter.description || "",
        kicker: frontmatter.kicker || "",
        content: plainText,
        url,
        path: relativePath,
      });

      console.log(`Indexed: ${relativePath}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // Write the search index to a JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2));
  console.log(`Search index built with ${searchIndex.length} documents`);
}

buildSearchIndex().catch(console.error);
