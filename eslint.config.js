// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
// import eslintPluginPrettier from "eslint-plugin-prettier";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   eslintPluginPrettier.configs.recommended,
//   {
//     rules: {
//     "react/react-in-jsx-scope": "off"
//   }
//   }
// ];

import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    // Apply to all JavaScript and JSX files
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      // Use the JavaScript parser provided by @eslint/js
      parser: pluginJs.configs.recommended.languageOptions?.parser,
      parserOptions: pluginJs.configs.recommended.languageOptions?.parserOptions,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // JavaScript recommended rules
    },
  },
  {
    // Apply specifically to React files
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parser: pluginJs.configs.recommended.languageOptions?.parser,
      parserOptions: pluginReact.configs.flat.recommended.languageOptions?.parserOptions,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // React recommended rules
      'react/react-in-jsx-scope': 'off', // Disable for React 17+ JSX Transform
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
    },
  },
  {
    // Prettier integration for all supported files
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules, // Prettier recommended rules
    },
  },
];
