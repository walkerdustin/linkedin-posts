Wenn du effektiv mit Chatbots und Agenten arbeiten willst musst du das hier wissen!!!

LLMs können eigentlich gar nicht mit formatiertem text umgehen. In word kannst du einfach ein wort fett machen um es zu highlighten und deinem text strucktur geben indem du überschriften und unterüberschriften verwendest. Chatbots und LLMs können das aber gar nicht verstehen, denn Word ist eine binäre datein und nicht reiner text.

Wie kannst du jetzt aber doch deinen Prompt formatieren und deinem LLM helfen die Struktur zu verstehen? Die Antwort ist: Markdown.
Markdown ist eine spezielle syntax, die größtenteils von Programmierern und Blog artikel verfassern verwendet wird. Mithilfe von Markdown kann man Text strukturieren und formatieren. Die syntax ist super simpel. z.B. wenn du eine überschrift möchtest, kannst du einfach # Überschrift eins schreiben. Wenn du eine unterüberschrift möchtest, kannst du ## überschrift zwei schreiben. Um ein Wort fett zu machen, kannst du es einfach mit zwei sternchen vorne und hinten **fett** schreiben.

Das erkläre ich in fast jeder Schulung. Es passt zu dem, was wir in der Serie schon hatten: Tokens sind keine Buchstaben, PDFs sind oft nur extrahierter Text ohne Layout. Im Chatfenster ist der gleiche Deal: Ordnung muss im String stehen, nicht nur im Layout.
Wenn du komplexere und wiederverwendbare Prompts schreiben willst, dann kommst du um Markdown nicht herum.

Chatbots sind so programmiert, dass sie Markdown als input verwenden und auch markdown verwenden um die antwort schön zu formatieren.

Wenn du also in dem Chatbot output ein Überschriften und FEddgedruckte wörter siehst dann ist das im hintergrund eigentlich nur reiner markdwon text, welcher von einer rendering engine hübsch dargestellt wird.

Anbei gibt es ein Cheat Sheet: Grundlagen plus das, was in Chat-Interfaces meistens zuverlässig funktioniert. Als PDF und als Bild – zum Speichern oder Weiterschicken.

Das wichtigste ist Benutze die # Syntax um deinen Prompt zu formatieren.

Ein weiterer essentieller tipp von mir persönlich:
Immer wenn du Content als referenz in einen Chatbot rein copy pastest musst du das unbedint so formattieren, dass das LLM versteht was dein Prompt ist und was der Content ist den du rein kopiert hast.
Ich benutze hier sehr gerne drei anführungszeichen vor und nach dem Text den ich rein kopiere.
"""
text, den ich rein kopiert habe mit STRG + C und STRG + V
"""

Wo hast du schonmal von Markdown gehört? Schrein es in die Kommentare.

#GenerativeAI #LLM #KI #LLMGrundlagen #PromptEngineering #Markdown
