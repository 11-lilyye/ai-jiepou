"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, CalendarDays, Check, Search, SlidersHorizontal, Star, UsersRound, Video } from "lucide-react";
import { PageHero, SectionHead } from "@/components/ui";

const coaches=[
  {name:"林澜",initial:"澜",role:"AI 内容工作流顾问",skills:["内容创作","Research","Workflow"],industry:"内容与营销",sessions:86,rating:"4.9",intro:"把选题、资料研究、脚本和多平台发布接成一条真正能运行的流程。",available:"本周三、周五",tone:"violet"},
  {name:"周宁",initial:"宁",role:"AI Coding 产品陪练",skills:["Coding","网站","Agent"],industry:"产品与技术",sessions:64,rating:"4.9",intro:"陪非程序员和 Coding Agent 一起做出网站、内部工具和第一个可用产品。",available:"本周四、周六",tone:"blue"},
  {name:"陈屿",initial:"屿",role:"电商 AI 实战顾问",skills:["电商","图片","自动化"],industry:"电商与零售",sessions:51,rating:"4.8",intro:"围绕商品内容、客服和运营报表，找到最值得自动化的一段工作。",available:"下周一",tone:"orange"},
  {name:"苏禾",initial:"禾",role:"AI 学习与研究陪练",skills:["学习","Research","查证"],industry:"教育与研究",sessions:73,rating:"5.0",intro:"帮你建立可持续的 AI 学习系统，也把复杂资料变成可信的研究成果。",available:"本周六、周日",tone:"green"}
];

export default function CoachesPage(){
  const [query,setQuery]=useState("");
  const [selected,setSelected]=useState<string|null>(null);
  const shown=useMemo(()=>coaches.filter(c=>Object.values(c).flat().join(" ").toLowerCase().includes(query.toLowerCase())),[query]);
  return <>
    <PageHero eyebrow="AI 陪练者" title="找到真正做过类似事情的人" intro="不是按头衔匹配，而是看案例、工作方式和用户反馈。先描述问题，再决定是否预约。">
      <div className="coach-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索能力、行业或任务，例如：短视频、Agent、电商"/><button><SlidersHorizontal/> 筛选</button></div>
    </PageHero>
    <section className="section compact white"><div className="container"><div className="coach-trust"><span><BadgeCheck/> 案例经过人工审核</span><span><UsersRound/> 用户可先提交问题</span><span><Video/> 以共同操作为主</span><span><CalendarDays/> 预约前确认时间与边界</span></div></div></section>
    <section className="section"><div className="container"><SectionHead title={`${shown.length} 位适合的陪练者`} action="申请成为陪练" href="/become-coach"/><div className="coach-grid">{shown.map(c=><article className="coach-card" key={c.name}><div className={`coach-portrait ${c.tone}`}><span>{c.initial}</span><i><BadgeCheck/> 已认证</i></div><div className="coach-copy"><div className="coach-name"><div><h2>{c.name}</h2><p>{c.role}</p></div><span><Star fill="currentColor"/> {c.rating}</span></div><div className="skill-tags">{c.skills.map(s=><span key={s}>{s}</span>)}</div><p>{c.intro}</p><div className="coach-data"><span><b>{c.sessions}</b> 次陪练</span><span><b>{c.industry}</b> 主要行业</span></div><small><CalendarDays/> 最近可约：{c.available}</small><button className={selected===c.name?"button coach-selected":"button primary"} onClick={()=>setSelected(c.name)}>{selected===c.name?<><Check/> 已选择 {c.name}</>:<>选择这位陪练 <ArrowRight/></>}</button></div></article>)}</div>{shown.length===0&&<div className="empty-state"><Search/><h2>暂时没有匹配的陪练者</h2><p>换一个更宽的能力或行业关键词，或者先提交问题由我们协助匹配。</p><Link className="button blue" href="/coaching">提交问题</Link></div>}</div></section>
  </>
}
