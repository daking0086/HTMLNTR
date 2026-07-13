# HTMLNTR

A browser-based version of ThePhoneGame.

**Same story. Same characters. No phone simulation.**

This is a clean, self-contained HTML5 visual novel adaptation of the original Ren'Py project. The complex mobile phone UI system has been removed and replaced with a traditional visual novel interface.

## How to Play

Simply click the **Play Now** button below to launch the game directly in your browser.

No installation required.

## Story Summary

You are Richard Hayes, a powerful man whose wife Ayesha is stranded in a foreign city after an incident at the airport.

Through a series of messages and choices, you will guide (or fail to guide) her through a dangerous night that will test both her trust in you and her limits.

Your decisions affect two hidden meters:
- **Affection** — How much she still loves and respects you
- **Corruption** — How much darker impulses take hold

## Characters

- **Richard Hayes** (You) — The player
- **Ayesha Khan** — Your wife

## Features

- Clean modern dark interface
- Visible Affection and Corruption stats
- Branching choices with stat consequences
- Faithful recreation of the original story beats
- Uses the original Ayesha CGs and profile images

## Project Structure

```
HTMLNTR/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   ├── js/
│   │   └── game.js
│   └── images/
│       └── ayesha/
│           ├── ayesha_profile.png
│           ├── ayesha_cg_shower.jpg
│           └── ayesha_cg_window.jpg
```

## Differences from Original

- No phone UI, no dynamic chat bubbles, no skip button
- Traditional visual novel presentation
- All story and choices happen in a standard VN format
- Much lighter and easier to modify

## Environment

Ready to play? Launch the HTMLNTR Game directly in your browser:

[![Play HTMLNTR Game](https://img.shields.io/badge/Play%20Now-Launch%20Game-blue?style=for-the-badge)](https://daking0086.github.io/HTMLNTR/)

Click the button above to start your adventure. Everything runs directly in your browser with no downloads or installations needed.

## Credits

- Original concept & story: ThePhoneGame (Ren'Py)
- HTML adaptation: Grok (based on user request)
- Character art & CGs: From the original ThePhoneGame project

---

## Prologue — backgrounds to render

Based on the current `src/pages/release1/intro.ts` script, you need **5 unique location backgrounds** for the prologue.

| # | Location | Used for | In project now? | Suggested path |
|---|----------|----------|-----------------|----------------|
| 1 | **Private jet interior** | Landing, Richard backstory (beats 1–7) | No image yet | `public/assets/images/backgrounds/prologue/jetInterior.png` |
| 2 | **Crowded airport terminal** | Stares, backshot, reveal, terminal dialogue | Yes — `airportPeople.png` | `backgrounds/airport/airportPeople.png` |
| 3 | **Hotel suite (flashback)** | Separate page — see [Flashback script](#hotel-suite--flashback--full-script) | Yes — `public/assets/images/flashback/` | `public/assets/images/flashback/` |
| 4 | **Airport outside / exit** | Snap back, checking, waiting, text chain, end | Yes — `airport.png` | `backgrounds/airport/airport.png` |
| 5 | **Airport ladies' toilet** | Toilet peeker mini-scene (7 beats) | No image yet | `public/assets/images/backgrounds/airport/toilet.png` |

**Minimum new renders: 3** (jet, hotel suite, toilet) — you already have 2.

### Optional extras (not required, but stronger visually)

| Extra | Why |
|-------|-----|
| **Ayesha backshot** (terminal) | Dedicated CG for the walk-through-crowd reveal instead of narration-only on crowd BG |
| **Toilet + peeker variant** | Same room, peeping man visible in mirror gap (one art pass with layered sprite later) |

Character sprites (Ayesha portrait, Richard if added) are separate from backgrounds.

---

## Prologue — full script

*Source: `src/pages/release1/intro.ts` · 36 beats · flows into Airport Scene*

### Act 1 — The landing (Richard)

**[Narration]**  
Prologue  
The private jet touched down smoothly on the foreign runway.

**[Narration]**  
Richard Hayes stared out the window, jaw set.

**[Narration]**  
A self-made American millionaire, he had risen from nothing through discipline, sharp deals, and an iron will.

**[Narration]**  
This trip was supposed to be his greatest victory — he was here to steal a massive distribution contract from his biggest competitor.  
The deal was worth tens of millions.

**[Narration]**  
Ayesha Khan had refused to stay behind.

**[Narration]**  
She had found out that Richard's young secretary was originally supposed to accompany him.  
The thought had irritated her to no end.  
She wasn't about to let another woman fly across the world with her husband.

---

### Act 2 — The terminal

**[Narration]** · *Foreign Airport - Terminal*  
In the crowded terminal, heads turned.

**[Narration]**  
Men glanced past Richard Hayes like he was furniture — the millionaire meant nothing here.  
Their eyes did not stay on him for even a second.

**[Narration]**  
Every stare slid lower and settled on the woman at his side — hungry, shameless, openly perverted.  
They looked at her the way men look at something they believe they have a right to consume.

**[Narration]**  
A backshot of a curvy woman in a dark blue hijab and fitted modest clothes walked confidently through the crowd.  
The leering followed her with every step.

**[Narration]**  
The camera slowly revealed her face — Ayesha Khan.

**[Narration]**  
Raised in American luxury, she was proud and arrogant.  
She looked down on most people — especially here.

**[Narration]**  
Ayesha hooked her arm through Richard's and drew herself closer — chin high, spine straight.  
Her face stayed pure arrogance, as if the stares were beneath her notice.  
Only the tight grip on his arm betrayed how much she needed him between her and them.

**Ayesha:**  
"Everyone is staring at me like I'm some kind of exhibit. These low-class people have no shame."

**Richard:**  
"I told you to stay back home, Ayesha. This isn't a vacation."

**Ayesha:**  
"And allowing that hoe secretary to go with you? Not a chance. Besides… I can make your nights here extra special."

---

### Act 3 — Into the flashback

*The line above triggers the **Hotel Suite — Flashback** page (`flashback_title`). Full script in the section below.*

---

### Act 4 — Present again

**[Narration]**  
Present again — the terminal hum, the exit signs, Richard at her side.

**[Narration]**  
Border checks dragged on longer than they should.  
Ayesha slipped away to the ladies' toilet to freshen up before the wait grew worse.

---

### Act 5 — Toilet (short scene)

**[Narration]** · *Airport Toilet*  
The toilet was cramped, fluorescent, and stale.  
She stood at the mirror adjusting her hijab. Her phone lit up.

**Richard (Text):**  
"They pulled me aside for some extra checks. Wait for me outside. Shouldn't take long."

**[Narration]**  
She typed back with one hand, eyes fixed on the screen — annoyed, impatient, completely absorbed.

**[Narration]**  
Behind her, in the gap of the stall door, a shadow shifted.  
A man was peeking — just a sliver of face and filthy grin in the mirror's edge.

**[Narration]**  
Ayesha's eyes snapped up from the phone.

**[Narration]**  
Nothing.  
The gap was empty — only cracked tile and the buzz of a dead fluorescent light.

**[Narration]**  
She told herself she imagined it. Chin lifted, she went back to the screen and kept typing.

**[Narration]**  
She washed her hands, straightened her hijab, and stepped back out to wait near the exit.

---

### Act 6 — The wait (texts)

**[Narration]** · *Outside the Airport - Present*  
Twenty minutes passed. Then thirty.  
The airport grew quieter.  
Another message came in.

**Richard (Text):**  
"Baby, this is taking longer than expected. They're asking a lot of questions. Just stay near the exit. I'll sort this out soon."

**Ayesha (Text):**  
"How much longer? I'm already tired and these people keep staring at me."

**Richard (Text):**  
"I don't know. Just wait for me. Don't go anywhere alone."

**[Narration]**  
Two hours passed.

**Richard (Text):**  
"Something's wrong. They're not letting me go. Stay right there, Ayesha. I'm handling it. Don't move."

**[Narration]**  
Night had settled over the airport. Somewhere inside, they still had her husband.  
Airport Scene.

→ *Continues into **Airport Scene** (`airport_richard_office`)*

---

## Hotel Suite — Flashback — full script

*Source: `src/pages/release1/flashback.ts` · 24 beats · returns to Prologue (`intro_snap_back`)*

### Act 1 — Title & establishing

**[Narration]** · *Hotel Suite - Flashback*  
Flashback — Previous Night (Hotel Suite)

**[Narration]**  
Silk on the marble floor. Everything else in the suite belonged to the heat behind it.

---

### Act 2 — Dominance (wide shots)

**[Narration]**  
She moved above him without hurry — hijab loose, chin lifted, every motion deliberate.  
Richard lay beneath her like a man who had stopped pretending he was in charge.

**Ayesha:**  
"Look at me. Not the room. Me."

---

### Act 3 — POV & control

**[Narration]**  
From the ceiling fan the bed was a blur of limbs and white sheets.  
She had him pinned in place with nothing but her weight and her will.

**Ayesha:**  
"You're mine tonight. Don't forget that."

**[Narration]**  
In the desk mirror: gold light, her grip on his jaw, the arrogant curve of her smile.

**Richard:**  
"Ayesha—"

**Ayesha:**  
"Quiet."

---

### Act 4 — His hunger (building tension)

**[Narration]**  
She let the silence break only on her terms — lifting the edge of her top, offering skin instead of words.  
Richard kissed her hip like a man starved. She watched him worship it.

**[Narration]**  
His mouth climbed higher. Her head fell back, gold hoops catching the city light.  
His fingers threaded into her hair — hungry, clumsy, desperate to keep her close.

**[Narration]**  
Politeness left him. Both hands found her — gripping hard enough to bruise, pulling her down into his lap.  
She did not stop him. She liked feeling how badly he wanted her.

**[Narration]**  
He opened her top and took her breast into his mouth without asking.  
Ayesha exhaled through her teeth — pleased, not surrendered.

---

### Act 5 — Lip tease & jealousy (no kiss yet)

**[Narration]**  
She brought her mouth close enough that he felt her breath — fingers digging in, hips rolling slow.  
He leaned in. She never let their lips meet.

**[Narration]**  
Her lips hovered a breath from his — close enough to ache — then she drew back just enough to watch him want it.  
A teasing smile. Cruel. Satisfied.

**Ayesha:**  
"Two weeks without this… or her in your cabin. You tell me which one you chose."

**Richard:**  
"She's not—"

**Ayesha:**  
"Shhhh...I don't want her name in your mouth tonight."

**Ayesha:**  
"Those people downstairs could never have what I have. I'm the only one who deserves to be here with you."

---

### Act 6 — Darkness & final kiss

**[Narration]**  
Darkness.  
Only breathing.  
Then stillness.

**[Narration]**  
Then, softer — a kiss that was not a weapon anymore.  
Slower. Like a promise she intended to hold him to.

---

### Act 7 — Afterglow

**[Narration]**  
The suite went quiet. She pulled the covers over them both, still possessive even in rest.

**Ayesha:**  
"Don't you dare let her take my place tomorrow...  
You belong to me..."

**[Narration]**  
She believed him. She always did — when it suited her.

→ *Returns to **Prologue** (`intro_snap_back` — present-day airport terminal)*

---

### Flashback CG reference

| Beat | Image file |
|------|------------|
| Title | `grok-image-d6116a17-…jpg` (condo exterior) |
| Establishing | `grok-image-c9b2c7b0-…jpg` (garment on floor) |
| Wide 01 / 02 | `grok-image-4734fc19-…jpg` / `grok-image-31d4d9d4-…jpg` |
| Ceiling POV | `grok-image-58109519-…jpg` |
| Desk / mirror | `grok-image-e72ee7c4-…jpg` |
| Hip kiss | `hip_kiss.jpg` |
| Neck kiss | `neck_kiss.jpg` |
| Ass grab | `ass_grab.jpg` |
| Boob suck | `boob_suck.jpg` |
| Close lips (no kiss) | `close_lips.jpg` |
| Teasing smile | `close_lips_teasing_smile.jpg` |
| Deep kiss (shut him up) | `deep_kiss.jpg` |
| Possessive line | `grok-image-dee3d055-…jpg` |
| Black transition | `grok-image-0fe105b2-…jpg` |
| Final kiss | `final_kiss.jpg` |
| Snuggle / end | `final_kiss_resting.jpg` |

---

Open `index.html` and enjoy the story.
