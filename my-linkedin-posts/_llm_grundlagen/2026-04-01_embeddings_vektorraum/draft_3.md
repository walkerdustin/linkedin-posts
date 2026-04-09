Stellt euch vor, jedes Wort hätte ein GPS – nur nicht für Straßen, sondern für Bedeutung.

Genau diese Idee steckt hinter Embeddings. Ein Wort wird zu einer Liste von Zahlen. Zwei Listen, die „nah“ sind, gehören zu Inhalten, die inhaltlich zusammenpassen. Weit auseinander heißt: semantisch wenig gemeinsam.

Ich fange beim Mini-Beispiel an, das ich in Erklärslides immer wieder verwende (und das auch in einem tollen Tutorial von David Touretzky an der CMU Schritt für Schritt steht):

Vier Wörter: man, woman, boy, girl. Zwei Koordinaten: eine grobe Gender-Skala, eine für Alter. Jede Zeile in einer kleinen Tabelle ist ein Punkt im Raum. Kind und Kind (boy/girl) teilen sich das Alter, trennen sich im Gender. Erwachsene tauchen auf einer anderen Höhe auf. Ihr seht sofort: Das ist keine Linguistik-Vorlesung, sondern ein Koordinatensystem.

Fügt adult, child, infant oder grandfather hinzu – immer noch dasselbe Prinzip. Ihr verschiebt Punkte, bis es zur Bedeutung passt.

Dann kommt das königliche Set: king, queen, prince, princess. Ohne dritte Dimension wären das nur „Männer und Frauen in bestimmten Altersklassen“. Mit einer zusätzlichen Achse für etwas wie „Royalty“ könnt ihr königliche Rollen von zivilen trennen.

Und jetzt der Trick, der in fast jedem Einführungskurs zu Word Embeddings vorkommt: Zieht von king die Koordinaten von man ab. Addiert das Ergebnis zu woman. Schaut, welches Wort im Vokabular am nächsten liegt. In der Demo-Tabelle ist das queen.

Das ist die geometrische Form einer Analogie. Nicht jedes Modell liefert in jedem Beispiel perfekte Treffer – aber die Intuition ist robust: Beziehungen zwischen Begriffen können als Richtungen im Raum ausgedrückt werden.

In echten Systemen sind die Listen viel länger (typisch Hunderte Dimensionen und mehr), und die Zahlen entstehen durch Lernen aus Text, nicht durch manuelles Eintragen. Heutige LLMs sind feiner: derselbe Buchstabensalat kann je nach Satz andere Embeddings bekommen. Trotzdem bleibt die Basis: Ohne diese Art von Geometrie gäbe es keine sinnvolle semantische Suche und kein brauchbares Retrieval für Chatbots.

Link zum Tutorial mit den konkreten Zahlen: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

Wenn ihr mögt, schreibt mir, ob ihr Embeddings bisher eher als Buzzword oder als konkretes Werkzeug wahrgenommen habt.

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen

---

Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das Carousel nimmt die GPS-Metapher auf der ersten Slide auf (Bedeutung als Position). Slide 2 erklärt in zwei Sätzen „Liste von Zahlen = Embedding“. Slide 3 zeigt die 2x2-Tabelle man/woman/boy/girl mit Gender- und Alter-Spalten. Slide 4 ergänzt weitere Wörter in derselben Tabelle. Slide 5 visualisiert das Problem „König kollidiert mit Mann“ ohne dritte Achse. Slide 6: Tabelle mit Royalty-Spalte und Königshaus. Slide 7: Rechenzeile für King minus man plus woman und Vergleich zu queen. Slide 8: Realität (viele Dimensionen, Training). Slide 9: Kurzer Ausblick RAG + Link CMU. Stil: freundlich-didaktisch, eine Metapher pro Slide, keine kleingedruckten Fußnoten.
