# Onboarding Kompass (PWA)

Desktop-first Einarbeitungs-App für neue Kolleg:innen. Inhalte basieren auf den Wiki-Seiten
`/wiki/redaktionsprozess` (→ Publikationsprozess inkl. Unterseiten) und `/wiki/top-tipps/`.

Reines HTML/CSS/JS – kein Build, keine Abhängigkeiten.

## Starten

```bash
node serve.mjs 5173
```

Dann `http://localhost:5173` öffnen. Ein Service Worker und die Installation als App funktionieren nur über
`https://` oder `localhost`. Zum Verteilen den Ordner auf einen beliebigen HTTPS-Webserver legen
(SharePoint/OneDrive reichen nicht – dafür wird ein echter Webserver oder GitHub/Azure Static Web Apps o. Ä. benötigt).

## Inhalte pflegen

| Was | Wo |
|---|---|
| Texte der Module | `content/<modul>.md` (`##` = Tab/Akkordeon-Eintrag, `###` = Unterabschnitt, `### Schritt 1: …` = Schrittkarte) |
| Callouts | `> [!tip]`, `> [!info]`, `> [!warn]`, `> [!no]` |
| Modul-Reihenfolge, Lernziele, Quizfragen, Checkliste | `content/modules.js` |
| Glossar | `content/glossar.md` (`- **Begriff** – Erklärung`) |
| Links & Vorlagen | `content/links.md` |

Nach inhaltlichen Änderungen in `sw.js` die `VERSION` erhöhen, damit installierte Apps den neuen Stand laden.

## Fortschritt

Wird nur lokal im Browser gespeichert (`localStorage`, Schlüssel `onb-v1`) – es werden keine Daten übertragen.
