/* Struktur des Lernpfads. Die Inhalte liegen als Markdown in content/<id>.md.
   layout: 'tabs' | 'accordion' | 'flat'  (## = Tab bzw. Akkordeon-Eintrag, # = Gruppe im Akkordeon) */
window.APP_CONTENT = {
  wiki: 'https://prev.o2online.de/wiki/',

  modules: [
    {
      id: 'team', nr: 1, icon: 'users', minutes: 10, layout: 'tabs',
      title: 'Team & Rollen',
      summary: 'Wer arbeitet hier wofür – und wen sprichst du bei welchem Thema an?',
      goals: ['Die zwei Teams (TEF & arsmedium) unterscheiden', 'Rollen und Zuständigkeiten kennen', 'Can Pham Ngoc als ersten Ansprechpartner kennen'],
      sources: [{ label: 'Publikationsprozess', url: 'https://prev.o2online.de/wiki/publikationsprozess/' }],
      quiz: [
        { q: 'Wer steuert das Inplant-Team? Ihm werden POMA-Tasks zur Verteilung an die CMS-Redakteure zugewiesen.', options: ['Reinhard Buschmann', 'Can Pham Ngoc', 'Tim Burmeister', 'Marjan Wolf'], answer: 1, why: 'Can Pham Ngoc steuert das Inplant-Team; Reinhard Buschmann ist Manager des Teams Digital Content & Design.' },
        { q: 'Welche Agentur stellt das Inplant-Team gemeinsam mit TEF?', options: ['Serviceplan Bubble', 'Trbo', 'arsmedium', 'ColorfulChairs'], answer: 2, why: 'Das Inplant-Team besteht aus Kolleg:innen der Agentur arsmedium.' },
        { q: 'Wer ist für Targeting & Personalisierung zuständig?', options: ['Tech', 'Trbo', 'arsmedium Technik', 'Creative Design Leads'], answer: 1, why: 'Trbo: Targeting & Personalisierung sowie Manipulationen auf der Webseite, die mit Boardmitteln nicht möglich sind.' },
        { q: 'Wer legt HW-Artikel an und pflegt PDPs und den eShop?', options: ['Das Backoffice', 'Motion Design', 'Die CMS Redaktion', 'UX Writing'], answer: 0, why: 'Das Backoffice verantwortet Anlage und Verwaltung der HW-Artikel, PDPs, eShop und Rahmenverträge.' }
      ]
    },
    {
      id: 'zeiten', nr: 2, icon: 'clock', minutes: 8, layout: 'tabs',
      title: 'Zeiten & Notfall',
      summary: 'Wann wird publiziert, was ist eine außerordentliche Freigabe und wer hilft im Notfall?',
      goals: ['Publikationszeiten auswendig kennen', 'Außerordentliche Freigabe korrekt erteilen', 'Wissen, wer den CnP macht'],
      sources: [{ label: 'Publikationsprozess', url: 'https://prev.o2online.de/wiki/publikationsprozess/' }],
      quiz: [
        { q: 'Bis wann wird freitags publiziert?', options: ['16 Uhr', '17 Uhr', '18 Uhr', '15 Uhr'], answer: 0, why: 'Mo – Do 09 – 17 Uhr, Fr und Tage vor Feiertagen 09 – 16 Uhr.' },
        { q: 'Wie muss eine außerordentliche Freigabe erfolgen?', options: ['Mündlich im Meeting', 'Schriftlich (JIRA oder Mail) mit dem Wort „außerordentlich“', 'Per Emoji im Teams-Chat', 'Nur durch Reinhard Buschmann'], answer: 1, why: 'Nur so liegt die Verantwortung für länger nicht behebbare Fehler eindeutig beim BO.' },
        { q: 'Wer ist für den CnP (Check nach Publikation) verantwortlich?', options: ['Die CMS Redaktion', 'arsmedium Technik', 'Der BO', 'Die Koordination'], answer: 2, why: 'Der BO. In Ausnahmefällen kann bei arsmedium in Nürnberg eine QM-Ressource angefragt werden.' },
        { q: 'Wofür ist der Notfall-Verteiler gedacht?', options: ['Für jede dringende Anfrage', 'Für Urlaubsvertretungen', 'Ausschließlich für kritische Bugs außerhalb der Bürozeiten', 'Für Adserver-Probleme'], answer: 2, why: 'Beim Adserver kann nur sehr eingeschränkt geholfen werden – von Nürnberg aus gibt es keinen Zugriff.' }
      ]
    },
    {
      id: 'briefing', nr: 3, icon: 'clipboard', minutes: 15, layout: 'tabs',
      title: 'Briefing-Prozesse',
      summary: 'So kommt eine Aufgabe zu den richtigen Leuten – je Fachrichtung.',
      goals: ['Den richtigen Kanal für ein Briefing wählen', 'Den Ablauf der CMS Redaktion kennen', 'Hard- und Soft-Bundles unterscheiden'],
      sources: [{ label: 'Allgemeine Briefing-Prozesse', url: 'https://prev.o2online.de/wiki/publikationsprozess/allgemeine-briefing-prozesse/' }],
      quiz: [
        { q: 'Wie lange darf eine Aufgabe im A-Briefing höchstens dauern?', options: ['Unter 15 Minuten', 'Unter einer Stunde', 'Einen halben Tag', 'Einen Tag'], answer: 0, why: 'Der A-Briefing-Task ist nur für kleine Anpassungen, Bugfixes und ToDos unter 15 Minuten. Er wird nur eine Woche geführt.' },
        { q: 'Wohin geht ein POMA-Task mit vollständigem Briefing für die CMS Redaktion?', options: ['Direkt an eine beliebige Redakteurin', 'An die Inplant-Koordination (Can) zur Verteilung', 'An den Notfall-Verteiler', 'An das Backoffice'], answer: 1, why: 'Bei Teaserbriefings unbedingt mit Link zur Excel-Tabelle.' },
        { q: 'Wie erhält die CMS Redaktion die fertigen Assets vom Inplant-Grafikdesign?', options: ['Per Teams-Chat', 'Über den Output-Link in der JIRA-Description', 'Per USB-Stick', 'Per Bildkauf'], answer: 1, why: 'Ausgabe der Assets an die CMS Redaktion immer über den Output-Link in der JIRA-Description.' },
        { q: 'Was unterscheidet ein Hard-Bundle von einem Soft-Bundle?', options: ['Hard-Bundles haben keine PDP', 'Hard-Bundles haben eine eigene Artikelnummer und PDP', 'Soft-Bundles brauchen 2 Wochen Konfektionierung', 'Nichts'], answer: 1, why: 'Hard: ca. 2 Wochen Konfektionierung, eigene Artikelnummer und PDP. Soft: ca. 2 – 3 Tage, Zugabe liegt nur bei.' }
      ]
    },
    {
      id: 'vorlauf', nr: 4, icon: 'calendar', minutes: 10, layout: 'flat',
      title: 'Vorlaufzeiten',
      summary: 'A, B, C1, C2: Wie früh muss gebrieft werden – und wann muss die Prev stehen?',
      goals: ['Die vier Briefing-Typen unterscheiden', 'Sonderregeln für Teaser, Landingpages und Deals kennen', 'Fristen mit dem Rechner bestimmen'],
      sources: [{ label: 'Publikationsprozess – Vorlaufzeit', url: 'https://prev.o2online.de/wiki/publikationsprozess/' }],
      quiz: [
        { q: 'Welche Vorlaufzeit gilt mindestens für ein C2-Briefing?', options: ['5 Tage', '2 – 4 Wochen', '1 Tag', '2 – 5 Tage'], answer: 1, why: 'C2: Module/Features, Codeobjekt für große Kampagnen – mind. 2 – 4 Wochen.' },
        { q: 'Du willst 8 neue Teaser briefen. Welche Vorlaufzeit gilt?', options: ['Am gleichen Tag', 'Ab 2 bis 5 Tage', 'Ab 5 bis 28 Tage', 'Mind. 4 Wochen'], answer: 1, why: 'Bis 5 Teaser: am gleichen Tag. Bis 10 Teaser: 2 – 5 Tage. Ab 10 Teaser: 5 – 28 Tage.' },
        { q: 'Wie viele Tage sollen bei einem C-Briefing zwischen Prev und Launch liegen?', options: ['Am gleichen Tag', '2 Tage', '5 Tage', '14 Tage'], answer: 2, why: 'A: am gleichen Tag · B: 2 Tage · C: 5 Tage.' },
        { q: 'Was zeichnet ein B-Briefing aus?', options: ['Es braucht ein Konzept und Code', 'Es ist sofort umsetzbar mit CMS-Modulen, ohne Code, ohne Konzept', 'Es dauert unter 15 Minuten', 'Es betrifft nur Bugs'], answer: 1, why: 'Beispiele: Landingpage, Monatswechsel, Recherchen, Machbarkeitsprüfungen.' }
      ]
    },
    {
      id: 'leitfaeden', nr: 5, icon: 'flag', minutes: 25, layout: 'tabs',
      title: 'Leitfäden: Kampagne, LP, Teaser, Deals',
      summary: 'Schritt für Schritt von Kickoff bis Retro – mit allen „Bitte nicht“-Regeln.',
      goals: ['Die Projektstruktur in JIRA aufbauen', 'CMS-Briefings vollständig und final abgeben', 'Retro und Performance-Review einplanen'],
      sources: [
        { label: 'C-Kampagne', url: 'https://prev.o2online.de/wiki/publikationsprozess/c-briefing/' },
        { label: 'Landingpage', url: 'https://prev.o2online.de/wiki/publikationsprozess/landingpage/' },
        { label: 'Teaser', url: 'https://prev.o2online.de/wiki/publikationsprozess/teaser/' },
        { label: 'Deals', url: 'https://prev.o2online.de/wiki/publikationsprozess/deals/' }
      ],
      quiz: [
        { q: 'Womit brieft man laut Leitfaden statt in Figma?', options: ['Nur per Teams-Nachricht', 'Mit PDFs aus Word oder PowerPoint', 'Mit Screenshots', 'Mit Miro-Boards'], answer: 1, why: 'Bitte nicht in Figma briefen, stattdessen PDFs mit Word oder PowerPoint verwenden.' },
        { q: 'Wie meldest du dich vor dem Urlaub ab?', options: ['Gar nicht', 'Über POMA-22015', 'Per Mail an alle', 'Über den Notfall-Verteiler'], answer: 1, why: 'Bitte nicht ohne Hinweis in den Urlaub gehen, stattdessen POMA-22015 nutzen.' },
        { q: 'Welche Sub-Tasks sind bei einer Landingpage verpflichtend?', options: ['Teaser, Footer, Navigation', 'SEO, Legal und Content', 'Fußnoten, Lightboxen, Tariftabellen', 'Kreation, Retro, Bugs'], answer: 1, why: 'SEO-Task, Legal-Task und Content-Task sind verpflichtend (mit * markiert).' },
        { q: 'Teaser-Briefing: Wo brieft man NICHT und was nutzt man stattdessen?', options: ['Nicht in Excel – lieber JIRA', 'Nicht in JIRA – stattdessen das Teaser-Briefing', 'Nicht per Mail – lieber Teams', 'Nicht im CMS – lieber Word'], answer: 1, why: 'Zusätzlich: keine Einzel-Anpassungen als eigenen Task, sondern den aktuellen Teaser-KW-Task nutzen.' },
        { q: 'Wann ist eine Retro bei Landingpages verpflichtend und wann findet sie statt?', options: ['Immer, direkt nach dem Launch', 'Ab B-Briefing, 2 Wochen nach Launch', 'Nur bei C2, nach 4 Wochen', 'Nie'], answer: 1, why: 'Teilnehmen: Umsetzer (Content, CMS, Kreation), SEO und PO.' }
      ]
    },
    {
      id: 'aem', nr: 6, icon: 'layers', minutes: 8, layout: 'flat',
      title: 'AEM-Briefing',
      summary: 'Was in ein Ticket gehört, damit die Umsetzung ohne Nachfragen klappt.',
      goals: ['Ein vollständiges AEM-Ticket schreiben', 'Die Grundregeln (Sprache, Umfang, Feedback) kennen'],
      sources: [{ label: 'AEM-Prozesse', url: 'https://prev.o2online.de/wiki/publikationsprozess/aem/' }],
      quiz: [
        { q: 'In welcher Sprache werden Tickets erstellt, an denen TechM beteiligt ist?', options: ['Deutsch', 'Englisch', 'Beides gemischt', 'Egal'], answer: 1, why: 'Alle Tickets mit TechM-Beteiligung auf Englisch.' },
        { q: 'Wie viele Content-Themen darf ein Ticket beschreiben?', options: ['So viele wie nötig', 'Genau eines', 'Maximal drei', 'Eines pro Woche'], answer: 1, why: 'Ein Ticket pro Content-Aufgabe.' },
        { q: 'In welcher Form soll neuer Text geliefert werden?', options: ['Als Screenshot', 'Als kopierbarer, fehlerfreier Endtext', 'Als Sprachnachricht', 'Als Figma-Frame'], answer: 1, why: 'Text muss kopierbar und final sein – nicht als Screenshot. Bevorzugt Word-DOC bzw. PowerPoint für Visualisierungen.' },
        { q: 'Wo dokumentierst du Feedback?', options: ['Nur im Chat', 'Im Ticket', 'In einer Mail an Can', 'Im Meeting'], answer: 1, why: 'Aus Transparenzgründen im Ticket und nicht nur im Chat.' }
      ]
    },
    {
      id: 'tipps', nr: 7, icon: 'lightbulb', minutes: 45, layout: 'accordion', search: true,
      title: 'CMS Top-Tipps',
      summary: 'Die Praxisregeln der CMS-Redaktion – 27 Themen zum Nachschlagen (Stand laut Wiki: September 2026).',
      goals: ['Die Grundregeln für Site, SEO, Links, Teaser, Preise und Code kennen', 'Wissen, wo du bei Sonderfällen nachschlägst'],
      sources: [{ label: 'CMS Top Tipps', url: 'https://prev.o2online.de/wiki/top-tipps/' }],
      quiz: [
        { q: 'Wie viele H1 gehört auf eine Content-Seite?', options: ['Keine', 'Genau eine', 'Mindestens zwei', 'Beliebig viele'], answer: 1, why: 'Nur eine H1 pro Seite. Auf der Home muss es keine H1 geben.' },
        { q: 'Wie lang sollen SEO-Title und -Description sein?', options: ['Title 55 – 60, Description bis 140 Zeichen', 'Title bis 30, Description bis 300', 'Beide genau 100', 'Egal'], answer: 0, why: 'Für den Shop unter Sitecfg pflegen.' },
        { q: 'Wie legst du einen Goto an?', options: ['Als DirectLink', 'Als ForwardLink', 'Als Redirect', 'Als Snippet'], answer: 1, why: 'Als DirectLink funktionieren Gotos nicht – man landet auf der Startseite.' },
        { q: 'Was gilt beim Duzen/Siezen?', options: ['Immer siezen', 'Generell duzen, „du“ klein; „Sie“ nur in der persönlichen Ansprache nach Login', 'Immer „Du“ groß', 'Je nach Laune'], answer: 1, why: '„Sie“ nur nach Login bzw. nach explizitem Briefing.' },
        { q: 'Löschen oder archivieren?', options: ['Immer archivieren', 'Löschen vorziehen, wenn es keinen triftigen Grund für die Archivierung gibt', 'Nie löschen', 'Nur Teaser löschen'], answer: 1, why: 'Vorher Screenshot der Seite, alle Referenzen (Preise, Teaser etc.) recherchieren und löschen.' },
        { q: 'Wer gibt Änderungen an der Hauptnavigation frei (neuer Punkt, Reihenfolge, entfernen)?', options: ['Der BO allein', 'Bertolt – der BO holt die Freigabe vorab ein', 'Niemand', 'Legal'], answer: 1, why: 'Bei einer reinen Umbenennung ist keine Freigabe nötig.' }
      ]
    },
    {
      id: 'namen', nr: 8, icon: 'tag', minutes: 10, layout: 'tabs',
      title: 'Namenskonventionen',
      summary: 'Erlaubte Zeichen, Umwandlung, Styles – inklusive Namenskonverter zum Ausprobieren.',
      goals: ['Dokument- und Ordnernamen regelkonform vergeben', 'Die Konvertierungstabelle anwenden', '„O2“ richtig schreiben'],
      sources: [{ label: 'Namenskonventionen', url: 'https://prev.o2online.de/wiki/manual/portal/namenskonvention/' }],
      quiz: [
        { q: 'Welche Zeichen sind in Dokumentnamen erlaubt?', options: ['Groß- und Kleinbuchstaben, Zahlen, Unterstrich', 'Kleinbuchstaben a–z, Zahlen 0–9, Bindestrich', 'Alles außer Leerzeichen', 'Nur Buchstaben'], answer: 1, why: 'Unterstrich, Leerzeichen, Umlaute, Großbuchstaben und Sonderzeichen sind nicht erlaubt.' },
        { q: 'Wie wird „Größe & Übersicht“ nach der Konvertierungstabelle umgewandelt?', options: ['groesse-und-uebersicht', 'grösse-&-übersicht', 'groesse-&-uebersicht', 'gr-sse-bersicht'], answer: 0, why: 'ö → oe, ß → ss, & → und, ü → ue, Leerzeichen → Bindestrich (kleingeschrieben).' },
        { q: 'Was steht am Ende eines Dokumentnamens?', options: ['Das Datum', 'Der Dokumententyp, z. B. startseite-page', 'Die Ticketnummer', 'Nichts'], answer: 1, why: 'Z. B. startseite-page oder startseite-article.' },
        { q: 'Wie schreibst du O2, wenn eine tiefgestellte 2 technisch nicht möglich ist?', options: ['Immer „O2“', 'o2 mit kleinem o', '02', 'Oxygen'], answer: 1, why: 'In String- und Xml-Attributen kannst du „O2“ schreiben – die Umwandlung erfolgt automatisch.' }
      ]
    },
    {
      id: 'qm', nr: 9, icon: 'shield', minutes: 8, layout: 'tabs',
      title: 'Qualität: QM, tQM & CnP',
      summary: 'Wer prüft was – und was passiert nach dem Launch?',
      goals: ['QM und tQM unterscheiden', 'Wissen, was du als Neuling prüfen lässt', 'Nach der Publikation richtig nachprüfen'],
      sources: [{ label: 'CMS Top Tipps – QM/tQM', url: 'https://prev.o2online.de/wiki/top-tipps/' }, { label: 'Publikationsprozess – CnP', url: 'https://prev.o2online.de/wiki/publikationsprozess/' }],
      quiz: [
        { q: 'Was lässt ein neuer Redakteur (erste 3 Monate) im tQM prüfen?', options: ['Nur Rechtschreibfehler', 'Code (auch JSONs), Pageframe, Siteconfig, Konfigurator, Archivierungen', 'Nichts', 'Nur Teaser'], answer: 1, why: 'Im QM: alles außer kleinen Bugfixes wie Rechtschreibfehlern.' },
        { q: 'Wie lange nach der Publikation prüfst du funktional nach?', options: ['3 – 10 Minuten', 'Nach 24 Stunden', 'Am nächsten Montag', 'Gar nicht'], answer: 0, why: 'Anschließend Feedback an den BO.' },
        { q: 'Was führst du vor der Übergabe ins tQM aus?', options: ['Den JSON-Validator', 'Einen Performance-Test', 'Eine Archivierung', 'Einen Bildkauf'], answer: 0, why: 'Z. B. jsonformatter.curiousconcept.com.' },
        { q: 'Ab wann gilt man als „erfahrener Redakteur“?', options: ['Ab Tag 1', 'Ab dem 4. Monat', 'Ab dem 12. Monat', 'Nach dem ersten Launch'], answer: 1, why: 'Dann prüfst du nach persönlichem Ermessen – bei großen Projekten, viel Text und portalübergreifenden Preisanpassungen aber weiterhin.' }
      ]
    }
  ],

  checklist: [
    { group: 'Woche 1 – Ankommen', items: [
      { id: 'c1', text: 'Wiki-Startseite „Publikationsprozess“ lesen', to: '/m/team' },
      { id: 'c2', text: 'Team & Rollen durchgehen; Can Pham Ngoc als ersten Ansprechpartner kennenlernen', to: '/m/team' },
      { id: 'c3', text: 'Zugänge prüfen: JIRA, Teams, SharePoint „Design Chapter“, CMS, Compendium', to: '/links' },
      { id: 'c4', text: 'Publikationszeiten und außerordentliche Freigabe verinnerlichen', to: '/m/zeiten' },
      { id: 'c5', text: 'Abwesenheits-Task POMA-22015 ansehen (vor jedem Urlaub nutzen)', to: '/m/leitfaeden/c-kampagne' }
    ]},
    { group: 'Woche 2 – Briefings verstehen', items: [
      { id: 'c6', text: 'Briefing-Typen A / B / C1 / C2 und Prev-Fristen sicher können', to: '/m/vorlauf' },
      { id: 'c7', text: 'Beispiel-Epics 2026 in JIRA ansehen (A-Briefing, Teaser, EOL)', to: '/links' },
      { id: 'c8', text: 'Teaser-Briefing-Vorlagen im SharePoint öffnen', to: '/links' },
      { id: 'c9', text: 'Leitfäden C-Kampagne, Landingpage, Teaser und Deals durcharbeiten', to: '/m/leitfaeden' },
      { id: 'c10', text: 'AEM-Ticket-Vorlagen ansehen (DECM-3423, DECM-924, TMTA-2961)', to: '/m/aem' }
    ]},
    { group: 'Woche 3–4 – Handwerk', items: [
      { id: 'c11', text: 'CMS Top-Tipps einmal komplett lesen', to: '/m/tipps' },
      { id: 'c12', text: 'Namenskonventionen lernen und Konverter ausprobieren', to: '/m/namen' },
      { id: 'c13', text: 'Ersten Task gemeinsam mit einer erfahrenen Kolleg:in im QM/tQM begleiten', to: '/m/qm' },
      { id: 'c14', text: 'Abschlusscheck bestehen', to: '/abschluss' }
    ]}
  ]
};
