# Eleventy-Setup viktorsauer.org

Static Site Generator zur Vorbereitung des Sandwich- und Footer-Refactors.
Aktuell **nicht produktiv** im Einsatz. Die Live-Site lebt weiterhin auf
direkten HTML-Files im Repo-Root. Eleventy steht bereit für den Tag, an
dem das Sandwich oder der Footer in mehreren Files geändert werden muss.

## Installation auf einem neuen Rechner

```bash
cd _eleventy
npm install
```

`npm install` regeneriert den `node_modules/`-Ordner aus der `package-lock.json`. Dauert 10 bis 30 Sekunden.

## Build laufen lassen

```bash
cd _eleventy
npx @11ty/eleventy
```

Output landet in `_site/` (in `.gitignore`, also lokal).

## Watch-Modus für Entwicklung

```bash
npx @11ty/eleventy --serve
```

Startet einen lokalen Dev-Server auf Port 8080, baut bei jeder Datei-Änderung automatisch neu.

## Ordner-Struktur

```
_eleventy/
├── .eleventy.js          Eleventy-Config (Input/Output-Pfade)
├── package.json          Node-Dependencies-Definition
├── package-lock.json     gepinnte Versionen
├── README.md             diese Datei
├── src/                  Templates (Source)
│   ├── _includes/        Partials und Layouts
│   │   ├── base.njk      HTML-Skelett für alle Seiten
│   │   ├── sandwich.njk  Sandwich-Menu (eine Quelle der Wahrheit)
│   │   └── footer.njk    Footer (eine Quelle der Wahrheit)
│   └── template-test.njk Demo-Seite, nicht produktiv
├── node_modules/         (in .gitignore)
└── _site/                Build-Output (in .gitignore)
```

## Eine neue Seite anlegen

Beispiel: `src/impressum.njk`

```
---
layout: base.njk
title: Impressum
ogDescription: Rechtliche Angaben zu Viktor Sauer
permalink: /impressum/
---

<h1>Impressum</h1>
<p>...</p>
```

Nach `npx @11ty/eleventy`: Datei landet in `_site/impressum/index.html`.

## Migration auf das Tooling (für später)

1. Bestehende HTML-Files in `src/` als `.njk`-Templates ablegen
2. Doppelten `<head>`, `<header>` und `<footer>` raus, durch Front-Matter-Variablen ersetzen
3. Build laufen lassen
4. Inhalt von `_site/` in das Repo-Root kopieren (überschreibt alte HTMLs)
5. Commit, Push, Cloudflare deployed wie immer

Solange die Migration nicht passiert ist, hat dieser Ordner **null Auswirkung** auf die Live-Site. Cloudflare ignoriert ihn (keine Build-Config gesetzt).

## Konventionen

Site-Konventionen (Sandwich-Struktur, Footer-Inhalt, Title-Format, OG-Block, Sprache, Typografie) siehe Site-Datenblatt (extern, nicht im Repo).

