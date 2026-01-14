# svelte-flagpack

Beautiful, lightweight flag components for Svelte 5 and SvelteKit, written in TypeScript.

![npm version](https://img.shields.io/npm/v/svelte-flagpack.svg)
![npm downloads](https://img.shields.io/npm/dt/svelte-flagpack.svg)
![license](https://img.shields.io/npm/l/svelte-flagpack.svg)

## Features

- 🚀 **Svelte 5 Ready** - Built with Svelte 5 runes and modern APIs
- 📦 **SvelteKit Compatible** - Works seamlessly with SvelteKit projects
- 🎨 **250+ Flags** - Comprehensive collection of country flags
- 🎯 **TypeScript** - Full type safety with TypeScript definitions
- ⚡ **Lightweight** - Minimal bundle size with tree-shaking support
- 🎭 **Customizable** - Multiple sizes, gradients, borders, and shadows
- 🔧 **Zero Dependencies** - Only peer dependency is Svelte 5

## Installation

```bash
npm install svelte-flagpack
```

**Requirements:** Svelte 5.0.0 or higher

## Quick Start

```svelte
<script lang="ts">
  import Flag from 'svelte-flagpack';
</script>

<Flag code="US" size="m" />
```

## Usage Examples

### Basic Flags

```svelte
<!-- Different sizes -->
<Flag code="NL" size="s" />
<Flag code="FR" size="m" />
<Flag code="DE" size="l" />
```

### With Gradients

```svelte
<!-- Add gradient effects -->
<Flag code="GB-UKM" gradient="real-linear" />
<Flag code="JP" gradient="real-circular" />
<Flag code="IT" gradient="top-down" />
```

### Custom Styling

```svelte
<!-- Customize borders and shadows -->
<Flag 
  code="CA" 
  size="l"
  hasBorder={false}
  hasDropShadow={true}
  hasBorderRadius={false}
/>
```

### Local Development with Custom Base URL

For local development (e.g., with `npm link`), you can specify a custom base URL for the flag assets:

```svelte
<Flag 
  code="US" 
  size="l"
  flagsBaseUrl="/node_modules/svelte-flagpack/dist/flags"
/>
```

### With CSS Classes

```svelte
<Flag code="BR" size="m" class="my-custom-class" />

<style>
  :global(.my-custom-class) {
    transition: transform 0.3s;
  }
  :global(.my-custom-class:hover) {
    transform: scale(1.1);
  }
</style>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | `'NL'` | ISO country code ([see all codes](https://flagpack.xyz/docs/flag-index/)) |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Flag size (s=16x12, m=20x15, l=32x24 px) |
| `gradient` | `'' \| 'top-down' \| 'real-linear' \| 'real-circular'` | `''` | Gradient effect style |
| `hasBorder` | `boolean` | `true` | Show border around flag |
| `hasDropShadow` | `boolean` | `false` | Add drop shadow effect |
| `hasBorderRadius` | `boolean` | `true` | Apply border radius |
| `class` | `string` | `''` | Additional CSS classes |
| `flagsBaseUrl` | `string` | CDN URL | Base URL for flag assets (CDN by default, customizable for local dev) |

**Note:** Flags are served from a CDN by default (`https://cdn.jsdelivr.net/npm/flagpack-core@2.0.0/svg`), ensuring zero bundle size impact. For local development with `npm link`, you can override this with the `flagsBaseUrl` prop.

### Country Codes

Use standard ISO 3166-1 alpha-2 codes. Special codes for subdivisions are also supported:
- `GB-UKM` - United Kingdom
- `GB-ENG` - England
- `GB-SCT` - Scotland
- `GB-WLS` - Wales
- `GB-NIR` - Northern Ireland

[View full list of supported codes](https://flagpack.xyz/docs/flag-index/)

## Local Development & Testing

### Building the Library

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev
```

### Testing with the Demo App

A SvelteKit demo application is included to test the library:

```bash
# Build the library first
npm run build

# Navigate to demo and install
cd demo
npm install

# Run the demo
npm run dev
```

Visit `http://localhost:5173` to see all flag variations and features.

### Using in Your Own Project

For local development, you can link the package:

```bash
# In svelte-flagpack directory
npm run build
npm link

# In your project directory
npm link svelte-flagpack
```

**For SvelteKit projects**, add this to your `svelte.config.js`:

```js
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
};
```

Alternatively, install directly from a local directory:

```bash
npm install /path/to/svelte-flagpack
```

## TypeScript Support

Full TypeScript support is included out of the box:

```typescript
import Flag, { type FlagProps } from 'svelte-flagpack';

const props: FlagProps = {
  code: 'US',
  size: 'l',
  gradient: 'real-linear',
  hasDropShadow: true
};
```

## Project Structure

```
svelte-flagpack/
├── src/
│   ├── Flag.svelte          # Main component
│   ├── index.ts             # Package entry
│   ├── index.d.ts           # TypeScript definitions
│   └── generate-flags.ts    # Build script for flag assets
├── demo/                    # SvelteKit demo app
├── dist/                    # Built files (generated)
│   ├── index.js            # Compiled JS
│   ├── Flag.svelte         # Component source
│   ├── index.d.ts          # Type definitions
│   └── flags/              # SVG flag assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── svelte.config.js
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

Built with [Flagpack Core](https://github.com/Yummygum/flagpack-core) by Yummygum.

Rebuilt for Svelte 5 and modern development by GhostTraderX.

## Support

- 📖 [Documentation](https://github.com/GhostTraderX/svelte-flagpack)
- 🐛 [Report Issues](https://github.com/GhostTraderX/svelte-flagpack/issues)
- 💬 [Discussions](https://github.com/GhostTraderX/svelte-flagpack/discussions)
