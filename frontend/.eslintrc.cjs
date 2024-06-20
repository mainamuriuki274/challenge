module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "prettier/prettier": 2,
    "no-underscore-dangle": 0,
    "no-param-reassign": 1,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unused-expressions": 1,
    "no-console": 1,
    "react/react-in-jsx-scope": 0,
    "react/prefer-es6-class": [2, "always"],
    "react/jsx-pascal-case": 2,
    "no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-empty-function": 0,
    "@typescript-eslint/no-empty-function": 0,
    "react/forbid-prop-types": [2, { forbid: ["any"] }],
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
