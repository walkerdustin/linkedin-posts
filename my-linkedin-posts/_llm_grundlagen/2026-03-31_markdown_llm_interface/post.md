Wenn du effektiv mit Chatbots und Agenten arbeiten willst, musst du das hier wissen!!!

LLMs können eigentlich gar nicht mit formatiertem Text umgehen. In Word kannst du einfach ein Wort fett machen, um es zu highlighten und deinem Text Struktur geben, indem du Überschriften und Unterüberschriften verwendest. Chatbots und LLMs können das aber gar nicht verstehen, denn Word ist eine binäre Datei und nicht reiner Text.

Wie kannst du jetzt aber doch deinen Prompt formatieren und deinem LLM helfen, die Struktur zu verstehen? Die Antwort ist: Markdown.
Markdown ist eine spezielle Syntax, die größtenteils von Programmierern und Blogartikel-Verfassern verwendet wird. Mithilfe von Markdown kann man Text strukturieren und formatieren. Die Syntax ist super simpel. z.B. wenn du eine Überschrift möchtest, kannst du einfach # Überschrift eins schreiben. Wenn du eine Unterüberschrift möchtest, kannst du ## Überschrift zwei schreiben. Um ein Wort fett zu machen, kannst du es einfach mit zwei Sternchen vorne und hinten **fett** schreiben.

Das erkläre ich in fast jeder Schulung. Es passt zu dem, was wir in der Serie schon hatten: Tokens sind keine Buchstaben, PDFs sind oft nur extrahierter Text ohne Layout. Im Chatfenster ist der gleiche Deal: Ordnung muss im String stehen, nicht nur im Layout.
Wenn du komplexere und wiederverwendbare Prompts schreiben willst, dann kommst du um Markdown nicht herum.

Chatbots sind so programmiert, dass sie Markdown als Input verwenden und auch Markdown verwenden, um die Antwort schön zu formatieren.

Wenn du also im Chatbot-Output Überschriften und fettgedruckte Wörter siehst, dann ist das im Hintergrund eigentlich nur reiner Markdown-Text, welcher von einer Rendering Engine hübsch dargestellt wird.

Anbei gibt es ein Cheat Sheet: Grundlagen plus das, was in Chat-Interfaces meistens zuverlässig funktioniert. Als PDF und als Bild – zum Speichern oder Weiterschicken.

Das Wichtigste: Benutze die #-Syntax, um deinen Prompt zu formatieren.

Ein weiterer essenzieller Tipp von mir persönlich:
Immer wenn du Content als Referenz in einen Chatbot reinkopierst, musst du das unbedingt so formatieren, dass das LLM versteht, was dein Prompt ist und was der Content ist, den du reinkopiert hast.
Ich benutze hier sehr gerne drei Anführungszeichen vor und nach dem Text, den ich reinkopiere.
"""
text, den ich rein kopiert habe mit STRG + C und STRG + V
"""

Wo hast du schon mal von Markdown gehört? Schreib es in die Kommentare.

#GenerativeAI #LLM #KI #LLMGrundlagen #PromptEngineering #Markdown
