# February 05, 2026

𝗣𝗿𝗲𝗱𝗶𝗰𝘁𝗶𝗼𝗻 𝟱/𝟱: Titans are going to disrupt the LLM ecosystem in 2026
But wtf is Titans? Let me explain.
I thought I was done with my predictions for 2025, but I just had a thought, I had to put out there
𝗘𝘅𝗽𝗹𝗮𝗶𝗻𝗲𝗱 𝗳𝗼𝗿 𝗱𝘂𝗺𝗺𝗶𝗲𝘀:
Titans is a new LLM architecture proposed by Google in a paper from January 2025 (Paper: https://lnkd.in/dS4SfP9h Blog: https://lnkd.in/dRXDVSSP).
The problem is that LLMs have a limited context window. These 100k to 1M tokens are plenty for a simple chatbot or agent, but when you want to have your agent act in a large codebase implementing big changes, or when you want to run an agent inside a large company and want it to have a grasp of all the specific internal data and processes, it is just never enough.
𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗲𝘅𝗽𝗹𝗮𝗻𝗮𝘁𝗶𝗼𝗻:
LLMs work by predicting the next token based on all the tokens that come before it in the context window.
This means that the compute cost and memory costs increase drastically with increasing context size.
RNNs (Recurrent Neural Networks), however, work differently. They compress the entire context into a fixed-size vector and compute the next token based on this vector.
Google Titans is a mixture/evolution of these two approaches. They use a regular transformer LLM but also add some kind of compressed storage on top of it, allowing the system to scale to infinite context size.
𝗪𝗵𝗮𝘁 𝗱𝗼𝗲𝘀 𝗶𝘁 𝗺𝗲𝗮𝗻?
In 2025, the development in frontier LLMs was dominated by the reasoning paradigm. Scaling up Reinforcement Learning to improve reasoning and scaling up test-time compute was the biggest lever everyone in the industry was pulling.
Now I predict that we are ripe for a new paradigm: “𝗧𝗲𝘀𝘁-𝘁𝗶𝗺𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴”.
We already have something similar with different kinds of memory systems. Some systems like ChatGPT and MS Copilot have a little scratchpad where they can note down things to remember between chats. Some systems use a more complex key-value store to scale the amount of memory they can store to infinity. And some systems use semantic vector storage to improve the retrieval of relevant memories.
In the dozens of Prompt Engineering Workshops I have given as a Generative AI Consultant, it is the biggest misconception that most people have. They think that the system is learning the more they use it. They think that this chatbot can't be so stupid as to make the same mistakes every single time. And I always have to tell them, “NO! It does not learn. Every time you start a new chat, it forgets everything and you will have to tell it the same thing again and again.”
I hope that in 2027 the assumption that the system “learns on the job” will be somewhat true.

Do you feel like ChatGPT or MS Copilot is learning the more you chat with it?
