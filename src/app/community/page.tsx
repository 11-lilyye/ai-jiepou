"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BadgeCheck, CalendarDays, Check, CircleHelp, HeartHandshake, MessageCircle, Plus, Search, Sparkles, Target, UsersRound } from "lucide-react";
import { PageHero, Pill, SectionHead } from "@/components/ui";

const circles=[
  {name:"AI 内容工作流共做组",members:328,activity:"本周：把一个选题做成三平台内容",tags:["内容","Workflow"],tone:"violet"},
  {name:"非程序员 AI Coding 小组",members:246,activity:"本周：发布你的第一个网页",tags:["Coding","产品"],tone:"blue"},
  {name:"AI 视频实践组",members:189,activity:"本周：用 5 个镜头讲清一个概念",tags:["视频","创作"],tone:"orange"},
  {name:"可信 Research 小组",members:154,activity:"本周：完成一份带来源的趋势判断",tags:["Research","查证"],tone:"green"}
];

const posts=[
  {type:"问题",author:"小冉 · 电商运营",title:"商品图生成得很快，但不同平台尺寸总要重做，应该从哪里开始自动化？",meta:"8 条同行建议 · 2 位陪练参与",tags:["电商","图片"]},
  {type:"复盘",author:"韩序 · 独立创作者",title:"我把每周选题流程从 4 小时缩短到 90 分钟，但保留了两个必须人工判断的步骤",meta:"收获 36 次有用 · 含流程图",tags:["内容","Workflow"]},
  {type:"成果",author:"木子 · 转行学习中",title:"第一次和 Coding Agent 做完个人作品集：我犯过的 5 个错误",meta:"12 条讨论 · 可查看项目",tags:["Coding","项目"]}
];

export default function CommunityPage(){
  const [joined,setJoined]=useState<string[]>([]);
  const [intent,setIntent]=useState(false);
  const toggle=(name:string)=>setJoined(joined.includes(name)?joined.filter(x=>x!==name):[...joined,name]);
  return <>
    <PageHero eyebrow="AI 实践社群" title="不晒提示词，分享问题、过程和结果" intro="这里不是信息流广场。每个讨论都尽量回到一个真实任务：发生了什么、试过什么、卡在哪里、最后留下了什么。">
      <div className="button-row"><button className="button primary" onClick={()=>setIntent(true)}>{intent?<><Check/> 已登记加入意向</>:<><UsersRound/> 加入实践社群</>}</button><a className="button" href="#question-wall"><CircleHelp/> 去问题墙看看</a></div>
    </PageHero>

    <section className="community-manifesto"><div className="container"><div className="manifesto-grid"><span>社群约定</span><div><b>01</b><h3>带着现场来</h3><p>说明真实背景，不只贴一段答案。</p></div><div><b>02</b><h3>说清验证方式</h3><p>结论、数据和案例尽可能附来源。</p></div><div><b>03</b><h3>过程也值得分享</h3><p>失败、修改和人工判断同样重要。</p></div><div><b>04</b><h3>不贩卖焦虑</h3><p>不夸大结果，不承诺万能方案。</p></div></div></div></section>

    <section className="section white"><div className="container"><SectionHead eyebrow="围绕同一个目标一起做" title="实践小组" action="查看全部小组" href="#"/><div className="circle-grid">{circles.map(c=><article className="circle-card" key={c.name}><div className={`circle-mark ${c.tone}`}><Target/></div><Pill tone="blue">{c.members} 人</Pill><h2>{c.name}</h2><p>{c.activity}</p><div className="skill-tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div><button onClick={()=>toggle(c.name)} className={joined.includes(c.name)?"button joined":"button"}>{joined.includes(c.name)?<><Check/> 已加入</>:<><Plus/> 加入小组</>}</button></article>)}</div></div></section>

    <section id="question-wall" className="section"><div className="container"><div className="community-layout"><div><SectionHead eyebrow="问题墙" title="正在发生的真实问题" action="发布问题" href="#"/><div className="community-tabs"><button className="active">全部</button><button>等建议</button><button>进行中</button><button>已解决</button><label><Search/><input placeholder="搜索问题"/></label></div><div className="post-list">{posts.map((p,i)=><article className="community-post" key={p.title}><div className="post-vote"><Sparkles/><b>{[18,36,24][i]}</b><small>有用</small></div><div><div className="post-top"><Pill tone={p.type==="问题"?"orange":p.type==="复盘"?"blue":"green"}>{p.type}</Pill><span>{p.author}</span></div><h2>{p.title}</h2><div className="skill-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><small><MessageCircle/> {p.meta}</small></div><ArrowRight/></article>)}</div></div><aside className="community-side"><div className="weekly-room"><CalendarDays/><span className="eyebrow">本周共做</span><h2>把一个重复任务画成 Workflow</h2><p>周六 20:00 · 线上共做 60 分钟</p><button className="button blue full">报名旁听</button></div><div className="mentor-duty"><HeartHandshake/><div><b>陪练者值班</b><p>每周有 2 位认证陪练者集中回答高质量问题。</p></div></div><div className="community-stats"><b>917</b><span>实践成员</span><b>124</b><span>本月问题</span><b>38</b><span>公开复盘</span></div></aside></div></div></section>

    <section className="section white"><div className="container"><div className="community-cta"><BadgeCheck/><div><span className="eyebrow">陪练者也来自实践者</span><h2>你已经解决过别人正在面对的问题吗？</h2><p>先在社群分享过程与案例，也可以直接申请成为 AI 陪练。</p></div><Link className="button primary" href="/become-coach">申请成为陪练 <ArrowRight/></Link></div></div></section>
  </>
}
