King minus man plus woman equals queen.

Das ist einer der berühmtesten Einzeiler in der KI-Welt. Und er ist kein Marketing-Spruch, sondern im Prinzip Schulmathematik – wenn man weiß, worauf die Wörter eigentlich stehen.

Computer haben kein inneres Bild von „König“. Sie haben Zahlen. Jedes Wort wird als Vektor gespeichert: eine lange Liste von Koordinaten in einem hochdimensionalen Raum. Je ähnlicher die Bedeutung, desto näher liegen die Punkte. So einfach ist die Grundidee.

Um das zu spüren, reichen erst mal zwei Dimensionen. Stellt euch eine X-Achse „Gender“ und eine Y-Achse „Alter“. Dann könnt ihr man, woman, boy und girl als vier Punkte setzen. Auf einmal seht ihr: Abstand im Diagramm ist hier ein Proxy für Bedeutungs-Ähnlichkeit.

Wenn ihr adult, child oder grandfather ergänzt, verschiebt ihr nur noch Punkte – aber ihr ändert nicht das Prinzip: Bedeutung ist Position.

Das bricht zusammen, wenn ihr king und queen hinzufügt, aber nur zwei Achsen habt. König und Mann würden sich im selben Eck stapeln. Deshalb führt man eine weitere Achse ein – im didaktischen Standardbeispiel heißt sie oft „Royalty“. Jetzt haben König und normaler Mann dieselbe grobe Gender/Alter-Lage, aber sie trennen sich entlang der dritten Koordinate.

Jetzt die Rechenaufgabe. Ihr bildet king minus man: das ist der Pfeil „was ändert sich vom normalen Mann zum König?“. Diesen Pfeil tragt ihr bei woman ein. Das Ergebnis liegt extrem nah an queen. Nicht immer exakt auf dem Punkt – in echten, gelernten Embeddings gibt es Rauschen – aber nah genug, dass das Beispiel in Demos und Tutorials immer wieder funktioniert.

In Produktionssystemen sind das nicht drei Zahlen pro Wort, sondern typischerweise Hunderte. Die Werte kommen aus Training auf Text; das Netz findet statistisch, welche Wörter in ähnlichen Umgebungen auftauchen, und drückt das als Geometrie aus.

Für große Sprachmodelle heute gilt: Embeddings sind nur ein Baustein; die volle Geschichte ist kontextabhängiger. Trotzdem erklärt genau diese Geometrie, warum „semantische Suche“ und Retrieval-Augmented Generation überhaupt Sinn ergeben.

Touretzky’s Tutorial an der CMU geht die Zahlen für das Spielbeispiel durch – empfehlenswert, wenn ihr es einmal selbst nachrechnen wollt: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

Welches Analogie-Beispiel habt ihr schon mal gesehen, das euch am meisten überzeugt hat?

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen

---

Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das Carousel startet mit der Hook-Zeile zur König-Königin-Rechenaufgabe und erklärt in der zweiten Slide kurz „Wörter = Zahlenlisten“. Danach folgt der 2D-Plot-Idee-Slide (Gender/Alter) mit den vier Grundwörtern, optional als einfache Tabelle. Eine Slide zeigt die Erweiterung um adult/child/infant/grandfather. Die nächste führt die Royalty-Achse und die königliche Familie ein. Der Kern ist eine Slide mit der vektorweisen Subtraktion und Addition (king, man, woman, Zwischenergebnis, queen). Zwei Abschluss-Slides: viele Dimensionen und Training aus Text; ein Satz zu RAG/Suche. Design: große Zahlen, wenig Fließtext, eine Idee pro Slide.
