# Aquí · Cali-Mex Food & Bar — Website

Redesign der Website für das Restaurant **Aquí** auf der Summerstage Wien.
Statische Website (HTML/CSS/JS) ohne Build-Schritt — einfach `index.html` öffnen.

## Inhalt

| Datei | Zweck |
|-------|-------|
| `index.html` | Seitenstruktur |
| `styles.css` | Design (Farben, Layout, Responsive) |
| `menu-data.js` | Speise- & Getränkekarte (Daten) |
| `app.js` | Menü-Rendering, Navigation, Reservierungsformular |
| `assets/` | Logo & Bilder |

## Lokal ansehen

Doppelklick auf `index.html` — oder ein kleiner lokaler Server:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Temporär deployen

Da es eine rein statische Seite ist, funktioniert jeder Static-Host. Empfohlen
(funktionieren auch mit **privatem** Repo, kostenlos):

- **Netlify** – netlify.com → „Add new site“ → Repo verbinden, oder den Ordner
  per Drag-&-Drop auf https://app.netlify.com/drop ziehen.
- **Vercel** – vercel.com → „New Project“ → Repo importieren.
- **Cloudflare Pages** – pages.cloudflare.com → Repo verbinden.

> Hinweis: **GitHub Pages** veröffentlicht private Repos nur mit einem
> kostenpflichtigen Plan (GitHub Pro). Für ein privates Repo daher besser
> Netlify/Vercel/Cloudflare nutzen.

## Reservierung

Das Formular hat keine Server-Anbindung: beim Absenden wird eine vorausgefüllte
E-Mail an `office@aqui-restaurant.at` erzeugt. Für echten Online-Versand später
einen Formular-Service (z. B. Formspree) oder ein Buchungssystem anbinden.
