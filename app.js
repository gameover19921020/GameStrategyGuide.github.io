const languages = [
  ["zh", "中文"],
  ["en", "English"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["pt", "Português"],
];

const copy = {
  zh: {
    brand: "龙门攻略库",
    brandSub: "中国游戏全球攻略索引",
    navGuides: "攻略",
    navGames: "游戏",
    navSubmit: "投稿",
    language: "语言",
    eyebrow: "多语言中国游戏攻略站",
    headline: "让全球玩家读懂中国游戏",
    lead: "按游戏专题组织入门、养成、战斗、资源、Boss 和版本攻略，让海外玩家能从一款游戏进入完整攻略系列。",
    metricGuides: "真实攻略",
    metricLangs: "界面语言",
    metricGames: "中国游戏",
    searchLabel: "搜索攻略",
    searchPlaceholder: "搜游戏、角色、Boss、资源...",
    gameFilter: "游戏",
    typeFilter: "攻略类型",
    all: "全部",
    submitTitle: "缺少你的游戏？",
    submitText: "提交游戏、攻略主题或资料来源，编辑审核后加入专题库。",
    submitButton: "提交攻略线索",
    boardEyebrow: "游戏目录",
    boardTitle: "选择游戏进入专题攻略",
    sortLabel: "排序",
    sortUpdated: "最近更新",
    sortDifficulty: "适合新手",
    sortPopular: "热度最高",
    emptyState: "没有找到匹配的游戏或攻略。",
    gamesEyebrow: "游戏索引",
    gamesTitle: "游戏专题",
    openGame: "进入专题",
    backCatalog: "返回游戏库",
    guideCount: "篇攻略",
    seriesCount: "个系列",
    gamePageLabel: "游戏专题",
    featuredSeries: "专题路线",
    allSeries: "全部系列攻略",
    catalogMeta: "攻略",
    openGuide: "查看路线",
    updated: "更新",
    difficulty: "难度",
    minutes: "分钟",
    detailGoal: "目标",
    detailSteps: "执行路线",
    detailResources: "关键资源",
    detailSources: "资料来源",
    toast: "投稿入口已预留：下一步可接入表单、审核流和翻译队列。",
    types: {
      beginner: "入门",
      build: "构筑",
      boss: "Boss",
      combat: "战斗",
      farming: "刷取",
      map: "地图",
      meta: "版本",
    },
  },
  en: {
    brand: "Longmen Guides",
    brandSub: "Global index for Chinese games",
    navGuides: "Guides",
    navGames: "Games",
    navSubmit: "Submit",
    language: "Language",
    eyebrow: "Multilingual Chinese game guide hub",
    headline: "Understand Chinese games, anywhere",
    lead: "Browse Chinese games by dedicated pages with beginner, progression, combat, resource, boss, and patch guide series.",
    metricGuides: "Real guides",
    metricLangs: "UI languages",
    metricGames: "Chinese games",
    searchLabel: "Search guides",
    searchPlaceholder: "Search game, hero, boss, resource...",
    gameFilter: "Game",
    typeFilter: "Guide type",
    all: "All",
    submitTitle: "Missing a game?",
    submitText: "Submit a game, guide topic, or source for editorial review.",
    submitButton: "Submit a lead",
    boardEyebrow: "Game directory",
    boardTitle: "Choose a game to enter its guide page",
    sortLabel: "Sort",
    sortUpdated: "Recently updated",
    sortDifficulty: "Beginner friendly",
    sortPopular: "Most popular",
    emptyState: "No matching games or guides found.",
    gamesEyebrow: "Game index",
    gamesTitle: "Game page",
    openGame: "Open page",
    backCatalog: "Back to library",
    guideCount: "guides",
    seriesCount: "series",
    gamePageLabel: "Game page",
    featuredSeries: "Guide roadmap",
    allSeries: "All guide series",
    catalogMeta: "guides",
    openGuide: "View route",
    updated: "Updated",
    difficulty: "Difficulty",
    minutes: "min",
    detailGoal: "Goal",
    detailSteps: "Route",
    detailResources: "Key resources",
    detailSources: "Sources",
    toast: "Submission entry reserved: next step can add forms, moderation, and translation queues.",
    types: {
      beginner: "Beginner",
      build: "Build",
      boss: "Boss",
      combat: "Combat",
      farming: "Farming",
      map: "Map",
      meta: "Meta",
    },
  },
  ja: {
    brand: "龍門攻略庫",
    brandSub: "中国ゲームのグローバル索引",
    navGuides: "攻略",
    navGames: "ゲーム",
    navSubmit: "投稿",
    language: "言語",
    eyebrow: "中国ゲーム攻略ハブ",
    headline: "中国ゲームを世界中のプレイヤーへ",
    lead: "ゲーム別ページから入門、育成、戦闘、資源、ボス、版本攻略をまとめて確認できます。",
    metricGuides: "攻略記事",
    metricLangs: "UI 言語",
    metricGames: "中国ゲーム",
    searchLabel: "攻略検索",
    searchPlaceholder: "ゲーム、キャラ、ボス、素材を検索...",
    gameFilter: "ゲーム",
    typeFilter: "攻略タイプ",
    all: "すべて",
    submitTitle: "ゲームが足りませんか？",
    submitText: "ゲーム、攻略テーマ、資料ソースを投稿できます。",
    submitButton: "攻略候補を送る",
    boardEyebrow: "ライブ目録",
    boardTitle: "注目攻略",
    sortLabel: "並び替え",
    sortUpdated: "最近更新",
    sortDifficulty: "初心者向け",
    sortPopular: "人気順",
    emptyState: "一致する攻略がありません。",
    gamesEyebrow: "ゲーム索引",
    gamesTitle: "まず世界需要の高い中国ゲームをカバー",
    openGuide: "ルートを見る",
    updated: "更新",
    difficulty: "難度",
    minutes: "分",
    detailGoal: "目標",
    detailSteps: "手順",
    detailResources: "重要資源",
    detailSources: "資料來源",
    toast: "投稿導線を用意しました。次はフォーム、審査、翻訳キューを接続できます。",
    types: { beginner: "入門", build: "ビルド", boss: "ボス", combat: "戦闘", farming: "周回", map: "地図", meta: "メタ" },
  },
  ko: {
    brand: "용문 공략고",
    brandSub: "중국 게임 글로벌 공략 색인",
    navGuides: "공략",
    navGames: "게임",
    navSubmit: "제보",
    language: "언어",
    eyebrow: "중국 게임 공략 허브",
    headline: "중국 게임을 전 세계 플레이어에게",
    lead: "게임별 페이지에서 입문, 육성, 전투, 자원, 보스, 버전 공략을 확인합니다.",
    metricGuides: "공략 문서",
    metricLangs: "UI 언어",
    metricGames: "중국 게임",
    searchLabel: "공략 검색",
    searchPlaceholder: "게임, 캐릭터, 보스, 재료 검색...",
    gameFilter: "게임",
    typeFilter: "공략 유형",
    all: "전체",
    submitTitle: "빠진 게임이 있나요?",
    submitText: "게임, 공략 주제, 자료 출처를 제보할 수 있습니다.",
    submitButton: "공략 제보",
    boardEyebrow: "실시간 목록",
    boardTitle: "추천 공략",
    sortLabel: "정렬",
    sortUpdated: "최근 업데이트",
    sortDifficulty: "초보자 추천",
    sortPopular: "인기순",
    emptyState: "일치하는 공략이 없습니다.",
    gamesEyebrow: "게임 색인",
    gamesTitle: "글로벌 수요가 큰 중국 게임부터 시작",
    openGuide: "루트 보기",
    updated: "업데이트",
    difficulty: "난이도",
    minutes: "분",
    detailGoal: "목표",
    detailSteps: "진행 루트",
    detailResources: "핵심 자원",
    detailSources: "출처",
    toast: "제보 입구를 준비했습니다. 다음 단계에서 폼, 검수, 번역 큐를 연결할 수 있습니다.",
    types: { beginner: "입문", build: "빌드", boss: "보스", combat: "전투", farming: "파밍", map: "지도", meta: "메타" },
  },
  es: {
    brand: "Guías Longmen",
    brandSub: "Índice global de juegos chinos",
    navGuides: "Guías",
    navGames: "Juegos",
    navSubmit: "Enviar",
    language: "Idioma",
    eyebrow: "Hub de guías de juegos chinos",
    headline: "Juegos chinos, claros para todo el mundo",
    lead: "Páginas por juego con guías de inicio, progresión, combate, recursos, jefes y versiones.",
    metricGuides: "Guías",
    metricLangs: "Idiomas UI",
    metricGames: "Juegos chinos",
    searchLabel: "Buscar guías",
    searchPlaceholder: "Busca juego, héroe, jefe, recurso...",
    gameFilter: "Juego",
    typeFilter: "Tipo",
    all: "Todo",
    submitTitle: "¿Falta un juego?",
    submitText: "Envía juegos, temas de guía o fuentes para revisión editorial.",
    submitButton: "Enviar pista",
    boardEyebrow: "Directorio vivo",
    boardTitle: "Guías destacadas",
    sortLabel: "Orden",
    sortUpdated: "Actualizadas",
    sortDifficulty: "Para principiantes",
    sortPopular: "Más populares",
    emptyState: "No se encontraron guías.",
    gamesEyebrow: "Índice de juegos",
    gamesTitle: "Primero los juegos chinos con demanda global",
    openGuide: "Ver ruta",
    updated: "Actualizado",
    difficulty: "Dificultad",
    minutes: "min",
    detailGoal: "Objetivo",
    detailSteps: "Ruta",
    detailResources: "Recursos clave",
    detailSources: "Fuentes",
    toast: "Entrada de envíos reservada: después se pueden añadir formularios, revisión y traducción.",
    types: { beginner: "Inicio", build: "Build", boss: "Jefe", combat: "Combate", farming: "Farmeo", map: "Mapa", meta: "Meta" },
  },
  fr: {
    brand: "Guides Longmen",
    brandSub: "Index mondial des jeux chinois",
    navGuides: "Guides",
    navGames: "Jeux",
    navSubmit: "Proposer",
    language: "Langue",
    eyebrow: "Hub de guides de jeux chinois",
    headline: "Rendre les jeux chinois lisibles partout",
    lead: "Des pages par jeu avec guides débutant, progression, combat, ressources, boss et versions.",
    metricGuides: "Guides",
    metricLangs: "Langues UI",
    metricGames: "Jeux chinois",
    searchLabel: "Rechercher",
    searchPlaceholder: "Jeu, héros, boss, ressource...",
    gameFilter: "Jeu",
    typeFilter: "Type",
    all: "Tout",
    submitTitle: "Un jeu manque ?",
    submitText: "Proposez des jeux, sujets de guide ou sources pour revue éditoriale.",
    submitButton: "Proposer une piste",
    boardEyebrow: "Répertoire vivant",
    boardTitle: "Guides sélectionnés",
    sortLabel: "Tri",
    sortUpdated: "Mis à jour",
    sortDifficulty: "Débutants",
    sortPopular: "Populaires",
    emptyState: "Aucun guide trouvé.",
    gamesEyebrow: "Index jeux",
    gamesTitle: "Commencer par les jeux chinois déjà demandés",
    openGuide: "Voir le parcours",
    updated: "Maj",
    difficulty: "Difficulté",
    minutes: "min",
    detailGoal: "Objectif",
    detailSteps: "Parcours",
    detailResources: "Ressources clés",
    detailSources: "Sources",
    toast: "Entrée de proposition prête : formulaires, revue et traduction pourront suivre.",
    types: { beginner: "Débutant", build: "Build", boss: "Boss", combat: "Combat", farming: "Farming", map: "Carte", meta: "Meta" },
  },
  de: {
    brand: "Longmen Guides",
    brandSub: "Globaler Index für chinesische Spiele",
    navGuides: "Guides",
    navGames: "Spiele",
    navSubmit: "Einreichen",
    language: "Sprache",
    eyebrow: "Hub für chinesische Spielguides",
    headline: "Chinesische Spiele weltweit verständlich machen",
    lead: "Spielseiten mit Anfänger-, Fortschritts-, Kampf-, Ressourcen-, Boss- und Patch-Guides.",
    metricGuides: "Guides",
    metricLangs: "UI-Sprachen",
    metricGames: "Chinesische Spiele",
    searchLabel: "Guides suchen",
    searchPlaceholder: "Spiel, Held, Boss, Ressource...",
    gameFilter: "Spiel",
    typeFilter: "Guide-Typ",
    all: "Alle",
    submitTitle: "Fehlt ein Spiel?",
    submitText: "Reiche Spiele, Guide-Themen oder Quellen zur redaktionellen Prüfung ein.",
    submitButton: "Hinweis senden",
    boardEyebrow: "Live-Verzeichnis",
    boardTitle: "Ausgewählte Guides",
    sortLabel: "Sortieren",
    sortUpdated: "Aktualisiert",
    sortDifficulty: "Einsteiger",
    sortPopular: "Beliebt",
    emptyState: "Keine passenden Guides gefunden.",
    gamesEyebrow: "Spielindex",
    gamesTitle: "Zuerst chinesische Spiele mit globaler Nachfrage",
    openGuide: "Route ansehen",
    updated: "Update",
    difficulty: "Schwierigkeit",
    minutes: "Min",
    detailGoal: "Ziel",
    detailSteps: "Route",
    detailResources: "Wichtige Ressourcen",
    detailSources: "Quellen",
    toast: "Einreichung vorbereitet: Formulare, Review und Übersetzung können folgen.",
    types: { beginner: "Start", build: "Build", boss: "Boss", combat: "Kampf", farming: "Farming", map: "Karte", meta: "Meta" },
  },
  pt: {
    brand: "Guias Longmen",
    brandSub: "Índice global de jogos chineses",
    navGuides: "Guias",
    navGames: "Jogos",
    navSubmit: "Enviar",
    language: "Idioma",
    eyebrow: "Hub de guias de jogos chineses",
    headline: "Jogos chineses claros para o mundo",
    lead: "Páginas por jogo com guias de início, progressão, combate, recursos, chefes e versões.",
    metricGuides: "Guias",
    metricLangs: "Idiomas UI",
    metricGames: "Jogos chineses",
    searchLabel: "Buscar guias",
    searchPlaceholder: "Jogo, herói, chefe, recurso...",
    gameFilter: "Jogo",
    typeFilter: "Tipo",
    all: "Tudo",
    submitTitle: "Falta um jogo?",
    submitText: "Envie jogos, temas de guia ou fontes para revisão editorial.",
    submitButton: "Enviar pista",
    boardEyebrow: "Diretório vivo",
    boardTitle: "Guias em destaque",
    sortLabel: "Ordenar",
    sortUpdated: "Recentes",
    sortDifficulty: "Iniciante",
    sortPopular: "Populares",
    emptyState: "Nenhum guia encontrado.",
    gamesEyebrow: "Índice de jogos",
    gamesTitle: "Começar por jogos chineses com demanda global",
    openGuide: "Ver rota",
    updated: "Atualizado",
    difficulty: "Dificuldade",
    minutes: "min",
    detailGoal: "Objetivo",
    detailSteps: "Rota",
    detailResources: "Recursos-chave",
    detailSources: "Fontes",
    toast: "Entrada de envio reservada: depois entram formulários, revisão e tradução.",
    types: { beginner: "Início", build: "Build", boss: "Chefe", combat: "Combate", farming: "Farm", map: "Mapa", meta: "Meta" },
  },
};

const art = {
  blackmyth: "radial-gradient(circle at 24% 22%, rgba(212,155,55,.84), transparent 24%), linear-gradient(135deg, #171717, #4a241d 52%, #b83624)",
  genshin: "radial-gradient(circle at 78% 16%, rgba(255,250,240,.88), transparent 24%), linear-gradient(135deg, #0d4b40, #11795f 48%, #d49b37)",
  hsr: "radial-gradient(circle at 72% 22%, rgba(212,155,55,.86), transparent 25%), linear-gradient(135deg, #151515, #273353 48%, #b83624)",
  zzz: "radial-gradient(circle at 22% 18%, rgba(246,240,229,.82), transparent 23%), linear-gradient(135deg, #151515, #3b3b30 45%, #d49b37)",
  wuwa: "radial-gradient(circle at 70% 24%, rgba(17,121,95,.9), transparent 24%), linear-gradient(135deg, #151515, #32364a 48%, #d49b37)",
  arknights: "radial-gradient(circle at 22% 24%, rgba(255,250,240,.78), transparent 20%), linear-gradient(135deg, #151515, #4a4742 52%, #0d4b40)",
  naraka: "radial-gradient(circle at 20% 16%, rgba(184,54,36,.9), transparent 25%), linear-gradient(135deg, #151515, #31413e 48%, #11795f)",
  hok: "radial-gradient(circle at 76% 28%, rgba(212,155,55,.9), transparent 23%), linear-gradient(135deg, #10223a, #11795f 48%, #b83624)",
  reverse1999: "radial-gradient(circle at 76% 24%, rgba(246,240,229,.8), transparent 22%), linear-gradient(135deg, #271b2f, #0d4b40 52%, #b83624)",
  gfl2: "radial-gradient(circle at 25% 24%, rgba(212,155,55,.78), transparent 24%), linear-gradient(135deg, #161816, #3d4938 48%, #11795f)",
  deltaforce: "radial-gradient(circle at 72% 18%, rgba(17,121,95,.85), transparent 24%), linear-gradient(135deg, #171717, #394130 52%, #d49b37)",
  pathnowhere: "radial-gradient(circle at 22% 20%, rgba(184,54,36,.82), transparent 24%), linear-gradient(135deg, #151515, #2f3344 50%, #0d4b40)",
};

const games = {
  blackmyth: { name: "Black Myth: Wukong", cn: "黑神话：悟空", studio: "Game Science", genre: "Action RPG", art: art.blackmyth, sources: [{ label: "GameSpot - Spirit guide", url: "https://www.gamespot.com/gallery/black-myth-wukong-spirits-guide/2900-5705/" }, { label: "Gamer Guides - Immobilize", url: "https://www.gamerguides.com/black-myth-wukong/database/spells/mysticism/immobilize" }] },
  genshin: { name: "Genshin Impact", cn: "原神", studio: "HoYoverse", genre: "Open-world RPG", art: art.genshin, sources: [{ label: "KeqingMains - Newbie guide", url: "https://keqingmains.com/misc/newbie-guide/" }, { label: "KeqingMains - Artifacts", url: "https://keqingmains.com/misc/artifacts/" }] },
  hsr: { name: "Honkai: Star Rail", cn: "崩坏：星穹铁道", studio: "HoYoverse", genre: "Turn-based RPG", art: art.hsr, sources: [{ label: "Prydwen - Honkai: Star Rail", url: "https://www.prydwen.gg/star-rail/" }, { label: "HoYoLAB - Star Rail", url: "https://www.hoyolab.com/circles/6/39/feed" }] },
  zzz: { name: "Zenless Zone Zero", cn: "绝区零", studio: "HoYoverse", genre: "Action RPG", art: art.zzz, sources: [{ label: "Prydwen - Zenless Zone Zero", url: "https://www.prydwen.gg/zenless/" }, { label: "HoYoLAB - Zenless Zone Zero", url: "https://www.hoyolab.com/circles/8/41/feed" }] },
  wuwa: { name: "Wuthering Waves", cn: "鸣潮", studio: "Kuro Games", genre: "Open-world Action RPG", art: art.wuwa, sources: [{ label: "WutheringWaves.gg - Echo system", url: "https://wutheringwaves.gg/echo-system-guide/" }, { label: "WutheringWaves.gg - Sonata effects", url: "https://wutheringwaves.gg/sonata-effects/" }] },
  arknights: { name: "Arknights", cn: "明日方舟", studio: "Hypergryph", genre: "Tower defense RPG", art: art.arknights, sources: [{ label: "Arknights Terra Wiki - Classes", url: "https://arknights.wiki.gg/wiki/Class" }, { label: "Arknights Terra Wiki - Deployment Point", url: "https://arknights.wiki.gg/wiki/Deployment_Point" }] },
  naraka: { name: "NARAKA: BLADEPOINT", cn: "永劫无间", studio: "24 Entertainment", genre: "Melee battle royale", art: art.naraka, sources: [{ label: "PC Gamer - Naraka tips", url: "https://www.pcgamer.com/naraka-bladepoint-tips-guide/" }, { label: "Old Naraka Wiki - Movement", url: "https://old.naraka.wiki/en/Movement" }] },
  hok: { name: "Honor of Kings", cn: "王者荣耀", studio: "TiMi Studio", genre: "MOBA", art: art.hok, sources: [{ label: "HoKStats - Beginner guide", url: "https://hokstats.gg/beginners-guide/" }, { label: "HoKStats - Guides", url: "https://hokstats.gg/guides/" }] },
  reverse1999: { name: "Reverse: 1999", cn: "重返未来：1999", studio: "Bluepoch", genre: "Turn-based RPG", art: art.reverse1999, sources: [{ label: "Prydwen - Reverse: 1999", url: "https://www.prydwen.gg/re1999/" }, { label: "Reverse: 1999 Wiki", url: "https://reverse1999.fandom.com/wiki/Reverse:_1999_Wiki" }] },
  gfl2: { name: "Girls' Frontline 2: Exilium", cn: "少女前线 2：追放", studio: "MICA Team", genre: "Tactical RPG", art: art.gfl2, sources: [{ label: "Prydwen - Girls' Frontline 2", url: "https://www.prydwen.gg/gfl-exilium/" }, { label: "GFL2 Wiki", url: "https://iopwiki.com/wiki/Girls%27_Frontline_2:_Exilium" }] },
  deltaforce: { name: "Delta Force", cn: "三角洲行动", studio: "Team Jade", genre: "Tactical shooter", art: art.deltaforce, sources: [{ label: "Delta Force official", url: "https://www.playdeltaforce.com/" }, { label: "Steam - Delta Force", url: "https://store.steampowered.com/app/2507950/Delta_Force/" }] },
  pathnowhere: { name: "Path to Nowhere", cn: "无期迷途", studio: "AISNO Games", genre: "Strategy RPG", art: art.pathnowhere, sources: [{ label: "S1N.gg - Path to Nowhere", url: "https://s1n.gg/path-to-nowhere/" }, { label: "Path to Nowhere Wiki", url: "https://pathtonowhere.fandom.com/wiki/Path_to_Nowhere_Wiki" }] },
};

const guideMeta = [
  { id: "bm-ch1", game: "blackmyth", type: "beginner", minutes: 12, difficulty: 2, popularity: 98, title: "第一章开荒：土地庙、定身术与精魄", summary: "建立第一章探索循环：土地庙检查、定身术窗口、精魄装备和葫芦补给。", goal: "降低早期 Boss 卡关率，先形成稳定探索节奏。", resources: ["土地庙", "定身术", "精魄", "葫芦"], steps: ["每到土地庙先保存、看天赋和补给。", "定身术留给 Boss 硬直或安全喝药窗口。", "击败精魄敌人后回土地庙确认是否可装备。"] },
  { id: "bm-boss", game: "blackmyth", type: "boss", minutes: 15, difficulty: 3, popularity: 94, title: "Boss 战复盘模板：三段式看招", summary: "用起手、追击、惩罚窗口拆解动作 Boss，不再只靠硬背招式。", goal: "把失败转化成可执行的下一轮调整。", resources: ["翻滚节奏", "定身术", "棍势", "药材"], steps: ["先只观察 Boss 起手动作，减少贪刀。", "记录哪一招后摇最长，再安排重棍或法术。", "连续失败时优先升级回复和防御。"] },
  { id: "bm-spirits", game: "blackmyth", type: "build", minutes: 10, difficulty: 2, popularity: 90, title: "精魄选择：先补机制，再补伤害", summary: "早期精魄不只看输出，还要看霸体、范围、控制和保命价值。", goal: "让精魄成为解题工具，而不是收藏品。", resources: ["精魄技能", "气力", "变身窗口"], steps: ["开荒优先带能打断或补范围的精魄。", "Boss 战按安全释放窗口选择精魄。", "探索时换成清杂效率高的精魄。"] },
  { id: "bm-route", game: "blackmyth", type: "map", minutes: 13, difficulty: 2, popularity: 87, title: "章节探索路线：先开传送，再清支线", summary: "用土地庙作为节点规划探索，减少重复跑路和遗漏关键奖励。", goal: "让玩家按节点推进地图，而不是迷路式清图。", resources: ["土地庙", "支线 NPC", "宝箱", "药材"], steps: ["进入新区先找最近土地庙。", "主路推进到下个节点后再回头清岔路。", "Boss 前确认支线和葫芦升级材料。"] },

  { id: "gi-resin", game: "genshin", type: "farming", minutes: 9, difficulty: 1, popularity: 97, title: "树脂优先级：45 级前后怎么刷圣遗物", summary: "角色等级、武器、天赋、圣遗物的投入顺序，适合新号和回坑号。", goal: "减少原粹树脂浪费。", resources: ["原粹树脂", "冒险等阶 45", "天赋书", "圣遗物"], steps: ["45 级前优先等级、武器和关键天赋。", "圣遗物只保主词条正确的过渡件。", "45 级后再集中刷最高级圣遗物本。"] },
  { id: "gi-reaction", game: "genshin", type: "build", minutes: 11, difficulty: 2, popularity: 92, title: "元素反应组队：先定主反应，再定角色位", summary: "围绕蒸发、融化、激化、绽放等核心反应理解队伍结构。", goal: "让新玩家不再只按稀有度组队。", resources: ["元素附着", "主 C", "辅助", "充能"], steps: ["先选一个主要伤害反应。", "保证触发者有合适精通或暴击配置。", "补治疗、护盾或充能位稳定循环。"] },
  { id: "gi-explore", game: "genshin", type: "map", minutes: 8, difficulty: 1, popularity: 88, title: "大世界探索：神瞳、传送点和区域声望", summary: "把探索从随缘跑图变成节点式推进。", goal: "提升地图完成度并减少漏收集。", resources: ["七天神像", "传送锚点", "神瞳", "声望"], steps: ["先开神像和锚点。", "按区域分块清神瞳和宝箱。", "每周回城处理声望与派遣。"] },
  { id: "gi-abyss", game: "genshin", type: "combat", minutes: 14, difficulty: 3, popularity: 89, title: "深境螺旋准备：两队配置与破盾逻辑", summary: "从两队角色池、元素破盾和生存位出发规划深渊。", goal: "让角色培养服务于两队实战。", resources: ["两队主轴", "破盾元素", "充能", "生存位"], steps: ["先确定两队核心输出。", "看怪物护盾补对应元素。", "缺练度时优先保证循环和生存。"] },

  { id: "hsr-start", game: "hsr", type: "beginner", minutes: 9, difficulty: 1, popularity: 95, title: "开拓前期：均衡等级、光锥和遗器顺序", summary: "前期资源先给谁、什么时候刷遗器、哪些材料不要乱花。", goal: "避免把养成资源摊得太散。", resources: ["开拓力", "光锥", "行迹", "遗器"], steps: ["主输出等级和光锥先跟上。", "关键行迹优先，普攻不一定平均点。", "高等级前遗器先用主词条过渡。"] },
  { id: "hsr-team", game: "hsr", type: "build", minutes: 12, difficulty: 2, popularity: 93, title: "配队骨架：输出、辅助、削韧、生存", summary: "用战斗职责理解队伍，而不是只堆五星。", goal: "组出能稳定循环的四人队。", resources: ["速度", "战技点", "削韧", "生存位"], steps: ["先选主输出和对应增益。", "确认战技点是否够用。", "按敌人弱点补削韧角色。"] },
  { id: "hsr-moc", game: "hsr", type: "combat", minutes: 15, difficulty: 3, popularity: 88, title: "混沌回忆：速度轴和战技点管理", summary: "用速度、能量和战技点拆解回合制高难。", goal: "让两队在限定轮数内稳定输出。", resources: ["速度轴", "能量", "战技点", "弱点"], steps: ["先看敌人弱点和波次。", "保证辅助先手覆盖增益。", "战技点紧张时换低耗辅助。"] },
  { id: "hsr-farm", game: "hsr", type: "farming", minutes: 8, difficulty: 1, popularity: 86, title: "日常刷取：信用点、经验书与遗器本", summary: "把开拓力分配到账号最缺的成长项。", goal: "减少体力刷取的短期焦虑。", resources: ["拟造花萼", "侵蚀隧洞", "历战余响"], steps: ["缺等级先刷经验和信用点。", "角色框架稳定后再刷遗器。", "周本次数优先给核心角色材料。"] },

  { id: "zzz-start", game: "zzz", type: "beginner", minutes: 9, difficulty: 1, popularity: 92, title: "新艾利都入门：代理人、邦布和驱动盘", summary: "梳理代理人定位、邦布搭配、驱动盘和日常资源。", goal: "建立前期养成顺序。", resources: ["代理人", "邦布", "驱动盘", "电量"], steps: ["先围绕一个输出代理人建队。", "邦布选能触发队伍阵营或属性协同的。", "驱动盘前期先追主词条。"] },
  { id: "zzz-combat", game: "zzz", type: "combat", minutes: 11, difficulty: 2, popularity: 90, title: "战斗循环：失衡、连携技和支援换人", summary: "用失衡条理解输出窗口，避免乱切角色。", goal: "提升清怪和 Boss 战效率。", resources: ["失衡", "连携技", "支援突击", "闪避反击"], steps: ["先用击破角色打失衡。", "失衡后切输出吃增益窗口。", "危险招式用极限支援保持节奏。"] },
  { id: "zzz-disc", game: "zzz", type: "build", minutes: 12, difficulty: 2, popularity: 84, title: "驱动盘配置：主词条优先级", summary: "不同定位代理人的驱动盘主词条选择。", goal: "先做可用套装，再慢慢追副词条。", resources: ["驱动盘", "暴击", "异常精通", "能量回复"], steps: ["输出位优先暴击和属性伤害。", "异常位看异常精通和异常掌控。", "辅助位根据循环补能量或生存。"] },
  { id: "zzz-hollow", game: "zzz", type: "map", minutes: 10, difficulty: 2, popularity: 80, title: "空洞探索：格子事件和资源取舍", summary: "整理空洞路线中战斗、补给和事件选择。", goal: "减少探索时的资源损耗。", resources: ["压力值", "补给格", "事件格", "队伍血量"], steps: ["血量低时优先找补给。", "战斗格收益不高时别硬清。", "Boss 前保留关键增益和生命。"] },

  { id: "wuwa-echo", game: "wuwa", type: "build", minutes: 11, difficulty: 2, popularity: 93, title: "声骸与数据坞：先升等级，再追词条", summary: "解释数据坞等级、声骸品质、COST 和调谐器的关系。", goal: "用最低时间成本进入稳定养成。", resources: ["数据坞", "声骸 COST", "合鸣效果", "调谐器"], steps: ["前期优先提升数据坞等级。", "主声骸先追正确主词条。", "调谐器留给长期使用的高品质声骸。"] },
  { id: "wuwa-team", game: "wuwa", type: "combat", minutes: 12, difficulty: 2, popularity: 88, title: "协奏与延奏：三人队切换节奏", summary: "理解协奏能量、延奏技能和爆发窗口。", goal: "让切人服务于输出循环。", resources: ["协奏能量", "延奏技能", "共鸣解放"], steps: ["辅助先打满协奏。", "用延奏增益交给主输出。", "主输出爆发后切回循环角色。"] },
  { id: "wuwa-map", game: "wuwa", type: "map", minutes: 10, difficulty: 1, popularity: 82, title: "大世界收集：声匣、传送点和精英怪", summary: "按地图节点规划探索和数据坞经验。", goal: "让探索同时服务养成。", resources: ["传送信标", "声匣", "精英怪", "数据坞经验"], steps: ["先开传送信标。", "记录精英怪刷新点。", "收集声匣时顺路补数据坞经验。"] },
  { id: "wuwa-farm", game: "wuwa", type: "farming", minutes: 9, difficulty: 1, popularity: 79, title: "体力分配：突破、技能与声骸经验", summary: "不同阶段结晶波片该刷什么。", goal: "避免声骸刷取早于角色基础养成。", resources: ["结晶波片", "突破材料", "技能材料", "声骸经验"], steps: ["角色突破和武器优先。", "技能材料跟随主输出升级。", "声骸经验在套装确定后集中投入。"] },

  { id: "ark-start", game: "arknights", type: "beginner", minutes: 11, difficulty: 2, popularity: 91, title: "新手编队骨架：费用、阻挡、治疗与输出", summary: "从职业职能理解低练度也能复用的基础阵容。", goal: "不依赖固定高星作业也能推关。", resources: ["先锋费用", "重装阻挡", "医疗", "物理/法术输出"], steps: ["开局先锋保证费用。", "重装守主路，医疗覆盖承伤位。", "狙击打飞行，术师打高防。"] },
  { id: "ark-map", game: "arknights", type: "map", minutes: 12, difficulty: 2, popularity: 84, title: "关卡拆解：路线、波次和压力点", summary: "失败后定位漏怪原因，而不是盲目换阵容。", goal: "让每次失败都能产出调整。", resources: ["路线", "波次", "阻挡数", "技能窗口"], steps: ["先看敌人从哪几条路进。", "标记第一波压力点。", "把爆发技能留给精英波次。"] },
  { id: "ark-base", game: "arknights", type: "farming", minutes: 8, difficulty: 1, popularity: 80, title: "基建与材料：早期资源循环", summary: "用基建和日常本支撑干员养成。", goal: "稳定龙门币、经验和材料供应。", resources: ["基建", "龙门币", "作战记录", "材料本"], steps: ["优先让基建生产不断档。", "缺经验刷作战记录，缺钱刷货物运送。", "活动材料性价比高时优先搬商店。"] },
  { id: "ark-event", game: "arknights", type: "meta", minutes: 10, difficulty: 2, popularity: 77, title: "活动商店：新手先换什么", summary: "活动代币有限时的兑换优先级。", goal: "先换最能提升账号的资源。", resources: ["活动代币", "材料", "芯片助剂", "家具"], steps: ["先换稀缺高级材料。", "再换经验、龙门币和技能书。", "家具和收藏项放在最后。"] },

  { id: "naraka-basic", game: "naraka", type: "combat", minutes: 10, difficulty: 3, popularity: 86, title: "单排入门：蓄力、振刀、钩锁和护甲", summary: "围绕单排常见死亡原因建立判断标准。", goal: "先学会活下来，再练连招。", resources: ["蓝色蓄力", "振刀", "钩锁", "护甲粉"], steps: ["看到蓝色蓄力先读距离。", "振刀只反制可振蓄力。", "无甲时先撤退补护甲粉。"] },
  { id: "naraka-move", game: "naraka", type: "map", minutes: 9, difficulty: 2, popularity: 82, title: "地图机动：钩锁、屋顶和高低差", summary: "用地形控制进退，而不是直线逃跑。", goal: "提升追击和撤退成功率。", resources: ["钩锁", "屋顶", "树木", "高低差"], steps: ["进场前确认落点。", "撤退时穿建筑和屋顶。", "被多人追时优先拉高低差。"] },
  { id: "naraka-weapon", game: "naraka", type: "build", minutes: 13, difficulty: 3, popularity: 76, title: "武器选择：先练一近一远", summary: "用武器职能规划开局拾取和战斗距离。", goal: "减少武器不熟导致的失误。", resources: ["近战武器", "远程武器", "魂玉", "耐久"], steps: ["先固定一把熟练近战。", "远程用于逼闪和打断补给。", "魂玉围绕常用武器选择。"] },
  { id: "naraka-team", game: "naraka", type: "meta", minutes: 12, difficulty: 3, popularity: 73, title: "三排职责：开团、拆火和救援", summary: "三排不是三个人各打各的，先分清职责。", goal: "降低团战混乱度。", resources: ["英雄技能", "拆火", "复活", "资源分配"], steps: ["开团角色先沟通目标。", "队友被集火时用控制拆火。", "救援前先确认敌方位置。"] },

  { id: "hok-roles", game: "hok", type: "beginner", minutes: 8, difficulty: 1, popularity: 90, title: "国际玩家五位置职责速查", summary: "解释对抗路、打野、中路、发育路和游走的核心任务。", goal: "帮助海外玩家理解王者分路。", resources: ["对抗路", "打野", "中路", "发育路", "游走"], steps: ["对抗路稳线。", "打野围绕资源控节奏。", "游走负责视野和先手。"] },
  { id: "hok-jungle", game: "hok", type: "map", minutes: 10, difficulty: 2, popularity: 84, title: "打野路线：第一轮野区到第一条龙", summary: "从刷野、河道视野和资源刷新理解前四分钟。", goal: "让打野不再无目的抓人。", resources: ["野区", "河道", "暴君", "主宰"], steps: ["第一轮清野保证等级。", "靠近强势边路做第一波节奏。", "资源刷新前提前站视野。"] },
  { id: "hok-marksman", game: "hok", type: "build", minutes: 9, difficulty: 1, popularity: 80, title: "发育路经济曲线：两件套前少乱团", summary: "射手如何安全吃线、控河蟹和等装备节点。", goal: "保护后期输出位发育。", resources: ["兵线", "河蟹", "防御塔", "核心装备"], steps: ["前期少漏兵。", "没视野不压太深。", "两件套后再主动参团。"] },
  { id: "hok-teamfight", game: "hok", type: "combat", minutes: 11, difficulty: 2, popularity: 78, title: "团战站位：先处理视野，再处理输出", summary: "按前排、后排和刺客威胁拆团战。", goal: "减少无视野被秒。", resources: ["视野", "控制链", "后排", "刺客"], steps: ["团前先看草丛和侧翼。", "控制留给关键目标。", "输出位保持可撤退距离。"] },

  { id: "r1999-start", game: "reverse1999", type: "beginner", minutes: 9, difficulty: 1, popularity: 78, title: "新手开局：角色定位、卡牌合成与洞悉", summary: "理解现实创伤、精神创伤、卡牌星级和角色成长线。", goal: "快速组出能推主线的队伍。", resources: ["卡牌合成", "洞悉", "共鸣", "创伤类型"], steps: ["先确定主输出创伤类型。", "辅助围绕增伤、治疗或控制补位。", "洞悉材料优先给核心三人。"] },
  { id: "r1999-team", game: "reverse1999", type: "build", minutes: 10, difficulty: 2, popularity: 74, title: "队伍构成：输出、辅助、治疗与控制", summary: "按行动牌和激情循环理解三人队。", goal: "避免只堆输出导致续航不足。", resources: ["激情", "至终仪式", "治疗", "控制"], steps: ["主输出负责爆发窗口。", "辅助提供易伤或增益。", "治疗确保长线关卡容错。"] },
  { id: "r1999-resource", game: "reverse1999", type: "farming", minutes: 8, difficulty: 1, popularity: 70, title: "资源规划：尘埃、利齿子儿与材料本", summary: "早期体力刷取优先级。", goal: "让养成资源集中到主队。", resources: ["尘埃", "利齿子儿", "洞悉材料", "共鸣材料"], steps: ["主线卡关再补等级。", "洞悉材料跟着主队刷。", "共鸣不要平均铺开。"] },
  { id: "r1999-afflatus", game: "reverse1999", type: "combat", minutes: 11, difficulty: 2, popularity: 68, title: "灵感克制：关卡前先看敌方属性", summary: "用灵感克制和创伤类型决定上阵角色。", goal: "用属性优势弥补练度差。", resources: ["灵感", "现实创伤", "精神创伤", "行动牌"], steps: ["进关前看敌方灵感。", "优先带克制输出。", "敌方抗性高时换创伤类型。"] },

  { id: "gfl2-start", game: "gfl2", type: "beginner", minutes: 10, difficulty: 2, popularity: 76, title: "战棋入门：掩体、稳态和行动顺序", summary: "把战场拆成安全站位、破稳和集火目标。", goal: "减少无掩体暴毙。", resources: ["掩体", "稳态", "射程", "行动顺序"], steps: ["先找半掩体或全掩体。", "集火破稳目标。", "行动结束前确认敌方射线。"] },
  { id: "gfl2-team", game: "gfl2", type: "build", minutes: 12, difficulty: 2, popularity: 72, title: "小队配置：火力、支援、治疗和破稳", summary: "按战棋职责组队，而不是只看单体强度。", goal: "提高推图稳定性。", resources: ["火力", "支援", "治疗", "稳态伤害"], steps: ["主输出负责击杀。", "支援提供增益或追击。", "治疗保证长图容错。"] },
  { id: "gfl2-map", game: "gfl2", type: "map", minutes: 11, difficulty: 2, popularity: 69, title: "地图推进：占点、侧翼和撤退线", summary: "用格子路线控制敌我交火角度。", goal: "避免队伍被包夹。", resources: ["占点", "侧翼", "撤退线", "高低差"], steps: ["先规划下一回合撤退格。", "不要全员挤同一侧。", "优先处理能绕后的敌人。"] },
  { id: "gfl2-farm", game: "gfl2", type: "farming", minutes: 8, difficulty: 1, popularity: 65, title: "养成材料：先主队，后仓库", summary: "把体力投入到能立刻提升推图能力的角色。", goal: "避免养成资源分散。", resources: ["经验", "武器", "心智", "突破材料"], steps: ["主队等级先跟上。", "武器强化给常用输出。", "替补角色等主线稳定后再养。"] },

  { id: "df-start", game: "deltaforce", type: "beginner", minutes: 8, difficulty: 1, popularity: 79, title: "战术射击入门：兵种、装备和撤离目标", summary: "区分大战场和撤离玩法的目标差异。", goal: "让新玩家先知道每局该做什么。", resources: ["兵种", "装备", "撤离点", "队友复活"], steps: ["先确认模式目标。", "选择能配合队伍的兵种。", "撤离玩法优先保命和信息。"] },
  { id: "df-loadout", game: "deltaforce", type: "build", minutes: 10, difficulty: 2, popularity: 74, title: "配装思路：后坐力、射程和信息工具", summary: "按地图距离和队伍职责选择武器配件。", goal: "让装备服务交战距离。", resources: ["后坐力", "瞄具", "护甲", "侦察工具"], steps: ["近距离图优先机动。", "中远距离压枪和倍镜更重要。", "队伍缺信息时补侦察工具。"] },
  { id: "df-map", game: "deltaforce", type: "map", minutes: 12, difficulty: 2, popularity: 70, title: "地图路线：信息、侧翼和撤离点", summary: "用声音、视野和撤离路线减少被偷袭。", goal: "提高存活和撤离率。", resources: ["听声", "视野", "侧翼", "撤离点"], steps: ["移动前先听交火方向。", "穿越开阔地要有烟或掩体。", "撤离前检查常见架点。"] },
  { id: "df-squad", game: "deltaforce", type: "combat", minutes: 11, difficulty: 2, popularity: 67, title: "小队交火：交叉火力和救援节奏", summary: "避免四个人同时倒在同一角度。", goal: "提高小队团战胜率。", resources: ["交叉火力", "烟雾", "救援", "压制"], steps: ["不要全队堆同一掩体。", "救人前先封烟或压制。", "有人绕侧时正面队友同步牵制。"] },

  { id: "ptn-start", game: "pathnowhere", type: "beginner", minutes: 9, difficulty: 1, popularity: 68, title: "新手推图：核心、阻挡和局长技能", summary: "用破核和阻挡理解关卡压力。", goal: "提高主线推图稳定性。", resources: ["核心", "阻挡", "局长技能", "禁闭者"], steps: ["先看敌人核心数量。", "破核技能留给精英怪。", "阻挡位不要离治疗太远。"] },
  { id: "ptn-team", game: "pathnowhere", type: "build", minutes: 10, difficulty: 2, popularity: 65, title: "队伍职责：破核、输出、承伤和治疗", summary: "按关卡机制安排禁闭者定位。", goal: "避免破核不足导致崩盘。", resources: ["破核", "法术输出", "物理输出", "治疗"], steps: ["每队保证足够破核。", "按敌方抗性选伤害类型。", "长线关卡补治疗或护盾。"] },
  { id: "ptn-farm", game: "pathnowhere", type: "farming", minutes: 8, difficulty: 1, popularity: 62, title: "资源本优先级：等级、技能和烙印", summary: "新手阶段体力该投向哪里。", goal: "让主力队伍尽快成型。", resources: ["狄斯币", "经验", "技能材料", "烙印"], steps: ["等级和突破先保证。", "主输出技能优先。", "烙印后续再精刷。"] },
  { id: "ptn-boss", game: "pathnowhere", type: "boss", minutes: 12, difficulty: 3, popularity: 60, title: "Boss 关卡：破核窗口和爆发时机", summary: "围绕核心暴露时间安排输出和控制。", goal: "把爆发打在正确窗口。", resources: ["核心暴露", "破核技能", "爆发", "位移"], steps: ["Boss 露核心前保留技能。", "破核后集中爆发。", "AOE 前提前调整站位。"] },
];

const fallbackLanguages = {
  ja: "en",
  ko: "en",
  es: "en",
  fr: "en",
  de: "en",
  pt: "en",
};

let state = {
  lang: localStorage.getItem("guide-lang") || "zh",
  game: "all",
  type: "all",
  query: "",
  sort: "updated",
  selectedGame: null,
};

const $ = (selector) => document.querySelector(selector);

function t(key) {
  const currentCopy = copy[state.lang] || {};
  if (currentCopy[key] !== undefined) return currentCopy[key];
  if (copy.en[key] !== undefined) return copy.en[key];
  return copy.zh[key];
}

function fullGuides() {
  return guideMeta.map((guide) => {
    const game = games[guide.game];
    return { ...guide, image: gameImage(guide.game), sources: game.sources };
  });
}

function gameImage(id) {
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
  };
  return realImages[id] || `assets/games/${id}.svg`;
}

function expandGuide(guide) {
  const game = games[guide.game];
  const phaseTitle = {
    beginner: ["开局 10 分钟", "稳定推进", "进入长期养成"],
    build: ["确定核心", "补齐循环", "优化细节"],
    combat: ["读懂机制", "建立输出窗口", "复盘失误"],
    boss: ["战前准备", "招式处理", "击杀窗口"],
    farming: ["先补短板", "集中刷取", "停止投入"],
    map: ["开节点", "清路线", "回收遗漏"],
    meta: ["看版本目标", "换取高价值资源", "保留弹性"],
  };
  const titles = phaseTitle[guide.type] || phaseTitle.beginner;
  return {
    audience: `适合正在游玩《${game.cn}》、想系统理解「${guide.title}」的玩家。`,
    prep: guide.resources.map((item, index) => `${item}：${index === 0 ? "优先确认是否已经解锁或够用。" : "在执行路线前检查数量、等级或可用状态。"}`),
    phases: titles.map((title, index) => ({
      title,
      body: guide.steps[index] || guide.steps[guide.steps.length - 1],
      detail:
        index === 0
          ? "先把失败原因拆清楚，不急着投入稀缺资源。"
          : index === 1
            ? "按当前账号练度执行，保证循环稳定后再追求速度。"
            : "完成后记录仍然卡住的点，再决定是补练度、换角色还是改路线。",
    })),
    mistakes: [
      `把「${guide.resources[0]}」当成唯一解法，忽略队伍/装备/路线之间的配合。`,
      "在没有确认机制前反复消耗体力或材料，导致后续养成断档。",
      "只照抄结论，不根据自己的角色池、练度和地图进度做调整。",
    ],
    advanced: [
      `如果已经能稳定完成基础路线，可以把目标从通关改成缩短时间或减少资源消耗。`,
      `把这篇攻略和同游戏的其他系列攻略一起看，尤其是养成、地图和战斗分类。`,
    ],
  };
}

function initLanguageSelect() {
  const select = $("#languageSelect");
  select.innerHTML = languages.map(([code, label]) => `<option value="${code}">${label}</option>`).join("");
  select.value = state.lang;
  select.addEventListener("change", () => {
    state.lang = select.value;
    localStorage.setItem("guide-lang", state.lang);
    render();
  });
}

function applyCopy() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function chip(label, value, group, active) {
  return `<button class="chip" type="button" data-group="${group}" data-value="${value}" aria-pressed="${String(active)}">${label}</button>`;
}

function renderFilters() {
  const gameButtons = [chip(t("all"), "all", "game", state.game === "all")].concat(
    Object.entries(games).map(([id, game]) => chip(game.name, id, "game", state.game === id)),
  );
  $("#gameFilters").innerHTML = gameButtons.join("");

  const typeIds = ["beginner", "build", "combat", "boss", "farming", "map", "meta"];
  const typeButtons = [chip(t("all"), "all", "type", state.type === "all")].concat(
    typeIds.map((id) => chip(t("types")[id], id, "type", state.type === id)),
  );
  $("#typeFilters").innerHTML = typeButtons.join("");

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      state[button.dataset.group] = button.dataset.value;
      if (button.dataset.group === "game") {
        state.selectedGame = button.dataset.value === "all" ? null : button.dataset.value;
      }
      render();
    });
  });
}

function difficulty(level) {
  return `<span class="difficulty" aria-label="${t("difficulty")} ${level}/3">${[1, 2, 3]
    .map((item) => `<i class="${item <= level ? "on" : ""}"></i>`)
    .join("")}</span>`;
}

function filteredGuides() {
  const query = state.query.trim().toLowerCase();
  const collator = new Intl.Collator(state.lang, { numeric: true });
  return fullGuides()
    .filter((guide) => state.game === "all" || guide.game === state.game)
    .filter((guide) => state.type === "all" || guide.type === state.type)
    .filter((guide) => {
      if (!query) return true;
      return [guide.title, guide.summary, games[guide.game].name, games[guide.game].studio, t("types")[guide.type]]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "difficulty") return a.difficulty - b.difficulty || collator.compare(a.title, b.title);
      if (state.sort === "popular") return b.popularity - a.popularity;
      return new Date(b.updated) - new Date(a.updated);
    });
}

function getGameGuideStats(gameId) {
  const guides = fullGuides().filter((guide) => guide.game === gameId);
  const series = new Set(guides.map((guide) => guide.type));
  return { guides, guideCount: guides.length, seriesCount: series.size };
}

function filteredGames() {
  const query = state.query.trim().toLowerCase();
  return Object.entries(games).filter(([id, game]) => {
    if (state.game !== "all" && state.game !== id) return false;
    const guides = fullGuides().filter((guide) => guide.game === id);
    if (state.type !== "all" && !guides.some((guide) => guide.type === state.type)) return false;
    if (!query) return true;
    return [game.name, game.cn, game.studio, game.genre]
      .concat(guides.map((guide) => `${guide.title} ${guide.summary}`))
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function renderGameCatalog() {
  const entries = filteredGames();
  $("#emptyState").hidden = entries.length > 0;
  $("#gameCatalog").innerHTML = entries
    .map(([id, game]) => {
      const stats = getGameGuideStats(id);
      const visibleTypes = Array.from(new Set(stats.guides.map((guide) => guide.type))).slice(0, 5);
      return `
        <article class="catalog-card" style="--art: ${game.art}">
          <div class="catalog-art">
            <img src="${gameImage(id)}" alt="${game.cn} ${game.name} 攻略专题封面" loading="lazy">
          </div>
          <div class="catalog-body">
            <div class="guide-meta">
              <span>${game.genre}</span>
              <span>${stats.guideCount} ${t("guideCount")}</span>
              <span>${stats.seriesCount} ${t("seriesCount")}</span>
            </div>
            <h3>${game.name}</h3>
            <p>${game.cn} · ${game.studio}</p>
            <div class="mini-series">
              ${visibleTypes.map((type) => `<span>${t("types")[type]}</span>`).join("")}
            </div>
            <button class="open-game" type="button" data-game="${id}">${t("openGame")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".open-game").forEach((button) => {
    button.addEventListener("click", () => selectGame(button.dataset.game));
  });
}

function renderGuides() {
  const guides = filteredGuides();
  return guides
    .map((guide) => {
      const game = games[guide.game];
      return `
        <article class="guide-card">
          <div class="guide-art">
            <img src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图" loading="lazy">
          </div>
          <div class="guide-body">
            <div class="guide-meta">
              <span>${game.name}</span>
              <span>${t("types")[guide.type]}</span>
              <span>${guide.minutes} ${t("minutes")}</span>
            </div>
            <h3>${guide.title}</h3>
            <p>${guide.summary}</p>
            <div class="guide-footer">
              ${difficulty(guide.difficulty)}
              <button class="open-guide" type="button" data-guide="${guide.id}">${t("openGuide")}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGameDetail() {
  const detail = $("#gameDetail");
  const section = $("#games");
  if (!state.selectedGame || !games[state.selectedGame]) {
    section.hidden = true;
    detail.innerHTML = "";
    return;
  }

  const game = games[state.selectedGame];
  const gameGuides = fullGuides()
    .filter((guide) => guide.game === state.selectedGame)
    .sort((a, b) => {
      if (state.sort === "difficulty") return a.difficulty - b.difficulty;
      if (state.sort === "popular") return b.popularity - a.popularity;
      return b.popularity - a.popularity;
    });
  const grouped = gameGuides.reduce((acc, guide) => {
    if (!acc[guide.type]) acc[guide.type] = [];
    acc[guide.type].push(guide);
    return acc;
  }, {});
  const guideCards = gameGuides
    .map((guide) => {
      return `
        <article class="series-card">
          <img class="series-image" src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图" loading="lazy">
          <div>
            <div class="guide-meta">
              <span>${t("types")[guide.type]}</span>
              <span>${guide.minutes} ${t("minutes")}</span>
            </div>
            <h3>${guide.title}</h3>
            <p>${guide.summary}</p>
          </div>
          <div class="guide-footer">
            ${difficulty(guide.difficulty)}
            <button class="open-guide" type="button" data-guide="${guide.id}">${t("openGuide")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  detail.innerHTML = `
    <div class="game-page-hero" style="--art: ${game.art}">
      <img class="game-hero-image" src="${gameImage(state.selectedGame)}" alt="${game.cn} ${game.name} 攻略专题封面">
      <button class="text-action back-game" type="button" id="backCatalog">${t("backCatalog")}</button>
      <p class="eyebrow">${t("gamePageLabel")}</p>
      <h2>${game.name}</h2>
      <p>${game.cn} · ${game.studio} · ${game.genre}</p>
      <div class="deck-metrics game-metrics">
        <article><strong>${gameGuides.length}</strong><span>${t("guideCount")}</span></article>
        <article><strong>${Object.keys(grouped).length}</strong><span>${t("seriesCount")}</span></article>
      </div>
    </div>
    <div class="series-layout">
      <aside class="series-roadmap">
        <p class="field-label">${t("featuredSeries")}</p>
        ${Object.entries(grouped)
          .map(([type, items]) => `<a href="#series-${type}"><strong>${t("types")[type]}</strong><span>${items.length}</span></a>`)
          .join("")}
        <p class="field-label">${t("detailSources")}</p>
        <div class="source-list">
          ${game.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join("")}
        </div>
      </aside>
      <section>
        <p class="field-label">${t("allSeries")}</p>
        <div class="series-grid">${guideCards}</div>
      </section>
    </div>
  `;

  section.hidden = false;
  $("#backCatalog").addEventListener("click", () => {
    state.selectedGame = null;
    state.game = "all";
    render();
    document.querySelector("#guides").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll(".open-guide").forEach((button) => {
    button.addEventListener("click", () => openGuide(button.dataset.guide));
  });
}

function selectGame(id) {
  state.selectedGame = id;
  state.game = id;
  render();
  $("#games").hidden = false;
  $("#games").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openGuide(id) {
  const guide = fullGuides().find((item) => item.id === id);
  if (!guide) return;
  const game = games[guide.game];
  const article = expandGuide(guide);
  $("#dialogContent").innerHTML = `
    <div class="dialog-hero" style="--art: ${game.art}">
      <img class="dialog-image" src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图">
      <div class="guide-meta">
        <span>${game.name}</span>
        <span>${t("types")[guide.type]}</span>
        <span>${games[guide.game].cn}</span>
      </div>
      <h2>${guide.title}</h2>
    </div>
    <div class="dialog-body">
      <section>
        <p class="field-label">${t("detailGoal")}</p>
        <p>${guide.goal}</p>
        <p>${article.audience}</p>
      </section>
      <section>
        <p class="field-label">准备清单</p>
        <div class="resource-row">
          ${article.prep.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>
      <section>
        <p class="field-label">${t("detailSteps")}</p>
        <div class="phase-list">
          ${article.phases
            .map(
              (phase, index) => `
                <article>
                  <strong>0${index + 1} · ${phase.title}</strong>
                  <p>${phase.body}</p>
                  <span>${phase.detail}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
      <section>
        <p class="field-label">${t("detailResources")}</p>
        <div class="resource-row">
          ${guide.resources.map((resource) => `<span>${resource}</span>`).join("")}
        </div>
      </section>
      <section>
        <p class="field-label">常见错误</p>
        <ol class="steps">
          ${article.mistakes.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
      <section>
        <p class="field-label">进阶提示</p>
        <ol class="steps">
          ${article.advanced.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
      <section>
        <p class="field-label">${t("detailSources")}</p>
        <div class="source-list">
          ${guide.sources
            .map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`)
            .join("")}
        </div>
      </section>
    </div>
  `;
  $("#guideDialog").showModal();
}

function showToast() {
  const toast = $("#toast");
  toast.textContent = t("toast");
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function drawHero() {
  const canvas = $("#heroCanvas");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const w = rect.width;
  const h = rect.height;
  ctx.fillStyle = "#171717";
  ctx.fillRect(0, 0, w, h);

  const nodes = [
    [0.68, 0.2, 62, "#d49b37"],
    [0.82, 0.48, 88, "#11795f"],
    [0.58, 0.74, 54, "#b83624"],
    [0.92, 0.78, 70, "#f6f0e5"],
    [0.48, 0.36, 34, "#11795f"],
  ];

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(246,240,229,.22)";
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      ctx.beginPath();
      ctx.moveTo(nodes[i][0] * w, nodes[i][1] * h);
      ctx.lineTo(nodes[j][0] * w, nodes[j][1] * h);
      ctx.stroke();
    }
  }

  nodes.forEach(([x, y, size, color], index) => {
    const cx = x * w;
    const cy = y * h;
    const gradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,250,240,.38)";
    ctx.strokeRect(cx - size / 3, cy - size / 3, size / 1.5, size / 1.5);
    ctx.fillStyle = "rgba(255,250,240,.72)";
    ctx.font = "700 12px Avenir Next, sans-serif";
    ctx.fillText(`0${index + 1}`, cx - 8, cy + 4);
  });
}

function render() {
  applyCopy();
  renderFilters();
  renderGameCatalog();
  renderGameDetail();
  $("#metricGuides").textContent = guideMeta.length;
  $("#metricGames").textContent = Object.keys(games).length;
}

function bindControls() {
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });
  $("#sortSelect").addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });
  $("#closeDialog").addEventListener("click", () => $("#guideDialog").close());
  $("#submitButton").addEventListener("click", showToast);
  window.addEventListener("resize", drawHero);
}

initLanguageSelect();
bindControls();
render();
drawHero();
