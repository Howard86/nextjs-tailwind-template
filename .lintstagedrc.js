module.exports = {
  '**/*.{json,md}': ['prettier --write'],
  '**/*.{js,mjs,ts,tsx}': ['eslint --fix'],
}
