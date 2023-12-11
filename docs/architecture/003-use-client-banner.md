# Add `"use client"` directive as a banner in our shipped code

## Context

To improve support for Next.js App Router, all components and hooks are exported with `"use client"` directive. This allows Next.js to hydrate the components on the client.

## Decision

Add a banner to our bundled code that tells React to hydrate the components on the client. See related style registry in `./apps/nextjs14-approuter/src/app/registry.js` which uses `useServerInsertedHTML` API to inject rules before any content that might use them. Make sure the registry wraps your app during initial server-side rendering `<StitchesRegistry>{children}</StitchesRegistry>`.

```javascript
import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: true,
  banner: {
    js: "'use client'",
  },
});
```

## Scope

This will be added to the `tsup.config.ts` file in the root of the project so that it is applied to all bundled code in v2.0.0.

## Resources

- Example from Chakra UI https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/tsup.config.ts#L7-L9
- tsup will look for closest `tsup.config.ts` file https://tsup.egoist.dev/#using-custom-configuration

## Status

Approved
