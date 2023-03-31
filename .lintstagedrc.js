module.exports = {
  '**/*.{json,md}': ['prettier --write'],
  '**/*.{js,ts,tsx}': ['eslint --fix', 'prettier --write'],
}
