# Draft 1: Technisch fundierter, erklärender Ansatz

Früher war es eine dumme Idee, Screenshots in einen Chatbot zu posten. Heute ist es Teil meines Standard-Workflows.

Was sich technisch dahinter verändert hat, ist ein fundamentaler Architektur-Shift – und der unterscheidet sich stark von dem, was die meisten erwarten.

**Die alte Methode (Pre-2023)**

Wenn du vor zwei Jahren ein Bild an eine KI schicken wolltest, lief das über ein separates System. Ein Vision-Modell analysierte das Bild und generierte Text: "Das Bild zeigt eine Tabelle mit drei Spalten..."

Dieser Text wurde als reguläre Text-Tokens dem LLM übergeben. Das Problem: Layout-Informationen gingen verloren, Details wurden ausgelassen, und die Genauigkeit war begrenzt. Das LLM hat nie das Bild selbst gesehen – nur eine Beschreibung davon.

**Die neue Methode: Native Vision Integration**

Moderne multimodale Modelle wie GPT-4V, Claude oder Gemini arbeiten anders. Sie haben einen Vision Encoder direkt integriert, der kontinuierliche Embeddings erzeugt.

So funktioniert es:
1. Das Bild wird in Patches unterteilt (typischerweise 16×16 Pixel)
2. Ein Vision Transformer (ViT) verarbeitet diese Patches
3. Der Encoder erzeugt kontinuierliche Vektoren (z.B. 768-dimensional)
4. Über Projection Layers werden diese in den Embedding-Space des LLM projiziert
5. Das LLM verarbeitet diese Embeddings genauso wie Text-Embeddings

**Der kritische Unterschied: Continuous vs. Discrete**

Hier ist eine technische Feinheit, die oft übersehen wird: Die meisten kommerziellen Systeme (GPT-4V, Claude, Gemini) nutzen **kontinuierliche Embeddings**, keine diskreten Token-IDs. Das heißt, es gibt keine reservierten "Bild-Token-Slots" im Vokabular. Stattdessen bekommt das LLM direkt Float-Vektoren.

Anders bei Modellen wie Chameleon (Meta): Diese nutzen VQ-VAE und tatsächlich diskrete Token-IDs (z.B. 81920-90112) für Bilder – mit allen Vor- und Nachteilen.

**Praktische Konsequenzen**

Diese Architektur ermöglicht:
- Screenshots mit erkanntem UI-Layout
- Direkte Diagramm-Analyse ohne OCR
- Handschrift-Lesen ohne Zwischenschritt
- Beibehaltung der visuellen Struktur

Aber: Ein Bild kostet 1000-4000 Tokens. Das ist teuer. Und Auflösungs-Limits bedeuten, dass kleine Details verloren gehen.

In meiner Arbeit nutze ich das regelmäßig – etwa um Tabellen-Screenshots in Grafiken umzuwandeln. Der Unterschied zu früher ist fundamental: Das Modell sieht die visuelle Struktur, nicht nur Text.

Wie nutzt ihr multimodale KI in eurem Workflow?

#GenerativeAI #LLM #KI #ComputerVision #LLMGrundlagen #KIArchitektur
