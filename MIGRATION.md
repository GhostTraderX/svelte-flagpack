# Migration to TypeScript and Svelte 5

This document outlines the changes made to migrate svelte-flagpack to TypeScript and Svelte 5.

## Summary of Changes

### 1. Build System Migration
- **Replaced**: Rollup 2 → Vite 6
- **Reason**: Vite provides better developer experience, faster builds, and native Svelte 5 support
- **Configuration**: Created `vite.config.ts` with optimized settings for library mode

### 2. TypeScript Conversion
All JavaScript files were converted to TypeScript:
- `src/index.js` → `src/index.ts`
- `src/generate-flags.js` → `src/generate-flags.ts`
- Added comprehensive type definitions in `src/index.d.ts`
- Created `tsconfig.json` with modern TypeScript settings

### 3. Svelte 5 Upgrade
Updated `src/Flag.svelte` to use Svelte 5 features:
- Replaced `export let` with `$props()` rune
- Replaced reactive statements with `$derived()` rune
- Removed `onMount` (not needed)
- Simplified dynamic imports (now using direct URL construction)
- Converted SCSS to standard CSS

### 4. Dependency Management
**Removed Dependencies** (no longer needed):
- `rollup` and all rollup plugins
- `node-sass`
- `svelte-preprocess-sass`
- `cross-env`
- `svelte-inline-svg`

**Added Dependencies**:
- `vite` - Modern build tool
- `@sveltejs/vite-plugin-svelte` - Svelte 5 support for Vite
- `typescript` - TypeScript compiler
- `tsx` - TypeScript execution for build scripts
- `@types/node` - Node.js type definitions

**Updated Dependencies**:
- `svelte` - Updated from v3.32.1 to v5.18.2 (peer dependency)
- `flagpack-core` - Kept at v2.0.0 (still compatible)

### 5. API Compatibility
**No Breaking Changes** - All component props work exactly the same:
- `code?: string` - Country code (default: 'NL')
- `size?: 's' | 'm' | 'l'` - Flag size (default: 'm')
- `gradient?: '' | 'top-down' | 'real-linear' | 'real-circular'` - Gradient style
- `hasBorder?: boolean` - Border visibility (default: true)
- `hasDropShadow?: boolean` - Drop shadow (default: false)
- `hasBorderRadius?: boolean` - Border radius (default: true)
- `class?: string` - Additional CSS classes

### 6. Build Output
The build process now generates:
- `dist/index.js` - Compiled JavaScript (ES module format)
- `dist/Flag.svelte` - Source Svelte component for direct import
- `dist/index.d.ts` - TypeScript type definitions
- `dist/flags/` - Pre-generated flag SVG files (s, m, l sizes)

### 7. Breaking Changes
**Svelte Version Requirement**:
- This package now requires **Svelte 5.0.0 or higher**
- Not compatible with Svelte 3 or 4
- Users on older Svelte versions should stay on v0.0.x of this package

### 8. Documentation Updates
- Updated README.md to note Svelte 5 requirement
- Fixed documentation for default values and prop names
- Maintained all existing examples and usage instructions

## Testing
- ✅ Build process completes successfully
- ✅ Flag generation works correctly
- ✅ TypeScript types compile without errors
- ✅ Component syntax is valid Svelte 5
- ✅ Code review passed
- ✅ Security scan passed (0 vulnerabilities)

## Migration Path for Users
Users upgrading to this version need to:
1. Upgrade their project to Svelte 5
2. Update imports (if importing from non-default paths)
3. No changes needed to component usage - API is fully backward compatible

## Development
### Building
```bash
npm run build
```

### Generating Flags
```bash
npm run generate-flags
```

### Development Mode
```bash
npm run dev
```

## Notes
- CSS is now injected directly into the component (no separate CSS file)
- All dependencies are dev dependencies except Svelte 5 (peer dependency)
- Flag SVG files remain in the dist output and are not in .gitignore
