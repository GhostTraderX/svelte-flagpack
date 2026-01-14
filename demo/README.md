# Svelte Flagpack Demo

This is a SvelteKit demo application that showcases the `svelte-flagpack` library.

## Running the Demo

1. First, build the library from the parent directory:
```bash
cd ..
npm run build
```

2. Install demo dependencies:
```bash
cd demo
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Features Demonstrated

- All flag sizes (s, m, l)
- Gradient styles
- Border and shadow options
- Multiple country flags
- Custom styling examples

## Development

The demo uses the parent library via `file:..` dependency, so any changes to the library will be reflected after rebuilding.
