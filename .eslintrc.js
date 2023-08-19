/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['howardism'],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-import-module-exports': 0,
  },
}
