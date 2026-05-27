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

const SUBMIT_EMAIL = "boy736809040@gmail.com";
const guideTypes = ["beginner", "build", "combat", "boss", "farming", "map", "meta"];

const copy = {
  zh: {
    brand: "GameOri",
    brandSub: "中国游戏攻略与新手引导",
    navGuides: "攻略",
    navTools: "工具",
    navGames: "游戏",
    navSubmit: "投稿",
    language: "语言",
    eyebrow: "Origin + Oriental game guides",
    headline: "GameOri，从源头读懂中国游戏",
    lead: "Ori 融合 Origin 与 Oriental：用透明来源、中文术语解释和新手路线，帮助全球玩家跨过语言与系统门槛。",
    metricGuides: "真实攻略",
    metricLangs: "界面语言",
    metricGames: "中国游戏",
    brandOriginEyebrow: "为什么叫 GameOri",
    brandOriginTitle: "游戏攻略的东方源点",
    originSourceTitle: "来源透明",
    originSourceText: "每篇攻略保留资料来源、适用版本和编辑状态，方便玩家判断内容是否可信。",
    originEastTitle: "读懂东方游戏语境",
    originEastText: "聚焦中国游戏里的中文术语、系统逻辑和玩法表达，降低跨文化理解成本。",
    originGuideTitle: "新手入口与攻略工具",
    originGuideText: "把游戏拆成专题、路线、FAQ 和资源清单，适合做攻略工具站与多语言引导站。",
    toolsEyebrow: "攻略工具",
    toolsTitle: "先查术语，再走路线",
    toolsLead: "把中文术语、相关攻略和新手阅读顺序集中在一处，帮助新玩家先理解概念，再进入具体文章。",
    glossaryEyebrow: "术语词典",
    glossaryTitle: "中文系统术语",
    glossaryPlaceholder: "搜术语、游戏、资源...",
    termCount: "个术语",
    relatedGuides: "相关攻略",
    starterToolEyebrow: "新手路线",
    starterToolTitle: "一款游戏该先看什么",
    routeTotal: "预计阅读",
    routeChecklist: "路线清单",
    routeEmpty: "暂无路线",
    routeOpenTopic: "打开专题",
    searchLabel: "搜索攻略",
    searchPlaceholder: "搜游戏、角色、Boss、资源...",
    gameFilter: "游戏",
    typeFilter: "攻略类型",
    all: "全部",
    submitTitle: "缺少你的游戏？",
    submitText: "提交游戏、攻略主题或资料来源，编辑审核后加入专题库。你可以直接发送到下面邮箱。",
    submitButton: "邮件投稿",
    boardEyebrow: "游戏目录",
    boardTitle: "选择游戏进入专题攻略",
    sortLabel: "排序",
    sortUpdated: "最近更新",
    sortDifficulty: "适合新手",
    sortPopular: "热度最高",
    emptyState: "没有找到匹配的游戏或攻略。",
    homeMediaEyebrow: "编辑推荐",
    homeMediaTitle: "今天先读这些攻略",
    hotGuides: "热门攻略",
    starterRoutes: "新手路线",
    recentUpdates: "最近更新",
    readNow: "查看",
    topicReadingEyebrow: "推荐顺序",
    topicReadingTitle: "第一次玩先这样读",
    topicReadingHint: "按入门、养成、战斗、地图串起一条阅读线，先建立系统理解，再进入细节。",
    topicFocus: "当前重点",
    topicLatest: "最近更新",
    topicCoverage: "覆盖范围",
    topicSources: "资料来源",
    topicHubEyebrow: "专题中枢",
    topicHubTitle: "按你的卡点进入攻略",
    topicHubHint: "把同一个游戏拆成问题、阶段和资源雷达，不需要从目录里盲找。",
    topicProblemStart: "刚开局，不知道先看什么",
    topicProblemBuild: "角色、装备或流派不会配",
    topicProblemCombat: "战斗、Boss 或高压关卡卡住",
    topicProblemMap: "地图、收集和路线容易漏",
    topicProblemMeta: "版本目标和长期资源怎么排",
    topicStageStarter: "新手入门",
    topicStageGrowth: "稳定养成",
    topicStageChallenge: "高难与版本",
    topicRadar: "资源雷达",
    topicRadarHint: "高频术语与资源",
    topicLatestGuide: "最新攻略",
    topicVersionStatus: "版本时效",
    topicVersionStable: "版本状态稳定",
    topicVersionReview: "需要复核",
    topicVersionLatest: "最近校验",
    topicVersionFresh: "新近校验",
    topicVersionWatch: "持续观察",
    topicVersionStale: "可能过期",
    gamesEyebrow: "游戏索引",
    gamesTitle: "游戏专题",
    openGame: "进入专题",
    backCatalog: "返回游戏库",
    guideCount: "篇攻略",
    seriesCount: "个系列",
    gamePageLabel: "游戏专题",
    featuredSeries: "专题路线",
    allSeries: "全部系列攻略",
    articleToc: "文章目录",
    articlePrep: "准备清单",
    articleMistakes: "常见错误",
    articleAdvanced: "进阶提示",
    articleTerms: "中文术语解释",
    articleRelated: "同专题攻略",
    articleFaq: "常见问题",
    articleDecision: "决策表",
    articlePriority: "资源优先级",
    articleCheckpoints: "阶段验收",
    articleWhen: "何时处理",
    articleAction: "执行动作",
    articleStop: "停止条件",
    backTopic: "返回专题",
    editorialNote: "编辑说明",
    breadcrumbHome: "首页",
    breadcrumbGames: "游戏专题",
    articleUpdated: "最后更新",
    articleApplies: "适用版本",
    articleFreshness: "时效状态",
    articleFresh: "新近校验",
    articleWatch: "持续观察",
    articleStale: "可能过期",
    articleSourceCount: "来源数量",
    articleReviewStatus: "编辑状态",
    articleReviewText: "已按目标、准备、路线、误区和术语完成基础审核，后续根据版本变化继续补充。",
    catalogMeta: "攻略",
    openGuide: "查看攻略",
    updated: "更新",
    difficulty: "难度",
    minutes: "分钟",
    detailGoal: "目标",
    detailSteps: "执行路线",
    detailResources: "关键资源",
    detailSources: "资料来源",
    toast: "正在打开邮件客户端；如果没有弹出，请手动发送到 boy736809040@gmail.com。",
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
    brand: "GameOri",
    brandSub: "Origin-aware Chinese game guides",
    navGuides: "Guides",
    navTools: "Tools",
    navGames: "Games",
    navSubmit: "Submit",
    language: "Language",
    eyebrow: "Origin + Oriental game guides",
    headline: "GameOri, understand Chinese games from the source",
    lead: "Ori blends Origin and Oriental: source-tracked guides, Chinese terminology, and beginner routes for players crossing language and system barriers.",
    metricGuides: "Real guides",
    metricLangs: "UI languages",
    metricGames: "Chinese games",
    brandOriginEyebrow: "Why GameOri",
    brandOriginTitle: "The eastern origin point for game guides",
    originSourceTitle: "Source transparency",
    originSourceText: "Each guide keeps sources, applicable version context, and editorial status so players can judge trust quickly.",
    originEastTitle: "Eastern game context",
    originEastText: "We explain Chinese game terms, systems, and play patterns so global players can read the game behind the translation.",
    originGuideTitle: "Beginner routes and guide tools",
    originGuideText: "Games are structured into pages, routes, FAQs, and resource checklists for guide tools and multilingual onboarding.",
    toolsEyebrow: "Guide tools",
    toolsTitle: "Check terms, then follow a route",
    toolsLead: "Chinese terminology, related guides, and beginner reading order in one place, so players understand the system before opening a full guide.",
    glossaryEyebrow: "Glossary",
    glossaryTitle: "Chinese system terms",
    glossaryPlaceholder: "Search term, game, resource...",
    termCount: "terms",
    relatedGuides: "Related guides",
    starterToolEyebrow: "Starter route",
    starterToolTitle: "What to read first",
    routeTotal: "Estimated read",
    routeChecklist: "Route checklist",
    routeEmpty: "No route yet",
    routeOpenTopic: "Open topic",
    searchLabel: "Search guides",
    searchPlaceholder: "Search game, hero, boss, resource...",
    gameFilter: "Game",
    typeFilter: "Guide type",
    all: "All",
    submitTitle: "Missing a game?",
    submitText: "Submit a game, guide topic, or source for editorial review. You can email the address below.",
    submitButton: "Email submission",
    boardEyebrow: "Game directory",
    boardTitle: "Choose a game to enter its guide page",
    sortLabel: "Sort",
    sortUpdated: "Recently updated",
    sortDifficulty: "Beginner friendly",
    sortPopular: "Most popular",
    emptyState: "No matching games or guides found.",
    homeMediaEyebrow: "Editorial picks",
    homeMediaTitle: "Start with these guides today",
    hotGuides: "Popular guides",
    starterRoutes: "Starter routes",
    recentUpdates: "Recent updates",
    readNow: "Read",
    topicReadingEyebrow: "Reading order",
    topicReadingTitle: "Read these first",
    topicReadingHint: "Follow beginner, build, combat, and map guides as one route before jumping into details.",
    topicFocus: "Current focus",
    topicLatest: "Latest update",
    topicCoverage: "Coverage",
    topicSources: "Sources",
    topicHubEyebrow: "Topic hub",
    topicHubTitle: "Enter by your blocker",
    topicHubHint: "Each game is organized by problems, player stages, and resource signals instead of a flat directory.",
    topicProblemStart: "New start, what first?",
    topicProblemBuild: "Builds, gear, or roles",
    topicProblemCombat: "Combat, bosses, pressure",
    topicProblemMap: "Map, routes, collection",
    topicProblemMeta: "Patch goals and long-term resources",
    topicStageStarter: "Starter",
    topicStageGrowth: "Progression",
    topicStageChallenge: "Challenge",
    topicRadar: "Resource radar",
    topicRadarHint: "Frequent terms and resources",
    topicLatestGuide: "Latest guide",
    topicVersionStatus: "Version status",
    topicVersionStable: "Coverage looks current",
    topicVersionReview: "Needs review",
    topicVersionLatest: "Latest check",
    topicVersionFresh: "Fresh",
    topicVersionWatch: "Watching",
    topicVersionStale: "May be outdated",
    gamesEyebrow: "Game index",
    gamesTitle: "Game page",
    openGame: "Open page",
    backCatalog: "Back to library",
    guideCount: "guides",
    seriesCount: "series",
    gamePageLabel: "Game page",
    featuredSeries: "Guide roadmap",
    allSeries: "All guide series",
    articleToc: "Article map",
    articlePrep: "Prep checklist",
    articleMistakes: "Common mistakes",
    articleAdvanced: "Advanced tips",
    articleTerms: "Chinese terms",
    articleRelated: "Related guides",
    articleFaq: "FAQ",
    articleDecision: "Decision table",
    articlePriority: "Resource priority",
    articleCheckpoints: "Stage checkpoints",
    articleWhen: "When",
    articleAction: "Action",
    articleStop: "Stop when",
    backTopic: "Back to page",
    editorialNote: "Editorial note",
    breadcrumbHome: "Home",
    breadcrumbGames: "Game pages",
    articleUpdated: "Last updated",
    articleApplies: "Applies to",
    articleFreshness: "Freshness",
    articleFresh: "Fresh",
    articleWatch: "Watching",
    articleStale: "May be outdated",
    articleSourceCount: "Sources",
    articleReviewStatus: "Editorial status",
    articleReviewText: "Reviewed as a practical guide with goal, prep, route, mistakes, and terminology. It will keep evolving with patches.",
    catalogMeta: "guides",
    openGuide: "View guide",
    updated: "Updated",
    difficulty: "Difficulty",
    minutes: "min",
    detailGoal: "Goal",
    detailSteps: "Route",
    detailResources: "Key resources",
    detailSources: "Sources",
    toast: "Opening your mail client. If nothing appears, email boy736809040@gmail.com manually.",
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
    brand: "GameOri",
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
    openGuide: "攻略を見る",
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
    brand: "GameOri",
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
    openGuide: "공략 보기",
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
    brand: "GameOri",
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
    openGuide: "Ver guía",
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
    brand: "GameOri",
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
    openGuide: "Voir le guide",
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
    brand: "GameOri",
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
    openGuide: "Guide ansehen",
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
    brand: "GameOri",
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
    openGuide: "Ver guia",
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

const { art, games, guideMeta, termDescriptions } = globalThis.GameOriContent;

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
  toolGame: "all",
  toolTermQuery: "",
  starterGame: "blackmyth",
  selectedGame: null,
  selectedGuide: null,
};

const $ = (selector) => document.querySelector(selector);

function getSiteRootHref() {
  const base = document.querySelector("base");
  if (base) return new URL(base.getAttribute("href") || "./", window.location.href).href;

  const url = new URL(window.location.href);
  const parts = url.pathname.split("/");
  const routeIndex = parts.findIndex((part) => part === "games" || part === "guides");
  url.pathname = routeIndex === -1 ? url.pathname.replace(/[^/]*$/, "") : `${parts.slice(0, routeIndex).join("/")}/`;
  url.search = "";
  url.hash = "";
  return url.href;
}

const siteRootHref = getSiteRootHref();

function t(key) {
  const currentCopy = copy[state.lang] || {};
  if (currentCopy[key] !== undefined) return currentCopy[key];
  if (copy.en[key] !== undefined) return copy.en[key];
  return copy.zh[key];
}

function guideUpdatedAt(guide) {
  if (guide.updated) return guide.updated;
  const index = guideMeta.findIndex((item) => item.id === guide.id);
  const daysAgo = Math.max(0, guideMeta.length - index - 1);
  const date = new Date(Date.UTC(2026, 4, 23 - daysAgo));
  return date.toISOString().slice(0, 10);
}

function formatGuideDate(value) {
  const locale = state.lang === "zh" ? "zh-CN" : state.lang;
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(new Date(`${value}T00:00:00+08:00`));
}

function guideAgeDays(guide) {
  const updated = new Date(`${guide.updated}T00:00:00+08:00`);
  const diff = Date.now() - updated.getTime();
  return Math.max(0, Math.floor(diff / 86400000));
}

function guideFreshness(guide) {
  const age = guideAgeDays(guide);
  if (age <= 30) return { key: "fresh", label: t("articleFresh"), age };
  if (age <= 90) return { key: "watch", label: t("articleWatch"), age };
  return { key: "stale", label: t("articleStale"), age };
}

function guideAppliesTo(guide) {
  const game = games[guide.game];
  if (guide.type === "meta") return `${game.cn} 当前赛季 / 版本目标`;
  if (["oncehuman", "deltaforce"].includes(guide.game)) return `${game.cn} 当前赛季常规循环`;
  if (["hok", "marvelrivals", "naraka"].includes(guide.game)) return `${game.cn} 当前匹配与排位环境`;
  return `${game.cn} 当前公开版本常规机制`;
}

function guideStatusCards(guide) {
  const freshness = guideFreshness(guide);
  return [
    { label: t("articleUpdated"), value: formatGuideDate(guide.updated) },
    { label: t("articleApplies"), value: guideAppliesTo(guide) },
    { label: t("articleFreshness"), value: freshness.label },
    { label: t("articleSourceCount"), value: `${guide.sources.length} ${t("topicSources")}` },
    { label: t("articleReviewStatus"), value: t("articleReviewText") },
  ];
}

function fullGuides() {
  return guideMeta.map((guide) => {
    const game = games[guide.game];
    return { ...guide, updated: guideUpdatedAt(guide), image: gameImage(guide.game), sources: game.sources };
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
    wherewinds: "assets/real/games/wherewinds.jpg",
    infinitynikki: "assets/real/games/infinitynikki.jpg",
    oncehuman: "assets/real/games/oncehuman.jpg",
    marvelrivals: "assets/real/games/marvelrivals.jpg",
    mechabreak: "assets/real/games/mechabreak.jpg",
  };
  return realImages[id] || `assets/games/${id}.svg`;
}

function explainTerm(term, game) {
  return termDescriptions[term] || `${term} 是《${game.cn}》攻略语境里的关键概念，执行路线前先确认它的解锁状态、数量或当前等级。`;
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
  const primary = guide.resources[0];
  const secondary = guide.resources[1] || primary;
  const third = guide.resources[2] || secondary;
  return {
    audience: `适合正在游玩《${game.cn}》、想系统理解「${guide.title}」的玩家。`,
    prep: guide.resources.map((item, index) => `${item}：${index === 0 ? "优先确认是否已经解锁或够用。" : "在执行路线前检查数量、等级或可用状态。"}`),
    decisions: [
      {
        scenario: `还没解锁「${primary}」`,
        action: "先回到主线、基础系统或前置节点，不急着照抄后续配置。",
        result: "解锁后再执行本文路线，避免因为系统缺失导致判断失真。",
      },
      {
        scenario: `已经有「${secondary}」但效率不稳定`,
        action: "优先检查循环是否完整，再补等级、装备、词条或补给。",
        result: "能稳定完成核心动作后，再追求更快、更省资源的做法。",
      },
      {
        scenario: "同一位置反复失败",
        action: "把失败原因归类为机制没懂、资源不够、路线错误或操作窗口太贪。",
        result: "每次调整只改一个变量，方便确认真正有效的改法。",
      },
    ],
    priorityRows: guide.resources.map((item, index) => ({
      name: item,
      when: index === 0 ? "开始前" : index === 1 ? "执行中" : "稳定后",
      action:
        index === 0
          ? "确认解锁状态、最低数量和是否影响路线入口。"
          : index === 1
            ? "根据当前账号练度补齐，优先保证循环不断档。"
            : "只在核心路线稳定后继续投入，避免过早追求毕业。",
      stop:
        index === 0
          ? "可以进入目标内容并完成基础操作。"
          : index === 1
            ? "失败次数明显下降，资源消耗可控。"
            : "收益变低或开始挤占其他关键养成。",
    })),
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
    checkpoints: [
      `开打或开刷前：确认「${primary}」已经满足最低要求，并准备好失败后的补救路线。`,
      `执行到一半：如果「${secondary}」成为瓶颈，暂停推进，先补最影响循环的缺口。`,
      `路线完成后：复盘「${third}」是否还需要继续投入，避免把资源砸到低收益目标。`,
    ],
    mistakes: [
      `把「${guide.resources[0]}」当成唯一解法，忽略队伍/装备/路线之间的配合。`,
      "在没有确认机制前反复消耗体力或材料，导致后续养成断档。",
      "只照抄结论，不根据自己的角色池、练度和地图进度做调整。",
    ],
    advanced: [
      `如果已经能稳定完成基础路线，可以把目标从通关改成缩短时间或减少资源消耗。`,
      `把这篇攻略和同游戏的其他系列攻略一起看，尤其是养成、地图和战斗分类。`,
    ],
    faq: [
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
  const submitEmail = $("#submitEmailLink");
  if (submitEmail) {
    submitEmail.href = buildSubmitMailto();
    submitEmail.textContent = SUBMIT_EMAIL;
  }
  const brand = $(".brand");
  if (brand) brand.href = homePath();
  const guidesLink = document.querySelector('[data-i18n="navGuides"]');
  const toolsLink = document.querySelector('[data-i18n="navTools"]');
  const gamesLink = document.querySelector('[data-i18n="navGames"]');
  const submitLink = document.querySelector('[data-i18n="navSubmit"]');
  if (guidesLink) guidesLink.href = anchorPath("index.html#guides");
  if (toolsLink) toolsLink.href = anchorPath("index.html#tools");
  if (gamesLink) gamesLink.href = anchorPath("index.html#guides");
  if (submitLink) submitLink.href = anchorPath("submit/");
}

function chip(label, value, group, active) {
  return `<button class="chip" type="button" data-group="${group}" data-value="${value}" aria-pressed="${String(active)}">${label}</button>`;
}

function routePath(path) {
  return new URL(path, siteRootHref).href;
}

function homePath() {
  return routePath("index.html");
}

function anchorPath(path) {
  return routePath(path);
}

function updateRoute(routeState, url) {
  const target = new URL(url, window.location.href);
  if (window.location.protocol === "file:" && target.pathname !== window.location.pathname) {
    window.location.href = target.href;
    return false;
  }

  try {
    history.pushState(routeState, "", target.href);
    return true;
  } catch (error) {
    window.location.href = target.href;
    return false;
  }
}

function gamePath(id) {
  return routePath(`games/${id}/index.html`);
}

function guidePath(id) {
  return routePath(`guides/${id}/index.html`);
}

function hasSelectedGamePage() {
  return Boolean(state.selectedGame && games[state.selectedGame] && !state.selectedGuide);
}

function hasSelectedGuidePage() {
  return Boolean(state.selectedGuide && guideMeta.some((guide) => guide.id === state.selectedGuide));
}

function setPageMode() {
  const gamePage = hasSelectedGamePage();
  const guidePage = hasSelectedGuidePage();
  document.body.classList.toggle("is-topic-page", gamePage || guidePage);
  document.body.classList.toggle("is-guide-page", guidePage);
  $(".command-deck").hidden = gamePage || guidePage;
  $("#guides").hidden = gamePage || guidePage;
  $("#games").hidden = !gamePage;
  $("#articlePage").hidden = !guidePage;
}

function parseRoute() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const gameIndex = parts.indexOf("games");
  const guideIndex = parts.indexOf("guides");
  if (gameIndex !== -1 && parts[gameIndex + 1]) return { type: "game", id: parts[gameIndex + 1] };
  if (guideIndex !== -1 && parts[guideIndex + 1]) return { type: "guide", id: parts[guideIndex + 1] };
  return { type: "home" };
}

function syncRouteToState() {
  const route = parseRoute();
  if (route.type === "game" && games[route.id]) {
    state.selectedGame = route.id;
    state.game = route.id;
    state.selectedGuide = null;
    return;
  }
  if (route.type === "guide") {
    const guide = guideMeta.find((item) => item.id === route.id);
    if (guide) {
      state.selectedGame = guide.game;
      state.game = guide.game;
      state.selectedGuide = guide.id;
      return;
    }
  }
  state.selectedGame = null;
  state.selectedGuide = null;
  state.game = "all";
}

function buildSubmitMailto() {
  const subject = "游戏攻略投稿 / Game guide submission";
  const body = [
    "投稿类型（新增游戏 / 新攻略 / 修正资料）：",
    "游戏名称：",
    "攻略主题：",
    "目标语言：",
    "参考资料链接：",
    "你的说明：",
    "",
    "Submitted from GameOri.",
  ].join("\n");
  return `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderFilters() {
  const gameButtons = [chip(t("all"), "all", "game", state.game === "all")].concat(
    Object.entries(games).map(([id, game]) => chip(game.name, id, "game", state.game === id)),
  );
  $("#gameFilters").innerHTML = gameButtons.join("");

  const typeButtons = [chip(t("all"), "all", "type", state.type === "all")].concat(
    guideTypes.map((id) => chip(t("types")[id], id, "type", state.type === id)),
  );
  $("#typeFilters").innerHTML = typeButtons.join("");

  document.querySelectorAll(".chip").forEach((button) => {
    button.addEventListener("click", () => {
      state[button.dataset.group] = button.dataset.value;
      if (button.dataset.group === "game") {
        state.selectedGame = null;
        state.selectedGuide = null;
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

function getReadingPath(guides, limit = 5) {
  const priority = ["beginner", "build", "combat", "map", "boss", "farming", "meta"];
  return priority
    .flatMap((type) =>
      guides
        .filter((guide) => guide.type === type)
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, type === "beginner" ? 2 : 1),
    )
    .slice(0, limit);
}

function firstGuideForTypes(grouped, types) {
  return types.flatMap((type) => grouped[type] || []).sort((a, b) => b.popularity - a.popularity)[0];
}

function topResourcesForGuides(guides, limit = 4) {
  const count = new Map();
  guides.forEach((guide) => {
    guide.resources.forEach((resource) => count.set(resource, (count.get(resource) || 0) + 1));
  });
  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hans-CN"))
    .slice(0, limit)
    .map(([resource]) => resource);
}

function topicProblemCards(grouped) {
  return [
    { label: t("topicProblemStart"), types: ["beginner"], tone: "start" },
    { label: t("topicProblemBuild"), types: ["build", "farming"], tone: "build" },
    { label: t("topicProblemCombat"), types: ["combat", "boss"], tone: "combat" },
    { label: t("topicProblemMap"), types: ["map"], tone: "map" },
    { label: t("topicProblemMeta"), types: ["meta"], tone: "meta" },
  ]
    .map((item) => ({ ...item, guide: firstGuideForTypes(grouped, item.types) }))
    .filter((item) => item.guide);
}

function topicStageLanes(gameGuides) {
  return [
    { label: t("topicStageStarter"), guides: getReadingPath(gameGuides.filter((guide) => ["beginner", "map"].includes(guide.type)), 3) },
    { label: t("topicStageGrowth"), guides: getReadingPath(gameGuides.filter((guide) => ["build", "farming"].includes(guide.type)), 3) },
    { label: t("topicStageChallenge"), guides: getReadingPath(gameGuides.filter((guide) => ["combat", "boss", "meta"].includes(guide.type)), 3) },
  ].filter((lane) => lane.guides.length);
}

function topicResourceRows(grouped) {
  return Object.entries(grouped).map(([type, items]) => {
    const latest = [...items].sort((a, b) => new Date(b.updated) - new Date(a.updated))[0];
    return { type, count: items.length, latest, resources: topResourcesForGuides(items, 4) };
  });
}

function topicVersionSummary(guides) {
  const latest = [...guides].sort((a, b) => new Date(b.updated) - new Date(a.updated))[0];
  const counts = guides.reduce(
    (acc, guide) => {
      acc[guideFreshness(guide).key] += 1;
      return acc;
    },
    { fresh: 0, watch: 0, stale: 0 },
  );
  return { latest, counts };
}

function glossaryEntries() {
  const entries = new Map();
  fullGuides().forEach((guide) => {
    const game = games[guide.game];
    guide.resources.forEach((term) => {
      if (!entries.has(term)) {
        entries.set(term, { term, description: explainTerm(term, game), games: new Map(), guides: [] });
      }

      const entry = entries.get(term);
      entry.games.set(guide.game, game);
      if (!entry.guides.some((item) => item.id === guide.id)) entry.guides.push(guide);
    });
  });

  return Array.from(entries.values()).sort((a, b) => b.guides.length - a.guides.length || a.term.localeCompare(b.term, "zh-Hans-CN"));
}

function filteredGlossaryEntries() {
  const query = state.toolTermQuery.trim().toLowerCase();
  const rankEntry = (entry) => {
    if (!query) return 0;
    if (entry.term.toLowerCase().includes(query)) return 0;
    if (entry.description.toLowerCase().includes(query)) return 1;
    const gameText = Array.from(entry.games.values())
      .flatMap((game) => [game.name, game.cn, game.genre])
      .join(" ")
      .toLowerCase();
    if (gameText.includes(query)) return 2;
    return 3;
  };

  return glossaryEntries()
    .filter((entry) => state.toolGame === "all" || entry.games.has(state.toolGame))
    .filter((entry) => {
      if (!query) return true;
      const haystack = [
        entry.term,
        entry.description,
        ...Array.from(entry.games.values()).flatMap((game) => [game.name, game.cn, game.genre]),
        ...entry.guides.map((guide) => `${guide.title} ${guide.summary}`),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => rankEntry(a) - rankEntry(b) || b.guides.length - a.guides.length || a.term.localeCompare(b.term, "zh-Hans-CN"))
    .slice(0, 14);
}

function gameOptions(selectedId, includeAll = false) {
  const options = includeAll ? [`<option value="all">${t("all")}</option>`] : [];
  return options
    .concat(Object.entries(games).map(([id, game]) => `<option value="${id}">${game.name}</option>`))
    .join("")
    .replace(`value="${selectedId}"`, `value="${selectedId}" selected`);
}

function renderGlossaryTool() {
  const list = $("#termList");
  const count = $("#glossaryCount");
  const input = $("#glossarySearch");
  const select = $("#glossaryGameSelect");
  if (!list || !count || !input || !select) return;

  input.value = state.toolTermQuery;
  select.innerHTML = gameOptions(state.toolGame, true);
  select.value = state.toolGame;

  const entries = filteredGlossaryEntries();
  count.textContent = `${entries.length} ${t("termCount")}`;
  if (!entries.length) {
    list.innerHTML = `<p class="tool-empty">${t("emptyState")}</p>`;
    return;
  }

  list.innerHTML = entries
    .map((entry) => {
      const gameChips = Array.from(entry.games.entries())
        .slice(0, 4)
        .map(([id, game]) => `<a class="term-chip" href="${gamePath(id)}" data-game="${id}">${game.name}</a>`)
        .join("");
      const relatedGuides = entry.guides
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3)
        .map((guide) => `<a href="${guidePath(guide.id)}" data-guide="${guide.id}" class="article-card">${guide.title}</a>`)
        .join("");

      return `
        <article class="term-item">
          <div class="term-copy">
            <strong>${entry.term}</strong>
            <p>${entry.description}</p>
          </div>
          <div class="term-games">${gameChips}</div>
          <div class="term-related">
            <span>${t("relatedGuides")}</span>
            ${relatedGuides}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderStarterTool() {
  const container = $("#starterRouteTool");
  const select = $("#starterGameSelect");
  if (!container || !select) return;

  if (!games[state.starterGame]) state.starterGame = Object.keys(games)[0];
  select.innerHTML = gameOptions(state.starterGame);
  select.value = state.starterGame;

  const game = games[state.starterGame];
  const gameGuides = fullGuides().filter((guide) => guide.game === state.starterGame);
  const route = getReadingPath(gameGuides, 6);
  if (!route.length) {
    container.innerHTML = `<p class="tool-empty">${t("routeEmpty")}</p>`;
    return;
  }

  const totalMinutes = route.reduce((sum, guide) => sum + guide.minutes, 0);
  container.innerHTML = `
    <div class="starter-summary">
      <div>
        <span>${game.cn}</span>
        <strong>${game.name}</strong>
      </div>
      <div>
        <span>${t("routeTotal")}</span>
        <strong>${totalMinutes} ${t("minutes")}</strong>
      </div>
      <a class="text-action route-topic-link" href="${gamePath(state.starterGame)}" data-game="${state.starterGame}">${t("routeOpenTopic")}</a>
    </div>
    <div class="route-tool-head">
      <p class="field-label">${t("routeChecklist")}</p>
      <span>${route.length} ${t("guideCount")}</span>
    </div>
    <div class="route-tool-steps">
      ${route
        .map(
          (guide, index) => `
            <a class="route-step-card article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>${t("types")[guide.type]} · ${guide.minutes} ${t("minutes")}</small>
                <strong>${guide.title}</strong>
                <p>${guide.summary}</p>
              </div>
            </a>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderGuideTools() {
  const section = $("#tools");
  if (!section) return;

  const contentPage = hasSelectedGamePage() || hasSelectedGuidePage();
  section.hidden = contentPage;
  if (contentPage) {
    $("#termList").innerHTML = "";
    $("#starterRouteTool").innerHTML = "";
    return;
  }

  renderGlossaryTool();
  renderStarterTool();
}

function guideTeaser(guide, index) {
  const game = games[guide.game];
  return `
    <a class="media-row article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <strong>${guide.title}</strong>
        <small>${game.name} · ${t("types")[guide.type]}</small>
      </div>
    </a>
  `;
}

function mediaLead(guide) {
  const game = games[guide.game];
  return `
    <a class="media-lead article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
      <img src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图" loading="lazy">
      <div>
        <div class="guide-meta">
          <span>${game.name}</span>
          <span>${t("types")[guide.type]}</span>
          <span>${guide.minutes} ${t("minutes")}</span>
        </div>
        <h3>${guide.title}</h3>
        <p>${guide.summary}</p>
        <span class="media-action">${t("readNow")}</span>
      </div>
    </a>
  `;
}

function renderHomeMedia() {
  const grid = $("#homeMediaGrid");
  const section = $("#homeMedia");
  if (!grid || !section) return;

  const contentPage = hasSelectedGamePage() || hasSelectedGuidePage();
  section.hidden = contentPage;
  if (contentPage) {
    grid.innerHTML = "";
    return;
  }

  const guides = fullGuides();
  const hotGuides = [...guides].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  const starterGuides = getReadingPath([...guides].sort((a, b) => b.popularity - a.popularity), 5);
  const recentGuides = [...guides].sort((a, b) => new Date(b.updated) - new Date(a.updated)).slice(0, 5);

  grid.innerHTML = `
    <section class="media-panel media-panel-hot">
      <div class="media-panel-head">
        <p>${t("hotGuides")}</p>
        <span>${hotGuides.length} ${t("catalogMeta")}</span>
      </div>
      ${mediaLead(hotGuides[0])}
      <div class="media-list">
        ${hotGuides.slice(1).map(guideTeaser).join("")}
      </div>
    </section>

    <section class="media-panel media-panel-route">
      <div class="media-panel-head">
        <p>${t("starterRoutes")}</p>
        <span>${t("topicReadingEyebrow")}</span>
      </div>
      <div class="route-stack">
        ${starterGuides.map(guideTeaser).join("")}
      </div>
    </section>

    <section class="media-panel media-panel-updates">
      <div class="media-panel-head">
        <p>${t("recentUpdates")}</p>
        <span>${formatGuideDate(recentGuides[0].updated)}</span>
      </div>
      <div class="update-list">
        ${recentGuides
          .map(
            (guide) => `
              <a class="update-row article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
                <time datetime="${guide.updated}">${formatGuideDate(guide.updated)}</time>
                <div>
                  <strong>${guide.title}</strong>
                  <span>${games[guide.game].name} · ${t("types")[guide.type]}</span>
                </div>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
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
  const contentPage = hasSelectedGamePage() || hasSelectedGuidePage();
  $(".command-deck").hidden = contentPage;
  $("#guides").hidden = contentPage;
  if (contentPage) {
    $("#emptyState").hidden = true;
    $("#gameCatalog").innerHTML = "";
    return;
  }

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
            <a class="open-game" href="${gamePath(id)}" data-game="${id}">${t("openGame")}</a>
          </div>
        </article>
      `;
    })
    .join("");

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
              <a class="open-guide" href="${guidePath(guide.id)}" data-guide="${guide.id}">${t("openGuide")}</a>
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
  if (!state.selectedGame || !games[state.selectedGame] || state.selectedGuide) {
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
  const grouped = guideTypes.reduce((acc, type) => {
    const items = gameGuides.filter((guide) => guide.type === type);
    if (items.length) acc[type] = items;
    return acc;
  }, {});
  const compactGuides = guideTypes.flatMap((type) => grouped[type] || []);
  const readingPath = getReadingPath(gameGuides, 5);
  const problemCards = topicProblemCards(grouped);
  const stageLanes = topicStageLanes(gameGuides);
  const radarRows = topicResourceRows(grouped);
  const versionSummary = topicVersionSummary(gameGuides);
  const latestGuide = [...gameGuides].sort((a, b) => new Date(b.updated) - new Date(a.updated))[0];
  const focusGuide = readingPath[0] || gameGuides[0];
  const anchoredTypes = new Set();
  const guideCards = compactGuides
    .map((guide) => {
      const anchor = anchoredTypes.has(guide.type) ? "" : ` id="series-${guide.type}"`;
      anchoredTypes.add(guide.type);
      return `
        <a class="compact-guide-card article-card"${anchor} href="${guidePath(guide.id)}" data-guide="${guide.id}">
          <img class="compact-guide-image" src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图" loading="lazy">
          <div class="compact-guide-copy">
            <div class="compact-guide-meta">
              <span>${t("types")[guide.type]}</span>
              <span>${guide.minutes} ${t("minutes")}</span>
            </div>
            <h3>${guide.title}</h3>
            <p>${guide.summary}</p>
          </div>
          <span class="article-action">${t("openGuide")}</span>
        </a>
      `;
    })
    .join("");

  detail.innerHTML = `
    <div class="game-page-hero" style="--art: ${game.art}">
      <img class="game-hero-image" src="${gameImage(state.selectedGame)}" alt="${game.cn} ${game.name} 攻略专题封面">
      <a class="text-action back-game" href="${homePath()}" id="backCatalog">${t("backCatalog")}</a>
      <p class="eyebrow">${t("gamePageLabel")}</p>
      <h2>${game.name}</h2>
      <p>${game.cn} · ${game.studio} · ${game.genre}</p>
      <div class="deck-metrics game-metrics">
        <article><strong>${gameGuides.length}</strong><span>${t("guideCount")}</span></article>
        <article><strong>${Object.keys(grouped).length}</strong><span>${t("seriesCount")}</span></article>
      </div>
    </div>
    <section class="topic-brief">
      <article>
        <span>${t("topicFocus")}</span>
        <strong>${focusGuide.title}</strong>
        <p>${focusGuide.summary}</p>
      </article>
      <article>
        <span>${t("topicLatest")}</span>
        <strong>${formatGuideDate(latestGuide.updated)}</strong>
        <p>${latestGuide.title}</p>
      </article>
      <article>
        <span>${t("topicCoverage")}</span>
        <strong>${Object.keys(grouped).length} / ${guideTypes.length}</strong>
        <p>${Object.keys(grouped).map((type) => t("types")[type]).join(" · ")}</p>
      </article>
      <article>
        <span>${t("topicSources")}</span>
        <strong>${game.sources.length}</strong>
        <p>${game.sources.map((source) => source.label).join(" · ")}</p>
      </article>
    </section>
    <section class="topic-version-strip">
      <div>
        <p class="field-label">${t("topicVersionStatus")}</p>
        <h3>${versionSummary.counts.stale ? `${versionSummary.counts.stale} ${t("topicVersionReview")}` : t("topicVersionStable")}</h3>
        <p>${t("topicVersionLatest")}：${versionSummary.latest.title} · ${formatGuideDate(versionSummary.latest.updated)}</p>
      </div>
      <div class="version-metrics">
        <article class="freshness-fresh"><strong>${versionSummary.counts.fresh}</strong><span>${t("topicVersionFresh")}</span></article>
        <article class="freshness-watch"><strong>${versionSummary.counts.watch}</strong><span>${t("topicVersionWatch")}</span></article>
        <article class="freshness-stale"><strong>${versionSummary.counts.stale}</strong><span>${t("topicVersionStale")}</span></article>
      </div>
    </section>
    <section class="topic-reading-path">
      <div class="topic-reading-copy">
        <p class="field-label">${t("topicReadingEyebrow")}</p>
        <h3>${t("topicReadingTitle")}</h3>
        <p>${t("topicReadingHint")}</p>
      </div>
      <div class="topic-reading-steps">
        ${readingPath
          .map(
            (guide, index) => `
              <a class="reading-step article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>${t("types")[guide.type]} · ${guide.minutes} ${t("minutes")}</small>
                  <strong>${guide.title}</strong>
                </div>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
    <section class="topic-command-center">
      <div class="topic-command-head">
        <div>
          <p class="field-label">${t("topicHubEyebrow")}</p>
          <h3>${t("topicHubTitle")}</h3>
        </div>
        <p>${t("topicHubHint")}</p>
      </div>
      <div class="topic-command-grid">
        <div class="problem-panel">
          ${problemCards
            .map(
              (item) => `
                <a class="problem-card problem-${item.tone} article-card" href="${guidePath(item.guide.id)}" data-guide="${item.guide.id}">
                  <span>${t("types")[item.guide.type]}</span>
                  <strong>${item.label}</strong>
                  <p>${item.guide.title}</p>
                </a>
              `,
            )
            .join("")}
        </div>
        <div class="stage-panel">
          ${stageLanes
            .map(
              (lane) => `
                <article class="stage-lane">
                  <div class="stage-lane-head">
                    <strong>${lane.label}</strong>
                    <span>${lane.guides.length} ${t("guideCount")}</span>
                  </div>
                  <div>
                    ${lane.guides
                      .map(
                        (guide, index) => `
                          <a class="stage-step article-card" href="${guidePath(guide.id)}" data-guide="${guide.id}">
                            <span>${index + 1}</span>
                            <div>
                              <small>${t("types")[guide.type]} · ${guide.minutes} ${t("minutes")}</small>
                              <strong>${guide.title}</strong>
                            </div>
                          </a>
                        `,
                      )
                      .join("")}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="radar-panel">
          <div class="radar-head">
            <strong>${t("topicRadar")}</strong>
            <span>${t("topicRadarHint")}</span>
          </div>
          ${radarRows
            .map(
              (row) => `
                <a class="radar-row" href="${guidePath(row.latest.id)}" data-guide="${row.latest.id}">
                  <span>${t("types")[row.type]}</span>
                  <strong>${row.count}</strong>
                  <p>${row.resources.join(" · ")}</p>
                  <small>${t("topicLatestGuide")}：${row.latest.title}</small>
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
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
      <section class="series-content">
        <div class="compact-section-head">
          <p class="field-label">${t("allSeries")}</p>
          <span>${gameGuides.length} ${t("guideCount")}</span>
        </div>
        <div class="compact-guide-grid">${guideCards}</div>
      </section>
    </div>
  `;

  section.hidden = false;
  $("#backCatalog").addEventListener("click", (event) => {
    event.preventDefault();
    if (!updateRoute({ type: "home" }, homePath())) return;
    state.selectedGame = null;
    state.game = "all";
    render();
    document.querySelector("#guides").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderArticleDetail() {
  const detail = $("#articleDetail");
  const section = $("#articlePage");
  if (!state.selectedGuide) {
    section.hidden = true;
    detail.innerHTML = "";
    return;
  }

  const guide = fullGuides().find((item) => item.id === state.selectedGuide);
  if (!guide) {
    section.hidden = true;
    detail.innerHTML = "";
    return;
  }

  const game = games[guide.game];
  const article = expandGuide(guide);
  const related = fullGuides()
    .filter((item) => item.game === guide.game && item.id !== guide.id)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);
  const terms = guide.resources.map((resource) => ({ term: resource, description: explainTerm(resource, game) }));
  const statusCards = guideStatusCards(guide);
  const freshness = guideFreshness(guide);

  detail.innerHTML = `
    <article class="article-shell">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="${homePath()}">${t("breadcrumbHome")}</a>
        <span>/</span>
        <a href="${gamePath(guide.game)}">${game.name}</a>
        <span>/</span>
        <strong>${guide.title}</strong>
      </nav>
      <header class="article-hero" style="--art: ${game.art}">
        <img class="article-hero-image" src="${guide.image}" alt="${game.cn} ${guide.title} 攻略配图">
        <a class="text-action back-topic" href="${gamePath(gameIdForGuide(guide))}" id="backTopic">${t("backTopic")}</a>
        <div class="guide-meta">
          <span>${game.name}</span>
          <span>${t("types")[guide.type]}</span>
          <span>${guide.minutes} ${t("minutes")}</span>
          <span>${t("difficulty")} ${guide.difficulty}/3</span>
          <span>${t("articleUpdated")} ${formatGuideDate(guide.updated)}</span>
          <span class="freshness-chip freshness-${freshness.key}">${freshness.label}</span>
        </div>
        <h1>${guide.title}</h1>
        <p>${guide.summary}</p>
      </header>
      <section class="trust-strip" aria-label="Article status">
        ${statusCards
          .map(
            (card) => `
              <article>
                <span>${card.label}</span>
                <strong>${card.value}</strong>
              </article>
            `,
          )
          .join("")}
      </section>

      <div class="article-layout">
        <aside class="article-toc">
          <p class="field-label">${t("articleToc")}</p>
          <a href="#article-goal">${t("detailGoal")}</a>
          <a href="#article-decision">${t("articleDecision")}</a>
          <a href="#article-prep">${t("articlePrep")}</a>
          <a href="#article-route">${t("detailSteps")}</a>
          <a href="#article-priority">${t("articlePriority")}</a>
          <a href="#article-checkpoints">${t("articleCheckpoints")}</a>
          <a href="#article-terms">${t("articleTerms")}</a>
          <a href="#article-mistakes">${t("articleMistakes")}</a>
          <a href="#article-faq">${t("articleFaq")}</a>
          <a href="#article-related">${t("articleRelated")}</a>
          <a href="#article-sources">${t("detailSources")}</a>
        </aside>

        <div class="article-body">
          <section id="article-goal" class="article-block">
            <p class="field-label">${t("detailGoal")}</p>
            <h2>${guide.goal}</h2>
            <p>${article.audience}</p>
            <div class="editorial-note">
              <strong>${t("editorialNote")}</strong>
              <span>这篇内容按“目标、准备、执行、误区、术语”整理，优先帮助海外玩家理解中国游戏系统，而不是只给零散要点。</span>
            </div>
          </section>

          <section id="article-decision" class="article-block">
            <p class="field-label">${t("articleDecision")}</p>
            <div class="decision-grid">
              ${article.decisions
                .map(
                  (item, index) => `
                    <article>
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      <strong>${item.scenario}</strong>
                      <p>${item.action}</p>
                      <small>${item.result}</small>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section id="article-prep" class="article-block">
            <p class="field-label">${t("articlePrep")}</p>
            <div class="resource-row article-resource-row">
              ${article.prep.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>

          <section id="article-route" class="article-block">
            <p class="field-label">${t("detailSteps")}</p>
            <div class="phase-list article-phase-list">
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

          <section id="article-priority" class="article-block">
            <p class="field-label">${t("articlePriority")}</p>
            <div class="priority-table" role="table" aria-label="${t("articlePriority")}">
              <div class="priority-row priority-head" role="row">
                <span>${t("detailResources")}</span>
                <span>${t("articleWhen")}</span>
                <span>${t("articleAction")}</span>
                <span>${t("articleStop")}</span>
              </div>
              ${article.priorityRows
                .map(
                  (item) => `
                    <div class="priority-row" role="row">
                      <strong>${item.name}</strong>
                      <span>${item.when}</span>
                      <p>${item.action}</p>
                      <p>${item.stop}</p>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section id="article-checkpoints" class="article-block">
            <p class="field-label">${t("articleCheckpoints")}</p>
            <ol class="checkpoint-list">
              ${article.checkpoints.map((item) => `<li>${item}</li>`).join("")}
            </ol>
          </section>

          <section id="article-terms" class="article-block">
            <p class="field-label">${t("articleTerms")}</p>
            <div class="term-grid">
              ${terms
                .map(
                  (item) => `
                    <article>
                      <strong>${item.term}</strong>
                      <p>${item.description}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section id="article-mistakes" class="article-block split-block">
            <div>
              <p class="field-label">${t("articleMistakes")}</p>
              <ol class="steps">${article.mistakes.map((item) => `<li>${item}</li>`).join("")}</ol>
            </div>
            <div>
              <p class="field-label">${t("articleAdvanced")}</p>
              <ol class="steps">${article.advanced.map((item) => `<li>${item}</li>`).join("")}</ol>
            </div>
          </section>

          <section id="article-related" class="article-block">
            <p class="field-label">${t("articleRelated")}</p>
            <div class="related-guide-list">
              ${related
                .map(
                  (item) => `
                    <a href="${guidePath(item.id)}" data-guide="${item.id}" class="related-guide article-card">
                      <span>${t("types")[item.type]}</span>
                      <strong>${item.title}</strong>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section id="article-faq" class="article-block">
            <p class="field-label">${t("articleFaq")}</p>
            <div class="faq-list">
              ${article.faq
                .map(
                  (item) => `
                    <details>
                      <summary>${item.question}</summary>
                      <p>${item.answer}</p>
                    </details>
                  `,
                )
                .join("")}
            </div>
          </section>

          <section id="article-sources" class="article-block">
            <p class="field-label">${t("detailSources")}</p>
            <div class="source-list">
              ${guide.sources
                .map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`)
                .join("")}
            </div>
          </section>
        </div>
      </div>
    </article>
  `;

  section.hidden = false;
  const backTopic = $("#backTopic");
  if (backTopic) {
    backTopic.addEventListener("click", (event) => {
      event.preventDefault();
      selectGame(guide.game);
    });
  }
}

function gameIdForGuide(guide) {
  return guide.game;
}

function selectGame(id, updateHistory = true) {
  state.selectedGame = id;
  state.game = id;
  state.selectedGuide = null;
  if (updateHistory && !updateRoute({ type: "game", id }, gamePath(id))) return;
  render();
  $("#games").hidden = false;
  $("#games").scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectGuide(id, updateHistory = true) {
  const guide = fullGuides().find((item) => item.id === id);
  if (!guide) return;
  state.selectedGame = guide.game;
  state.game = guide.game;
  state.selectedGuide = id;
  if (updateHistory && !updateRoute({ type: "guide", id }, guidePath(id))) return;
  render();
  $("#articlePage").hidden = false;
  $("#articlePage").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast() {
  const toast = $("#toast");
  toast.textContent = t("toast");
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  window.location.href = buildSubmitMailto();
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
  setPageMode();
  renderFilters();
  renderGuideTools();
  renderHomeMedia();
  renderGameCatalog();
  renderGameDetail();
  renderArticleDetail();
  setPageMode();
  $("#metricGuides").textContent = guideMeta.length;
  $("#metricGames").textContent = Object.keys(games).length;
}

function bindControls() {
  document.addEventListener("click", (event) => {
    const gameLink = event.target.closest(".open-game, .term-chip[data-game], .route-topic-link[data-game]");
    if (gameLink && gameLink.dataset.game) {
      event.preventDefault();
      selectGame(gameLink.dataset.game);
      return;
    }

    const guideLink = event.target.closest(".open-guide, .article-card[data-guide]");
    if (guideLink && guideLink.dataset.guide) {
      event.preventDefault();
      selectGuide(guideLink.dataset.guide);
    }
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });
  $("#glossarySearch").addEventListener("input", (event) => {
    state.toolTermQuery = event.target.value;
    renderGuideTools();
  });
  $("#glossaryGameSelect").addEventListener("change", (event) => {
    state.toolGame = event.target.value;
    renderGuideTools();
  });
  $("#starterGameSelect").addEventListener("change", (event) => {
    state.starterGame = event.target.value;
    renderGuideTools();
  });
  $("#sortSelect").addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });
  $("#submitButton").addEventListener("click", showToast);
  window.addEventListener("popstate", () => {
    syncRouteToState();
    render();
  });
  window.addEventListener("resize", drawHero);
}

initLanguageSelect();
syncRouteToState();
bindControls();
render();
drawHero();
