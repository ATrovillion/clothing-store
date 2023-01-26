module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-useless-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'always'],
    'no-unused-vars': 'off',
    'react/jsx-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'comma-dangle': 'off',
    'multiline-ternary': 'off'
  }
};
