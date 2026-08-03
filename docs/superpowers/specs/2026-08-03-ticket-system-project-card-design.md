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

## Nicht Teil dieser Änderung

- Kein Fix für das Vercel-Routing-Problem der Live-Demo (direkte Aufrufe von `/login` etc. liefern dort aktuell einen 404, da kein SPA-Rewrite konfiguriert ist).
- Keine Änderung an der Reply-Tracker-Karte außer der Position in der Liste.
- Keine Screenshots/Bilder für die Reply-Tracker-Karte.

## Test/Verifikation

- `npm run dev` in `portfolio-website` starten, Projects-Bereich im Browser prüfen: beide Karten untereinander, Ticket System oben, Bild lädt, Links öffnen die richtigen Ziele.
