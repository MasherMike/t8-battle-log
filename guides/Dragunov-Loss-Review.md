# Dragunov loss review (ranked, Victor)

Built 19 Nov 2026 from your repo's battle log (`data/battles.jsonl`, last ranked game 15 Nov), your coach notes in `reviews/coach/`, your two filled-in Dragunov replay worksheets on Drive (24 Oct and 8 Nov sets), and your Anti-Dragunov guide (`guides/Anti-Dragunov.html`). Frame data checked on Wavu Wiki on 19 Nov.

**Short version:** you win game one against Dragunov as often as anyone (9–9 lifetime). Then he changes his plan and you don't. After a game-one win you go 3–11 against him, against 61% after a game-one win across all your Victor sets. The rounds in those games are lost to three habits, and your guide already has the answer to two of them. It just hasn't been drilled into a real set yet.

## The numbers, rechecked

| | Earlier note | Rechecked |
|---|---|---|
| Ranked vs Dragunov, 60 days (16 Sep–15 Nov) | 6–10 | **6–10 as Victor** (correct). 7–12 counting King (1–2). |
| Last 45 days, Victor | | **4–4** |
| Lifetime, Victor | 14–24 (coach note, 24 Oct) | **15–26** (adds the 8 Nov set) |
| Expected wins, 60 days (Elo, 400 scale) | | **7.3 expected, 6 actual** |
| Expected wins, lifetime | | **21.5 expected, 15 actual** |

The 6–10 is right, but it's mostly about who you played. Four of the ten losses were on 29 Sep against two Dragunovs rated +177 and +369 above you. Strip those out and the 60-day record is 6–6. The lifetime gap (6.5 wins under expectation over 41 games) is the real signal, and it comes from games two and three.

## Every Dragunov set, 60 days (times Eastern)

| Date | Character | Games | His rating vs yours |
|---|---|---|---|
| Sat 19 Sep, 10:08 AM | Victor | L 0–3, L 2–3 | −26 |
| Sun 20 Sep, 7:26 AM | Victor | W 3–2, W 3–2 | +127 |
| Sat 26 Sep, 4:03 PM | King | W 3–1, L 2–3, L 2–3 | −122 |
| Tue 29 Sep, 12:07 AM | Victor | L 0–3, L 1–3 | +369 |
| Tue 29 Sep, 12:36 AM | Victor | L 0–3, L 2–3 | +177 |
| Wed 21 Oct, 10:49 PM | Victor | W 3–1, W 3–1 | −323 |
| Sat 24 Oct, 8:08 PM | Victor | W 3–2, L 2–3, L 1–3 | −28 |
| Sun 8 Nov, 10:18 PM | Victor | W 3–0, L 2–3, L 0–3 | +11 |

## By game in set

| | Game one | After game one | After a game-one **win** |
|---|---|---|---|
| Dragunov, 60 days (Victor) | 4–3 | 2–7 | 2–4 |
| Dragunov, lifetime (Victor, 18 sets) | 9–9 (50%) | 6–17 (26%) | **3–11 (21%)** |
| Dragunov, lifetime, even sets (within 100) | 6–5 | | **1–9** |
| All opponents, lifetime (Victor) | 55% | 54% | **61%** |
| All opponents, 60 days (Victor) | 52% | 52% | 55% |

This is the opposite of Reina. Against Reina you lose game one and then adjust. Against Dragunov you win game one and then he adjusts. Lifetime, five of your Dragunov sets went W, L, L (21 Mar, 24 Jun, 16 Aug, 24 Oct, 8 Nov). Your coach notes called the last two "they adapted; you kept the same plan".

## What he changed, from your own worksheets

- **24 Oct:** after losing game one he switched to keep-out: backed off, poked with df+4, let you commit, then punished with Heat Smash and launches. Ledger's summary on your sheet: "every round I fell behind in, I stayed behind (won 1 of 7)".
- **8 Nov:** he changed his round openings. You hit first in all three rounds of game one, and he hit first in all five rounds of game two.

Two sets is a small sample, so "he switches to keep-out" is a theory. "He switches something, and you keep playing game one" is what both sheets show.

## The three habits costing you rounds

### 1. Blocking his mid, then standing for the high ender (no ws1)

Evidence: your 24 Oct "let it go" tally was 5, all on df+1,4 and b+4,3. On 8 Nov you wrote "a handful of times I blocked a b4 but didn't duck the 3", and your takeaway was "get more consistent with dealing with drag's mid > high strings: df1,4 · b4,3 · 3,1". In 8 Nov G2 R5, pressing into df+1,4 got you counter-hit launched by the ,4.

Wavu (checked 19 Nov):
- df+1,4: mid, high. −7 on block. The ,4 can be delayed up to 12 frames. +58a on counter hit.
- b+4,3: mid, high. −9. Jails attack inputs, but movement is bufferable, so hold down early. Only a 1-frame delay window. Duckable.
- 3,1: mid, high. −2. You can interrupt with i3 from the first block.
- Your answer, Victor ws1: mid, i15~16, 20 dmg, +53a on hit (Wavu Victor_punishers lists it at −15 crouching).

Your guide already says "block the mid, duck the high ender, ws1" for both (added 25 Oct). The 8 Nov set shows the knowledge isn't automatic yet.

**Drill (10 min, before ranked):** Dragunov dummy, record a random mix of df+1,4 (normal and delayed ,4), b+4,3 and b+4,2. Block the first hit, hold down, ws1 whenever the high whiffs. b+4,2 is the honest risk: it's mid, mid (+4 on hit), so ducking it costs you a small hit, not a launch. **Pass mark:** 8 of 10 ducked and ws1 landed, two sessions running (same mark your 24 Oct sheet set).

### 2. Forcing a committal option when the round swings

Evidence: 24 Oct, Ledger's tally on your sheet: 5 rounds lost forcing a turn while behind or cornered (qcf+2, uf+1,1~D > IAI, ws2, b+2 on wake-up), all blocked or launched. 8 Nov: G2 R2 a second d+4 got caught by his wr2 for a counter-hit launch; G3 R1 a whiffed FC.d+4 at +55 lead turned into his ~76-damage punish; G3 R2 a b1+2 got whiff-punished by df+2; G3 R3 at +64 lead with him at ~9% health, IAI.d+1+2 got blocked low and launched. Your sheet counted "leads of 40+ lost 2 of 4, both started with a committal press". Your own rule says 5 cases make a habit; this is 2 lead losses plus 6 behind-and-forcing rounds, so the lead-loss half is still a theory.

Wavu (checked 19 Nov):
- IAI.d+1: mid, i18, 25 dmg, ±0 on block, +24a on hit, Heat Engager. This is the safe kill option your 8 Nov worksheet left blank.
- IAI.d+1+2: not readable on Wavu's Victor movelist in this check. The −29 on your 8 Nov sheet came from an earlier note and is **not** re-confirmed.
- d+4: low, i16, −13 on block.
- 1,2: high, high, i10, −3 on block (your fastest check).

**Drill (5 min):** close-out reps. In practice, get to IAI (wr1+2 > IAI, the sequence from 8 Nov G3 R3) and finish with IAI.d+1 every time against a dummy set to random guard. **Pass mark:** 20 in a row without choosing the low. Then the ranked rule: when he's under ~25% health, kill with a mid.

**Between-games rule (no drill):** before game two, say out loud the one thing he did most in game one, and expect it to stop. That's the adaptation check your worksheet already asks, done before the game instead of in the replay.

### 3. Stepping off the wall into his wall pressure

Evidence: 24 Oct, Ledger's tally: 3 rounds (G1 R2, G1 R3, G3 R4) where stepping off the wall got clipped by b+4,3 or f+3,1+2 into a wall splat. 8 Nov G2 R4: at the wall after his f+3 > SNK.2 oki, you tried to stand and step right, and ate wr2 to lose the round. G2 R5: at the wall again, you froze and lost to the tackle mix-up.

Wavu (checked 19 Nov):
- f+3,1+2: mid, mid. −3. Spike, Heat Engager. Interrupt with i10 from the first block. TekkenDocs says not to step it.
- f+3,3: mid, mid. −10 (Wavu counterplay page). Your guide says this one catches every escape: block it.
- b+4,3: see habit 1; jails attacks.

Your guide's wall rule ("block it out first, then move") was added 25 Oct. The 8 Nov set broke it once.

**Drill (5 min):** dummy at your back wall, record random f+3,1+2 / f+3,3 / b+4,3. Hold block, no stepping; duck the ,3 of b+4,3. After blocking f+3, try 1,2 (i10) to interrupt the 1+2. **Pass mark:** zero wall splats in 10 reps. Whether 1,2 also beats his Sneak cancel off f+3 is a lab test, not confirmed.

## Ruled out

- **Skill gap:** game one is 9–9 lifetime and you've beaten Dragunovs rated +127 above you (20 Sep).
- **Rating mismatch as the whole story:** it explains the 29 Sep losses, not the 1–9 after a game-one win against even Dragunovs.
- **The guide being wrong:** the duck-and-ws1 answers and the wall rule are in it and check out on Wavu.

## Why the record "hasn't moved"

It hasn't had the chance. Since the 25 Oct guide notes you've played one ranked Dragunov set (8 Nov). Since the 14 Nov drill notes you've played none; your last ranked game of any kind was 15 Nov.

## Changes to the Anti-Dragunov guide (made 19 Nov, on your yes)

1. Add a Practice priorities line at the top: "You win game one (9–9). After a game-one win you're 3–11. Expect him to change his plan in game two."
2. Add IAI.d+1 (mid, ±0, 25 dmg) as the close-out option, with the 8 Nov G3 R3 note.
3. Add 3,1 to the duck-then-ws1 list beside df+1,4 and b+4,3, and the 8 Nov wall case (f+3 > SNK.2 oki) to the wall rule.

## Sources

- Battle log: `data/battles.jsonl` in your Tekken repo (HEAD 19 Nov), ranked only, 4 duplicate rows removed. Sets = same characters, under 10 minutes apart, opponent rating within 40 of the game before. Expected wins use the Elo formula on a 400 scale; Tekken's own rating math may differ.
- Replay worksheets on Drive: "Replay-Review-Worksheet_ Dragunov" (24 Oct set) and "Replay-Review-v3_Dragunov_2026-11-08" (8 Nov set), including Ledger's filled-in summaries.
- Coach notes 21 Oct, 24 Oct, 8 Nov in `reviews/coach/`.
- Wavu Wiki: Dragunov_movelist, Dragunov_counterplay (last edited 1 Oct 2025), Victor_movelist, Victor_punishers (last edited 3 Mar 2025). Part of each movelist page was read through a summary; every number quoted above came from a row read directly, except df+1,4 and d+4, which came from the summary and match your guide.
