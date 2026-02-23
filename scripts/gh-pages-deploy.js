/**
 * Builds the Vue app and deploys the dist folder to the gh-pages branch.
 * Requires: npm run build, then gh-pages to push dist/ to GitHub.
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const distPath = path.join(__dirname, '..', 'dist');

console.log('Building project...');
execSync('npm run build', {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

if (!fs.existsSync(distPath)) {
  console.error('Build failed: dist folder not found.');
  process.exit(1);
}

console.log('Deploying to GitHub Pages (gh-pages branch)...');
const ghPages = require('gh-pages');

ghPages.publish(distPath, {
  branch: 'gh-pages',
  dotfiles: true
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  }
  console.log('Deployed successfully to gh-pages branch.');
});
