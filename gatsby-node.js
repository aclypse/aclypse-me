const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const slugify = require("slugify");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    // .substring(12) - removes date from slug
    // 2020-10-24-first -> first
    const value = createFilePath({ node, getNode }).substring(12);

    createNodeField({
      name: "slug",
      node,
      value,
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
            }
            fileAbsolutePath
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
    if (node.fileAbsolutePath.lastIndexOf("projects") < 0) {
      createPage({
        path: `/project/${node.fields.slug}`,
        component: projectPage,
        context: { id: node.id },
      });
    }

    if (node.fileAbsolutePath.lastIndexOf("portfolio") < 0) {
      createPage({
        path: `/portfolio/${node.fields.slug}`,
        component: portfolioPage,
        context: { id: node.id },
      });
    }
  });
};
