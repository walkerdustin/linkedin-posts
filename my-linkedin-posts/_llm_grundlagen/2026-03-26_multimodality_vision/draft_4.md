# Draft 4: Kurz und knackig, minimalistisch

Früher: Screenshot in Chatbot = sinnlos.

Heute: Standard-Workflow.

**Was sich geändert hat**

Klassische LLMs sehen Bilder nicht. Sie kriegen OCR-Text, Layout geht verloren.

Moderne multimodale Modelle haben einen Vision Encoder eingebaut. Bilder werden zu kontinuierlichen Embeddings – direkt im selben Raum wie Text. Das LLM versteht visuelle Struktur.

**Konkretes Beispiel**

Screenshot einer Tabelle → Grafik generieren lassen. Funktioniert, weil das Modell Spalten und Zeilen sieht, nicht nur Text.

**Die technische Feinheit**

Die meisten Systeme (GPT-4V, Claude, Gemini) nutzen **kontinuierliche Embeddings** – keine diskreten Token-IDs. Chameleon (Meta) macht es anders mit VQ-VAE und tatsächlichen Bild-Token-IDs.

**Was zu beachten ist**

- Ein Bild = 1000-4000 Tokens (teuer)
- Auflösungs-Limits: Kleine Details gehen verloren
- Tipp: Text im Screenshot groß genug machen

**Der Unterschied zum alten Captioning-Ansatz**

Früher: Separate Vision-System beschreibt Bild → 32-64 komprimierte Queries → LLM.

Heute: Direkte Embeddings, keine künstliche Kompression. Das LLM sieht mehr.

Nutzt ihr Screenshots mit KI? Was funktioniert, was nicht?

#GenerativeAI #LLM #KI #MultimodalAI #LLMGrundlagen
