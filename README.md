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

The deployment script is `scripts/gh-pages-deploy.js`. It runs `npm run build`, checks that `dist/` exists, then uses `gh-pages` to commit and push the generated files to the `gh-pages` branch of the `origin` remote. A separate build command is not require