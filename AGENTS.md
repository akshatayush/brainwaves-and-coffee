# Repository Guidelines

## Project Structure & Module Organization
This repository is an Astro site. Route files live in `src/pages/` and map directly to URLs such as `src/pages/blog/index.astro` and `src/pages/projects/[slug].astro`. Reusable UI lives in `src/components/`, shared page shells in `src/layouts/`, and site-wide styles in `src/styles/global.css`.

Content is managed through Astro collections in `src/content/`. Add blog posts under `src/content/blog/` and project entries under `src/content/projects/`. Static public files such as favicons belong in `public/`, while imported images can live in `src/assets/`.

## Build, Test, and Development Commands
Run all commands from the repository root:

- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server on `localhost:4321`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the built site locally.
- `npm run astro -- check` runs Astro's project checks against the current codebase.

## Coding Style & Naming Conventions
Follow the existing code style: 2-space indentation in `.astro`, `.ts`, and CSS files; ES module syntax; and semicolons in TypeScript. Use `PascalCase` for component and layout filenames such as `PostCard.astro` and `Base.astro`. Keep content entry filenames lowercase and hyphenated, for example `on-the-ritual-of-coffee.md`.

Prefer small, composable Astro components and keep page-level data fetching inside route files. When updating content schemas, make the change in `src/content/config.ts` first.

## Testing Guidelines
There is no dedicated test suite checked in yet. Before opening a PR, run `npm run astro -- check` and `npm run build` to catch schema, routing, and production build issues. For content changes, verify affected pages locally in `npm run dev`, especially dynamic routes under `/blog/` and `/projects/`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries like `initial design` and `improve search results and filtering on tags`. Keep commit subjects concise, lowercase, and focused on one change.

Pull requests should include a brief description of the user-visible change, note any content schema updates, and attach screenshots for layout or styling changes. Link the related issue when one exists, and mention the commands you used for verification.

## Content & Configuration Notes
This project uses Astro content collections with required frontmatter fields like `title`, `date`, and `description`. Keep dates parseable, tags lowercase where practical, and avoid committing secrets or environment-specific configuration into the repo.
