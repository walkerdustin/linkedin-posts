# Drafts für Post 4: LLMs verstehen eigentlich nur Text

---

## Version 1: Der "Mythos-Buster" Ansatz (Fokus auf das Missverständnis)

**Hook:** 
ChatGPT kann PDFs lesen. DALL-E malt Bilder.
Falsch. Das können sie eigentlich gar nicht.

**Text:**
In meinen Schulungen kommt fast immer der Punkt, wo jemand fragt: „Warum versteht ChatGPT meine Word-Tabelle nicht, obwohl ich sie doch hochgeladen habe?“ 

Die Antwort überrascht viele: Weil das Sprachmodell (LLM) da drin weder Word noch PDFs versteht. Es ist blind für alles, was kein reiner Text ist.

Ein Large Language Model verarbeitet ausschließlich Zeichenketten. Buchstaben, Zahlen, Emojis. Das ist alles. 
Was es *nicht* sieht:
- Rote Markierungen in einem Text
- Die Spaltenstruktur deiner Excel-Datei
- Das Layout deines PDFs

Wenn du also ein PDF hochlädst, liest nicht das LLM das Dokument. ChatGPT (das Produkt, das um das LLM gebaut wurde) nutzt vorher ein Hilfsprogramm. Das quetscht den Text aus dem PDF und wirft alle Formatierungen weg. Was beim LLM ankommt, ist oft nur noch ein unstrukturierter Haufen Buchstaben. 

Plötzlich steht in der Zeile nicht mehr "Umsatz 2025 | 1 Mio", sondern der Umsatz von 2025 klebt am Datum von 2024. Das LLM rät dann nur noch.

Warum das wichtig ist? Weil wir aufhören müssen, KI-Tools für magische Alleskönner zu halten. Wenn du weißt, dass dein Tool eigentlich nur nackten Text verarbeiten kann, verstehst du auch, warum die Analyse deiner hübschen, verschachtelten Excel-Tabelle komplett daneben ging.

Im nächsten Post schauen wir uns an, wie die KI es dann doch schafft, mit Bildern umzugehen (Stichwort: Multimodalität).

Habt ihr schon mal Dokumente hochgeladen, bei denen das Modell komplett den Faden verloren hat?

#GenerativeAI #LLM #KI #LLMGrundlagen #ChatGPT

---

## Version 2: Der "Übersetzer" Ansatz (Fokus auf die Krücke Chatbot)

**Hook:**
Dein LLM ist blind. Dein Chatbot ist sein Blindenhund.
Klingt hart, ist aber die Realität in jedem GenAI-Projekt.

**Text:**
Wir lassen uns oft von der Oberfläche blenden. ChatGPT, Claude und Gemini wirken, als würden sie unsere Excel-Listen "ansehen" oder unsere Word-Dokumente "lesen" können. 

Die Wahrheit ist technischer – und fehleranfälliger. Das reine Sprachmodell (das LLM im Hintergrund) versteht genau eines: nackten Text. Unicode-Zeichen. Sonst nichts. 

Wenn du ein hübsch formatiertes PDF hochlädst, passiert folgendes:
1. Dein Chatbot nimmt das PDF.
2. Ein separates System (nicht das LLM!) schrubbt das Layout weg, reißt Tabellen auseinander und extrahiert den rohen Text.
3. Erst dieser Text-Brei wird dem LLM vorgelegt.

Das LLM liest dein PDF also nicht. Es liest eine oft sehr schlechte Text-Übersetzung davon. 

In der Praxis sehe ich das ständig: Teams wundern sich, warum die KI wichtige Zusammenhänge in Dokumenten nicht erkennt. Die Antwort ist fast immer: Weil diese Zusammenhänge in der Formatierung steckten – und die Formatierung hat das LLM nie erreicht.

Wer diesen Unterschied zwischen dem *Modell* und der *Anwendung drumherum* versteht, spart sich in Projekten extrem viel Frust. Du weißt dann: Schicke keine komplexen Tabellenstrukturen, schicke sauberen Text.

Wie das System neuerdings lernt, Bilder nicht mehr nur in Text zu übersetzen, sondern wirklich "anzusehen", ist unser Thema für den nächsten Teil der Serie: Multimodalität.

Welche Dateiformate bereiten euch beim Prompten die meisten Kopfschmerzen?

#GenerativeAI #LLM #KI #LLMGrundlagen

---

## Version 3: Der Analytische Ansatz (Fokus auf was Text ist und was nicht)

**Hook:**
LLM steht für Large Language Model. Das bedeutet: Text rein, Text raus.
Aber was ist eigentlich "Text"?

**Text:**
Wir Menschen machen keinen großen Unterschied zwischen einem Satz in einer E-Mail und demselben Satz in einem PDF. Für eine Generative KI ist das ein gewaltiger Unterschied.

Ein LLM verarbeitet Text als eine simple Folge von Zeichen. A, B, C, 1, 2, 3, ein paar Emojis. Das war's.

Was für ein LLM *kein* Text ist:
❌ PDFs (das sind Rendering-Anweisungen für Drucker)
❌ Word-Dateien (das sind verpackte XML-Strukturen)
❌ Excel-Tabellen
❌ Fett gedruckte Überschriften

Wenn du jetzt sagst: "Aber ChatGPT kann doch PDFs zusammenfassen!" – stimmt. Aber das liegt nicht am LLM. 

Produkte wie ChatGPT haben "Krücken" eingebaut. Bevor das LLM überhaupt anfängt zu arbeiten, wandeln andere kleine Programme dein PDF in simplen Rohtext um. Dabei geht wahnsinnig viel Kontext verloren. Eine zweispaltige Tabelle wird oft zu einem einzigen, verwirrenden Satz zusammengepresst.

Wenn das LLM dir dann eine unsinnige Antwort gibt, liegt das selten daran, dass das Modell "dumm" ist. Es liegt daran, dass das Übersetzungsprogramm davor einen schlechten Job gemacht hat.

Wenn ich das in meinen Schulungen erkläre, macht es bei vielen Klick. Es verändert, wie man mit den Tools arbeitet. Wer das System versteht, füttert es anders.

Im nächsten Teil schauen wir uns an, wie Multimodalität dieses Problem teilweise löst.

#GenerativeAI #LLM #KI #LLMGrundlagen

---

## Version 4: Der Anekdoten-Fokus (Nah an der Praxis)

**Hook:**
"Warum versteht der Chatbot meine Tabelle nicht?"
Die häufigste Frage in meinen Prompt-Engineering-Schulungen.

**Text:**
Die Erwartungshaltung ist oft: Ich lade ein Dokument hoch, die KI schaut es sich an und versteht es. Schließlich ist sie ja "intelligent".

Dann kommt die Ernüchterung. Der Chatbot vermischt Spalten, übersieht Überschriften oder halluziniert Zahlen. Warum? Weil wir einem grundlegenden Missverständnis aufsitzen: Wir verwechseln den Chatbot mit dem Sprachmodell (LLM).

Das Kern-LLM kann gar keine Dokumente lesen. Es versteht ausschließlich reinen Text (Unicode-Zeichen). Kein Layout, keine Spalten, keine Fettdruck-Hervorhebungen. 

Wenn du ein PDF hochlädst, tritt eine "Krücke" in Aktion: Der Chatbot nutzt ein Hilfsprogramm, das dein PDF in reinen, formatierungsfreien Text umwandelt. Erst diesen Rohtext bekommt das LLM zu sehen. 

Stell dir vor, jemand liest dir eine komplexe Excel-Tabelle von links nach rechts, Zeile für Zeile laut am Telefon vor. Genau so fühlt sich das für das LLM an. Kein Wunder, dass es durcheinander kommt.

Für uns Entwickler bei [at] ist das Alltagswissen, aber für Anwender ist es ein echter Gamechanger. Wenn man weiß, dass das LLM blind für Formatierungen ist, hört man auf, ihm hübsche Word-Tabellen zu schicken, und fängt an, ihm gut strukturierten Rohtext zu geben.

Wie moderne Modelle lernen, dieses Problem durch "Multimodalität" (z.B. echtes Sehen) zu umgehen, erfahrt ihr im nächsten Post.

Wusstet ihr, dass zwischen eurem PDF und dem LLM noch ein Übersetzer sitzt?

#GenerativeAI #LLM #KI #LLMGrundlagen #PromptEngineering

---

## Version 5: Der "Under-the-Hood" Ansatz (Etwas technischer)

**Hook:**
Dein Chatbot belügt dich ein bisschen.
Er tut so, als würde er deine Dateien lesen können.

**Text:**
In der "LLM Grundlagen"-Serie haben wir uns angeschaut, wie Sprachmodelle Text vorhersagen und wie sie Wörter in Zahlen (Tokens) zerlegen.

Heute schauen wir uns an, was sie eigentlich in diese Tokens zerlegen. Die Antwort ist simpel: Nur reinen Text.

Viele meiner Kunden sind überrascht, wenn ich ihnen erkläre, dass ein LLM nativ absolut nichts mit einem PDF, einer Word-Datei oder einem Bild anfangen kann. Für das Modell existieren diese Formate nicht. Es kennt nur Unicode-Zeichenketten.

Dass ChatGPT trotzdem deine Dateien "lesen" kann, liegt an der Architektur um das LLM herum. Der Chatbot ist nicht das LLM. Der Chatbot ist ein Wrapper, der Hilfswerkzeuge nutzt. 

Lädst du ein PDF hoch, passiert Folgendes:
Ein Tool (z.B. ein OCR-Scanner oder ein Parser) extrahiert den Text. Dabei gehen Layouts, Tabellenstrukturen und visuelle Hierarchien fast immer verloren. Das LLM bekommt dann einen flachen, oft völlig zerhackten Textstring präsentiert und muss raten, was zusammengehört.

Das ist der Grund, warum KI-Projekte im Unternehmensumfeld so oft an der Datenaufbereitung scheitern. Wenn wir dem Modell Müll-Text geben, bekommen wir Müll-Antworten zurück. 

Der Schlüssel zur erfolgreichen Nutzung von GenAI ist zu verstehen, wo das Modell aufhört und wo die "Krücken" der Benutzeroberfläche anfangen.

Im nächsten Post der Serie sprengen wir dann die Text-Grenze und sprechen über echte Multimodalität.

#GenerativeAI #LLM #KI #LLMGrundlagen
