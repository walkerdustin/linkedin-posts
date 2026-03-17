# March 19, 2026 – Version 1: "Ich habe gelogen"

[Bild: Tokenisierung meines LinkedIn-Profiltexts]

In meinem letzten Post habe ich etwas gelogen.

Ich habe gesagt, LLMs sagen das nächste Wort vorher. Klingt einleuchtend, ist aber falsch. LLMs kennen gar keine Wörter. Keine Buchstaben, keine Sätze, keinen Text. Was ein LLM sieht, ist eine Liste von Zahlen. Diese Zahlen heißen Tokens.

Im Bild habe ich meinen LinkedIn-Profiltext durch den GPT-5-Tokenizer gejagt. Jede Farbe ist ein Token. "HalliHallo" wird in drei Tokens zerlegt: "H", "alli", "Hallo". Mein Name "Dustin" dagegen ist ein einzelner Token: Nummer 161250.

Warum nicht einfach Wörter nehmen?

Weil es viel zu viele gibt. Der Duden listet rund 151.000 Stichwörter. Klingt machbar. Aber wenn man alle grammatikalischen Formen und Komposita mitzählt, landet man allein im Deutschen bei geschätzt 2 Millionen Wortformen. Und dann muss GPT-5 ja nicht nur Deutsch können, sondern auch Kyrillisch, Mandarin, Arabisch, Japanisch, Tamil und sogar Emojis 🎲🦊🍜

[Bild: Verschiedene Sprachen und Emojis tokenisiert]

Ein Tokenizer löst dieses Problem. Er wurde darauf trainiert, jeden Text mit möglichst wenig Tokens darzustellen. Der GPT-5-Tokenizer heißt o200k_base, und wie der Name verrät: 200.000 Tokens im Vokabular. Häufige Wörter wie "the" oder "und" bekommen ihren eigenen Token. Seltene werden aufgespalten.

Grob gesagt: 1,6 Tokens sind ungefähr ein Wort. Ein Token sind ungefähr 4 Buchstaben in englischem Text.

Aber: Der Großteil des Internets ist auf Englisch, also ist der Tokenizer auch dafür optimiert. Andere Sprachen brauchen für denselben Inhalt mehr Tokens.

[Bild: Tokenvergleich Englisch / Norwegisch / Arabisch]

Derselbe Text: 105 Tokens auf Englisch, 157 auf Norwegisch, 286 auf Arabisch. Norwegisch braucht 50% mehr Tokens, Arabisch fast dreimal so viele. Selber Inhalt, aber deutlich teurer. Gleicher Inhalt, andere Rechnung.

Tokens bestimmen aber auch, was ein LLM inhaltlich "versteht". Im Training hat es jedem Token eine Bedeutung zugewiesen. "King" und "Prince" liegen für ein LLM semantisch nah beieinander. "Price" und "Prince" nicht, obwohl sich die Wörter nur in einem Buchstaben unterscheiden. Das LLM sieht eben keine Buchstaben.

Und genau deshalb kann ein LLM nicht zählen, wie viele R in "strawberry" stecken. Es sieht nicht s-t-r-a-w-b-e-r-r-y, sondern Token Nummer 101830. Genauso wenig kann es zuverlässig eine bestimmte Wortanzahl einhalten. Es kennt keine Wörter.

Übrigens: "Dustin" hat im GPT-5-Tokenizer die Nummer 161250. Mein Name ist offenbar wichtig genug für einen eigenen Token.

Ist eurer auch ein eigener Token, oder braucht er zwei? Probiert es aus: tiktokenizer.vercel.app

#GenerativeAI #LLM #KI #LLMGrundlagen #Tokens
