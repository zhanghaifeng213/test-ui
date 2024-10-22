// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 定义 __filename 和 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 创建兼容实例
const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  resolvePluginsRelativeTo: __dirname,
});

// 导出平面配置数组
export default [
  {
    ignores: [
      'node_modules/**',
      '**.d.ts',
      'packages/testUI',
      'packages/components/coverage',
      'dist',
      'node_modules',
      'site/docs/.vitepress/cache/deps/**',
      '**/vite.config.ts',
    ],
  },
  ...compat.config({
    root: true,
    env: {
      node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'vue/valid-define-emits': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/valid-define-props': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'multiline-comment-style': ['error', 'starred-block'],
    },
  }),
];
