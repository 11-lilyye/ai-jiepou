import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";
import "./product.css";
import "./workspace.css";
import "./mobile.css";
import "./community.css";
import "./pathways.css";
import "./startup-project.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "AI 解剖｜把 AI 真正用起来", template: "%s｜AI 解剖" },
  description: "面向普通人的 AI 学习、情报、实验与项目平台。",
  openGraph: { title: "AI 解剖", description: "从看懂 AI，到完成真实项目。", type: "website", locale: "zh_CN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">跳到主要内容</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
