"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, ClipboardCheck, FileText, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Pill } from "@/components/ui";

export default function BecomeCoachPage(){
  const [sent,setSent]=useState(false);
  return <>
    <section className="coach-apply-hero"><div className="coach-apply-copy"><Link href="/coaching"><ArrowLeft/> 返回 AI 陪练</Link><span className="eyebrow">成为 AI 陪练</span><h1>把做过的事，<br/>变成能帮助别人的经验</h1><p>我们寻找的不是最会讲概念的人，而是能够理解问题、共同操作、承认边界并留下可复用方法的人。</p><div className="apply-principles"><span><BadgeCheck/> 案例先于头衔</span><span><UsersRound/> 陪做先于讲课</span><span><ShieldCheck/> 边界先于承诺</span></div></div><div className="coach-standard"><span>AI 解剖陪练标准</span><h2>一次好的陪练，结束时应该留下什么？</h2>{["一个真实完成或明显推进的结果","一套用户能够继续复用的方法","清楚标出的风险、限制与人工确认点","简短、具体、可执行的下一步"].map((x,i)=><div key={x}><i>{i+1}</i>{x}</div>)}</div></section>
    <section className="section white"><div className="container"><div className="apply-flow"><div><ClipboardCheck/><span>申请</span><p>说明擅长领域和真实经历</p></div><i>→</i><div><FileText/><span>案例审核</span><p>检查过程、结果与边界</p></div><i>→</i><div><UsersRound/><span>模拟陪练</span><p>完成一次真实情境演练</p></div><i>→</i><div><Sparkles/><span>开放服务</span><p>建立主页并接受匹配</p></div></div></div></section>
    <section className="section"><div className="container"><div className="application-layout"><div><span className="eyebrow">申请条件</span><h2>你不需要“什么都懂”</h2><p>只需要在一个具体领域有足够真实的实践，并愿意对自己的建议负责。</p>{["至少提交 1 个可以说明过程的真实案例","能说清楚哪些任务适合 AI，哪些必须由人确认","愿意遵守隐私、保密和利益冲突规则","不夸大结果，不销售未经验证的万能方法"].map(x=><div className="requirement" key={x}><Check/>{x}</div>)}<div className="apply-note"><b>目前优先招募</b><div className="skill-tags">{["AI 内容工作流","AI 视频","电商","Coding","数据分析","自动化","Agent","教育"].map(x=><span key={x}>{x}</span>)}</div></div></div><form className="application-form" onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="application-success"><BadgeCheck/><Pill tone="green">申请已记录</Pill><h2>谢谢你愿意把经验带给别人</h2><p>正式接入数据库后，审核状态会出现在“我的 AI”中。当前预览版本不会向外部发送你的资料。</p><Link className="button primary" href="/community">先看看实践社群 <ArrowRight/></Link></div>:<><h2>申请成为 AI 陪练</h2><p>预计填写 5–8 分钟。先提交基本信息，审核通过后再补充服务设置。</p><label>你的称呼<input required placeholder="例如：林澜"/></label><label>最擅长陪练的方向<select><option>内容创作与工作流</option><option>AI 视频与图片</option><option>AI Coding</option><option>电商与营销</option><option>学习与 Research</option><option>数据分析</option><option>Workflow / Agent</option></select></label><label>一句话说明你真正做过什么<textarea required placeholder="例如：我用 AI 把团队每周内容生产从两天缩短到半天，并持续运行了 6 个月。"/></label><label>案例或作品链接<input required type="url" placeholder="https://"/></label><label>联系方式<input required placeholder="邮箱或微信号"/></label><label className="agreement"><input required type="checkbox"/>我理解申请需要人工审核，提交不代表自动成为陪练。</label><button className="button blue full" type="submit">提交申请 <ArrowRight/></button></>}</form></div></div></section>
  </>
}
