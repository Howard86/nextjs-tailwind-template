module.exports = {
  '**/*.{ts,tsx}': [
    (filenames) =>
      filenames.map((filename) => `prettier '${filename}' --write`),
    (filenames) =>
      filenames.length > 10 ? 'npm run lint' : `eslint ${filenames.join(' ')}`,
  ],
};
