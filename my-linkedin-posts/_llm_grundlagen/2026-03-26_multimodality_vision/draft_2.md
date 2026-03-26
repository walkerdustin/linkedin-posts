# Draft 2: Kontrast-Ansatz (Alt vs. Neu, historischer Vergleich)

2015: Zwei getrennte Welten. Ein Bild-Encoder und ein Text-Encoder, die über komplizierte Fusion-Layer miteinander reden.

2023: Ein Bildbeschreibungsmodell erzeugt 32 komprimierte Queries, die als Text-Prompt an ein LLM gehen.

2025: Ich poste einen Screenshot in ChatGPT und bekomme eine fertige Grafik zurück.

Die Evolution der multimodalen KI in drei Akten – und der Unterschied zwischen Akt 2 und 3 ist der größte Sprung.

**Akt 1: VQA (2015-2019)**

Visual Question Answelling war das erste große Benchmark. Die Architektur: Zwei getrennte Pipelines, die spät zusammenfinden. Ein CNN verarbeitet das Bild, ein RNN/LSTM den Text, irgendwo in der Mitte findet bilineares Pooling statt.

Das Ergebnis: Funktioniert für vordefinierte Fragen, aber kein echtes Sprachverständnis.

**Akt 2: Die Adapter-Ära (2022-2023)**

BLIP-2 und Flamingo brachten den Durchbruch – auf eine spezifische Weise. Beide nutzen "frozen" Komponenten:

- BLIP-2: Ein Q-Former extrahiert 32 Queries aus dem Bild. Diese werden dem LLM als Soft-Prompts übergeben. Das LLM sieht nie das Bild – es sieht 32 abstrakte Vektoren.

- Flamingo: Ein Perceiver Resampler komprimiert Bild-Features auf 64 Tokens. GATED XATTN-DENSE Layers lassen das LLM diese abfragen.

Innovativ, aber limitiert: Die Informationskompression ist brutal. Millionen Pixel → Tausende Features → 32-64 Queries.

**Akt 3: Native Integration (2023-2025)**

Heute sprechen wir über komplett andere Architekturen:

- GPT-4V nutzt Vision Encoder + Projection Layers
- GPT-4o ist ein "omni" Modell – ein einziges Netzwerk, end-to-end trainiert
- Gemini 1.5 war von Anfang an multimodal, verarbeitet 10 Millionen Token Context
- Fuyu-8B projiziert Bild-Patches direkt in die erste Layer – kein separater Encoder

Der fundamentale Unterschied: Die Bild-Information fließt als kontinuierliche Embeddings in denselben Raum wie Text. Es gibt keine künstliche Kompression auf 32 oder 64 Tokens. Ein 1024×1024 Bild werden zu ~765 effizienten Tokens – direkt im Embedding-Space des LLM.

**Was das für meinen Alltag bedeutet**

Ich habe einen Screenshot einer Tabelle gemacht und mir davon eine Grafik generieren lassen. Das funktionierte, weil das Modell die visuelle Struktur – Spalten, Zeilen, Relationen – tatsächlich erkennt.

Früher hätte ich die Tabelle extrahiert, bereinigt, formatiert. Jetzt: Screenshot, Prompt, fertig.

Natürlich gibt es Grenzen. Token-Kosten sind hoch, Auflösung ist limitiert. Aber der Workflow-Unterschied ist real.

Wir sind von "Bildbeschreibung" zu "Bildverständnis" gewechselt. Das ist kein kleiner Schritt.

#GenerativeAI #LLM #KI #MultimodalAI #KIArchitektur #LLMGrundlagen #TechEvolution
