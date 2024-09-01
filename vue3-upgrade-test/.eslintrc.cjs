/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // node: true, ///////////// this fixes "process" not being recognized in gh-pages-deploy.mjs but the lint script doesn't like it. prolly rempve the lint call from the build script & consider not making any of those build script changes
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
