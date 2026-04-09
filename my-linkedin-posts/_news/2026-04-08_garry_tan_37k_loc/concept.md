# Concept: Garry Tan und die 37.000 Zeilen Code

## Thema des Posts

Garry Tan (CEO von Y Combinator) postete stolz, dass er 37.000 Lines of Code pro Tag und 72 Tage am Stück "shipped" hat. Ein Entwickler hat daraufhin seinen Blog auditiert – und die Ergebnisse sprechen für sich: 78.400 Zeilen "AI slop", 6,42 MB Download für eine simple Newsletter-Seite, Testdateien im Production-Build, leere Bilddateien, und vieles mehr.

**Kategorie:** News/Commentary

## Ziel des Posts

Ich will zeigen, dass:
1. Lines of Code als Metrik für Produktivität Unsinn ist (und schon lange vor AI ein Anti-Pattern war)
2. Non-Engineers mit AI viel Code produzieren können – aber das nicht bedeutet, dass es gut ist
3. Engineers weiterhin essenziell sind für Architektur, Code Review, und Qualitätskontrolle
4. Die wahre Lektion aus dieser Geschichte nicht "AI ersetzt Engineers" ist, sondern "AI amplifies whatever process you feed it – including no process at all" (Zitat des Auditors)

## Kernbotschaften

1. **LOC ist eine schlechte Metrik:** Schon vor AI war das Messen von Produktivität an Zeilennummern ein klassisches Anti-Pattern. Jetzt wird es mit AI nur noch lächerlicher.

2. **Die Audit-Ergebnisse sind erschütternd:**
   - 169 Requests und 6,42 MB für eine Homepage (Hacker News: 7 Requests, 12 KB)
   - 28 Testdateien (300 KB) werden an jeden Besucher ausgeliefert
   - 78 ungenutzte JavaScript Controller (154 KB)
   - Das gleiche Logo wird 8 mal heruntergeladen – darunter eine 0-Byte-Datei
   - Unkomprimierte PNGs statt moderner WebP/AVIF (4 MB statt 200-400 KB)
   - Komplette Seite wird doppelt gerendert (mobile + desktop im DOM)
   - Analytics-Code mit dem Kommentar "// Load SDK from our proxy (bypasses ad blockers)"

3. **Non-Engineers können mit AI viel tun – aber:**
   - Sie brauchen Engineers für Architektur und Review
   - AI verstärkt den Prozess, den man ihm füttert
   - Ohne Engineering-Disziplin entsteht "AI slop"

4. **Die Reaktion von Garry Tan:** Als ein 17-jähriger Entwickler (der übrigens einen Browser-Engine in Rust geschrieben hat) ihn freundlich auf die Problematik von LOC als Metrik hinwies, nannte Garry ihn einen "clout farmer".

## Relevanz für den Leser

Für Führungskräfte und Budgetverantwortliche: Die Story ist ein perfektes Warnbeispiel dafür, warum "Wir ersetzen Engineers durch AI" noch keine realistische Strategie ist. AI ist ein Tool, kein Ersatz für Engineering-Kompetenz.

Für technische Leser: Ein unterhaltsamer Beleg dafür, dass Code Review und Architektur weiterhin unverzichtbar sind.

## Persönliche Anekdote

(optional, je nach Länge) – Aus meinem Arbeitsalltag bei Alexander Thamm: Wir sehen bei Kunden oft den Drang, mit AI "schnell" Prototypen zu bauen. Der Unterschied zu Produktions-Code ist oft der Review-Prozess und die Architektur-Fragen, die wir stellen.

## Rechercheergebnisse

**Quelle 1: Original-Tweet von Garry Tan (@garrytan), 30. März 2026**
> "Absolutely insane week for agentic engineering. 37K LOC per day across 5 projects. Still speeding up."
> – mit Screenshot einer "gstack" Auswertung: 126 commits, +261.6k LOC added, -57.6k LOC deleted

**Quelle 2: Code Audit von Gregorein (@Gregorein), Senior Software Engineer**
Twitter Thread vom 31. März 2026 mit detaillierter Analyse von garryslist.org:

> "Garry's site is what happens when you replace code review with a shipping streak counter. A Duolingo streak for `git push`."

> "The automatons did exactly what they were told. Nobody told them to stop."

Vergleich Hacker News vs. Garry's List:
- Hacker News: 7 Requests, 12 KB
- Garry's List: 169 Requests, 6.42 MB (562x schwerer)
- 73% der Bandbreite sind laut Auditor "waste"

**Konkrete technische Probleme (aus dem Audit):**
- 28 Test-Files in Production (300 KB) – membership_form_controller.test (89 KB), media_grid_controller.test (31 KB), etc.
- 78 ungenutzte Stimulus Controller (AI image generation, voice extraction, video generation, radar charts, Rails hello_controller.js)
- Logo-Situation: 8 Downloads (3 PNG, 2 WebP, 2 AVIF, Favicon) – eine AVIF-Datei ist 0 Byte
- 520 KB Trix Rich-Text-Editor auf read-only Homepage
- 47 Bilder mit leerem alt="" (Accessibility-Break)
- Duplizierte <title> Tags
- Leere CSS-Datei (nur Manifest-Kommentar)
- Expliziter Ad-Blocker-Bypass-Kommentar im Code

**Quelle 3: Der 17-jährige Entwickler (@xiaonweb)**
Hat bei Kritik an Garry den Vorwurf "clout farmer" erhalten. Fakten zum Teenager:
- Hat einen Browser-Engine in Rust geschrieben (HTML tokenizer, CSS cascade, box model layout, GPU renderer via wgpu)
- Published eine technical breakdown mit tieferem Verständnis der Web-Technologie als viele Senior Engineers

## Tone & Angle

- Nicht sensationalistisch oder persönlich gegen Garry Tan attackieren
- Stattdessen sachlich-kritisch, mit einem Augenzwinkern
- Fokus auf die Lehre für Leser: Was können wir daraus lernen?
- Professionell, aber nicht langweilig
- Kurze, prägnante Sätze (wie bei den anderen Posts)

## Struktur-Vorschlag

1. **Hook:** Die 37.000 LOC – eine absurde Zahl, die nach Aufmerksamkeit schreit
2. **Kontext:** Wer ist Garry Tan, was hat er gepostet
3. **Die Enthüllung:** Was der Audit gefunden hat (die schlimmsten Beispiele)
4. **Der Vergleich:** Hacker News (seine eigene Firma!) vs. seine Seite
5. **Die Lehre:** LOC ist keine Metrik; AI verstärkt schlechte Prozesse; Engineers bleiben unverzichtbar
6. **Der CTA/Frage:** Wie sieht es in euren Projekten aus?
