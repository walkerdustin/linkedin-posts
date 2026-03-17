# Research: Wie funktioniert ein LLM? (LLM Grundlagen #2)

## Ziel des Posts

Zweiter Post der Serie **"LLM Grundlagen"**. Nicht-technischen Lesern erklären, wie ein LLM im Kern funktioniert: als Schleife, die immer wieder das nächstwahrscheinliche Wort vorhersagt. Der Post soll Intuition aufbauen, nicht Technik erklären.

**Wichtige Einschränkung**: Wir nennen es bewusst "Wort" statt "Token", weil Tokens im nächsten Post der Serie erklärt werden. Am Ende des Posts kommt ein kurzer Hinweis, dass es technisch gesehen nicht Wörter, sondern Tokens sind.

---

## 1. Kernidee: Das Geheimnis steckt in der Vorhersage

Ein LLM ist im Kern ein einziger, immer wieder ausgeführter Schritt:

> **"Was ist das wahrscheinlichste nächste Wort, gegeben alles was bisher gesagt wurde?"**

Das klingt fast zu simpel, um zu erklären, warum ChatGPT so eindrucksvoll wirkt. Aber genau diese Einfachheit ist die Magie.

Das Modell wiederholt diesen Schritt in einer Schleife:
1. Nimm den bisherigen Text (den Prompt + bereits generierten Text)
2. Sage das nächste Wort vorher
3. Hänge das Wort an den Text
4. Gehe zu Schritt 1

So entsteht, Wort für Wort, eine Antwort.

---

## 2. Die persönliche Anekdote: Das Salz-Experiment

In meinen ca. 20 Prompt-Engineering-Schulungen bei [at] (über 200 Teilnehmer insgesamt) zeige ich immer diese Folie:

> **"Schatz, gibst du mir das ____?"**

Dann frage ich das Publikum: "Welches Wort würdet ihr hier als nächstes sagen?"

Fast jedes Mal: Fast alle sagen gleichzeitig **"Salz"**.

Warum? Weil auf dem Bild ein Pärchen beim Essen sitzt, Salz- und Pfefferstreuer auf dem Tisch stehen, und unser Gehirn blitzschnell aus diesem Kontext das wahrscheinlichste nächste Wort berechnet.

Das ist exakt das, was ein LLM macht. Nur dass es das Millionen von Mal trainiert hat – auf einem Großteil des Internets.

### Die Schichten des Kontexts – Warum "Salz" und nicht etwas anderes?

Was das Experiment so lehrreich macht: Man kann an den "falschen" Antworten zeigen, welche Schichten von Kontext ein LLM (und unser Gehirn) berücksichtigt:

| Wort | Warum schlecht? | Welche Kontextschicht fehlt? |
|---|---|---|
| **Senf** | "Gibst du mir das Senf?" – grammatisch falsch. "Senf" ist maskulin ("der Senf"), aber im Satz steht "das". | Grammatik / Sprachstruktur |
| **Atom-U-Boot** | "das Atom-U-Boot" ist zwar grammatisch korrekt (Neutrum), aber absurd in einem Esszimmer. | Situationskontext |
| **Kräuterbaguette** | Passt grammatisch (Neutrum) und passt zum Thema Essen, aber es steht kein Baguette auf dem Tisch – dafür Salz- und Pfefferstreuer. | Spezifischer visueller Kontext |
| **Salz** | Grammatisch korrekt (das Salz), passt zum Essen, passt zum Bild (Salzstreuer sichtbar), passt zur Alltagssituation. | Alle Schichten erfüllt → höchste Wahrscheinlichkeit |

Diese Schichten zeigen: Um das nächste Wort gut vorherzusagen, muss ein Modell implizit Grammatik, Weltwissen und situativen Kontext gelernt haben. Niemand hat das einprogrammiert – es hat sich durch das Training auf "sag das nächste Wort vorher" selbst herausgebildet.

**Die starke Botschaft dahinter**: In diesem simplen "Salz" steckt Weltwissen. Und dieses Weltwissen ist nicht explizit einprogrammiert worden – es ist als Nebenprodukt der Vorhersage entstanden.

---

## 3. Was das für LLMs bedeutet

### Vorhersage = Verstehen?

LLMs wurden nicht auf "Verstehe Sprache" trainiert. Sie wurden auf "Sage das nächste Wort vorher" trainiert. Aber um das gut zu machen, muss ein Modell implizit:

- Grammatik verstehen
- Kontext berücksichtigen
- Faktenwissen abrufen
- Logik anwenden
- Konventionen kennen

Das ist der überraschende Kern: **Weltverständnis entsteht als Nebenprodukt der Vorhersage.**

### Kontext ist alles

Der entscheidende Faktor ist immer der Kontext. Das Wort "Bank" führt zu einem anderen nächsten Wort, wenn davor "Ich sitze auf der..." steht vs. "Ich arbeite bei der...".

Ein LLM berücksichtigt dabei den gesamten bisherigen Text – das ist der sogenannte Kontext oder "Context Window". Je mehr Kontext, desto präziser die Vorhersage.

### Wahrscheinlichkeiten, nicht Gewissheit

Das Modell gibt keine einzelne Antwort aus, sondern eine Wahrscheinlichkeitsverteilung über alle möglichen nächsten Wörter. "Salz" bekommt vielleicht 72% Wahrscheinlichkeit, "Senf" 8%, "Ketchup" 6%, und so weiter. Dann wird aus dieser Verteilung das nächste Wort gezogen – das ist auch der Grund, warum dieselbe Frage manchmal leicht unterschiedliche Antworten produziert.

---

## 4. Was das LLM NICHT macht

Um Missverständnisse zu vermeiden – was viele denken, stimmt nicht:

- Das LLM "denkt" nicht im menschlichen Sinne
- Es plant die Antwort nicht zuerst komplett durch, bevor es schreibt
- Es hat kein Bewusstsein, keine Absichten, keine Gefühle
- Es "weiß" nichts – es hat statistische Muster gelernt

Das klingt ernüchternd, ist aber nicht weniger beeindruckend: Dass so viel Nützlichkeit aus einem so einfachen Prinzip entsteht, ist eine der erstaunlichsten Erkenntnisse der letzten Jahre.

---

## 5. Token-Hinweis am Ende

Ich habe bisher von "Wörtern" gesprochen. Das ist nicht ganz korrekt – LLMs arbeiten eigentlich mit sogenannten **Tokens**, die kleiner als Wörter sein können (Silben, Zeichenfolgen). Was genau ein Token ist und warum das wichtig ist, erkläre ich im nächsten Post.

---

## 6. Ideen für den Post-Aufbau

### Hook
Das Bild (Folie 34: "Schatz, gibst du mir das ____?") als erstes Bild im Post. Dann direkt die Frage an den Leser richten – er soll das Experiment selbst mitmachen, bevor die Auflösung kommt.

**Hook-Idee:**
> "Was würdest du hier als nächstes Wort vorhersagen?"
> 
> Genau diese Frage habe ich über 200 Personen gestellt – in den ca. 20 Prompt-Engineering-Schulungen, die ich in den letzten Jahren gegeben habe.
> 
> Und jedes Mal dasselbe: Alle sagen gleichzeitig "Salz".

**Warum das funktioniert:**
- Der Leser scrollt durch den Feed, sieht das Bild, liest die Frage – und beantwortet sie automatisch im Kopf
- Er hat das Experiment schon mitgemacht, bevor er den Post überhaupt richtig gelesen hat
- Dann kommt die Auflösung ("Alle sagen Salz") und die Bestätigung, dass er richtig lag
- Und erst DANN die Brücke: "Genau das macht ein LLM."
- Das ist viel stärker als wenn wir die Folie erst beschreiben müssten

### Möglicher Aufbau
1. **Bild + Hook**: Folie als Bild → "Was würdest du vorhersagen?" → Anekdote aus den Schulungen (200+ Personen, alle sagen Salz)
2. **Brücke**: Genau das macht ein LLM. Immer und immer wieder. Wort für Wort.
3. **Erklärung**: Die Schleife erklären – nächstes Wort vorhersagen, anhängen, wiederholen
4. **Tiefe Botschaft**: Was in "Salz" steckt – Weltwissen entsteht durch Vorhersage
5. **Relativierung**: Was das Modell NICHT tut (kein Denken, kein Planen, kein Bewusstsein)
6. **Token-Ausblick**: "Ich habe vereinfachend von Wörtern gesprochen – eigentlich sind es Tokens. Dazu mehr im nächsten Post."
7. **CTA**: Frage oder Hinweis auf nächsten Post der Serie

### Ton
- Deutsch, zugänglich, kein Fachwissen vorausgesetzt
- Persönliche Erfahrung als Aufhänger
- Nicht belehrend – eher "ich zeige euch einen Trick"
- Kein Hype, keine Übertreibungen
- Neugier wecken statt Angst machen

---

## 7. Quellen & Hintergrund

- [at]-interne Präsentation: Folie 34 "LLMs erzeugen Texte durch Vorhersage des nächsten Wortes" (Schatz/Salz-Experiment)
- Andrej Karpathy: "Language Models are next-token predictors" – Standarderklärung in der Community
- [How GPT Works – AssemblyAI](https://www.assemblyai.com/blog/how-gpt-works)
- [What is a language model? – IBM](https://www.ibm.com/topics/language-models)
- [Next-token prediction – Wikipedia](https://en.wikipedia.org/wiki/Language_model)
