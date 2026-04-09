Im letzten Teil der Serie zu Tokens habe ich geschrieben: „Bier“ und „Sekt“ liegen für ein LLM nah beieinander, „Bier“ und „Tier“ nicht – obwohl sich nur ein Buchstabe unterscheidet.

Die Frage, die danach fast immer kommt: Was heißt „nah“ da eigentlich?

Antwort: nicht „nah im Alphabet“, sondern nah im Vektorraum. Jedes Wort (genauer: oft jeder Token) wird als Liste von Zahlen gespeichert – ein sogenanntes Embedding. Stellt euch das wie Koordinaten vor.

Nehmt vier englische Wörter: man, woman, boy, girl. Zwei Achsen reichen für eine erste Intuition: eine für „Gender“, eine für „Alter“. Dann hat jedes Wort einen Punkt im Koordinatensystem. „Boy“ und „girl“ sind in der Alters-Richtung nah beieinander, in der Gender-Richtung weit auseinander. Bedeutung wird zu Geometrie.

Ihr könnt weitere Wörter einordnen: adult, child, infant, grandfather – immer als Zahlenpaar, das zur Bedeutung passt. Das ist kein Spiel mit willkürlichen Zahlen, sondern die Idee hinter semantischen Merkmalen: Jede Achse steht für einen Aspekt der Bedeutung.

Jetzt kommen king, queen, prince, princess. Die passen in dieselben Gender/Alter-Ecken wie man/woman/boy/girl – aber sie sind nicht dasselbe. Also braucht ihr eine dritte Achse, zum Beispiel „Royalty“. Ohne diese Dimension würden König und normaler Mann im Plot kollidieren.

Und hier wird es der Klassiker, den viele schon gehört haben, aber selten wirklich durchgerechnet sehen: King minus man plus woman landet im Koordinatenraum sehr nah bei queen. Ihr nehmt die Verschiebung von „Mann“ zu „König“ und legt sie bei „Frau“ an. Raus kommt „Königin“. Analogien sind in solchen Räumen oft lineare Beziehungen – nicht Magie, sondern Vektorrechnung.

In der Realität sind es nicht zwei oder drei Koordinaten, sondern typischerweise Hunderte bis deutlich mehr. Niemand füllt die Tabelle von Hand; ein Modell lernt die Zahlen aus riesigen Textmengen, weil Wörter, die in ähnlichen Kontexten vorkommen, ähnliche Muster brauchen.

Moderne LLMs sind noch eine Schicht komplexer als alte Wortvektoren – ihre Repräsentationen sind kontextabhängig. Aber die Intuition bleibt: „Nah“ im Embedding-Raum ist der Grund, warum semantische Suche, Clustering und Dinge wie RAG überhaupt funktionieren.

Wer das einmal selbst nachvollziehen will: Das Tutorial zur Word-Embedding-Demo von David Touretzky (CMU) führt genau durch die Koordinaten und die König-Königin-Rechnung – mit Zahlen, die man Schritt für Schritt nachrechnen kann: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

In meinen Schulungen nutze ich für diesen Exkurs oft dieselbe Tabellenlogik wie in der Demo. Wenn die Tabelle erstmal „klickt“, verstehen viele plötzlich, warum hinter „KI durchsucht unsere Dokumente“ oft nichts anderes steckt als: finde die nächsten Nachbarn im Vektorraum.

Als Nächstes in der Serie: RAG – also wie man genau diese Nachbarschaft nutzt, um Fakten aus eigenen Unterlagen in den Chat zu holen.

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen

---

Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das PDF führt dieselbe Story in kurzen, gut lesbaren Slides: Start mit der Frage, was „nah“ für ein Modell bedeutet; eine Slide mit dem 2D-Gedanken (Gender/Alter) und den vier Basiswörtern; eine Erweiterung um weitere Begriffe wie adult/child/infant/grandfather; dann die dritte Dimension Royalty mit king/queen/prince/princess; die zentrale Slide mit der schrittweisen Rechnung King minus man plus woman und dem Ergebnis nahe queen; eine Slide zur Skalierung (viele hundert Dimensionen, gelernt aus Text, keine handische Tabelle); Abschluss mit Praxisbezug (Suche, RAG) und einem Hinweis auf die CMU-Quelle. Optisch: klare Tabellen und wenig Text pro Slide, damit es auf dem Handy beim Durchswipen verständlich bleibt.
