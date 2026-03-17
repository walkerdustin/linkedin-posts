# March 19, 2026 – Version 3: "Kleine Korrektur"

[Bild: Tokenisierung meines LinkedIn-Profiltexts]

Kleine Korrektur zu meinem letzten Post: LLMs sagen nicht das nächste Wort vorher. Sie sagen den nächsten Token vorher.

Klingt nach einem Detail. Ist es aber nicht.

Ein LLM sieht keinen Text. Keine Buchstaben, keine Wörter. Nur eine Folge von Zahlen. Jede Zahl ist ein Token.

Im Bild habe ich meinen LinkedIn-Profiltext durch den GPT-5-Tokenizer gejagt. Jede Farbe ist ein anderer Token. "HalliHallo" wird in drei Teile zerlegt: "H", "alli", "Hallo". "Dustin" dagegen ist ein einziger Token mit der Nummer 161250.

Warum Tokens statt Wörter? Weil Wörter allein nicht reichen. Der Duden hat 151.000 Stichwörter. Klingt nach viel, aber mit allen grammatikalischen Formen, Komposita und Wörtern wie "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz" sind es im Deutschen eher 2 Millionen Wortformen. Und das ist nur eine Sprache. GPT-5 muss auch Kyrillisch, Mandarin, Arabisch, Japanisch, Tamil und Emojis verstehen.

[Bild: Verschiedene Sprachen und Emojis tokenisiert]

Der GPT-5-Tokenizer (o200k_base) packt das alles in 200.000 Tokens. Häufige Wörter bekommen ihren eigenen Token. Seltene werden in Teile zerlegt. Grob gesagt: 1,6 Tokens sind ungefähr ein Wort, ein Token ungefähr 4 Buchstaben in englischem Text.

Aber jetzt kommt der Haken: Der meiste Text im Internet ist Englisch. Der Tokenizer ist dafür optimiert. Andere Sprachen brauchen mehr Tokens und sind deshalb teurer.

[Bild: Tokenvergleich Englisch / Norwegisch / Arabisch]

Derselbe Text: 105 Tokens auf Englisch, 157 auf Norwegisch, 286 auf Arabisch. Norwegisch kostet 50% mehr, Arabisch fast dreimal so viel.

Ein LLM kann nicht zählen, wie viele R in "strawberry" stecken, weil es die einzelnen Buchstaben gar nicht sieht. Es sieht nur Token 101830. Es kann auch keine bestimmte Wortanzahl einhalten, weil es keine Wörter kennt.

Was es dafür gelernt hat, ist Bedeutung. "King" und "Prince" liegen für ein LLM nah beieinander. "Price" und "Prince" nicht, obwohl nur ein Buchstabe anders ist. Das finde ich nach wie vor faszinierend: Ein Modell, das keine Buchstaben sieht, versteht trotzdem Bedeutung.

"Dustin" hat im GPT-5-Tokenizer die Nummer 161250. Mein Name hat offenbar seinen eigenen Token.

Ist euer Name auch ein eigener Token, oder besteht er aus mehreren? Findet es heraus: tiktokenizer.vercel.app

#GenerativeAI #LLM #KI #LLMGrundlagen #Tokens
