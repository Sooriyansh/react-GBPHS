# 🔥 Alex Sharma — Portfolio (React)

Luxury Dark + Copper theme portfolio website built in React.

## 📁 Project Structure

```
src/
├── App.jsx                    ← Main app (assembles all components)
├── index.js                   ← React entry point
├── styles/
│   └── globals.css            ← CSS variables, shared styles, cursor
├── hooks/
│   └── useReveal.js           ← Scroll reveal IntersectionObserver hook
└── components/
    ├── Cursor.jsx / .css      ← Custom cursor (dot + ring)
    ├── Navbar.jsx / .css      ← Fixed navigation with scroll effect
    ├── Hero.jsx / .css        ← Landing section with count-up stats
    ├── Skills.jsx / .css      ← Animated skill bars (4 categories)
    ├── Projects.jsx / .css    ← Project gallery (6 cards, hover overlay)
    ├── Contact.jsx / .css     ← Contact form + links
    ├── Footer.jsx / .css      ← Footer
    └── OrnamentDivider.jsx    ← Decorative copper diamond divider
```

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

## 🎨 Color Theme — Copper

| Variable        | Value     | Use                        |
|----------------|-----------|----------------------------|
| `--copper`      | `#cd5529` | Primary accent             |
| `--copper-light`| `#e8733f` | Hover states               |
| `--copper-pale` | `#f5c4a8` | Subtle text highlights     |
| `--copper-dim`  | `#7a3318` | Muted accents, borders     |
| `--black`       | `#070707` | Background                 |
| `--white`       | `#f2ece6` | Body text (warm ivory)     |

## ✏️ Customize

- **Your Name**: Update `App.jsx` logo + `Hero.jsx` monogram
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Skills**: Edit the `skillGroups` array in `Skills.jsx`
- **Contact**: Update email/links in `Contact.jsx`
- **Colors**: Change CSS variables in `globals.css`
