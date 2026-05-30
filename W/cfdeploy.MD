<h2> Deploy to CloudFlare for asssucking </h2>

1. [1. Set API token](#1-set-api-token)
2. [2. Deploy](#2-deploy)

# 1. Set API token

export CLOUDFLARE_API_TOKEN="your-token-here"

# 2. Deploy

```sh

# Build step automatically done in deploy step
bun run build

# This picks up the command from package.json
bun run deploy

# Actual syntax for minification and setting the name
bun run build && wrangler deploy --minify --name lqusk1-w-ms5-m3
```
