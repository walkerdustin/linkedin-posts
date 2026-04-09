„Wir brauchen eine KI, die unsere internen Dokumente versteht.“

In Gesprächen mit Führungskräften höre ich den Satz ständig. Technisch landet man dabei fast immer bei denselben Bausteinen – und einer davon heißt Embedding, auch wenn das Wort selten in der Präsentation vorkommt.

Ein Embedding ist nichts Mystisches: Es ist eine Liste von Zahlen, die ein Wort oder ein Textstück im sogenannten Vektorraum verankert. Ähnliche Bedeutung heißt: ähnliche Zahlen, also Punkte, die im Raum nah beieinander liegen.

Wie man sich das ohne Formelsammlung vorstellt, zeigt ein altes didaktisches Spiel (ich nutze es in Schulungen in Tabellenform, angelehnt an eine sehr klare CMU-Demo): Ihr gebt jedem Wort Koordinaten für Bedeutungsmerkmale.

Zwei Achsen genügen für den Einstieg – zum Beispiel Gender und Alter für man, woman, boy, girl. Auf einmal ist „nah“ und „fern“ nicht mehr Gefühlssache, sondern Abstand im Koordinatensystem. Ihr könnt denselben Trick für abstraktere Begriffe wie adult oder child nutzen: wieder Zahlenpaare, die zur Intuition passen.

Sobald ihr Königinnen und Könige dazunehmt, reichen zwei Achsen nicht mehr: König und Mann wären ununterscheidbar. Also kommt eine dritte Dimension dazu – im Lehrbeispiel oft „Royalty“. Mehr Dimensionen heißen: mehr Freiheit, Bedeutung auseinanderzuziehen, ohne alles zu vermischen.

Der Wow-Moment für viele Zuhörende ist die Rechnung: Wenn ihr die Differenz von king und man bildet und zu woman addiert, landet ihr bei queen. Das ist die geometrische Form von „Mann ist zu König wie Frau ist zu …“. Kein Regelwerk im Code, sondern Vektorarithmetik auf den Koordinaten.

In der Praxis sind das nicht drei handisch gesetzte Zahlen, sondern typischerweise sehr viele Dimensionen, aus dem Training auf großen Textkorpora. Moderne LLMs gehen noch weiter und machen Repräsentationen kontextabhängig. Für Budget- und Projektentscheider reicht oft die eine Kernaussage: Wenn eure „KI“ passende Stellen in PDFs findet, sucht sie sehr wahrscheinlich nach geometrischer Nähe zwischen Vektoren – nicht nach Stichwort-Treffern wie bei der klassischen Suche.

Wer die Zahlen aus dem Spielbeispiel einmal selbst sehen will: https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html

Nächster logischer Schritt in meiner Serie: Wie man diese Nähe für RAG und Unternehmenswissen nutzt.

#GenerativeAI #LLM #KI #Embeddings #LLMGrundlagen #RAG

---

Zum PDF-Carousel (Begleit-PDF zum Swipen auf LinkedIn):

Das PDF richtet sich an Leserinnen und Leser, die beim Swipen schnell den roten Faden behalten wollen. Slide 1: Business-Hook (Dokumente durchsuchen) und die Übersetzung in „Nähe von Vektoren“. Slide 2: Definition Embedding in einem Satz. Slide 3–4: 2D-Tabelle Gender/Alter mit vier Wörtern und Erweiterung. Slide 5: Problem „zwei Achsen reichen nicht“ und Einführung Royalty. Slide 6: Tabelle mit Königshaus. Slide 7: King minus man plus woman gleich nahe queen, als Rechenschema. Slide 8: Skalierung und Training; Slide 9: Kurz RAG / interne Dokumente. Ton: sachlich, eine Kernaussage pro Slide, viel Weißraum.
