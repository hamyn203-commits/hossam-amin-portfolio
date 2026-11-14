"use client";

import React from "react";
import { servicesDataByLocale } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Layers,
  Server,
  Cpu,
  Database,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  layers: Layers,
  server: Server,
  cpu: Cpu,
  database: Database,
};

export function ServicesBento() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const services = servicesDataByLocale[locale];

  return (
    <section
      id="services"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700">
              {isAr ? "01 · الخدمات والحلول البرمجية" : "01 · Services & Solutions"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
              {isAr ? "حلول هندسية متكاملة مصممة " : "End-to-End Engineering Tailored for "}
              <span className="text-emerald-400 light:text-emerald-600">
                {isAr ? "لنمو أعمالك" : "Business Growth"}
              </span>
            </h2>
            <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
              {isAr
                ? "سواء كنت بحاجة إلى بناء منصة SaaS متكاملة من الصفر، أو نظام Backend و APIs فائق السرعة، أو نظام ERP مخصص لأتمتة عمليات شركتك—أقدم لك أنظمة إنتاجية جاهزة للتوسع."
                : "Whether you need a complete SaaS product built from scratch, a high-concurrency API backend, or a custom ERP to automate your company's operations—I deliver production-ready systems."}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 light:bg-slate-100 hover:bg-slate-800 border border-slate-800 light:border-slate-200 text-sm font-semibold text-emerald-400 light:text-emerald-700 transition-colors self-start md:self-auto"
          >
            <span>
              {isAr ? "ناقش متطلبات مشروعك" : "Discuss Your Requirements"}
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`${service.bentoSpan} group relative rounded-2xl bg-slate-900/75 light:bg-white border border-slate-800/90 light:border-slate-200 hover:border-emerald-500/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/10`}
              >
                {/* Top Ambient Gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative space-y-5">
                  {/* Icon & Tagline */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/90 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-950/70 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-600">
                      {service.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <ul className="space-y-2 pt-2">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Stack Footer */}
                <div
                  className="relative mt-7 pt-5 border-t border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-2"
                  dir="ltr"
                >
                  {service.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
