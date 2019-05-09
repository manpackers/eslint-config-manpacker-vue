module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  globals: {
    Vue: false,
    Component: false
  },
  plugins: ['vue'],
  extends: ['manpacker']
}
