# GameOri

一个面向全球玩家了解中国游戏攻略的静态网站，品牌域名规划为 `gameori.com`。`Ori` 同时呼应 `Origin`（源头、来源透明）和 `Oriental`（东方、中国游戏语境），适合做攻略工具站、多语言引导站和新手路线入口。当前版本不依赖后端，直接打开 `index.html` 即可预览。

## 已包含

- 8 种界面语言：中文、English、日本語、한국어、Español、Français、Deutsch、Português
- 17 个中国游戏专题页
- 68 篇攻略条目：每条攻略包含目标、路线、关键资源和资料来源
- 真实游戏图片优先展示，来自游戏官网、Steam 商店页或官方分享图；缺少授权素材时保留本地占位图
- 游戏搜索、游戏筛选、攻略类型筛选、排序
- 首页攻略工具：中文术语词典、新手路线推荐和相关攻略入口
- 游戏专题页升级为攻略中枢：按卡点、玩家阶段和资源雷达进入对应攻略
- 攻略文章包含目标、决策表、准备清单、执行路线、资源优先级、阶段验收、中文术语解释、常见错误、进阶提示和来源
- 每个游戏和攻略都有独立静态 URL，例如 `games/wherewinds/index.html`、`guides/wwm-start/index.html`
- 生成 `sitemap.xml`、`robots.txt`、canonical、Open Graph 和 JSON-LD 结构化数据
- 投稿入口通过邮件发送到 `boy736809040@gmail.com`，并预填投稿模板

## 文件

- `index.html`：页面结构
- `styles.css`：响应式视觉样式
- `app.js`：多语言、筛选、排序、术语词典、新手路线、专题页、文章页和画布视觉
- `assets/games/`：游戏专题封面
- `assets/guides/`：攻略配图
- `assets/real/games/`：真实游戏图片素材
- `scripts/generate-assets.js`：从当前数据重新生成图片资产
- `scripts/generate-routes.js`：为所有游戏和攻略生成独立 URL 页面
- `games/`：游戏专题静态页面
- `guides/`：攻略详情静态页面
- `sitemap.xml` / `robots.txt`：搜索引擎索引入口
- `ads.txt`：Google AdSense 发布商验证
- `_headers`：Cloudflare Pages 基础响应头和静态资源缓存策略
- `DEPLOYMENT.md`：上线配置、部署命令和发布后检查清单

## 数据说明

当前内容覆盖《黑神话：悟空》《原神》《崩坏：星穹铁道》《绝区零》《鸣潮》《明日方舟》《永劫无间》《王者荣耀》《重返未来：1999》《少女前线 2：追放》《三角洲行动》《无期迷途》《燕云十六声》《无限暖暖》《七日世界》《漫威争锋》《解限机》。攻略正文为原创整理，详情页保留来源链接，方便后续做编辑审核和资料追踪。

真实游戏图片仅用于本地原型展示。正式公开上线前，需要逐项确认游戏官网、商店页或媒体包的授权范围。

## 部署

推荐部署到 Cloudflare Pages，生产域名使用 `https://gameori.com`。上线前运行：

```bash
SITE_URL=https://gameori.com node scripts/generate-routes.js
node --check app.js
node --check scripts/generate-routes.js
node --check scripts/generate-assets.js
```

详细部署步骤和发布后检查见 `DEPLOYMENT.md`。

## 后续可接入

- CMS 或数据库：保存游戏、攻略、版本和作者信息
- 翻译工作流：原文、机翻、人工审核、发布状态
- CMS 或后台：把当前静态数据迁移成可编辑内容
- 投稿后台：在邮件投稿之外增加表单、审核流和贡献者资料
