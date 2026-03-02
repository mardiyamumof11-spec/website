# Mardiya – Mum of 11

A soft, elegant digital card website for personalised e-cards and poems, designed with a warm, feminine aesthetic and a **mobile-first** user experience.

---

## 1) Project Overview

**Mardiya – Mum of 11** is a static website concept focused on sharing beautiful, personalised digital cards and poems.

### Purpose
- Present personalised e-cards and poem content in a graceful, emotionally warm format.
- Offer a polished online presence that feels intimate, calm, and welcoming.
- Support quick access and smooth reading on phones first, then scale up for larger devices.

### Design Direction
- Soft, elegant, feminine visual language.
- Light tones, delicate typography, and spacious layouts.
- Minimal, refined interactions that do not distract from the message.

### UX Approach
- Built **mobile-first** by default.
- Progressive enhancement for tablet and desktop.
- Readability and comfort prioritized across all screen sizes.

---

## 2) Tech Stack

This project is intentionally lightweight and compatible with static hosting.

- **HTML5** for semantic page structure.
- **CSS3** for styling and responsive layout.
- **Google Fonts** (optional) for elegant typography.
- **Vanilla JavaScript** only when necessary for small interactions.
- **Static-only architecture** compatible with **GitHub Pages**.

> No heavy frameworks are required unless specifically requested later.

---

## 3) Design Guidelines

Use these guidelines for consistent visual quality:

- **Backgrounds:** light, soft tones (beige, blush, cream).
- **Headings:** elegant serif fonts (e.g., `Playfair Display`).
- **Body text:** clean sans-serif font (e.g., `Inter`).
- **Theme preference:** avoid dark themes unless explicitly requested.
- **Spacing:** generous white space for a calm, premium feel.
- **Components:** rounded, soft edges on cards/buttons/containers.
- **Effects:** subtle gradients are allowed when used sparingly.

---

## 4) Responsive Rules (Important)

The layout must be implemented mobile-first and scaled progressively.

### Base Strategy
- Default CSS targets small/mobile screens.
- Use fluid widths and flexible spacing.
- Keep text legible on compact screens.

### Required Breakpoints

```css
/* Tablet */
@media (min-width: 768px) {
  /* Increase spacing, typography, and layout structure */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Further enhance sizing and multi-column arrangements */
}
```

### Responsive Best Practices
- Increase font sizes and spacing gradually by breakpoint.
- Keep the main layout centered using a max-width container.
- Avoid fixed widths that break on smaller screens.
- Maintain clear line-height and comfortable tap targets.

---

## 5) GitHub Pages Compatibility

This project must deploy cleanly via GitHub Pages from the `main` branch.

- No server-side code.
- No Node.js runtime required.
- No backend dependencies.
- Use **relative paths** only (e.g., `./assets/...`, `./css/...`).
- Ensure `index.html` is in the repository root.
- Works as a pure static site when served directly from `/main`.

---

## 6) Folder Structure

Recommended structure:

```text
.
├── index.html
├── README.md
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   └── styles.css
└── js/
    └── main.js   (optional)
```

> If JavaScript is not required, the `js/` directory can be omitted.

---

## 7) Accessibility

Build with accessibility as a default requirement:

- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
- Maintain proper heading hierarchy (`h1` → `h2` → `h3`).
- Provide descriptive `alt` text for all meaningful images.
- Ensure sufficient color contrast for readability.
- Avoid placing critical text inside images.

---

## 8) Performance

Keep the experience fast, especially on mobile networks:

- Optimize and compress image assets.
- Avoid heavy external libraries.
- Keep CSS clean, minimal, and reusable.
- Prioritize fast page load and smooth rendering.

---

## 9) Code Style Rules

Maintain a clean, maintainable codebase:

- Use consistent indentation.
- Choose clear, descriptive class names.
- Avoid inline styles unless strictly necessary.
- Comment important sections for easier maintenance.

---

## Quick Start (Static Preview)

Because this is a static site, you can run it locally by simply opening `index.html` in a browser.

For best results, use a lightweight local server during development (optional), while keeping output fully static for GitHub Pages deployment.

---

## License

This project can be licensed as needed by the repository owner.
