Früher war es eine dumme Idee, Screenshots in einen Chatbot zu posten

Heute ist es Teil meines Standard-Workflows.

Was sich technisch verändert hat, ist ein fundamentaler Architektur-Shift. Und der unterscheidet sich von dem, was die meisten erwarten.

**Die alte Methode (Pre-2023)**

Wenn du vor zwei Jahren ein Bild an eine KI schicken wolltest, lief das über ein separates System. Ein Vision-Modell analysierte das Bild und schrieb Text: "Das Bild zeigt eine Tabelle mit drei Spalten..."

Dieser Text wurde dem LLM übergeben. Das Problem: Layout ging verloren, Details wurden ausgelassen, die Genauigkeit war begrenzt. Das LLM hat nie das Bild selbst gesehen – nur eine Beschreibung davon.

**Die neue Methode: Native Vision Integration**

Moderne multimodale Modelle arbeiten anders. Sie haben einen Vision Encoder direkt integriert.

Das Bild wird in kleine Patches unterteilt. Ein Vision Transformer verarbeitet diese und erzeugt Embeddings – Vektoren, die direkt in denselben Raum wie Text projiziert werden. Das LLM verarbeitet diese Bild-Embeddings genauso wie Text.

Das ist der Unterschied: Das LLM sieht tatsächlich visuelle Struktur, nicht nur eine Beschreibung.

**Warum das für dich wichtig ist**

Diese Architektur ermöglicht Dinge, die früher undenkbar waren:

- Screenshots mit erkanntem Layout (Tabellenstruktur bleibt erhalten)
- Diagramme und Charts direkt analysieren (keine manuelle Extraktion)
- Handschrift lesen (auch unstrukturierte Notizen)
- UI-Elemente auf Screenshots identifizieren

Der Unterschied ist nicht nur bequemer – er ist qualitativ anders. Das Modell versteht visuelle Relationen, nicht nur Text.

**Die Grenzen**

Auflösung ist limitiert. Kleine Details, feiner Text, winzige UI-Elemente gehen verloren. Je größer der Text im Screenshot, desto besser die Ergebnisse.

Auch: Es ist kein menschliches Sehen. Das Modell halluziniert bei komplexen Bildern manchmal.

**Mein praktischer Einsatz**

Ich nutze das regelmäßig – etwa um Tabellen-Screenshots direkt in Grafiken umzuwandeln. Das funktioniert, weil das Modell die visuelle Struktur erkennt: Spalten, Zeilen, Relationen zwischen Daten.

Früher: Extrahieren, bereinigen, formatieren, hoffen. Heute: Screenshot, Prompt, fertig.

Nutzt ihr schon Screenshots mit KI? Was funktioniert, was nicht?

GenerativeAI · LLM · KI · MultimodalAI · LLMGrundlagen · PromptEngineering
