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

## Aufbau: Gruppen, Rollen und Training/Nachschlagewerk

Die Module sind in drei Gruppen geteilt (`groups` in `content/modules.js`):

| Gruppe | Module |
|---|---|
| Für alle | Team & Rollen, Zeiten & Notfall, Vorlaufzeiten |
| Wie briefe ich? (JIRA) | Briefing-Prozesse, JIRA & Tasks, Leitfäden, AEM-Briefing |
| CMS-Redaktion | Qualität: QM, tQM & CnP |

Wer „CMS“ wählt, bekommt „Für alle“ + „CMS-Redaktion“ als Lernpfad; „Briefing“ entsprechend „Für alle“ + „Wie briefe ich?“.
Fortschritt, Checkliste (`for: 'cms' | 'briefing'` je Punkt) und Abschlusscheck richten sich nach der gewählten Rolle.
Ein neues Modul bekommt in `modules.js` ein Feld `group`.

Zusätzlich hat jedes Modul ein `kind`: ohne Angabe = **Training** (zählt zum Fortschritt/Abschlusscheck,
erscheint nummeriert im Lernpfad), `kind: 'reference'` = **Nachschlagewerk** (CMS Top-Tipps,
Namenskonventionen – kein Zwang, kein Fortschrittszähler, eigener Menübereich unten in der Seitenleiste).

## Inhalte pflegen

Nach jeder Änderung an `content/*.md`, `app.js`, `styles.css`, `index.html` oder `content/modules.js` einmal
ausführen:

```bash
node build-bundle.mjs
```

Das aktualisiert `content/bundle.js` (Inhalte fürs Doppelklick-Öffnen) UND zählt die in der App sichtbare
Build-Nummer automatisch hoch (unten in der Seitenleiste, z. B. „v1.0.3 · 22.09. 14:53“) sowie den
Cache-Namen in `sw.js` – so lässt sich immer prüfen, ob ein geöffneter Stand die neuesten Änderungen enthält,
auch ohne dass man selbst an ein manuelles Hochzählen denken muss. Die Versions-Marke „1.0“ in
`content/version.json` ist der einzige Wert, den man von Hand für größere Meilensteine ändert – die
Build-Zahl dahinter zählt automatisch mit.

| Was | Wo |
|---|---|
| Texte der Module | `content/<modul>.md` (`##` = Tab/Akkordeon-Eintrag, `###` = Unterabschnitt, `### Schritt 1: …` = Schrittkarte) |
| Callouts | `> [!tip]`, `> [!info]`, `> [!warn]`, `> [!no]` |
| Modul-Reihenfolge, Gruppe/Kind, Lernziele, Quizfragen, Checkliste | `content/modules.js` |
| Glossar | `content/glossar.md` (`- **Begriff** – Erklärung`) |
| Links & Vorlagen | `content/links.md` |
| Versions-Marke (z. B. „1.0“ → „1.1“) | `content/version.json`, Feld `version` |

## Fortschritt

Wird nur lokal im Browser gespeichert (`localStorage`, Schlüssel `onb-v1`) – es werden keine Daten übertragen.
