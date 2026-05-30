<h2 align="center"><code> MS5</code></h2>
<h3 align="center"><i> MasterSvelte5&SvelteKit </i></h3>

1. [What ?](#what-)
2. [Dirz](#dirz)
3. [Codez](#codez)
4. [Deploying to multiple providers](#deploying-to-multiple-providers)

# What ?

1. The work for the above will be done in this folder
2. As usual work broken down by version

# Dirz

|      Dir      | What |
| :-----------: | :--: |
| [`m1`](./m1/) |  v1  |
| [`m2`](./m2/) |  v2  |
| [`m3`](./m3/) |  v3  |
| [`m4`](./m4/) |  v4  |

- `m4` - This is a continuation of the work on m3 - since liqo finished you are doing it here

# Codez

```sh
bun create cloudflare@latest --framework=svelte
```

# Deploying to multiple providers

```sh
// import cloudflare from '@sveltejs/adapter-cloudflare'
import vercel from '@sveltejs/adapter-vercel' // Just added this

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
  },
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: vercel(), // changed this
  },
}

export default config

```
