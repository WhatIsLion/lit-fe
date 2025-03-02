import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { FlatCompat } from '@eslint/eslintrc';

import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const prettierConfigPath = join(__dirname, '.prettierrc');
const prettierConfig = JSON.parse(readFileSync(prettierConfigPath, 'utf8'));

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      /**
       * @note module import 정렬
       *  1. react 관련
       *  2. next.js 관련
       *  3. 외부 패키지 관련
       *  4. type import
       *  5. 상대주소
       */
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react$'], ['^next'], ['^@?\\w'], ['^@?\\w+.*\\s+type'], ['^\\.']],
        },
      ],
      'simple-import-sort/exports': ['error'],
    },
  },
];

export default eslintConfig;
