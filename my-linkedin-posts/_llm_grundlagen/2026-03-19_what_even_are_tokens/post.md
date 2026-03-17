# March 19, 2026

[Bild: Tokenisierung meines LinkedIn-Profiltexts]

Warum kann ChatGPT nicht die R in "strawberry" zählen?

Die Antwort hat mit einer kleinen Lüge zu tun. Im letzten Post habe ich gesagt, LLMs sagen das nächste Wort vorher. Stimmt nicht ganz. LLMs kennen gar keine Wörter. Und keine Buchstaben.

Was ein LLM sieht, ist eine Liste von Zahlen. Jede Zahl steht für ein 𝗧𝗼𝗸𝗲𝗻.

Im Bild habe ich meinen LinkedIn-Profiltext durch den GPT-5-Tokenizer gejagt. Jede Farbe ist ein Token. "HalliHallo" wird in drei Stücke zerlegt ("H", "alli", "Hallo"), mein Name "Dustin" ist dagegen ein einzelner Token: Nummer 161250.

Warum nicht einfach Wörter?

Die Menge an möglichen Wörtern ist absurd. Allein der Duden hat 151.000 Stichwörter. Klingt nach viel, aber mit allen grammatikalischen Formen, Komposita und Wörtern wie "Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz" sind es im Deutschen eher 2 Millionen Wortformen. Und GPT-5 muss ja nicht nur Deutsch verstehen. Kyrillisch, Mandarin, Arabisch, Japanisch, Tamil, Emojis. Das sprengt jedes Wörterbuch.

[Bild: Verschiedene Sprachen und Emojis tokenisiert]

Ein Tokenizer löst das anders. Er zerlegt Text in Stücke aus einem festen Vokabular. Der GPT-5-Tokenizer (o200k_base) kommt mit 𝟮𝟬𝟬.𝟬𝟬𝟬 𝗧𝗼𝗸𝗲𝗻𝘀 aus. Häufige Wörter bekommen ihren eigenen Token, seltene werden aufgespalten.

Grob gesagt: Ein Wort sind ungefähr 1,6 Tokens. Ein Token ungefähr 4 Buchstaben in englischem Text.

Der Haken daran: Das Internet ist größtenteils auf Englisch. Der Tokenizer ist dafür optimiert. Andere Sprachen brauchen für denselben Inhalt mehr Tokens und kosten damit mehr Geld.

[Bild: Tokenvergleich Englisch / Norwegisch / Arabisch]

Derselbe Text: 105 Tokens auf Englisch, 157 auf Norwegisch, 286 auf Arabisch. Wer GPT-5 auf Arabisch nutzt, zahlt für denselben Inhalt fast dreimal so viel wie auf Englisch.

Und jetzt die Eingangsfrage: Warum kann ein LLM die R in "strawberry" nicht zählen?

Weil es "strawberry" nicht als Buchstaben sieht. Es sieht nur Token 101830. Das LLM hat im Training gelernt, dass dieser Token etwas mit einer roten Frucht zu tun hat. Aber welche Buchstaben drinstecken? Keine Ahnung. Aus dem gleichen Grund kann ein LLM auch nicht zuverlässig eine bestimmte Wortanzahl einhalten.

Was ein LLM dafür kann: 𝗕𝗲𝗱𝗲𝘂𝘁𝘂𝗻𝗴 erkennen. "King" und "Prince" liegen für ein LLM nah beieinander. "Price" und "Prince" nicht, obwohl nur ein Buchstabe anders ist. Das finde ich nach wie vor faszinierend: Ein Modell, das keine Buchstaben sieht, versteht trotzdem Bedeutung.

Noch was: "Dustin" ist Token 161250 im GPT-5-Tokenizer. Mein Name ist wichtig genug für einen eigenen Token.

Ist euer Name auch ein eigener Token, oder braucht er zwei? Probiert es aus: tiktokenizer.vercel.app

#GenerativeAI #LLM #KI #LLMGrundlagen #Tokens
