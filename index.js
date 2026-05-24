#!/usr/bin/env node

const gradient = require('gradient-string');
const chalk = require('chalk');

const skyArt = `
                          \\     |     /
                           \\    |    /                    .-~~~~-.
                            \\   |   /                 .-~~        ~~-.
                       ──────( ☀ )──────              (   ~~clouds~~   )
                            /   |   \\                  \`-..,,______,,..-'
                           /    |    \\
                          /     |     \\
`;

const mountainArt = `
                                                                          ★
            /\\                                                           /\\
           /  \\                  /\\                                    /  \\
          /    \\                /  \\             /\\                   /    \\
         /  /\\  \\              / /\\ \\           /  \\                 /  /\\  \\
        /  /  \\  \\    /\\      / /  \\ \\    /\\   / /\\ \\    /\\        /  /  \\  \\
       /  / /\\ \\  \\  /  \\    / / /\\ \\ \\  /  \\ / /  \\ \\  /  \\      /  / /\\ \\  \\
      /__/_/__\\_\\__\\/____\\__/_/_/__\\_\\_\\/____\\/_/____\\_\\/____\\____/__/_/__\\_\\__\\
`;

const bannerArt = `
═══════════════════════════════════════════════════════════════════════════════
╔═════════════════════════════════════════════════════════════════════════════╗
║                                                                             ║
║       ██████╗  ██████╗  █████╗ ██████╗     ███████╗██████╗                  ║
║       ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗    ██╔════╝╚════██╗                 ║
║       ██████╔╝██║   ██║███████║██║  ██║    ███████╗ █████╔╝                 ║
║       ██╔══██╗██║   ██║██╔══██║██║  ██║    ╚════██║ ╚═══██╗                 ║
║       ██║  ██║╚██████╔╝██║  ██║██████╔╝    ███████║██████╔╝                 ║
║       ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚══════╝╚═════╝                  ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
═══════════════════════════════════════════════════════════════════════════════
`;

const roadArt = `
                              ______________________
                          ___/    ╔══════════════╗   \\___
                         /        ║   roadtrips  ║       \\
                        /_________╚══════════════╝________\\
                        |   .--.                    .--.   |
                        '──( O )──────────────────( O )──'
                            \`──'                    \`──'

  ═══════════════════════════════════════════════════════════════════════════
            ── ─ ─    ─ ─    R O A D   5 3    ─ ─    ─ ─ ──
  ═══════════════════════════════════════════════════════════════════════════
`;

const fjordArt = `
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

const roadBorder = '🚗 🛣️  ⛽ 🌅 🛣️  🚗 🌄 🛣️  ⛽ 🚗 🌅 🛣️ ';

const travelSentences = [
  "The best maps are folded by hand and creased by use.",
  "On Road 53, slow is its own kind of arrival.",
  "A fjord rewards patience the way a good book rewards rereading.",
  "Distance, in Norway, is measured in weather, not kilometers.",
  "Some mountains are climbed; others are simply met.",
  "Friluftsliv translates, but rarely transfers.",
  "The wind off the fjord has opinions; learn to listen.",
  "Tunnels feel like punctuation between paragraphs of light.",
  "A ferry crossing is a small ceremony pretending to be transit.",
  "The midnight sun teaches that endings are negotiable.",
  "Travel light enough that the country can change you.",
  "In Norway, 'almost there' is a unit of time, not space.",
  "A switchback is a sentence with a comma where you didn't expect one.",
  "The view pays back the climb at compound interest.",
  "Pack for weather, not for forecasts.",
  "The fjord doesn't perform; it persists.",
  "Old roads tell better stories than new ones.",
  "A cabin is a thesis defended in firewood and quiet.",
  "The most honest souvenir is a habit you took home.",
  "Norway invented patience and called it geography.",
  "A reindeer crossing is not a delay; it's a footnote.",
  "Trust the locals' directions — they include verbs the map doesn't.",
  "A scenic detour pays its own toll.",
  "On Road 53, the destination is where you finally exhale.",
  "The mountains have been here longer than your itinerary.",
  "A wool sweater is a working hypothesis about weather.",
  "The fjord rehearses the sky and never rushes the line.",
  "Some routes you choose; some choose you.",
  "Map apps end at the trailhead; everything good begins there.",
  "In a country this quiet, your own thoughts get a fair hearing.",
  "Bring a question; the road will eventually rephrase it.",
  "The best stretch of any road is the one you almost skipped.",
  "Geology, here, is the slow art form.",
  "Speed limits in Norway are also philosophical guidelines.",
  "A bend in the road is an editor improving your day.",
  "There is no rush on Road 53, only altitude.",
  "A waterfall is what happens when a mountain finally exhales.",
  "Norwegian rain is a punctuation mark, not a sentence.",
  "Drive as if the landscape is reading you back.",
  "A summit pause is not a stop; it's a margin note.",
  "Every fjord is a long answer to a short question.",
  "Modesty, here, is a feature of the terrain.",
  "The good roads forgive impatience exactly once.",
  "Listen for the silence inside the engine noise.",
  "Take the picture, but remember also to take the moment.",
  "The horizon recedes politely on Road 53.",
  "Bring a thermos; bring fewer plans.",
  "The sea here is older than rhetoric.",
  "Cross a high pass and the day reorganizes its priorities.",
  "Norway's quiet is not absence; it's attention.",
  "There is a clarity that only mountain air can underwrite.",
  "The road does not hurry, and arrives on time anyway.",
  "A small village teaches scale better than any city.",
  "Pay attention to what the wind keeps repeating.",
  "There are conversations you can only have at altitude.",
  "A long drive is a way of asking yourself a better question.",
  "The route is a draft; the journey is the revision.",
  "Forecast: scattered grace, with periods of clarity.",
  "The silences are itinerary, too.",
  "The road earns its reputation kilometer by kilometer.",
  "Some destinations are better verbs for 'home.'",
  "Sea level changes the meaning of every adjective you brought.",
  "The fjord lets you measure yourself against something fair.",
  "Stop where the light asks you to.",
  "A roadside thermos is a small, defensible philosophy.",
  "The most reliable compass points to what you cannot yet explain.",
  "Coastlines, like good arguments, reward circling back.",
  "A glacier is a long sentence the earth refuses to abridge.",
  "The road's grammar is curves; learn its punctuation.",
  "The country teaches you which questions deserve speed.",
];

const randomTravel = travelSentences[Math.floor(Math.random() * travelSentences.length)];

const skyGradient = gradient(['#fff1a8', '#ffb86b', '#ff6b35']);
const mountainGradient = gradient(['#e7f3ff', '#a8c5e8', '#5b7a99']);
const bannerGradient = gradient(['#ff6b35', '#ff3d7f', '#7a4cc8']);
const roadGradient = gradient(['#9ea3aa', '#d4d4d4', '#9ea3aa']);
const fjordGradient = gradient(['#2ec4b6', '#1d6f9c', '#103a63']);
const tagGradient = gradient(['#ffd700', '#ff8c00', '#ffd700']);

const message = `
${chalk.cyan(roadBorder)}
${skyGradient.multiline(skyArt)}${mountainGradient.multiline(mountainArt)}${bannerGradient.multiline(bannerArt)}${roadGradient.multiline(roadArt)}${fjordGradient.multiline(fjordArt)}

${chalk.italic.dim('  I\'ll be back soon.')}
${chalk.italic.dim('  Don\'t forget to check ')}${chalk.hex('#40E0D0').underline.italic('https://pageai.pro')}${chalk.italic.dim(' so I can cover my expensive ☕ coffee addiction.')}

${chalk.italic.dim('  Notes from a road in western Norway.')}

${tagGradient(`  ✦  ${randomTravel}  ✦`)}

${chalk.cyan(roadBorder)}
`;

console.log(message);
