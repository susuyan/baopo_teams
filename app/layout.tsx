import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingContactButton } from "./components/FloatingContactButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "爆破小组 - 不仅能写代码 / 更能稳健运行",
  description: "爆破小组是一家专业的软件开发与技术咨询服务商，提供软件开发、运维外包、技术咨询等服务，助力企业实现数字化转型与技术升级。",
  openGraph: {
    title: "爆破小组 - 不仅能写代码 / 更能稳健运行",
    description: "爆破小组是一家专业的软件开发与技术咨询服务商，提供软件开发、运维外包、技术咨询等服务，助力企业实现数字化转型与技术升级。",
    type: "website",
    locale: "zh_CN",
    siteName: "爆破小组",
  },
  twitter: {
    card: "summary_large_image",
    title: "爆破小组 - 不仅能写代码 / 更能稳健运行",
    description: "爆破小组是一家专业的软件开发与技术咨询服务商，提供软件开发、运维外包、技术咨询等服务，助力企业实现数字化转型与技术升级。",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "爆破小组",
  description: "爆破小组是一家专业的软件开发与技术咨询服务商，提供软件开发、运维外包、技术咨询等服务，助力企业实现数字化转型与技术升级。",
  email: "contact@baopo.susuyan.com",
  url: "https://baopo.susuyan.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}