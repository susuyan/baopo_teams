"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Building2, Phone, FileText, CheckCircle, X, Mail, Globe, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-6 py-4 bg-zinc-900 text-white rounded-xl shadow-2xl border border-zinc-700"
    >
      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 p-1 hover:bg-zinc-800 rounded-full transition-colors"
        aria-label="关闭提示"
      >
        <X className="w-4 h-4 text-zinc-400" />
      </button>
    </motion.div>
  );
}

interface FormData {
  name: string;
  company: string;
  contact: string;
  requirement: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  requirement?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    contact: "",
    requirement: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "请输入手机号或微信号";
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "请描述您的需求";
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = "需求描述至少10个字";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setShowToast(true);
    setFormData({ name: "", company: "", contact: "", requirement: "" });

    // Auto hide toast after 4 seconds
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "邮箱联系",
      value: "contact@baopo.susuyan.com",
      href: "mailto:contact@baopo.susuyan.com",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "官方网站",
      value: "https://baopo.susuyan.com",
      href: "https://baopo.susuyan.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "响应时间",
      value: "工作日 24小时内回复",
      href: null,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <Toast
            message="提交成功！我们会在24小时内与您联系。"
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              准备好开始了吗？
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              无论您是有具体的开发需求，还是想了解更多关于我们的服务，都欢迎随时联系。我们会在收到信息后第一时间与您沟通。
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-zinc-900 font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-900 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-700"
                >
                  <User className="w-4 h-4 text-zinc-400" />
                  您的姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入姓名"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                    errors.name
                      ? "border-red-300 focus:border-red-500"
                      : "border-zinc-200 focus:border-primary"
                  )}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-700"
                >
                  <Building2 className="w-4 h-4 text-zinc-400" />
                  公司名称
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="选填"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Contact */}
              <div className="space-y-2 sm:col-span-2">
                <label
                  htmlFor="contact"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-700"
                >
                  <Phone className="w-4 h-4 text-zinc-400" />
                  手机号 / 微信号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="请输入您的手机号或微信号"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                    errors.contact
                      ? "border-red-300 focus:border-red-500"
                      : "border-zinc-200 focus:border-primary"
                  )}
                />
                {errors.contact && (
                  <p className="text-sm text-red-500">{errors.contact}</p>
                )}
              </div>

              {/* Requirement */}
              <div className="space-y-2 sm:col-span-2">
                <label
                  htmlFor="requirement"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-700"
                >
                  <FileText className="w-4 h-4 text-zinc-400" />
                  需求描述 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows={5}
                  placeholder="请简单描述您的项目需求、预算范围或期望交付时间..."
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none",
                    errors.requirement
                      ? "border-red-300 focus:border-red-500"
                      : "border-zinc-200 focus:border-primary"
                  )}
                />
                {errors.requirement && (
                  <p className="text-sm text-red-500">{errors.requirement}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all",
                isSubmitting
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary hover:bg-primary-light hover:shadow-lg"
              )}
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  提交中...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  提交需求
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs text-zinc-500">
              提交即表示您同意我们与您取得联系以进一步了解需求。
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
