Dieser CEO schreibt 37.000 Zeilen Code pro Tag, in Teilzeit!
Aber sein Code und seine Website sind voller Müll.

Garry Tan ist der CEO von Y Combinator, einem der wichtigsten Startup-Accelerators der Welt.

Garry ist ein guter CEO und ein großartiger Startup-Berater. Ich mag seine Ratschläge zum Aufbau von Startups und zur Findung der richtigen Startup Idee.

Aber Garry ist kein Software Engineer. Wir müssen seine technischen Ratschläge also mit Vorsicht genießen.
Mit sehr viel Vorsicht, um genau zu sein.

Seit einiger Zeit rühmt sich Garry damit, wie viele Zeilen Code er pro Tag oder pro Woche schreiben kann. Er wirbt damit, dass er 37.000 Zeilen Code pro Tag über mehrere Projekte hinweg parallel schreibt.

Er hat sogar ein eigenes Framework dafür entwickelt, das Claude Code nutzt. Er nennt es G-Stack.

Kürzlich hat jemand auf Twitter eine seiner Webseiten (Garry's List) einem Code-Review unterzogen. Die Performance ist furchtbar. Es gibt so viele haarsträubende Probleme mit dieser Seite. Hier sind ein paar davon:

- 6,42 Megabyte und 169 Requests für eine einfache Homepage. (Zum Vergleich: Hacker News, ebenfalls von YC, braucht 12 Kilobyte und 7 Requests).
- 28 Testdateien (300 Kilobyte echte Test-Harnesses) werden an jeden Besucher in Produktion ausgeliefert.
- 78 ungenutzte Controller, die niemand braucht (inklusive "AI Image Generation" und einem "Hello World"-Scaffold).
- Das Logo lädt acht Mal, darunter eine 0-Byte-AVIF-Datei (eine fehlgeschlagene Konvertierung, die einfach deployed wurde).
- Die gesamte Seite wird doppelt gerendert: Das DOM enthält den gesamten Seiteninhalt zweimal (einmal für Mobile, einmal für Desktop).
- Ein 520 KB schwerer Rich-Text-Editor wird auf einer simplen Homepage geladen, die für Besucher komplett read-only ist. (wharscheinlich ein überbleibsel aus seinem Backend)

Hier sind meine Takeaways:

Lines of Code sind kein Maßstab für Produktivität. 
Nicht-Programmierer können heute Dinge bauen, die sie früher nie hätten tun können.
Aber man braucht trotzdem noch Software Engineers.
Lasst euch nicht von Leuten täuschen, die behaupten, sie hätten das perfekte AI-System, um Dinge zu erschaffen – sie alle haben Schwächen.

Was haltet ihr von Leuten die sagen, dass sie Tausende Zeilen Code pro Tag schreiben?

#GenerativeAI #SoftwareEngineering #AITooling #CodeQuality #StartupLife

---
Media: media.jpg (Screenshot von Garry Tans Original-Tweet mit den 37K LOC pro Tag)