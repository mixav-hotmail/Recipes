# Recipe Display Generator — Instructions

How the cookbook HTML (`meal-prep-this-week.html`) is built, and every rule a new
recipe must obey. Follow this doc when adding recipes or changing the player.
The goal: one consistent, ADHD-friendly cooking companion.

## 1. Source of truth & build

- **Edit only** `~/workspace/meal-prep/template.html`. Never hand-edit the built file.
- **Assets:**
  - `~/workspace/meal-prep/images_b64.json` — data-URI images. Keys: `shrimp_curry`,
    `lemon_salmon`, `chicken_tikka`, `koobideh`, `shrimp_steps`, `salmon_steps`,
    `chelow`, `shrimp_prep`, `salmon_prep`.
  - `~/workspace/meal-prep/steps_art.json` — hand-drawn SVG panels. Keys: `tikka`,
    `koobideh`. Values are **single-quoted** JS-array strings: parse with
    `ast.literal_eval`, then emit with `json.dumps`.
- **Placeholders in the template** (replaced at build):
  - `__IMG_<key>__` → data URI (local build); web build: `__IMGREF_<key>__`
    markers → `IMG("<key>")` JS lookups, resolved at runtime from
    `assets/img-data/<key>.js` (text-safe base64, because the GitHub MCP
    tools can only push text — binary JPEGs would corrupt)
  - `__ART_TIKKA__`, `__ART_KOOBIDEH__` → JS array literals of 4 SVG strings
- **Build with `~/workspace/meal-prep/build.py`** (two outputs, one source):
  - `build_local()` → single self-contained HTML with data-URI images. The
    portable copy: Muse artifact, downloads.
    Out: `~/workspace/your_files/meal-prep-this-week.html`
  - `build_web()` → multi-file static site for GitHub Pages, out:
    `~/workspace/meal-prep/web/`:
    - `index.html` — full cookbook (all recipes); TOC recipe pills link to
      subpages; floating cart tab holds the consolidated 12-item shopping list
    - `tikka.html`, `shrimp.html`, `salmon.html`, `koobideh.html` — per-recipe
      subpages (full chrome, one recipe section, no top nav; the cart shows
      only that recipe's items)
    - `assets/app.css`, `assets/app.js` — shared stylesheet/script extracted
      from the template (all pages live at root, so relative `assets/…` refs
      work everywhere; keep it that way — no subdirectories for pages)
    - `assets/img-data/<key>.js` — the 9 photos as text-safe base64 JS
      (`window.IMG_DATA`), ~35–65KB each (the GitHub MCP tools can only push
      text — binary JPEGs would corrupt)
    - `recipe-display-generator-instructions.md` (this doc), `README.md`
- **Verify every build:**
  1. `node --check` on the script (extract last `<script>` for local;
     `web/assets/app.js` for web).
  2. Run the DOM-stub suite (`~/workspace/meal-prep/test_player.js` — self-contained,
     reads the built HTML): dot counts, lane colors, proportional positions,
     chronological order, auto-advance, clock-follows-dot, step-list rows, detail
     lines. All must pass.
  3. Web only: each subpage has exactly 1 recipe section, correct
     `<title>`, no leftover placeholders and no top nav; drawer + cart tab
     present on every page; all 9 img-data files define their key in
     `window.IMG_DATA` with a valid JPEG data URI; each page's cart lists
     exactly its own items (index: all 12).
- **Deploy:** push the changed files to the `Recipes` repo root with
  `~/workspace/meal-prep/push_one.py <batch>` — add a batch entry for the
  changed file set (each `push_files` call caps at ~120KB of argv; images go
  1–2 per call, code pages bundle ~7 per call). Pushes need one approval each;
  batch aggressively. Pages is already enabled (Deploy from a branch →
  `main`, `/(root)`); live at `https://mixav-hotmail.github.io/Recipes/`.
  The user wants direct commits — never hand them a zip to upload.
- After any template change: rebuild **both**, re-verify, push the changed files.

## 2. Recipe data model (`RECIPES`)

```js
tikka: {
  name: "Chicken Tikka Bowls",
  img: "__IMG_chicken_tikka__",   // hero photo
  baseServ: 8,                    // default servings (tikka is 8: it was quadrupled)
  prepImg: "__IMG_shrimp_prep__", // OR prepArt: '<svg ...>' (one of the two)
  stepsImg: "__IMG_shrimp_steps__", // OR stepsArt: __ART_TIKKA__ (one of the two)
  chelowImg: "__IMG_chelow__",    // only koobideh; else null
  ing: [ ... ],                   // §3
  tl: { T: 32, prep: "<b>1 hour before:</b> ...",  // prep chip, optional
        lanes: [ ... ] }          // §4
}
```

- `chelow` is an ingredients-only entry (no player): `{ name, baseServ, ing }`.
- Keep recipe order: tikka, shrimp, salmon, koobideh. New recipes append after.

## 3. Ingredients

```js
{q:3, u:"lb", n:"chicken breast", note:"~4 large"},
{q:0.5, u:"", n:"onion", np:"onions", note:"grated & squeezed dry", count:1},
{q:null, n:"rice", note:"to serve"}
```

- `q`: quantity at `baseServ`. `u`/`up`: unit singular/plural.
  `tsp`, `tbsp`, `oz`, `lb` never pluralize; others add `s` unless `up` given.
- `n`/`np`: name singular/plural. `note`: parenthetical hint.
- `count:1`: countable items — round scaled quantity to the nearest ½.
- Fractions render as glyphs: ¼ ⅓ ½ ⅔ ¾.
- Servings stepper: 1–16, persists in `mp_serv_v1`. Ingredients rescale by
  `servings / baseServ`. Chelow ingredients follow **koobideh's** servings.
- Each ingredient that maps to the shopping list gets a 🛒 on/off button
  (orange + white glow = on the list, greyed = off); persists in `mp_buy_v1`.
  Unmapped pantry staples (spices, oil, salt, rice) get no button. The old
  tap-to-check-off circle was removed (Oct 2026) — step progress lives in the
  player now.
- Koobideh gets a second `<ul data-ingr="chelow">` under a "Chelow rice" heading.

## 4. Timeline / player data model (the heart of the page)

```js
tl: { T: 75, lanes: [
  { name:"Chelow", color:"#3e7d4e", events:[
    { t:0, dur:30, short:"Rinse + soak 30 min",
      label:"Rinse basmati clear; soak in salted water",
      detail:"Rinse the basmati until the water runs clear, then soak in salted water.",
      vis:"chelow" },
    ...
  ]},
  { name:"Koobideh", color:"#e0782f", events:[
    { prep:1, short:"Grate + squeeze",
      label:"Grate onion, squeeze dry; halve tomato",
      detail:"Grate the onion and squeeze it dry in a towel. Halve the tomato.",
      vis:"prep" },
    ...
  ]}
]}
```

- **Lanes:** exactly 2 per recipe. Rice lane is **always green `#3e7d4e`**,
  main-dish lane is **always orange `#e0782f`**. Same colors everywhere:
  dots, lane chips, step-list dots, legend, prep-zone tint.
- **Events:** `prep:1` = before the clock (hollow dot); otherwise `t` = minutes.
  `dur` (minutes) adds a per-step countdown chip on the stage.
- **Three text fields, three jobs:**
  - `short` — ≤5 words, imperative. Used on the stage headline, step-list rows,
    and "Next:" line. Scannable at a glance.
  - `detail` — 1–2 lines under the headline on the stage. Says WHAT and HOW:
    what to chop, what goes in, how to tell it's done. **No serving-scaled
    quantities** (they'd go stale when servings change) — times, temps, ratios
    (e.g. "1:1 rice to water"), and technique are fine.
  - `label` — one line, used only as the dot's hover tooltip.
- **Chronology:** the player sorts all events by time (preps first, then `t`,
  ties broken by lane order). Lanes must be authored so components **finish
  together** — this is a hard requirement, not a nice-to-have.
- **Visuals (`vis`):**
  - `"prep"` → `prepImg` photo, else `prepArt` SVG
  - `"q0"`–`"q3"` → quadrants of `stepsImg` (2×2 collage, CSS `background-size:200%`)
  - `"a0"`–`"a3"` → panels of `stepsArt`
  - `"hero"` → final dish photo; `"chelow"` → chelow photo
  - `"rice"` / `"flame"` → lane-tinted icon card (rice-cooker / flame SVG).
    Use for steps with no photo (rice-cooker steps, "broiler HIGH", "boil water").
- Every event MUST have `short`, `label`, `detail`, and `vis`. No exceptions —
  a missing detail is a content bug.

## 5. Player behavior (must not regress)

- **Stage:** 16:8 visual with slow Ken Burns drift; lane chip (lane color);
  kicker `"PREP · LANE"` or `"2:00 · CURRY"`; headline + detail line.
- **Actions row:** per-step timer chip (`▶ m:ss`, only when `dur` set) → counts
  down, vibrates 200 ms on finish, auto-marks the step done; `✓ Done` toggles
  the current step; master clock on the right.
- **Timeline:** legend; 2 lanes; each lane opens with a **46 px dashed prep zone**
  tinted in the lane color (prep = before the clock). Timed dots sit at
  `calc(var(--pz) + (100% - var(--pz)) * t/T)` — proportional within the cook
  zone. Prep dots are hollow, centered in the prep zone. Active dot glows;
  done dots get a green ring. White cursor tracks the clock.
- **Tap a dot / step-list row / ⏮ ⏭:** jumps there, **pauses the clock, and moves
  the clock to that step's time** (prep → 0:00).
- **▶ Play:** clock runs from its current position; the stage **auto-advances**
  as each dot's minute arrives. Tapping anything pauses (never yank the view).
- **"Next:"** line names the next undone step, with "in m:ss" while running.
- **Reset** clears clock, dones, and returns to the first step.
- **Steps list:** right of the player at ≥1200 px (below it on narrow screens),
  300 px column, header with `n/m` done count. Rows show time, lane dot, short
  text, ✓ when done; active row highlights and auto-scrolls into view (only
  when the list itself is scrollable — never scroll the page).

## 6. Page chrome

- Header ("My Cookbook" + one-line sub), TOC recipe pills (index only —
  subpages have no top nav; the drawer covers navigation).
- Retractable left drawer (☰ top-left): ⌂ Home + the 4 recipes, current page
  highlighted. Opens on hover on desktop (no dim; closes on mouse-leave) or
  tap; also closes on ×, scrim tap, link tap, or ESC.
- Recipe section: `rhead` (title, meta line: ⏱ time · 🍽 servings · style tags,
  optional "✓ Tried … · 8/10" badge) + servings stepper; grid: ingredients+hero
  left, player right (≥1000 px), stacked below.
- Sticky top bar appears on scroll: thumbnail, recipe name, servings stepper.
- Shopping = floating cart mini-tab (bottom-right: 🛒 + live count). Expands to
  a near-full-height panel: every item with a checkbox (all checked by
  default), quantities scaled to the page recipe's servings, tips, item count,
  "Copy for assistant" (copies a prompt to paste into
  albertsons.com/assistant) and "Open Albertsons →". The cart is **per page**:
  recipe subpages list only their own items (filtered at runtime by the
  item's `data-rs` via `PAGE_R`); index lists all 12.
- The old bottom shopping section is gone — kept `hidden` in the template as
  the items' data source. The old fixed bottom count bar was removed.
- Footer: one line describing the dot/timeline conventions.

## 7. Design tokens

`--bg:#faf7f2 --card:#fff --ink:#23201b --muted:#8a8177 --accent:#e0782f`
`--accent-dark:#b85a1c --green:#3e7d4e --line:#ece4d8 --radius:16px`.
Player is dark (`#1c1a17`). Warm, rounded, no walls of text.

## 8. localStorage keys

`mp_serv_v1` (servings), `mp_shop_v1` (cart have/need per item id),
`mp_buy_v1` (ingredient 🛒 on/off per `recipe:idx`). `mp_ingr_v1` is retired
(the tap-to-check-off circle was removed Oct 2026). Never rename without a
migration.

## 9. Adding a new recipe — checklist

1. Add hero + step visuals to `images_b64.json` (or SVG art to `steps_art.json`).
2. Add `RECIPES` entry: `name`, `img`, `baseServ` (2 = dinner + next-day lunch,
   unless the user says otherwise), `ing`, `tl` with 2 lanes and a `detail` on
   **every** event.
3. Add the `<section>` + TOC pill (index TOC only; subpages get no nav).
4. Shopping items (only if the recipe needs new groceries): add the hidden
   `<div class="item">` with `data-rs` (recipes it belongs to, comma-separated),
   `data-r` (primary recipe, scales the consolidated index quantity),
   `data-name`, `data-note`; add its quantities to `SHOP_QTY`
   (`index` + one entry per recipe page: `[qty, unit, plural, count?]`,
   at that recipe's `baseServ`); add its contributors to `SHOP_MAP`
   (`sid: [[recipe, ingIdx], ...]` — drives the 🛒 exclusion sync).
5. Rebuild (§1), run `node --check`, run the stub suite — all green.
6. Keep lanes ending together; keep `short` ≤5 words; keep quantities out of
   `detail`.

## 10. Standing content notes (don't lose these)

- Tikka defaults to **8 servings** (explicitly quadrupled); rated **8/10, tried
  Oct 2 2026**. Marinade needs the 1-hour chip. User wants **more char** —
  keep a real broiler preheat in the timeline. Rice: **1:1 ratio**, PC 4 min,
  10 min natural release (mushy-rice lesson, Oct 2026).
- Koobideh + chelow are one synchronized 75-minute cook; chelow technique:
  rinse clear → salted 30-min soak → 6-min parboil → cool rinse → towel-lid
  30-min steam → fluff.
- User cooks for one, 2 servings default, 1–2 days ahead; Indian + Persian;
  2–3 seafood/week; red meat 1–2×/week; shops Albertsons/Target.
