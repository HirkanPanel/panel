# Hirkan Xray Config Kit

Browser-safe TypeScript helpers for generating, validating, importing, analyzing, and exporting Xray-core configuration JSON.

## Package

```ts
import {
  createDefaultInbound,
  createDefaultXrayCoreConfigJson,
  generateClientLink,
  validateStrictXrayConfig
} from "@hirkan/xray-config-kit";
```

## Commands

```powershell
bun install
bun run typecheck
bun run build
bun test
```

## Exports

- `@hirkan/xray-config-kit`
- `@hirkan/xray-config-kit/frontend`
- `@hirkan/xray-config-kit/generators`
- `@hirkan/xray-config-kit/exporters/uris`
- `@hirkan/xray-config-kit/node`

Use the root export in frontend code. Use `/node` only in backend code.
