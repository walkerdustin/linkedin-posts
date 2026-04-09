König − Mann + Frau = Königin.
Man kann tatsächlich mit Wörtern rechnen.

Das hat nichts mit Magie zu tun, sondern ist die pure Mathematik hinter Embedding-Modellen. Genau dieses Prinzip nutzen wir im Arbeitsalltag, wenn wir für Kunden "Chat with your data"-Projekte (RAG) bauen.

Ein Computer hat kein Verständnis für das Konzept "König". Er kennt nur Zahlen. Deshalb übersetzt er jedes Wort in eine lange Liste von Koordinaten – einen Vektor im hochdimensionalen Raum. Je ähnlicher zwei Wörter sind, desto näher liegen ihre Punkte zusammen. Das ist ein sogenanntes Embedding.

Um das zu veranschaulichen, reichen erst mal zwei Achsen: eine für das Alter, eine für das Geschlecht. Trägt man Wörter wie Mann, Frau, Junge und Mädchen in so ein Diagramm ein, sieht man schnell: Abstand ist hier das Maß für inhaltliche Nähe. 
Ergänzt man Begriffe wie Erwachsener, Kind oder Großvater, ordnen sich diese logisch auf den beiden Achsen ein. Bedeutung ist schlicht eine Position im Raum.

Das funktioniert gut, bis wir "König" und "Königin" dazunehmen. Hätten wir nur zwei Achsen, würden "König" und "Mann" exakt aufeinanderliegen. Wir brauchen also eine dritte Dimension – nennen wir sie "Adel". Jetzt haben König und normaler Mann zwar das gleiche Alter und Geschlecht, trennen sich aber auf der dritten Achse.

Hier kommt die Rechnung ins Spiel: 
Wenn man von den Koordinaten für "König" die Koordinaten für "Mann" abzieht, erhält man den Abstand zwischen den beiden. Diesen Verschiebungs-Vektor legt man nun bei "Frau" an – und landet im Raum extrem nah bei "Königin". 
Inhaltliche Analogien werden in diesem Raum zu einfachen linearen Beziehungen.

In produktiven Modellen haben Vektoren nicht drei, sondern Hunderte Dimensionen. Diese werden nicht von Hand definiert, sondern durch das Training mit riesigen Textmengen statistisch gelernt. Die Dimensionen haben dann keine greifbaren Namen mehr, aber die grundlegende Geometrie bleibt exakt gleich.

Wenn also eine KI-Suche in Unternehmensdokumenten die richtige Antwort findet, sucht sie selten nach dem genauen Stichwort. Sie sucht nach dem nächsten Nachbarn im Vektorraum.

Wer die Tabellen und Zahlen für dieses Beispiel einmal selbst durchgehen möchte, findet hier ein sehr gutes Tutorial der Carnegie Mellon University: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

Embeddings: Bisher eher Buzzword oder schon ein greifbares Werkzeug für euch?

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen

---

## Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das PDF greift genau diesen roten Faden auf, um ihn beim Swipen visuell greifbar zu machen. 
- **Slide 1:** Die "König − Mann + Frau = Königin"-Gleichung als Aufmacher.
- **Slide 2:** Die Grundidee (Wörter = Koordinaten im Raum).
- **Slide 3:** Die einfache 2D-Tabelle (Alter & Geschlecht) mit Mann, Frau, Junge, Mädchen.
- **Slide 4:** Die Erweiterung der Tabelle um Großvater, Erwachsener, Kind.
- **Slide 5:** Warum zwei Dimensionen für "König" nicht reichen (Kollision mit "Mann").
- **Slide 6:** Die dritte Spalte "Adel" kommt dazu; darunter eine **3D-Merkmalsraum**-Grafik als **SVG** (Koordinaten exakt aus der Tabelle, keine KI-Grafik).
- **Slide 7:** Die Rechenaufgabe Schritt für Schritt in der Tabelle visualisiert.
- **Slide 8:** Skalierung auf echte Modelle (hunderte Dimensionen, gelernt aus Text, keine manuellen Tabellen).
- **Slide 9:** Praxisbezug (Dokumentensuche / RAG).

*Design-Hinweis für das PDF:* Klare, einfache Tabellenstrukturen, große Schrift für Mobile, auf das absolute Minimum an Fließtext reduziert. Fokus liegt auf der Veranschaulichung der Koordinaten.

**Fertiges PDF (Kopie im Post-Ordner):** `embeddings-vektorraum-carousel.pdf`  
**Quellprojekt:** `linkedin-carousel-generator/` — Remotion-Composition `embeddings-vektorraum` (9 Slides, 1080×1350, Neumorphic-Theme wie die anderen Serien-Carousels). Tabellen und das 2D-Streudiagramm sind in React/CSS gebaut, keine eingebetteten Screenshots aus der PPTX.  
**Neu rendern:** im Ordner `linkedin-carousel-generator` ausführen: `npm run render -- embeddings-vektorraum` — Ausgabe: `out/embeddings-vektorraum.pdf` und Review-PNGs unter `review/slide-*.png`. Live-Vorschau: `npm run studio`.