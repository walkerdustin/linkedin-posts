Früher war es eine dumme Idee, Screenshots in einen Chatbot zu posten

Heute ist es Teil meines Standard-Workflows.

In diesem Post werde ich euch erklären was native multimodal Vision Language models ausmacht und was sie von dem alten ansatz unterscheidet

𝗗𝗶𝗲 𝗮𝗹𝘁𝗲 𝗠𝗲𝘁𝗵𝗼𝗱𝗲 (Pre-2023)

Wenn du vor zwei Jahren ein Bild an eine KI schicken wolltest, lief das über ein separates System. Ein Vision-Modell analysierte das Bild und schrieb Text: "Das Bild zeigt eine Tabelle mit drei Spalten..."

Dieser Text wurde dem LLM übergeben. Das Problem: Layout ging verloren, Details wurden ausgelassen, die Genauigkeit war begrenzt. Das LLM hat nie das Bild selbst gesehen – nur eine Beschreibung davon.

𝗗𝗶𝗲 𝗻𝗲𝘂𝗲 𝗠𝗲𝘁𝗵𝗼𝗱𝗲: Native Vision Integration

Moderne multimodale Modelle arbeiten anders. Sie haben einen Vision Encoder direkt integriert.

Das Bild wird in kleine Patches unterteilt. Ein Vision Transformer verarbeitet diese und erzeugt Embeddings – Vektoren, die direkt in denselben Raum wie Text projiziert werden. Das LLM verarbeitet diese Bild-Embeddings genauso wie Text.

Das ist der Unterschied: Das LLM sieht tatsächlich visuelle Struktur, nicht nur eine Beschreibung.

𝗪𝗮𝗿𝘂𝗺 𝗱𝗮𝘀 𝗳ü𝗿 𝗱𝗶𝗰𝗵 𝘄𝗶𝗰𝗵𝘁𝗶𝗴 𝗶𝘀𝘁

Diese Architektur ermöglicht Dinge, die früher undenkbar waren:

- Screenshots mit erkanntem Layout (Tabellenstruktur bleibt erhalten)
- Diagramme und Charts direkt analysieren (keine manuelle Extraktion)
- Handschrift lesen (auch unstrukturierte Notizen)
- UI-Elemente auf Screenshots identifizieren

Das ändert nicht nur den Workflow. Das Modell sieht tatsächlich, wie die Daten zusammenhängen.

𝗗𝗶𝗲 𝗚𝗿𝗲𝗻𝘇𝗲𝗻

Auflösung ist limitiert. Kleine Details, feiner Text, winzige UI-Elemente gehen verloren. Je größer der Text im Screenshot, desto besser die Ergebnisse.

Auch: Es ist kein menschliches Sehen. Das Modell halluziniert bei komplexen Bildern manchmal.

𝗠𝗲𝗶𝗻 𝗽𝗿𝗮𝗸𝘁𝗶𝘀𝗰𝗵𝗲𝗿 𝗘𝗶𝗻𝘀𝗮𝘁𝘇

Ich nutze das regelmäßig – etwa um Tabellen-Screenshots direkt in Grafiken umzuwandeln. Das funktioniert, weil das Modell die visuelle Struktur erkennt: Spalten, Zeilen, Relationen zwischen Daten.

Früher: Extrahieren, bereinigen, formatieren, hoffen. Heute: Screenshot, Prompt, fertig.

Nutzt ihr schon Screenshots mit KI? Was funktioniert, was nicht?

GenerativeAI · LLM · KI · MultimodalAI · LLMGrundlagen · PromptEngineering
