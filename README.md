# Gyan Bhoomi School Website

React-based school website for Gyan Bhoomi Higher Secondary School, Dobhi. The site is focused on clear section-based navigation, better SEO, school highlights, student achievers, and direct contact access for enquiries or admissions.

## Current Sections

- `Home`: Hero section with school introduction and stats
- `Highlights`: Scroll-based showcase for school strengths and facilities
- `Achievers`: Horizontal gallery for top student results
- `Contact`: Contact cards, WhatsApp enquiry form, map, and social links

## Project Structure

```text
src/
|-- App.jsx
|-- index.js
|-- hooks/
|   `-- useReveal.js
|-- components/
|   |-- ContactUs.jsx
|   |-- Cursor.jsx
|   |-- Footer.jsx
|   |-- Gallery.jsx
|   |-- Hero.jsx
|   |-- HorizontalGallery.jsx
|   |-- Navbar.jsx
|   |-- OrnamentDivider.jsx
|   |-- Projects.jsx
|   `-- StudentPosts.jsx
|-- css/
|   |-- ContactUs.css
|   |-- Footer.css
|   |-- Gallery.css
|   |-- globals.css
|   |-- Hero.css
|   |-- HorizontalGallery.css
|   |-- Navbar.css
|   |-- Projects.css
|   `-- StudentPost.css
`-- img/
```

## Available Scripts

```bash
npm install
npm start
npm run build
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd start
npm.cmd run build
```

## SEO Work Included

- Improved page title, description, keywords, Open Graph, and Twitter tags
- Added cleaner `School` schema markup in `public/index.html`
- Updated `robots.txt`, `sitemap.xml`, and `site.webmanifest`
- Added a skip link and better section labeling for accessibility

## Content Update Points

- School highlights cards: `src/components/Projects.jsx`
- Student achievers list: `src/components/HorizontalGallery.jsx`
- Contact details and social links: `src/components/ContactUs.jsx`
- Global metadata: `public/index.html`

## Build Status

Production build verified successfully with:

```bash
npm.cmd run build
```
