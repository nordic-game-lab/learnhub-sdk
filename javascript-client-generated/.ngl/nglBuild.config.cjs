// nglBuild.config.cjs
const path = require('path');

module.exports = {
  common: {
    // Common settings for both web and server if any
    // e.g., sourceRoot: 'src',
    // tsconfig: 'tsconfig.json', // Path to your tsconfig.json
  },
  web: {
    entryPoints: [path.resolve(process.cwd(), 'src/index.ts')], // Entry point for web
    outdir: path.resolve(process.cwd(), 'dist/esm'),   // Output bundle
    target: 'node20', // esbuild target (browser compatibility)
    format: 'esm',    // esbuild format (ES Module)
    bundle: false,     // esbuild option
    minify: false,     // esbuild option
    sourcemap: false,  // esbuild option
    platform: 'node', // esbuild option
    tsconfig: 'tsconfig.esm.json', // Optional: specific tsconfig for web
    // external: ['react', 'react-dom'], // Example: for external libraries not to be bundled
    // copyAssets: [ // Optional: for copying static assets
    //   { from: 'public', to: 'dist/web/public' }
    // ]
  },
  server: {
    entryPoints: [path.resolve(process.cwd(), 'src/index.ts')], // Entry point for server
    outdir: path.resolve(process.cwd(), 'dist/cjs'),        // Output directory for server
    // outfile: path.resolve(process.cwd(), 'dist/server/server.js'), // Use outdir for multiple files or outfile for a single bundle
    target: 'node20', // esbuild target (Node.js version)
    format: 'cjs',    // esbuild format (CommonJS for Node.js, or 'esm' if using Node.js ESM)
    bundle: false,     // Set to false if you want to keep separate files, true to bundle
    minify: false,    // Usually not minified for server-side
    sourcemap: false,
    platform: 'node', // esbuild option
    tsconfig: 'tsconfig.cjs.json', // Optional: specific tsconfig for server
    // external: ['pg', 'express'], // Example: node_modules that shouldn't be bundled
    // copyAssets: [
    //   { from: '.env.example', to: 'dist/server/.env.example' }
    // ]
  },
};
