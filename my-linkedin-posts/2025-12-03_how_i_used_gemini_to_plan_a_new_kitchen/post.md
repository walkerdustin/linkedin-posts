# December 03, 2025

𝗛𝗼𝘄 𝗜 𝘂𝘀𝗲𝗱 𝗚𝗲𝗺𝗶𝗻𝗶 𝘁𝗼 𝗽𝗹𝗮𝗻 𝗮 𝗻𝗲𝘄 𝗸𝗶𝘁𝗰𝗵𝗲𝗻 𝗳𝗼𝗿 𝘂𝗻𝗱𝗲𝗿 €𝟭,𝟬𝟬𝟬

In my last post, I discussed the power of the new 𝗚𝗲𝗺𝗶𝗻𝗶 𝟯 𝗣𝗿𝗼. So, when I needed to design a new kitchen on a tight budget, I took my own advice and jumped straight into a prompting session on Google AI Studio. Here is what I learned about LLMs, prompting, and Gemini's capabilities along the way.

𝗦𝘁𝗲𝗽 𝟭: 𝗧𝗵𝗲 "𝗧𝗶𝗺𝗲 𝘁𝗼 𝗧𝗵𝗶𝗻𝗸" 𝗧𝗲𝗰𝗵𝗻𝗶𝗾𝘂𝗲 — I started by asking the model to regurgitate everything it knows about the subject. "First, tell me everything you know about kitchen planning. What needs to be considered when planning a new kitchen? What are the standard sizes for refrigerators, sinks, ovens, stoves, etc...?" This helps the model get into the right context and helps me learn the basics.

𝗦𝘁𝗲𝗽 𝟮: 𝗩𝗶𝘀𝘂𝗮𝗹 𝗜𝗻𝗽𝘂𝘁 — Next, I leveraged Gemini's native image understanding by uploading a photo of the room layout.

𝗦𝘁𝗲𝗽 𝟯: 𝗖𝗼𝗻𝘀𝘁𝗿𝗮𝗶𝗻𝘁𝘀 𝗙𝗶𝗿𝘀𝘁 — I went step-by-step, asking it to analyze constraints without proposing a layout yet. This is tricky with modern LLMs because they are eager to solve the whole problem at once. I prompted: "Only determine the constraints. DO NOT give me a concrete layout yet!"

𝗦𝘁𝗲𝗽 𝟰: 𝗧𝗵𝗲 𝟮𝗗 𝗣𝗹𝗮𝗻 (𝗖𝗼𝗱𝗲 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝗼𝗻) — Once I had a layout, I wanted to visualize it. Using standard image generation models didn't work—diffusion models make things look pretty, but they can't do math. Instead, I used the 𝗖𝗼𝗱𝗲 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝗼𝗻 feature in AI Studio. "Use a 2D plotting library to create an exact plan of the layout." (For the nerds: Gemini chose matplotlib and wrote 84 lines of Python code for this.) The 2D plot looked great, but I got bold: could I get a 3D simulation?

𝗦𝘁𝗲𝗽 𝟱: 𝗧𝗵𝗲 𝟯𝗗 𝗕𝗿𝗲𝗮𝗸𝘁𝗵𝗿𝗼𝘂𝗴𝗵 — I prompted: "This looks nice. Now please create an accurate 3D simulation for the browser using JavaScript, so I can envision standing in the kitchen." Here is the kicker: AI Studio cannot natively execute JavaScript. However, Gemini wrote the JavaScript code as a string inside a Python script and then used Python to write it to an HTML file. Curiously, it used the 𝗔-𝗙𝗿𝗮𝗺𝗲 library instead of the expected Three.js.

𝗧𝗵𝗲 𝘁𝗮𝗸𝗲𝗮𝘄𝗮𝘆: Gemini 3 has made a massive leap forward in spatial reasoning. Have you tried using Code Execution for visual tasks yet? 👇
