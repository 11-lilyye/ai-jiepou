import Link from "next/link";
import { ArrowRight, Play, ScanLine, Sparkles } from "lucide-react";
import { courses, curriculum, goals, news, projects, tools } from "@/lib/data";
import { Pill, SectionHead } from "@/components/ui";

export default function Home() {
  return <>
    <section className="hero"><div className="hero-inner">
      <div className="hero-copy"><span className="kicker">普通人的 AI 能力系统</span><h1>把 AI<br/><em>真正用起来</em></h1><p>从看懂 AI，到完成真实工作、学习、内容和商业项目。这里不追热点按钮，只训练带得走的能力。</p>
        <div className="button-row"><Link className="button primary" href="/learn">开始学习 <ArrowRight size={16}/></Link><Link className="button" href="/assessment"><ScanLine size={16}/> 测测我的 AI 能力</Link><Link className="button" href="/world">看看今天 AI 发生了什么</Link></div>
      </div>
      <div className="hero-aside" aria-label="AI 能力轨道示意图"><div className="orbit-shell"><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/><div className="core">AI</div><span className="orbit-dot d1">理解</span><span className="orbit-dot d2">查证</span><span className="orbit-dot d3">构建</span><span className="orbit-dot d4">实践</span></div></div>
    </div></section>

    <section className="section compact white"><div className="container"><SectionHead eyebrow="从真实目标出发" title="我想用 AI 做什么？" action="查看全部路径" href="/paths"/><div className="goal-grid">{goals.map(({slug, title, detail, icon:Icon})=><Link className="goal-card" href={`/paths/${slug}`} key={title}><span className="goal-icon"><Icon size={22}/></span><h3>{title}</h3><p>{detail}</p><span className="goal-enter">查看这条路径 →</span></Link>)}</div></div></section>

    <section className="section"><div className="container"><SectionHead eyebrow="AI 今日 · 人工查证" title="三件真正值得知道的事" action="进入 AI 世界" href="/world"/><div className="news-layout">{news.map(n=><Link href="/world/model-computer-use" className={`news-card ${n.tone}`} key={n.title}><div className="news-tags"><span>{n.tag}</span><span>{n.kind}</span></div><time className="news-date">{n.date}</time><h3>{n.title}</h3><p>{n.summary}</p><p className="news-why"><b>为什么重要</b>{n.why}</p></Link>)}</div></div></section>

    <section className="section white"><div className="container"><SectionHead eyebrow="一条从理解到创造的路" title="AI 学习地图" action="查看完整地图" href="/learn"/><div className="learning-map">{curriculum.map((c,i)=><Link href="/learn" className="map-step" style={{background:c.color}} key={c.title}><i>0{i+1}</i><small>{c.group} · {c.count} 节课</small><b>{c.title}</b><p>{c.desc}</p><span>进入阶段 →</span></Link>)}</div></div></section>

    <section className="section"><div className="container"><div className="content-grid"><div className="panel"><SectionHead title="继续学习与热门课程" action="全部课程" href="/learn"/><div className="course-list">{courses.map(c=><Link className="course-row" href="/learn/context-design" key={c.title}><span className="course-thumb"/><div><h3>{c.title}</h3><p>{c.meta}{c.progress>0?` · 已完成 ${c.progress}%`:""}</p></div><Pill tone={c.level==="实用"?"orange":"blue"}>{c.level}</Pill></Link>)}</div></div><div className="panel"><SectionHead title="本周工具观察" action="工具库" href="/tools"/><div className="tool-list">{tools.map(t=><Link href="/tools/chatgpt" className="tool-item" key={t[0]}><span className="tool-logo">{t[0][0]}</span><span><b>{t[0]}</b><small>{t[1]} · {t[2]}</small></span></Link>)}</div></div></div></div></section>

    <section className="section white"><div className="container"><SectionHead eyebrow="做出东西，能力才会留下" title="本周推荐项目" action="项目广场" href="/projects"/><div className="project-strip">{projects.map((p,i)=><Link className="project-card" href="/projects/industry-research" key={p.title}><div className="project-meta"><Pill>{p.level}</Pill><span>{p.time}</span></div><h3>{p.title}</h3><p>最终交付：{p.outcome}</p><div className="skill-tags">{p.skills.map(s=><span key={s}>{s}</span>)}</div></Link>)}</div></div></section>

    <section className="section"><div className="container"><div className="cta-band"><div><span className="eyebrow">AI 能力诊断 · 约 5 分钟</span><h2>你不缺更多工具，先找到真正的短板</h2><p>完成 12 道情境题，获得能力雷达与下一步学习路径。</p></div><Link className="button blue" href="/assessment"><Sparkles size={17}/> 开始能力测试</Link></div></div></section>
  </>
}
