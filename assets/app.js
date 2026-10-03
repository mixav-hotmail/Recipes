function IMG(k){return (window.IMG_DATA&&window.IMG_DATA[k])||"";}
document.querySelectorAll("img[data-img]").forEach(function(el){var u=IMG(el.getAttribute("data-img"));if(u)el.src=u;});

/* ================= DATA ================= */
var RICE_SVG = '<svg viewBox="0 0 100 100" width="104" height="104"><g fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round"><path d="M22 58 h56 c0 16 -11 26 -28 26 s-28 -10 -28 -26z"/><path d="M38 44 q6 -8 0 -16"/><path d="M52 44 q6 -8 0 -16"/><path d="M66 44 q6 -8 0 -16"/></g></svg>';
var FLAME_SVG = '<svg viewBox="0 0 100 100" width="104" height="104"><path d="M50 8 C56 26 74 34 74 60 C74 77 63 90 50 90 C37 90 26 77 26 60 C26 48 32 40 37 31 C39 39 43 43 43 43 C43 33 45 20 50 8 Z" fill="#ffffff"/></svg>';
var RECIPES = {
  tikka: {
    name: "Chicken Tikka Bowls", img: IMG("chicken_tikka"), baseServ: 8,
    prepArt: '<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="500" fill="#f6f1e7"/><rect x="120" y="150" width="380" height="240" rx="18" fill="#d9a86c" stroke="#b9834f" stroke-width="6"/><rect x="160" y="200" width="120" height="44" rx="20" fill="#f2c9b8" stroke="#d89a80" stroke-width="4" transform="rotate(-8 220 222)"/><rect x="300" y="210" width="120" height="44" rx="20" fill="#f2c9b8" stroke="#d89a80" stroke-width="4" transform="rotate(6 360 232)"/><rect x="200" y="290" width="120" height="44" rx="20" fill="#f2c9b8" stroke="#d89a80" stroke-width="4" transform="rotate(4 260 312)"/><rect x="340" y="300" width="110" height="44" rx="20" fill="#f2c9b8" stroke="#d89a80" stroke-width="4" transform="rotate(-6 395 322)"/><rect x="520" y="180" width="130" height="26" rx="6" fill="#9aa0a8"/><rect x="650" y="184" width="70" height="18" rx="9" fill="#5a3d22"/><circle cx="600" cy="330" r="46" fill="#ffffff" stroke="#ddd2ba" stroke-width="5"/><ellipse cx="600" cy="322" rx="34" ry="12" fill="#f7f3e8"/><circle cx="696" cy="330" r="38" fill="#ffffff" stroke="#ddd2ba" stroke-width="5"/><ellipse cx="696" cy="324" rx="27" ry="10" fill="#d96a2b"/><circle cx="580" cy="425" r="28" fill="#f2d06b" stroke="#d9a91c" stroke-width="4"/><circle cx="580" cy="425" r="18" fill="#f7e08e"/><circle cx="660" cy="425" r="28" fill="#f2d06b" stroke="#d9a91c" stroke-width="4"/><circle cx="660" cy="425" r="18" fill="#f7e08e"/><ellipse cx="170" cy="435" rx="22" ry="28" fill="#f3ead9" stroke="#d9cba8" stroke-width="4"/><ellipse cx="222" cy="438" rx="18" ry="24" fill="#f3ead9" stroke="#d9cba8" stroke-width="4"/></svg>',
    stepsArt: ["<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><ellipse cx=\"400\" cy=\"405\" rx=\"235\" ry=\"32\" fill=\"#e7dcc6\"/><path d=\"M240 200 h320 c0 100 -70 165 -160 165 s-160 -65 -160 -165 z\" fill=\"#ffffff\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><ellipse cx=\"400\" cy=\"200\" rx=\"160\" ry=\"36\" fill=\"#efe7d4\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><ellipse cx=\"400\" cy=\"200\" rx=\"132\" ry=\"27\" fill=\"#d96a2b\"/><rect x=\"296\" y=\"166\" width=\"72\" height=\"46\" rx=\"16\" fill=\"#c05a22\" stroke=\"#9c4418\" stroke-width=\"4\" transform=\"rotate(-12 332 189)\"/><rect x=\"388\" y=\"180\" width=\"78\" height=\"48\" rx=\"16\" fill=\"#c05a22\" stroke=\"#9c4418\" stroke-width=\"4\" transform=\"rotate(8 427 204)\"/><rect x=\"346\" y=\"146\" width=\"66\" height=\"42\" rx=\"14\" fill=\"#cf6630\" stroke=\"#9c4418\" stroke-width=\"4\" transform=\"rotate(-6 379 167)\"/><circle cx=\"330\" cy=\"214\" r=\"5\" fill=\"#7a3a12\"/><circle cx=\"442\" cy=\"168\" r=\"5\" fill=\"#7a3a12\"/><circle cx=\"402\" cy=\"220\" r=\"5\" fill=\"#7a3a12\"/><path d=\"M292 192 q36 -16 72 0 t72 0\" fill=\"none\" stroke=\"#f7e8c9\" stroke-width=\"7\" stroke-linecap=\"round\"/></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><rect x=\"90\" y=\"140\" width=\"620\" height=\"230\" rx=\"20\" fill=\"#cfc8b8\"/><rect x=\"118\" y=\"168\" width=\"564\" height=\"174\" rx=\"12\" fill=\"#e6e0d2\"/><polygon points=\"118,168 262,168 182,342 118,342\" fill=\"#f2eee4\" opacity=\"0.7\"/><rect x=\"160\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#e08a4b\" stroke=\"#c9712f\" stroke-width=\"4\"/><rect x=\"310\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#e08a4b\" stroke=\"#c9712f\" stroke-width=\"4\"/><rect x=\"460\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#e08a4b\" stroke=\"#c9712f\" stroke-width=\"4\"/><rect x=\"235\" y=\"282\" width=\"110\" height=\"58\" rx=\"18\" fill=\"#e08a4b\" stroke=\"#c9712f\" stroke-width=\"4\"/><rect x=\"385\" y=\"282\" width=\"110\" height=\"58\" rx=\"18\" fill=\"#e08a4b\" stroke=\"#c9712f\" stroke-width=\"4\"/><circle cx=\"200\" cy=\"228\" r=\"5\" fill=\"#b85a1c\"/><circle cx=\"360\" cy=\"232\" r=\"5\" fill=\"#b85a1c\"/><circle cx=\"510\" cy=\"226\" r=\"5\" fill=\"#b85a1c\"/><circle cx=\"290\" cy=\"310\" r=\"5\" fill=\"#b85a1c\"/><circle cx=\"435\" cy=\"308\" r=\"5\" fill=\"#b85a1c\"/></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><rect x=\"90\" y=\"140\" width=\"620\" height=\"230\" rx=\"20\" fill=\"#cfc8b8\"/><rect x=\"118\" y=\"168\" width=\"564\" height=\"174\" rx=\"12\" fill=\"#e6e0d2\"/><rect x=\"160\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#9c4a1c\" stroke=\"#7c3a14\" stroke-width=\"4\"/><rect x=\"310\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#9c4a1c\" stroke=\"#7c3a14\" stroke-width=\"4\"/><rect x=\"460\" y=\"200\" width=\"110\" height=\"62\" rx=\"18\" fill=\"#9c4a1c\" stroke=\"#7c3a14\" stroke-width=\"4\"/><rect x=\"235\" y=\"282\" width=\"110\" height=\"58\" rx=\"18\" fill=\"#9c4a1c\" stroke=\"#7c3a14\" stroke-width=\"4\"/><rect x=\"385\" y=\"282\" width=\"110\" height=\"58\" rx=\"18\" fill=\"#9c4a1c\" stroke=\"#7c3a14\" stroke-width=\"4\"/><g stroke=\"#3a2415\" stroke-width=\"7\" stroke-linecap=\"round\"><line x1=\"185\" y1=\"222\" x2=\"225\" y2=\"222\"/><line x1=\"190\" y1=\"244\" x2=\"230\" y2=\"244\"/><line x1=\"335\" y1=\"222\" x2=\"375\" y2=\"222\"/><line x1=\"340\" y1=\"244\" x2=\"380\" y2=\"244\"/><line x1=\"485\" y1=\"222\" x2=\"525\" y2=\"222\"/><line x1=\"490\" y1=\"244\" x2=\"530\" y2=\"244\"/><line x1=\"260\" y1=\"302\" x2=\"300\" y2=\"302\"/><line x1=\"410\" y1=\"302\" x2=\"450\" y2=\"302\"/></g><g fill=\"none\" stroke=\"#e0782f\" stroke-width=\"8\" stroke-linecap=\"round\" opacity=\"0.45\"><path d=\"M250 120 q12 -22 0 -44 q-12 -22 0 -44\"/><path d=\"M400 120 q12 -22 0 -44 q-12 -22 0 -44\"/><path d=\"M550 120 q12 -22 0 -44 q-12 -22 0 -44\"/></g></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><ellipse cx=\"400\" cy=\"405\" rx=\"235\" ry=\"32\" fill=\"#e7dcc6\"/><path d=\"M240 200 h320 c0 100 -70 165 -160 165 s-160 -65 -160 -165 z\" fill=\"#ffffff\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><ellipse cx=\"400\" cy=\"200\" rx=\"160\" ry=\"36\" fill=\"#efe7d4\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><ellipse cx=\"400\" cy=\"202\" rx=\"135\" ry=\"29\" fill=\"#ffffff\" stroke=\"#e5ddcd\" stroke-width=\"4\"/><circle cx=\"338\" cy=\"190\" r=\"20\" fill=\"#ffffff\" stroke=\"#e5ddcd\" stroke-width=\"3\"/><circle cx=\"392\" cy=\"182\" r=\"22\" fill=\"#ffffff\" stroke=\"#e5ddcd\" stroke-width=\"3\"/><circle cx=\"448\" cy=\"192\" r=\"19\" fill=\"#ffffff\" stroke=\"#e5ddcd\" stroke-width=\"3\"/><rect x=\"312\" y=\"148\" width=\"96\" height=\"32\" rx=\"14\" fill=\"#c96a2f\" stroke=\"#a34f1e\" stroke-width=\"4\" transform=\"rotate(-10 360 164)\"/><rect x=\"404\" y=\"158\" width=\"96\" height=\"32\" rx=\"14\" fill=\"#c96a2f\" stroke=\"#a34f1e\" stroke-width=\"4\" transform=\"rotate(6 452 174)\"/><rect x=\"352\" y=\"180\" width=\"96\" height=\"32\" rx=\"14\" fill=\"#b85a24\" stroke=\"#a34f1e\" stroke-width=\"4\" transform=\"rotate(-3 400 196)\"/><path d=\"M322 176 q40 14 80 4 t80 4\" fill=\"none\" stroke=\"#8a3d12\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\"0.8\"/></svg>"],
    chelowImg: null,
    ing: [
      {q:3, u:"lb", n:"chicken breast", note:"~4 large"},
      {q:4/3, u:"cup", up:"cups", n:"plain yogurt"},
      {q:0.25, u:"cup", up:"cups", n:"lemon juice"},
      {q:2, u:"tbsp", n:"garam masala", note:"or 1 tbsp cumin + 1 tbsp paprika + 1 tsp turmeric"},
      {q:8, u:"clove", up:"cloves", n:"garlic", note:"minced", count:1},
      {q:4, u:"tsp", n:"salt"},
      {q:8/3, u:"tbsp", n:"oil"},
      {q:null, n:"rice", note:"to serve"}
    ],
    tl: { T: 32, prep:"<b>1 hour before:</b> coat the chicken and refrigerate.",
      lanes: [
      {name:"Rice (IP)", color:"#3e7d4e", events:[
        {prep:1, short:"Rinse rice", label:"Rinse the rice", vis:"rice", detail:"Rinse until the water runs clear."},
        {t:5, dur:4, short:"Pressure Cook 4 min", label:"Pressure Cook 4 min, valve Sealing", vis:"rice", detail:"1:1 rice to water. Pressure Cook 4 min, valve on Sealing."},
        {t:16, dur:10, short:"Natural release 10 min", label:"Natural release 10 min", vis:"rice", detail:"Hands off — let the pressure drop on its own."},
        {t:26, short:"Vent, open, fluff", label:"Vent, open, fluff", vis:"rice", detail:"Quick-release any remaining steam, open, and fluff with a fork."} ]},
      {name:"Broiler", color:"#e0782f", events:[
        {prep:1, short:"Prep + marinate", label:"Pat dry, slice strips, mix marinade, coat, fridge", vis:"prep", detail:"Pat the chicken dry and slice into strips. Mix the yogurt, lemon juice, garam masala, minced garlic, and salt; coat the chicken and refrigerate 1 hour."},
        {t:0, short:"Broiler HIGH", label:"Broiler HIGH, rack ~6 in below element", vis:"flame", detail:"Rack about 6 inches below the element. Let it get ripping hot."},
        {t:2, dur:6, short:"Batch 1 in — 6 min", label:"Batch 1 in — 6 min per side", vis:"a1", detail:"Spread half the chicken on an oiled sheet pan — pieces not touching."},
        {t:8, short:"Flip batch 1", label:"Flip batch 1", vis:"a2", detail:"Flip each strip. Look for charred edges."},
        {t:14, dur:6, short:"Batch 1 out, batch 2 in", label:"Batch 1 out, batch 2 in — 6 min per side", vis:"a2", detail:"Batch 1 to a plate, tented with foil. Fresh batch on the pan — 6 min per side."},
        {t:20, short:"Flip batch 2", label:"Flip batch 2", vis:"a2", detail:"Flip each strip — 6 min per side total."},
        {t:26, dur:5, short:"Batch 2 out, rest", label:"Batch 2 out, rest 5 min", vis:"a2", detail:"Out of the broiler. Rest 5 min so the juices settle."},
        {t:31, short:"Slice + serve", label:"Slice and serve over rice", vis:"hero", detail:"Slice the chicken and serve over rice."} ]}
    ]}
  },
  shrimp: {
    name: "Coconut Shrimp Curry", img: IMG("shrimp_curry"), baseServ: 2,
    prepImg: IMG("shrimp_prep"),
    stepsImg: IMG("shrimp_steps"),
    chelowImg: null,
    ing: [
      {q:12, u:"oz", n:"frozen shrimp", note:"thawed & peeled"},
      {q:1, u:"", n:"small onion", np:"small onions", note:"diced", count:1},
      {q:2, u:"clove", up:"cloves", n:"garlic", note:"minced", count:1},
      {q:0.5, u:"tsp", n:"grated ginger", note:"or ¼ tsp ground"},
      {q:0.75, u:"cup", up:"cups", n:"coconut milk", note:"about ½ can"},
      {q:1, u:"tbsp", n:"tomato paste"},
      {q:2, u:"tsp", n:"curry powder", note:"or 1½ tsp turmeric + ½ tsp cumin"},
      {q:0.75, u:"tsp", n:"salt"},
      {q:2, u:"tsp", n:"oil"},
      {q:null, n:"rice", note:"to serve"}
    ],
    tl: { T: 22, lanes: [
      {name:"Rice (IP)", color:"#3e7d4e", events:[
        {prep:1, short:"Rinse rice", label:"Rinse the rice", vis:"rice", detail:"Rinse until the water runs clear."},
        {t:0, dur:4, short:"Pressure Cook 4 min", label:"Pressure Cook 4 min, valve Sealing", vis:"rice", detail:"1:1 rice to water. Pressure Cook 4 min, valve on Sealing."},
        {t:11, dur:10, short:"Natural release 10 min", label:"Natural release 10 min", vis:"rice", detail:"Hands off — let the pressure drop on its own."},
        {t:21, short:"Vent, open, fluff", label:"Vent, open, fluff", vis:"rice", detail:"Quick-release any remaining steam, open, and fluff with a fork."} ]},
      {name:"Curry", color:"#e0782f", events:[
        {prep:1, short:"Dice + mince", label:"Dice onion, mince garlic, grate ginger", vis:"prep", detail:"Dice the onion. Mince the garlic. Grate the ginger."},
        {t:2, dur:5, short:"Onion in — 5 min", label:"Heat oil, onion in — 5 min", vis:"q0", detail:"Heat the oil over medium. Onion in — soften 5 min, stirring."},
        {t:7, dur:1, short:"Garlic + spices — 1 min", label:"Garlic, ginger, curry powder — 1 min", vis:"q1", detail:"Garlic, ginger, and curry powder in — stir 1 min until fragrant."},
        {t:8, dur:5, short:"Coconut milk — 5 min", label:"Tomato paste + coconut milk + salt — simmer 5", vis:"q2", detail:"Tomato paste, coconut milk, and salt — simmer 5 min."},
        {t:13, dur:4, short:"Shrimp in — 4 min", label:"Shrimp in — 3–4 min", vis:"q3", detail:"Shrimp in — 3 to 4 min, just until pink and curled."},
        {t:17, short:"Off heat", label:"Off heat, lid on", vis:"q3", detail:"Off the heat, lid on — it keeps cooking gently."},
        {t:21, short:"Serve", label:"Serve over rice", vis:"hero", detail:"Spoon over rice."} ]}
    ]}
  },
  salmon: {
    name: "Lemon Garlic Salmon", img: IMG("lemon_salmon"), baseServ: 2,
    prepImg: IMG("salmon_prep"),
    stepsImg: IMG("salmon_steps"),
    chelowImg: null,
    ing: [
      {q:0.75, u:"lb", n:"salmon", note:"2 fillets"},
      {q:1, u:"", n:"lemon", np:"lemons", note:"half juiced, half sliced", count:1},
      {q:3, u:"clove", up:"cloves", n:"garlic", note:"minced", count:1},
      {q:2, u:"tbsp", n:"butter", note:"or oil"},
      {q:0.5, u:"tsp", n:"paprika"},
      {q:null, n:"salt & pepper", note:"to taste"},
      {q:null, n:"rice", note:"to serve"}
    ],
    tl: { T: 22, lanes: [
      {name:"Rice (IP)", color:"#3e7d4e", events:[
        {prep:1, short:"Rinse rice", label:"Rinse the rice", vis:"rice", detail:"Rinse until the water runs clear."},
        {t:0, dur:4, short:"Pressure Cook 4 min", label:"Pressure Cook 4 min, valve Sealing", vis:"rice", detail:"1:1 rice to water. Pressure Cook 4 min, valve on Sealing."},
        {t:11, dur:10, short:"Natural release 10 min", label:"Natural release 10 min", vis:"rice", detail:"Hands off — let the pressure drop on its own."},
        {t:21, short:"Vent, open, fluff", label:"Vent, open, fluff", vis:"rice", detail:"Quick-release any remaining steam, open, and fluff with a fork."} ]},
      {name:"Salmon", color:"#e0782f", events:[
        {prep:1, short:"Mince + slice", label:"Mince garlic; slice + juice lemon", vis:"prep", detail:"Mince the garlic. Juice half the lemon; slice the other half."},
        {t:0, short:"Oven to 425°F", label:"Heat oven to 425°F", vis:"q0", detail:"Heat to 425°F. Line a pan with foil."},
        {t:3, short:"Mix sauce", label:"Melt butter, mix garlic-lemon sauce", vis:"q1", detail:"Melt the butter. Stir in the garlic, lemon juice, paprika, salt, and pepper."},
        {t:5, short:"Salmon on pan", label:"Salmon on pan — sauce over, lemon on top", vis:"q2", detail:"Salmon on the pan. Spoon the sauce over; lemon slices on top."},
        {t:6, dur:12, short:"Into oven — 12 min", label:"Into the oven — 12 min", vis:"q2", detail:"Into the oven — 12 min."},
        {t:18, short:"Out, rest", label:"Out of the oven, rest a few minutes", vis:"q3", detail:"Out of the oven — rest a few minutes. It finishes cooking as it sits."},
        {t:21, short:"Serve", label:"Serve over rice", vis:"hero", detail:"Serve over rice."} ]}
    ]}
  },
  koobideh: {
    name: "Sheet-Pan Koobideh", img: IMG("koobideh"), baseServ: 2,
    prepArt: '<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="500" fill="#f6f1e7"/><polygon points="300,120 420,120 442,380 278,380" fill="#b9bec6" stroke="#8f959e" stroke-width="5"/><g fill="#7c828b"><circle cx="330" cy="170" r="7"/><circle cx="360" cy="170" r="7"/><circle cx="390" cy="170" r="7"/><circle cx="326" cy="215" r="7"/><circle cx="356" cy="215" r="7"/><circle cx="386" cy="215" r="7"/><circle cx="322" cy="260" r="7"/><circle cx="352" cy="260" r="7"/><circle cx="382" cy="260" r="7"/><circle cx="318" cy="305" r="7"/><circle cx="348" cy="305" r="7"/><circle cx="378" cy="305" r="7"/></g><rect x="268" y="380" width="184" height="26" rx="8" fill="#8f959e"/><path d="M520 250 h200 c0 70 -45 115 -100 115 s-100 -45 -100 -115 z" fill="#ffffff" stroke="#ddd2ba" stroke-width="6"/><ellipse cx="620" cy="250" rx="100" ry="24" fill="#efe7d4" stroke="#ddd2ba" stroke-width="6"/><g fill="#f7f2e4" stroke="#e0d3b8" stroke-width="2"><rect x="570" y="232" width="26" height="10" rx="4" transform="rotate(-14 583 237)"/><rect x="610" y="228" width="26" height="10" rx="4" transform="rotate(10 623 233)"/><rect x="648" y="236" width="26" height="10" rx="4" transform="rotate(-8 661 241)"/><rect x="592" y="248" width="26" height="10" rx="4" transform="rotate(12 605 253)"/><rect x="632" y="250" width="26" height="10" rx="4" transform="rotate(-12 645 255)"/></g><circle cx="180" cy="300" r="52" fill="#d64545"/><circle cx="180" cy="300" r="34" fill="#e8736a"/><ellipse cx="168" cy="292" rx="9" ry="13" fill="#f2b3ac"/><ellipse cx="193" cy="308" rx="9" ry="13" fill="#f2b3ac"/><circle cx="180" cy="420" r="42" fill="#d64545"/><circle cx="180" cy="420" r="27" fill="#e8736a"/><ellipse cx="170" cy="414" rx="7" ry="10" fill="#f2b3ac"/></svg>',
    stepsArt: ["<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><rect x=\"90\" y=\"140\" width=\"620\" height=\"230\" rx=\"20\" fill=\"#cfc8b8\"/><rect x=\"118\" y=\"168\" width=\"564\" height=\"174\" rx=\"12\" fill=\"#e6e0d2\"/><ellipse cx=\"400\" cy=\"256\" rx=\"212\" ry=\"72\" fill=\"#f2d06b\" opacity=\"0.45\"/><ellipse cx=\"338\" cy=\"232\" rx=\"96\" ry=\"26\" fill=\"#f7e08e\" opacity=\"0.8\"/><circle cx=\"522\" cy=\"272\" r=\"10\" fill=\"#f2d06b\" opacity=\"0.6\"/><circle cx=\"562\" cy=\"242\" r=\"7\" fill=\"#f2d06b\" opacity=\"0.6\"/><circle cx=\"298\" cy=\"292\" r=\"8\" fill=\"#f2d06b\" opacity=\"0.6\"/></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><ellipse cx=\"400\" cy=\"405\" rx=\"235\" ry=\"32\" fill=\"#e7dcc6\"/><path d=\"M240 200 h320 c0 100 -70 165 -160 165 s-160 -65 -160 -165 z\" fill=\"#ffffff\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><ellipse cx=\"400\" cy=\"200\" rx=\"160\" ry=\"36\" fill=\"#efe7d4\" stroke=\"#ddd2ba\" stroke-width=\"6\"/><path d=\"M285 200 c0 -48 52 -82 115 -82 s115 34 115 82 z\" fill=\"#8a5a33\"/><g fill=\"#f3ead9\"><rect x=\"340\" y=\"140\" width=\"18\" height=\"11\" rx=\"4\" transform=\"rotate(-18 349 145)\"/><rect x=\"400\" y=\"130\" width=\"18\" height=\"11\" rx=\"4\" transform=\"rotate(14 409 135)\"/><rect x=\"452\" y=\"152\" width=\"18\" height=\"11\" rx=\"4\" transform=\"rotate(-10 461 157)\"/><rect x=\"372\" y=\"162\" width=\"18\" height=\"11\" rx=\"4\" transform=\"rotate(22 381 167)\"/><rect x=\"424\" y=\"170\" width=\"18\" height=\"11\" rx=\"4\" transform=\"rotate(-24 433 175)\"/></g><g fill=\"#e8a91c\"><circle cx=\"360\" cy=\"150\" r=\"6\"/><circle cx=\"438\" cy=\"142\" r=\"6\"/><circle cx=\"408\" cy=\"168\" r=\"6\"/><circle cx=\"478\" cy=\"172\" r=\"6\"/></g></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><rect x=\"90\" y=\"140\" width=\"620\" height=\"230\" rx=\"20\" fill=\"#cfc8b8\"/><rect x=\"118\" y=\"168\" width=\"564\" height=\"174\" rx=\"12\" fill=\"#e6e0d2\"/><rect x=\"150\" y=\"195\" width=\"420\" height=\"130\" rx=\"14\" fill=\"#c98f5a\" stroke=\"#a96f3e\" stroke-width=\"5\"/><g stroke=\"#8a5a33\" stroke-width=\"7\" stroke-linecap=\"round\"><line x1=\"252\" y1=\"195\" x2=\"207\" y2=\"325\"/><line x1=\"352\" y1=\"195\" x2=\"307\" y2=\"325\"/><line x1=\"452\" y1=\"195\" x2=\"407\" y2=\"325\"/></g><circle cx=\"632\" cy=\"236\" r=\"42\" fill=\"#d64545\"/><circle cx=\"632\" cy=\"236\" r=\"27\" fill=\"#e8736a\"/><ellipse cx=\"622\" cy=\"230\" rx=\"7\" ry=\"10\" fill=\"#f2b3ac\"/><ellipse cx=\"643\" cy=\"242\" rx=\"7\" ry=\"10\" fill=\"#f2b3ac\"/><rect x=\"622\" y=\"186\" width=\"20\" height=\"12\" rx=\"6\" fill=\"#4e7d3a\"/><circle cx=\"632\" cy=\"312\" r=\"34\" fill=\"#d64545\"/><circle cx=\"632\" cy=\"312\" r=\"21\" fill=\"#e8736a\"/><ellipse cx=\"624\" cy=\"307\" rx=\"6\" ry=\"8\" fill=\"#f2b3ac\"/><ellipse cx=\"641\" cy=\"317\" rx=\"6\" ry=\"8\" fill=\"#f2b3ac\"/></svg>", "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"500\" fill=\"#f6f1e7\"/><rect x=\"90\" y=\"140\" width=\"620\" height=\"230\" rx=\"20\" fill=\"#cfc8b8\"/><rect x=\"118\" y=\"168\" width=\"564\" height=\"174\" rx=\"12\" fill=\"#e6e0d2\"/><rect x=\"150\" y=\"195\" width=\"420\" height=\"130\" rx=\"14\" fill=\"#8a4f24\" stroke=\"#6e3d1b\" stroke-width=\"5\"/><g stroke=\"#4a2a12\" stroke-width=\"6\" stroke-linecap=\"round\"><line x1=\"162\" y1=\"228\" x2=\"558\" y2=\"228\"/><line x1=\"162\" y1=\"258\" x2=\"558\" y2=\"258\"/><line x1=\"162\" y1=\"288\" x2=\"558\" y2=\"288\"/></g><circle cx=\"632\" cy=\"236\" r=\"42\" fill=\"#b03a3a\"/><circle cx=\"632\" cy=\"236\" r=\"27\" fill=\"#c2504a\"/><circle cx=\"618\" cy=\"226\" r=\"7\" fill=\"#7c2828\"/><circle cx=\"644\" cy=\"246\" r=\"6\" fill=\"#7c2828\"/><circle cx=\"632\" cy=\"312\" r=\"34\" fill=\"#b03a3a\"/><circle cx=\"632\" cy=\"312\" r=\"21\" fill=\"#c2504a\"/><circle cx=\"622\" cy=\"304\" r=\"6\" fill=\"#7c2828\"/><circle cx=\"642\" cy=\"318\" r=\"5\" fill=\"#7c2828\"/><g fill=\"none\" stroke=\"#e0782f\" stroke-width=\"8\" stroke-linecap=\"round\" opacity=\"0.45\"><path d=\"M300 130 q12 -22 0 -44 q-12 -22 0 -44\"/><path d=\"M450 130 q12 -22 0 -44 q-12 -22 0 -44\"/><path d=\"M620 120 q12 -22 0 -44 q-12 -22 0 -44\"/></g></svg>"],
    chelowImg: IMG("chelow"),
    ing: [
      {q:0.75, u:"lb", n:"ground beef", note:"80/20"},
      {q:0.5, u:"", n:"onion", np:"onions", note:"grated & squeezed dry", count:1},
      {q:0.75, u:"tsp", n:"turmeric"},
      {q:1, u:"tsp", n:"salt"},
      {q:0.25, u:"tsp", n:"black pepper"},
      {q:1, u:"", n:"tomato", np:"tomatoes", note:"halved", count:1},
      {q:2, u:"tsp", n:"oil"}
    ],
    tl: { T: 75, lanes: [
      {name:"Chelow", color:"#3e7d4e", events:[
        {t:0, dur:30, short:"Rinse + soak 30 min", label:"Rinse basmati clear; soak in salted water", vis:"chelow", detail:"Rinse the basmati until the water runs clear, then soak in salted water."},
        {t:25, short:"Boil water", label:"Big pot of salted water — rolling boil", vis:"flame", detail:"Big pot of salted water — rolling boil."},
        {t:30, dur:6, short:"Parboil 6 min", label:"Parboil 6 min — soft outside, firm core", vis:"chelow", detail:"Drain the soak. Parboil 6 min — soft outside, firm core."},
        {t:36, short:"Drain + rinse", label:"Drain, rinse cool; oil + water in pot", vis:"chelow", detail:"Drain and rinse cool. Oil plus a splash of water in the pot."},
        {t:38, dur:30, short:"Steam 30 min", label:"Mound rice, towel lid, low heat — don't peek", vis:"chelow", detail:"Mound the rice in. Towel-wrapped lid, low heat — don’t peek."},
        {t:68, short:"Fluff", label:"Fluff gently with a fork", vis:"chelow", detail:"Fluff gently with a fork."} ]},
      {name:"Koobideh", color:"#e0782f", events:[
        {prep:1, short:"Grate + squeeze", label:"Grate onion, squeeze dry; halve tomato", vis:"prep", detail:"Grate the onion and squeeze it dry in a towel. Halve the tomato."},
        {t:55, short:"Broiler HIGH", label:"Heat broiler to HIGH", vis:"flame", detail:"Broiler to HIGH, rack about 6 inches below the element."},
        {t:58, short:"Mix beef", label:"Mix beef + onion + spices", vis:"a1", detail:"Mix the beef, onion, turmeric, salt, and pepper — really work it together."},
        {t:63, dur:8, short:"On pan, broil 8 min", label:"Press flat, score, tomatoes on — broil 8–10 min", vis:"a2", detail:"Press flat on an oiled pan and score lines. Tomatoes on — broil 8 to 10 min."},
        {t:71, short:"Out, rest", label:"Out, rest 2 min", vis:"a3", detail:"Out — rest 2 min."},
        {t:74, short:"Serve", label:"Serve over chelow", vis:"hero", detail:"Serve over chelow."} ]}
    ]}
  },
  chelow: {
    name: "Chelow Rice", baseServ: 2,
    ing: [
      {q:1.5, u:"cup", up:"cups", n:"basmati rice"},
      {q:1, u:"tbsp", n:"salt", note:"for the soak + pasta water"},
      {q:1, u:"tbsp", n:"oil or butter"},
      {q:null, n:"water", note:"a big pot of it"}
    ]
  }
};
var POS = ["0% 0%","100% 0%","0% 100%","100% 100%"];

/* ============ SHOPPING SYNC: items <-> recipe ingredients ============ */
/* which recipe ingredients feed each shopping item (for qty scaling is per-item data-r) */
var SHOP_MAP = {
  s1:[["shrimp",0]], s2:[["salmon",0]], s3:[["tikka",0]], s4:[["koobideh",0]],
  s5:[["shrimp",1],["koobideh",1]], s6:[["tikka",4],["shrimp",2],["salmon",2]],
  s7:[["shrimp",3]], s8:[["tikka",2],["salmon",1]], s9:[["koobideh",5]],
  s10:[["shrimp",4]], s11:[["shrimp",5]], s12:[["tikka",1]]
};
/* per-page shopping quantities: [qty, unit, plural, count?] at the recipe's base servings.
   "index" = the consolidated weekly-list value shown on the home page. */
var SHOP_QTY = {
  s1:  { index:[12,"oz"],                    shrimp:[12,"oz"] },
  s2:  { index:[0.75,"lb"],                 salmon:[0.75,"lb"] },
  s3:  { index:[3,"lb"],                    tikka:[3,"lb"] },
  s4:  { index:[0.75,"lb"],                 koobideh:[0.75,"lb"] },
  s5:  { index:[2,"","",1],                 shrimp:[1,"","",1], koobideh:[1,"","",1] },
  s6:  { index:[1,"head","heads"],          tikka:[1,"head","heads"], shrimp:[2,"clove","cloves"], salmon:[3,"clove","cloves"] },
  s7:  { index:[1,"small piece","small pieces"], shrimp:[1,"small piece","small pieces"] },
  s8:  { index:[2,"","",1],                 tikka:[1,"","",1], salmon:[1,"","",1] },
  s9:  { index:[1,"","",1],                 koobideh:[1,"","",1] },
  s10: { index:[1,"can","cans"],            shrimp:[1,"can","cans"] },
  s11: { index:[1,"small can","small cans"], shrimp:[1,"small can","small cans"] },
  s12: { index:[1,"large tub","large tubs"], tikka:[1,"large tub","large tubs"] }
};
var buyState = {};
try{ buyState = JSON.parse(localStorage.getItem("mp_buy_v1") || "{}"); }catch(e){}
var ING_SHOP = {};
Object.keys(SHOP_MAP).forEach(function(sid){
  SHOP_MAP[sid].forEach(function(p){
    var k = p[0] + ":" + p[1];
    (ING_SHOP[k] = ING_SHOP[k] || []).push(sid);
  });
});
/* effective "on the list": not marked have, and at least one contributing ingredient still bought.
   On a recipe page only that recipe's contributors count (so unchecking garlic on the
   tikka page drops it from tikka's cart even though shrimp still wants garlic). */
function shopNeed(id){
  if(shopState[id] === "have") return false;
  var c = SHOP_MAP[id];
  if(!c) return true;
  if(PAGE_R !== "index") c = c.filter(function(p){ return p[0] === PAGE_R; });
  return c.some(function(p){ return buyState[p[0] + ":" + p[1]] !== 0; });
}
/* keep the recipe 🛒 buttons in sync with the cart (both directions) */
function paintBuyButtons(){
  document.querySelectorAll(".buybtn").forEach(function(b){
    var on = shopNeed(b.getAttribute("data-sid"));
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

/* ================= SERVINGS + INGREDIENTS ================= */
var servState = {};
try{ servState = JSON.parse(localStorage.getItem("mp_serv_v1") || "{}"); }catch(e){}
function servingsOf(key){ return servState[key] || RECIPES[key].baseServ; }
var FRACS = [[0,""],[0.25,"¼"],[1/3,"⅓"],[0.5,"½"],[2/3,"⅔"],[0.75,"¾"],[1,""]];
function fmtQty(q, count){
  if(count){ q = Math.round(q*2)/2; }
  var whole = Math.floor(q + 1e-9), f = q - whole, best = FRACS[0], bd = 99;
  FRACS.forEach(function(o){ var d = Math.abs(o[0]-f); if(d < bd){ bd = d; best = o; } });
  if(best[0] === 1){ whole += 1; best = FRACS[0]; }
  if(whole === 0 && best[1] === "") return "0";
  return (whole ? whole : "") + best[1];
}
var NO_PLURAL = {"tsp":1, "tbsp":1, "oz":1, "lb":1};
function pluralUnit(ing, q2){
  if(Math.abs(q2 - 1) < 1e-9) return ing.u;
  if(ing.up) return ing.up;
  if(!ing.u) return "";
  return NO_PLURAL[ing.u] ? ing.u : ing.u + "s";
}
function ingHTML(ing, factor){
  var note = ing.note ? ' <span class="inote">(' + ing.note + ')</span>' : '';
  if(ing.q == null) return "<b>" + ing.n + "</b>" + note;
  var q2 = ing.q * factor;
  var qs = fmtQty(q2, ing.count);
  var unit = pluralUnit(ing, q2);
  var name = (Math.abs(q2 - 1) < 1e-9) ? ing.n : (ing.np || ing.n);
  var u = unit ? " " + unit : "";
  return '<span class="iqty">' + qs + u + '</span> ' + name + note;
}
function renderIngredients(key){
  var ul = document.querySelector('ul[data-ingr="' + key + '"]');
  if(!ul) return;
  var fkey = (key === "chelow") ? "koobideh" : key;
  var factor = servingsOf(fkey) / RECIPES[fkey].baseServ;
  ul.innerHTML = "";
  RECIPES[key].ing.forEach(function(ing, idx){
    var li = document.createElement("li");
    li.innerHTML = ingHTML(ing, factor);
    var id = key + ":" + idx;
    if(ING_SHOP[id]){
      var b = document.createElement("button");
      b.type = "button";
      b.className = "buybtn";
      b.textContent = "🛒";
      b.title = "On/off the shopping list";
      b.setAttribute("data-sid", ING_SHOP[id][0]);
      b.setAttribute("aria-label", "Toggle " + ing.n + " on the shopping list");
      (function(btn, bid){
        btn.addEventListener("click", function(){
          var sid = btn.getAttribute("data-sid");
          if(shopNeed(sid)){
            buyState[bid] = 0; /* take it off */
          }else{
            buyState[bid] = 1; /* put it back on */
            if(shopState[sid] === "have") shopState[sid] = "need";
          }
          try{ localStorage.setItem("mp_buy_v1", JSON.stringify(buyState)); }catch(e){}
          saveShop(); paintBuyButtons(); paintCart();
        });
      })(b, id);
      li.insertBefore(b, li.firstChild);
    }
    ul.appendChild(li);
  });
}
function setServings(key, n){
  n = Math.max(1, Math.min(16, n));
  servState[key] = n;
  try{ localStorage.setItem("mp_serv_v1", JSON.stringify(servState)); }catch(e){}
  document.querySelectorAll('.stepper[data-r="' + key + '"] .sval').forEach(function(s){ s.textContent = n; });
  if(activeRecipe === key){ document.getElementById("sbServ").textContent = n; }
  renderIngredients(key);
  if(key === "koobideh"){ renderIngredients("chelow"); }
  if(paintCart) paintCart();
}
document.querySelectorAll(".stepper[data-r]").forEach(function(st){
  var key = st.getAttribute("data-r");
  st.querySelector(".sval").textContent = servingsOf(key);
  st.querySelector(".sminus").addEventListener("click", function(){ setServings(key, servingsOf(key) - 1); });
  st.querySelector(".splus").addEventListener("click", function(){ setServings(key, servingsOf(key) + 1); });
});
Object.keys(RECIPES).forEach(renderIngredients);

/* ================= UNIFIED PLAYER ================= */
function fmtClock(ms){
  var s = Math.max(0, Math.floor(ms/1000));
  return Math.floor(s/60) + ":" + ("0" + (s%60)).slice(-2);
}
function fmtMin(t){ return t + ":00"; }
var UPLAYERS = {};
function buildUPlayer(el){
  var key = el.getAttribute("data-player");
  var R = RECIPES[key], TL = R.tl, T = TL.T;
  var order = [];
  TL.lanes.forEach(function(L, li){
    L.events.forEach(function(e){ order.push({li:li, e:e, L:L}); });
  });
  order.sort(function(a,b){
    var at = a.e.prep ? -1 : a.e.t, bt = b.e.prep ? -1 : b.e.t;
    return (at - bt) || (a.li - b.li);
  });
  var oiOf = {};
  order.forEach(function(o, oi){ oiOf[o.li + ":" + TL.lanes[o.li].events.indexOf(o.e)] = oi; });

  var legend = TL.lanes.map(function(L){
    return '<span class="uleg"><i style="background:' + L.color + '"></i>' + L.name + '</span>';
  }).join("");
  var lanesHtml = TL.lanes.map(function(L, li){
    var dots = L.events.map(function(e){
      var oi = oiOf[li + ":" + L.events.indexOf(e)];
      var cls = "udot" + (e.prep ? " prep" : "");
      var left = e.prep ? "calc(var(--pz)/2)" : "calc(var(--pz) + (100% - var(--pz))*" + (e.t/T) + ")";
      return '<button class="' + cls + '" data-oi="' + oi + '" style="left:' + left + ';background:' + L.color + ';" title="' + e.label.replace(/"/g,"&quot;") + '"></button>';
    }).join("");
    return '<div class="ulane"><div class="utrack"></div><div class="uprepzone" style="background:' + L.color + '26;"></div>' + dots + '</div>';
  }).join("");

  var rowsHtml = order.map(function(o, oi){
    var e = o.e;
    var t = e.prep ? "PREP" : fmtMin(e.t);
    return '<button class="urow" data-oi="' + oi + '"><span class="rdot" style="background:' + o.L.color + '"></span>' +
      '<span class="rtime">' + t + '</span><span class="rshort">' + e.short.replace(/</g, "&lt;") + '</span><span class="rcheck">✓</span></button>';
  }).join("");

  el.innerHTML =
    '<div class="ugrid"><div class="umain">' +
    '<div class="uscreen"><div class="uvis kb"></div><div class="shade"></div>' +
      '<div class="lane-chip"></div>' +
      '<div class="step-text"><div class="kicker"></div><p class="instr"></p><p class="isub"></p></div></div>' +
    '<div class="u-actions"><button class="tchip" style="display:none"></button>' +
      '<button class="udone">✓ Done</button><span class="uclock">0:00</span></div>' +
    (TL.prep ? '<div class="tl-prep">' + TL.prep + '</div>' : '') +
    '<div class="utimeline"><div class="ulegend">' + legend + '</div>' +
      '<div class="ulanes">' + lanesHtml + '<div class="ucursor"></div></div></div>' +
    '<div class="unext"></div>' +
    '<div class="ucontrols"><button class="cbtn back" aria-label="Previous">⏮</button>' +
      '<button class="cbtn play" aria-label="Play or pause">▶</button>' +
      '<button class="cbtn fwd" aria-label="Next">⏭</button>' +
      '<button class="treset">Reset</button></div>' +
    '<div class="hint">Dashed zone = prep (before the clock). Dots sit at their real minute marks — green rice, orange main. Tap a dot to jump; the clock follows.</div>' +
    '</div>' +
    '<div class="ulistwrap"><div class="ulisthead"><span>Steps</span><span class="uprog"></span></div>' +
      '<div class="ulist">' + rowsHtml + '</div></div>' +
    '</div>';

  var S = {cur:0, elapsed:0, running:false, t0:0, dones:{}, stepTimer:null};
  UPLAYERS[key] = S;
  var q = function(s){ return el.querySelector(s); };
  var dots = el.querySelectorAll(".udot");
  var listEl = q(".ulist");
  listEl.querySelectorAll(".urow").forEach(function(r){
    r.addEventListener("click", function(){ go(parseInt(r.getAttribute("data-oi"), 10)); });
  });

  function visHTML(vis, laneColor){
    if(vis === "prep"){
      if(R.prepImg) return '<div class="upic" style="background-image:url(' + R.prepImg + ')"></div>';
      return '<div class="uart">' + R.prepArt + '</div>';
    }
    if(vis === "hero") return '<div class="upic" style="background-image:url(' + R.img + ')"></div>';
    if(vis === "chelow") return '<div class="upic" style="background-image:url(' + R.chelowImg + ')"></div>';
    if(vis === "rice" || vis === "flame")
      return '<div class="uicon" style="background:linear-gradient(135deg,' + laneColor + ' 0%,#1c1a17 135%)">' + (vis === "rice" ? RICE_SVG : FLAME_SVG) + '</div>';
    if(vis.charAt(0) === "q")
      return '<div class="upic quad" style="background-image:url(' + R.stepsImg + ');background-position:' + POS[parseInt(vis.slice(1),10)] + '"></div>';
    return '<div class="uart">' + R.stepsArt[parseInt(vis.slice(1),10)] + '</div>';
  }

  function stopStepTimer(){
    if(!S.stepTimer) return;
    clearInterval(S.stepTimer.iv);
    S.stepTimer = null;
  }
  function startStepTimer(e){
    stopStepTimer();
    var tc = q(".tchip");
    var oi = S.cur;
    var total = Math.round(e.dur * 60), remain = total;
    tc.classList.add("running");
    tc.textContent = fmtClock(total*1000);
    S.stepTimer = {iv: setInterval(function(){
      remain--;
      if(remain <= 0){
        clearInterval(S.stepTimer.iv); S.stepTimer = null;
        tc.classList.remove("running"); tc.textContent = "✓";
        S.dones[oi] = 1;
        if(oi === S.cur) q(".udone").classList.add("marked");
        paintDots(); paintNext(); paintList();
        try{ if(navigator.vibrate) navigator.vibrate(200); }catch(err){}
      } else {
        tc.textContent = fmtClock(remain*1000);
      }
    }, 1000)};
  }

  function show(i){
    S.cur = Math.max(0, Math.min(order.length - 1, i));
    var o = order[S.cur], e = o.e;
    q(".uvis").innerHTML = visHTML(e.vis, o.L.color);
    var uv = q(".uvis");
    uv.classList.remove("kb"); void uv.offsetWidth; uv.classList.add("kb");
    var chip = q(".lane-chip");
    chip.textContent = o.L.name; chip.style.background = o.L.color;
    q(".kicker").textContent = (e.prep ? "PREP" : fmtMin(e.t)) + " · " + o.L.name.toUpperCase();
    q(".instr").textContent = e.short;
    var isub = q(".isub");
    if(e.detail){ isub.style.display = ""; isub.textContent = e.detail; }
    else { isub.style.display = "none"; }
    var txt = q(".step-text");
    txt.classList.remove("anim"); void txt.offsetWidth; txt.classList.add("anim");
    stopStepTimer();
    var tc = q(".tchip"), doneBtn = q(".udone");
    if(e.dur){
      tc.style.display = "";
      tc.classList.remove("running");
      tc.innerHTML = "▶ " + fmtClock(e.dur*60000);
      tc.onclick = function(ev){ ev.stopPropagation(); startStepTimer(e); };
    } else { tc.style.display = "none"; tc.onclick = null; }
    doneBtn.classList.toggle("marked", !!S.dones[S.cur]);
    paintDots(); paintNext(); paintList();
  }

  function paintList(){
    listEl.querySelectorAll(".urow").forEach(function(r){
      var oi = parseInt(r.getAttribute("data-oi"), 10);
      r.classList.toggle("active", oi === S.cur);
      r.classList.toggle("done", !!S.dones[oi]);
    });
    var n = 0, k;
    for(k in S.dones){ if(S.dones[k]) n++; }
    q(".uprog").textContent = n + "/" + order.length;
    var row = listEl.querySelector('.urow[data-oi="' + S.cur + '"]');
    if(row && row.scrollIntoView && listEl.scrollHeight > listEl.clientHeight + 4){
      row.scrollIntoView({block:"nearest"});
    }
  }

  function paintDots(){
    dots.forEach(function(d){
      var oi = parseInt(d.getAttribute("data-oi"), 10);
      d.classList.toggle("active", oi === S.cur);
      d.classList.toggle("done", !!S.dones[oi]);
    });
    var cursor = q(".ucursor");
    if(S.running || S.elapsed > 0){
      cursor.style.display = "block";
      var frac = Math.min(1, S.elapsed/(T*60000));
      cursor.style.left = "calc(var(--pz) + (100% - var(--pz))*" + frac + ")";
    } else cursor.style.display = "none";
    q(".uclock").textContent = fmtClock(S.elapsed);
  }

  function paintNext(){
    var nx = null;
    for(var i = S.cur + 1; i < order.length; i++){
      if(!S.dones[i]){ nx = order[i]; break; }
    }
    var unb = q(".unext");
    if(!nx){ unb.innerHTML = "<b>All done — serve it up.</b>"; return; }
    var when = "";
    if(S.running && nx.e.t != null){
      var r = nx.e.t*60000 - S.elapsed;
      when = " — " + (r <= 0 ? "now" : "in " + fmtClock(r));
    }
    unb.innerHTML = "Next: <b>" + nx.e.short + "</b>" + when;
  }

  function setPlayUI(){ q(".play").textContent = S.running ? "⏸" : "▶"; }
  S.syncPlayBtn = setPlayUI;
  function pauseClock(){ S.running = false; setPlayUI(); }
  function go(i){
    pauseClock();
    var o = order[Math.max(0, Math.min(order.length - 1, i))];
    S.elapsed = o.e.prep ? 0 : o.e.t*60000;
    show(i);
  }

  dots.forEach(function(d){
    d.addEventListener("click", function(){
      go(parseInt(d.getAttribute("data-oi"), 10));
    });
  });
  q(".back").addEventListener("click", function(){ go(S.cur - 1); });
  q(".fwd").addEventListener("click", function(){ go(S.cur + 1); });
  q(".udone").addEventListener("click", function(){
    if(S.dones[S.cur]) delete S.dones[S.cur]; else S.dones[S.cur] = 1;
    q(".udone").classList.toggle("marked", !!S.dones[S.cur]);
    paintDots(); paintNext(); paintList();
  });
  q(".play").addEventListener("click", function(){
    if(S.running){ pauseClock(); paintDots(); paintNext(); }
    else {
      Object.keys(UPLAYERS).forEach(function(k){ if(k !== key && UPLAYERS[k].running){ UPLAYERS[k].running = false; UPLAYERS[k].syncPlayBtn(); } });
      S.running = true;
      S.t0 = Date.now() - S.elapsed;
      setPlayUI();
    }
  });
  q(".treset").addEventListener("click", function(){
    pauseClock();
    S.elapsed = 0; S.t0 = 0; S.dones = {};
    stopStepTimer();
    show(0);
  });

  S.tick = function(){
    if(!S.running) return;
    S.elapsed = Date.now() - S.t0;
    var moved = false;
    while(S.cur + 1 < order.length){
      var nx = order[S.cur + 1];
      var nt = nx.e.prep ? -1 : nx.e.t;
      if(nt*60000 <= S.elapsed){ S.cur++; moved = true; }
      else break;
    }
    if(moved) show(S.cur); else { paintDots(); paintNext(); }
  };

  show(0);
}
document.querySelectorAll(".uplayer").forEach(buildUPlayer);
setInterval(function(){
  Object.keys(UPLAYERS).forEach(function(k){ UPLAYERS[k].tick(); });
}, 500);

/* ================= STICKY RECIPE BAR ================= */
var activeRecipe = null;
var sb = document.getElementById("stickybar");
function setActiveRecipe(key){
  if(activeRecipe === key) return;
  activeRecipe = key;
  var R = RECIPES[key];
  document.getElementById("sbThumb").src = R.img;
  document.getElementById("sbName").textContent = R.name;
  document.getElementById("sbServ").textContent = servingsOf(key);
}
document.getElementById("sbMinus").addEventListener("click", function(){ if(activeRecipe) setServings(activeRecipe, servingsOf(activeRecipe) - 1); });
document.getElementById("sbPlus").addEventListener("click", function(){ if(activeRecipe) setServings(activeRecipe, servingsOf(activeRecipe) + 1); });
var io = new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting) setActiveRecipe(e.target.getAttribute("data-r")); });
}, {rootMargin:"-30% 0px -60% 0px"});
document.querySelectorAll("section.recipe").forEach(function(s){ io.observe(s); });
window.addEventListener("scroll", function(){
  sb.classList.toggle("show", window.scrollY > 420 && !!activeRecipe);
}, {passive:true});

/* ================= SHOPPING LIST ================= */
var shopState = {};
try{ shopState = JSON.parse(localStorage.getItem("mp_shop_v1") || "{}"); }catch(e){}
var items = Array.prototype.slice.call(document.querySelectorAll(".item"));
/* per-page carts: a recipe page only lists its own ingredients; index lists all */
var PAGE_R = (function(){
  var secs = document.querySelectorAll("section.recipe");
  return secs.length === 1 ? secs[0].getAttribute("data-r") : "index";
})();
items = items.filter(function(it){
  if(PAGE_R === "index") return true;
  return (it.getAttribute("data-rs") || "").split(",").indexOf(PAGE_R) >= 0;
});
/* everything starts on the list; normalize old/neutral saved states */
items.forEach(function(it){
  var id = it.getAttribute("data-id");
  if(shopState[id] !== "have" && shopState[id] !== "need") shopState[id] = "need";
});
var paintCart = null; /* assigned by the cart panel below */
function saveShop(){ try{ localStorage.setItem("mp_shop_v1", JSON.stringify(shopState)); }catch(e){} }
function setShop(id, val){ shopState[id] = val; saveShop(); paintShop(); paintBuyButtons(); }
/* scaled quantity for a shopping item: the page recipe's share, or the
   consolidated value (scaled by its primary recipe) on the index page */
function shopQtyOf(it){
  var id = it.getAttribute("data-id"), spec = SHOP_QTY[id],
      key = (PAGE_R !== "index" && spec[PAGE_R]) ? PAGE_R : "index",
      e = spec[key],
      rkey = (key === "index") ? it.getAttribute("data-r") : key,
      f = servingsOf(rkey) / RECIPES[rkey].baseServ,
      q2 = e[0] * f, cnt = e[3] === 1,
      u = e[1] || "", up = e[2] || u,
      unit = (q2 < 1 + 1e-9) ? u : up;
  return { t: fmtQty(q2, cnt), unit: unit };
}
function shopNameHTML(it){
  var o = shopQtyOf(it), name = it.getAttribute("data-name"), note = it.getAttribute("data-note");
  var qpart = o.unit ? ", " + o.t + " " + o.unit : " × " + o.t;
  return "<b>" + name + qpart + "</b>" + (note ? ' <span class="inote">(' + note + ')</span>' : "");
}
function shopNameText(it){
  var o = shopQtyOf(it), name = it.getAttribute("data-name"), note = it.getAttribute("data-note");
  var qpart = o.unit ? ", " + o.t + " " + o.unit : " × " + o.t;
  return name + qpart + (note ? " (" + note + ")" : "");
}
function paintShop(){
  var need = 0;
  items.forEach(function(it){
    var id = it.getAttribute("data-id");
    var s = shopNeed(id) ? "need" : "have";
    it.querySelector(".have").classList.toggle("on", s === "have");
    it.querySelector(".need").classList.toggle("on", s === "need");
    if(s === "need") need++;
  });
  var c = document.getElementById("shopCount");
  if(c) c.innerHTML = "<b>"+need+"</b> to buy · <b>"+(items.length-need)+"</b> already have";
  if(paintCart) paintCart();
}
items.forEach(function(it){
  var id = it.getAttribute("data-id");
  it.querySelector(".have").addEventListener("click", function(){ setShop(id, "have"); });
  it.querySelector(".need").addEventListener("click", function(){ setShop(id, "need"); });
});
function copyList(btn){
  var lines = ["Please add the following items to my cart:", ""];
  var n = 0;
  items.forEach(function(it){
    var id = it.getAttribute("data-id");
    if(shopNeed(id)){ lines.push("• " + shopNameText(it)); n++; }
  });
  if(n === 0){ lines.push("(your cart is empty — everything is marked 'Have it')"); }
  var text = lines.join("\n");
  var label = btn.textContent;
  function done(){ btn.textContent = "Copied ✓"; setTimeout(function(){ btn.textContent = label; }, 1800); }
  function fallback(){
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); }catch(e){}
    document.body.removeChild(ta); done();
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done, fallback);
  } else fallback();
}
/* floating cart panel (bottom-right), two-way synced with the list above */
(function(){
  var fab = document.getElementById("cartFab");
  if(!fab) return;
  var btn = document.getElementById("cartBtn"), panel = document.getElementById("cartPanel"),
      list = document.getElementById("cartItems"), count = document.getElementById("cartCount"),
      total = document.getElementById("cartTotal");
  paintCart = function(){
    var n = 0;
    items.forEach(function(it){ if(shopNeed(it.getAttribute("data-id"))) n++; });
    count.textContent = n;
    count.style.display = n ? "flex" : "none";
    total.textContent = n + (n === 1 ? " item on the list" : " items on the list");
    list.innerHTML = "";
    items.forEach(function(it){
      var id = it.getAttribute("data-id"), need = shopNeed(id),
          tipEl = it.querySelector(".tip");
      var li = document.createElement("li"); if(!need) li.className = "off";
      var lab = document.createElement("label"),
          cb = document.createElement("input"),
          tx = document.createElement("span"); tx.className = "trow";
      cb.type = "checkbox"; cb.checked = need;
      cb.setAttribute("aria-label", shopNameText(it));
      cb.addEventListener("change", function(){ setShop(id, cb.checked ? "need" : "have"); });
      tx.innerHTML = shopNameHTML(it) +
        (tipEl ? "<small>" + tipEl.textContent + "</small>" : "");
      lab.appendChild(cb); lab.appendChild(tx); li.appendChild(lab);
      list.appendChild(li);
    });
  };
  function open(){ fab.classList.add("open"); btn.setAttribute("aria-expanded","true"); panel.setAttribute("aria-hidden","false"); }
  function close(){ fab.classList.remove("open"); btn.setAttribute("aria-expanded","false"); panel.setAttribute("aria-hidden","true"); }
  btn.addEventListener("click", function(){ fab.classList.contains("open") ? close() : open(); });
  document.getElementById("cartClose").addEventListener("click", close);
  document.getElementById("cartCopy").addEventListener("click", function(){ copyList(this); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") close(); });
  /* old "Shopping List" links now open the mini tab instead of jumping nowhere */
  document.querySelectorAll('a[href="#shopping"], a[href="index.html#shopping"]').forEach(function(a){
    a.addEventListener("click", function(e){ e.preventDefault(); open(); });
  });
})();
paintShop();
paintBuyButtons();
/* retractable left nav drawer */
(function(){
  var btn=document.getElementById("drawerBtn"), drawer=document.getElementById("drawer"),
      scrim=document.getElementById("scrim"), closeBtn=document.getElementById("drawerClose");
  if(!btn||!drawer) return;
  function open(){ drawer.classList.add("open"); scrim.classList.add("show");
    btn.setAttribute("aria-expanded","true"); drawer.setAttribute("aria-hidden","false"); }
  function close(){ drawer.classList.remove("open"); scrim.classList.remove("show");
    btn.setAttribute("aria-expanded","false"); drawer.setAttribute("aria-hidden","true"); }
  btn.addEventListener("click", function(){ drawer.classList.contains("open")?close():open(); });
  closeBtn.addEventListener("click", close);
  scrim.addEventListener("click", close);
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
  var links=drawer.querySelectorAll("a");
  links.forEach(function(a){ a.addEventListener("click", close); });
  var page=location.pathname.split("/").pop()||"index.html";
  links.forEach(function(a){ if(a.getAttribute("href")===page) a.classList.add("active"); });
})();
