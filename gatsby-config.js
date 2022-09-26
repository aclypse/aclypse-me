const dotenv = require("dotenv");
dotenv.config();

const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(min-width: 321px) and (max-width: 720px)",
  md: "(min-width: 721px) and (max-width: 1024px)",
  l: "(min-width: 1025px) and (max-width: 1536px)",
  xl: "(min-width: 1537px)",
};

module.exports = {
  siteMetadata: {
    title: "Diana Mykhaylova - Graphic Designer",
    description: "Work and Life",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./projects/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: "./portfolio/",
      },
    },
    {
      resolve: "gatsby-plugin-tsconfig-paths",
      options: {
        baseUrl: "./src",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "./src/generated/gatsby-types.d.ts",
        emitSchema: {
          "./src/generated/gatsby-schema.graphql": true,
          "./src/generated/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "./src/generated/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/typography-config",
        omitGoogleFont: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-reading-time"],
      },
    },
  ],
};
