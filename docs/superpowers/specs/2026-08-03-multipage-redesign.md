# Mehrseitiges Redesign — Design

## Ziel

Die Portfolio-Website von einer einzigen Scroll-Seite auf drei Seiten (Home, About, Work) umbauen, im visuellen Stil des Once-UI-"Magic-Portfolio"-Next.js-Templates (https://magic-portfolio-for-next-js-gamma-jet.vercel.app): dunkles Theme mit lila/blauem Glow-Hintergrund, schwebende Pill-Navbar, groß-fette Hero-Typografie mit Eyebrow-Badge, abgerundete Karten mit Screenshot-Bildern.

## Entscheidungen (vom Nutzer vorgegeben)

- Mehrseitig statt einseitig, aber nur Home/About/Work — kein Blog, keine Gallery (kein Content dafür vorhanden).
- Kein Hell/Dunkel-Umschalter, festes Dark-Theme.
- Sprache der Seite: Englisch.
- Home: kurze Info über mich + Projekte mit Verlinkung zu den anderen Seiten.
- About: ausführlichere Infos über mich + Kontaktdetails.
- Work: ausführlichere Projektbeschreibungen.

## Struktur

- `react-router-dom` (BrowserRouter) neu als Abhängigkeit.
- `src/App.jsx` ist jetzt die Router-Shell: `glow-bg`-Hintergrund, `Nav`, `<Routes>` (`/`, `/about`, `/work`), `Footer`. `ScrollToTop`-Komponente setzt den Scroll bei Routenwechsel zurück auf 0.
- `src/components/`: `Nav.jsx` (Pill-Navbar mit Home/About/Work, Icon + Label, aktiver Zustand), `Footer.jsx` (Copyright + Social-Icons), `Icons.jsx` (Inline-SVGs: Home, User, Briefcase, GitHub, LinkedIn, Mail, ExternalLink), `ProjectCard.jsx` (wiederverwendbar für Home-Teaser und Work-Detail via `variant` Prop), `ScrollToTop.jsx`.
- `src/pages/`: `Home.jsx`, `About.jsx`, `Work.jsx`.
- Bestehender Content (About-Text, Skills-Tags, Contact-Links, beide Projekt-Beschreibungen/Tags/Links) wiederverwendet, keine neuen Fakten erfunden.

## Visuelle Sprache

- Bestehender Türkis-Akzent (`rgb(89, 224, 211)`) beibehalten (passt zur Link-Farbe der Referenz), Hintergrund auf `#0a0a0f` mit drei fixen radialen Glow-Blobs (lila/blau/türkis, `position: fixed`, hinter dem Content via `z-index`).
- Pill-Navbar: `position: fixed`, oben zentriert, `backdrop-filter: blur`, aktiver Link hervorgehoben; auf Mobile (`max-width: 480px`) werden nur die Icons gezeigt, Labels ausgeblendet.
- Hero: Eyebrow-Badge-Pill, große fette Headline, gedämpfter Subtext, Avatar-CTA-Pill (Bild + Link zu `/about`).
- Projekt-Karten: abgerundete Ecken, dezenter Glow-Schatten, Screenshot oben, Tags als Pills, Links unten. `variant="teaser"` (Home, kurzer Text, ein "View project"-Link zu `/work`) vs. `variant="detail"` (Work, vollständiger Text, GitHub- und Live-Demo-Link).
- `index.css` auf einen minimalen Reset reduziert (vorher unbenutzte Vite-Template-Reste mit widersprüchlichem Light/Dark-Schema); das komplette Design-System lebt jetzt in `App.css`.

## Nicht Teil dieser Änderung

- Kein Blog, keine Gallery, keine Work-Experience-Timeline (kein Inhalt dafür vorhanden).
- Kein Hell/Dunkel-Umschalter, keine Live-Uhr/Zeitzonen-Anzeige (Schmuckfeatures der Referenz ohne funktionalen Mehrwert hier).
- Keine SPA-Fallback-Konfiguration (z.B. `vercel.json`) für die Portfolio-Website, da aktuell kein Hosting-Ziel bekannt ist.

## Test/Verifikation

- `npm run lint` und `npm run build` laufen fehlerfrei durch.
- Alle drei Routen (`/`, `/about`, `/work`) manuell im Browser geprüft: Inhalte korrekt, Nav-aktiv-Status korrekt, Bilder laden, interne und externe Links korrekt.
- Mobile-Viewport (375px) geprüft: Nav kollabiert auf Icons, kein horizontales Scrollen, Hero-Text bricht sauber um.
