# CLMI Lab Website

The official website for the **Casual Language and Multimodal Intelligence Lab (CLMI Lab)**. It presents the lab’s research areas, publications, projects, people, news, and contact information.

**Live site:** [clmilab.github.io](https://clmilab.github.io/)

## Technology

- React and TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Requirements

- Node.js 22.12 or later
- npm

### Install and run locally

```bash
git clone https://github.com/clmilab/clmilab.github.io.git
cd clmilab.github.io
npm ci
npm run dev
```

Vite starts the development server at [http://localhost:3000](http://localhost:3000).

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript checks |

## Project Structure

- `src/pages/` — page views
- `src/components/` — shared interface components
- `src/data/` — site content and configuration
- `src/context/` — shared application state
- `src/assets/` — images and other static assets

Update the relevant files in `src/data/` to maintain the site’s research, publications, people, projects, news, and contact details. Review and replace any clearly marked placeholder content before publishing.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages whenever changes are pushed to `main`. The workflow runs `npm ci` and `npm run build`, then publishes the generated `dist/` directory.

For initial setup, open **Settings → Pages** in the GitHub repository and set **Build and deployment → Source** to **GitHub Actions**. You can also start a deployment manually from the repository’s **Actions** tab.
