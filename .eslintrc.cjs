module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project:  ['./tsconfig.json', './tsconfig.node.json'],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
