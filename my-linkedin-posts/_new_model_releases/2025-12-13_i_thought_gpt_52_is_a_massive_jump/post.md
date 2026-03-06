# December 13, 2025

I thought GPT 5.2 is a massive jump in the frontier based on some reviews I have seen. But now that I have looked into the model further, I can say it is a good jump in performance compared to GPT 5.1 but just incremental improvement or even stagnation at the frontier of AI compared to Gemini 3 Pro and Claude Opus 4.5. However, GPT 5.2 stands out in a few specific areas. All about that, and about a few points that you will miss just listening to the mainstream media, below:

𝟏. 𝐁𝐞𝐧𝐜𝐡𝐦𝐚𝐫𝐤 𝐌𝐚𝐱𝐢𝐧𝐠 & 𝐂𝐨𝐧𝐭𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 — With OpenAI announcing "Code Red," I am a bit worried about them trying more benchmark maxing. We need to be careful about contamination; if a model has seen the test questions during training, we aren't measuring reasoning—we're measuring memorization.

𝟐. 𝐇𝐨𝐰 𝐭𝐨 𝐀𝐧𝐚𝐥𝐲𝐳𝐞 𝐁𝐞𝐧𝐜𝐡𝐦𝐚𝐫𝐤𝐬 — We need to stop looking at raw scores and start looking at 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐩𝐞𝐫 𝐃𝐨𝐥𝐥𝐚𝐫 or 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐩𝐞𝐫 𝐓𝐡𝐢𝐧𝐤𝐢𝐧𝐠 𝐓𝐨𝐤𝐞𝐧. Performance is increasingly driven by the test-time compute budget. Is the model actually smarter, or did it just spend $10 reasoning through a problem that a competitor solved for $0.50?

𝟑. 𝐆𝐏𝐓 𝟓.𝟐 𝐢𝐬 𝐰𝐨𝐫𝐬𝐞 𝐭𝐡𝐚𝐧 𝐆𝐏𝐓 𝟓 𝐨𝐧 𝐒𝐢𝐦𝐩𝐥𝐞𝐁𝐞𝐧𝐜𝐡 (See Image 1) — On my private evaluation set—designed specifically to prevent memorization—GPT-5.2 Pro actually scores 𝐥𝐨𝐰𝐞𝐫 (57.4%) than the previous GPT-5 Pro (61.6%). It trails significantly behind Gemini 3 Pro (76.4%). This suggests a loss in fluid intelligence when facing novel trick questions.

𝟒. 𝐏𝐫𝐢𝐜𝐞-𝐭𝐨-𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐑𝐚𝐭𝐢𝐨 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞𝐬 𝐭𝐨 𝐅𝐚𝐥𝐥 — This is the real engineering win. On the ARC-AGI-1 benchmark, the cost to achieve frontier performance has plummeted. A year ago, o3-high scored 88% at ~$4,500 per task. Today, GPT-5.2 Pro hits 90.5% at $11.64 per task. That is a 𝟑𝟗𝟎𝐱 𝐞𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐢𝐦𝐩𝐫𝐨𝐯𝐞𝐦𝐞𝐧𝐭.

𝟓. 𝐈𝐦𝐩𝐫𝐞𝐬𝐬𝐢𝐯𝐞 𝐋𝐨𝐧𝐠 𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 (See Image 2) — GPT-5.2 maintains near 100% recall accuracy up to 250k tokens. Previous models degraded fast. For RAG pipelines and heavy document analysis, this is the reliability we've been waiting for.

𝟔. 𝐀 𝐌𝐚𝐣𝐨𝐫 𝐁𝐨𝐨𝐬𝐭 𝐟𝐨𝐫 𝐄𝐱𝐜𝐞𝐥 (See Image 3) — The improvement in generating structured spreadsheets is stark. The outputs are cleaner and logically formatted. Microsoft Copilot users are likely to benefit a lot from this upgrade.

𝟕. 𝐅𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐭𝐲 𝐢𝐬 𝐁𝐞𝐭𝐭𝐞𝐫, 𝐁𝐮𝐭 𝐍𝐨𝐭 𝐒𝐨𝐥𝐯𝐞𝐝 (See Image 4) — The error rate on anonymised ChatGPT requests dropped from 8.8% to 6.2%. That is progress, but let's be real: a 𝟔.𝟐% 𝐞𝐫𝐫𝐨𝐫 𝐫𝐚𝐭𝐞 is still terrible for critical production use cases. We haven't solved the structural issues yet.

Are you interested in upgrading your AI workflows to GPT-5.2? Let me know in the comments. 👇

#GenerativeAI #LLMs #OpenAI #GPT5 #AIEngineering #TechNews
