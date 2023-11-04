module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['unused-imports'],
  ignorePatterns: ['dist/', 'build/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@unused-imports/no-unused-imports': 'error',
    '@unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'import/prefer-default-export': 'off',
  },
}
