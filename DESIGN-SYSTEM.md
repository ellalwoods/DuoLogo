# Duo Logo: design system (for briefing another assistant)

Duo Logo is a static, offline-capable web app (vanilla HTML, CSS and JavaScript, no build step) that teaches Australian intellectual property law before a job in IP. It is the sister app to DuoVino and shares its architecture, but its visual world is **a modern lab notebook**: a periodic table of IP as the home screen, lessons written up like scientific papers, and spaced repetition modelled on half-lives.

The tone is for quick, practical learning before starting work. It is **not exam-focused**. Avoid essay, exam or "problem question" wording in any new content. Practical "Watch out" and "Debate" cards are the norm.

---

## 1. The organising idea

Three scientific ideas carry the app:

| Science | In the app |
|---|---|
| **Periodic table** | The syllabus. Every unit is an element, placed by right (column) and by stage (row) |
| **Reactions** | Causes of action. Elements combine into liability; defences act as inhibitors |
| **Half-life / forgetting curve** | Spaced repetition. Recall decays as 2^(−elapsed ÷ half-life); review resets it |

## 2. The Table (home screen)

- **Columns are the rights:** Copyright (cobalt), Trade marks (amber), Passing off & ACL (coral), Patents (emerald), Designs (violet), Confidential information (slate).
- **Rows are the "Five Sticks":** 1 What? · 2 How? · 3 Whose & how long? · 4 Breach · 5 Escape.
- **Foundations** (0.1–0.4) sit in a row above the table and are the start.
- **Culture, specialist rights and enforcement** sit below, in a block like the lanthanides.
- **Field work · IP in practice** is the last block.
- Units unlock **strictly one at a time in element-number order** (course order). Unwritten units are skipped. A locked element is faded with a 🔒, and tapping it says what to finish first.
- A **course retention %** headline shows average estimated recall.
- Tile states: **undiscovered** (dashed "?"), **ready/next** (dashed in group colour, outlined), **discovered** (filled, with a memory bar), **decaying** (desaturated, glowing), **stable** (thick inner border).
- Tapping a cell opens a sheet listing every element in that cell.

Each tile shows the atomic number (course order), the key section (for example "s 41"), the symbol (two letters, for example Dt for Distinctiveness), the name, and a memory bar with the current half-life.

## 3. Navigation

Three destinations, shown as bottom tabs on a phone and as a left sidebar on a desktop browser (above 900px wide):
- **Table** (home): periodic table plus the Start / Continue button.
- **Notebook**: four sub-tabs. **Notes** (a one-paragraph summary of each finished unit), **Units** (chapters with ✓ done / ▶ next up / 🔒 locked), **Reactions**, **Settings** (account, share, how the course works, sound, backup export/import, reset).
- **Half-life**: the decay chart and the "Stable for now" or "due" list, with a **Stabilise** button.

## 4. Lessons: the lab notebook

A lesson is a **lab notebook entry**: a set of numbered cards on graph paper ("FIG. 4 · RULE"), then a set of tests. Each card has a kind, a margin label, a source line and sometimes a "Go deeper" expander.

Card kinds (the label is shown on the card):

| Kind (internal) | Label on screen | What it looks like |
|---|---|---|
| `guide` | How it works | Plain explanation, chapter introductions |
| `rule` | Rule | A textbook definition: bold term, precise statement, section in margin |
| `statute` | Statute | The provision's text as an annotated specimen. Elements are circled and numbered ①②③ with notes beside them |
| `case` | Case | An experiment write-up: hypothesis, method, result, discussion, replication. Results show ✓ or ✗ |
| `test` | Test | A flowchart (numbered steps with arrows) |
| `trap` | **Watch out** | A hazard-style card, with a yellow hazard triangle, for practical traps |
| `example` | Worked example | A scenario worked through |
| `compare` | Compare | A table comparing two or more things |
| `critique` | **Debate** | Arguments for and against, with reform reports as citations |

**Margin labels** are short tags in the top-right of a card (for example "s 36(1A) CA", "IN PRACTICE", "POLICY", "⚑"). Use **IN PRACTICE** for practical traps and **POLICY** for debates.

**Source line:** every card ends with a "SOURCE" line naming the Act, section, case citation and compilation number. Cases use the neutral citation, for example [2009] HCA 14 or (1982) 149 CLR 191.

**⚑ (flag):** anything not yet confirmed against a primary source (for example a case known only from secondary reports). Flags are shown in red and are a deliberate honesty signal; do not remove them without checking.

Lesson letters and "tests" are shown as "Lesson A tests · 1 / 3". Questions run after the cards.

## 5. Question formats

Each one has a name and a visual skin.

| Format | Label on screen | What you do |
|---|---|---|
| `choice` | Multiple choice | Pick one option |
| `tf` | True or false | Two large buttons |
| `match` | **Citation network** | Tap a left item, then its right partner |
| `order` | Put in order | Tap items in the right sequence |
| `sort` | **Spectroscopy** ("Sort it") | Move each item into a bucket |
| `similarity` | **Similarity index** | A 0–100 slider, then "Take the reading" against a gauge |

**Reactions** are the signature game (on the Reactions tab and in Half-life): tap reactants into an equation. A missing reactant makes the arrow fizzle. A contaminant (a wrong element) is flagged with the reason. A balanced equation shows the product.

## 6. Review: Half-life

- Half-lives step **1 → 3 → 7 → 16 → 35 → 90 days** with each correct review, and step back one on a miss.
- An element is **due** when recall falls to 50%.
- The Half-life screen draws each element's forgetting curve over the last 14 days, with a dashed "recall threshold" line and today marked.
- **Stabilise** reviews everything decaying: three questions per element, pass at two of three. It then re-runs any due reactions.

## 7. Colour

- **Ink** `#111418` on **lab white** `#FAFBFA`, with a pale **graph grid** `#E3EDF0` (the background is a 12px grid drawn in CSS).
- **Lines** `#cfd9dc`. **Muted text** `#5b6670`.
- **Group colours** (one per right, like element families): Copyright `#2F6FDB` (cobalt); Trade marks `#E08A1E` (amber); Passing off & ACL `#E0614A` (coral); Patents `#1E9E6A` (emerald); Designs `#8A5CD6` (violet); Confidential information `#4F6A7A` (slate); Foundations and enforcement `#7A8088` (graphite).
- **Signal highlighter** `#D9F25C`: the one thing to focus on right now (the next step, today's element, a "Watch out" border).
- **Good** `#17804f` on `#e3f5ea`. **Bad** `#b53b26` on `#fde6e1`.
- Decay is shown by **desaturation** and a glow. Knowledge you're losing greys out.

## 8. Type

- **IBM Plex Sans** for body text and headings (weights 400–700).
- **IBM Plex Mono** for symbols, eyebrows, section labels (uppercase, letter-spaced), citations, numbers and the chrome of the app.
- Numbers use tabular figures.
- Element symbols are bold and set in mono, as on a periodic table.
- Small uppercase mono labels (about 9–11px, letter-spacing 1–1.5px) mark sections: "FIG. 4 · RULE", "LESSON A · …", "SOURCE".

## 9. Shape, layout and motion

- Corner radii are small: 3–8px for tiles and cards, 14px for bottom sheets.
- Hairline 1px borders in `--line`. No drop shadows except the modal and glow effects.
- Element tiles are squares with a 2–3px radius. Tiles and the table use a 6-column grid on phones and a wider grid on desktop.
- The app is one centred column, max 520px on a phone. On a desktop (wider than 900px) it is a left sidebar with a column of up to 880px, and lessons read in a 760px column.
- Sheets (modals) slide up on a phone and open as centred dialogs on a desktop.
- Motion is short and purposeful: a discovered element **drops into its slot** with a flash; reactants slide together; a result arrow fills; tiles fade slowly as memory decays.

## 10. Sound

Sound is synthesised with the Web Audio API (no audio files, works offline), with its own lab palette (relay clicks, a toggle switch, graph paper sliding, a pipette drop, an FM "correct" chime, a buzzer for wrong, fizz and fizzle for Reactions, a radar ping when an element is stabilised, a faint Geiger crackle when Half-life opens with something decaying). It's distinct from DuoVino's glass-and-wood palette. Turn it on or off in Notebook → Settings.

## 11. Voice and tone

- Clear, exact and curious. Like a precise, friendly lecturer with dry humour.
- Lead with what matters in practice. Say what to check, what the trap is, and how a client might get caught.
- Use the active "you" for the learner.
- Avoid exam language ("in the exam", "essay plan", "problem question"). Use "matter", "client", "on the job".
- Be honest about uncertainty: use ⚑ and say where something came from. Never invent cases, holdings or section numbers.
- Australian spelling: authorisation, licence (noun), organisation, colour.

## 12. Icons and branding

- The **Ip** element tile is the logo: a neon/highlighter-green (`#D9F25C`) square, with "Ip" in the centre, a small "9" (atomic number) top-left and "s 32" top-right, and a dark underline. It sits on graph paper.
- The app icon is `icon.svg` (and PNGs for iPhone and Android). There's no mascot.

## 13. Accessibility and touch

- Tap targets are at least about 44px on a phone.
- Buttons use `aria-label` where there's only an icon. Sheets have `role="dialog"`.
- The Notebook sub-tabs use `role="tablist"` and `aria-selected`.
- Colour is never the only signal: decay also changes the glow, the status words ("next up", "locked", "done") carry meaning, and results say ✓ or ✗ in words.

## 14. Sign-in and progress

- A DuoVino-style login: **name + one of 8 elements + one of 8 cases**. The login isn't stored; the app sends a SHA-256 hash of it to Supabase (the same project as DuoVino, with its own `duologo_` table).
- Progress also lives in the browser, so the app works offline. Backup export and import are in Settings.

## 15. Things to preserve when extending

1. **Keep the grid-paper look** and the group colours. A new right gets a new colour from the same family, not a new style.
2. **Every card has a SOURCE line**, and unverified content gets ⚑.
3. **New units go in course order** in `course.js` (element number), and in `index.html` and `sw.js` (bump the cache name each release).
4. **Practical framing.** Use "Watch out" (trap) and "Debate" (critique) kinds, not exam framing.
5. **Test every change at phone size (about 390px) and desktop (1280px).**

## 16. Where things are

| File | Holds |
|---|---|
| `styles.css` | All colours, type, tiles, cards, sheets and the desktop layout (in a `@media (min-width: 900px)` block at the end) |
| `app.js` | Screens, lesson player, question formats, half-life maths, sound, backup, sign-in |
| `course.js` | The periodic table: groups, sticks, every element with its position |
| `unit-*.js` | Lesson content, one file per chapter, in the shape `D.units['u1-5'] = { lessons: [...], outline, treasures }` |
| `reactions.js` | The Reaction equations |
| `DESIGN-B-LAB.md` | The original design concept (the reasoning behind the table and the lab metaphor) |
