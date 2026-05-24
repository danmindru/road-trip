#!/usr/bin/env node

const gradient = require('gradient-string');
const chalk = require('chalk');

const roadTripArt = `
                    /\\       /\\
                   /  \\     /  \\
                  /    \\   /    \\
                 /  🏔️  \\ /  🏔️  \\
                /        X        \\
               /       /   \\       \\
              /       /     \\       \\
             /_______/       \\_______\\
    ═══════════════════════════════════════
         ╔═══════════════════════════╗
         ║      R O A D   5 3      ║
         ║    —— Norway ——>         ║
         ╚═══════════════════════════╝
    ═══════════════════════════════════════
              ___________________
             |  🚗  ·  ·  ·  ·  |
             |___|_|_________|_|_|
                   O       O
`;

const roadBorder = '🚗 🛣️ ⛽ 🌅 🛣️ 🚗 🌄 🛣️ ⛽ 🚗 🌅 🛣️';

const travelSentences = [
  "May your fjords be deep and your detours be scenic!",
  "You're navigating life like a local on Road 53!",
  "Keep calm and cruise the Norwegian coast!",
  "Some roads you travel; Road 53 you remember!",
  "You're the scenic overlook everyone pulls over for!",
  "May your tank be full and your playlist be impeccable!",
  "You're more reliable than a well-marked highway sign!",
  "Here's to miles of open road and zero toll booth anxiety!",
  "You make every rest stop feel like a destination!",
  "May your GPS never say 'recalculating' on Road 53!",
  "You're the kind of traveler who finds beauty in a hairpin turn!",
  "Wishing you tailwinds, clear skies, and empty lanes ahead!",
  "You're smoother than freshly paved asphalt!",
  "May your road trip snacks never run out before the border!",
  "You're giving main character energy on a coastal drive!",
  "Here's to chasing midnight sun, not deadlines!",
  "You could make even a road closure feel like an adventure!",
  "May your cabin views always exceed the brochure!",
  "You're the co-pilot everyone wants on a long haul!",
  "Wishing you ferries that arrive on time and views that never quit!",
  "You're more uplifting than the first glimpse of a fjord!",
  "May your wool layers be warm and your coffee be strong!",
  "You spread wanderlust faster than a viral travel photo!",
  "Here's to taking the scenic route and meaning it!",
  "You're the reason people believe in slow travel!",
  "May your Road 53 journey have more wow than wow-moments!",
  "You're sharper than a switchback at golden hour!",
  "Wishing you tunnels that feel short and bridges that feel epic!",
  "You + open road = unstoppable adventure machine!",
  "May your dash cam capture nothing but glory!",
  "You're fluent in both Norwegian hello and universal awe!",
  "Here's to building memories one kilometer at a time!",
  "Your vibe is immaculate and so is your sense of direction!",
  "May your travel plans always include an extra day!",
  "You're proof that the best routes aren't always the fastest!",
  "Wishing you endless horizons and infinite pull-off points!",
  "You make every mile marker feel like a milestone!",
  "May your roadside waffles taste like pure happiness!",
  "You're the view worth stopping for!",
  "Here's to driving into sunsets, not away from problems!",
  "You're more essential than a good pair of driving shoes!",
  "May your Road 53 stories scale infinitely at dinner parties!",
  "You're the highlight reel everyone's been waiting to hear!",
  "Wishing you a journey with clean air and a cleaner conscience!",
  "You and the open road make the ultimate duo!",
  "May your curves be gentle and your vistas be dramatic!",
  "You're cruising so smoothly, even the trolls are impressed!",
  "Wishing you a route where every turn reveals something new!",
  "You're the human compass that makes any road trip shine!",
  "May your context window always fit the entire coastline!",
  "You're giving 'discovered a hidden gem' energy!",
  "Here's to vibe driving your way to the next fjord!",
  "Your sense of adventure is basically a navigation system!",
  "May your itinerary never hallucinate a shortcut through a mountain!",
  "You're so good at road tripping, you could teach a masterclass!",
  "Wishing you rest areas that read your mind!",
  "You + Road 53 = unstoppable scenic shipping!",
  "May your co-pilot always suggest the right turnoff!",
  "You're fluent in both silence and spectacular views!",
  "Here's to exploring Norway one breathtaking bend at a time!",
  "Your road trip aura is immaculate!",
  "May your travel companion always understand the assignment!",
  "You're proof that the future of travel is intentional!",
  "Wishing you endless inspiration and infinite viewpoints!",
  "May your tolls be cheap and your memories be priceless!",
  "You're more precious than the last parking spot at a lookout!",
  "Here's to async-awaiting every summit on the horizon!",
  "You light up the dashboard like a northern summer sky!",
  "May your Road 53 playlist never repeat a single skip!",
  "You're cooler than the breeze off a Norwegian lake!",
  "Wishing you logs full of 'best day ever' entries!",
  "You're the reason people buy those little car stickers!",
  "May your holiday queries return nothing but open road!",
  "You've got more charm than a fishing village at dawn!",
];

const randomTravel = travelSentences[Math.floor(Math.random() * travelSentences.length)];

const sunsetGradient = gradient(['#ff6b35', '#f7c59f', '#2ec4b6']);
const skyGradient = gradient(['#4a90d9', '#87ceeb', '#ffd700']);
const roadGradient = gradient(['#ffd700', '#ff8c00', '#ffd700']);

const message = `
${chalk.cyan(roadBorder)}

${sunsetGradient(roadTripArt)}
${skyGradient('✨ WELCOME TO ROAD 53 — NORWAY AWAITS! ✨')}

${chalk.green('May your journey be filled with fjords, fresh air, and open road! 🛣️')}

${roadGradient(randomTravel)}

${chalk.cyan(roadBorder)}
`;

console.log(message);
