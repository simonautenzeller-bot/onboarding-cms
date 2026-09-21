# Onboarding Kompass (PWA)

Desktop-first Einarbeitungs-App für neue Kolleg:innen. Inhalte basieren auf den Wiki-Seiten
`/wiki/redaktionsprozess` (→ Publikationsprozess inkl. Unterseiten) und `/wiki/top-tipps/`.

Reines HTML/CSS/JS – kein Build, keine Abhängigkeiten.

## Starten

**Einfach:** `index.html` per Doppelklick im Browser öffnen. Die Inhalte stecken dann in `content/bundle.js`.
Offline-Modus und „Als App installieren“ gibt es in dieser Variante nicht.

**Als PWA (installierbar, offline):** Über `http://localhost` oder `https://` ausliefern:

```bash
node serve.mjs 5173
```

Dann `http://localhost:5173` öffnen. Ein Service Worker und die Installation funktionieren nur über
`https://` oder `localhost`. Zum Verteilen für das Team den Ordner auf einen internen HTTPS-Webserver legen.
Achtung bei GitHub Pages: Die Seite ist öffentlich erreichbar, auch bei privatem Repository (außer bei GitHub Enterprise) –
die Inhalte stammen aus dem internen Wiki.

## Aufbau: Gruppen und Rollen

Die Module sind in drei Gruppen geteilt (`groups` in `content/modules.js`):

| Gruppe | Module |
|---|---|
| Für alle | Team & Rollen, Zeiten & Notfall, Vorlaufzeiten |
| Wie briefe ich? (JIRA) | Briefing-Prozesse, JIRA & Tasks, Leitfäden, AEM-Briefing |
| CMS-Redaktion | CMS Top-Tipps, Namenskonventionen, QM/tQM |

Wer „CMS“ wählt, bekommt „Für alle“ + „CMS-Redaktion“ als Lernpfad; „Briefing“ entsprechend „Für alle“ + „Wie briefe ich?“.
Fortschritt, Checkliste (`for: 'cms' | 'briefing'` je Punkt) und Abschlusscheck richten sich nach der gewählten Rolle.
Ein neues Modul bekommt in `modules.js` ein Feld `group`.

## Inhalte pflegen

Nach jeder Änderung an `content/*.md` einmal `node build-bundle.mjs` ausführen (aktualisiert `content/bundle.js`).


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
