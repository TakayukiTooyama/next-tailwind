module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: [
    'sort-keys-custom-order',
    'simple-import-sort',
    'import-access',
    'import',
    'unused-imports',
    'tailwindcss',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    curly: 'error',
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'func-style': ['error', 'expression'],
    'arrow-body-style': ['error', 'always'],
    'no-restricted-imports': [
      'error',
      { paths: [{ name: 'react', importNames: ['default'] }] },
    ],

    // react
    'react/display-name': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: false,
        checkInlineFunction: true,
      },
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],

    // sort
    'import/no-default-export': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'sort-keys-custom-order/object-keys': [
      'error',
      {
        orderedKeys: ['id', 'name', 'title'],
      },
    ],
    'sort-keys-custom-order/type-keys': [
      'error',
      {
        orderedKeys: ['id', 'name', 'title'],
      },
    ],

    // @typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
  },
  overrides: [
    {
      files: ['src/app/**/*.tsx', 'src/pages/api/**/*.ts', 'next.config.js'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
