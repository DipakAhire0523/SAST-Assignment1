module.exports = {
    env: {
      node: true,
      es2021: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:node/recommended'
    ],
    plugins: [
      'node'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'node/no-unpublished-require': 'off',
      'node/no-missing-require': 'error'
    }
  };