# AI 解剖

面向中国普通用户的 AI 学习、情报、实验、项目与陪练平台。当前仓库是一套可运行的第一版产品基础：它覆盖完整导航与主要用户流程，并提供可迁移到 Supabase/PostgreSQL 的数据库架构。

## 本地运行

要求 Node.js 20+。

```bash
npm install
cp .env.example .env.local
npm run dev
```

没有 Supabase 凭据时，应用使用内置中文样例数据，所有公开页面和前端交互均可运行。接入 Supabase 时，在 `.env.local` 填写项目 URL 和匿名密钥，然后依次执行 `supabase/migrations/0001_foundation.sql` 与 `supabase/seed.sql`。

## 产品路由

| 路由 | 功能 |
|---|---|
| `/` | 首页、今日 AI、目标入口、学习地图、课程、工具与项目 |
| `/learn` | 课程体系与个性化继续学习 |
| `/learn/context-design` | 可复用课时引擎示例，含视频壳、对比、Quiz、收藏与完成 |
| `/lab` | 10 个实验入口与可操作 Prompt Builder |
| `/world` | AI 情报、人工核验状态与变化雷达 |
| `/world/model-computer-use` | 结构化 AI 新闻文章与多来源模型 |
| `/industries` | 行业中心入口；`/industries/ecommerce` 为完整行业页 |
| `/tools` | 可筛选工具库；`/tools/chatgpt` 为评测详情 |
| `/projects` | 项目广场；`/projects/industry-research` 为交付式项目工作台 |
| `/assessment` | 情境测评、能力雷达与规则推荐路径 |
| `/coaching` | 服务选择与陪练需求提交 |
| `/coaches` | 按能力、行业和任务筛选 AI 陪练者 |
| `/become-coach` | 陪练申请条件、审核流程与申请表 |
| `/community` | 实践小组、问题墙、共做活动与成果复盘 |
| `/dashboard` | 个人学习操作系统 |
| `/search` | 跨内容类型搜索与空状态 |
| `/admin` | 内容工作流与管理表格 |
| `/login` | 邮箱登录界面与本地回退流程 |

## 架构

- Next.js App Router + TypeScript，公开内容默认服务端渲染，实验和工作台只在需要交互的局部使用 Client Components。
- 样式采用本地 CSS token 与组件层，不依赖 Google Fonts，便于未来中国环境部署。
- Supabase/PostgreSQL 承担 Auth、结构化内容、学习进度、项目成果、陪练、通知与分析事件。
- 陪练供给侧包含申请、案例审核、模拟陪练、公开主页与接单状态；社群围绕实践小组、问题、复盘、成果和共做活动建模。
- 内容主体使用 `lesson_sections.content` 与新闻 `body` 的结构化 JSON block，避免把内容写死在巨型 React 文件中。首版页面内数据是凭据缺失时的本地 fallback。
- `content_status` 与 `publication_schedule` 实现草稿 → 审核 → 发布 → 归档以及定时发布。
- 未来 Agent 只通过服务接口提交草稿或建议，不能绕过人工审核直接发布。

## 权限与安全

迁移包含用户私有数据的 RLS 基础策略。上线前还需要为编辑、教练与管理员补充基于 JWT role claim 的服务端策略；所有管理写入必须在 Server Action/Route Handler 中重新鉴权。不得把 service role key 暴露给浏览器。陪练记录、付款与账号删除需加入审计记录和保留期策略。

## 分析事件字典

核心事件：`session_start`、`signup`、`login`、`lesson_view`、`lesson_start`、`lesson_complete`、`quiz_submit`、`save_content`、`search`、`news_open`、`tool_open`、`industry_open`、`project_start`、`project_step_complete`、`project_complete`、`coaching_open`、`coaching_request`、`booking_confirmed`、`return_visit`。公共属性包括 `anonymous_id`、`user_id`、`source`、`campaign`、`landing_page`、`entity_id` 和 `occurred_at`。首触点存入 profile 后不覆盖，末触点按合法同意范围更新。

## 内容与编辑规则

课程 block 支持 heading、paragraph、quote、image、video、callout、comparison、steps、code、table、quiz、lab、tool、news、project、CTA 与 sources。新闻需保存事件日期、发布日期、最后核验时间、置信状态和至少一个来源；高风险内容必须有人审。

## 部署与中国市场准备

Vercel 可直接部署当前 Next.js 应用。未来国内部署时需逐项评估 ICP 备案、公安备案、内容审核、个人信息保护、跨境传输、短信实名与支付资质。架构避免 Google 字体/登录硬依赖，可将对象存储、短信、CDN、WeChat OAuth、微信支付和支付宝分别接到适配器层。当前代码不宣称已经满足任何特定地区的合规要求。

GitHub Pages 使用 `npm run export:pages` 生成带 `/ai-jiepou` 基础路径的静态站点，构建产物发布到 `gh-pages` 分支。

微信接入建议采用服务端 OAuth code exchange，将 `unionid/openid` 存入独立 identity 表并关联 `auth.users`，不要把微信标识直接作为业务主键。支付需使用服务端下单、签名验签、幂等回调与账务对账。

## 已知限制与下一步

当前环境没有外部 Supabase、邮件、支付与日历凭据，因此页面使用本地 fallback，提交不会产生真实订单；静态样例只用于展示完整交互。下一工程阶段应依次完成：Supabase Auth Server Actions、内容 CRUD 与编辑器、服务端搜索、真实事件采集、教练日历与订单状态机、端到端测试、图片资产管线和生产监控。
