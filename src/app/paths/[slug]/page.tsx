import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Compass, Flag, Layers3 } from "lucide-react";
import { goals } from "@/lib/data";

export function generateStaticParams(){return goals.map(({slug})=>({slug}))}

export default async function GoalPathPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const index=goals.findIndex(goal=>goal.slug===slug);
  if(index<0) notFound();
  const goal=goals[index];
  const Icon=goal.icon;
  const next=goals[(index+1)%goals.length];
  return <>
    <section className={`goal-path-hero path-tone-${goal.color}`}><div className="container">
      <Link className="path-back" href="/paths"><ArrowLeft/> 所有目标路径</Link>
      <div className="goal-path-hero-grid"><div><span className="path-label"><Icon/> 目标路径 {String(index+1).padStart(2,"0")}</span><h1>{goal.title}</h1><p>{goal.promise}</p><div className="button-row"><Link className="button primary" href={goal.resource[1]}>{goal.resource[0]} <ArrowRight/></Link><Link className="button" href="/coaches">找一位 AI 陪练</Link></div></div><aside><span>这条路径最终不是“学完”</span><b>而是完成一次<br/>真实可用的成果</b><small>{goal.detail}</small></aside></div>
    </div></section>
    <section className="section white"><div className="container"><div className="goal-path-layout"><div><span className="eyebrow">建议工作流</span><h2>沿着结果倒推四步</h2><div className="goal-steps">{goal.steps.map((step,i)=><div key={step}><span>{i+1}</span><Check/><b>{step}</b></div>)}</div></div><aside className="path-principles"><span className="eyebrow">使用原则</span>{[[Compass,"从真实任务开始","不要为了学工具而虚构需求。"],[Layers3,"让 AI 参与过程","保留人的判断、验证和最终责任。"],[Flag,"用成果结束","以能发送、发布或使用的东西作为完成标准。"]].map(([ItemIcon,title,copy])=><div key={String(title)}><ItemIcon/><span><b>{title as string}</b><p>{copy as string}</p></span></div>)}</aside></div></div></section>
    <section className="section compact"><div className="container"><div className="path-next"><div><span className="eyebrow">也可以继续探索</span><h2>{next.title}</h2><p>{next.detail}</p></div><Link className="button" href={`/paths/${next.slug}`}>查看下一条路径 <ArrowRight/></Link></div></div></section>
  </>
}
