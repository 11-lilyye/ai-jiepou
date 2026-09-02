import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHead({ eyebrow, title, action, href = "#" }: { eyebrow?: string; title: string; action?: string; href?: string }) {
  return <div className="section-head"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>{action && <Link href={href}>{action}<ArrowRight size={15}/></Link>}</div>
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode }) {
  return <section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{children}</section>
}

export function Progress({ value }: { value: number }) { return <div className="progress" aria-label={`已完成 ${value}%`}><i style={{ width: `${value}%` }}/></div> }

export function Pill({ children, tone = "default" }: { children: React.ReactNode; tone?: string }) { return <span className={`pill ${tone}`}>{children}</span> }
