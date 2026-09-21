## Welcher Kanal, welches Board?

Der Standardweg für Aufträge ist ein **Task in JIRA**. Wohin er gehört, hängt vom Thema ab:

| Ich brauche … | Kanal / Board | Wer bekommt ihn? |
|---|---|---|
| CMS-Umsetzung (A/B/C-Kampagne, Beratung, Konzept-Prüfung, Portalweiterentwicklung) | **POMA-Task** via JIRA | Inplant-Koordination (**Can**) verteilt an die CMS-Redaktion |
| Teaser | **Teaser-Briefing (Excel)** + Link im Task – nicht in JIRA selbst briefen | Can, über den aktuellen **Teaser-KW-Task** |
| Kreation, Konzept, Brand (C-Kampagne) | JIRA **Creation Digital Content Board** | Creative Content Leads (direkt ansprechen) |
| Grafikdesign (Daily Business A/B) | JIRA **Inplant Board** | Koordination (Can), dann Inplant-Design |
| Produktbilder für den eShop | JIRA **Inplant Board** | Inplant-Grafikdesign (Briefing vom HW-Backend) |
| Content-Ticket in **AEM** (O2) | **DECM-/TMTA-Ticket** | Can Pham Ngoc |
| Content-Ticket in **AEM** (Blau) | **DECM-/TMTA-Ticket** | Alexander Roth / Amin Pour Javid |
| Aufgabe für die Technik von arsmedium | **CS-Task** mit Präfix „Agentur“ im Titel | direkt an `arsmedium_tech` zuweisen |
| Dringend, CS-Task reicht nicht | **E-Mail auf Englisch** an den Verteiler (steht im Wiki unter „Top Tipps → Weitere Infos“) | – |
| Kleine ToDos | Microsoft Teams | – |
| Abstimmung | E-Mail | – |
| Urlaub melden | **POMA-22015** | – |

> [!info] Wer den Task erstellt, ist verantwortlich
> Bei Landingpage und Teaser gilt ausdrücklich: **Wer den JIRA-Task erstellt, ist für den Prozess verantwortlich.**

## Wichtige Task-Typen und Epics

Die Epics 2026 dienen als Sammelstelle und als Vorbild:

| Task | Ticket | Wofür |
|---|---|---|
| A-Briefing Epic 2026 | POMA-26926 | Kleine Anpassungen, Bugfixes, ToDos unter 15 Minuten. Wird jeweils nur **eine Woche** geführt |
| Teaser-Task Epic 2026 | POMA-26924 | Teaser und Teaser-Anpassungen (KW-Task) |
| eoL-Task Epic 2026 | POMA-26934 | Geräte, die aus dem Portal genommen werden |
| Teaser-Löschen-Task Epic 2026 | POMA-27230 | Abgelaufene Teaser löschen |
| Monatswechsel Epic 2026 | POMA-26932 | Monatswechsel |
| Deals Epic | POMA-26775 | Deals |
| Kampagne-Task mit Unter-Tasks | POMA-20078 | Vorbild für Kampagnen-Struktur |
| Preislisten & Formulare Epic | POMA-12137 | Preislisten und Formulare |
| Abwesenheit | POMA-22015 | Vor jedem Urlaub nutzen |

Alle Links findest du unter „Links & Vorlagen“.

### Struktur für Kampagnen, Landingpages, Deals

- **C-Kampagne:** ein Haupttask mit Subtasks (Landing Page, Teaser, Kreation, Fußnoten, Lightboxen, Tariftabellen, Tarife, Text-Content, Navigation, Footer, SEO, Legal, Bugs nach Launch).
- **Landingpage:** ein Epic. Verpflichtende Subtasks: **SEO, Legal, Content**. Jedes Segment mit eigener LP bekommt einen eigenen Subtask.
- **Deals:** ein Epic mit den Subtasks Landing Page, Teaser, Navigation.
- **Teaser:** bei einzelnen Anpassungen ein Haupttask, bei Teasern für Kampagnen und LPs ein Subtask.

Die Details stehen im Modul „Leitfäden“.

## Was in den Task gehört

Ein Task ist erst dann bereit zur Umsetzung, wenn er **vollständig und final** ist:

- **Vollständiges Briefing** im Task – abgelegt oder verlinkt. Bei Teasern immer der **Link zur Excel-Tabelle**, ergänzt mit „**Briefing ist final**“.
- **Echte Deadlines** (Prev, Launch) und die **Vorlaufzeit** beachten.
- **Ziellinks** frühzeitig liefern. Nicht ohne Ziellinks briefen.
- **Abhängigkeiten klären** (Agenturen, Abteilungen, Bildmaterial, Bildkauf, Recherche, Herstellervorgaben).
- **Stakeholder vertaggen** (Teamleiter, Entscheider, Product Owner).
- **Verantwortliche APs und Segmente** nennen.
- **Legal-Texte** vorher prüfen lassen (früh mit Frank Billing abklären).
- **Nicht in Figma briefen** – PDFs aus Word oder PowerPoint anhängen.

### Zusätzlich für AEM-Tickets

- **Ein Ticket pro Content-Aufgabe.**
- **Ist- und Soll-Zustand** beschreiben.
- **URLs und Umgebung** (e2e1, plrt/crt, prod). Bei Selfcare-Problemen die Login-Daten.
- Text als **kopierbarer Endtext**, nicht als Screenshot. Bevorzugt Word-DOC bzw. PowerPoint.
- **Screenshots**, Figma-Links und unterstützende Infos.
- Tickets mit **TechM auf Englisch**.
- Ticket-Vorlagen: **DECM-3423** (O2), **DECM-924** (Blau), **TMTA-2961**.

## Task-Lebenszyklus

1. **Briefing** – POMA-Task mit vollständigem Briefing, Zuweisung an die Koordination.
2. **Priorisierung** und Verteilung durch Can.
3. **Klärung von Abhängigkeiten.**
4. **Umsetzung** im CMS bzw. in der Kreation.
5. **2–3 Feedbackrunden** mit den BOs. Feedback im Ticket dokumentieren, nicht nur im Chat.
6. **QM** – rechtzeitig eine Prev, damit korrigiert werden kann.
7. **Publikation** (Mo–Do 09–17 Uhr, Fr 09–16 Uhr).
8. **CnP** durch den BO, danach **Feedback im Task**: Bugreport oder „passt alles, Task kann geschlossen werden“.
9. **Task abschließen.**

> [!tip] Status pflegen
> Reporter und Redakteure aktualisieren den Ticket-Status (in progress, review, closed) und setzen eine realistische Deadline mit passender Vorlaufzeit.

> [!warn] Nicht zu früh zurückgeben
> Als Redakteur:in gibst du einen Task erst zurück, wenn **Abschlussrecherche und Aufräumen im CMS** abgeschlossen sind. Bei „After Launch & Offlinenahme“-Tasks gilt: nicht zurückweisen, bevor alle Dokumente entfernt und gelöscht sind.

## Wo brieft man was NICHT?

Kurzübersicht der „Bitte nicht“-Regeln:

| Nicht … | Stattdessen … |
|---|---|
| in **Figma** briefen | PDFs mit Word oder PowerPoint |
| **Teaser** oder **Deals** in JIRA briefen | das **Teaser-Briefing** (Excel) benutzen |
| **Einzel-Anpassungen** als eigenen Task briefen | den aktuellen **Teaser-KW-Task** nutzen |
| ohne **Ziellinks** briefen | früh alle Ziellinks bereitstellen |
| ohne Hinweis in den **Urlaub** gehen | **POMA-22015** nutzen |
| **Legal-Texte** ungeprüft einbriefen | früh mit Frank Billing abklären |
