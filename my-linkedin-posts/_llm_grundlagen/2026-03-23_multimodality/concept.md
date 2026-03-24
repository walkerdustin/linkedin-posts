# Concept: LLMs verstehen eigentlich nur text

**Serie:** LLM Grundlagen (Post 4)

## Thema des Posts
Large language models verstehen eigentlich nur text.
Zu verstehen wie LLMs und Chatbots mit anderen medien umgehen ist der gamechanger, der meinen lesern helfen wird effektiv mit llms zu arbeiten und weniger of zu denkten "Diese AI chatbots sind ja richtige idioten.

Was ist "Text" im Sinne eines LLMs – und was nicht? Der Post klärt ein fundamentales Missverständnis auf: Viele Nutzer wissen nicht, dass LLMs ausschließlich mit reinem Text (Zeichenketten) arbeiten. Alles andere – Word-Dateien, PDFs, Bilder, Formatierungen – ist für ein LLM erstmal unsichtbar. Das ist die Brücke zum Thema Multimodalität, das im Folgepost behandelt wird.

Der post soll auch vorbereiten auf einen meiner nächsten posts, der auf den fundamentalen unterchied zwischen chatbots und den darunter liegenden llms eingeht.




## Ziel des Posts

Nach dem Lesen soll der Leser:
- Verstanden haben, dass das Kern-LLM nur reinen Text (Unicode-Zeichenketten) verarbeitet.
- verstehen was text ist und was nicht reiner text ist
- verstehen, dass chatbots teilweilweise gewisse krüken implementiert haben damit der chatbot dann doch irgendwie mit anderen medien umgehen kann 
- diese krüken verwandeln dann anderen medien in reinen text.
- diese transformationen sind oft das der grund für viele Probleme beim nutzen.
- Neugierig auf den Folgepost zu Multimodalität sein, der erklärt WIE diese zusätzlichen Systeme funktionieren.

## Kernbotschaften / Informationen

1. **LLMs sind text-in, text-out** – das steckt schon im Namen: Large *Language* Model. Der Token-Post hat gezeigt, dass LLMs Text in Tokens zerlegen. Aber was zählt überhaupt als Text?

2. **Text = eine Folge von Unicode-Zeichen.** Buchstaben (a-z, A-Z), Ziffern (0-9), Sonderzeichen (;:-#+%&/...), andere Alphabete (Kyrillisch, Arabisch, Mandarin...), Emojis. Mehr nicht.


3. **Was kein Text ist (und viele überrascht):**
   - Formatierungen (fett, kursiv, Überschriften) – das ist Markup/Metadaten, kein reiner Text
   - Word-Dateien (.docx) – sind im Kern ZIP-Archive mit XML
   - Excel-Dateien (.xlsx) – ebenfalls ZIP mit XML, plus Zellstruktur
   - PowerPoint (.pptx) – ZIP mit XML, Bildern, Layouts
   - PDFs – ein eigenes Binärformat mit Rendering-Anweisungen
   - Bilder – Pixel-Raster, auch wenn Text darauf abgebildet ist
   - Audio/Video – Signaldaten, kein Text

4. **Aber ChatGPT kann doch PDFs lesen?! – Ja, aber.** ChatGPT ist mehr als nur ein LLM. Es ist ein Produkt, das um das LLM herumgebaut wurde. Wenn du ein PDF hochlädst, liest nicht das LLM direkt das PDF-Format – stattdessen kommen zusätzliche Systeme zum Einsatz, die den Inhalt des PDFs extrahieren und in Text umwandeln, den das LLM dann verarbeiten kann. Dasselbe passiert mit Bildern, Word-Dateien etc. Wie gut das am Ende funktioniert, hängt stark davon ab, WIE diese Umwandlung abläuft.

5. **Nicht jedes Medium wird gleich gut verarbeitet.** Manche Übersetzungen funktionieren fast verlustfrei (z.B. reiner Text aus einer PDF), andere sind fehleranfällig (z.B. komplexe Tabellen in einem PDF, handschriftliche Notizen auf einem Foto). Wer versteht, dass da ein Übersetzungsschritt passiert, kann besser einschätzen, wann der Chatbot gut funktioniert und wann nicht.

6. **Ausblick:** Wie genau diese Übersetzung für verschiedene Medien funktioniert (Bilder, PDFs, Audio, etc.) – das ist Multimodalität, Thema des nächsten Posts.

## Relevanz für den Leser

- **Für alle:** Erklärt, warum manche Uploads in ChatGPT gut funktionieren und andere nicht. Gibt ein mentales Modell, um KI-Tools besser einzuschätzen.
- **Für Führungskräfte / Entscheider:** Wer versteht, was ein LLM nativ kann und was Zusatzsysteme braucht, trifft bessere Entscheidungen bei der Toolauswahl und bei der Einschätzung von Aufwand/Machbarkeit.
- **Für Techniker:** Saubere Grundlage, auf der Multimodalität, RAG und Dokumentenverarbeitung aufbauen.

## Persönliche Anekdote

In meinen ~20 Prompt-Engineering-Schulungen kommen immer wieder dieselben Fragen: "Kann ich damit auch meine Excel-Tabellen analysieren?", "Warum fasst der Chatbot mein PDF nicht richtig zusammen?", "Kann ich dem ein Foto von meinem Whiteboard schicken?" Die Teilnehmer wissen, dass ChatGPT irgendwie mit Bildern und Dokumenten umgehen kann – aber sie können nicht einschätzen, wie gut und wo die Grenzen liegen. Die Antwort führt fast immer auf dasselbe zurück: Es kommt darauf an, wie der Chatbot das jeweilige Medium intern verarbeitet. Und dafür muss man zuerst verstehen, was das LLM selbst eigentlich kann – nämlich nur Text.

## Rechercheergebnisse

(Noch offen – bei Bedarf ergänzen wir konkrete Zahlen, z.B. Unicode-Zeichenumfang, Dateiformatstatistiken o.ä.)
