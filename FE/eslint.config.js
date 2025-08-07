import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { fixupPluginRules } from '@eslint/compat';

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    plugins: {
      react: pluginReact,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
      'react-refresh': reactRefresh,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,

      'prettier/prettier': 'warn',
      'react-refresh/only-export-components': 'warn',
      camelcase: 'off',
    },
  },
];
