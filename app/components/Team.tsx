"use client";

import { ScrollReveal } from "./ScrollReveal";
import { TeamMemberCard } from "./TeamMemberCard";

/**
 * Team section component displaying team members with styled avatars
 * and hover cards. Includes team highlight callout.
 */
export function Team() {
  const teamMembers = [
    {
      initials: "商",
      colorScheme: "primary" as const,
      title: "商务经理",
      role: "项目统筹与客户对接",
      count: 1,
      skills: ["需求分析与方案设计", "项目管理与进度把控", "商务洽谈与合同签订"],
      description:
        "拥有丰富的项目管理经验，擅长将客户需求转化为可执行的技术方案，确保项目按时高质量交付。",
    },
    {
      initials: "全栈",
      colorScheme: "secondary" as const,
      title: "全栈开发",
      role: "前后端技术实现",
      count: 3,
      skills: [
        "前端开发：React, Vue, Flutter",
        "后端开发：Node.js, Go, Python",
        "数据库与API设计",
      ],
      description:
        "精通多种技术栈，能够独立完成从需求分析到系统架构的完整开发流程，注重代码质量与系统性能。",
    },
    {
      initials: "售后",
      colorScheme: "accent" as const,
      title: "售后服务",
      role: "客户支持与问题解决",
      count: 1,
      skills: ["快速响应客户问题", "系统维护与优化", "用户培训与指导"],
      description:
        "提供全天候技术支持，快速响应客户需求，确保系统稳定运行，持续优化用户体验。",
    },
    {
      initials: "运维",
      colorScheme: "neutral" as const,
      title: "资深运维",
      role: "系统部署与监控",
      count: 1,
      skills: [
        "云平台部署与配置",
        "系统监控与故障排查",
        "安全防护与数据备份",
      ],
      description:
        "精通各大云平台运维，确保系统高可用性与安全性，快速应对各类技术故障。",
    },
  ];

  return (
    <>
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <TeamMemberCard {...member} delay={i * 0.1} />
          </ScrollReveal>
        ))}
      </div>

      {/* Team Highlight Callout */}
      <ScrollReveal delay={0.5}>
        <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">✦</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-50 mb-2">
                团队核心竞争力
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                我们的团队不仅具备深厚的技术功底，更拥有丰富的项目实战经验。从需求分析到方案设计，从开发实施到持续运维，我们提供全流程专业服务，确保每一个项目都能稳健运行、持续增值。
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}