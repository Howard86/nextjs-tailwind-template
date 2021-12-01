module.exports = {
  '**/*.{json,md}': ['prettier --write'],
  '**/*.{js,ts,tsx}': ['eslint --fix'],
};
