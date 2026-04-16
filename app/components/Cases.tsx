"use client";

import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Factory,
  ShoppingCart,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

interface CaseStudyCardProps {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  icon: React.ReactNode;
  delay?: number;
}

function CaseStudyCard({
  industry,
  title,
  problem,
  solution,
  results,
  icon,
  delay = 0
}: CaseStudyCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className={cn(
        "relative p-6 sm:p-8 rounded-xl border transition-all duration-300",
        "bg-zinc-900 border-zinc-700",
        "hover:shadow-xl hover:border-primary/40"
      )}>
        {/* Industry Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-light text-sm font-semibold rounded-full mb-4">
          {icon}
          {industry}
        </span>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-50 mb-4">
          {title}
        </h3>

        {/* Problem Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-zinc-400 mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            业务痛点
          </h4>
          <p className="text-zinc-300 leading-relaxed">
            {problem}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-zinc-400 mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
            解决方案
          </h4>
          <p className="text-zinc-300 leading-relaxed">
            {solution}
          </p>
        </div>

        {/* Results Section */}
        <div className="border-t border-zinc-700 pt-6">
          <h4 className="text-sm font-semibold text-zinc-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            量化成果
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((result, idx) => (
              <div key={idx} className="bg-zinc-800/50 rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-secondary-light mb-1">
                  {result.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-400 mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-zinc-500">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Cases() {
  const caseStudies = [
    {
      industry: "制造业",
      title: "智能生产管理系统升级",
      problem: "传统制造业客户面临生产数据分散、实时监控困难、设备故障响应滞后等问题，导致生产效率低下和资源浪费严重，年产能损失超过300万元。",
      solution: "开发定制化的智能生产管理系统，集成物联网设备监控、实时数据分析仪表板、预警通知系统和自动化报表生成功能。采用工业级传感器采集关键生产数据，通过边缘计算节点实时处理，云端平台集中管理分析。",
      results: [
        {
          metric: "生产效率提升",
          value: "42%",
          description: "实时监控减少停机时间"
        },
        {
          metric: "故障响应时间",
          value: "<30分钟",
          description: "预警系统提前发现隐患"
        },
        {
          metric: "年成本节约",
          value: "¥580万",
          description: "减少资源浪费和人力成本"
        },
        {
          metric: "设备利用率",
          value: "91.5%",
          description: "优化生产排程调度"
        }
      ],
      icon: <Factory className="w-4 h-4" />,
    },
    {
      industry: "零售业",
      title: "多渠道电商平台重构",
      problem: "连锁零售企业的原有电商平台架构老化，无法支撑日益增长的用户访问量，促销活动期间频繁崩溃，且线上线下数据割裂，库存管理混乱导致20%的订单超卖或缺货。",
      solution: "采用微服务架构重构电商平台，实现高并发支撑、自动扩缩容和故障隔离。打通线上线下库存系统，统一订单管理和实时库存同步。部署智能推荐系统和用户行为分析模块，提升转化率。",
      results: [
        {
          metric: "并发用户承载",
          value: "50万+",
          description: "促销峰值稳定运行"
        },
        {
          metric: "订单处理速度",
          value: "提升68%",
          description: "自动化流程缩短处理周期"
        },
        {
          metric: "库存准确率",
          value: "99.7%",
          description: "实时同步消除超卖问题"
        },
        {
          metric: "GMV增长",
          value: "¥2.3亿",
          description: "当年销售额突破新高"
        }
      ],
      icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
      industry: "金融科技",
      title: "企业数据安全合规方案",
      problem: "金融科技公司面临严格监管要求，数据安全体系不完善，敏感信息泄露风险高，合规审计耗时长达3个月，面临监管处罚威胁和客户信任危机。",
      solution: "设计并实施多层次数据安全防护体系：端到端加密传输、分级权限管理、操作审计日志、敏感数据脱敏和异地灾备方案。构建自动化合规检查平台，实时监控安全状态，自动生成审计报告。",
      results: [
        {
          metric: "数据泄露风险",
          value: "降低95%",
          description: "多层加密与权限隔离"
        },
        {
          metric: "审计周期",
          value: "缩短至2周",
          description: "自动化合规检查平台"
        },
        {
          metric: "合规达标率",
          value: "100%",
          description: "顺利通过监管机构审查"
        },
        {
          metric: "客户满意度",
          value: "提升至92%",
          description: "数据安全赢得客户信任"
        }
      ],
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {caseStudies.map((caseStudy, idx) => (
        <CaseStudyCard
          key={idx}
          {...caseStudy}
          delay={idx * 0.15}
        />
      ))}
    </div>
  );
}