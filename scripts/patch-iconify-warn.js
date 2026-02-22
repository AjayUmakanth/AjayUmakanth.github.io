/**
 * Patches @iconify/utils warn.js to avoid Node < 20.12 error:
 * "The requested module 'node:util' does not provide an export named 'styleText'"
 */
const fs = require('fs');
const path = require('path');

const warnPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@iconify',
  'utils',
  'lib',
  'loader',
  'warn.js'
);

const patchedContent = `const warned = /* @__PURE__ */ new Set();
function warnOnce(msg) {
\tif (!warned.has(msg)) {
\t\twarned.add(msg);
\t\tconsole.warn(\`[@iconify-loader] \${msg}\`);
\t}
}
export { warnOnce };
`;

try {
  if (fs.existsSync(warnPath)) {
    const current = fs.readFileSync(warnPath, 'utf8');
    if (current.includes('styleText')) {
      fs.writeFileSync(warnPath, patchedContent);
      console.log('[@iconify/utils] Patched warn.js for Node < 20.12 compatibility');
    }
  }
} catch (err) {
  console.warn('Could not patch @iconify/utils:', err.message);
}
