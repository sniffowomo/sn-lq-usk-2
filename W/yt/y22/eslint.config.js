import svelteConfig from './svelte.config.js'
import globals from 'globals'
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'

export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        svelteConfig,
      },
    },
  },
  {
    rules: {
      'svelte/no-unused-svelte-ignore': 'warn',
      'svelte/valid-compile': 'error',
      'svelte/no-navigation-without-resolve': 'warn',
    },
  },
]
