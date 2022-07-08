module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  ignorePatterns: ['**/*.generated.*', 'node_modules', '.expo', 'build', '**/__generated__/*', 'dist', '!/.github', 'web-build'],
  overrides: [
    {
      extends: ['./typescript'],
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
    },
    {
      extends: ['./jest.js'],
      files: ['**/test/**', '**/tests/**', '**/__tests__/**', 'test/**', '**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '**/jest.setup.ts', '**/jest.setup.js'],
    },
    {
      files: ['babel.config.js', 'metro.config.js', 'jest.config.js'],
      rules: {
        'functional/immutable-data': 0,
      },
    },
    {
      extends: ['plugin:@graphql-eslint/schema-recommended', 'plugin:@graphql-eslint/operations-recommended'],
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/executable-definitions': 0,
        '@graphql-eslint/fields-on-correct-type': 0,
        '@graphql-eslint/fragments-on-composite-type': 0,
        '@graphql-eslint/known-argument-names': 0,
        '@graphql-eslint/known-directives': 0,
        '@graphql-eslint/known-fragment-names': 0,
        '@graphql-eslint/known-type-names': 0,
        '@graphql-eslint/lone-anonymous-operation': 0,
        '@graphql-eslint/naming-convention': [2, {
          FieldDefinition: 'camelCase', FragmentDefinition: { forbiddenSuffixes: ['Fragment'], style: 'PascalCase' }, allowLeadingUnderscore: true, types: 'PascalCase',
        }],
        '@graphql-eslint/no-deprecated': 0,
        '@graphql-eslint/no-fragment-cycles': 0,
        '@graphql-eslint/no-hashtag-description': 0,
        '@graphql-eslint/no-typename-prefix': 1,
        '@graphql-eslint/no-undefined-variables': 0,
        '@graphql-eslint/no-unreachable-types': 0,
        '@graphql-eslint/no-unused-fragments': 0,
        '@graphql-eslint/no-unused-variables': 0,
        '@graphql-eslint/one-field-subscriptions': 0,
        '@graphql-eslint/overlapping-fields-can-be-merged': 0,
        '@graphql-eslint/possible-fragment-spread': 0,
        '@graphql-eslint/provided-required-arguments': 0,
        '@graphql-eslint/require-description': 0,
        '@graphql-eslint/require-id-when-available': 0,
        '@graphql-eslint/scalar-leafs': 0,
        '@graphql-eslint/selection-set-depth': [0],
        '@graphql-eslint/strict-id-in-types': 0,
        '@graphql-eslint/unique-argument-names': 0,
        '@graphql-eslint/unique-directive-names-per-location': 0,
        '@graphql-eslint/unique-variable-names': 0,
        '@graphql-eslint/value-literals-of-correct-type': 0,
        '@graphql-eslint/variables-are-input-types': 0,
        '@graphql-eslint/variables-in-allowed-position': 0,
      },
    },
    {
      extends: ['plugin:yml/standard'],
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/flow-sequence-bracket-spacing': [2, 'always'],
        'yml/no-empty-mapping-value': 0,
        'yml/no-multiple-empty-lines': 2,
        'yml/require-string-key': 2,
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-json'],
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
      rules: {

        'jsonc/array-bracket-newline': ['error',
          {
            minItems: 3,
            multiline: true,
          },
        ],
        'jsonc/array-bracket-spacing': ['error',
          'always',
        ],
        'jsonc/array-element-newline': ['error', 'always'],
        'jsonc/indent': ['error', 2],
        'jsonc/object-curly-newline': ['error',
          {
            consistent: true,
            multiline: true,
          },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', {
          allowAllPropertiesOnSameLine: false,
        }],
      },
    },
  ],
  plugins: ['import', 'functional', 'sort-keys-fix'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'functional/immutable-data': ['error', { ignoreAccessorPattern: '**.current' }],
    'functional/prefer-readonly-type': 'error',
    'functional/prefer-tacit': 'error',
    'global-require': 0,
    'import/extensions': [2, { graphql: 'always' }],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['src/**/*.test.ts', 'src/**/*.test.tsx'] }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/order': ['error', {
      'alphabetize': { caseInsensitive: true, order: 'asc' },
      'groups': [['builtin', 'external'], ['parent', 'sibling', 'index'], ['type']],
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 0,
    'indent': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { code: 200 }],
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-underscore-dangle': ['error', { allow: ['_id', '__typename'] }],
    'no-unreachable': 2,
    'no-use-before-define': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'one-var': 0,
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'semi': ['error', 'never'],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
