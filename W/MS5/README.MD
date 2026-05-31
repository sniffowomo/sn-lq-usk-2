<h2 align="center"><code> MS5</code></h2>
<h3 align="center"><i> MasterSvelte5&SvelteKit </i></h3>

1. [What ?](#what-)
2. [Dirz](#dirz)
3. [Codez](#codez)
4. [Deploying to multiple providers](#deploying-to-multiple-providers)
   1. [Deploy to `netlify`](#deploy-to-netlify)

# What ?

1. The work for the above will be done in this folder
2. As usual work broken down by version

# Dirz

|      Dir      | What |                                              Deploys                                               |
| :-----------: | :--: | :------------------------------------------------------------------------------------------------: |
| [`m1`](./m1/) |  v1  |
| [`m2`](./m2/) |  v2  |   [`Vercel - https://sn-lq-usk2-w-ms5-m2.vercel.app/`](https://sn-lq-usk2-w-ms5-m2.vercel.app/)    |
| [`m3`](./m3/) |  v3  | [`Netlify - https://sn-lqusk-2-w-msa5-m3.netlify.app/`](https://sn-lqusk-2-w-msa5-m3.netlify.app/) |
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

## Deploy to `netlify`

1. This works differently and `cloudflare-auto` doesnt work
2. You ahave to add - ` bun add -D @sveltejs/adapter-netlify`

```sh
# svelte.config.js

// import ada from '@sveltejs/adapter-auto'
import ada from '@sveltejs/adapter-netlify'

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
    adapter: ada(),
  },
}

export default config

```

3. You also need `netlify.toml`

```toml
[build]
command = "bun run build"
publish = "build"

[build.environment]
NODE_VERSION = "20"

```

4. Then add

```sh
"deploy:netlify": "bun run build && netlify deploy --prod --dir=build"
```

- This then works

Netlify Commands

```sh
# List sites
netlify sites:list

# Delete site
netlif sites:delete <projectid not url>
```

5. `package.json` - Add these scripts

```json
"deploy:netlify:first": "bun run build && netlify deploy --prod --site-name sn-lq-usk-2-w-yt-yt2 --dir=build",
"deploy:netlify": "bun run build && netlify deploy --prod --dir=build"
```

- Note the `deploy:netlify:first` - needed the first to setup the site
- Then `deploy:netlify` - On all subsequent deploys
