insert into public.lessons (slug,title,subtitle,category,difficulty,duration_minutes,status,published_at) values
('ai-map','AI 不是魔法：建立正确的全景图','分清模型、产品、API 与 Agent','AI 基础','入门',24,'published',now()),
('machine-learning','机器学习到底在学什么','从例子中找到可重复的规律','AI 基础','入门',20,'published',now()),
('generative-ai','生成式 AI 是什么','从判断到生成','AI 基础','入门',18,'published',now()),
('llm','大语言模型是什么','它如何处理和生成语言','AI 基础','入门',26,'published',now()),
('model-product','模型与产品有什么区别','别再把公司、模型和 App 混在一起','AI 基础','入门',16,'published',now()),
('ai-limits','AI 不擅长什么','边界比能力更重要','AI 基础','入门',22,'published',now()),
('task-definition','先定义任务，再写 Prompt','从模糊要求到明确结果','Prompt 与 Context','入门',28,'published',now()),
('context-design','Context：让 AI 进入正确的工作现场','减少模型的猜测空间','Prompt 与 Context','进阶',28,'published',now()),
('examples','怎样给 AI 好的示例','用示例校准风格与质量','Prompt 与 Context','进阶',21,'published',now()),
('iteration','让 AI 反复修改而不是推倒重来','建立清晰的反馈循环','Prompt 与 Context','进阶',25,'published',now()),
('ai-search','AI 搜索与传统搜索','什么时候该找，什么时候该想','AI Research','入门',30,'published',now()),
('source-check','别被答案骗了：AI 信息查证实战','建立来源与交叉验证习惯','AI Research','实用',45,'published',now()),
('deep-research','完成一次 Deep Research','从问题到带来源的简报','AI Research','进阶',42,'published',now()),
('office-email','写一封真正能发出的邮件','对象、目的、风险与语气','AI 办公','入门',24,'published',now()),
('excel-analysis','让 AI 帮你读懂 Excel','从数据到可解释结论','AI 办公','进阶',48,'published',now()),
('content-workflow','内容创作不是一句 Prompt','从选题到发布的完整流程','内容创作','进阶',55,'published',now()),
('image-control','AI 图片的构图与风格控制','稳定地产出可用视觉','AI 图片','进阶',46,'published',now()),
('video-storyboard','先有分镜，再生成视频','连续性来自前期设计','AI 视频','进阶',52,'published',now()),
('workflow','把重复工作画成 Workflow','输入、处理、判断与输出','Workflow','进阶',55,'published',now()),
('agent-basics','Agent 不只是会聊天','目标、计划、工具与确认','Agent','进阶',40,'published',now());

insert into public.labs (slug,title,description,status) values
('prompt-builder','Prompt Builder','把模糊要求变成结构化任务','published'),('token-visualizer','Token 可视化','观察文本如何被拆分','published'),('context-window','Context 窗口','理解有限工作区','published'),('hallucination','幻觉挑战','识别无来源说法','published'),('search-vs-llm','搜索 vs AI','为任务选择正确方式','published'),('embedding','Embedding 地图','观察语义距离','published'),('attention','Attention 观察','观察词语关系','published'),('workflow-builder','Workflow 构建器','连接输入、判断与输出','published'),('agent-simulator','Agent 模拟器','体验观察与行动循环','published'),('tool-game','工具选择游戏','为真实任务选择工具','published');

insert into public.projects (slug,title,scenario,difficulty,estimated_minutes,status) values
('professional-email','写一封真正能发出的专业邮件','处理一次延期沟通','入门',45,'published'),('learning-plan','设计一周学习计划','为考试建立复习安排','入门',60,'published'),('travel-plan','做一份可执行旅行计划','比较路线与预算','入门',60,'published'),('article-analysis','分析一篇复杂文章','提取论点并查证','入门',70,'published'),('ppt','完成一份汇报 PPT','从材料到演示结构','进阶',150,'published'),('excel','分析 Excel 经营数据','定位变化与原因','进阶',180,'published'),('industry-research','完成一份带来源的行业研究','为业务决策提供简报','入门',90,'published'),('content-workflow','搭建内容生产工作流','每周稳定产出内容','进阶',240,'published'),('short-video','制作一条 AI 短视频','从脚本到成片','进阶',300,'published'),('website','Build 一个可访问的网站','和 Coding Agent 协作','Builder',720,'published'),('knowledge-agent','个人知识问答助手','让材料可查询','Builder',600,'published'),('lead-agent','线索研究 Agent','自动收集和整理企业信息','高级',960,'published');

insert into public.industries (slug,name,description) values ('education','教育','教学、备课与个性化学习'),('ecommerce','电商','商品内容、客服与运营'),('content','内容创作','选题、脚本与分发'),('marketing','营销','洞察、创意与增长'),('design','设计','视觉生产与协作'),('recruiting','招聘','职位、筛选与面试'),('manufacturing','制造业','研发、质检与知识管理'),('finance','金融','研究、风控与服务'),('startup','创业','研究、验证与执行'),('smb','中小企业','低成本自动化'),('crossborder','跨境电商','本地化与多平台运营'),('research','科研','文献、实验与写作');

insert into public.coaching_services (name,duration_minutes,price_cents,description) values ('30 分钟 AI 方向诊断',30,19900,'理清问题并给出行动路线'),('60 分钟 AI 实战陪练',60,39900,'共同完成一个真实任务'),('4 周 AI 应用陪跑',240,199900,'每周实战、复盘与调整');

insert into public.capability_dimensions (slug,name,description) values ('understanding','AI 理解','理解能力与边界'),('prompt','Prompt','定义任务'),('context','Context','提供工作背景'),('research','Research','寻找与比较来源'),('verification','查证','验证事实与结论'),('writing','写作','协作表达'),('image','图片','视觉生成与控制'),('video','视频','视频工作流'),('data','数据','分析与解释数据'),('coding','Coding','与编码 Agent 协作'),('workflow','Workflow','设计可复用流程'),('automation','自动化','连接系统与动作'),('agent','Agent','规划、工具与人工确认'),('judgment','AI 判断','识别风险与边界'),('business','业务应用','把能力接入真实业务');
