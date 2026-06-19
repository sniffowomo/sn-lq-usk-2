import js from '@eslint/js'
import ts from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import svelteConfig from './svelte.config.js'

export default ts.config(
  // JavaScript recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...ts.configs.recommended,

  // Svelte recommended rules (includes Svelte 5 support)
  ...svelte.configs['flat/recommended'],

  // Prettier integration - MUST be last to override conflicting rules
  prettier,
  ...svelte.configs['flat/prettier'],

  // Global variables
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Svelte file configuration with Runes support
  {
    files: [
      '**/*.svelte',
      '**/*.svelte.js', // Required for Svelte 5 rune symbols in JS files
      '**/*.svelte.ts', // Required for Svelte 5 rune symbols in TS files
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig, // Critical: enables Svelte 5 Runes detection
        svelteFeatures: {
          runes: true, // Explicitly enable Runes support
        },
      },
    },
  },

  // Svelte 5 specific rules
  {
    rules: {
      // Rune-specific rules [citation:2]
      'svelte/rune-prefer-let': 'error', // Prefer let over const for reactive variables
      'svelte/prefer-const': 'error', // Prefer const for non-reactive variables

      // Svelte 5 event naming [citation:5]
      'svelte/require-event-prefix': [
        'error',
        {
          checkAsyncFunctions: false,
        },
      ],

      // Store migration to Runes [citation:8]
      'svelte/no-store': 'warn', // Warn about using stores (prefer runes)

      // Each key rule - set to warn for Svelte 5 (auto-handled)
      'svelte/valid-each-key': 'warn',

      // Other recommended rules
      'svelte/no-unused-svelte-ignore': 'warn',
      'svelte/valid-compile': 'error',
      'svelte/no-navigation-without-resolve': 'warn',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'build/',
      '.svelte-kit/',
      'dist/',
      'node_modules/',
      '*.config.js',
    ],
  },
)
