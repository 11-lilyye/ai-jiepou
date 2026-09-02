"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const nav = [["首页", "/"], ["学 AI", "/learn"], ["AI 实验室", "/lab"], ["AI 世界", "/world"], ["行业 AI", "/industries"], ["做项目", "/projects"], ["AI 工具", "/tools"], ["一对一陪练", "/coaching"]];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="AI 解剖首页"><span className="brand-mark">A</span><span>AI 解剖</span><small>把复杂讲明白</small></Link>
      <nav className={open ? "nav open" : "nav"} aria-label="主导航">
        {nav.map(([label, href]) => <Link onClick={() => setOpen(false)} className={path === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        <Link onClick={() => setOpen(false)} href="/dashboard">我的 AI</Link>
      </nav>
      <div className="header-actions">
        <Link className="search-pill" href="/search"><Search size={16}/><span>搜索课程、工具、文章</span><kbd>⌘ K</kbd></Link>
        <button className="icon-button" aria-label="通知"><Bell size={19}/><i /></button>
        <Link className="avatar" href="/dashboard" aria-label="个人中心">叶</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="打开菜单">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>
}
