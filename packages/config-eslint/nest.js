const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 *
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/"],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "import/no-default-export": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-extraneous-class":"off"
  },
};
