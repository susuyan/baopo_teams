"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
  MessageSquare,
  PenTool,
  Code2,
  CheckSquare,
  Rocket,
  HeartHandshake
} from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  time: string;
  deliverables: string[];
  icon: React.ReactNode;
  delay?: number;
}

function ProcessStep({
  step,
  title,
  time,
  deliverables,
  icon,
  delay = 0
}: ProcessStepProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative p-6 sm:p-8 bg-white rounded-xl border border-zinc-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
        {/* Step Number Badge */}
        <div className="absolute -top-3 -left-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded-full shadow-lg">
            {step}
          </div>
        </div>

        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4 mt-2">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
          {title}
        </h3>

        {/* Time Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-secondary/15 text-secondary border border-secondary/30 rounded-full text-sm font-medium mb-4">
          <span className="mr-1.5">⏱</span>
          {time}
        </div>

        {/* Deliverables List */}
        <div className="space-y-2">
          <p className="text-sm text-zinc-500 font-medium mb-2">交付物：</p>
          <ul className="space-y-1.5">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="text-primary mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Process() {
  const steps = [
    {
      step: 1,
      title: "需求沟通",
      time: "1-3工作日",
      deliverables: [
        "需求分析文档",
        "功能列表确认",
        "项目报价方案"
      ],
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "方案设计",
      time: "3-7工作日",
      deliverables: [
        "技术方案文档",
        "原型设计稿",
        "系统架构设计"
      ],
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "开发实施",
      time: "2-8周",
      deliverables: [
        "源代码仓库",
        "开发技术文档",
        "单元测试报告"
      ],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "测试验收",
      time: "1-2周",
      deliverables: [
        "完整测试报告",
        "用户操作手册",
        "部署技术文档"
      ],
      icon: <CheckSquare className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "部署上线",
      time: "1-3工作日",
      deliverables: [
        "生产环境部署",
        "监控告警配置",
        "运维操作手册"
      ],
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "持续运维",
      time: "长期",
      deliverables: [
        "定期巡检服务",
        "性能优化建议",
        "安全更新与补丁",
        "7×24技术支持"
      ],
      icon: <HeartHandshake className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {steps.map((step, idx) => (
        <ProcessStep
          key={step.step}
          {...step}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
}