const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");
const dataPath = path.join(root, "data", "content.js");

const dataText = fs.readFileSync(dataPath, "utf8");
const indexHtml = fs.readFileSync(indexPath, "utf8");
const siteUrl = (process.env.SITE_URL || "https://gameori.com").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const context = {};
vm.runInNewContext(dataText, context);

const { games, guideMeta } = context.GameOriContent;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteUrl(relativePath) {
  return `${siteUrl}/${relativePath.replace(/^\/+/, "")}`;
}

function gameImagePath(id) {
  const realImages = {
    blackmyth: "assets/real/games/blackmyth.jpg",
    genshin: "assets/real/games/genshin.jpg",
    hsr: "assets/real/games/hsr.png",
    zzz: "assets/real/games/zzz.jpg",
    wuwa: "assets/real/games/wuwa.jpg",
    arknights: "assets/real/games/arknights.svg",
    naraka: "assets/real/games/naraka.jpg",
    hok: "assets/real/games/hok.jpg",
    reverse1999: "assets/real/games/reverse1999.jpg",
    gfl2: "assets/real/games/gfl2.jpg",
    deltaforce: "assets/real/games/deltaforce.jpg",
    pathnowhere: "assets/real/games/pathnowhere.jpg",
    wherewinds: "assets/real/games/wherewinds.jpg",
    infinitynikki: "assets/real/games/infinitynikki.jpg",
    oncehuman: "assets/real/games/oncehuman.jpg",
    marvelrivals: "assets/real/games/marvelrivals.jpg",
    mechabreak: "assets/real/games/mechabreak.jpg",
  };
  return realImages[id] || `assets/games/${id}.svg`;
}

function guideUpdatedAt(guide) {
  if (guide.updated) return guide.updated;
  const index = guideMeta.findIndex((item) => item.id === guide.id);
  const daysAgo = Math.max(0, guideMeta.length - index - 1);
  return new Date(Date.UTC(2026, 4, 23 - daysAgo)).toISOString().slice(0, 10);
}

function guideAppliesTo(guide, game) {
  if (guide.type === "meta") return `${game.cn} 当前赛季 / 版本目标`;
  if (["oncehuman", "deltaforce"].includes(guide.game)) return `${game.cn} 当前赛季常规循环`;
  if (["hok", "marvelrivals", "naraka"].includes(guide.game)) return `${game.cn} 当前匹配与排位环境`;
  return `${game.cn} 当前公开版本常规机制`;
}

function guideFaq(guide, game) {
  return [
    {
      question: `这篇「${guide.title}」应该什么时候看？`,
      answer: `当你已经进入《${game.cn}》并开始接触「${guide.resources[0]}」相关系统时就可以看，卡关后再看也能作为复盘清单。`,
    },
    {
      question: "需要完全照抄路线吗？",
      answer: "不需要。攻略给的是优先级和判断顺序，具体角色、装备和材料投入要根据你的账号练度调整。",
    },
    {
      question: "如果资源不够，先补哪一项？",
      answer: `先确认「${guide.resources[0]}」和「${guide.resources[1] || guide.resources[0]}」是否满足最低需求，再考虑追求更高伤害或更快路线。`,
    },
  ];
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function seoTags({ title, description, canonicalPath, imagePath, schema, ogType = "article" }) {
  const canonical = absoluteUrl(canonicalPath);
  const image = absoluteUrl(imagePath);
  return `
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function routeHtml(title, description, options) {
  return indexHtml
    .replace("<title>GameOri | Chinese Game Guides</title>", `<title>${title}</title>`)
    .replace(
      'content="GameOri is an origin-aware guide hub for Chinese games, combining source-tracked guides, Eastern game context, beginner routes, and multilingual navigation."',
      `content="${description.replace(/"/g, "&quot;")}"`,
    )
    .replace("</title>", '</title>\n    <base href="../../" />')
    .replace("</head>", `${seoTags({ title, description, ...options })}\n  </head>`);
}

function writePage(relativePath, html) {
  const dir = path.join(root, relativePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const sitemapUrls = ["index.html", "submit/"];

Object.entries(games).forEach(([id, game]) => {
  const guides = guideMeta.filter((guide) => guide.game === id);
  const relativePath = path.join("games", id);
  sitemapUrls.push(`${relativePath}/`);
  writePage(
    relativePath,
    routeHtml(
      `${game.name} 攻略专题 | GameOri`,
      `${game.cn} ${game.name} 攻略专题，包含入门、养成、战斗、地图和资源路线。`,
      {
        canonicalPath: `${relativePath}/`,
        imagePath: gameImagePath(id),
        ogType: "website",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${game.name} 攻略专题`,
            description: `${game.cn} ${game.name} 攻略专题，包含入门、养成、战斗、地图和资源路线。`,
            url: absoluteUrl(`${relativePath}/`),
            about: {
              "@type": "VideoGame",
              name: game.name,
              alternateName: game.cn,
              genre: game.genre,
              author: game.studio,
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: guides.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`guides/${guide.id}/`),
                name: guide.title,
              })),
            },
            hasPart: guides.map((guide) => ({
              "@type": "Article",
              headline: guide.title,
              url: absoluteUrl(`guides/${guide.id}/`),
            })),
          },
          breadcrumbSchema([
            { name: "GameOri", path: "index.html" },
            { name: `${game.name} 攻略专题`, path: `${relativePath}/` },
          ]),
        ],
      },
    ),
  );
});

guideMeta.forEach((guide) => {
  const game = games[guide.game];
  const relativePath = path.join("guides", guide.id);
  sitemapUrls.push(`${relativePath}/`);
  writePage(
    relativePath,
    routeHtml(`${guide.title} | ${game.name} 攻略`, `${game.cn} ${guide.title}：${guide.summary}`, {
      canonicalPath: `${relativePath}/`,
      imagePath: gameImagePath(guide.game),
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: `${game.cn} ${guide.title}：${guide.summary}`,
          image: absoluteUrl(gameImagePath(guide.game)),
          url: absoluteUrl(`${relativePath}/`),
          dateModified: guideUpdatedAt(guide),
          inLanguage: "zh-CN",
          articleSection: guide.type,
          about: [
            {
              "@type": "VideoGame",
              name: game.name,
              alternateName: game.cn,
              genre: game.genre,
            },
            {
              "@type": "Thing",
              name: guideAppliesTo(guide, game),
            },
          ],
          isPartOf: {
            "@type": "CollectionPage",
            name: `${game.name} 攻略专题`,
            url: absoluteUrl(`games/${guide.game}/`),
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guideFaq(guide, game).map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
        breadcrumbSchema([
          { name: "GameOri", path: "index.html" },
          { name: `${game.name} 攻略专题`, path: `games/${guide.game}/` },
          { name: guide.title, path: `${relativePath}/` },
        ]),
      ],
    }),
  );
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (item) => `  <url>
    <loc>${escapeHtml(absoluteUrl(item))}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join(root, "robots.txt"),
  `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`,
);

console.log(`Generated ${Object.keys(games).length} game pages and ${guideMeta.length} guide pages.`);
