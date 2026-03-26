Früher war es eine ziemlich dumme Idee, Screenshots in einen Chatbot zu posten.

Heute mache ich das regelmäßig.

Letzte Woche saß ich vor einer Excel-Tabelle mit Quartalszahlen. Ich brauchte eine Visualisierung – schnell. Screenshot gemacht, in ChatGPT geworfen, nach einer Grafik gefragt. Fünf Minuten später hatte ich exakt das, was ich brauchte.

Das ist ein ziemlich großer Unterschied zu früher.

Vor zwei Jahren hätte ich die Tabelle erst mühsam extrahieren, bereinigen und formatieren müssen, bevor das LLM überhaupt etwas damit anfangen konnte. Denn das Problem ist: Klassische Sprachmodelle sehen Bilder nicht. Sie kriegen höchstens extrahierten Text, und dabei geht das Layout komplett verloren.

Aber wie funktioniert das jetzt plötzlich?

Die Antwort ist technisch faszinierend, aber das Prinzip ist simpel: Moderne multimodale Modelle haben einen Vision Encoder direkt eingebaut. Das Bild wird in kleine Stücke (Patches) zerlegt, und ein spezieller Encoder verwandelt diese in Vektoren – kontinuierliche Embeddings, die im selben Raum wie Text-Embeddings leben.

Das LLM verarbeitet diese Bild-Embeddings zusammen mit Text. Es sieht also tatsächlich das Bild, nicht nur eine Beschreibung davon. Deshalb funktionieren Screenshots. Deshalb erkennt es Tabellenstrukturen. Deshalb kann es Diagramme verstehen.

Es gibt natürlich Grenzen. Das Bild wird herunterskaliert, kleine Details gehen verloren, und es ist verdammt teuer in Tokens. Bei 1000-4000 Tokens pro Bild sollte man wissen, was man tut.

Aber in meinem Alltag hat sich der Workflow komplett verändert. In Schulungen erkläre ich Teilnehmern heute: "Wenn ihr Screenshots schickt, macht den Text groß genug." Das ist ein Tipp, den ich mir selbst durch viel Ausprobieren aneignen musste.

Nutzt ihr schon Screenshots mit KI? Oder habt ihr noch Bedenken?

#GenerativeAI #LLM #KI #MultimodalAI #LLMGrundlagen #Productivity
