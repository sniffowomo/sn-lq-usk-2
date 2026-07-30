# AGENTS.md

## Repo Overview

Continuation of https://github.com/liqowomo/lq-usk-1 in the `sn-lq-usk-2` org (`https://github.com/sniffowomo/sn-lq-usk-2`).

`W/` is the main work directory containing multiple sub-projects. `sn/` holds helper scripts (bash + fish). `old/` is a reference for prior work.

## Package Manager

**Bun** — not npm or yarn. All web projects use `bun install` / `bun run <script>`.

## Web Projects (SvelteKit)

All web projects are SvelteKit apps. The key ones:

| Dir | What | Adapter | Deploy |
|-----|------|---------|--------|
| `W/opc/o1` | OpenCode testing project | `@sveltejs/adapter-netlify` | Netlify (`bun run deploy:netlify`) |
| `W/MS5/m1`–`m4` | MasterSveltekit5 milestones | v1: none, v2: Vercel, v3: Cloudflare, v4: (continuation) | See `W/MS5/README.MD` |
| `W/yt/y1` | DB project (Drizzle + SQLite) | Cloudflare | — |
| `W/yt/y2` | Netlify deploy version | Netlify | Netlify |
| `W/yt/y22` | Latest YT project (Svelte 5 runes + flat eslint) | Netlify | — |
| `W/tzt/t1`, `tt1` | Test projects (wrangler/Cloudflare Workers) | Cloudflare Workers | — |

## Key Commands (SvelteKit Projects)

```sh
bun install          # install deps
bun run dev          # dev server
bun run build        # production build
bun run check        # svelte-kit sync + svelte-check (typecheck)
bun run deploy       # wrangler deploy (Cloudflare)
bun run deploy:netlify   # netlify deploy (Netlify)
```

Run order: `build` before `check` and `deploy`. The `prepare` script runs `svelte-kit sync` automatically.

## Project Conventions

- **Bun** is the sole package manager across all projects.
- **Svelte 5** with runes mode enabled in `svelte.config.js` for newer projects (`y22`, `o1`, `MS5/m4`).
- **wrangler.jsonc** is the Cloudflare Workers config (used by `yt/y1`, `yt/y2`, `yt/y22`, `tzt/*`, `o1`).
- **netlify.toml** is required for Netlify deploys (build command `bun run build`, publish dir `build`).
- **JS/TS**: `jsconfig.json` extends `.svelte-kit/tsconfig.json`. Newer projects (`y22`) use `eslint.config.js` with flat config and `eslint-plugin-svelte` for Svelte 5 runes support.
- **Vite** is the build tool across all projects (`vite.config.js` or `vite.config.ts`).

## Dev Container

`.devcontainer/` uses `mcr.microsoft.com/devcontainers/base:ubuntu` with features for Node (LTS), Python, Go, and Docker-in-Docker. `postCreateCommand` runs `.devcontainer/setup.sh`.

## Directories (Non-Web)

| Dir | What |
|-----|------|
| `sn/` | Helper scripts (bash `.sh` + fish `.fish`) |
| `old/` | Old work reference (`initz.sh` copies here) |
| `W/mdoc/` | Static HTML index site |
| `W/pwa/` | PWA test (README only) |
| `W/wdp/` | Empty |
| `W/ncl/` | Logs from `W/ncl.sh` cleanup script |
| `W/tzt/` | General test projects |
| `W/yt/` | YouTube-related projects |

## Notable Files

- `README.md` — root readme (minimal)
- `initz.sh` — installs `wrangler` via bun
- `sn/g.sh` and `sn/lix.fish` — symlinked as `g` and `l` at root
- `W/cfdeploy.MD` — Cloudflare deploy instructions
- `W/MS5/README.MD` — detailed SvelteKit5 multi-provider deploy guide

## What's Missing

No CI workflows, no pre-commit hooks, no test framework configured, no `AGENTS.md` existed before this file.