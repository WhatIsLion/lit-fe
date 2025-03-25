import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
    },
    rules: {
      'prettier/prettier': 'error',

      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^import type'],
            ['^react', '^@?react'],
            ['^next'],
            ['^@/shared'],
            ['^@/entities'],
            ['^@/features'],
            ['^@/widgets'],
            ['^@/pages'],
            ['^\\.'],
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
