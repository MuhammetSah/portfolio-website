# Ticket System Projekt-Karte — Design

## Ziel

Eine zweite Projekt-Karte für das fertiggestellte "Support Ticket System" im Projects-Bereich der Portfolio-Website ergänzen, im gleichen visuellen Stil wie die bestehende "Reply Tracker"-Karte.

## Ausgangslage

`src/App.jsx` rendert im `Projects`-Abschnitt aktuell genau eine `.project-card` (Reply Tracker). Der umgebende `.projects`-Container zentriert diese eine Karte über `max-width: 500px; margin: 0 auto` in `App.css`.

## Änderungen

### 1. Layout: vertikale Liste statt Einzelkarte

- Neuer Wrapper `.project-list` innerhalb von `<section className="projects">`, der beide `.project-card`-Elemente untereinander mit Abstand anordnet (`display: flex; flex-direction: column; gap: 2rem`).
- Die bestehende `.project-card`-Breite (`max-width: 500px; margin: 0 auto`) bleibt pro Karte erhalten, wandert aber vom `.projects`-Selektor auf `.project-list`, damit beide Karten gleich breit und zentriert sind.

### 2. Reihenfolge

Neuestes Projekt zuerst: **Support Ticket System**, danach **Reply Tracker**. Keine inhaltliche Änderung an der Reply-Tracker-Karte.

### 3. Neue Karte: Support Ticket System

- **Vorschaubild**: Screenshot der Login-Seite (`src/assets/ticket-system-preview.png`, aus dem lokalen Dev-Server der `ticket-system`-Frontend erstellt, da die Live-Demo clientseitiges Routing ohne Vercel-Rewrite nutzt und Login-Daten nicht angelegt werden sollen). Neue CSS-Klasse `.project-image` (`width: 100%; border-radius: 8px; margin-bottom: 1rem; display: block`).
- **Titel**: "Support Ticket System"
- **Beschreibung** (länger als Reply Tracker, orientiert an `ticket-system/README.md`): Full-Stack-App zur Verwaltung von Support-Tickets (React + Flask). Registrierung/Login mit gehashten Passwörtern und Session-Auth. Rollenbasierte Rechte: Ersteller kann den Status ändern, nur ein Admin kann eine Lösung hinzufügen. Ticketliste aktualisiert sich automatisch nach dem Erstellen eines neuen Tickets, ohne Reload.
- **Tags**: React, React Router, Flask, SQLite, Flask-CORS, Werkzeug, Vercel, Render
- **Links**:
  - GitHub: https://github.com/MuhammetSah/ticket-system
  - Live Demo: https://ticket-system-two-ivory.vercel.app

### 4. Reply-Tracker-Karte: Vorschaubild ergänzt

- Screenshot der Login-Seite (`src/assets/reply-tracker-preview.png`), erzeugt aus dem lokal gestarteten Flask-Dev-Server (`reply-tracker/reply-tracker/app.py`, ohne Debug-Reloader wegen eines Hangs unter Git Bash/Windows). Gleiche `.project-image`-Klasse wie bei der Ticket-System-Karte. Keine sonstigen inhaltlichen Änderungen an dieser Karte.

### 5. Vercel-Routing-Fix im `ticket-system`-Repo (separates Repo, separater Commit)

Die Live-Demo (`https://ticket-system-two-ivory.vercel.app`) lieferte beim direkten Aufruf von clientseitigen Routen (`/login`, `/register`, `/tickets/:id`) einen echten Vercel-404 (`NOT_FOUND`), weil `frontend/vercel.json` nur einen Rewrite für `/api/:path*` enthielt und kein SPA-Fallback auf `index.html`. Fix: zusätzliche Rewrite-Regel

```json
{ "source": "/((?!api/).*)", "destination": "/index.html" }
```

Lokal verifiziert durch Produktions-Build (`npm run build`) und Auslieferung über `serve -s dist` (identisches Single-Page-Fallback-Verhalten wie Vercels Rewrite-Mechanismus): `/`, `/login`, `/register`, `/tickets/1` liefern danach 200 statt 404, echte Asset-Dateien (JS/CSS) werden weiterhin direkt ausgeliefert und nicht überschrieben. Andere Routen (Backend-API-Endpunkte, CORS-Konfiguration) wurden geprüft und zeigten keine weiteren Probleme.

**Wichtig:** Dieser Fix liegt im `ticket-system`-Repo, nicht im `portfolio-website`-Repo. Ein `git push` dorthin löst automatisch ein neues Vercel-Deployment der Live-Demo aus — das erfolgt nur nach ausdrücklicher Bestätigung.

## Nicht Teil dieser Änderung

- Keine sonstigen Änderungen an Backend- oder Frontend-Logik des Ticket-Systems.
- Keine inhaltlichen Änderungen an der Reply-Tracker-Karte außer Position in der Liste und Vorschaubild.

## Test/Verifikation

- `npm run dev` in `portfolio-website` gestartet, Projects-Bereich im Browser geprüft: beide Karten untereinander, Ticket System oben, beide Bilder laden, Links zeigen auf die richtigen Ziele. `npm run build` läuft fehlerfrei durch.
- `ticket-system/frontend`: `npm run build` + `serve -s dist` bestätigt SPA-Fallback für alle Client-Routen, Assets unverändert erreichbar.
