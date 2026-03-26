# Concept: Multimodalität (Teil 2) – Wie Vision-Modelle Bilder "sehen"

## Thema des Posts

Wie multimodale KI-Modelle (wie GPT-4V, Claude Vision, Gemini) Bilder tatsächlich verarbeiten – der Unterschied zwischen der alten "Captioning"-Methode und der heutigen nativen Vision-Encoder-Integration.

Anknüpfung an den letzten Post (Teil 1): Dort haben wir erklärt, dass klassische LLMs PDFs/Bilder nicht sehen können – sie bekommen nur extrahierten Text. Jetzt zeigen wir, wie multimodale Modelle das Problem technisch lösen.

## Ziel des Posts

Der Leser soll verstehen:
- Was "multimodal" technisch bedeutet (Vision + Sprache kombiniert)
- Der kritische Unterschied: Alte Methode (separates Bildbeschreibungssystem) vs. Heute (Vision Encoder direkt im Modell)
- Wie ein Bild zu "Visual Tokens" wird – im selben Vokabular wie Text
- Warum das Screenshots, Diagramme, Handschrift ermöglicht
- Praktische Beispiele aus dem Arbeitsalltag

## Kernbotschaften / Informationen

### 1. Die Hook: Von "dumme Idee" zum Standard-Workflow
- Früher: Screenshot in Chatbot posten = sinnlos, weil das Modell das Bild nicht versteht
- Heute: Ich nutze Screenshots regelmäßig – z.B. Tabelle screenshotten → Grafik generieren lassen

### 2. Das Problem aus Teil 1 (kurze Rekapitulation)
- Klassische LLMs sehen Bilder/PDFs nicht – sie kriegen nur extrahierten Text
- Struktur geht verloren, Layout wird ignoriert

### 3. Die ALTE Methode (Pre-2023)
- Ein separates Vision-System (z.B. Bildbeschreibungsmodell) analysiert das Bild
- Dieses System generiert Text: "Das Bild zeigt eine Tabelle mit..."
- Dieser Text wird als reguläre Text-Tokens dem LLM übergeben
- **Problem**: Verlust von Details, Layout-Informationen gehen verloren, begrenzte Genauigkeit

### 4. Die HEUTIGE Methode: Native Vision Integration
- Vision Encoder direkt IN das LLM eingebaut (nicht davorgeschaltet)
- Bild wird in Patches unterteilt (z.B. 16x16 Pixel)
- Vision Encoder (z.B. CLIP, SigLIP) wandelt jedes Patch in einen Vektor um
- Diese Vektoren sind "Visual Tokens" – Teil desselben Token-Vokabulars wie Text
- Das LLM verarbeitet Visual Tokens und Text-Tokens gemeinsam in derselben Repräsentation
- **Architektur**: Vision Transformer (ViT) Backbone + Adapter-Layers zum LLM (GPT-4V, Claude) oder nativ multimodal von Anfang an (Gemini)

### 5. Warum das einen Unterschied macht
- **OCR-Alternative**: Multimodales Modell verarbeitet PDF-Bilder direkt – kein separater OCR-Schritt nötig, Layout bleibt erhalten
- **Screenshots funktionieren**: UI-Elemente, Tabellenstruktur, Farben werden erkannt
- **Diagramme & Charts**: Das Modell versteht visuelle Beziehungen, nicht nur Text
- **Handschrift**: Kann direkt gelesen werden

### 6. Praktisches Beispiel aus meinem Alltag
Screenshot einer Tabelle → Modell generiert daraus eine Grafik/Darstellung. Das funktioniert, weil das Modell die Tabellenstruktur visuell erkennt, nicht nur den Text extrahiert.

### 7. Grenzen und Einschränkungen
- **Auflösung**: Modelle skalieren Bilder herunter (z.B. max 1024x1024 oder 2048x2048)
- **Token-Kosten**: Ein Bild = 1000-4000 Tokens (teuer!)
- **Kleine Details**: Sehr feiner Text oder kleine Elemente werden überlesen
- **Halluzinationen**: Bei komplexen Bildern möglich – das Modell "ratet" bei Unsicherheit

### 8. Recherche-Details (Vision Encoder)
- GPT-4V / GPT-4o: Nutzen CLIP-basierten Vision Encoder mit Adapter-Layers
- Claude 3/3.5/4: Eigener Vision Encoder, konservativer Fokus auf Dokumentenanalyse
- Gemini: Natives Multimodal-Design von Grund auf (MoE-Architektur), verarbeitet alle Modalitäten als interleaved Token Streams
- SigLIP/SigLIP 2: Modernere Vision-Encoder mit verbesserter Lokalisierung und semantischem Verständnis

## Relevanz für den Leser

**Für technische Leser:**
- Architekturverständnis: Vision Encoder + LLM vs. alte Captioning-Pipeline
- Praktische Grenzen bei der Arbeit mit Bildern (Auflösung, Token-Kosten)

**Für BWL/Führungskräfte:**
- Warum multimodale Chatbots wirklich anders sind als "OCR + LLM"
- Use Cases: Dokumentenverarbeitung (Rechnungen, Forms), UI-Automation, Diagramm-Analyse
- Kostenbewusstsein: Bilder sind teuer in Tokens, aber können externe Kosten sparen

**Für alle:**
- Klare Erwartungshaltung: Was geht, was geht nicht
- Bessere Prompts für Bilder schreiben können (z.B. "Text groß genug machen")

## Persönliche Anekdote

**Screenshot-Beispiel:**
Ich habe einen Screenshot einer Tabelle gemacht und mir davon eine Grafik generieren lassen. Das hat super funktioniert – weil das Modell die visuelle Struktur erkannt hat. Früher hätte ich die Tabelle erst manuell extrahieren müssen.

Alternativ: In Schulungen erkläre ich jetzt immer: "Wenn ihr Screenshots schickt, macht den Text groß genug" – weil ich gelernt habe, dass kleine Details verloren gehen.

## Rechercheergebnisse

### Historische Entwicklung: Von getrennten Systemen zu nativer Integration

**PHASE 1: VQA & Frühe Multimodale Modelle (2015-2019)**
- Visual Question Answering (VQA) als erstes Benchmark-Problem
- Zwei getrennte Pipelines: Vision-Encoder (ResNet/ViT) + Text-Encoder
- Fusion durch Attention-Mechanismen oder bilineares Pooling
- Limitiert auf vordefinierte Frage-Antwort-Paare, kein echtes Sprachverständnis

**PHASE 2: Captioning-Ansatz mit getrennten Komponenten (2022-2023)**

*BLIP-2 (Jan 2023)*:
- **Frozen Image Encoder** (CLIP ViT) + **Frozen LLM** (OPT/Flan-T5)
- **Q-Former (Querying Transformer)** als einziger trainierbarer Teil dazwischen
- Extrahiert 32 "queries" (kompakte Repräsentationen) aus dem Bild
- Diese werden als Soft-Prompts dem LLM übergeben
- **Problem**: Informationsverlust – das LLM sieht nie das "echte" Bild

*Flamingo (DeepMind, 2022)*:
- Verbindet frozen Vision-Encoder und frozen LLM
- **Perceiver Resampler**: Komprimiert Bild-Features auf feste Anzahl Visual Tokens (oft nur 64)
- **GATED XATTN-DENSE Layers**: Kreuz-Attention im LLM für Bild-Information
- Innovation: Interleaved Sequenzen (Text und Bilder abwechselnd)
- Trotzdem "spät fusioniert" – Vision und Language bleiben getrennt

**PHASE 3: Native/End-to-End Integration (2023-2025)**

*GPT-4V / GPT-4o (OpenAI)*:
- GPT-4V: Vision Encoder (CLIP-basiert) + **Projection/Adapter Layers**
- Bild in Patches (z.B. 16x16) → Vision Encoder → Embeddings → Adapter → LLM
- GPT-4o: **Native multimodale Architektur** – ein einziges Netzwerk, end-to-end trainiert
- Kann Bilder generieren (tief integriert, nicht externes System)

*Gemini 1.5 (Google, 2024)*:
- **Native multimodal von Anfang an** – nicht nachträglich zusammengebaut
- **Mixture-of-Experts (MoE)** Architektur
- Verarbeitet **interleaved Token Streams** – alle Modalitäten als eine Sequenz
- 10 Millionen Token Context Window (inkl. Video/Audio)

*Fuyu-8B (Adept, 2023)*:
- **Kein separater Image Encoder** – radikale Vereinfachung
- Bild-Patches direkt in erste Layer projiziert (linear projection)
- Vanilla decoder-only Transformer
- Beliebige Auflösungen ohne separate Training-Stages

*Chameleon (Meta, 2024)*:
- **Diskrete Tokenisierung** – Bilder werden zu Token-IDs (wie Text)
- **VQ-VAE (Vector Quantized Variational Autoencoder)**: 8,192 Bild-Tokens im Vokabular
- Ein Bild = ~1,024 diskrete Token-IDs
- Ein einziger Transformer verarbeitet gemischte Sequenzen

### Technische Details: Visual Tokens

**Zwei grundlegend verschiedene Ansätze:**

1. **CONTINUOUS Visual Embeddings (GPT-4V, Claude, Gemini, Flamingo)**
   - Keine reservierten Token-IDs im Vokabular
   - Bild-Patches → Vision Encoder → **kontinuierliche Vektoren** (z.B. 768-dimensional)
   - Projection Layer mappt in LLM Embedding Space
   - LLM bekommt Float-Vektoren, nicht Integer-Token-IDs
   - **Vorteil**: Kein Informationsverlust durch Quantisierung, flexibler

2. **DISCRETE Visual Tokens (Chameleon, Show-o, Anole)**
   - **Reservierte Token-IDs** im Vokabular (z.B. 81920-90112 bei Chameleon)
   - VQ-VAE wandelt Bilder in **diskrete Codebook-Einträge** um
   - Token-IDs → Embedding Lookup (wie bei Text)
   - **Vorteil**: Einheitliche Architektur, Bilder können generiert werden
   - **Nachteil**: Informationsverlust durch Quantisierung

### Vision Encoder Technologien

*CLIP (Contrastive Language-Image Pre-training)*:
- Joint Training von Bild- und Text-Encoder
- Embeddings in gemeinsamen Raum projiziert
- Basis für viele multimodale Modelle

*SigLIP / SigLIP 2 (2024-2025)*:
- Verbesserter Nachfolger von CLIP
- **Sigmoid-based loss** statt softmax contrastive
- Bessere Lokalisierung und semantisches Verständnis
- Unterstützt höhere Auflösungen (384x384, 512x512)
- State-of-the-art für Vision-Language Tasks

*Vision Transformer (ViT)*:
- Bild wird in Patches (z.B. 16x16 Pixel) unterteilt
- Jedes Patch = Token, analog zu Wort-Token in NLP
- Position Embeddings für räumliche Information

### Token-Kosten und Limits

- **Token-Kosten**: Ein Bild = typischerweise 1000-4000 Tokens
  - Beispiel: 1024×1024 Bild bei GPT-4V = ~765 tokens (sehr effizient)
  - Vergleich: 1.4 Millionen Base64-Zeichen → nur ~765 Tokens
- **Auflösungs-Limits**: 
  - Die meisten Modelle skalieren Bilder herunter (max 1024×1024 oder 2048×2048)
  - Sehr kleine Details oder feiner Text werden überlesen
- **Context Window**: Bilder verbrauchen viel vom verfügbaren Kontext
  - Gemini 1.5: 10M Tokens (viel Platz für Bilder/Video)
  - Andere Modelle: 128k-200k Tokens (Bilder können schnell limitieren)

### Modell-Vergleich

| Modell | Architektur | Visual Tokens | Bildgenerierung | Besonderheit |
|--------|-------------|---------------|-----------------|--------------|
| GPT-4V | Vision Encoder + Adapter | Kontinuierlich | Nein | Etablierter Standard |
| GPT-4o | Native multimodal | Kontinuierlich | **Ja** | End-to-end unified |
| Claude 3/4 | Eigener Vision Encoder | Kontinuierlich | Nein | Fokus auf Dokumente |
| Gemini 1.5 | Native MoE | Kontinuierlich | Nein | 10M Context, nativ |
| Chameleon | VQ-VAE Tokenizer | **Diskret** | **Ja** | Early Fusion, einheitlich |
| Fuyu-8B | Kein Encoder | Kontinuierlich | Nein | Direkte Patch-Projektion |
| Flamingo | Perceiver + GATED XATTN | Kontinuierlich | Nein | Frozen Komponenten |
| BLIP-2 | Q-Former | Kontinuierlich | Nein | 32 Queries nur |

## Vergleich: OCR vs. Multimodal

| Aspekt | OCR + klassisches LLM | Multimodales Modell |
|--------|----------------------|---------------------|
| Layout | Geht verloren | Wird erkannt |
| Struktur | Fließtext | Beibehalten |
| Diagramme | Nur extrahierter Text | Visuelles Verständnis |
| Handschrift | Oft schwierig | Direkt lesbar |
| Verarbeitungsschritte | Mehrere (OCR → Text → LLM) | Direkt |
| Kosten | OCR + LLM Tokens | Höhere Token-Kosten, aber weniger Schritte |

## Offene Fragen für Diskussion

1. **Hook-Variante**:
   - A: "Früher war es eine dumme Idee..."
   - B: Alternative Hook-Ideen?

2. **Technische Tiefe**: 
   - Vision Encoder als "Black Box" beschreiben oder technische Details (CLIP, SigLIP, Patches)?

3. **CTA**:
   - Frage ans Netzwerk: "Nutzt ihr schon Screenshots mit KI?"
   - Oder: Folgepost ankündigen ("Wie promptet man Bilder richtig?")
   - Oder: Call für Dokumenten-Use-Cases

4. **Konkretes Beispiel-Bild**:
   - Sollten wir das Screenshot-der-Tabelle-Beispiel detaillierter beschreiben?
