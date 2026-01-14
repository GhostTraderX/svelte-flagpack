# Using npm link with svelte-flagpack

## Steps to use npm link

1. **In the svelte-flagpack directory:**
   ```bash
   npm install
   npm run build
   npm link
   ```

2. **In your project directory (e.g., s4finance/keops):**
   ```bash
   npm link svelte-flagpack
   ```

3. **If using Vite/SvelteKit**, you may need to add this to your `vite.config.js`:
   ```js
   export default {
     server: {
       fs: {
         allow: ['..']  // Allow serving files from parent directories
       }
     },
     optimizeDeps: {
       include: ['svelte-flagpack']
     }
   }
   ```

## Troubleshooting

### "Cannot find module 'svelte-flagpack'"

This usually means one of:
1. The package wasn't built before linking - run `npm run build` in svelte-flagpack
2. The link wasn't created properly - try unlinking and relinking:
   ```bash
   # In your project
   npm unlink svelte-flagpack
   
   # In svelte-flagpack
   npm unlink
   npm link
   
   # In your project again
   npm link svelte-flagpack
   ```
3. Vite's dependency optimization is blocking the link - add to vite.config.js as shown above
4. The symlink isn't being followed - try restarting your dev server

### For SvelteKit projects

If you're using SvelteKit, you might need to configure Vite to handle the linked package:

```js
// svelte.config.js or vite.config.js
export default {
  kit: {
    vite: {
      server: {
        fs: {
          allow: ['..']
        }
      }
    }
  }
}
```

### Alternative: Use relative path

Instead of npm link, you can also install directly from the local directory:

```bash
npm install ../path/to/svelte-flagpack
```

This creates a regular installation from your local copy.
