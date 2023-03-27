const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const slugify = require("slugify");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "Mdx" ||
    node.internal.type === "Md" ||
    node.internal.type === "MarkdownRemark"
  ) {
    // .substring(12) - removes date from slug
    // 2020-10-24-first -> first
    const value = createFilePath({ node, getNode }).substring(12);

    const nodeType =
      node.internal.contentFilePath.includes("/portfolio/") > 0
        ? "portfolio"
        : "projects";

    createNodeField({
      name: "slug",
      node,
      value: `/${nodeType}/${slugify(value)}`,
    });

    createNodeField({
      name: "type",
      node,
      value: nodeType,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const projectPage = path.resolve("./src/components/project-item.tsx");
  const portfolioPage = path.resolve("./src/components/portfolio-item.tsx");

  const mdxResult = await graphql(`
    query AllMdx {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              type
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (mdxResult.errors) {
    console.error(mdxResult.errors);
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const content = mdxResult.data.allMdx.edges;

  content.forEach(({ node }) => {
    if (node.fields.type === "projects") {
      createPage({
        path: `${node.fields.slug}`,
        component: `${projectPage}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      });
    }

    if (node.fields.type === "portfolio") {
      createPage({
        path: `${node.fields.slug}`,
        component: `${portfolioPage}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id },
      });
    }
  });
};
