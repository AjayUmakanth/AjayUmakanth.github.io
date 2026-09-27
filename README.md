# Ajay Umakanth — Portfolio

A personal portfolio built with Vue 2 and Vue CLI, showcasing professional experience, education, technical skills, publications, and contact links. The interface uses Ant Design Vue and AOS animations.

Expected GitHub Pages URL: [https://ajayumakanth.github.io/](https://ajayumakanth.github.io/).

Repository: [AjayUmakanth/AjayUmakanth.github.io](https://github.com/AjayUmakanth/AjayUmakanth.github.io).

## Local development

Install Node.js and npm, then run these commands from the repository root:

```bash
npm ci
npm run serve
```

Open the local URL printed by the development server.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run serve` | Start the development server with hot reload. |
| `npm run build` | Build production assets into `dist/`. |
| `npm run lint` | Lint source files and apply automatic fixes. |
| `npm run deploy` | Build the app and publish `dist/` to the remote `gh-pages` branch. |


## Deploying to GitHub Pages

The deployment script is `scripts/gh-pages-deploy.js`. It runs `npm run build`, checks that `dist/` exists, then uses `gh-pages` to commit and push the generated files to the `gh-pages` branch of the `origin` remote. A separate build command is not required.

### Prerequisites

- Install dependencies with `npm ci`.
- Have Git installed, a configured Git author name/email, and credentials with push access to the repository.
- Check the deployment destination with `git remote -v`. For this portfolio, `origin` should point to `https://github.com/AjayUmakanth/AjayUmakanth.github.io.git` (or its SSH equivalent).

### Publish

```bash
npm run deploy
```

This publishes your current local app content. Save and commit source changes separately so the source history matches the deployed site; the deployment script only publishes generated files.

### First-time Pages setup

After the first successful deployment creates the remote `gh-pages` branch:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **gh-pages** and **/ (root)**, then click **Save**.
4. Check the repository's **Actions** tab for the Pages deployment to complete.
5. Open [https://ajayumakanth.github.io/](https://ajayumakanth.github.io/).

These are the expected settings for this script; the repository's current remote Pages settings have not been verified. See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Because this is the account site repository (`AjayUmakanth.github.io`), the expected URL is at the domain root, with no repository-name suffix. `vue.config.mjs` sets `publicPath: '/'` to match that layout.

For subsequent updates, run `npm run deploy` again. Pushing source changes alone does not invoke this local deployment script.

### Troubleshooting

- **Build fails:** resolve the reported build error before publishing; the script stops if the build fails.
- **Push fails:** check `origin`, Git credentials, and repository write access.
- **Site is missing or outdated:** confirm Pages uses `gh-pages` at `/ (root)` and inspect the Pages workflow in **Actions**. A successful script push does not mean the Pages deployment has finished.
- **Assets return 404:** confirm the deployment URL matches `publicPath`. Hosting a fork under a project subpath requires a matching base path.
