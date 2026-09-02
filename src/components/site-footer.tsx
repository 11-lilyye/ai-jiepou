import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid">
    <div><div className="brand footer-brand"><span className="brand-mark">A</span><span>AI 解剖</span></div><p>看懂 AI，用好 AI，做出东西。</p></div>
    <div><b>开始</b><Link href="/learn">学习地图</Link><Link href="/assessment">能力测试</Link><Link href="/projects">实践项目</Link></div>
    <div><b>探索</b><Link href="/world">AI 世界</Link><Link href="/industries">行业 AI</Link><Link href="/tools">工具库</Link></div>
    <div><b>支持</b><Link href="/coaching">一对一陪练</Link><Link href="/about">关于我们</Link><Link href="/privacy">隐私说明</Link></div>
  </div><div className="footer-bottom"><span>© 2026 AI 解剖</span><span>内容帮助理解，重要决策请独立查证</span></div></footer>
}
