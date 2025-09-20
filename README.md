# Personal Website

A minimalist personal website built with Astro and TailwindCSS.

## Features

- Clean, minimalist design inspired by [taimur.me](https://taimur.me)
- Fast, lightweight static site
- Responsive design optimized for all devices
- Easy to maintain and customize
- Deployed on GitHub Pages

## Pages

- **Home**: Personal bio with links to other sections
- **Bookshelf**: Curated list of impactful books organized by category
- **Blog**: Writing and thoughts on various topics
- **Projects**: Showcase of work and contributions
- **Contact**: Ways to connect and current focus

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- **Deployment**: GitHub Pages with automated deployment
- **Development**: Node.js with npm

## Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## Customization

1. **Personal Information**: Update the bio, name, and contact details in `src/pages/index.astro`
2. **Bookshelf**: Add your favorite books in `src/pages/bookshelf.astro`
3. **Projects**: Showcase your work in `src/pages/projects.astro`
4. **Blog Posts**: Add your writing in `src/pages/blog.astro`
5. **Styling**: Customize colors and spacing using TailwindCSS classes
6. **Profile Image**: Add your headshot to the `public/` directory and update the image reference

## Deployment

This site is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. Make sure to:

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push your changes to the main branch

## License

MIT License - Feel free to use this template for your own personal website!
