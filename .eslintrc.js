module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier/vue',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    '@vue/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none' }]
  },
  overrides: [
    {
      files: ['src/**/*.+(ts|vue)']
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
