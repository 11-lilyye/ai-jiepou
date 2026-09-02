"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, Check, Clock3, MessageSquareMore, MessagesSquare, Search, ShieldCheck, UserPlus, UserRoundCheck, UsersRound } from "lucide-react";
import { PageHero, Pill, SectionHead } from "@/components/ui";

const services=[
  {name:"30 分钟 AI 方向诊断",price:"¥199",desc:"理清问题，判断 AI 能不能做，给出下一步路线。",for:"适合目标不清楚、工具太多不知道从哪开始"},
  {name:"60 分钟 AI 实战陪练",price:"¥399",desc:"共享屏幕，一起完成一个真实任务或工作流。",for:"适合已经有明确问题，希望现场做出来"},
  {name:"4 周 AI 应用陪跑",price:"¥1,999",desc:"从需求拆解到成果交付，每周实战、复盘与调整。",for:"适合要建立稳定工作方式或完成完整项目"}
];

export default function CoachingPage(){
  const [selected,setSelected]=useState<number|null>(null);
  const [sent,setSent]=useState(false);
  return <>
    <PageHero eyebrow="AI 实战支持" title="遇到真实问题时，不必一个人摸索" intro="可以找一位合适的 AI 陪练共同完成任务，也可以申请成为陪练，把自己的实战经验变成可验证的服务。">
      <div className="trust-row"><span><UserRoundCheck/> 真人陪练</span><span><MessageSquareMore/> 围绕真实问题</span><span><ShieldCheck/> 重要操作由你确认</span></div>
    </PageHero>
    <section className="coaching-portals"><div className="container"><div className="portal-grid">
      <Link href="/coaches" className="portal-card portal-find"><span><Search/></span><div><small>我有问题</small><h2>找 AI 陪练</h2><p>按能力、行业和服务方式，找到真正做过类似事情的人。</p><b>浏览陪练者 <ArrowRight/></b></div></Link>
      <Link href="/become-coach" className="portal-card portal-join"><span><UserPlus/></span><div><small>我有经验</small><h2>申请成为陪练</h2><p>提交案例与擅长领域，通过审核后建立你的服务主页。</p><b>查看申请条件 <ArrowRight/></b></div></Link>
      <Link href="/community" className="portal-card portal-community"><span><MessagesSquare/></span><div><small>一起实践</small><h2>进入 AI 社群</h2><p>带着问题、过程和成果来，在同行反馈中持续进步。</p><b>看看社群 <ArrowRight/></b></div></Link>
    </div></div></section>
    <section className="section white"><div className="container"><SectionHead eyebrow="选择服务" title="你希望解决到什么程度？"/><div className="service-grid">{services.map((s,i)=><button onClick={()=>setSelected(i)} className={selected===i?"service-card selected":"service-card"} key={s.name}><div><Pill tone={i===1?"orange":"blue"}>{i===1?"最多人选择":i===2?"系统陪跑":"快速诊断"}</Pill><b>{s.price}</b></div><h3>{s.name}</h3><p>{s.desc}</p><small>{s.for}</small><span>{selected===i?<><Check/> 已选择</>:<>选择这项服务 <ArrowRight/></>}</span></button>)}</div></div></section>
    <section className="section"><div className="container"><div className="booking-grid"><div><span className="eyebrow">提交需求</span><h2>先告诉我们，你真正想解决什么</h2><p>陪练者会在确认前阅读，判断是否适合在所选时间内完成。</p><div className="process-list">{[[MessageSquareMore,"描述问题","不用整理得很完美，真实就好"],[UsersRound,"匹配陪练","按领域、经验和时间推荐合适人选"],[CalendarDays,"确认时间","选择双方合适的线上时段"],[Clock3,"开始陪练","共同操作，结束后收到行动清单"]].map(([Icon,t,d],i)=><div key={String(t)}><span>{i+1}</span><Icon/><div><b>{t as string}</b><p>{d as string}</p></div></div>)}</div></div><form className="booking-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>我想解决的问题<textarea required placeholder="例如：我每周要写 3 篇行业内容，资料很多，但现在从研究到发布要花两天……"/></label><label>问题属于<select><option>工作效率</option><option>学习</option><option>内容创作</option><option>AI 视频</option><option>Workflow / Agent</option><option>其他</option></select></label><label>希望的联系方式<input required placeholder="邮箱或微信号"/></label><button className="button blue" type="submit">{sent?<><Check/> 已收到，我们会联系你</>:<>提交陪练需求 <ArrowRight/></>}</button><small>提交不代表产生订单。确认问题、人选与时间后，再决定是否预约。</small></form></div></div></section>
  </>
}
