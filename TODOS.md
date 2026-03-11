# TODOS — Brainwaves & Coffee

## Phase 1 — Must-Fix
- [x] 1.1 Rewrite About page with real content
- [x] 1.2 Fix empty hero eyebrow
- [x] 1.3 Add GitHub link to project entry

## Phase 2 — SEO & Discoverability
- [x] 2.0 Add `site` to astro.config.mjs
- [x] 2.1 Open Graph & Twitter Card meta tags
- [x] 2.2 RSS feed (`@astrojs/rss`)
- [x] 2.3 Canonical URLs
- [x] 2.4 Sitemap (`@astrojs/sitemap`)
- [x] 2.5 robots.txt

## Phase 3 — Accessibility & Core UX
- [x] 3.1 Create 404 page
- [x] 3.2 Skip-to-content link
- [x] 3.3 Estimated reading time on blog posts
- [x] 3.4 Share buttons on post pages
- [x] 3.5 Search modal accessibility (keyboard nav, aria-live, focus trap)

## Phase 4 — Code Quality
- [x] 4.1 Extract date formatting utility
- [x] 4.2 Centralize site constants

## Phase 5 — Polish & Features
- [x] 5.1 Prev/next post navigation
- [x] 5.2 Reading progress bar
- [x] 5.3 Expand Footer with social links
- [x] 5.4 View Transitions
- [x] 5.5 JSON-LD structured data

## Phase 6 — Future Polish
- [x] 6.1 Table of contents for longer posts
- [x] 6.2 Code block language labels and copy button
- [x] 6.3 Image lightbox
- [x] 6.4 Back-to-top button
- [x] 6.5 Custom scrollbar for dark mode
- [x] 6.6 Rename route files `[slug].astro` → `[id].astro`
- [x] 6.7 PostCard hover warmth

## Bugfixes — View Transitions Compatibility
- [x] 7.1 Fix search and dark mode buttons dying after client-side navigation (wrap Nav script in `astro:page-load`)
- [x] 7.2 Fix page transition tearing from CoffeeDecorations mouse tracking (replaced with CSS floating animations)
- [x] 7.3 Fix back-to-top button not showing after navigation (wrap in `astro:page-load`)
- [x] 7.4 Guard Search `is:inline` script against duplicate document listeners (`window.__searchInitialized`)
- [x] 7.5 Remove `transition:persist` from Nav to prevent stale DOM references
- [x] 7.6 Wrap ShareButtons, Post code-copy, and reading progress scripts in `astro:page-load`
- [x] 7.7 Convert Lightbox to delegated event listeners for navigation resilience

## Responsive Nav
- [x] 8.1 Mobile hamburger menu with slide-in drawer (Blog, Projects, About links)
- [x] 8.2 Dark mode toggle moved to drawer footer on mobile
- [x] 8.3 Search button remains in top-right on mobile
- [x] 8.4 Brand title centered in mobile header

## Security & Performance Audit
- [x] 9.1 Fix XSS in Search — replace `innerHTML` string concatenation with safe `createElement`/`textContent` DOM construction
- [x] 9.2 Move KaTeX CSS from Base.astro to Post.astro (saves 29KB on non-post pages)
- [x] 9.3 Trim Google Fonts from 10 weights to 6 (drop unused Playfair 500, 700, italics)
- [x] 9.4 Fix choppy back-navigation animation — skip `fade-up` stagger on client-side navigations via `astro:after-swap`
- [x] 9.5 Increase header button spacing (search/theme toggle too close together)
