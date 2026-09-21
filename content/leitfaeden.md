## C-Kampagne

**Was sind C-Kampagnen?** Zentrale Marketinginitiativen, die Produkte und Dienstleistungen durch eine integrierte Strategie aus verschiedenen Medien und Kanälen bewerben. Ziel: eine optimale Nutzererfahrung (UX), maximales Engagement und damit Verkäufe. C-Kampagnen sind die **umfangreichsten Kampagnen** bei O2 Telefónica.

Der Leitfaden begleitet dich durch alle Phasen: Planung, Durchführung, Nachbereitung.

> [!no] Bitte nicht … stattdessen
> - **Nicht in Figma briefen** → stattdessen PDFs mit Word oder PowerPoint verwenden.
> - **Nicht ohne Hinweis in den Urlaub gehen** → stattdessen POMA-22015 nutzen.
> - **Keine Legal-Texte ohne Überprüfung einbriefen** → stattdessen früh mit Frank Billing abklären.

### Schritt 1: Kampagnen-Kickoff initiieren

**Ziel:** Klar definierte Ziele, Zeitpläne und Verantwortlichkeiten.

- Alle Stakeholder zu einem ersten Meeting einladen und den Rahmen der C-Kampagne festlegen.
- Einen **Retro-Termin bis zu 7 Tage nach Launch** erstellen.

### Schritt 2: Projektstruktur festlegen

**Ziel:** Kampagnenaufgaben effektiv tracken und managen.

Lege in JIRA einen **übergeordneten Haupttask** an und teile ihn nach Bedarf in Subtasks auf:

- Landing Page(s) – pro Landingpage ein Task
- Teaser
- Kreation (Bild, Animation, Video)
- Fußnoten
- Lightboxen
- Tariftabellen – pro Segment ein Task
- Tarife (neu oder angepasst)
- Text-Content-Task
- Navigation
- Footer
- SEO-Task
- Legal-Task
- Bugs nach Launch

Als Vorbild dient das Wiki-Beispiel „Love-Deals“ mit Haupt- und Untertasks. Ein weiterer Musterfall in JIRA: POMA-20078 (Kampagne-Task mit Unter-Tasks).

> [!info] Vorlaufzeiten beachten
> A: am Tag · B: ab 2 – 5 Tage · C1: ab 5 Tage · C2: mind. 2 – 4 Wochen. Mehr dazu im Modul „Vorlaufzeiten“.

### Schritt 3: Brand, Legal und SEO informieren

**Ziel:** Alle geplanten Inhalte sind mit Brand, Legal und SEO abgestimmt und entsprechen den Richtlinien.

Abstimmung mit Brand, Legal und SEO **im Kick-off und vor dem CMS-Briefing**.

### Schritt 4: CMS-Briefing erstellen

**Ziel:** Alle visuellen, textlichen und technischen Ressourcen sind verfügbar und dokumentiert – für eine reibungslose Implementierung.

1. **Bildmaterial sicherstellen** – bei Bedarf neues anfordern.
2. **Technische Spezifikationen dokumentieren.**
3. **Finales CMS-Briefing erstellen.** Es muss von den zuständigen Stakeholdern geprüft und freigegeben und **final** sein, bevor es weitergeleitet wird.
4. Briefing bei Bedarf an **SEO und Legal** weiterleiten.

### Schritt 5: Umsetzung koordinieren

Regelmäßige Team-Meetings und Updates, um den Fortschritt zu überwachen und anzupassen – für eine flüssige Durchführung ohne Verzögerungen.

### Schritt 6: Qualität überwachen

- Deadlines strikt einhalten und alle Kampagnendetails prüfen.
- **Rechtzeitig eine Prev** für effektives QM umsetzen.
- QM-Vorlaufzeiten: **A** am gleichen Tag · **B** 2 Tage zwischen Prev und Launch · **C** 5 Tage zwischen Prev und Launch.

### Schritt 7: Abschluss mit Retro

Abschlussbewertung und Bericht über Erfolge und Lernfelder. Teilnehmen sollten:

- Alle Umsetzer (Content, CMS, Kreation)
- SEO
- Briefing Owner

## Landingpage

**Was sind Landing Pages?** Spezialisierte Webseiten für konkrete Marketingkampagnen. Sie sollen Besucher zu einer Aktion bewegen (Kauf, Service-Anmeldung) und sind auf Konversion und Nutzererfahrung optimiert. Sie sind zentraler Bestandteil der C-Kampagnen.

> [!no] Bitte nicht … stattdessen
> - **Nicht in Figma briefen** → PDFs mit Word oder PowerPoint.
> - **Nicht ohne Hinweis in den Urlaub gehen** → POMA-22015 nutzen.
> - **Keine Legal-Texte ohne Überprüfung** → früh mit Frank Billing abklären.

> [!info] Grundregel
> **Wer den JIRA-Task erstellt, ist für den Prozess der Landing Page verantwortlich.**

### Schritt 1: LP-Kickoff initiieren

Alle Stakeholder einladen, Ziele, Zeitpläne und Verantwortlichkeiten festlegen. Retro-Termin bis zu 7 Tage nach Launch anlegen.

### Schritt 2: Projektstruktur festlegen

Erstelle einen übergeordneten **Landing-Page-Task als Epic** und teile ihn in Subtasks auf. Mit \* markierte sind **verpflichtend**:

- Teaser
- Kreation (Bild, Animation, Video)
- Fußnoten
- Lightboxen
- Tariftabellen
- Navigation
- Footer
- **SEO-Task\***
- **Legal-Task\***
- **Content-Task\***

Bekommt jedes Segment (z. B. NK, BK) eine eigene Landing Page, wird **jedes Segment als eigener Sub-Task** hinterlegt.

| Briefing | Vorlaufzeit | Wofür |
|---|---|---|
| A | – | Bugs, A-Briefing-Todos, Tippfehler, Textänderungen |
| B | ab 2 – 5 Tage | Sofort umsetzbar mit CMS-Modulen, ohne Code, ohne Konzept |
| C | ab 5 Tage | Konzeption, Layout, Codeumsetzung, ab 2 Landingpages |

### Schritt 3: Brand, Legal und SEO klären

Abstimmung im Kick-off und vor dem CMS-Briefing.

### Schritt 4: CMS-Briefing erstellen

1. Bildmaterial sicherstellen (ggf. neu anfordern).
2. Technische Spezifikationen dokumentieren.
3. **Finales CMS-Briefing** erstellen – geprüft, freigegeben, final.
4. **Briefing ins JIRA-Ticket hochladen**, sodass das CMS-Team alles leicht findet.
5. An **SEO und Legal** weiterleiten.
6. **Wichtige Stakeholder vertaggen** (Teamleiter, Entscheider, Product Owner), damit alle informiert sind und Feedback geben können.

### Schritt 5: Umsetzung koordinieren

Regelmäßige Team-Meetings und Updates. **Timings für Prev und Launch prüfen**, damit Korrekturen rechtzeitig möglich sind.

### Schritt 6: Qualität überwachen

Deadlines einhalten, Details prüfen, rechtzeitig eine Prev umsetzen. QM-Vorlaufzeiten: **A** am gleichen Tag · **B** 2 Tage · **C** 5 Tage zwischen Prev und Launch.

### Schritt 7: Abschluss mit Retro

Die Retro erfolgt **2 Wochen nach dem Launch** mit allen Umsetzern (Content, CMS, Kreation), SEO und PO.

> [!warn] Pflicht
> Eine Retro ist für **alle Landing Pages ab B-Briefing verpflichtend**.

## Teaser

**Was sind Teaser?** Kurze, prägnante Elemente auf einer Webseite oder Landing Page, die Interesse wecken und zu einer Aktion bewegen (Kauf, Anmeldung). Sie sind auf Konversion und Nutzererfahrung optimiert.

> [!no] Bitte nicht … stattdessen
> - **Nicht in JIRA briefen** → stattdessen das **Teaser-Briefing** benutzen (Excel-Vorlage).
> - **Nicht ohne Hinweis in den Urlaub gehen** → POMA-22015 nutzen.
> - **Nicht ohne Ziellinks briefen** → früh alle Ziellinks bereitstellen.
> - **Keine Einzel-Anpassungen als eigenen Task briefen** → den aktuellen **Teaser-KW-Task** erstellen oder nutzen.

> [!info] Grundregel
> **Wer den JIRA-Task erstellt, ist für den Prozess des Teasers verantwortlich.**

### Schritt 1: Projektstruktur festlegen

- Bei **einzelnen Teaser-Anpassungen**: ein Haupttask.
- Bei Teasern für **C-Kampagnen und Landing Pages**: ein Subtask für den Teaser.

| Umfang | Vorlaufzeit |
|---|---|
| Bis zu 5 neue Teaser(-Anpassungen) | am gleichen Tag |
| Bis zu 10 neue Teaser(-Anpassungen) | ab 2 bis 5 Tage |
| Ab 10 neue Teaser(-Anpassungen) | ab 5 bis 28 Tage |

### Schritt 2: CMS-Briefing erstellen

1. **Passende Teaser-Art wählen:** Stage-Teaser, Product-Teaser, Hero-Teaser, Wide-Teaser, Navi-Teaser, Section-Teaser, Page-Header.
2. Die **Teaser-Übersicht** nutzen, um bereits erstellte Teaser einzusehen – gegen doppelte Erstellung, zur Adaption oder zum Verweisen.
3. **Bildmaterial einbriefen** (Anforderungen und Ziele klar definieren).
4. **Bildmaterial sicherstellen** (ggf. neu anfordern).
5. **Finales CMS-Briefing** erstellen.
6. Das finale **Excel-Briefing in den Task** einbinden – mit der Ergänzung **„Briefing ist final“**.

### Schritt 3: Umsetzung koordinieren

Austausch mit der CMS-Redaktion, Fortschritt überwachen. **Ausreichend Zeit zwischen Preview und Launch** lassen.

### Schritt 4: Qualität überwachen

Deadlines strikt einhalten, Details prüfen, rechtzeitig Prev. QM-Vorlaufzeiten: bis 5 Teaser am gleichen Tag · bis 10 Teaser 2 Tage · ab 10 Teaser 5 Tage zwischen Prev und Launch.

### Schritt 5: Abschluss und Performance reflektieren

Bewertung und Bericht über Erfolge und Lernfelder im **Bi-Weekly**. Ideal: Performance-Insights spätestens **4 Wochen nach Launch**.

## Deals

**Was sind Deals?** Spezielle Marketingaktionen, die Produkte oder Dienstleistungen durch **zeitlich begrenzte Angebote** attraktiver machen. Sie sollen Verkäufe steigern und Neukunden gewinnen.

> [!no] Bitte nicht … stattdessen
> - **Nicht in JIRA briefen** → **Teaser-Briefing** benutzen.
> - **Nicht ohne Hinweis in den Urlaub gehen** → POMA-22015 nutzen.
> - **Nicht ohne Ziellinks briefen** → früh alle Ziellinks bereitstellen.

### Schritt 1: Projektstruktur festlegen

Unterscheide zwischen **neuen Deals** und **Anpassungen bestehender Deals**.

Für neue Deals: ein übergeordneter Deal-Haupttask mit Subtasks für **Landing Page**, **Teaser** und **Navigation**. Beispiel „Love Deals“:

- Haupttask: Love Deal
  - Subtask: Landing Page
  - Subtask: Teaser
  - Subtask: Navigation

Vorlaufzeit für neue und angepasste Deal-Elemente: **ab 5 Tage**.

### Schritt 2: CMS-Briefing erstellen

1. Übergeordneten **Deals-Epic-Task** anlegen, dazu die Subtasks Landing Page, Teaser, Navigation.
2. Bildmaterial einbriefen und sicherstellen.
3. **Finales CMS-Briefing** – passend zur Deal-Art.
4. Das finale **Excel-Briefing in den Deal-Task** einbinden – mit „Briefing ist final“.

### Schritt 3: Umsetzung koordinieren

Austausch mit der CMS-Redaktion, Elemente anpassen. Genug Zeit zwischen Preview und Launch lassen.

### Schritt 4: Qualität überwachen

Deadlines strikt einhalten, alle Deal-Details prüfen, rechtzeitig Prev.

### Schritt 5: Abschluss und Performance reflektieren

Bericht im **Bi-Weekly**. Ideal: Performance-Insights spätestens **4 Wochen nach Deal-Ende**.

> [!tip] Weiterlesen
> Die Regeln für die CMS-Umsetzung von Deals (Ordner, Benennung, Preise) findest du im Modul „CMS Top-Tipps“ unter „Deals Regeln“.
