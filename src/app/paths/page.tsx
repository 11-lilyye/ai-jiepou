import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { goals } from "@/lib/data";

export default function PathsPage(){return <>
  <PageHero eyebrow="目标路径" title="先选一件你真正想完成的事" intro="不同目标需要不同的方法、工具与成果。这里把学习、工作、创作、商业和建造分开，不再让所有入口都回到同一套课程。"/>
  <section className="section compact"><div className="container"><div className="path-index-grid">{goals.map(({slug,title,detail,promise,icon:Icon},i)=><Link href={`/paths/${slug}`} className="path-index-card" key={slug}><span className="path-index-number">{String(i+1).padStart(2,"0")}</span><span className="goal-icon"><Icon/></span><h2>{title}</h2><b>{detail}</b><p>{promise}</p><span className="path-index-enter">进入路径 <ArrowRight/></span></Link>)}</div></div></section>
</>}
