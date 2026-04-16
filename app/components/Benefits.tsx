"use client";

import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  delay?: number;
}

function BenefitCard({
  title,
  description,
  delay = 0
}: BenefitCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        {/* Checkmark Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mb-4">
          <CheckCircle className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function Benefits() {
  const benefits = [
    {
      title: "专业团队",
      description: "团队成员均具备5年以上软件开发经验，深耕多个技术领域，能够为您提供专业的技术方案与实施服务。",
    },
    {
      title: "快速响应",
      description: "承诺在收到需求后24小时内响应，紧急问题1小时内介入处理，确保您的项目进度不受延误。",
    },
    {
      title: "稳定可靠",
      description: "交付的系统经过严格测试验证，平均故障率低于0.1%，并提供完善的运维保障，确保业务稳定运行。",
    },
    {
      title: "技术领先",
      description: "紧跟前沿技术趋势，采用现代化的开发框架与工具链，帮助您的产品保持技术竞争力与可扩展性。",
    },
    {
      title: "性价比高",
      description: "提供透明合理的定价方案，无隐藏费用。相比市场平均水平，同等质量下价格优惠15%-20%，真正物有所值。",
    },
    {
      title: "售后完善",
      description: "提供长达12个月的免费技术支持服务，7×24小时在线响应，定期巡检与优化建议，让您的系统持续保持最佳状态。",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {benefits.map((benefit, idx) => (
        <BenefitCard
          key={idx}
          {...benefit}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
}