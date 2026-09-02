"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleAlert, MessageSquareText, Save, UsersRound } from "lucide-react";
import { Pill, Progress } from "@/components/ui";

const steps=["写下问题假设","找到 5 位目标用户","进行问题访谈","整理证据与反证","决定继续、调整或停止"];

export default function StartupValidationProject(){
  const [checked,setChecked]=useState<number[]>([0]);
  return <div className="project-shell"><aside className="project-side"><Link href="/projects"><ArrowLeft/> 项目广场</Link><Pill tone="orange">创业验证</Pill><h2>验证一个真实用户问题</h2><Progress value={Math.round(checked.length/steps.length*100)}/><small>{checked.length} / {steps.length} 步已完成</small>{steps.map((step,i)=><button className={checked.includes(i)?"done":""} onClick={()=>setChecked(checked.includes(i)?checked.filter(n=>n!==i):[...checked,i])} key={step}><span>{checked.includes(i)?<Check/>:i+1}</span>{step}</button>)}</aside><main className="project-work"><div className="project-head"><div><span className="eyebrow">步骤 1 / 5 · 问题验证</span><h1>先验证问题，不急着证明方案</h1><p>这一阶段的目标不是获得赞美，而是找到用户已经为这个问题付出时间、金钱或妥协的证据。</p></div><button className="button"><Save/> 保存进度</button></div><div className="work-card"><h2>你的问题假设</h2><label>我相信这类人<input placeholder="例如：每周需要发布多平台内容的小团队"/></label><label>正在反复遇到这个问题<input placeholder="例如：资料、脚本和各平台版本无法稳定衔接"/></label><label>现在只能这样解决<input placeholder="例如：复制粘贴、临时分工和人工逐条检查"/></label><div className="callout"><CircleAlert/><div><b>先写问题，不要写产品功能</b><p>“用户需要一个 AI 平台”是方案假设；“团队每周花两天重复改写内容”才是可以被访谈验证的问题。</p></div></div></div><div className="work-card"><h2>下一步：准备 5 次问题访谈</h2><p>优先寻找正在经历问题的人，不要只问朋友是否喜欢你的想法。</p><div className="startup-interview-grid"><div><UsersRound/><b>目标对象</b><span>谁最近真实经历过这个问题？</span></div><div><MessageSquareText/><b>关键问题</b><span>上一次发生时，你具体怎么处理？</span></div></div></div><div className="project-next"><Link className="button" href="/paths/startup">返回创业路径</Link><button className="button blue">保存并准备访谈 <ArrowRight/></button></div></main><aside className="project-reference"><CircleAlert/><b>本步不要做</b><span>不要介绍产品</span><span>不要问“你会不会用”</span><span>不要只记录支持你的回答</span></aside></div>
}
