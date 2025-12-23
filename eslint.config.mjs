import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  // 1. Files to ignore
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', '.contentlayer/**'],
  },

  // 2. Base Javascript rules
  js.configs.recommended,

  // 3. Next.js and Typescript Configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...tsPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-img-element': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@next/next/no-img-element': 'off',
      'no-undef': 'off',
    },
  },
]
