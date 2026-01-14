# Issue Resolution: npm link import recognition

## Problem
When using `npm link` to develop locally with the svelte-flagpack package in the s4finance/keops repository, the import was not recognized, showing the error:
```
Cannot find module 'svelte-flagpack' imported from '/usr/src/app/src/routes/(app)/ops/delivery/[id]/+page.svelte'
```

## Root Cause
The issue occurs because:
1. Vite's dependency optimization doesn't automatically recognize npm-linked packages
2. The consuming project needs to be configured to allow serving files from outside its root directory
3. The linked package wasn't explicitly included in Vite's optimization pipeline

## Solution

### 1. Package Changes (Already Applied)
- Enhanced `package.json` exports with explicit "import" condition
- Exported flags directory for proper asset access
- Exported package.json for better module resolution

### 2. Configuration Required in Consuming Project (keops)

Since you're using SvelteKit, you need to update your `svelte.config.js`:

```js
// svelte.config.js in s4finance/keops
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          allow: ['..']  // Allow serving files from parent directories (for npm link)
        }
      },
      optimizeDeps: {
        include: ['svelte-flagpack']  // Explicitly include linked package
      }
    }
  }
};

export default config;
```

### 3. Steps to Use npm link

In the svelte-flagpack directory:
```bash
npm install
npm run build
npm link
```

In your keops project directory:
```bash
npm link svelte-flagpack
# Restart your dev server if it's running
npm run dev
```

### 4. Alternative Approach (If npm link Still Has Issues)

Instead of `npm link`, you can install directly from the local directory:
```bash
# In keops project
npm install /path/to/svelte-flagpack
```

This creates a regular installation from your local copy and typically works more reliably.

## Verification

After applying the configuration, imports should work:
```svelte
<!-- In your keops Svelte files -->
<script>
  import Flag from 'svelte-flagpack';
</script>

<Flag code="NL" size="m" />
```

## Important Notes

1. **Always rebuild before linking**: Run `npm run build` in svelte-flagpack before creating the link
2. **Restart dev server**: After linking or changing configuration, restart your development server
3. **Check symlink**: Verify the link exists: `ls -la node_modules/svelte-flagpack` (should show a symlink)
4. **Vite cache**: If issues persist, try clearing Vite's cache: `rm -rf node_modules/.vite`

## Additional Documentation

- See `README.MD` for general usage instructions
- See `README-NPM-LINK.md` for detailed npm link troubleshooting
