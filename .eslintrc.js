const path = require("path");

module.exports = {
  extends: [
    "react-app",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "css-modules", "prettier", "graphql"],
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
};
