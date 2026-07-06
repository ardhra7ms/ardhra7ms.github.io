---
title: "Contextual Guidance Tool — measuring if content guides the user"
category: "code"
date: "2026-02"
featured: true
draft: true
---

> **Draft for your review — not yet approved to publish.** Sanitized: method and craft only.

*Microsoft · Self-initiated tool · in progress, owned end-to-end.*

## The problem
Teams had good instincts about content quality, but no shared *language* and no *measure*.
"This feels off" can't be debated, tracked, or scaled. Standard readability checkers grade
sentences — they don't ask the real question: **is this guiding the user right now?**

## The framework
I built a scoring model on **Cognitive Load Theory** (Sweller). Every string is read on three
axes:

- **Intent** — is it clear what this is for?
- **Clarity** — can the user understand it without effort?
- **Guidance** — does it move the user forward at this moment?

Each is scored, rolled into a 0–100 baseline a team can actually align on.

## Evaluation rigor
Some checks are rule-based (length, reading grade, passive voice, jargon). The harder ones
need judgment — *is this error message actually helping? is this consent meaningful?* That
judgment layer is an **LLM-as-a-Judge**: a rubric-anchored evaluator that reasons before it
scores and returns structured output, so results are consistent, explained, and repeatable.

To keep the judge honest, the plan applies systematic-evaluation practice: a hand-scored
**golden set**, an agreement metric against expert scoring, bias guards (order-swapping for
position bias), and a **human-in-the-loop** so reviewer overrides feed back as new examples.
Once the judge is trustworthy, it can audit *thousands* of strings a human never could —
evaluation at scale.

## Why it matters
It encodes my core belief in working form: the value isn't generating words, it's the judgment
about whether the words guide the person in front of you. This is the project where my content
practice meets prompt design, guardrails, and measurable evaluation.

*Active build. Method is shareable; specifics will follow as it matures.*
