"use client";

import React from "react";
import { siteConfig } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export function Footer() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950/90 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/60 light:border-slate-200">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white light:text-slate-900">
                {isAr ? siteConfig.nameAr : siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 light:text-slate-600 max-w-md leading-relaxed">
              {isAr
                ? `${siteConfig.roleAr}. تصميم وتطوير منصات الـ SaaS، واجهات الـ APIs عالية الأداء، وأنظمة الـ ERP المؤسسية بمعمارية نظيفة وعائد استثماري ملموس.`
                : `${siteConfig.role}. Building scalable SaaS platforms, high-speed APIs, and enterprise ERP systems with clean architecture and measurable business impact.`}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 light:text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {isAr
                ? siteConfig.availability.statusTextAr
                : siteConfig.availability.statusText}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
              {isAr ? "روابط سريعة" : "Navigation"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  {isAr ? "الخدمات والحلول" : "Services & Solutions"}
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  {isAr ? "دراسات الحالة والمشاريع" : "Featured Case Studies"}
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  {isAr
                    ? "مختبر البنية المعمارية"
                    : "Interactive System Architecture"}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  {isAr ? "الترسانة التقنية" : "Technical Arsenal"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
                >
                  {isAr ? "ابدأ مشروعك" : "Start a Project"}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels & Live Production */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
              {isAr
                ? "التواصل المباشر والمشاريع الحية"
                : "Direct Contact & Production"}
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{siteConfig.contact.phoneDisplay}</span>
                <span>{isAr ? "(واتساب / اتصال)" : "(WhatsApp / Call)"}</span>
              </a>
              <a
                href={siteConfig.contact.featuredLiveDomain}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 light:text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {isAr
                    ? "مشروع حي: wahywanamaa.com"
                    : "Featured Production: wahywanamaa.com"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {isAr ? siteConfig.nameAr : siteConfig.name}.{" "}
            {isAr
              ? "تم التطوير باستخدام Next.js و TypeScript و Tailwind CSS."
              : "Engineered with Next.js, TypeScript & Tailwind CSS."}
          </p>
          <p className="font-mono">
            {isAr ? siteConfig.locationAr : siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
