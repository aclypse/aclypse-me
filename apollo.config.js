module.exports = {
  client: {
    name: "aclypse-me",
    tagName: "graphql",
    includes: [
      "./src/**/*.{ts,tsx}",
      "./src/generated/gatsby-plugin-documents.graphql",
    ],
    service: {
      name: "GatsbyJS",
      localSchemaFile: "./src/generated/gatsby-schema.graphql",
    },
  },
};
