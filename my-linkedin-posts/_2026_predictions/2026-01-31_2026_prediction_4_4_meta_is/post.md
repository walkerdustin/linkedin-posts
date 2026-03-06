# January 31, 2026

𝟐𝟎𝟐𝟔 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧 𝟒 / 4: Meta is going to make a massive comeback on the LLM leaderboards in Q1, 2026.
They will crack the Top 10 on the Artificial Analysis leaderboard, sitting above GPT 5.1 in high-reasoning tasks. The catch? It won’t be open. Meta is shifting to a closed-source model served exclusively on Google Cloud through Google’s TPUs to bypass the "Nvidia tax." 
𝐇𝐨𝐰 𝐰𝐞 𝐠𝐨𝐭 𝐡𝐞𝐫𝐞:
𝐓𝐡𝐞 𝐓𝐢𝐦𝐞𝐥𝐢𝐧𝐞: In June 2025, Meta made a $14.3 billion acqui-hire for a 49% stake in Scale AI just to get founder Alexandr Wang to lead their Superintelligence division. They began splurging millions to purge talent from competitors, offering $100 million+ packages to poach top researchers. After the early 2025 Llama 4 launch underperformed benchmarks, Meta went "shadow mode"—quietly rebuilding while developers lost interest.
𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐂𝐡𝐚𝐧𝐠𝐞: Zuckerberg formed the TBD Lab, a small, high-performance team that literally sits in a circle around his desk so he can supervise the work daily. Yann LeCun, the face of Meta's open research, left the company to start his own venture after being marginalized by this new "product-first" regime.
𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐀𝐯𝐨𝐜𝐚𝐝𝐨: Meta is pivoting to a "distillation learning" framework. Instead of training from scratch, they are using larger "teacher" models like OpenAI’s gpt-oss (GPT-5) and Alibaba’s Qwen to train more efficient "student" models. 
𝐌𝐲 𝐎𝐩𝐢𝐧𝐢𝐨𝐧: They fucked up big time. It would have been easy for Meta to stay on top if they had just copied the innovations from Chinese labs earlier. Labs like DeepSeek proved you don't need "muscle-head" scaling if you use engineering elegance. 

Meta is now finally copying the DeepSeek playbook—specifically Multi-head Latent Attention (MLA) to crush their compute costs. By compressing keys and values into a latent vector $c_t^{KV} = W^{DKV} h_t$, they are trying to fit "frontier reasoning" into much cheaper hardware. They have the compute budget of 500,000 GPUs; they just needed to stop trying to be original. 

𝐌𝐲 𝐏𝐫𝐞𝐝𝐢𝐜𝐭𝐢𝐨𝐧:
Meta will fall behind their ambition on the absolute frontier, but they will produce a very capable small-to-medium sized model. It will perform incredibly well on benchmarks because they are optimizing for high scores to satisfy investors.
However, it will likely be annoying to use in real projects. Their recent "Early Experience" research shows they can train agents using 8x less data by letting them learn from their own "consequences," but that often leads to models that pass the test while failing the messy real world.

Do you think Meta can actually regain developer trust by going closed-source, or is the "Open Source Hero" brand the only thing that made them relevant?
