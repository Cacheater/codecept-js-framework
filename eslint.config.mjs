import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        I: 'readonly',
        Feature: 'readonly',
        Scenario: 'readonly',
        BeforeSuite: 'readonly',
        AfterSuite: 'readonly',
        Before: 'readonly',
        After: 'readonly',
        DataTable: 'readonly',
        locate: 'readonly',
        inject: 'readonly',
        pause: 'readonly',
        session: 'readonly',
        within: 'readonly',
        actor: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    ignores: [
      'dist/**',
      'output/**',
      'allure-report/**',
      'allure-results/**',
      'node_modules/**',
      'steps.d.ts',
    ],
  },
  eslintConfigPrettier,
);
