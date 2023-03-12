const path = require("path");

module.exports = {
  extends: [
    "react-app",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
    "plugin:mdx/recommended",
  ],
  plugins: ["react", "css-modules", "prettier", "graphql", "mdx"],
  rules: {
    "prettier/prettier": "error",
    "graphql/template-strings": [
      "error",
      {
        env: "relay",
        tagName: "graphql",
        schemaJsonFilepath: path.resolve(
          __dirname,
          "src/generated/gatsby-introspection.json"
        ),
      },
    ],
  },
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {},
  },
};

