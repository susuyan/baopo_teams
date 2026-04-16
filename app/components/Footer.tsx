"use client";

import { Mail, MapPin, Phone } from "lucide-react";

interface FooterLinkProps {
  label: string;
  href: string;
}

const footerLinks: FooterLinkProps[] = [
  { label: "首页", href: "#hero" },
  { label: "服务内容", href: "#services" },
  { label: "团队介绍", href: "#team" },
  { label: "合作流程", href: "#process" },
  { label: "客户案例", href: "#cases" },
  { label: "联系我们", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full bg-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">爆破小组</span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-md mb-6">
              专业的软件开发与技术咨询服务商，致力于为企业提供高质量的定制化技术解决方案，从需求分析到持续运维，全流程陪伴您的数字化转型之路。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="mailto:contact@baopo.susuyan.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@baopo.susuyan.com
              </a>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <a
                href="tel:+8612345678900"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                工作日 24h 内回复
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速导航</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary-light flex-shrink-0" />
                <span>contact@baopo.susuyan.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-light flex-shrink-0" />
                <span>线上服务 · 远程协作 · 全国可接</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-light flex-shrink-0" />
                <span>周一至周五 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {currentYear} 爆破小组. All rights reserved.</p>
          <p className="text-zinc-500">
            专业的 IT 解决方案服务商 · 让技术创造商业价值
          </p>
        </div>
      </div>
    </footer>
  );
}
