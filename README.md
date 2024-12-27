# DenoViteReact

Deno + Vite + React + TypeScript

## Running

You need to have Deno v2.0.0 or later installed to run this repo.

Start a dev server:

```ps
C:\...\DenoViteReact> deno task dev
```

## Format

There is no need to install a 3rd party formatter like ***Prettier***.  
Deno handles formatting with sensible defaults, but is open to configuration in [deno.json](./deno.json).

```ps
C:\...\DenoViteReact> deno fmt
```

## Lint

There is no need to install a 3rd party linter like ***ESLint***.  
Deno handles linting with sensible defaults, but is open to configuration in [deno.json](./deno.json).

```ps
C:\...\DenoViteReact> deno lint
```

## Typescript

Deno uses TypeScript out of the box.  
There is no need to install a 3rd party type-checker like ***tsc***.  
Deno handles type-checking with modern defaults, but is open to configuration in [deno.json](./deno.json).

> Note: Unfortunately, my biggest let down with Deno at this time is it's inability to suggest `"react"` imports.  
> For whatever reason, it wants to import from `"@types/react"` and so [this hack is required](./src/react.d.ts).

## Deploy

Build production assets:

```ps
C:\...\DenoViteReact> deno task build
```
