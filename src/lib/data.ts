import { BookOpen, BriefcaseBusiness, ChartNoAxesCombined, Code2, Image as ImageIcon, Network, Rocket, ShoppingBag, Sparkles, Video } from "lucide-react";

export const goals = [
  { slug: "learning", title: "学习提速", detail: "读懂难题，建立知识地图", icon: BookOpen, color: "blue", promise: "把一个学不懂的问题，变成能复述、能检验的知识地图。", steps: ["说清楚要学会什么", "补齐背景并拆开难点", "让 AI 提问而不是代替思考", "用输出或测试检查理解"], resource: ["进入学习中心", "/learn"] },
  { slug: "work", title: "工作提效", detail: "邮件、表格、汇报与研究", icon: BriefcaseBusiness, color: "ink", promise: "从一项真实工作开始，做出可以反复使用的协作模板。", steps: ["选一项高频工作", "提供对象、材料和标准", "分开生成、检查与定稿", "把有效做法保存成模板"], resource: ["打开任务实验室", "/lab"] },
  { slug: "content", title: "内容创作", detail: "从选题到多平台发布", icon: Sparkles, color: "violet", promise: "把灵感变成一条有研究、有判断、能稳定发布的内容流程。", steps: ["确定受众和内容目标", "研究素材并核对来源", "完成大纲、初稿和修改", "适配平台并复盘数据"], resource: ["搭建内容项目", "/projects"] },
  { slug: "image", title: "图片设计", detail: "产品图、海报与视觉控制", icon: ImageIcon, color: "rose", promise: "从一句模糊想法，走到风格统一、用途明确的可用视觉。", steps: ["写清用途与画面重点", "建立风格和参考约束", "生成候选并定向修改", "检查文字、版权与尺寸"], resource: ["查看图片与视频工具", "/tools"] },
  { slug: "video", title: "视频制作", detail: "脚本、分镜、生成与剪辑", icon: Video, color: "orange", promise: "把主题拆成脚本、镜头和声音，最终交付一条完整视频。", steps: ["确定受众与核心信息", "写脚本并拆成分镜", "生成画面、配音和素材", "剪辑、检查并发布"], resource: ["开始视频项目", "/projects"] },
  { slug: "data", title: "数据分析", detail: "从表格到可信结论", icon: ChartNoAxesCombined, color: "cyan", promise: "让 AI 帮你处理数据，但每个结论都能回到原始证据。", steps: ["先定义要回答的问题", "检查字段与数据质量", "探索异常和关键关系", "验证结论并说明限制"], resource: ["完成研究分析项目", "/projects/industry-research"] },
  { slug: "coding", title: "编程建造", detail: "和 Coding Agent 一起做产品", icon: Code2, color: "green", promise: "从需求到上线，与 Coding Agent 一起做出真正可访问的产品。", steps: ["定义最小可用版本", "让 Agent 先读懂项目", "小步实现并持续验证", "部署上线并记录迭代"], resource: ["进入 Coding 项目", "/projects"] },
  { slug: "ecommerce", title: "电商增长", detail: "选品、素材、客服与运营", icon: ShoppingBag, color: "amber", promise: "把 AI 放进商品、内容、客服和经营复盘，而不只生成一张图。", steps: ["找到经营流程的瓶颈", "选择合适的数据与工具", "接入人工确认节点", "用业务指标验证效果"], resource: ["进入电商 AI 中心", "/industries/ecommerce"] },
  { slug: "automation", title: "流程自动化", detail: "把重复工作变成系统", icon: Network, color: "indigo", promise: "把重复动作画成流程，再逐步交给自动化和 Agent。", steps: ["记录真实输入与输出", "拆出处理、判断和例外", "先自动化稳定的部分", "监控失败并保留人工接管"], resource: ["在实验室搭建流程", "/lab"] },
  { slug: "startup", title: "创业验证", detail: "研究市场，做出第一个版本", icon: Rocket, color: "red", promise: "用最小成本验证问题、用户和方案，先获得证据再扩大投入。", steps: ["明确目标用户与问题", "访谈并收集真实证据", "做出最小可用版本", "根据使用结果决定下一步"], resource: ["开始创业验证项目", "/projects/startup-validation"] },
];

export const news = [
  { tag: "全球", kind: "模型", date: "今天 09:30", title: "模型开始直接操作电脑：真正变化不是‘更聪明’", summary: "当模型可以看屏幕、点击和检查结果，AI 从回答问题走向完成任务。", why: "普通人需要学会定义完成标准，而不只是写提示词。", tone: "dark" },
  { tag: "中国", kind: "产品", date: "昨天 18:10", title: "国产多模态工具进入可用期，价格战转向工作流", summary: "图片、视频与语音能力正在被整合进同一个创作流程。", why: "工具选择将从单项能力转向整条生产链路。", tone: "blue" },
  { tag: "中外差异", kind: "行业", date: "8 月 30 日", title: "同样做 AI 电商，中外卖家把时间花在不同地方", summary: "海外侧重商品研究，国内更快把 AI 接进内容与客服。", why: "差异背后是渠道、履约与内容生态的不同。", tone: "warm" },
];

export const courses = [
  { title: "AI 不是魔法：建立一张正确的全景图", meta: "AI 基础 · 24 分钟", progress: 0, level: "入门", color: "violet" },
  { title: "从一句要求到可靠结果：Context 设计", meta: "Prompt 与 Context · 38 分钟", progress: 62, level: "进阶", color: "blue" },
  { title: "别被答案骗了：AI 信息查证实战", meta: "AI Research · 45 分钟", progress: 0, level: "实用", color: "orange" },
  { title: "把重复工作画成一条 Workflow", meta: "自动化 · 55 分钟", progress: 24, level: "进阶", color: "green" },
];

export const tools = [
  ["ChatGPT", "通用助手", "全球", "适合复杂任务协作"], ["DeepSeek", "推理模型", "中国", "中文推理与性价比"],
  ["Claude", "长文与分析", "全球", "适合材料梳理"], ["即梦", "图片与视频", "中国", "中文创意生产"],
  ["Perplexity", "AI 搜索", "全球", "带来源的资料检索"], ["扣子", "Agent", "中国", "快速搭建智能体"],
];

export const industries = ["教育", "电商", "内容创作", "营销", "设计", "招聘", "制造业", "金融", "创业", "中小企业", "跨境电商", "科研"];

export const projects = [
  { title: "完成一份带来源的行业研究", time: "90 分钟", level: "入门", outcome: "研究简报", skills: ["Research", "查证", "写作"] },
  { title: "搭建每周内容生产工作流", time: "3 小时", level: "进阶", outcome: "可复用流程", skills: ["Workflow", "内容", "自动化"] },
  { title: "做一个个人知识问答助手", time: "1 天", level: "Builder", outcome: "可用 Agent", skills: ["RAG", "Agent", "测试"] },
];

export const curriculum = [
  { group: "看懂", title: "认识 AI", desc: "模型、产品、能力边界", count: 8, color: "#dff4f2" },
  { group: "会用", title: "使用 AI", desc: "任务、Context、验证", count: 12, color: "#dce8ff" },
  { group: "协作", title: "驾驭 AI", desc: "研究、Workflow、判断", count: 15, color: "#e7e0ff" },
  { group: "创造", title: "构建 AI", desc: "自动化、Agent、产品", count: 11, color: "#efe1ff" },
];
