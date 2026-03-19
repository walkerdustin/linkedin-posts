---
name: optimize-hook
description: |
  Optimize the hook (first 2 lines) of a LinkedIn post draft. Generates 10 hook
  variations using proven pattern-interrupt techniques, reviews each one, and
  recommends the strongest option. Use when the user wants to improve, write, or
  optimize a LinkedIn hook, or mentions "hook" in the context of a post draft.
---

# Optimize Hook

Generate and evaluate hook options for a LinkedIn post draft.

## Prerequisites

This skill requires **both** of the following before running:

1. **A post draft** — either in a file (e.g. `neuer-post/post.md`) or pasted in chat.
2. **Context about the post** — the topic, target audience, or key message.

If either is missing, ask the user to provide it before proceeding. Never generate hooks without a concrete post to hook into.

## What makes a good LinkedIn hook

The hook is the first 2 lines visible before the "... more" fold on LinkedIn — roughly **2 short sentences of ~55 characters each**. Its only job: break the reader's scrolling pattern and force a click on "... more".

### Rules

- The hook is about the **reader** or a **universal tension** — never about the author bragging.
- It creates an **open loop**: an unanswered question, a contradiction, or a bold claim the reader can't ignore.
- No emoji openers, no hashtags, no personal achievements as lead.
- It should feel like something a friend would text you that makes you reply "wait, explain."
- Match the language of the post (German or English).

### Techniques

| # | Technique | What it does | Example |
|---|---|---|---|
| 1 | **Contradiction** | Say something that sounds wrong | "Die schlechtesten LinkedIn-Posts bekommen die meisten Follower." |
| 2 | **Specific number + unexpected context** | Concrete detail creates curiosity | "Ich habe 2.000 Leuten entfolgt. Mein Engagement hat sich verdreifacht." |
| 3 | **Direct accusation** | Call the reader out | "Du schreibst LinkedIn-Posts für deine Mama, nicht für dein Netzwerk." |
| 4 | **Stolen thought** | Say what the reader secretly thinks | "Du weißt, dass deine Posts langweilig sind. Alle anderen auch." |
| 5 | **Absurd reframe** | Make something mundane dramatic | "Dein LinkedIn-Hook hat 1,2 Sekunden zu leben. Die meisten sterben sofort." |
| 6 | **Provocative question** | Ask something the reader can't scroll past | "Warum liest niemand deinen Post zu Ende?" |
| 7 | **Counter-intuitive advice** | Recommend the opposite of what's expected | "Hör auf, Mehrwert zu liefern. Dein Netzwerk will was anderes." |
| 8 | **Cliffhanger / incomplete story** | Start a story and leave it hanging | "Letzte Woche hat mein Post 200.000 Views bekommen. Aber nicht wegen dem, was drinsteht." |
| 9 | **Bold prediction** | Make a sharp forward-looking claim | "In 12 Monaten postet die Hälfte von euch nicht mehr auf LinkedIn." |
| 10 | **Relatable frustration** | Name a pain the reader knows too well | "Du hast 30 Minuten an einem Post geschrieben. 14 Leute haben ihn gesehen." |

## Process

1. **Read the post draft** thoroughly.
2. **Identify the core message** — what is the single most important takeaway?
3. **Identify the target reader** — who scrolls past this? What do they care about?
4. **Generate 10 hook options** — use a different technique for each (see table above). Write the exact 2 lines as they would appear on LinkedIn. Keep it tight — every character counts.
5. **Review each hook** — evaluate strengths, weaknesses, and fit for the post.
6. **Recommend the best option** with reasoning.

## Output format

Present the hooks as a structured, numbered list. Use the post's language.

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOOK OPTIONS FOR: [Post title / topic summary]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1 | Contradiction
   "[Line 1]
    [Line 2]"
   → Review: [1-2 sentences: what works, what doesn't, fit for this post]
────────────────────────────────────────

2 | Specific number + unexpected context
   "[Line 1]
    [Line 2]"
   → Review: [1-2 sentences]
────────────────────────────────────────

3 | Direct accusation
   ...

[...continue for all 10...]

────────────────────────────────────────

RECOMMENDATION
[Which hook to choose and why. Reference the post's core message,
target audience, and tone. Suggest combining elements if useful.]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Style guardrails

Keep hooks consistent with the author's voice (see AGENTS.md):

- **Tone**: Professional but approachable, no hype, no clickbait circus.
- **Audience**: Mixed — technical folks, marketing people, team leads, decision-makers interested in GenAI.
- **Brand**: Realistic, experience-based, grounded. Not sensational or controversial for its own sake.
- The hook can be bold, but the post must deliver on the promise. Don't write checks the post can't cash.
- Lean toward hooks that create genuine curiosity, not cheap provocation.
