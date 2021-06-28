module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {},
  extends: [
    "esnext",
    "esnext/style-guide",
    "node",
    "node/style-guide"
  ],
  rules: {
    "no-unused-vars": "off",
  },
};
