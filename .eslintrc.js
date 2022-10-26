module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      plugins: ['jest'],
      extends: ['plugin:jest/all', 'plugin:testing-library/react'],
      rules: {
        'jest/no-hooks': 0,
      },
    },
  ],
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-import-module-exports': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['state', 'req'] },
    ],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
