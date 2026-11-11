# Duo Logo

A study app for getting up to speed on Australian intellectual property law **before starting a job in IP**: the rules, the leading cases, how the system actually works, and the mistakes people make in practice. Fun to use, but with real depth, ending with a chapter on IP in practice. It's built for quick, practical learning, not exam technique.

Status: **a working build of Design B, The Lab**, with the four Foundations lessons and the whole Copyright (17 units), Trade marks (11 units) and Passing off & ACL (4 units) chapters written. A static PWA built the DuoVino way (no build step, vanilla JS, progress in localStorage, offline service worker).

## What's in this build

- **Where to start:** element **1**, highlighted in green at the top of the Table. On first launch a welcome explains the route. Lessons unlock **one at a time, in element-number order**: the four Foundations lessons first (how IP is regulated, the rights, the Constitution and courts, the history and treaties), then **down each column**, starting with Copyright (elements 5–21). Locked elements are faded with a 🔒; tapping one tells you what to finish first. **Notebook → Units** lists every unit by chapter with ✓ done, ▶ next up and 🔒 locked.
- **The Table (home):** the whole syllabus as a periodic table. Columns are the rights (copyright, trade marks, passing off & ACL, patents, designs, confidential information); rows are the Five Sticks (What? · How? · Whose & how long? · Breach · Escape). Foundations sit above; culture, specialist rights and enforcement sit below like the lanthanides; IP in practice is the Field work block. Each of the 81 units is an element. Tiles are **undiscovered** (dashed "?"), **ready** (dashed in the group colour), **discovered** (filled, with a memory bar), **decaying** (desaturated and glowing) or **stable** (thick border). Tap a tile to see every element in that cell. The headline number is **course retention**: the average estimated recall across everything you've learned.
- **36 units written: 62 lessons, 291 cards, 303 questions.** Foundations 0.1 *Why have IP at all?*, 0.2 *The map of rights*, 0.3 *Constitution, institutions and courts*, 0.4 *The international framework*; and the whole of Copyright, 1.1–1.17: what it protects, who owns it and for how long, the rights and how they're infringed (directly, by authorising, by importing and selling, by breaking digital locks), fair dealing and the other exceptions, moral rights, and where copyright meets designs and AI; and Trade marks 2.1–2.11, from what a trade mark is through filing, distinctiveness, comparing marks, oppositions, non-use, infringement and defences to certification marks and geographical indications; and Passing off & the ACL 3.1–3.4: reputation, misrepresentation and damage, misleading or deceptive conduct, and celebrity endorsement (1.1 opens with *Copyright at a glance*, the chapter introduction). Each was checked against the Constitution, the current Acts and regulations, and Wikijuris; see `VERIFICATION.md`.
- **Copyright 1.5 · Originality, in full:** both lessons from [`SAMPLE-UNIT.md`](SAMPLE-UNIT.md), 15 cards and 16 questions. Cards sit on graph paper as numbered figures with their section or citation in the margin, a **Go deeper** layer, and a **Source** line. Case cards for *IceTV* and *Phone Directories* are written up as experiments (hypothesis · method · result · discussion · replication); the statute card is a specimen with numbered elements; the test card is a flowchart; traps carry the hazard label. Question formats: multiple choice, true/false, citation network (match), order, Spectroscopy and essay plan (sort), and Similarity index (slider).
- **Two Reactions:** passing off, and direct infringement of copyright. Tap reactants into the equation; contaminants (intention to deceive, a registered mark, evidence of actual confusion; intention to infringe, registration, copying the idea) are flagged with the reason. A missing reactant makes the reaction fizzle.
- **Half-life:** real spaced repetition. Recall decays as p = 2^(−elapsed ÷ half-life); an element is due once p falls to 50%. Half-lives step 1 → 3 → 7 → 16 → 35 → 90 days with each successful review and step back one on a miss. The screen draws each element's forgetting curve over the last 14 days and lists what's below threshold. **Stabilise** reviews everything decaying (three questions per element, pass at two of three) and then re-runs any due reactions.
- **Notebook:** four sub-tabs. **Notes**: each finished unit adds a one-paragraph summary you can come back to at work. **Units**: every chapter and unit with its status. **Reactions**: the balance-the-equation exercises. **Settings**: how the course works, sound, backup export/import and reset.
- **Sound:** synthesised with Web Audio (no audio files, so it works offline), in its own palette of lab electronics and liquids, distinct from DuoVino's glass and wood: relay clicks for buttons, a toggle switch for tabs, graph paper sliding for card turns, a pipette drop when a piece goes into place, an FM "result ready" chime for a right answer and a detuned buzzer for a wrong one, effervescence when a contaminant goes in, bubbling and a soft electric chord when a reaction balances (or a deflating tone when it fizzles), a rising sweep and bell chord when you discover an element, a radar ping with echoes when you stabilise one, and a faint Geiger crackle when Half-life opens with something decaying. Turn it off in **Notebook → Settings → Sound**.

The other 45 units are in the table but not written yet; they're skipped in the order until they are. ⚑ in the app marks content not yet confirmed against a primary source.

## Run it

No build step. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

- `?demo` starts with a lived-in lab: Originality learned two days ago (now decaying) and the passing-off reaction learned four days ago.
- `?shift=3` pretends it's 3 days later, so you can watch elements decay without waiting.

## Put it on your phone (GitHub Pages)

Same as DuoVino: **Settings → Pages → Deploy from a branch → `main` / `(root)`**, then open `https://ellalwoods.github.io/DuoLogo/` in Safari and **Share → Add to Home Screen**.

## Your progress

Progress is stored only in the browser on that device. Use **Notebook → Settings → Export backup** now and then, and **Import backup** to restore it on a new phone.

## Files

| File | What it is |
|---|---|
| `index.html` | Shell |
| `styles.css` | The Lab's visual language (lab white, graph grid, group colours, IBM Plex) |
| `course.js` | The periodic table: groups, sticks, and all 81 units as elements |
| `unit-foundations.js` | Foundations 0.1–0.4: the introductory lessons |
| `unit-literary.js`, `unit-dma.js`, `unit-part-iv.js`, `unit-ideas.js`, `unit-originality.js`, `unit-authorship.js`, `unit-ownership.js`, `unit-dealings.js`, `unit-duration.js`, `unit-rights.js`, `unit-substantial-part.js`, `unit-authorisation.js`, `unit-secondary.js`, `unit-fair-dealing.js`, `unit-exceptions.js`, `unit-moral-rights.js`, `unit-design-ai.js` | Copyright 1.1–1.17 (1.5 transcribed from the checked `SAMPLE-UNIT.md`) |
| `unit-tm-basics.js`, `unit-tm-registration.js`, `unit-tm-infringement.js` | Trade marks 2.1–2.3, 2.4–2.6 and 2.7–2.11 |
| `unit-passing-off.js` | Passing off & the ACL 3.1–3.4 |
| `reactions.js` | Reaction questions (passing off; copyright infringement) |
| `app.js` | Screens, lesson player, question formats, half-life spaced repetition, sound, backup |
| `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-*.png` | Offline support and home-screen install (the PNGs are for iPhone and Android, which don't use SVG icons) |

To write a unit, add `D.units['<element id>']` with `lessons` (each with `cards` and `questions`) and an `outline`, in a new data file loaded from `index.html` and listed in `sw.js`. Card kinds: `rule`, `statute`, `case` (optional `exp` for the experiment layout), `test` (`steps`), `trap`, `example`, `compare` (`table`), `critique`. Question types: `choice`, `tf`, `match`, `order`, `sort`, `similarity`. Every card needs a `source`; set `flag: true` on anything unverified.

## Docs

| File | What it is |
|---|---|
| [`SYLLABUS.md`](SYLLABUS.md) | The full course: 10 chapters, 81 units, ~175 lessons, plus sources |
| [`SAMPLE-UNIT.md`](SAMPLE-UNIT.md) | One unit (Copyright: Originality) written at full depth, with a source for each card |
| [`VERIFICATION.md`](VERIFICATION.md) | What was checked against which primary source, what changed, and what's still unverified (and why) |
| [`DESIGN-B-LAB.md`](DESIGN-B-LAB.md) | **Chosen design:** The Lab, a periodic table of Australian IP |
| [`CONCEPT.md`](CONCEPT.md) | Alternative design A: The Bower (not being built) |
| [`design/`](design/) | Concept screen mock-ups for both designs |

Legal content was checked on 11 November 2026 against the current Acts on legislation.gov.au, Wikijuris (CC BY-SA 3.0) and EUR-Lex. The judgments themselves couldn't be opened from the build environment, so case details rely on the extracts Wikijuris quotes; see `VERIFICATION.md`. Study aid, not legal advice.
