# January 21, 2026

Prediction 3 of N: Still a pretty obvious one. For LLM training and hosting focus will shift away from Nvidia GPUs and towards dedicated hardware like TPUs and specific chips optimized for running transformer models.
𝐁𝐢𝐭𝐜𝐨𝐢𝐧 𝐦𝐢𝐧𝐢𝐧𝐠 𝐚𝐧𝐚𝐥𝐨𝐠𝐲: In 2009 people were mining bitcoins using their CPU. Later they found out they can also use GPUs for that task much more efficiently. And then in 2013, when Bitcoin mining ASICs were invented, everyone that was still betting on GPUs to mine Bitcoin were left in the dust because ASICs were one hundred times more efficient in mining Bitcoin.
We see a similar thing in AI right now:
1. 𝐓𝐡𝐞 𝐮𝐧𝐢𝐭 𝐞𝐜𝐨𝐧𝐨𝐦𝐢𝐜𝐬 𝐡𝐚𝐯𝐞 𝐬𝐡𝐢𝐟𝐭𝐞𝐝. Generating 1 million tokens on a general-purpose NVIDIA H100 currently costs between $2.00 and $3.00 in cloud compute. On a Google TPU (Trillium), that same million tokens can cost as little as $𝟎.𝟓𝟎. For a company at scale, that 𝟓𝐱 𝐜𝐨𝐬𝐭 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞 is the gap between a viable product and a massive loss. GPUs are great because they are flexible, but you pay a "versatility tax" in electricity and hardware margin that specialized chips simply don't have.
2. 𝐖𝐞 𝐚𝐫𝐞 𝐦𝐨𝐯𝐢𝐧𝐠 𝐭𝐨𝐰𝐚𝐫𝐝 "𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞𝐫 𝐀𝐒𝐈𝐂𝐬." Companies like Etched are now building chips that have the Transformer algorithm hard-wired into the silicon. Their Sohu chip can't run traditional software or old AI models, but it can process over 𝟓𝟎𝟎,𝟎𝟎𝟎 𝐭𝐨𝐤𝐞𝐧𝐬 𝐩𝐞𝐫 𝐬𝐞𝐜𝐨𝐧𝐝 on Llama 3 (70B). That is an order of magnitude faster and cheaper than NVIDIA’s Blackwell. When the industry converges on one architecture (Transformers), building specialized "ASICs" for that architecture becomes the only logical move.
3. 𝐓𝐡𝐞 𝐦𝐚𝐫𝐤𝐞𝐭 𝐥𝐞𝐚𝐝𝐞𝐫𝐬 𝐚𝐫𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐡𝐞𝐝𝐠𝐢𝐧𝐠. 
On Christmas Eve 2025, NVIDIA effectively "acquihired" 𝐆𝐫𝐨𝐪 (the Hardware company, not the XAI LLM by Elon Musk) in a $𝟐𝟎𝐁 𝐝𝐞𝐚𝐥, bringing the core team and LPU (Language Processing Unit) tech in-house to fix their own inference efficiency gap.
Just last week, 𝐎𝐩𝐞𝐧𝐀𝐈 signed a $𝟏𝟎𝐁 𝐝𝐞𝐚𝐥 with Cerebras to deploy 750MW of wafer-scale systems.
NVIDIA is the king of the research and development phase. But for the massive, sustained production phase we are entering in 2026, the era of the general-purpose GPU is ending.

I often like to use the dumber GPT-OSS-120B on Cerebras with more than 2.000 Tokens per secon over a smarter GPT-5.2 with only 50 Tokens per second ( see second Image)

Are you already looking at TPUs or specialized inference providers for your production workloads, or are you still paying the NVIDIA premium?
