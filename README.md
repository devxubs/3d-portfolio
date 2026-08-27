# Xubayer Ahmed — 3D Portfolio Website

This repository contains the source code for my personal 3D portfolio website, built with React, TypeScript, Three.js, React Three Fiber, and GSAP. The portfolio is designed to showcase my skills, experience, projects, and creative work through a modern interactive interface with smooth animations and immersive 3D visuals.

## Live Website

**Portfolio:** https://hxnix-gold.vercel.app/

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- Modern responsive one-page portfolio
- Interactive 3D character experience
- Smooth GSAP-powered animations
- Scroll-based animations and transitions
- Custom cursor interactions
- Interactive hover effects
- Responsive navigation
- About Me section
- Career / Experience section
- Skills and technology showcase
- Services / What I Do section
- Featured projects and portfolio work
- Contact section
- Responsive design for desktop, tablet, and mobile devices
- Reusable React components
- TypeScript-based development
- Optimized 3D scene and visual effects

---

## About Me

I'm **Xubayer Ahmed**, a Full Stack Developer and Designer focused on building modern, interactive, and user-friendly digital experiences.

I work primarily with modern web technologies including React, TypeScript, Next.js, Node.js, Express.js, databases, and modern UI frameworks.

My goal is to create websites and applications that are not only functional but also visually engaging, fast, responsive, and enjoyable to use.

---

## Tech Stack

### Frontend

- React
- TypeScript
- JavaScript
- HTML5
- CSS3
- Vite
- Next.js

### UI & Styling

- Material UI
- Tailwind CSS
- DaisyUI
- Responsive Design
- Custom CSS Animations

### Animation & 3D

- GSAP
- `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`
- Framer Motion

### Backend

- Node.js
- Express.js
- REST APIs
- Socket.IO

### Database

- MongoDB
- MySQL
- PostgreSQL
- Supabase
- Prisma
- Mongoose
- Sequelize

### Other Tools

- Git
- GitHub
- Vercel
- Render
- Supabase
- VS Code

---

## Project Structure

```text
.
├── public/
│   ├── images/
│   ├── models/
│   └── assets/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Character/
│   │   │   ├── 3D scene components
│   │   │   └── character utilities
│   │   │
│   │   ├── styles/
│   │   │   └── component styles
│   │   │
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   │
│   ├── context/
│   │   └── global application state
│   │
│   ├── data/
│   │   └── portfolio data
│   │
│   ├── utils/
│   │   └── helper functions and animation utilities
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm 9 or later
- Git

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Runs the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint and checks the project for code-quality issues.

---

## Customization

The portfolio is structured so that the content can be easily customized.

### Personal Information

Update your personal information inside the relevant components and data files.

Common areas include:

```text
src/components/About.tsx
src/components/Career.tsx
src/components/Contact.tsx
src/components/Landing.tsx
```

### Projects

Portfolio projects can be managed from:

```text
src/components/Work.tsx
src/data/
```

Update project titles, descriptions, technologies, images, links, and other project information there.

### Skills & Technologies

Technology and skill information can be updated from:

```text
src/components/TechStack.tsx
```

### Services

Update the services and development capabilities from:

```text
src/components/WhatIDo.tsx
```

### Styling

Component-specific styles are organized inside:

```text
src/components/styles/
```

Global styling can be modified through:

```text
src/index.css
src/App.css
```

### 3D Character

The 3D character and scene behavior can be customized inside:

```text
src/components/Character/
```

This area contains the logic responsible for rendering and controlling the 3D experience.

### Animations

GSAP animations and related utilities can be customized inside the animation utility files.

You can modify:

- Scroll animations
- Page transitions
- Character movement
- Hover effects
- Timeline animations
- Section transitions

---

## Performance

Because the portfolio uses Three.js, React Three Fiber, post-processing, and GSAP animations, performance can vary depending on the device.

For better performance on low-end devices:

- Reduce 3D model complexity
- Reduce texture sizes
- Limit post-processing effects
- Reduce unnecessary animation loops
- Optimize large images and videos
- Lazy-load heavy assets
- Avoid unnecessary React re-renders

---

## Troubleshooting

### Blank Screen

If the application shows a blank screen:

1. Check the browser console.
2. Check for incorrect imports.
3. Verify that all dependencies are installed.
4. Run:

```bash
npm install
npm run build
```

### GSAP Target Not Found

If you see an error such as:

```text
GSAP target not found
```

make sure the target element exists before the animation runs and that the selector or React ref points to the correct element.

### 3D Scene Not Loading

Check:

- 3D model paths
- Texture paths
- Browser console errors
- Three.js dependencies
- Public asset paths

For assets inside `public/`, use paths relative to the public root:

```text
/assets/example.png
```

instead of:

```text
/public/assets/example.png
```

### TypeScript Errors

Run:

```bash
npm run build
```

This will reveal TypeScript and production build errors that should be fixed before deployment.

---

## Deployment

This project uses **Vite**, so it can be deployed to modern static hosting platforms.

### Vercel

Build the project:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

For Vercel, the framework should be configured as a Vite project with:

```text
Build Command: npm run build
Output Directory: dist
```

### Other Hosting Platforms

The generated `dist/` directory can also be deployed to platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- Other static hosting providers

---

## Environment Variables

If the project uses external APIs or backend services, configure environment variables through a `.env` file.

Example:

```env
VITE_API_URL=your_backend_api_url
```

Never commit private API keys, database passwords, service-role keys, JWT secrets, or other sensitive credentials to GitHub.

---

## Design Philosophy

The portfolio focuses on combining:

- Clean modern UI
- Interactive 3D elements
- Smooth motion
- Strong typography
- Minimal visual clutter
- Responsive layouts
- Fast interactions
- Developer-focused presentation

The goal is to create a portfolio that communicates both **technical ability and creative design skills** rather than functioning as a traditional static portfolio.

---

## Author

**Xubayer Ahmed**

Full Stack Developer & Designer

Focused on building modern web applications, interactive interfaces, and digital experiences.

---

## License

This project is available under the MIT License.

You are free to use, modify, and adapt the project according to the terms of the license.
