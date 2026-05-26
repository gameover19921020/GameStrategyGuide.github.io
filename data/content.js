(() => {
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
  wherewinds: "radial-gradient(circle at 72% 24%, rgba(212,155,55,.82), transparent 23%), linear-gradient(135deg, #151515, #30463b 48%, #b83624)",
  infinitynikki: "radial-gradient(circle at 24% 20%, rgba(255,250,240,.86), transparent 24%), linear-gradient(135deg, #2d2636, #b83624 48%, #d49b37)",
  oncehuman: "radial-gradient(circle at 78% 22%, rgba(17,121,95,.84), transparent 24%), linear-gradient(135deg, #151515, #3c3f45 50%, #b83624)",
  marvelrivals: "radial-gradient(circle at 72% 18%, rgba(212,155,55,.88), transparent 24%), linear-gradient(135deg, #171717, #26395f 50%, #b83624)",
  mechabreak: "radial-gradient(circle at 28% 18%, rgba(17,121,95,.86), transparent 24%), linear-gradient(135deg, #121719, #354a58 50%, #d49b37)",
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
  wherewinds: { name: "Where Winds Meet", cn: "燕云十六声", studio: "Everstone Studio / NetEase", genre: "Wuxia open-world RPG", art: art.wherewinds, sources: [{ label: "Where Winds Meet official", url: "https://www.wherewindsmeetgame.com/" }, { label: "Steam - Where Winds Meet", url: "https://store.steampowered.com/app/3564740/Where_Winds_Meet/" }] },
  infinitynikki: { name: "Infinity Nikki", cn: "无限暖暖", studio: "Infold Games", genre: "Open-world dress-up adventure", art: art.infinitynikki, sources: [{ label: "Infinity Nikki official", url: "https://infinitynikki.infoldgames.com/" }, { label: "Steam - Infinity Nikki", url: "https://store.steampowered.com/app/3164330/Infinity_Nikki/" }] },
  oncehuman: { name: "Once Human", cn: "七日世界", studio: "Starry Studio / NetEase", genre: "Survival shooter", art: art.oncehuman, sources: [{ label: "Once Human official", url: "https://www.oncehuman.game/" }, { label: "Steam - Once Human", url: "https://store.steampowered.com/app/2139460/Once_Human/" }] },
  marvelrivals: { name: "Marvel Rivals", cn: "漫威争锋", studio: "NetEase Games", genre: "Hero shooter", art: art.marvelrivals, sources: [{ label: "Marvel Rivals official", url: "https://www.marvelrivals.com/" }, { label: "Steam - Marvel Rivals", url: "https://store.steampowered.com/app/2767030/Marvel_Rivals/" }] },
  mechabreak: { name: "Mecha BREAK", cn: "解限机", studio: "Amazing Seasun", genre: "Mecha action shooter", art: art.mechabreak, sources: [{ label: "Mecha BREAK official", url: "https://www.mechabreak.com/" }, { label: "Steam - Mecha BREAK", url: "https://store.steampowered.com/app/2452280/Mecha_BREAK/" }] },
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

  { id: "wwm-start", game: "wherewinds", type: "beginner", minutes: 12, difficulty: 2, popularity: 94, title: "江湖开局：门派、武学和探索优先级", summary: "把前期主线、轻功探索、武学解锁和资源投入排出顺序。", goal: "让新玩家先建立稳定江湖推进节奏。", resources: ["主线节点", "武学", "轻功", "探索奖励"], steps: ["先推主线解锁基础系统。", "每到新区域优先开传送和探索点。", "武学资源先给常用套路，不平均分散。"] },
  { id: "wwm-combat", game: "wherewinds", type: "combat", minutes: 13, difficulty: 3, popularity: 89, title: "武侠战斗：招架、卸势和连招窗口", summary: "用敌人起手、招架窗口和破防时机理解动作战斗。", goal: "减少被精英怪连续压制。", resources: ["招架", "卸势", "内力", "武器套路"], steps: ["先观察敌人起手，不抢第一刀。", "稳定招架后再接连招。", "内力不足时拉开重整节奏。"] },
  { id: "wwm-map", game: "wherewinds", type: "map", minutes: 10, difficulty: 1, popularity: 86, title: "大地图探索：传送、奇遇和收集路线", summary: "用区域节点规划探索，不被支线和奇遇打散节奏。", goal: "减少重复跑路和遗漏关键奖励。", resources: ["传送点", "奇遇", "宝箱", "区域声望"], steps: ["先开传送点再清支线。", "奇遇按区域集中处理。", "Boss 或副本前回收强化资源。"] },
  { id: "wwm-build", game: "wherewinds", type: "build", minutes: 11, difficulty: 2, popularity: 82, title: "武学养成：先定主套路，再补副武器", summary: "围绕武器套路、控制、位移和回复构建战斗方案。", goal: "避免养成材料分散到太多套路。", resources: ["主武器", "副武器", "心法", "强化材料"], steps: ["先确定常用主武器。", "副武器补控制或远程能力。", "心法围绕主输出方式选择。"] },

  { id: "nikki-start", game: "infinitynikki", type: "beginner", minutes: 9, difficulty: 1, popularity: 91, title: "搭配师开局：能力套装、探索和灵感露珠", summary: "解释开放世界、能力套装和收集资源如何服务主线推进。", goal: "让玩家把换装与探索目标连接起来。", resources: ["能力套装", "灵感露珠", "传送点", "设计图"], steps: ["先跟主线解锁核心能力套装。", "探索时顺路收集灵感露珠。", "设计图优先做能推进地图能力的套装。"] },
  { id: "nikki-outfit", game: "infinitynikki", type: "build", minutes: 10, difficulty: 1, popularity: 87, title: "套装评分：主题、部件和养成取舍", summary: "按评分主题选择部件，避免只看单件稀有度。", goal: "提升搭配挑战稳定性。", resources: ["风格主题", "套装部件", "升级材料", "饰品"], steps: ["先看挑战主题和标签。", "同主题高评分部件优先。", "材料先给常用主题套装。"] },
  { id: "nikki-map", game: "infinitynikki", type: "map", minutes: 11, difficulty: 1, popularity: 84, title: "奇想星与地图收集：按区域清单推进", summary: "把奇想星、宝箱、拍照点和解谜拆成区域路线。", goal: "提高地图完成度。", resources: ["奇想星", "宝箱", "拍照点", "解谜能力"], steps: ["先开区域传送。", "用能力套装处理对应解谜。", "每个区域结束前检查收集清单。"] },
  { id: "nikki-farm", game: "infinitynikki", type: "farming", minutes: 8, difficulty: 1, popularity: 79, title: "材料采集：昆虫、动物护理和植物路线", summary: "把日常采集拆成固定路线，减少临时缺材料。", goal: "为套装制作储备常用材料。", resources: ["采集材料", "动物护理", "昆虫", "植物"], steps: ["每日先跑常用材料点。", "缺套装材料时按图鉴追踪。", "稀缺材料优先留给能力套装。"] },

  { id: "oh-start", game: "oncehuman", type: "beginner", minutes: 10, difficulty: 2, popularity: 88, title: "末日开局：基地、理智和主线推进", summary: "从基地选址、资源采集、污染区和主线任务建立生存节奏。", goal: "让新玩家少走弯路地进入赛季循环。", resources: ["基地", "理智值", "资源点", "主线任务"], steps: ["基地选在资源和道路兼顾的位置。", "污染区探索前准备理智恢复。", "主线优先解锁关键制作台。"] },
  { id: "oh-build", game: "oncehuman", type: "build", minutes: 12, difficulty: 2, popularity: 84, title: "武器流派：异常、暴击和生存模组", summary: "按武器特性选择模组和装备词条。", goal: "做出能打据点和副本的基础配装。", resources: ["武器蓝图", "模组", "护甲套装", "弹药"], steps: ["先确定主武器伤害机制。", "模组围绕异常或暴击堆叠。", "护甲补生存和换弹手感。"] },
  { id: "oh-map", game: "oncehuman", type: "map", minutes: 13, difficulty: 2, popularity: 81, title: "据点探索：宝箱、精英怪和撤离路线", summary: "进入据点前规划补给、战斗路线和撤离点。", goal: "提升探索收益和生存率。", resources: ["据点宝箱", "精英怪", "弹药", "载具"], steps: ["进点前确认弹药和耐久。", "先清外围再进入建筑。", "满载后及时撤离整理资源。"] },
  { id: "oh-season", game: "oncehuman", type: "meta", minutes: 11, difficulty: 2, popularity: 77, title: "赛季目标：先拿蓝图，再追毕业词条", summary: "赛季制下如何安排蓝图、模组和基地资产。", goal: "避免把时间投入到低保值内容。", resources: ["赛季目标", "蓝图碎片", "模组", "星尘"], steps: ["先完成能给蓝图的目标。", "模组刷取围绕主武器。", "赛季末整理可继承资源。"] },

  { id: "mr-start", game: "marvelrivals", type: "beginner", minutes: 8, difficulty: 1, popularity: 96, title: "英雄射击入门：先锋、决斗和战略家职责", summary: "把坦克、输出和治疗职责讲清楚，减少开局乱选。", goal: "让玩家理解团队阵容基础。", resources: ["先锋", "决斗家", "战略家", "团队技能"], steps: ["先确认队伍是否有前排和治疗。", "输出位不要单独绕太深。", "团队技能留给开团或反打。"] },
  { id: "mr-hero", game: "marvelrivals", type: "build", minutes: 11, difficulty: 2, popularity: 92, title: "英雄池建立：先练两主一补位", summary: "为排位和快速比赛建立稳定英雄池。", goal: "避免只会一个英雄被阵容克制。", resources: ["主玩英雄", "补位英雄", "地图适配", "团队技能"], steps: ["先选一个稳定主英雄。", "再练同职责替代位。", "补一个治疗或前排作为队伍保险。"] },
  { id: "mr-map", game: "marvelrivals", type: "map", minutes: 10, difficulty: 2, popularity: 85, title: "地图站位：高台、侧翼和复活节奏", summary: "不同地图目标点的视野、侧翼和集合时机。", goal: "减少单人白给和无效进攻。", resources: ["高台", "侧翼", "目标点", "复活时间"], steps: ["进攻前等队友集合。", "输出优先占高台或侧翼。", "输团后不要单人继续摸点。"] },
  { id: "mr-combat", game: "marvelrivals", type: "combat", minutes: 12, difficulty: 3, popularity: 83, title: "团战节奏：大招交换和集火目标", summary: "用大招、控制和集火顺序拆解团战。", goal: "提升团战胜率。", resources: ["终极技能", "控制", "治疗资源", "集火目标"], steps: ["先骗出对方关键大招。", "控制链交给治疗或核心输出。", "赢团后立刻占点或推车。"] },

  { id: "mb-start", game: "mechabreak", type: "beginner", minutes: 9, difficulty: 2, popularity: 82, title: "机甲入门：机体定位、推进和锁定", summary: "理解轻型、中型、重型机体的战斗职责。", goal: "让玩家先选对机体而不是只看外观。", resources: ["机体定位", "推进", "锁定", "能量"], steps: ["先选符合自己距离偏好的机体。", "推进不要一次性耗空。", "锁定后再交高伤害武器。"] },
  { id: "mb-build", game: "mechabreak", type: "build", minutes: 11, difficulty: 2, popularity: 78, title: "武装配置：近战、导弹和火力压制", summary: "按机体职责选择武器组合。", goal: "建立稳定输出和自保能力。", resources: ["主武器", "副武器", "装甲", "机动性"], steps: ["近战机体需要突进和脱离手段。", "远程机体优先控制射线。", "重型机体承担压制和掩护。"] },
  { id: "mb-map", game: "mechabreak", type: "map", minutes: 10, difficulty: 2, popularity: 74, title: "地图战术：掩体、空域和集火线", summary: "利用高低差和障碍物建立火力优势。", goal: "减少在开阔地被集火。", resources: ["掩体", "高低差", "空域", "集火线"], steps: ["移动时贴近大型掩体。", "远程机体占高点但保留撤退线。", "队友集火时同步压上。"] },
  { id: "mb-combat", game: "mechabreak", type: "combat", minutes: 12, difficulty: 3, popularity: 71, title: "空战与反制：锁定、诱导和脱离", summary: "拆解导弹锁定、机动规避和反打窗口。", goal: "提升高速战斗中的生存率。", resources: ["锁定警告", "诱导弹", "推进能量", "反打窗口"], steps: ["被锁定时先脱离直线。", "诱导弹留给高威胁导弹。", "对手推进耗尽后再反打。"] },
];

const termDescriptions = {
  土地庙: "《黑神话：悟空》的存档、传送、修整和养成节点，等同于动作游戏里的安全检查点。",
  定身术: "控制类法术，用来制造安全输出、喝药或打断窗口，开荒期价值高于单纯伤害。",
  精魄: "击败特定敌人后获得的主动技能装备，可补控制、范围、霸体或爆发。",
  葫芦: "主要回复道具，升级和泡酒物会直接影响 Boss 战容错。",
  声骸: "《鸣潮》的装备与技能混合系统，既提供属性，也提供可主动释放的声骸能力。",
  数据坞: "影响声骸掉落品质与收集进度的核心等级，前期优先级很高。",
  邦布: "《绝区零》的队伍辅助单位，会根据阵营、属性或战斗机制提供额外协同。",
  驱动盘: "《绝区零》的角色装备系统，主词条先正确，副词条后追。",
  洞悉: "《重返未来：1999》的角色突破阶段，会解锁更高等级和关键能力。",
  灵感: "《重返未来：1999》的属性克制系统，进关前先看敌方灵感能减少练度压力。",
  局长技能: "《无期迷途》的玩家主动技能，常用于破核、回复或补控制。",
  破核: "处理带核心敌人的关键机制，破核后通常会进入高伤害窗口。",
  奇想星: "《无限暖暖》的重要收集资源，通常与探索、解谜和能力成长相关。",
  理智值: "《七日世界》的生存状态资源，进入污染或异常区域前需要准备恢复手段。",
  蓝图: "武器或装备成长的长期资产，赛季制游戏里通常比临时词条更保值。",
  先锋: "团队前排职责，负责站住空间、开团或保护后排。",
  决斗家: "英雄射击里的主要输出职责，需要寻找安全角度制造击杀。",
  战略家: "辅助/治疗职责，负责续航、增益和团队技能节奏。",
  协奏能量: "《鸣潮》的切人资源，决定延奏技能何时触发。",
  延奏技能: "角色退场或切换时触发的队伍协同能力，是循环节奏的一部分。",
  树脂: "《原神》的体力资源，用于兑换养成材料、圣遗物和周本收益。",
  遗器: "《崩坏：星穹铁道》的装备系统，前期主词条正确通常比套装毕业更重要。",
};

globalThis.GameOriContent = { art, games, guideMeta, termDescriptions };
})();
