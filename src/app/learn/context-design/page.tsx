"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Check, ChevronRight, Clock3, Highlighter, Lightbulb, MessageSquareText, Play, TriangleAlert } from "lucide-react";
import { Pill, Progress } from "@/components/ui";

const quiz=["告诉 AI：写一封邮件","提供收件人、目的、背景和语气","要求 AI 写得更专业","复制一份网上的万能模板"];
export default function LessonPage(){const [saved,setSaved]=useState(false);const [answer,setAnswer]=useState<number|null>(null);const [done,setDone]=useState(false);return <div className="lesson-shell">
  <aside className="lesson-nav"><Link href="/learn"><ArrowLeft size={15}/> 返回课程</Link><p>Prompt 与 Context</p>{["任务：为什么结果总不对","核心结论","生活类比","Context 的四层结构","错误与正确示范","互动练习","真实案例","小测验","挑战任务"].map((x,i)=><a className={i===3?"current":i<3?"done":""} href={`#s${i}`} key={x}><span>{i<3?<Check size={11}/>:i+1}</span>{x}</a>)}</aside>
  <article className="lesson-content"><div className="lesson-breadcrumb">学 AI <ChevronRight size={12}/> Prompt 与 Context <ChevronRight size={12}/> Context 设计</div><div className="lesson-title"><div><Pill tone="blue">进阶</Pill><h1>Context：让 AI 进入正确的工作现场</h1><p>不是把提示词写长，而是让模型知道“你正在解决谁的什么问题”。</p><div className="lesson-meta"><span><Clock3 size={14}/> 预计 28 分钟</span><span>更新于 2026-08-28</span></div></div><button className={saved?"save-button saved":"save-button"} onClick={()=>setSaved(!saved)}><Bookmark size={17}/>{saved?"已收藏":"收藏"}</button></div><Progress value={62}/>
    <section id="s0" className="lesson-block problem-block"><span>真实问题</span><h2>“请帮我写一封专业邮件”为什么总得到一封空洞的邮件？</h2><p>因为“专业”不是信息。不同对象、关系、目的和风险，对专业的定义完全不同。</p></section>
    <section id="s1" className="lesson-block"><span className="block-label">核心结论</span><div className="big-quote">好的 Context，不是更多文字，而是更少的猜测空间。</div></section>
    <section id="s2" className="lesson-block"><span className="block-label">1 分钟理解</span><div className="video-shell"><button aria-label="播放视频"><Play fill="currentColor"/></button><span>01:24</span></div><h2>把 AI 想成刚加入团队的新同事</h2><p>它有很强的通用能力，但不知道你们正在做什么、客户在意什么、哪些做法会踩雷。Context 就是入职简报：让它快速进入现场。</p><div className="callout"><Lightbulb/><div><b>生活类比</b><p>你不会只对摄影师说“拍好看点”，还会告诉他用途、观众、场地和希望传递的感觉。</p></div></div></section>
    <section id="s3" className="lesson-block"><span className="block-label">方法</span><h2>四层 Context 结构</h2><div className="context-layers">{[["01","现场","现在发生了什么"],["02","对象","结果给谁使用"],["03","材料","AI 可以依据什么"],["04","边界","什么必须做到或避免"]].map(x=><div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></div>)}</div></section>
    <section id="s4" className="lesson-block"><span className="block-label">对比</span><h2>同一个任务，信息量不同，结果完全不同</h2><div className="compare"><div className="wrong"><TriangleAlert/><b>信息不足</b><p>帮我写封邮件，跟客户解释项目延期。</p></div><div className="right"><Check/><b>可执行</b><p>给合作三年的客户王经理写邮件。项目原定周五交付，因数据接口变更需延后到下周二。承认影响、说明补救安排，语气坦诚，不甩锅，控制在 180 字。</p></div></div></section>
    <section id="s6" className="lesson-block quiz-block"><span className="block-label">小测验 · 1 / 3</span><h2>下面哪种做法最能提高邮件结果的可靠性？</h2><div className="quiz-options">{quiz.map((q,i)=><button onClick={()=>setAnswer(i)} className={answer===i?(i===1?"selected correct":"selected wrong"):""} key={q}><span>{String.fromCharCode(65+i)}</span>{q}{answer===i&&i===1&&<Check/>}</button>)}</div>{answer!==null&&<p className="feedback">{answer===1?"正确。它提供了完成任务需要的关键现场信息。":"还不够。注意区分‘要求’和真正减少猜测的背景信息。"}</p>}</section>
    <section className="lesson-complete"><div><b>准备好把它用在真实任务里了吗？</b><p>完成挑战后，这项能力会计入你的能力档案。</p></div><button className="button blue" onClick={()=>setDone(true)}>{done?<><Check/> 已完成本课</>:<>标记完成 <ArrowRight/></>}</button></section>
  </article><aside className="lesson-tools"><button title="高亮"><Highlighter/></button><button title="笔记"><MessageSquareText/></button></aside>
  </div>}
