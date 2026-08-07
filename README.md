# Portfolio Website

Personal portfolio for **Muhammet Sahin** — a web developer in transition, bringing a background in customer service, quality management, and IT support into full-stack web development.

**Live site:** https://portfolio-website-ten-pi-79.vercel.app

## Overview

A single-page React application with three views:

- **Home** — hero introduction and a teaser of featured work
- **About** — bio, technical and transferable skills, and contact links
- **Work** — detailed write-ups of featured projects

The UI is a custom design system (no CSS framework): a floating pill-shaped nav with backdrop blur, rounded project cards, a soft multi-color glow background, and a teal accent color.

## Tech Stack

- [React 19](https://react.dev/) with [React Router 7](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) for tooling and the dev server
- Plain CSS (custom properties, no framework)
- [ESLint](https://eslint.org/) for linting
- Deployed on [Vercel](https://vercel.com/)

## Featured Projects

### [Shift Scheduling Tool](https://github.com/MuhammetSah/scheduling-tool)
An automated shift-scheduling tool for HR teams, built with React and Flask. HR defines employees, their availability constraints, and shift types with per-weekday staffing requirements; the tool generates a full monthly schedule via chronological backtracking with branch-and-bound (not a greedy pass), then lets HR fine-tune the result by hand, including swapping shifts between employees. Role-based access keeps employees to a read-only view of their own shifts.

**Stack:** React, React Router, Flask, SQLite, PostgreSQL, Flask-CORS, Werkzeug, Backtracking Algorithm

### [Support Ticket System](https://github.com/MuhammetSah/ticket-system)
A full-stack support ticket app built with React and Flask. Users register and log in with hashed passwords and session-based authentication, then create tickets and track their status. Role-based permissions let a ticket's owner change its status, while only an admin can add a solution. The ticket list refreshes automatically after creating a new ticket, with no page reload required.

**Stack:** React, React Router, Flask, SQLite, Flask-CORS, Werkzeug, Vercel, Render
**Demo:** https://ticket-system-two-ivory.vercel.app

### [Reply Tracker](https://github.com/MuhammetSah/reply-tracker)
A Flask and SQLite app that helps track whether you've already replied to a contact. Users can create an account, log in, and flag messages as replied or not replied. The dashboard sorts contacts from most to least overdue, so the person waiting longest for a reply always shows up first.

**Stack:** Flask, SQLite, Python
**Demo video:** https://youtu.be/WkqX6y5o-_w

## Getting Started

### Prerequisites
- Node.js 20+

### Installation
```bash
git clone https://github.com/MuhammetSah/portfolio-website.git
cd portfolio-website
npm install
```

### Development
```bash
npm run dev
```
Starts the Vite dev server with hot module reloading.

### Build
```bash
npm run build
```
Outputs a production build to `dist/`.

### Preview production build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project Structure
```
src/
├── assets/        # Images and static assets
├── components/    # Nav, Footer, ProjectCard, Icons, ScrollToTop
├── pages/         # Home, About, Work
├── App.jsx        # App shell and route definitions
├── App.css        # Design system and page styles
└── main.jsx       # Application entry point
```

## Contact

- **Email:** [Muhammet.Sahin@gmx.net](mailto:Muhammet.Sahin@gmx.net)
- **GitHub:** [@MuhammetSah](https://github.com/MuhammetSah)
- **LinkedIn:** [Muhammet Mustafa Sahin](https://www.linkedin.com/in/muhammet-mustafa-sahin-979946236/)
