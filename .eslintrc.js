module.exports = {
  env: {
    node: true,
  },
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser' },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'no-console': 'error',
    semi: 'error',
  },
};
