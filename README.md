# Exodia Labs Interface

A high-performance research laboratory website built with Astro, following the DeepMind design philosophy. 

## 🧪 Philosophy & Design

This interface is designed to reflect the rigor of academic research combined with futuristic innovation.
- **Academic Rigor**: High-contrast serif typography and minimalist layouts.
- **Innovation**: Ethereal accents (#667eea) and glass-morphism effects.
- **DeepMind Style**: Sober color palette, generous whitespace, and focus on content hierarchy.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: Markdown + Astro Content Collections
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Dockerized Multi-stage build

## 🐳 Docker Guide

All actions are performed through Docker to ensure a consistent environment.

### Development
Start the development server with hot-reload:
```bash
docker compose up
```
The site will be available at `http://localhost:4321`.

### Production Build
To create a production-ready image:
```bash
docker build -t exodia-labs-ui .
```

## 🎨 Theming System

The system uses a token-based approach via CSS variables, allowing for rapid visual identity shifts while maintaining design logic.

### Configuration
Theme values are defined in `src/styles/global.css`. You can modify the following tokens in the `:root` selector:

| Variable | Description |
|----------|-------------|
| `--primary` | The main accent color (Default: #667eea) |
| `--bg-primary` | Main background color (Default: #0a0a0a) |
| `--bg-secondary` | Surface/Card background color |
| `--text-primary` | High-emphasis text color |
| `--text-secondary` | Low-emphasis/Body text color |

### Typography
The project uses three distinct font families:
- **Serif Display**: For high-impact headings and academic feel.
- **Sans**: For body text and modern interface elements.
- **Mono**: For technical data, system status, and code.

## 📝 Content Creation

To add new content, follow these steps:

### 1. File Locations
- **Publications**: `src/content/blog/*.md` (referring to main lab updates and papers)
- **Authors**: `src/content/authors/*.json`

### 2. Using Custom Images
To use your own images and ensure they are included in the build:
1. Place your image files in the `public/images/` directory (create it if it doesn't exist).
2. In your Markdown frontmatter, reference the image using a relative path from the public root: `image: "/images/your-image.jpg"`.

### 3. Image Standards & Dimensions
To maintain the high-impact minimalist aesthetic and prevent layout shifts:
- **Mandatory Aspect Ratio**: **16:9**
- **Recommended Dimensions**: 
  - **1920x1080 px** (Ideal for high-resolution displays)
  - **1280x720 px** (Minimum recommended)
- **Format**: `.webp` (preferred for performance), `.jpg`, or `.png`.
- **Style**: High-contrast, abstract, or technical imagery.
- **Interactions**: Images scale slightly on hover in listing pages for a dynamic feel. Inside publications, images remain static to maintain focus.

### 4. Frontmatter Requirements

#### Author Data (`src/content/authors/*.json`)
Centralize author information to avoid repetition.
```json
{
  "name": "Author Name",
  "avatar": "/images/author-avatar.webp",
  "bio": "Brief bio...",
  "github": "https://github.com/username"
}
```

#### Publications
```yaml
---
title: "Post Title"
description: "Short summary of the post"
publishDate: YYYY-MM-DD
author: "author-id" # Matches filename in src/content/authors/
image: "/images/blog-header.webp"
imageAlt: "Description for accessibility"
tags: ["experiment", "tech"]
---
```

## ⚡ Performance

Designed for 100/100 Lighthouse scores:
- **Zero JS by default**: Minimal hydration only where needed.
- **Optimized Fonts**: Pre-connected and swapped for system fonts during load.
- **Static Generation**: Pure SSG for instant load times.
