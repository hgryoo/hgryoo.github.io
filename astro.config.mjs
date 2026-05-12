import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// hgryoo.dev is the root site (CNAME → hgryoo.github.io). The two sibling
// repos publish under subpaths:
//   hgryoo.dev/knowledge-docs-site/   ← long-form code analysis docs
//   hgryoo.dev/knowledge-slides-site/ ← talk decks (Marp HTML/PDF)
const siteUrl = process.env.SITE_URL || 'https://hgryoo.dev';

export default defineConfig({
  site: siteUrl,
  server: { host: '0.0.0.0', port: 9997 },
  integrations: [
    starlight({
      title: 'hgryoo',
      description: 'Hyung-Gyu Ryoo — talks, notes, and code analysis on DBMS internals.',
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hgryoo' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/hgryoo9264' },
      ],
      sidebar: [
        { label: 'About', link: '/about/' },
        { label: 'Projects', link: '/projects/' },
        {
          label: 'Notes & Analyses ↗',
          link: 'https://hgryoo.dev/knowledge-docs-site/',
          attrs: { target: '_blank', rel: 'noopener' },
        },
        {
          label: 'Talks & Slides ↗',
          link: 'https://hgryoo.dev/knowledge-slides-site/',
          attrs: { target: '_blank', rel: 'noopener' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      favicon: '/images/favicon/favicon-32x32.png',
    }),
  ],
});
