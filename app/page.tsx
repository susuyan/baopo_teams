import { Navbar } from "./components/Navbar";
import { SectionWrapper } from "./components/SectionWrapper";
import { ScrollReveal } from "./components/ScrollReveal";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { Cases } from "./components/Cases";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper id="hero" className="pt-20 sm:pt-24 md:pt-32" centered>
        <ScrollReveal className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight px-4">
            <span className="text-primary">不仅能写代码</span>
            <span className="text-zinc-400 mx-2">/</span>
            <span className="text-secondary">更能稳健运行</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 text-center max-w-2xl px-4 sm:px-6">
            爆破小组是一家专业的软件开发与技术咨询服务商，助力企业实现数字化转型与技术升级。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors whitespace-nowrap text-center"
            >
              开始合作
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-zinc-300 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50 transition-colors whitespace-nowrap text-center"
            >
              获取免费咨询
            </a>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper
        id="services"
        title="服务内容"
        subtitle="提供全方位的技术解决方案，满足您的多样化需求"
      >
        <Services />
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper
        id="team"
        title="团队成员"
        subtitle="经验丰富的技术团队，为您提供专业服务"
        dark
      >
        <Team />
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper
        id="process"
        title="合作流程"
        subtitle="标准化的合作流程，确保项目顺利推进"
      >
        <Process />
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper
        id="benefits"
        title="核心优势"
        subtitle="选择我们的六大理由"
      >
        <Benefits />
      </SectionWrapper>

      {/* Case Studies Section */}
      <SectionWrapper
        id="cases"
        title="客户案例"
        subtitle="真实的合作案例，见证我们的专业实力"
        dark
      >
        <Cases />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper
        id="contact"
        title="联系我们"
        subtitle="期待与您建立合作关系"
        centered
      >
        <Contact />
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
}
