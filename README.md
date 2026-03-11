# Brainwaves & Coffee

Brainwaves & Coffee is my personal Astro site for essays, project notes, and coffee-adjacent curiosities. Content is written in MDX, rendered through Astro content collections, and supports rich post features such as optimized images, callouts, code blocks, and KaTeX math.

## Stack

- Astro 6
- MDX via `@astrojs/mdx`
- Astro content collections
- KaTeX with `remark-math` and `rehype-katex`

## Getting Started

Use a recent Node.js LTS release, then install dependencies from the project root:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Astro will serve the site at `http://localhost:4321`.

## Project Layout

```text
src/
  assets/            Imported images used by posts and components
  components/        Reusable UI pieces such as cards, nav, and search
  content/           MDX entries for blog posts and projects
  layouts/           Shared page shells
  pages/             Route files for the site
  styles/            Global site styling
```

Blog posts live in `src/content/blog/` and project entries live in `src/content/projects/`. Each entry uses frontmatter such as `title`, `date`, `description`, `tags`, and optional `image` / `heroImage` fields.

## Useful Commands

```sh
npm run dev       # start the local dev server
npm run build     # create a production build in dist/
npm run preview   # preview the production build locally
npm run astro -- check
```

## Writing Content

Posts are authored in `.mdx`, so you can use normal Markdown plus Astro-powered components. The current setup supports:

- links, lists, quotes, tables, and fenced code blocks
- inline images from `src/assets/`
- reusable callouts
- inline and display math with KaTeX

For a formatting reference, see the example post in `src/content/blog/how-to-make-a-post.mdx`.
