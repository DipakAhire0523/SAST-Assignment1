module.exports = {
    env: {
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:security/recommended',
      'plugin:node/recommended'
    ],
    plugins: [
      'security',
      'node'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      // Security-focused rules
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-pseudoRandomBytes': 'error',
      'security/detect-unsafe-regex': 'error',
      
      // Node.js security
      'node/no-deprecated-api': 'error',
      'node/no-unpublished-require': 'off'
    }
  };