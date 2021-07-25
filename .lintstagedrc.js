module.exports = {
  '**/*.{js,json,md}': ['prettier . --write'],
  '**/*.{ts,tsx}': [
    'prettier . --write',
    (filenames) => `eslint ${filenames.join(' ')}`,
  ],
};
