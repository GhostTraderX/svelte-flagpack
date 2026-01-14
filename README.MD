# Flagpack

Flagpack contains 250+ flag icons to easily use within your code project. Flagpack is an open source project and available for JavaScript frameworks/libraries Angular, Vue, Svelte and React.

![Flagpack. 250+ easily implementable flag icons to use in your design or code project. Open Source. Available for Sketch, Figma, Angular, Vue, Svelte and React. [www.flagpack.xyz](https://www.flagpack.xyz). Made with love by Yummygum. Graphic showing a list with the flags of Argentina, Croatia, Estonia, Kenia, Netherlands, and Scotland.](https://flagpack.xyz/meta-image.png)

[View documentation on flagpack.xyz](https://flagpack.xyz/docs/)

## svelte-flagpack
<p>
  <a href="https://www.npmjs.com/package/svelte-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/v/svelte-flagpack.svg?style=flat" />
  </a>
  <a href="https://www.npmjs.com/package/svelte-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/dt/svelte-flagpack.svg?style=flat" />
  </a>
  <a href="https://github.com/sponsors/Yummygum" target="_blank">
    <img src="https://img.shields.io/badge/Support-♥-E94AAA"  />
  </a>
  <a href="https://twitter.com/flagpack" target="_blank">
    <img src="https://img.shields.io/twitter/follow/flagpack.svg?style=social&label=follow"  />
  </a>
</p>

## Installation

```bash
$: npm install svelte-flagpack --save
```

**Note:** This package requires Svelte 5. For Svelte 3/4 support, please use version 0.0.x.

## Usage

### Defining the component
Import the Flagpack component into any of your project's Svelte components.
```js
import Flag from 'svelte-flagpack'
```

### Use in Svelte
```svelte
<Flag
  code="NL"
  gradient="real-linear"
  size="m"
  hasDropShadow
/>
```

## Available component configurations — Props

| Key   | Value   | Required | Default | Format |
|-------|-------|------|------|------|
| code |  String | false | 'NL' | [See all codes](https://flagpack.xyz/docs/flag-index/) |
| size |  String | false | 'm' | 's', 'm' or 'l' (case insensitive) |
| class |  String | false | - | - |
| hasDropShadow |  Boolean | false | false | - |
| hasBorder |  Boolean | false | true | - |
| hasBorderRadius | Boolean | false | true | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |


## Development with npm link

If you want to use this package locally during development (e.g., with `npm link`):

1. **Build the package:**
```bash
npm install
npm run build
npm link
```

2. **In your consuming project:**
```bash
npm link svelte-flagpack
```

3. **Important for Vite/SvelteKit projects:** Add this to your `vite.config.js` or `svelte.config.js`:
```js
export default {
  server: {
    fs: {
      allow: ['..']  // Allow serving files from parent directories
    }
  },
  optimizeDeps: {
    include: ['svelte-flagpack']  // Pre-bundle the linked package
  }
}
```

If you encounter issues with `npm link`, you can also install directly from the local directory:
```bash
npm install /path/to/svelte-flagpack
```

## Build
```bash
# install dependencies
$: npm install

# build for prod
$: npm run build

# build with watcher for dev
$: npm run dev
```

## Releasing
To release a new version you'll need to make sure all changes commits are done and pushed. After that you'll need to decide which release type you want to use. The release types are; patch (0.0.1), minor (0.1.0), or major (1.0.0).
```
$: npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
$: git push --tags origin main
```
After that you'll need to publish to npm.
```
$: npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.

## Support

[Frequently Asked Questions](https://flagpack.xyz/support/)

[Documentation](https://flagpack.xyz/docs/)

## Releases

You can find a changelog of Flagpack's releases on the [Releases page](https://github.com/Yummygum/svelte-flagpack/releases) on GitHub.

## Contribute

If you're interested in contributing to this project, great! Please see the [contributing document](CONTRIBUTING.md) how to set up you up.

## License

Flagpack is an open source project published under a [MIT license](LICENSE).
