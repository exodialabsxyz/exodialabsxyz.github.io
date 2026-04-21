# 🤖 Agent Guidelines: Exodia Labs UI

This document serves as a standard operating procedure for AI agents working on the Exodia Labs interface. It ensures consistency in design, architecture, and development workflow.

## 🏛️ Core Philosophy
Exodia Labs is a strategic research space focused on AI, autonomous systems, and advanced cybersecurity. The design language is inspired by **DeepMind**:
- **Academic Rigor**: High-contrast typography (Serif for headings, Sans for body).
- **Futuristic Minimalism**: Clean layouts, sober color palettes, and subtle glass-morphism.
- **High Impact**: Use of primary accent `#667eea` for critical elements and call-to-actions.

## 🏗️ Technical Architecture
- **Framework**: Astro 5 (Static Site Generation).
- **Styling**: Tailwind CSS 4 (using the `@tailwindcss/vite` plugin).
- **Content**: Astro Content Collections with schema validation (Zod).
- **Environment**: Fully containerized with Docker and Docker Compose.

## 🛠️ Development Workflow (CRITICAL)

### 1. Docker-First Execution
All `pnpm` or `astro` commands **MUST** be run through Docker to ensure environment parity.
- **Install dependencies**: `docker compose run --rm app pnpm install`
- **Build**: `docker compose run --rm app pnpm build`
- **Dev Server**: `docker compose up`

### 2. Content Collections
The site uses three main collections in `src/content/`:
- `blog`: Main publications and articles.
- `authors`: Data-only collection (JSON) for centralized author info.
- `_research`: (Hidden) Previous research papers.

**Referencing Authors**: Authors are linked via the `reference` field in Zod. Never hardcode author details in Markdown; use the `exodia-labs.json` ID.

### 3. Theming System
Themes are managed via CSS variables in `src/styles/global.css`.
- Use `data-theme` attributes on the `<html>` element.
- Tailwind tokens (`primary`, `bg-primary`, etc.) are mapped to these variables.
- Always use utility classes (e.g., `text-primary`) instead of hex codes.

### 4. Component Standards
- **Buttons**: Use `rounded-xl` for all primary UI actions.
- **Cards**: Use the `.glass-card` utility for consistent surface styling.
- **Images**: Maintain a **16:9** aspect ratio for listing thumbnails and **21:9** for headers.

## 📝 Rules of Engagement

1.  **Neutral Tone**: Content must be professional and neutral. Avoid personal pronouns (I/My) unless explicitly requested. Focus on "The laboratory," "The project," or "The mission."
2.  **Performance**: Always prioritize SSG. Avoid unnecessary client-side JavaScript.
3.  **Hiding Research**: The research section is currently hidden from the main navigation and build (renamed to `src/pages/_research`). Do not re-enable without instructions.
4.  **Branding**: Public-facing name is **Exodia Labs**. Internal or code-level references might still use "Exodia Rebirth," but keep UI labels clean.

## 📂 Project Structure
```text
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Markdown/JSON data (Authors, Blog)
│   ├── layouts/        # BaseLayout and standard templates
│   ├── pages/          # Routing (Note: _research is hidden)
│   └── styles/         # global.css (Theme tokens)
├── public/             # Static assets (images/author pics)
└── Dockerfile          # Multi-stage build config
```

---
**Note to Agents**: When proposing changes, always check the `global.css` first to ensure you are respecting the existing token-based design system.
