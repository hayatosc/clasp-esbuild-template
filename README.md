# clasp-esbuild-template

A template for Google Apps Script, TypeScript and ESBuild. You can use TypeScript feature and `import` or `export` syntax.

## Setup

First, make sure you are logged in a Google acoount on `clasp` cli.

```bash
pnpm exec clasp login
```

Then, create Apps Script. If you already made a project, you can copy from `.clasp.json.copy` to `.clasp.json`

```bash
pnpm clasp create --type standalone
```

Change `rootDir` property on your `.clasp.json`.

```diff
{
  "scriptId": "<your-scriptId-here>",
-  "rootDir": "<your-directory-here>"
+  "rootDir": "./dist"
}
```

Finally, run `pnpm run deploy`!

## Development

The entrypoint of scripts is `src/main.ts`.

### Sample

```typescript
function main() {
  console.log('test');
}

declare let global: any;
global.main = main;
```

All function must be registered on `global`.

## License

MIT
