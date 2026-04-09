Computer lesen keine Wörter. Sie lesen Zahlen.

Trotzdem wirken Chatbots oft, als „verstünden“ sie Sprache. Ein zentraler Baustein dafür heißt Embedding: Jedes Token oder Wort wird in einen Vektor verwandelt – Punkt in einem hochdimensionalen Raum. Nah im Raum heißt: ähnliche Bedeutung.

So weit, so abstrakt. Deshalb arbeite ich in Erklärungen gern mit einem Mini-Raum aus zwei oder drei Achsen, bevor wir uns in die echten Hunderte von Dimensionen verabschieden. Das Vorbild dafür steht online sehr gut dokumentiert (CMU Word Embedding Demo).

Schritt eins: Zwei Achsen, zum Beispiel Gender und Alter. Vier Wörter: man, woman, boy, girl. Jede Zeile einer kleinen Tabelle ist ein Koordinatenpaar. Schon hier seht ihr: Distanz im Raster ist ein Proxy für semantische Nähe.

Schritt zwei: Mehr Wörter derselben Art – adult, child, infant, grandfather. Ihr übt nur noch, sinnvolle Koordinaten zu setzen. Das trainiert die Intuition, dass Bedeutung „irgendwo im Raum“ sitzt.

Schritt drei: king, queen, prince, princess. Mit nur zwei Achsen geht das schief: dieselben Gender/Alter-Ecken wie bei normalen Menschen, aber eine andere Bedeutung. Also dritte Achse, etwa Royalty. Jetzt lassen sich die Punkte sauber trennen.

Schritt vier, der Klassiker: king minus man plus woman. Vektorweise, Koordinate für Koordinate. Das Ergebnis liegt nahe queen. Das ist die berühmte Analogie als Lineal im Raum: Ihr messt die Richtung „zum König hoch“ und tragt sie bei „Frau“ an.

Schritt fünf, die Ernüchterung in gut: So eine Tabelle schreibt niemand für 50.000 Wörter von Hand. Stattdessen lernen Modelle aus Text, welche Wörter in ähnlichen Kontexten vorkommen, und setzen sie auf ähnliche Koordinaten – nur eben in viel höherer Dimension. Moderne Transformer gehen noch weiter und machen Embeddings abhängig vom ganzen Satz.

Wenn ihr verstanden habt, warum König minus Mann plus Frau in einem vereinfachten Koordinatensystem bei Königin landet, versteht ihr auch, warum „ähnliche Dokumente finden“ in KI-Pipelines oft „Vektoren clustern oder nach Nachbarn suchen“ heißt.

Nachrechnen und weiterlesen: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

In der Serie als Nächstes: Wie man das für RAG und Wissensabfragen aus dem Unternehmen nutzt.

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen

---

Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das PDF folgt bewusst den fünf Schritten aus dem Fließtext, eine Idee pro Slide: (1) Computer sehen Zahlen; (2) 2D-Tabelle mit vier Wörtern; (3) erweiterte Tabelle mit weiteren Alltags-Begriffen; (4) 3D-Tabelle inklusive Royalty und Königshaus; (5) Zwischenschritte der Vektorrechnung King−Man+Woman nebeneinander mit queen als Zielpunkt; (6) Kasten „viele Dimensionen, gelernt aus Text“; (7) ein Satz Kontext-Embeddings bei LLMs; (8) Ausblick RAG; (9) Quellenzeile mit CMU-Link. Format: durchgängig Tabellen-Screens oder vereinfachte Diagramme, Schriftgröße für Mobile, keine Paragraphen auf einer Slide.
