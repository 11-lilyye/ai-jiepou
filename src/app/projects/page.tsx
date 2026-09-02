"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock3, SlidersHorizontal } from "lucide-react";
import { PageHero, Pill } from "@/components/ui";

const categories=["全部","学习与办公","内容","图片与视频","研究与数据","Coding","Workflow 与 Agent","创业验证"];
const projects=[
  {title:"写一封真正能发出的专业邮件",category:"学习与办公",outcome:"可发送邮件",mark:"文",level:"入门",time:"45–90 分钟",href:"/learn/context-design"},
  {title:"用 AI 设计一周学习计划",category:"学习与办公",outcome:"个人计划",mark:"学",level:"入门",time:"45–90 分钟",href:"/learn/context-design"},
  {title:"完成一份带来源的行业研究",category:"研究与数据",outcome:"研究简报",mark:"研",level:"入门",time:"90 分钟",href:"/projects/industry-research"},
  {title:"把 Excel 数据变成经营结论",category:"研究与数据",outcome:"分析报告",mark:"数",level:"进阶",time:"3–5 小时",href:"/projects/industry-research"},
  {title:"制作一条 60 秒 AI 短视频",category:"图片与视频",outcome:"成片视频",mark:"影",level:"进阶",time:"3–5 小时",href:"/paths/video"},
  {title:"搭建每周内容生产工作流",category:"内容",outcome:"可复用流程",mark:"流",level:"进阶",time:"3–5 小时",href:"/paths/content"},
  {title:"做一个个人知识问答助手",category:"Workflow 与 Agent",outcome:"可用助手",mark:"知",level:"进阶",time:"3–5 小时",href:"/lab"},
  {title:"Build 一个真实可访问的网站",category:"Coding",outcome:"上线产品",mark:"站",level:"Builder",time:"1–2 天",href:"/paths/coding"},
  {title:"搭建线索研究 Agent",category:"Workflow 与 Agent",outcome:"运行中的 Agent",mark:"探",level:"Builder",time:"1–2 天",href:"/lab"},
  {title:"验证一个真实用户问题",category:"创业验证",outcome:"问题证据卡",mark:"问",level:"入门",time:"90 分钟",href:"/projects/startup-validation"},
  {title:"完成竞品与市场研究",category:"创业验证",outcome:"机会地图",mark:"市",level:"进阶",time:"3–5 小时",href:"/projects/startup-validation"},
  {title:"做出第一个可测试 MVP",category:"创业验证",outcome:"可测试版本",mark:"创",level:"Builder",time:"1–2 天",href:"/projects/startup-validation"},
];

export default function ProjectsPage(){
  const [active,setActive]=useState("全部");
  const shown=active==="全部"?projects:projects.filter(project=>project.category===active);
  return <><PageHero eyebrow="项目式学习" title="别再收藏教程，做出一个结果" intro="每个项目从真实场景开始，提供步骤、检查清单、失败处理和成果保存。完成项目，比看完更多视频更接近真正会用。"><div className="stat-row"><div className="stat"><b>{projects.length}</b><span>可直接开始的项目</span></div><div className="stat"><b>4</b><span>难度等级</span></div><div className="stat"><b>{categories.length-1}</b><span>项目方向</span></div><div className="stat"><b>100%</b><span>以真实交付物结束</span></div></div></PageHero><div className="project-filter"><div>{categories.map(x=><button onClick={()=>setActive(x)} className={active===x?"active":""} aria-pressed={active===x} key={x}>{x}</button>)}</div><button><SlidersHorizontal/> 筛选难度和时间</button></div><section className="section compact"><div className="container"><div className="project-result-head"><span>{active}</span><b>{shown.length} 个项目</b></div><div className="projects-grid">{shown.map((project,i)=><Link href={project.href} className="big-project-card" key={project.title}><div className={`project-cover cover-${i%4} ${project.category==="创业验证"?"startup-cover":""}`}><span>{project.category} · PROJECT {String(i+1).padStart(2,"0")}</span><i>{project.mark}</i></div><div className="project-info"><div><Pill tone={project.level==="入门"?"green":project.level==="进阶"?"blue":"orange"}>{project.level}</Pill><span><Clock3/> {project.time}</span></div><h3>{project.title}</h3><p>最终交付：{project.outcome}</p><span className="project-start">开始项目 <ArrowRight/></span></div></Link>)}</div></div></section></>
}
