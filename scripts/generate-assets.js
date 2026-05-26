const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataText = fs.readFileSync(path.join(root, "data", "content.js"), "utf8");

const context = {};
vm.runInNewContext(dataText, context);

const { games, guideMeta } = context.GameOriContent;
const gameDir = path.join(root, "assets", "games");
const guideDir = path.join(root, "assets", "guides");
fs.mkdirSync(gameDir, { recursive: true });
fs.mkdirSync(guideDir, { recursive: true });

const palettes = {
  blackmyth: ["#151515", "#b83624", "#d49b37", "#fffaf0"],
  genshin: ["#0d4b40", "#11795f", "#d49b37", "#fffaf0"],
  hsr: ["#151515", "#273353", "#d49b37", "#fffaf0"],
  zzz: ["#151515", "#3b3b30", "#d49b37", "#fffaf0"],
  wuwa: ["#151515", "#32364a", "#11795f", "#d49b37"],
  arknights: ["#151515", "#4a4742", "#0d4b40", "#fffaf0"],
  naraka: ["#151515", "#31413e", "#b83624", "#d49b37"],
  hok: ["#10223a", "#11795f", "#b83624", "#d49b37"],
  reverse1999: ["#271b2f", "#0d4b40", "#b83624", "#fffaf0"],
  gfl2: ["#161816", "#3d4938", "#11795f", "#d49b37"],
  deltaforce: ["#171717", "#394130", "#11795f", "#d49b37"],
  pathnowhere: ["#151515", "#2f3344", "#b83624", "#0d4b40"],
};

const typeIcon = {
  beginner: "START",
  build: "BUILD",
  combat: "FIGHT",
  boss: "BOSS",
  farming: "FARM",
  map: "MAP",
  meta: "META",
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function short(value, length) {
  return value.length > length ? `${value.slice(0, length - 1)}…` : value;
}

function gameSvg(id, game) {
  const [ink, mid, accent, paper] = palettes[id] || palettes.blackmyth;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(game.name)} guide cover</title>
  <desc id="desc">Original editorial cover image for ${escapeXml(game.cn)}.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${ink}"/>
      <stop offset="52%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <pattern id="grid" width="54" height="54" patternUnits="userSpaceOnUse">
      <path d="M54 0H0V54" fill="none" stroke="${paper}" stroke-opacity=".08"/>
    </pattern>
  </defs>
  <rect width="1200" height="720" fill="url(#bg)"/>
  <rect width="1200" height="720" fill="url(#grid)"/>
  <circle cx="890" cy="190" r="150" fill="${paper}" opacity=".12"/>
  <circle cx="985" cy="485" r="235" fill="${ink}" opacity=".2"/>
  <path d="M115 540 C260 330 410 620 575 350 S925 250 1084 108" fill="none" stroke="${paper}" stroke-opacity=".35" stroke-width="8"/>
  <g fill="none" stroke="${paper}" stroke-width="2" opacity=".42">
    <rect x="88" y="82" width="1024" height="556" rx="18"/>
    <path d="M88 485H1112M330 82V638M778 82V638"/>
  </g>
  <text x="108" y="170" fill="${paper}" font-family="Georgia, 'Songti SC', serif" font-size="64" font-weight="800">${escapeXml(short(game.name, 28))}</text>
  <text x="112" y="230" fill="${paper}" opacity=".78" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="30">${escapeXml(game.cn)} · ${escapeXml(game.genre)}</text>
  <text x="112" y="586" fill="${paper}" opacity=".86" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="24" font-weight="800">GAMEORI GUIDE FILE</text>
  <text x="915" y="590" fill="${paper}" opacity=".72" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="22">${escapeXml(game.studio)}</text>
</svg>`;
}

function guideSvg(guide) {
  const game = games[guide.game];
  const [ink, mid, accent, paper] = palettes[guide.game] || palettes.blackmyth;
  const label = typeIcon[guide.type] || "GUIDE";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="560" viewBox="0 0 960 560" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(guide.title)}</title>
  <desc id="desc">Original guide illustration for ${escapeXml(game.name)}.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${ink}"/>
      <stop offset="58%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="${paper}" opacity=".11"/>
    </pattern>
  </defs>
  <rect width="960" height="560" fill="url(#bg)"/>
  <rect width="960" height="560" fill="url(#dots)"/>
  <rect x="54" y="52" width="852" height="456" rx="18" fill="${paper}" opacity=".08" stroke="${paper}" stroke-opacity=".28"/>
  <path d="M106 390 L248 282 L388 328 L520 188 L674 238 L850 122" fill="none" stroke="${paper}" stroke-opacity=".55" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <g fill="${paper}" opacity=".82">
    <circle cx="106" cy="390" r="13"/>
    <circle cx="248" cy="282" r="13"/>
    <circle cx="388" cy="328" r="13"/>
    <circle cx="520" cy="188" r="13"/>
    <circle cx="674" cy="238" r="13"/>
    <circle cx="850" cy="122" r="13"/>
  </g>
  <rect x="84" y="82" width="158" height="44" rx="22" fill="${accent}" opacity=".95"/>
  <text x="110" y="112" fill="${paper}" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="22" font-weight="800">${label}</text>
  <text x="84" y="180" fill="${paper}" font-family="Georgia, 'Songti SC', serif" font-size="42" font-weight="800">${escapeXml(short(guide.title, 22))}</text>
  <text x="86" y="232" fill="${paper}" opacity=".76" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="24">${escapeXml(short(game.name, 26))}</text>
  <text x="86" y="464" fill="${paper}" opacity=".78" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="22">${guide.minutes} min · difficulty ${guide.difficulty}/3</text>
  <rect x="710" y="370" width="138" height="138" rx="18" fill="${ink}" opacity=".28" stroke="${paper}" stroke-opacity=".28"/>
  <text x="748" y="452" fill="${paper}" font-family="'Avenir Next', 'Segoe UI', sans-serif" font-size="48" font-weight="800">0${guide.difficulty}</text>
</svg>`;
}

Object.entries(games).forEach(([id, game]) => {
  fs.writeFileSync(path.join(gameDir, `${id}.svg`), gameSvg(id, game));
});

guideMeta.forEach((guide) => {
  fs.writeFileSync(path.join(guideDir, `${guide.id}.svg`), guideSvg(guide));
});

console.log(`Generated ${Object.keys(games).length} game images and ${guideMeta.length} guide images.`);
