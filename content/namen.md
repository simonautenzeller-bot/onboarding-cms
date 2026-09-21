## Erlaubte Zeichen

Für **alle Dokumente und Ordner**, die im Content angelegt werden, ist nur ein bestimmtes Zeichenset erlaubt.

| Erlaubt | Nicht erlaubt |
|---|---|
| Kleinbuchstaben `a`–`z` | Unterstrich `_` |
| Zahlen `0`–`9` | Leerzeichen |
| Bindestrich `-` | Umlaute ä, ö, ü, Ä, Ö, Ü |
| | Großbuchstaben `A`–`Z` |
| | Sonderzeichen wie `/`, `&`, `$`, `ß` … |

### Auswertung in der Applikation

Applikationen wie **Shop oder eCare** holen Dokumente über die **Product-API** aus dem CMS. Die übergebenen Namen werden in der CAE **automatisch** in die erlaubten Zeichen umgewandelt. Das musst du beim Anlegen von Optionen, ArticleItems usw. berücksichtigen.

Beispiel: `CSC-PACK-GOFLATL24-7.5GB` (unerlaubter Punkt) wird zu `CSC-PACK-GOFLATL24-7-5GB`. Im CMS muss das Dokument deshalb **mit dem umgewandelten Namen** angelegt werden.

### Konvertierungstabelle

| Zeichen | Ersetzung |
|---|---|
| `&` | `und` |
| `ä` / `Ä` | `ae` |
| `ö` / `Ö` | `oe` |
| `ü` / `Ü` | `ue` |
| `ß` | `ss` |
| `@` | `-at-` |
| Leerzeichen | `-` |
| `.` `(` `)` `/` `_` `'` `"` | `-` |

## Namenskonverter

Probiere es aus: Tippe einen Namen ein und sieh, wie er nach den Regeln der Konvertierungstabelle aussieht.

:::widget namer

## Dokumente & Styles

### Dokumente

Zu den Dokumenten, die den eigentlichen Inhalt bereitstellen, zählen in erster Linie **Article, Teaser, Picture, Form und Function**.

> [!info] Am Ende steht der Dokumententyp
> Beispiele: `startseite-page`, `startseite-article`

### Styles für CMS-Module

Muster für die Benennung von Wildcards im Ordner `/Settings/Taxonomies/Styles/`:

```
<Modulname> - <opt|var>: <Stylename>
```

- **var** (Variante): kann nur **einmal** pro Modulname ausgewählt werden.
- **opt** (Option): es können **mehrere** pro Modulname ausgewählt werden.

| Style im CMS | CSS-Klasse |
|---|---|
| `teaser - var: promo` | `teaser-promo` |
| `stage - opt: disable-cycling` | `stage-disable-cycling` |
| `social-icon - var: facebook` | `social-icon-facebook` |

Orientierung bietet die Bootstrap-Dokumentation der Module im **Compendium** (compendium.telefonica.de).

## Inhalte: O2 richtig schreiben

### Eckige Klammern

Eckige Klammern werden zu Spitzen. Damit können Redakteure z. B. einen HTML-Kommentar schreiben: `[!-- TEST --]` wird zu `<!-- TEST -->`.

### Die tiefgestellte 2 in „O2“

Das Kürzel O2 darf **nur mit tiefgestellter 2** verwendet werden. Ist das technisch nicht möglich, darf stattdessen **„o2“ mit kleinem o** benutzt werden.

Die Templates haben eine entsprechende Logik: In allen Attributen vom Typ String oder Xml kannst du einfach **„O2“** schreiben – die Umwandlung in die korrekte Schreibweise erfolgt automatisch.

> [!warn] „O2“ in Bildern
> Grafiken erstellst du in der Regel nicht selbst. Trotzdem: **Prüfe die Schreibweise von O2 in jeder Grafik** und pflege fehlerhafte Grafiken **auf keinen Fall** ins CMS ein, gib sie nicht frei und publiziere sie nicht.

## Namensmuster im Alltag

Aus den Top-Tipps – so heißen Dokumente in der Praxis:

| Was | Muster | Beispiel |
|---|---|---|
| Teaser-Link | `segment-teasername-teaser-forwardlink` | `nk-samsung-galaxy-s23-ultra-mit-watch5-bt-o2-mobile-m-teaser-forwardlink` |
| Preis | `segment-gerät-tarif-laufzeit-price` | `nk-apple-iphone-14-128gb-mitternacht-mit-watch-se-2gen-lte-o2-mobile-m-boost-36m-price` |
| TEF-Tariff | `teftariff-RV-SalesChannelID-Tarifcode` | `teftariff-64006400-privatkunden-2552` |
| Article-Item | `article-item-…` | `article-item-apple-iphone-6` |
| Article-Unit | `article-unit-…` | `article-unit-apple-iphone-6` |
| Snippet Technologie | `<tarif>-<technologie>` | `o2-home-l-250-ftth`, `o2-home-l-250-dsl` |
| Download / DirectLink | URL-Segment + Endung | siehe Top-Tipps „Link Elemente“ |

> [!tip] Preis-Namen analog zum Shop-Link
> Zerlege den Shop-Link: Gerät + Tarif + Laufzeit (`ratenzahlung=36` → `36m`) + `-price`, vorangestellt das Segment (`nk-`).
