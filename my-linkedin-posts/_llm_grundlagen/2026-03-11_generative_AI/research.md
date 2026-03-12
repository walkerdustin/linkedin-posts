# Research: Einführung Generative AI & LLM Grundlagen (Serie-Auftakt)

## Ziel des Posts

Erster Post der Serie **"LLM Grundlagen"**. Leichte Einführung ins Thema: Was ist Generative AI, wie ordnet sich das in die KI-Landschaft ein, und warum starte ich diese Serie?

---

## 1. Begriffseinordnung: Die KI-Hierarchie

Die Grafik aus der [at]-Präsentation zeigt die Zusammenhänge als verschachtelte Mengen:

![Begriffseinordnung](research/generative%20AI%20einordnung.png)

### Hierarchie (von außen nach innen)

| Begriff | Definition | Beispiel |
|---|---|---|
| **Künstliche Intelligenz (KI)** | Oberbegriff: Systeme, die Aufgaben automatisiert ausführen, welche menschenähnliche Intelligenz erfordern | Schachcomputer, Sprachassistenten, autonomes Fahren |
| **Regelbasierte Expertensysteme** | Speichern Wissen und rufen es anhand definierter Regeln ab | Medizinische Diagnosesysteme der 80er, Steuersoftware |
| **Machine Learning (ML)** | Modelle lernen aus historischen Daten, um Vorhersagen für neue Daten zu treffen | Kreditrisiko-Bewertung, Empfehlungsalgorithmen, Betrugserkennung |
| **Deep Learning (DL)** | Künstliche neuronale Netze, inspiriert von biologischen Gehirnen, mit vielen Schichten | Bilderkennung, Spracherkennung, autonomes Fahren |
| **Generative KI** | Modelle, die darauf ausgelegt sind, **neue Artefakte** wie Texte, Bilder oder Daten zu erzeugen | ChatGPT, DALL-E, Midjourney, Stable Diffusion |
| **LLMs (Large Language Models)** | Große Sprachmodelle, spezialisiert auf **Verständnis und Erzeugung natürlicher Sprache** | GPT-4, Claude, Gemini, Llama, Mistral |

### Wichtige Nuance
- Nicht jede KI ist Machine Learning (regelbasierte Systeme sind es nicht)
- Nicht jedes ML ist Deep Learning (z.B. Random Forests, SVMs)
- Nicht jedes Deep Learning ist generativ (z.B. Bildklassifikation ist diskriminativ)
- Nicht jede Generative KI ist ein LLM (z.B. DALL-E/FLUX erzeugen Bilder, nicht Text)
- LLMs sind eine Teilmenge der Generativen KI, spezialisiert auf Sprache

---

## 2. Warum ist das Verständnis wichtig?

### Begriffsverwirrung ist real
- Viele nutzen "KI", "Machine Learning", "Generative AI" und "LLM" synonym
- Führungskräfte sagen "wir brauchen KI" und meinen eigentlich "wir brauchen ChatGPT"
- Umgekehrt: Manche Probleme brauchen klassisches ML, nicht GenAI
- Ohne Begriffsklarheit werden falsche Technologie-Entscheidungen getroffen

### Zahlen zum Markt Deutschland
- GenAI-Markt in Deutschland: >2,5 Mrd. Euro, ~20% jährliches Wachstum
- Prognose bis 2030: 7,62 Mrd. Euro
- Nutzer sparen durchschnittlich **2,5 Stunden pro Woche** durch GenAI-Anwendungen
- 20% der Unternehmen setzen bereits KI-Agenten ein, 50% prüfen den Einsatz

---

## 3. Zeitliche Einordnung: KI ist alt, LLMs sind brandneu

Die Kernbotschaft hier: Das Feld KI existiert seit Jahrzehnten, Deep Learning ist relativ neu, und Generative KI / LLMs sind extrem jung.

| Ära | Zeitraum | Was passierte |
|---|---|---|
| **Künstliche Intelligenz** | seit den **1950ern** | Der Begriff "Artificial Intelligence" wurde 1956 auf der Dartmouth-Konferenz geprägt. Regelbasierte Expertensysteme dominierten jahrzehntelang. |
| **Machine Learning** | seit den **1980/90ern** | Algorithmen, die aus Daten lernen statt Regeln zu befolgen. Entscheidungsbäume, SVMs, Random Forests. |
| **Deep Learning** | Durchbruch ab **~2012** | AlexNet gewinnt die ImageNet-Challenge und zeigt: Neuronale Netze mit vielen Schichten funktionieren. GPU-Computing macht es möglich. |
| **Generative KI / LLMs** | ab **~2017-2020** | 2017: Transformer-Architektur ("Attention is All You Need"). 2020: GPT-3 zeigt erstmals beeindruckende Textgenerierung. |
| **Der Mainstream-Moment** | **Nov 2022** | ChatGPT Launch – 100 Mio. Nutzer in 2 Monaten. Seitdem: GPT-4, Claude, Gemini, Llama, Mistral, und das Ökosystem explodiert. |

**Perspektive**: KI gibt es seit ~70 Jahren. LLMs, wie wir sie heute kennen, gibt es seit ~3 Jahren. Wir stehen noch ganz am Anfang.

---

## 4. Ideen für den Post-Aufbau

### Hook (favorisiert)
"Ich starte heute eine neue Serie: LLM Grundlagen. Und ich beginne mit der wichtigsten Frage: Wo in der KI-Landschaft stehen LLMs eigentlich?"

### Kernbotschaften
1. **Einordnung geben**: KI > ML > DL > Generative KI > LLMs – jede Ebene aufeinander aufbauend
2. **Begriffe entwirren**: Nicht alles, was "KI" genannt wird, ist dasselbe
3. **Serie ankündigen**: Kommende Themen: LLMs im Detail, Tokens, Multimodalität, RAG, uvm.
4. **Persönlicher Bezug**: Als GenAI Engineer erlebe ich täglich, dass Grundlagenwissen fehlt – bei Technikern wie bei Entscheidern

### Möglicher Aufbau
1. Hook: Persönlicher Einstieg / Beobachtung aus dem Alltag
2. Problem: Begriffsverwirrung, alle reden über KI aber meinen verschiedene Dinge
3. Einordnung: Die verschachtelten Kreise erklären (mit Bild-Verweis)
4. Warum das wichtig ist: Ohne Grundlagen werden falsche Entscheidungen getroffen
5. Ausblick: Serie ankündigen – LLMs, Tokens, Multimodalität, RAG, uvm.
6. CTA: Folgen für die Serie / Frage an die Community

### Ton
- Deutsch, professionell aber nahbar
- Nicht belehrend, sondern einladend ("Lass uns das gemeinsam durchgehen")
- Keine Sensationsmache, sondern fundiertes Grundlagenwissen
- Persönliche Erfahrung einfließen lassen

---

## 5. Quellen

- [ML, DL & Generative KI: Unterschiede einfach erklärt – IMRIVA](https://www.imriva.de/machine-learning-deep-learning-generative-ki/)
- [KI, ML, DL und generative KI: Unterschiede erklärt – WeblineIndia](https://www.weblineindia.com/de/blog/ai-vs-ml-vs-deep-learning-vs-generative-ai/)
- [Artificial Intelligence, ML, DL, and GenAI Clearly Explained – Towards Data Science](https://towardsdatascience.com/artificial-intelligence-machine-learning-deep-learning-and-generative-ai-clearly-explained/)
- [LLMs einfach erklärt – Axels Technikblog](https://axels-technikblog.de/was-ist-ein-llm-large-language-models-einfach-erklaert/)
- [Large Language Models erklärt – Computerwoche](https://www.computerwoche.de/article/2823883/was-sind-llms.html)
- [adesso GenAI-Studie 2025](https://adesso.de/de/impulse/generative-ai/studie-2025/download.jsp)
- [GenAI Marktvolumen Deutschland – Statista](https://de.statista.com/prognosen/1484379/marktvolumen-im-bereich-generativer-ki-in-deutschland)
- [Transformer Timeline – ai.v-gar.de](https://ai.v-gar.de/ml/transformer/timeline/)
- [Transformer-Modelle: Revolution in der KI – gpt5.blog](https://gpt5.blog/transformer-modelle/)
- [at]-interne Präsentation: Begriffseinordnung Generative KI und LLMs (Folie 32)
