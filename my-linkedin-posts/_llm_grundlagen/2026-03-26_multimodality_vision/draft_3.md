# Draft 3: Praxis-orientiert, Business-Use-Case-lastig

Früher war es eine dumme Idee, Screenshots in einen Chatbot zu posten. Heute nutze ich das für echte Geschäftsprozesse.

Der Unterschied ist nicht nur technisch – er ist ökonomisch.

**Das OCR-Problem**

Viele Unternehmen haben Dokumenten-Workflows: Rechnungen, Formulare, Berichte. Die klassische Lösung: OCR + LLM.

Aber OCR verliert Layout. Aus einer sauberen Tabelle wird ein Fließtext, in dem "Umsatz 2025" plötzlich an "2024" klebt. Das LLM ratet.

Multimodale Modelle lösen das anders. Sie verarbeiten das Dokument-Bild direkt – ohne OCR-Zwischenschritt. Das Layout bleibt erhalten, Tabellenstrukturen werden erkannt, Diagramme verstanden.

**Ein konkretes Zahlenbeispiel**

In einem Kundenprojekt haben wir tausende Dokumente pro Woche verarbeitet. Früher: Manuelles Labeln, Verarbeitungszeit von Wochen, externe Kosten im sechsstelligen Euro-Bereich.

Mit einer multimodalen Pipeline: Verarbeitung in unter einer Stunde. API-Kosten unter 100 Euro pro Woche.

Der Schlüssel: Das Vision-Modell hat direkt auf die Dokumenten-Bilder geschaut, nicht auf extrahierten Text.

**Wie es technisch funktioniert**

Der Vision Encoder ist heute direkt in das LLM integriert. Das Bild wird in Patches unterteilt, diese werden zu kontinuierlichen Embeddings, und diese landen im selben Repräsentationsraum wie Text.

Das LLM "sieht" das Bild – in Form von Embeddings, die genauso verarbeitet werden wie Wort-Embeddings.

**Kostenbewusstsein ist wichtig**

Ein Bild verbraucht 1000-4000 Tokens. Das ist teurer als reiner Text. Aber: Man spart den gesamten OCR-Pipeline-Schritt, die manuelle Korrektur, die Fehlerbehebung.

**Mein persönlicher Workflow-Tipp**

Ich nutze Screenshots regelmäßig – etwa um Tabellen direkt in Grafiken umzuwandeln. Ein Tipp aus der Praxis: Text im Screenshot groß genug machen. Die Modelle haben Auflösungs-Limits, kleine Details gehen verloren.

**Für Führungskräfte: Was bedeutet das?**

Wenn euer Team "KI für Dokumente" evaluiert, unterscheidet zwischen:
- OCR + klassisches LLM (günstiger, aber Layout-Verlust)
- Multimodales Modell (teurere Tokens, aber Layout-Erhalt)

Die Entscheidung hängt vom Use Case ab. Bei strukturierten Tabellen und Formularen lohnt sich der multimodale Ansatz oft schnell.

Nutzt ihr schon multimodale KI für Dokumente? Welche Erfahrungen habt ihr gemacht?

#GenerativeAI #LLM #KI #DocumentAI #ProcessAutomation #LLMGrundlagen #CostEfficiency
