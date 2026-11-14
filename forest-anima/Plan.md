# Forest Anima: VJ plan

> One VJ, one birch forest, one song, in two lights. The camera drifts slowly through white trunks, in late summer sun or just after sunset, whichever you choose. Somewhere in the forest there's a young woman, but she's never shown. For two or three seconds at a time the forest itself makes her: a few twigs that line up, a gap between trunks, a shaft of light, a breath of mist. Then she's trees again. Most people won't see her. Some will.
>
> **The forest is the subject; she is a rumour.**

**Title:** Forest Anima (short link vj.doslan.com/5)
**Themes:** Golden hour and Blue hour, switchable at any time
**Song:** *The Chemical Brothers, Wide Open* (with Beck), the mp3 in this folder
**File:** `forest-anima/forest-anima.html`, opened from the VJ menu in `index.html`
**Source:** the "Forest Anima" brief, which was written for Blender video loops. This plan keeps its ideas and drops its pipeline (§1).

---

## 1. The idea

Cleopatra builds the gap and shows her once. This one goes further: she's never more than a coincidence of the forest. It's pareidolia, the reflex that finds faces in clouds, but here it finds a figure (and she never has a face).

**Two themes, one walk.** Golden hour and Blue hour are twins: the same song, the same walk, the same forest. Only the light is different, and the light decides what she's made of. Against golden haze, dark twigs and gaps become her; at blue hour, white bark, mist and fireflies do. So her moments come at the same times in both themes, in different forms. At the song's one real silence she's a figure of light in the golden theme and a figure of shadow in the blue one, in the same place. Switching themes crossfades the light, and her with it.

The song fits uncannily well. In its video a dancer slowly turns into an open lattice during one unbroken shot: a woman made of gaps, which is what this forest does with her.

| From the brief | In this VJ |
|---|---|
| A slow, hypnotic camera through a birch forest, no cuts | One unbroken walk. Three moves (forward, sideways, low and looking up) blend into each other where the song changes section (§4) |
| Two light worlds, golden and twilight | One VJ with two themes, **Golden hour** and **Blue hour** (above), chosen on the start screen and switchable at any time |
| Every clip loops seamlessly | The whole VJ loops. The walk ends where it began, the light at the end matches the start, and the song comes back on the beat, in whichever theme is chosen |
| The transition clip (golden to twilight) | Dropped as a clip. Instead the light takes turns, one loop each: it changes in the two bars of forest sounds after the song (~4 s). Switching by hand crossfades over ~4 s too |
| Six ways to hide her | All six, built in real time, plus a seventh for Blue hour: the fireflies (§5) |
| Her rules: outer thirds, never sharp, 2–3 s, fades, she doesn't move, subtle | The same rules, enforced by the director (§5) |
| In about 30% of the material | Her pieces and the false starts are on screen for about a quarter of each loop, but she's readable only 2–3 s at a time |
| "Clean twins", to crossfade her in and out live | The owner panel's **Her** switch (off / rumour / clearer), live, at any time. Off removes only her pieces, so the forest stays exactly the same. The theme switch is the golden/blue twin, live |
| Clip lengths, the shot list | Not needed: the song gives the shape. The shot list becomes the timeline (§6) |
| Review stills, the ±1 s / ±2 s test, a contact sheet | Kept, through the test hooks (§9) |
| Blender, Eevee, HAP, ffmpeg, config.yaml, AI video | Dropped. One HTML file with three.js; the owner panel replaces config.yaml |

It's not a remake of Twilight Lantern Forest: no lanterns, no lyrics, no steps on the beat. Only birches.

## 2. The song (analysed)

- **5:41** of music (the file adds 13 s of silence), **124 BPM** in 4/4, with a four-on-the-floor kick. One bar ≈ 1.94 s, 8 bars ≈ 15.5 s, and the sections are 8 or 16 bars long.
- It's faster than the slow songs I suggested, and that's fine. The camera ignores the tempo, and the beat lives in the leaves, the light and the fireflies (§7). Its shape matters more: a long, steady glide, a bridge where the drums thin out, a long climax, then a breakdown into near silence, and a final drop that stops dead.

| Time | Bars | In the music | |
|---|---|---|---|
| 0:00–0:31 | 0–15 | intro: the groove on its own | steady |
| 0:31–1:02 | 16–31 | verse 1: Beck comes in | steady |
| 1:02–2:35 | 32–79 | the long middle: the voice peaks at the top of each 8-bar phrase (1:02, 1:18, 1:33, 1:49, 2:04, 2:20), with a breath after each; the biggest peak is at 2:20 | a little louder |
| 2:35–3:06 | 80–95 | bridge: the drums thin out, the voice floats | lighter |
| 3:06 | 96 | the full beat comes back | **the drop** |
| 3:06–4:39 | 96–143 | climax: the loudest stretch, with the voice strongest at 3:32–4:10 | loud |
| 4:39–4:54 | 144–151 | breakdown: near silence, quietest at 4:48–4:53 | **near silence** |
| 4:54–5:10 | 152–159 | rebuild: pads and voice, no bass | quiet |
| 5:10–5:41 | 160–175 | final drop | loud |
| 5:41 | 176 | stops dead | silence |

**The loop.** After the dead stop come two bars (~4 s) of forest sounds, and then the song starts again from its first beat, on the grid. One loop is about 5:45.

**How I read it:** the Meadow's analysis (beats, entrances, levels), a section analysis with librosa, and a check of the kick drum against a fixed bar grid. Two corrections go into the director. The analysis guessed **3/4 at 123 BPM**: with a four-on-the-floor kick every beat is equally strong, so its meter test has nothing to go on. In fact the kick sits on a 124 BPM 4/4 grid from the first beat (0:00.4) to the end, within ~25 ms, and the song's big changes fall exactly on bars 96, 144, 160 and 176. The director locks to that grid.

**Where her clearest moment goes:** the breakdown at 4:39–4:54 is the song's one real silence. It comes 82% of the way through, right after the 93-second climax: the longest held breath, just before the end. Both themes put their clearest moment there (§6).

## 3. The forest

**Birches.** Silver birches (*Betula pendula*) in an open grove:
- tall (16–24 m) and slender, a little bent or leaning; bare trunks up to 5–9 m, crowns high;
- white bark with black horizontal lenticels, papery peeling strips and black diamond scars where branches fell; the bottom metre is dark and cracked, as on real birches;
- weeping twigs, and small light-green leaves that let the sun through and quiver in the slightest wind;
- variety: twin trunks from one base, a few dead snags, a fallen birch, stumps, saplings 1–4 m tall.

**Ground.** Long grass (the Meadow's, re-tinted), bracken ferns, a few wildflowers, moss, last year's leaves. Gently rolling.

**Layout.** Trunks 3–5 m apart, scattered naturally and denser in places, with a few small clearings (the gap in §5 needs a bright clearing behind it). A deer path winds through for the forward moves.

**The walk is a loop** of about 250 m. The forest is built in tiles around it from one seed: near trees fully detailed, farther ones simpler, and beyond ~60 m the background paints rows of trunks fading into the haze. When the song ends, the walk is back where it started.

**Time stands still.** Each theme is one moment of the evening, so the end of a loop matches its start. The music moves the light instead of the clock.

### Golden hour
- The sun is low (about 8°) and warm (~3500 K). It rakes through the trunks from the side or from ahead, so the trunks get a gold rim and the leaves glow.
- A light haze: distant trees fade to warm gold, and sunbeams show between the trunks.
- Dappled light on the trunks and grass, shimmering as the leaves move.
- Pollen and dust glinting in the beams.
- With the music: the sun softens behind thin cloud in the bridge and breaks out as the full beat returns at 3:06. At the dead stop a cloud covers it, and it comes out again as the song restarts.
- Feeling: tender, nostalgic, a summer memory.

### Blue hour
- Just after sunset (the sun at about −4°), so there's no direct sun. Cool blue-violet light comes from the sky, and a faint warm glow sits low on the horizon behind the trees, where the sun went down.
- The white trunks glow softly against the dark.
- Dense ground fog, knee-high, drifting, thicker in the hollows; it thickens in the quiet parts and thins in the climax.
- Fireflies: the first ones at 1:33; they fall into step with the beat in the climax and go dark at the dead stop (§6, §7).
- A few faint first stars through the crowns.
- Feeling: liminal, quiet, a little uncanny, but still beautiful. Never scary.

## 4. The camera

- **Forward:** ~1 m/s along the deer path, eye height 1.6 m, level or tilted slightly down.
- **Sideways, the key move:** 0.5–0.8 m/s, looking at right angles to the direction of travel. Near trunks slide past fast and soft, far ones slowly. That parallax is the hypnosis.
- **Low, looking up:** the camera sinks to the grass, tilts up into the crowns and drifts slowly forward. The white trunks converge toward the bright sky.
- **Lens:** 35–50 mm equivalent, focused at 8–15 m, so passing near trunks melt into soft blur. A tall phone screen gets a taller lens, as in Cleopatra.
- **Sway:** under a degree, over ~10 s, so it feels carried, not robotic.
- **No cuts.** The moves blend over 4–8 s where the song changes section: the path bends while the camera turns its head, and forward becomes sideways.
- **The seam** is at 0:00. The walk arrives at its first spot at the end of the two-bar breath, moving exactly as it moves at 0:00. On the first play the prelude leads into the same spot.
- **Speed:** steady, whatever the tempo. A little slower around each of her moments, a little brisker in the climax. Nothing moves on the beat, but the big changes land: the camera rises out of the grass as the full beat comes back at 3:06.
- **Mouse look**, as in Europe and Twilight Lantern Forest: the view glances a little toward wherever the pointer is (up to about 14° across and 7° up or down) and eases there. The owner panel can switch it off. It only turns the view, so the illusions in §5 still line up: they depend on where the camera is, not where it looks.

## 5. Her

**Her outline.** One silhouette, drawn in code: a slim young woman standing still in a long, simple dress, with long hair, seen from the side or three-quarter. Three poses: arms relaxed; one arm slightly raised, as if touching a branch; arms raised (for the crown). Her hair falls over her profile, so the outline never shows a nose or lips. At load it becomes a soft mask that every method below uses. For **Far away** she's a 3D stand-in: Cleopatra's figure, simplified, still and dark, with no scarf.

**The light decides.** Her pieces for both themes stay in the one forest, and the light decides which of them read. Golden backlight shows dark shapes against bright haze (twigs, a gap, a crown). Blue hour shows pale shapes (white bark, mist, fireflies) and one dark shape against the fog. A piece that would read in both lights belongs to one theme only, and fades with it when the theme changes.

**The seven ways** (the brief's numbers in brackets)

| Method | Theme, camera | How |
|---|---|---|
| **Lining up** (6.1, the signature) | Golden, sideways | The camera's position at her moment is known in advance, because it follows the song's timeline. From there, rays go out through her outline, and twigs, a drooping birch branch, a clump of leaves, a sapling and the edge of a trunk are placed along those rays at different depths. For ~2 s they line up into her against the bright haze; before and after, parallax scatters them into ordinary forest. Every piece is a natural part of a tree or the undergrowth (no floating twigs), and the joins are hidden from that one viewpoint |
| **The gap** (6.2) | Golden, sideways | Two or three trunks (one gently bent), a low branch and some leaves leave a gap in her shape, with the low sun and a sunlit clearing behind it, so the gap glows. Built the same way, from the camera's position |
| **The sunbeam** (6.3) | Golden, forward | High in the canopy the director opens a gap in her shape for ~3 s, as if the sun just broke through. A shaft of sunlight with her outline stands in the haze among the trunks, then fades. It reads best when you look along the shaft, so it comes when the walk heads toward the sun |
| **The crown** (6.5) | Golden, low and looking up | Seen from below, one birch's weeping twigs fall like long hair and two branches lift like raised arms, against the bright sky. Built like lining up, from the camera's place under the tree |
| **The bark** (6.5) | Blue, sideways | One birch whose bent shape and black marks suggest a woman in a white dress: the trunk is the dress, and the marks are her long hair and the line of an arm. At blue hour the white trunks glow, so she's quietly the brightest thing on screen, glimpsed for 2–3 s between passing near trunks |
| **The mist** (6.4) | Blue, forward | A patch of ground fog between two trunks gathers into her shape, soft-edged and warped by the fog's own slow drift. It holds for 3–4 s, drifts a little and thins away. The sky lights her from above; the warm glow behind gives her a faint rim |
| **The fireflies** (new) | Blue, low and looking up | Among the crowns, a loose drift of fireflies lines up into her outline for ~2 s, like a constellation, then drifts apart. Easy to put down to chance |
| **Far away** (6.6) | Blue, sideways, once per loop | A dark figure 25–35 m back in the fog, out of focus, partly behind trunks. The fog opens for ~2 s, then closes over her. The one appearance that can't be explained away |

**Why 10–25 m.** The nearer her pieces are, the shorter the moment. Pieces at 3 m, as the brief suggests, would line up for only a fraction of a second. With the nearest at ~10 m, the farthest at ~25 m, and the camera easing to ~0.4 m/s, she holds for about 2 s and falls apart within ~5 s on either side. Stills at −2, −1, 0, +1 and +2 s tune it.

**The rules** (the director enforces them)
- **Never centred.** She stands 9–14° off centre: in the outer third on a wide screen, and still on screen on an upright phone.
- **Never sharp.** The focus sits in front of or behind her, and her pieces lie at several depths anyway.
- **Readable for 2–3 s, fading in and out.** She never pops in.
- **Still.** She doesn't move; the forest does.
- **Subtle.** Everything except Far away can be explained as trees, light or mist.
- **Never on a hit.** She comes in a breath of the music: never on the hooks at the top of each 8-bar phrase, and at least ~4 s from the big changes (3:06, 4:54, 5:10). No jump scares.
- **Varied.** Never the same method twice in a row, at least ~25 s apart, subtler ones first.
- **Looking straight at her** (glancing the mist or the far figure into the centre with the mouse) thins her into fog: Cleopatra's Orpheus rule, quietly.

**How often.** Each theme has 4 moments per loop, at the same times, and 2 false starts: the forest almost makes her and doesn't (two twigs line up but the rest don't, or a mist patch gathers and falls apart). Once you're looking for her, you start seeing her everywhere.

**The Her switch** (owner panel): *off* removes her pieces and nothing else; *rumour* is the default; *clearer* makes her hold longer and stand out more, for a crowd that has been told to look.

## 6. The timeline

The camera is the same in both themes; the light, and what she's made of, are not.

| Time | Music | Camera | Golden hour | Blue hour |
|---|---|---|---|---|
| −0:08 | prelude (first play only) | still, then moving | The grove fades in out of a gold haze: grasshoppers, a far-off cuckoo, wind in the leaves | The grove fades in out of deep blue: crickets, the wind dropping |
| 0:00 | intro | forward, toward the light | Sunbeams between the trunks, pollen. No one | Glowing trunks in knee-high fog, the warm glow far ahead |
| 0:31 | verse 1 | the walk bends and the camera turns its head: sideways, facing the light | Backlit trunks, glowing leaves, parallax. ~0:55: a false start | ~0:55: a false start (a mist patch that falls apart) |
| 1:02 | the long middle | sideways | ~1:24, in the breath after a hook: **lining up**, the subtlest moment | ~1:24: **the bark** |
| 1:33 | | forward, toward the light | ~1:55: **the sunbeam** | The first fireflies. ~1:55: **the mist** |
| 2:04 | the biggest hook (2:20) | sideways, along a sunlit clearing | Light pouring across the clearing | Fireflies over the clearing |
| 2:35 | bridge: the drums thin out | the camera sinks into the grass and looks up, drifting; time slows a little | The sun softens behind thin cloud. ~2:51: **the crown** | ~2:51: **the fireflies** line up into her among the crowns |
| 3:06 | the drop, then the climax | rises with the drop, then forward and sideways | The sun breaks out with the beat. The forest at full glory: the deepest gold, beams, leaves flickering. The loud part belongs to the forest. ~4:12: a false start | Fireflies fall into step with the beat; the fog thins. ~4:12: a false start |
| 4:39 | breakdown: near silence | slows right down, sideways, facing the light | ~4:49: **the gap**, with the low sun shining through it: a figure of light, the clearest golden moment | The fireflies go dark with the music. ~4:49: **far away**, seen through the same gap, now dim: a figure of shadow far back in the fog, the only clear sighting |
| 4:54 | rebuild | moving again | Pollen drifting in the beams | The fireflies come back one by one |
| 5:10 | final drop | forward, back toward the first spot | Full gold | All the fireflies flash together on every bar |
| 5:41 | dead stop, then two bars of forest sounds | arrives at the first spot | A cloud covers the sun; the beams go out | The fireflies go dark |
| 0:00 again | the song restarts on the beat | carries straight on | The sun comes out again | No fireflies until 1:33, as before |

**Fixed, not random.** Her moments land on the same music in every loop, and at the same moments in both themes. So once you've heard the rumour, you can check it on the next loop, or in the other light.

## 7. Sound and the beat

- **Counterpoint:** her moments are in the breaths and the silence; the loud parts belong to the forest.
- **Gentle reactions only, with no pumping and no strobes.** At 124 BPM the camera ignores the tempo, and the beat lives in:
  - birch leaves that quiver with the hi-hats, and the dappled light shimmering with them;
  - a gust through the canopy every 2 bars (every bar would be busy at this tempo), built on Cleopatra's gust fronts: a wave of moving leaves and light crossing the forest;
  - Golden hour: sunbeams that breathe with the music's energy, and pollen that thickens in the climax;
  - Blue hour: fireflies that start out of step and slowly fall into step, flashing on the bar rather than the beat (two flashes a second would be a strobe), all together in the final drop;
  - a walk that speeds up a little in the climax.
- **The dead stop at 5:41:** the sun goes behind a cloud, or the fireflies go dark, with the music, and the two-bar breath holds them there.
- **A hush:** at each of her moments the wind in the leaves drops, and the world's own clock slows a little (Cleopatra's slow motion, used gently) while the song plays on.
- **Ambient bed**, made in code with no extra files, built on Cleopatra's: wind in the leaves, grasshoppers and a far-off cuckoo in the golden theme; crickets and a soft owl in the blue one. It carries the prelude and the breath between loops, and crossfades with the theme.
- **No lyrics on screen.**

## 8. The final image

- Film-like, as in Cleopatra: grain, halation, bloom, a soft vignette.
- A better depth of field than Cleopatra's: when a near trunk passes, its blur spreads softly over the trees behind it instead of stopping at its edge.
- Golden hour: warm and slightly faded, with halation round backlit leaves and a soft flare when the sun slips between trunks.
- Blue hour: cool, with glowing whites, deep blue shadows and a little more grain (it's low light).

## 9. Tech

- **One page:** `forest-anima/forest-anima.html`, with one director and one walk for both themes. Like the other VJs, it uses three.js 0.160 from jsDelivr, works from disk and on the website, and loads `../vj-bridge.js`.
- **The theme switch:**
  - the start screen offers *Golden hour* and *Blue hour*, and the click that picks one starts the VJ;
  - during play, the <kbd>T</kbd> key, or a small sun/moon button that appears when you move the mouse or tap and fades away again, switches themes with a ~4 s crossfade;
  - the owner panel has it too, and `?blue` or `?golden` in the address opens straight into one;
  - each loop the light takes its turn: as the song ends, the other light comes in over the two bars of forest sounds, so the song restarts in it. The owner panel's *Each loop* switch keeps one light instead;
  - your last pick is remembered on that device (the turns each loop aren't).
- **The loop:** the visuals follow the song's own clock. At the end of the two-bar breath the song jumps back to its first beat, so the loop works the same from disk and on the website. There's no end card.
- **From Cleopatra:** the song analysis and its bake tool; the director's building blocks (bars, entrances, loud and quiet sections, gust fronts, camera tracks, the world clock); the sun and sky rig; the grass and flowers (originally the Meadow's); the post chain; the owner panel; the quality manager; test hooks; the sound bed; the prelude; the tall-screen lens; and her figure, for Far away.
- **The analysis gets one fix:** when the bass can't tell 3/4 from 4/4 (a four-on-the-floor kick), it guesses 4. For this song the bars are locked to its big changes (bars 96, 144, 160 and 176 after the first beat).
- **From Twilight Lantern Forest:** the birch builder and bark texture as a starting point, the ferns, the tile streaming, and the mouse look (Europe's too).
- **New:**
  - the birch grove: better birches, about 8 instanced variants plus her unique trees, near and far detail levels, the far band of trunks;
  - leaves that glow when backlit and quiver;
  - one sun shadow map (trunks and leaves) for the dappled light and the beams;
  - the haze with sunbeams (a half-resolution raymarch through the shadow map), including her opening in the canopy;
  - the ground fog and the mist figure;
  - fireflies that fall into step with the bars, and their constellation of her;
  - her outline and mask; the **builder** for lining up, the gap and the crown; the bark trunk;
  - the director: the looped walk and its moves, her moments and their rules, false starts, the light keyed to the music, the seam at 0:00;
  - the two themes and the crossfade between them;
  - the better depth of field.
- **Shader compile time:** loop counts bounded by a uniform, `compileAsync`, and measurements from M1 on (lessons from the Meadow). Both themes run on the same shaders, so switching themes compiles nothing new.
- **Budget:** 60 fps at 1080p on a mid-range laptop (High). On phones (Low): fewer trees and grass blades, no shadow map, cheap painted beams instead of the raymarch, a lower resolution.
- **Reduced motion:** no sway, no flares, a calmer walk.
- **Owner panel** on the <kbd>`</kbd> key: the song; a timeline with her moments marked (the answer key, for you only); the theme; the Her switch; jump to a moment; show her outline over the frame (to check alignment); quality; toggles for depth of field, film look and prelude.
- **Your own song** (drag and drop, as in the Meadow): it's analysed, and the moves and her moments come from its sections; it loops the same way.
- **Test hooks** (`window.__forest`): play at a song time, render any moment at −2/−1/0/+1/+2 s, switch her off and on, set the theme, render the last and first frames of a loop side by side, make a contact sheet of all her moments. Screenshots go through the vj-dev server.
- **Menu:** one new entry at the end of `VJS` in `index.html`: **Forest Anima** (alias `anima`, gold accent, no blurb), with the short link vj.doslan.com/5 (copy `4/` to `5/`). Being last in the list, it becomes the default VJ.

## 10. Build order

| Step | What gets built | Done when |
|---|---|---|
| **M1: Skeleton** | The page, the song analysed (with the 4/4 fix), the director with an on-screen timeline, a grey forest of plain trunks around the looped walk, the three moves and their blends, the loop and its seam, drag to look, her moments shown as an outline over the frame | Every move and moment lands on the music (the 3:06 drop, the 4:39 silence, the dead stop at 5:41), and the loop shows no jump |
| **M2: The golden forest** | Birches, leaves, ground, sky, sun shadows, haze and beams, depth of field, the final image | One golden still looks like late-summer light (the brief's first review) |
| **M3: Blue hour** | The blue theme, ground fog, glowing trunks, fireflies, stars, the theme switch and its crossfade | One blue still that, side by side with the golden one, is clearly the same forest; switching themes mid-play looks smooth |
| **M4: Her** | The outline, the builder, all seven methods | Stills of each at its moment, plus −2/−1/+1/+2 s for lining up and the gap (the brief's second review): readable if you look, easy to miss if you don't |
| **M5: Choreography** | The full timeline in both themes, the rules, false starts, the beat (leaves, gusts, fireflies), the sound bed, prelude and hush | A full loop in each theme gives the feeling (you're the judge) |
| **M6: Polish** | Quality levels, phones, reduced motion, baking for disk, the menu entry and `5/` page, a compile-time check | Smooth on a laptop and a phone, and quick to load |

Each step ends in a playable state, with screenshots for you.

## 11. Risks

| Risk | Plan |
|---|---|
| She's too obvious, or nobody ever sees her | The Her switch and its "clearer" setting; tuning from stills at −2 to +2 s, with you as the judge. Putting the subtle moments first and the clearer ones later helps people find her |
| Her pieces look fake from other angles (floating twigs, odd shapes) | Every piece belongs to a tree or the undergrowth; checked in the ±2 s stills and in a full pass |
| The loop seam shows (the light or the camera jumps) | Time stands still in each theme, and the walk is built to match its own start; the test hooks render the last and first frames side by side |
| Switching themes mid-play looks messy | One crossfade drives the light, the fog, the sound bed and her pieces together; checked in M3, including during her moments |
| A slow camera feels disconnected from a 124 BPM song | The beat lives in leaves, light and fireflies; the big changes still land (the camera rises with the 3:06 drop, the silence at 4:39 gets the clearest moment, the light holds its breath at the dead stop) |
| 5:41 is long for one slow walk | The light changes with the music, the moves change every 16 bars, and the climax gets the richest light |
| A leafy forest is too heavy for phones | Instanced variants, far trees painted into the background, haze; Low quality drops the shadow map and the raymarch |
| The beams render or compile slowly | Half resolution, few steps, loops bounded by a uniform; measured in M2 |
| The forest looks repetitive | About 8 variants with random turn, lean and size, plus twins, snags, saplings and clearings |
| Passing near trunks look harsh (flicker, hard edges) | The new depth of field, MSAA, detail levels that fade into each other |
| Blue hour turns spooky | Keep it beautiful: glowing trunks, the warm horizon, fireflies. She never moves, never comes on a hit, never comes close |

## 12. Built (2026-11-14)

All six steps are in `forest-anima/forest-anima.html`, with the song's analysis baked in (`tools/bake.mjs`), so it also runs from disk. It's in the menu as **Forest Anima** (alias `anima`, short link `/5`, no blurb), and it's the default VJ.

Where the build differs from the plan above, and why:
- **The sunbeam** is a curtain of hanging birch twigs across the sun, carried by two birches. It gathers about 5 s before the moment, opens in her shape for about 3 s, and the beams pass shows the shaft. A bare gap was lost in the sun's own glare.
- **Lining up** happens 9.5 m away, with her pieces at about 7–12 m instead of 10–25 m. The far pieces were washed out by the sunlit haze in front of them. The walk slows to about 0.35 m/s there, so she still holds for about 2 s.
- **The gap**: she stands on a knoll 11 m ahead, so the 6.5° sun sits behind her heart. **Far away** stands 26 m back, on the rise beyond.
- **The crown**: in the bridge the camera drifts at about 0.45 m/s and turns slowly, so she reads for a few seconds, not the whole bridge.
- **Low quality** has no shadow map, painted sun flecks and painted beams.
- **Your own song** works: the default song's form is stretched to its bar count, and it loops the same way.

**Three more moments, with her really there** (added after the first build, at your request). Her figure is Cleopatra's, without the scarf: a pale dress, chestnut hair simulated in the wind, and a shadow in the golden light. The trees and the stump in these moments are all placed from where the camera will be.

At first she stood close, at 8–13 m, and looked too sharp and unreal. Now she stands three to four times farther away, small in the haze, and a patch of soft defocus follows her on screen, so she is never sharp. With the walk-away, the softness stays on the spot for a moment after she has gone, so the stump comes slowly into focus.
- **2:24, the runner** (Golden hour only, about 34 m): a see-through ghost of her runs out from behind one birch, across the sunlit clearing, and disappears behind the next. She runs in slow motion: a jogger's stride at 0.42× speed, about 6 s from tree to tree, with her hair and dress on the same slowed clock and her arms swinging half as much as in a normal run. Against the glare she is a veil, slightly darker than the light behind her, with glowing edges. With the light taking turns, she runs in every golden loop.
- **3:29, behind a tree** (both lights, about 24 m): she leans her shoulder on an old, thick birch. At first a nearer birch (about 18 m) hides her; the camera's sideways walk slides it off her, and she turns her head toward the camera. A near tree passes close in front, and when it has gone, so has she.
- **4:12, walking away** (both lights, about 32–37 m): she walks slowly away from behind a nearer birch, her hair swaying. A near tree passes, and a broken birch stump about her height stands where she was, 40 m away; it had been hidden behind her the whole time. This replaces the false start at 4:12.

Her hair's highlight is kept in range: a strand thinner than a pixel could flash one pixel 30 times too bright, which the blur spread into a white square.

Blue hour has no crickets now: just wind, leaves and a distant owl.

Test hooks: `window.__forest` (`playAt`, `shot`, `setTheme`, `setHer`, `moments`, `seam`, `timeCompile`).

Still to judge by ear and eye: the sound bed (grasshoppers, cuckoo, owl) hasn't been listened to yet; the bark is the quietest of her moments.

## 13. Decided

1. **Twins:** one walk for both themes.
2. **One VJ** with an option to change the theme (Golden hour / Blue hour), not two VJs.
3. **It loops**, and the light takes turns: golden and blue alternate, one loop each, starting from the one you pick (changed 2026-11-14; at first it stayed in one theme). No end card.
4. **The fireflies:** yes, a seventh way, for Blue hour.
5. **Menu:** no blurb, so no hint about her.
6. **Title:** Forest Anima, alias `anima`, short link /5 (my pick; easy to change).
7. **Looking around:** the mouse look of Europe and Twilight Lantern Forest, not the Meadow's free drag (Cleopatra changed the same way).
