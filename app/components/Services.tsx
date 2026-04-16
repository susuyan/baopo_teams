"use client";

import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Code2,
  Server,
  Lightbulb,
  CheckCircle
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  icon: React.ReactNode;
  featured?: boolean;
  delay?: number;
}

function ServiceCard({
  title,
  description,
  features,
  techStack,
  icon,
  featured = false,
  delay = 0
}: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className={cn(
        "relative p-6 sm:p-8 rounded-xl border transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        featured
          ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/40 shadow-md"
          : "bg-zinc-50 border-zinc-100 hover:border-primary/30"
      )}>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
              核心优势
            </span>
          </div>
        )}

        {/* Icon */}
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-lg mb-6",
          featured
            ? "bg-primary text-white"
            : "bg-primary/10 text-primary"
        )}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-xl sm:text-2xl font-semibold mb-3",
          featured ? "text-primary" : "text-zinc-900"
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-600 mb-4">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className={cn(
                "w-5 h-5 mt-0.5 flex-shrink-0",
                featured ? "text-primary" : "text-zinc-400"
              )} />
              <span className="text-zinc-700 text-sm sm:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium",
                featured
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-zinc-100 text-zinc-700 border border-zinc-200"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Services() {
  const services = [
    {
      title: "定制化软件开发",
      description: "根据您的业务需求，提供从需求分析到交付上线的全流程软件开发服务。",
      features: [
        "深入需求调研与分析",
        "定制化功能开发",
        "多平台支持（Web、移动端、桌面）",
        "严格的质量测试与验收",
      ],
      techStack: ["Flutter", "React Native", "Node.js", "Go", "Python"],
      icon: <Code2 className="w-6 h-6" />,
      featured: true,
    },
    {
      title: "资深运维外包",
      description: "专业运维团队提供7×24小时技术支持，确保系统稳定运行。",
      features: [
        "服务器部署与监控",
        "性能优化与故障排查",
        "自动化运维流程",
        "安全防护与备份策略",
      ],
      techStack: ["AWS", "阿里云", "Docker", "Kubernetes", "Nginx"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "技术咨询与二次开发",
      description: "为企业提供技术咨询、架构优化及现有系统的二次开发服务。",
      features: [
        "技术架构评估与优化",
        "遗留系统升级改造",
        "技术选型咨询",
        "培训与知识转移",
      ],
      techStack: ["微服务架构", "DevOps", "CI/CD", "数据库优化"],
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, idx) => (
        <ServiceCard
          key={idx}
          {...service}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
}