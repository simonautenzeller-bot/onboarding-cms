# Sonderfälle & Anlage

## Anlage Internet-Router (DSL, Glasfaser, Kabel, Homespot) {#router}

Die Anlage der Router-Hardware (DSL, Glasfaser, Kabel, LTE/5G) für die „Internet zuhause“-Produktdetailseiten liegt im Bereich der **Inplant-Redaktion**.

- Artikelnummern, alle Inhalte, Bildmaterial usw. **müssen gebrieft werden**.
- Im **Hardware-Ordner (ID 11653)** wird mit der gebrieften Artikelnummer die **TEF-Hardware** analog zu den anderen angelegt. Vorbild: `tefhardware-9999-980004-00` (ID 839908).
- In der TEF-Hardware die Bildelemente (Tab „Bilder“) **SMALL** und **MEDIUM** einpflegen. Dazu im Ordner Product-Content → _Router (ID 79573) einen Produkt-Ordner anlegen.
- Im Ordner **Hardware-Unit (ID 6445)** die jeweilige Hardware-Unit anlegen, gebriefte Inhalte einfügen (Vorbild: `tefhardwareunit-avm-fritzbox-7590ax`, ID 839906) und in der zugehörigen TEF-Hardware unter „Inhalt → HardwareUnit“ einbauen.
- Für die Hardware-Unit unter „Detailbeschreibung“ die **Geräte-Details (Layer-Lightbox)** anlegen, mit dem gebrieften Content pflegen und einbauen.
- Die Layer-Lightboxen liegen im Ordner **„router-hardware-layer“ (ID 129417)**. Vorbilder: `9999-980004-00-avm-fritzbox-7590ax-v2-layer-lightbox` (ID 1368644) und `...-layer-article` (ID 1368642).

> [!warn] Bei Neuanlage immer alles gleich publizieren.

## Internet zuhause Specials {#internet-zuhause}

### Tarif-Anlage

Bei den Internet-zuhause-**TEF-TARIFF**-Typen müssen **immer alle Felder** gepflegt sein: Inhalt, Listen mit Features, Fußnoten, Produkt-Elemente und System mit `discounts.big` und `attributes` (auf das richtige **PIB** achten). Am besten mit **Kopien** arbeiten und diese aktualisieren.

### TEF-TARIFF: Namen

- Feld **Produkt Name:** Name mit Downloadgeschwindigkeit, z. B. `O2 Home M 150`.
- Feld **Short Name:** nur der Produktname ohne Zahl, z. B. `O2 Home M`. Er wird nur bei den Tarif-Teasern des allgemeinen Verfügbarkeitschecks verwendet, weil dort die Downloadgeschwindigkeit aus einem anderen API-Call (`downloadbandwidth`) kommt.

### Features allgemein

- Am besten in der **Reihenfolge** einbauen, in der sie auf den Seiten angezeigt werden.
- Sinnvoll benennen, am besten mit „Typ, Inhalt, Tarif, Technologie, Wert“.
- `description5` und `description6` werden nur im **Verfügbarkeitscheck-Layer auf der PDP** angezeigt.
- `description7` bis `description10` erscheinen nur auf der **allgemeinen Verfügbarkeitscheck-Seite** in den Tarif-Teasern.
- Die Features `datavolume` (Pos 1), `bandwith` (Pos 2), `phone` (Pos 3), `sms` (Pos 4), `europe` (Pos 5), `promotion` (Pos 6) werden **nur auf der PDP** verwendet.
- Der Typ `downloadbandwith` liefert die numerische Bandbreite in den Tarif-Teasern (z. B. „Produktname 150 MBit/s“). Dafür das Feld „Key“ (Inhalt) mit dem numerischen Wert und unter System → „Einstellungen“ die Eigenschaft `downloadbandwidthText` mit dem Wert (z. B. „150 MBit/s“) pflegen.
- Im Feature-Typ `pib-link` müssen „Key“ und „Text“ jeweils **„Produktinformationsblatt“** heißen. Unter System → „Einstellungen“ wird das richtige, aktuelle PIB (Wert) verlinkt.

### Sonderfall Kabel (coax)

Das Feature `phone` (Pos 3) fällt bei Kabel weg. An dieser Stelle greifen dynamisch die Kabel-Features `uploadbandwidth` (Vodafone, Pos 3) und `uploadbandwidth-tc` (Tele Columbus, Pos 3).

`uploadbandwidth` zeigt immer den Vodafone-Wert als **Default**, auch vor dem V-Check, wenn der Lineowner noch unbekannt ist. Bei Tele Columbus wird der Wert nach dem V-Check mit dem TC-Wert überschrieben.

### Sonderfall Glasfaser (ftth)

`phone` (Pos 3) muss bei Glasfaser-Tarifen **immer für den Upload-Wert** genutzt werden und kann nicht umsortiert werden. Vor dem V-Check gilt er als Default. Nach dem V-Check, wenn Lineowner und genauer Upload-Wert bekannt sind, wird er dynamisch mit einem Snippet-Wert überschrieben. Ein anderer Feature-Typ würde den Upload nach dem V-Check **doppelt** anzeigen.

### Technologie-Auswahl-Layer

Gibt es an einer Adresse nach dem V-Check mehrere Technologien, öffnet „Technologie wählen“ beim Tarif das Technologie-Layer und empfiehlt eine Technologie.

- Bei neuen Tarifen immer das passende **`technologies`-Snippet** anlegen – anhand der CMS-ID aus dem Backoffice bzw. des TEF-Tariffs, z. B. `o2-home-l-250-ftth` oder `o2-home-l-250-dsl`.
- Ablage im Ordner **ID 140125** (`/snippets/shop/dsl-availability/technologies/`).
- Die Snippets sind derzeit leer, **müssen aber trotzdem angelegt werden**.

> [!warn] Ohne Snippet erscheint im Layer ein 404. Alle Neuanlagen immer gleich direkt publizieren.

## EOL-Task {#eol}

Stand 08/2025. **EOL** betrifft Geräte, die aus dem Portal genommen werden.

### Vorgehen

1. Nach der betroffenen URL unter „o2online“ suchen, Filter **„ForwardLink“ und „Code“**. Betroffene Links/Codes prüfen und anpassen bzw. löschen.
2. Am Ende eine **Abschlussrecherche des Gerätenamens** über alle Dokumenttypen. Es dürften nur noch Dokumente unter den Pfaden `siteconfig` oder `api` liegen – alles andere sollte gelöscht werden können.

### Standard-Regeln OnSite

- **Links entfernen.** Klingt der Kontext ohne Link seltsam oder bist du unsicher, geh auf Marjan zu (Neuformulierung).
- **Teaser aus Slidern/Seiten entfernen.** Bleiben weniger als 3, ein aktuelles ähnliches Gerät einfügen (z. B. das aktuelle Hero-Tablet). **Keine doppelten Teaser!** Bei Fragen zum zuständigen BO.
- Teaser, Bilder und Preise löschen.
- **XML-Sitemap:** Gerät auf die Hardwaregruppe ändern oder entfernen (letzte Variante der Gruppe).
- `accessory-recommendations` / `dev-accessory-recommendations` werden von André Michler gepflegt – ignorieren.

### Standard-Regeln Ratgeber

- **Links im Ratgeber-Content:** Kontext prüfen. Einfacher Fall: Link entfernen. Ergibt der Satz keinen Sinn mehr (z. B. „Hier erfährst du mehr zum iPad xy“), den ganzen Satz entfernen; ist die Infobox obsolet, die Infobox entfernen.
- Unklare Fälle im Teams-Kanal **„EOL-Anpassungen (CC, TEF, Ars)“** an ColorfulChairs geben.
- Wenn sinnvoll, das **aktuellste Gerät der Reihe** verlinken (Google Pixel 8 Pro fällt weg → Google Pixel 9 Pro). Der Sinn des Textes darf sich nicht ändern.
- Wird ein einzelner Teaser (z. B. Hero-Teaser) entfernt, eine passende **Teaser-Collection aus Ordner 63015** einbauen, z. B. `zentral-iphone-16-teaser-wide-occl-itemcoll`. Passt nichts, wird **1699868** eingebaut. Der Ratgeber-Content ist normalerweise schmal, die Wide-Collection kommt also dazwischen (**schmal – breit – schmal**). Bei Fragen: Alina, Huyen oder Kathrin.
- Teaser aus Slidern entfernen: bleiben weniger als 3, ein aktuelles ähnliches Gerät einfügen und als Kommentar an Manuela Seeberger im JIRA melden.
- Teaser, Bilder, Preise löschen.
- **Links aus Handymodul-Teasern entfernen.** Hängt das Handymodul in den Bestenlisten, Kommentar an Manuela Seeberger. Zum Prüfen die auf den Teaser verweisenden Collectoren öffnen und im Pfad nachsehen, ob Bestenlisten betroffen sind.

> [!warn] Keine Tasks zurückgeben, bevor Abschlussrecherche und Aufräumen im CMS abgeschlossen sind.

# Grundregeln im CMS

## Neue Styles oder Views {#styles}

- Bei der **Erstverwendung** neuer Styles oder Views (basierend auf arsmedium-Technik-Layouts) prüfen, ob sie im **Compendium** eingetragen und mit **„CMS“** markiert sind. Falls nicht, kann nicht umgesetzt werden – der Ball geht zurück an BO/arsmedium.
- **Unbedingt testen**, ob Darstellung und Funktionalität der Vorlage im Compendium entsprechen. Bei Abweichungen Feedback an arsmedium/BO/CMS-Team.
- Tasks an arsmedium können als **CS-Task** gestellt werden: Präfix **„Agentur“** im Titel, direkt an `arsmedium_tech` zuweisen.

## Site {#site}

| Fall | Was tun |
|---|---|
| Kopie/Neuanlage | **Alle Felder explizit prüfen und anpassen.** |
| Anpassung/Update | Siehe Liste unten. |

### Bei Anpassung/Update

- **Tracking-Code/Hotfixes:** nur gebriefte Trackings/Hotfixes einbinden. **Google Analytics** ist als Standard eingebunden. **VWO-Tracking** entfernen, falls noch vorhanden (veraltet). Testing-Tracking (Maxymiser, Google 365) in die Code-Elemente-Liste einhängen.
- **SEO + Metadaten** pflegen: **Title 55 – 60 Zeichen, Description bis 140 Zeichen** (für Shop unter Sitecfg).
- **Freie Schlagworte** (relevant für die interne Suche) proaktiv pflegen und Feedback geben, oder Briefing erfragen.
- **Menu-Context und LinkText** pflegen.
- Als View **immer OCCL** verwenden; View „Standard“ nur, wenn Compendium-Inhalte nötig sind (Neuroteaser o. Ä.).
- **Segment-Switcher:** Section-Farbe immer an die Seitenfarbe anpassen. Für jede Seite einen eigenen Switcher anlegen. Handout beachten.

## SEO {#seo}

- **Duplicated Content vermeiden** (Title, Description, Inhalt). Bei gedoppeltem Inhalt einen **Canonical Tag** einbinden (eShop: NK-Default-Gerät bzw. -Tarif als Ziellink, sonst je nach Briefing).
- Epic-Task für SEO-Regeln im Shop: **POMA-9457**.
- Schreibweise in den Metadaten: **„o2“ mit kleinem „o“**. Im LinkText für Breadcrumb: **„O2“ mit großem „O“**.
- **Headline-Struktur** (H1, H2, H3) beachten. **H1** muss auf jeder Content-Seite vorhanden und schlüssig sein – **nur eine H1 pro Seite**. Auf der Home muss es keine H1 geben.
- **Suchmaschinen-Settings** (index/follow etc.) beachten, ggf. erfragen. Alle **AB-Testing-Seiten** während des Tests auf **no-index/follow**.
- **Keine Canonicals bei Seiten mit no-index/follow**, da sich die Suchmaschinen-Settings auf die kanonische Zielseite übertragen können. Canonical auf sich selbst ist in Ordnung.
- Bei Anpassung von Navigation/MenuItem: Rücksprache mit Bertolt.
- **Keine Abkürzungen in der URL.** Ordnername bis max. 100 Zeichen, idealerweise bis max. 74.
- **Kein Text im Bild.**
- Auf **Performance** achten (Performance-Testing-Task: POMA-5066).
- Bei **externen URLs in ForwardLinks** am Ende einen `/` setzen (außer Shopdetailseiten).

## Link Elemente {#links}

| Typ | Verwendung |
|---|---|
| **ForwardLink** | Für allgemeine Verlinkungen. Interne Verweise (Target-Feld) und externe (Feld „Externe URL“). |
| **DirectLink** | Für Direktabrufe. Kann auch Dokumente direkt referenzieren. Im Target-Feld das Zieldokument, im URL-Segment-Feld den URL-Pfad. Danach im Parent-Dokument als Navigationsunterknoten bereitstellen. |
| **Redirects** | RedirectUrl bei Weiterleitungen zentral unter `/o2/_redirects` ablegen (passenden Ordner wählen). |

### DirectLinks für Downloads

Bei Anlage/Bearbeitung von DirectLinks für **Formular/Download** muss die Target-Option **„Do not redirect to target link“** gesetzt sein. Nur dann sieht der Kunde nicht mehr die statische URL, sondern die URL des DirectLinks.

1. Für jedes neue Download-Dokument im CMS ein **DirectLink-Dokument** anlegen.
2. Der DirectLink definiert die URL des Downloads: **URL-Segment** eintragen und den DirectLink in die **Navigationsunterknoten-Liste** des übergeordneten Links einhängen.
3. Die Dokumente liegen im **selben Ordner**.
4. Optional, damit die Unterknoten-Liste nicht zu voll wird: einen Unterordner mit eigenem URL-Segment anlegen. **Bestehende URLs dürfen nicht verändert werden!**
5. Namen der Download- und DirectLink-Dokumente = URL-Segment plus Endung.
6. **Alle Verlinkungen** auf das Download-Dokument erfolgen über den DirectLink (ForwardLinks, Artikel-Textlinks etc.).

## Allgemeine Regeln {#allgemein}

- **Keine Tasks zurückgeben**, bevor Abschlussrecherche und Aufräumen im CMS abgeschlossen sind.
- Bei Anpassungen an Tarifdetails **immer die Siteconfig-Dokumente mit bearbeiten:** `/sitecfg/configurator/tariff/o2shop/`.
- **Keine ID-basierten URLs** der Form `prev.o2online.de/id/12332098` verwenden.
- **Link Title pflegen** (barrierefreie Website).
- **Parameter** (zwischen `?` und `&`) aufdröseln und separat als **Wildcards** einhängen und wiederverwenden. Zentral ablegen unter `assets/wildcards/parameter` (ggf. Unterordner). Vorab prüfen, ob es sie schon gibt.
- **Interne Verlinkungen bevorzugen.**
- **Kein TargetWindow bei „page“** oder Layer bei „download“ (z. B. PDF) verwenden.
- **Externe Seiten, Downloads:** TargetWindow `_blank`/Fenstername (bei PDFs ggf. auch in den Metadaten, aber nur mit BO-Freigabe).
- **Platzhalter verwenden.** Wichtig: `https` statt `http` bei Seiten, die eingeloggt und ausgeloggt aufrufbar sind.
- **Kommentarfeld:** Bei Shortcuts (außer APP) den BO-Namen pflegen oder das POMA eintragen.
- **Gotos müssen als ForwardLink angelegt werden.** Als DirectLink funktionieren sie nicht – man landet auf der Startseite.

## Image {#image}

- **Kommentarfeld pflegen:** ggf. Text in der Grafik, ggf. Gerät.
- Mehrfach verwendete Bilder (Teaserbilder, Codebilder u. Ä.) **zentral ablegen** unter `assets/bilder` (+ ggf. Unterordner).
- **Stage: max. 100 KB.**

## Icon / Logo {#icon}

Befindet sich das Icon noch nicht im CMS (Ordner `shared > assets > icons-occl_o2`), schau in der **Brandfactory** nach:

- **Icon/Logo existiert dort:** die URL per **CS-Task an Matthias Wellershausen** geben, damit er es in die Library merged.
- **Existiert dort nicht:** der BO muss ein File des gewünschten Icons/Logos liefern. Dieses ebenfalls per CS-Task an Matthias Wellershausen geben.

## Navigation {#navigation}

Die Portalnavigation wird mit dem Dokumententyp **MenuItem** aufgebaut – für grafische und textuelle Darstellung. Beide unterstützen die Zustände Normal, Hervorgehoben und Ausgewählt. Die Verlinkung erfolgt über das LinkList-Attribut **Untermenü**: dort werden die Navigationsdokumente der nächsten Ebene eingehängt.

| Feld | Bedeutung |
|---|---|
| Link-Text | Menüpunkt-Text |
| Target | Menüpunkt-Ziel |
| Bild | Menüpunkt-Icon (nur mobil sichtbar) |
| Button für Flyout | Button in der aufgeklappten Menü-Übersicht (bei Hauptmenüpunkt) |
| Untermenü | Spalten in der aufgeklappten Menü-Übersicht (bei Hauptmenüpunkt) |

- **Breadcrumb:** MenuItem in das MenuItem der Parent-Seite einhängen. Der Breadcrumb-Text steht im Tab „Als Link“ → „Link-Text“.
- **Nicht mehr als ein Navigationselement** einhängen (außer bei Servicegruppen), **keine Schleife**.
- Werden Seiten ohne Navi gebrieft, nachfragen, ob die Navi wirklich entfallen soll.
- **LinkTarget darf nicht leer sein** (Page/Link einhängen).

> [!warn] Freigabe von Bertolt
> Bei Änderungen über die Umbenennung hinaus (neuer Navipunkt, Navipunkt entfernen, Reihenfolge der Hauptnavi ändern u. Ä.) muss der BO **vorab die Freigabe von Bertolt** einholen. Im Zweifel nachfragen.

## Footnote {#footnote}

- Recherchieren, ob die Fußnote **bereits vorhanden** ist.
- **Platzhalter-Wildcards** verwenden (Textreplacer).
- **Versteckte Fußnoten** mit `<ifn>` kennzeichnen.
- Nicht mehr benötigte Fußnoten **sofort zurückziehen und löschen**.

## Teaser {#teaser}

- **Namensregelungen** für Teaser beachten.
- **Neue Teaser direkt publizieren.**
- Bei den CTA-URLs **alle unnötigen Parameter entfernen**, auch wenn sie gebrieft wurden (`vertragsart=ratenzahlung`, `ohne-tarif=nein`). Auch nicht mehr verwenden: `menuType=RadioButtonsMenu&tileItemIndex=1`.
- **Versalien sind bei Stage-Teasern verboten.** Ausnahme: Trade-Kommunikation und großformatige Tarif-, GB- oder Brand-Kommunikation (Typografie in Visuals online).
- Immer **neue, individuelle DirectURLs** anlegen – **kein URL-Recycling**.
- Auf richtige **Button-Styles** achten (keine blauen Buttons auf blauen Teasern).

### Content-Highlight-Teaser

Wird im Teaser-Link ein **Preis** kommuniziert, das Linkdokument unter `assets/preise/<passender Unterordner>` ablegen, damit es bei Preisanpassungen gefunden wird.

Benennung: `segment-teasername-teaser-forwardlink`

Beispiel: `nk-samsung-galaxy-s23-ultra-mit-watch5-bt-o2-mobile-m-teaser-forwardlink`

### Tarif-Teaser

- **Keine Styles** (z. B. `contexthighlight`) auf Glyphicons anwenden. In Listendarstellung werden diese Glyphicons türkis eingefärbt: alert, plus, circle-plus, percent, circle-percentage, euro.
- **Info-Icons** werden türkis, wenn der zugehörige Text den Style `contexthighlight` hat.

### Content-Compact-Teaser

Nicht direkt verlinken. Sie müssen mit dem Content-Compact-Code in einer **Static Collection** liegen, die dann verlinkt wird. Vorhandene Content-Compact-Teaser als Vorbild nehmen.

## Preise {#preise}

- Preisschreibweisen: **„nur“, „ab“** etc. immer klein.
- Preise in die **richtigen Unterordner** einsortieren, ggf. neue anlegen.
- Beim Kopieren von Preisen prüfen, ob die **Info-i-ID** stimmt.
- Den Unterordner **„zusatzgeraete“ nur bei Hard-Bundles** anlegen (Gerät und Beilage fest kombiniert, erkennbar am Shop-Link).
- Bei **Soft-Bundles** (Beigabe kann jederzeit ohne Preisänderung entfallen) den normalen Geräte-Preis verwenden.
- **Preis-Namen analog zum Shop-Link** bilden:

| | Beispiel |
|---|---|
| Shop-Link | `…/apple-iphone-14-128gb-mitternacht-mit-watch-se-2gen-lte-details?tarif=o2-mobile-m-boost&ratenzahlung=36&zielgruppe=privatkunden` |
| Preis-Name | `nk-apple-iphone-14-128gb-mitternacht-mit-watch-se-2gen-lte-o2-mobile-m-boost-36m-price` |

## Code {#code}

- Alle enthaltenen Bilder, Links etc. als **CMS-Element zentral** anlegen: unter `/assets/<…>/_code` (portalübergreifend) bzw. unter der jeweiligen Seite in einem `/code`-Unterordner. Mit **DirectURL** versehen und über die DirectURL im Code verlinken. **Platzhalter verwenden.**
- **Codeänderung durch ASM Frontend:** aktuellen Code kopieren, mit genauem Datum im Timestamp benennen, im Task hochladen. Nach der Bearbeitung lädt arsmedium den aktuellen Code ins **Codependium**. Beim Kopieren ins CMS alle Inline-Elemente prüfen und ggf. neu einbinden. Liefert ASM Frontend Code, der noch nicht im Codependium liegt, ihn nach Taskabschluss an arsmedium zur Aufnahme liefern.
- **Neuen Partner-Code** bei Aussy (TechM) prüfen lassen (betrifft nicht arsmedium-Codes).
- **Neuen Code sowie Wiederverwendung** aus dem Codependium von **Bertolt freigeben lassen**. Generell Einbindung von Code vermeiden. Ausnahmen: Applikationen, AB-Testing-Elemente. **Freigabe ist immer notwendig.**
- JavaScript **auskommentieren** (`<!-- … -->`) bzw. `script`-Tag verwenden.
- **JSON-Codes** bestehen aus drei Elementen: **Datenobjekt, Bundle, Integrationscode**. Der Integrationscode (meist eine Zeile) wird als Code-Element dort eingehängt, wo der Code angezeigt werden soll. Datenobjekt und Bundle kommen in den Head („Code“-Feld), falls nicht anders gebrieft.
- **Anpassungen an JSON-Codes:** nur das **Datenobjekt** dürfen Redakteure ändern. Bei Änderungen im Bundle muss ASM Frontend eingeschaltet werden.
- **Layer werden über die ID eingebunden** und keinesfalls im Code dupliziert:

```
<a href="#" title="Linktitle" class="link" data-js="modals" data-cms-target="132456789">Linktext</a>
```

## Schreibfehler & Schreibweisen {#schreibweise}

- **Portalweite Schreibweise:** „Selbstständige“ statt „Selbständige“.
- **Abkürzungen:** MBit/s, KBit/s, MB, KB – besonders in Fußnoten. **Leerzeichen zwischen Zahl und GB** (300 GB, nicht 300GB) sowie **zwischen Preis und €-Zeichen**. „mtl.“ in Preis-Dokumenten immer ausschreiben.
- **Preis:** „€“ statt „Euro“. Tabelle: `0,00` / `10,00` · Freitext: `0,-` / `10`. In Teasern das Euro-Zeichen verwenden.
- **Datum:** `tt.mm.jjjj`
- **Telefonnummer:** `0049 123 - 44 55 66 77`
- **Hardware-Schreibweise** an der Hersteller-Seite orientieren.
- **Bindestriche** im Zweifel beim QM nachfragen. Beispiele: nach „O2“ **kein** Bindestrich („O2 Kunde“, „O2 Vertrag“) · „Junge Leute Vorteil“ (kein Bindestrich) · „Kombi-Vorteil“ (nicht zusammen).

### Rabatte in der Tariftabelle

- Kombi-Vorteil (24 Monate x 5 €) bzw. Junge Leute Vorteil
- Aktions-Rabatt bei Abschluss Handy mit Tarif (24 Monate x 0,50 €) – Voucher Value
- Zusatz-Rabatt bei Abschluss Handy mit Tarif (12 Monate x 10 €) – Flex-Budget-Einsatz
- Special-Rabatt (6 Monate) – Sonderfall, nochmals Rabatt on top

### Ansprache

- **Du/Sie:** überall generell **duzen**, „du“ klein. „Sie“ (groß) nur in der persönlichen 1:1-Kundenansprache **nach Login** bzw. nach explizitem Briefing.
- Im **Segment-Switcher immer Plural** verwenden (O2 Kunden, Neukunden, …).
- **Versalien sind bei Stage-Teasern verboten.**

# Prozess & Qualität

## Publikation {#publikation}

- **Regeln der Zusammenarbeit** beachten (Versionierung, Rücksprache).
- **Pünktliche und zuverlässige Publikation** durch Recherche im **Kommentarfeld**.
- **Nach der Publikation sofort funktional nachprüfen (3 – 10 Minuten)!** Anschließend Feedback an den BO.
- **Autopublikation** nur bei einfachen Publikationen verwenden.

## Shop Header {#shop-header}

Sollen auf speziellen Shop-Seiten Header über den **Code Hub** eingebunden werden:

- Bei den URLs alle unnötigen Parameter entfernen (`vertragsart=ratenzahlung`, `ohne-tarif=nein`).
- Beim Briefen an arsmedium die richtige **Reihenfolge** beachten (im CMS-Dokument egal, wird automatisch generiert): **tarif / ratenzahlung / zielgruppe**.

So ist es richtig:

```
…/samsung-galaxy-s25-ultra-mit-watch-ultra-bk-ps-details?tarif=o2-mobile-l-partnerkarte&ratenzahlung=36&zielgruppe=bestandskunden
```

## Archivieren / Löschen / Redirecten {#archivieren}

> [!tip] Generell gilt: **Löschen vor Archivieren**, wenn es keinen triftigen Grund für eine Archivierung gibt.

- **Screenshot der Seite** machen und das Bild im Archiv einbinden (im Wiki unter „Gelöschte Seiten“).
- Die Seite **und alle Referenzen** (Preise, Teaser etc. – Recherche!) löschen.
- Beim **Einbau und Ausbau eines Redirects** immer den Haken **„In Sitemap ausblenden“** im Pageframe setzen bzw. entfernen.
- Bei **Archivierung:** alle referenzierten Dokumente prüfen, zurückziehen und ins Archiv verschieben – inkl. Fußnoten, Gimmicks, Teaser etc. **Keine Live-Dokumente ins Archiv verschieben.** Auch Ordner müssen zurückgezogen werden.
- **Adserver-Teaser** vom BO zur Archivierung freigeben lassen (werden ggf. noch im Adserver verwendet).
- Bei Offlinenahme eines **Formulars:** Info und moi-ID (falls vorhanden) an Alex Gevatter (Backend ASM) – mit dem Hinweis, dass das Formular nicht mehr genutzt wird.
- **Hardware-Archivierung:** jeweiliges Handout beachten.

## Formulare {#formulare}

- Alle Felder/Elemente einzeln anlegen und in der **WebForm in FormItems** einhängen. Ggf. zentral ablegen und mehrfach verwenden (`/assets/forms` → passender Unterordner).
- Die **moi-ID** wird im Backend angelegt (Alex Gevatter). Sie identifiziert das Formular im Backend und setzt DOI-ID (bzw. `manual_newsletter_id`) und Source-ID. **DOI-ID und Source-ID** kommen vom BO und werden ans Backend weitergegeben, aber nicht im Formular eingebunden.
- Die **Interact-ID** bleibt immer gleich.
- **`haspermission2`** steuert die Werbeeinwilligung: bei **interessenbezogenen** Formularen `true`, bei nicht-interessenbezogenen `false`. `true` bedeutet: Werbeeinwilligung ist Pflicht.
- **Keine Code-Formulare.** Sind sie nötig: Freigabe von Bertolt und Check durch Workbench.

## Konfigurator {#konfigurator}

### PF-Tariff

- **Kommentarfeld:** ShopURL hinterlegen (Offermatrix).
- **Attribute** (Reiter „System → Einstellungen“): `discounts.big` pflegen, Platzhalter beachten: `(${duration} Monate x ${amount} €)`.
- **Kurzbeschreibung für Telesales** pflegen.
- **Wildcards pro Segment** verwenden (Produkt-Name + Topline).
- **Basket Description** ist nicht mehr zu pflegen.
- **Fußnoten einbinden** (Listen → Fußnoten). Wird eine Fußnote ausgetauscht, prüfen, ob die alte archiviert/gelöscht werden kann.
- Beim **Kopieren von Tarifen** prüfen, dass die Features und das `tarif-konfigurator-elem` des korrekten Segments eingebunden sind.
- **Benennung (wichtig!):** `teftariff-RV-SalesChannelID-Tarifcode`, Beispiel: `teftariff-64006400-privatkunden-2552`
- Beim Anlegen von **BK-Tarifen** müssen in derselben RV auch **BK-SoHo-Tarife** angelegt werden.
- Vorlagen für Bundles: `content/api/product/tariff/_bundle-vorlagen`

### HW-Gruppen

- Bei Geräten mit mehreren Ausprägungen (Farbe/Speichergröße) muss eine **Hardware-Gruppe** angelegt werden.
- **PF_Article:** Doc-Name z. B. `article-item-apple-iphone-6`, ArticleID = Apple iPhone 6, Article_Unit = neu angelegtes Default-Gerät. Medien: Grafiken des Default-Geräts.
- **PF_Article_Unit:** Default-Gerät → Doc-Name z. B. `article-unit-apple-iphone-6` (ohne Ausprägung), Name = nur Gerätename ohne Ausprägung; alle anderen Elemente bleiben wie beim Default-Gerät.
- Normalerweise keine Anpassung durch Redakteure. Bei Rückfragen: Chris Raith.

### Konfigurator allgemein

- **Zu pflegende Dokumente Hardware/Tarif:** (1) Tariff: Produkt Name, Topline, Headline 2, Features, Fußnoten, Produkt-Elemente, Beschreibung. (2) Article-Element → Artikel-Produktinformation (Tab „Handydetails“).
- **eCare-Bereich:** Pflege der Snippets. Bei Artikeln den View beachten.
- **Zu pflegende Sitecfg:** Page-Title, Description, NavigationContext, Metadaten, ggf. SEO-Texte. Ablage: `/content/o2/sitecfg/configurator/o2shop/privatkunden/…`, `/content/o2/sitecfg/configurator/tariff/o2shop/privatkunden/…`, `/content/o2/sitecfg/catalog/o2shop/…`
- **Die genaue Verortung** kann je nach Shopfilter/Gerät variieren – den Pfad auf der Prev aus dem **Quelltext** entnehmen (Kommentar `Site-Config-Url: …`).
- Im Shop zeigt `?debug=cms` CMS-Inhalte an (gelb markiert). Im **eCare-Bereich** muss über den Quellcode erschlossen werden, ob ein Element aus dem CMS kommt. Im **VVL** kann `?debug=true` verwendet werden.

## Snippets {#snippets}

Artikel-Views:

| View | Ergebnis |
|---|---|
| **Bootstrap** | Markup mit äußeren `article`- und `div`-Tags |
| **Text** | nur Markup |
| **TextPlain** | kein Markup, reiner Text ohne Formatierung |

## Sonstiges {#sonstiges}

- **Portalübergreifende Elemente** im Ordner „shared“ ablegen.
- **Adspace:** Function mit ID; Fallback-Teaser.
- **Preislisten** etc. unter Hilfe (extern bei jive) werden mit **Gotos** (`shortcuts/goto/support…`) gezogen.
- **Seitengröße/Performance** beachten. Sind alle wichtigen Infos im sichtbaren Bereich? Sind großflächige Bereiche klickbar? Beratung ist gewünscht.
- **Businessrelevante Anpassungen:** Ars-PM informieren. Bei Nutzung von Ressourcen in NBG (z. B. Frontend): ARS-PM in cc, Task im Arsnet anlegen (lassen).
- **Dokumente nur bei globaler Verwendung** unter „assets“ (bzw. „shared“ bei portalübergreifenden Elementen) ablegen, sonst im Projektordner.
- **Tarif- und Gerätenamen** mit geschütztem Leerzeichen (`&nbsp;`, Strg + Shift + Leertaste) schreiben – nur in RichText-Feldern möglich.
- **Immer die mobile Ansicht mitprüfen. Mobile First!**
- **Servicegruppen** dürfen wegen DSGVO nur mit Freigabe von Legal genutzt werden.
- Beim Bearbeiten von **Blau-Dokumenten** (z. B. Snippet-Task) immer in Nürnberg Bescheid geben.

## QM / tQM {#qm}

| | tQM | QM |
|---|---|---|
| **Neuer Redakteur** (erste 3 Monate) | Code (auch JSONs), Pageframe, Siteconfig, Konfigurator, Archivierungen | Alles außer kleinen Bugfixes (Rechtschreibfehler o. Ä.) |
| **Erfahrener Redakteur** (ab 4. Monat) | Code (auch JSONs), Archivierungen, nach persönlichem Ermessen | Nach persönlichem Ermessen, große Projekte, viel Text (Vorab-QM des Textes sinnvoll), portalübergreifende Preisanpassungen, neuartige Seiten/Module |

- Diese Regeln gelten für **Inplant**. In Nürnberg gilt ein anderer QM-Prozess.
- Can nur auf **CC** setzen, wenn es große Projekte sind oder Probleme gibt.
- **JSON-Validator** vor der Übergabe ins tQM ausführen (jsonformatter.curiousconcept.com).

## Deals Regeln {#deals}

### Briefing

Folgende Tasks sollten angelegt sein, sonst nachfragen:

- XY Master Layouts & Vermarktung
- XY Bundle Teaser
- XY Beyond Teaser
- XY Novum Teaser
- XY After Launch & Offlinenahme (nicht vor Entfernung und Löschung aller XY-Dokumente zurückweisen)

Optional: XY Shop Reiter (Verlinkung zum Shop-Task in der Task-Description und umgekehrt), XY Newsflash Teaser, XY LP Anpassungen, XY Counter.

### Umsetzung: Shop, Texte, Animation

- **Einheitliche Schreibweise** beachten (Winter Deals vs. Winterdeals).
- **Animationen frühzeitig** umsetzen und testen.

### Content-Redaktion

- **Teaser-Ordner:** eigene Ordner mit „Deal“ im Namen anlegen (Ausnahmen möglich für VVL und I@H).
- **Teaser-Dokumente:** ohne „Deals“ im Namen. Werden sie nach der Aktion weiterverwendet, in den „normalen“ Geräteordner umziehen – so bleibt die URL gleich – und den Deals-Ordner löschen.
- **Teaser-Bilder, -Lightboxen, -Flags** etc. mit im Deals-Ordner ablegen.
- **Preise zentral ablegen**, außer bei exklusiven Bundles (z. B. Love Deals 2-für-1-Geräte-Aktion), die nach der Aktion gelöscht werden und von Preisanpassungen nicht betroffen sind. Im Zweifel den BO fragen.
- **Dokumente, die woanders liegen** (Collections, Animationen etc.), mit „Deal“ im Namen anlegen, um die Abschlussrecherche zu vereinfachen. Auf gleiche Schreibweise achten (`love-deals` vs. `lovedeals`).
- **e-Shop-Tab:** Alle zu bearbeitenden Dokumente liegen im Ordner **151205 → README**.

## Eco Label CodeHub Einbindung (Teaser) {#eco-label}

### Markup

Für die Ausspielung des **Eco Labels** und die **Produktdatenblatt-Verlinkung** wird ein Markup benötigt, das unter „Objekte“ im jeweiligen Teaser eingebunden wird. **Für jedes neu eingeführte Gerät** (Smartphone, Tablet, TV) muss ein neues Markup sowie Eco Label Energie-Ausweis und Produktdatenblatt angelegt werden.

Ablage der Markups:

- **O2:** `Sites/o2online/Germany/German/Assets/code/_codehub/_energy-label/`
- **Blau:** `/Sites/blau/Germany/German/Assets/code/_energy-label/`

```
<energy-label energy-class="B"
  label-link="https://prev.o2online.de/assets/dokumente/energy-labels/apple-iphone-16-pro-max-energy-label-b-download"
  product-sheet-link="https://prev.o2online.de/assets/dokumente/energy-pibs/apple-iphone-16-pro-max-energy-pib-label-b-download"
  aria-label="Mehr Informationen zum Produktdatenblatt Apple iPhone 16 Pro Max"
  product-category="Smartphone"></energy-label>
```

| Attribut | Bedeutung |
|---|---|
| `energy-class` | Energieklasse A–G. Das Eco-Label-Visual wird bei Eintragung automatisch erzeugt. Händisch eintragen (steht im Energie-Ausweis oder wird eingebrieft). |
| `label-link` | Link zum Eco Label Energie-Ausweis |
| `product-sheet-link` | Link zum Produktdatenblatt |
| `aria-label` | Information für den Screenreader (Zweck/Funktion), händisch eintragen |
| `product-category` | Gerätekategorie (Smartphone, Tablet, TV …), händisch eintragen |

### Mehrere Geräte im Bundle

Der Link-Text für das Produktdatenblatt wird **dynamisch** erzeugt. Bei einem Bundle mit mehreren Geräten (Smartphone und Tablet) müssen **beide Markups** in den Teaser gehängt werden. Die Benennung wird dann „Datenblatt Smartphone“ und „Datenblatt Tablet“ – je nach Eintrag in der Geräte-Kategorie.

### Wo liegt was?

Alles wird für Blau und O2 gemeinsam verwendet und liegt zentral unter `/Shared/assets/energy_labels/`:

| Was | Zentraler Ort | Eingebunden per DirectLink (O2) |
|---|---|---|
| **Eco Label Visual** | `…/labels-bild/` | keine DirectLinks – wird automatisch über CodeHub ausgespielt |
| **Eco Label Energie-Ausweis** | `…/labels/` | `/Sites/o2online/Germany/German/Assets/dokumente/energy-labels/labels/` |
| **Produktdatenblatt** | `…/pibs/` | `/Sites/o2online/Germany/German/Assets/dokumente/energy-labels/pibs/` |

Für Blau liegen die DirectLinks unter `/Sites/blau/Germany/German/Assets/dokumente/_energy-labels-directurls/labels/` bzw. `…/pibs/`.

## Video {#video}

Videos in **AEM** hochladen: Die Beschreibung liegt im SharePoint („Steps to Generate Cloudflare URL for Videos Assets“, Team „o2 Inplant Team“).

- Videos werden im AEM-Assets-Ordner `/content/dam/videos/o2` hochgeladen.
- Die daraus erzeugte **Cloudflare-Video-URL** wird anschließend im CMS eingebunden.
