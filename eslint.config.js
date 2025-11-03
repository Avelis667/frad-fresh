import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: { ecmaVersion: 2023, sourceType: 'module' },
    plugins: { import: pluginImport, n: pluginN },
    rules: {
      ...js.configs.recommended.rules,
      'n/no-unsupported-features/node-builtins': 'off',
    },
  },
  { ignores: ['node_modules/', 'dist/', 'coverage/', '.husky/_'] },
];
