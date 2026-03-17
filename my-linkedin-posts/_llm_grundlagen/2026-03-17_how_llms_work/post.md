# March 17, 2026

[Bild: Folie "Schatz, gibst du mir das ____?"]

Was würdest du hier als nächstes Wort vorhersagen?

Genau diese Frage habe ich über 200 Personen gestellt, in den rund 20 Prompt-Engineering-Schulungen, die ich bisher gegeben habe.

Jedes. Einzelne. Mal. sagen fast alle gleichzeitig "Salz".

Das fühlt sich fast magisch an, wenn man im Raum steht und 15 Leute dasselbe Wort sagen, ohne sich abzusprechen.

Aber es ist keine Magie. Es ist Kontext. Und genau so funktioniert ein LLM.

ChatGPT, Claude, Gemini – jedes große Sprachmodell macht im Kern das, was ihr gerade gemacht habt. Und der Mechanismus dahinter ist simpler, als die meisten denken:

Das Modell nimmt den gesamten bisherigen Text als Kontext. Dann berechnet es für jedes Wort in seinem Vokabular – das sind rund 200.000 Wörter – eine Wahrscheinlichkeit. Das Wort mit der höchsten Wahrscheinlichkeit wird ausgewählt und an den Kontext angehängt. Dann beginnt die Schleife von vorn.

So entsteht jede Antwort. Wort für Wort. In einer Schleife.

Klingt simpel. Aber denkt mal darüber nach, warum ihr ausgerechnet "Salz" gesagt habt und nicht etwas anderes:

"Senf"? Grammatisch falsch. "Gibst du mir das Senf" funktioniert nicht, Senf ist maskulin.

"Atom-U-Boot"? Grammatisch korrekt ("das Atom-U-Boot"), aber absurd in einem Esszimmer.

"Kräuterbaguette"? Passt zum Thema Essen, aber es steht kein Baguette auf dem Tisch. Dafür Salz- und Pfefferstreuer.

Euer Gehirn hat in Sekundenbruchteilen Grammatik, Weltwissen und den konkreten Kontext des Bildes kombiniert, und "Salz" als wahrscheinlichstes Wort ausgegeben.

Ein LLM macht genau das. Und um das gut zu können, muss es all das implizit gelernt haben: Sprachregeln, Alltagswissen, soziale Konventionen. Niemand hat das einprogrammiert. Es hat sich allein durch das Training auf "sag das nächste Wort vorher" ergeben. Milliarden Male, auf einem riesigen Teil des Internets.

In dem simplen Wort "Salz" steckt also Weltwissen. Als Nebenprodukt der Vorhersage. Das finde ich nach wie vor eine der erstaunlichsten Sachen an LLMs.

Was ein LLM dabei nicht tut: Es denkt nicht im menschlichen Sinne. Es plant keine Antwort im Voraus. Es hat kein Bewusstsein. Es ist ein statistisches Modell, das Muster gelernt hat. Aber was für Muster.

Kleine Fußnote: Ich habe hier von "Wörtern" gesprochen, um es verständlich zu halten. Technisch arbeiten LLMs mit sogenannten Tokens. Was das genau ist, kommt im nächsten Post der Serie.

Was hättet ihr gesagt? Salz, Pfeffer, oder was ganz anderes?

#GenerativeAI #LLM #KI #LLMGrundlagen #PromptEngineering
