# March 23, 2026

"Warum versteht der Chatbot meine Tabelle nicht?"
Wenn ich Prompt-Engineering-Schulungen gebe, kommt diese Frage eigentlich immer.

Die Nutzer laden ein Dokument hoch und gehen ganz natürlich davon aus, dass die KI es sich ansieht und versteht. 

In der Praxis vermischt das Tool dann aber oft die Spalten oder erfindet völlig neue Zahlen. Der Grund dafür ist ein klassisches Missverständnis: Wir verwechseln den Chatbot (die Oberfläche) mit dem eigentlichen Sprachmodell.

Letzte Woche ging es darum, dass LLMs Text in Tokens zerlegen. Was oft untergeht: Das Kern-Modell versteht wirklich *nur* Text. Keine Bilder, kein Layout, keine PDFs. Nur rohe Zeichenketten.

Wenn du ein PDF hochlädst, liest das Modell die Datei nicht. Der Chatbot nutzt vorher ein Skript, das den Text extrahiert und dabei das gesamte Layout zerstört.

Aus einer sauberen Tabelle wird ein Fließtext, in dem der Umsatz von 2025 plötzlich an der Jahreszahl von 2024 klebt. Das LLM sieht nur noch Buchstabensalat – und fängt an zu raten.

Stell dir vor, jemand liest dir eine verschachtelte Excel-Tabelle Zeile für Zeile laut am Telefon vor. Genau so fühlt sich das für das Sprachmodell an. Dass es da den Faden verliert, ist eigentlich logisch.

Das ist in vielen GenAI-Projekten der Punkt, an dem die Dinge schiefgehen. Wer versteht, dass das Modell blind für Formatierungen ist, hört auf, ihm komplexe PDFs vorzuwerfen. Schickst du unstrukturierten Text rein, kommt eben auch unstrukturiertes Raten raus.

Wie moderne, wirklich multimodale Modelle das Problem lösen, zeige ich im nächsten Post.

Wusstet ihr, dass der Chatbot eure PDFs intern quasi nur "vorliest"?

#GenerativeAI #LLM #KI #LLMGrundlagen #PromptEngineering