"use client";

import React, { useState } from "react";
import { projectsDataByLocale } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Globe,
  ShieldAlert,
  Sparkles,
  ChevronRight,
  Layers,
  Monitor,
} from "lucide-react";

export function ProjectsShowcase() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const projects = projectsDataByLocale[locale];

  const [expandedArchId, setExpandedArchId] = useState<string | null>(
    "wahy-wa-namaa-academy"
  );

  const toggleArch = (id: string) => {
    setExpandedArchId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="work"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-700">
            {isAr
              ? "02 · دراسات الحالة والمشاريع الإنتاجية"
              : "02 · Featured Engineering Case Studies"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
            {isAr
              ? "أنظمة حقيقية قمت بتصميمها وبنائها "
              : "Real Production Systems Built for "}
            <span className="text-cyan-400 light:text-cyan-600">
              {isAr ? "للأداء العالي والتوسع" : "Performance & Scale"}
            </span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            {isAr
              ? "نظرة تفصيلية عميقة في المشاريع والأنظمة التي قمت بتطويرها—تشمل واجهات النظام الفعلية، المشكلة التجارية، الحل الهندسي، والمخطط المعماري التفاعلي لكل مشروع."
              : "A deep dive into real-world platforms I have architected and delivered—complete with live visual interfaces, problem statements, security baselines, and interactive system architectures."}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isArchOpen = expandedArchId === project.id;

            return (
              <article
                key={project.id}
                className="group rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800/90 light:border-slate-200 hover:border-emerald-500/40 overflow-hidden shadow-2xl shadow-black/30 transition-all duration-300"
              >
                {/* Top Project Header Bar */}
                <div className="px-6 py-4 bg-slate-950/90 light:bg-slate-100 border-b border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-emerald-400 light:text-emerald-700">
                      {isAr ? `مشروع 0${index + 1}` : `CASE STUDY 0${index + 1}`}
                    </span>
                    <span className="text-slate-700 light:text-slate-300">
                      ·
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 light:text-emerald-700">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 light:bg-slate-200 text-xs font-mono text-slate-300 light:text-slate-700">
                      {project.status}
                    </span>
                  </div>

                  {/* Direct Live & Repo Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>
                          {isAr
                            ? `معاينة حية: ${project.liveDomainLabel}`
                            : `Live: ${project.liveDomainLabel || "Production"}`}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.mirrorUrl && (
                      <a
                        href={project.mirrorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 light:bg-white hover:bg-slate-700 border border-slate-700 light:border-slate-300 text-xs font-mono text-slate-200 light:text-slate-700 transition-colors"
                      >
                        <span>{isAr ? "نسخة Vercel" : "Vercel Mirror"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 light:bg-white hover:bg-slate-800 border border-slate-700/80 light:border-slate-300 text-xs font-semibold text-white light:text-slate-800 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isAr ? "الكود المصدري" : "Source Code"}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Body */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                  {/* Top Split Grid: Left Overview + Right Interactive Browser Preview Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left 6 Columns: Title, Summary & Key Metrics */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-mono text-emerald-400 light:text-emerald-700">
                          {project.subtitle}
                        </p>
                        <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Key Metrics 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((m, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-slate-950/75 light:bg-slate-50 border border-slate-800/80 light:border-slate-200"
                          >
                            <div className="text-xs font-mono text-slate-400 light:text-slate-500">
                              {m.label}
                            </div>
                            <div className="mt-1 text-base sm:text-lg font-bold text-white light:text-slate-900">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right 6 Columns: Sleek Browser Mockup Frame with Project Screenshot */}
                    <div className="lg:col-span-6">
                      <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 light:border-slate-300 overflow-hidden shadow-2xl group/preview">
                        {/* Browser Chrome Top Bar */}
                        <div
                          className="px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3"
                          dir="ltr"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="px-3 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 truncate max-w-[240px] sm:max-w-xs">
                            <Monitor className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="truncate">
                              {project.liveDomainLabel || project.slug}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 uppercase">
                            UI Preview
                          </span>
                        </div>

                        {/* Screenshot Viewport */}
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-700"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                          {/* Hover Quick Action Overlay */}
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-slate-200">
                              {project.techStack.slice(0, 3).join(" · ")}
                            </span>

                            {(project.liveUrl || project.githubUrl) && (
                              <a
                                href={project.liveUrl || project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
                              >
                                <span>
                                  {project.liveUrl
                                    ? isAr
                                      ? "فتح الموقع الحي"
                                      : "Open Live App"
                                    : isAr
                                    ? "عرض الكود"
                                    : "View Repo"}
                                </span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge vs Solution Two-Column Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 light:text-amber-700 font-semibold">
                        <ShieldAlert className="w-4 h-4" />{" "}
                        {isAr
                          ? "التحدي الهندسي والتجاري"
                          : "The Engineering Challenge"}
                      </div>
                      <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-500/5 light:bg-emerald-50/60 border border-emerald-500/20 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700 font-semibold">
                        <Sparkles className="w-4 h-4" />{" "}
                        {isAr
                          ? "الحل المعماري والتقني"
                          : "The Architectural Solution"}
                      </div>
                      <p className="text-sm text-slate-200 light:text-slate-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Engineering Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
                      {isAr
                        ? "أبرز القدرات الإنتاجية ومعايير الأمان"
                        : "Key Production Capabilities & Security Baseline"}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.engineeringHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/40 light:bg-slate-50 border border-slate-800/60 light:border-slate-200 text-xs sm:text-sm text-slate-300 light:text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Interactive Architecture Toggle */}
                  <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div
                      className="flex flex-wrap items-center gap-2"
                      dir="ltr"
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleArch(project.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/35 text-xs font-mono font-semibold text-cyan-300 light:text-cyan-700 transition-all shrink-0 cursor-pointer"
                    >
                      <Layers className="w-4 h-4" />
                      <span>
                        {isArchOpen
                          ? isAr
                            ? "إخفاء المخطط المعماري"
                            : "Hide System Architecture"
                          : isAr
                          ? "استعراض المخطط المعماري"
                          : "Inspect System Architecture"}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isArchOpen ? "rotate-90" : isAr ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable System Architecture Flow */}
                  {isArchOpen && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 light:bg-slate-50 border border-cyan-500/30 space-y-5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-700">
                          <Cpu className="w-4 h-4" />{" "}
                          {isAr
                            ? "مخطط تدفق البيانات والمعمارية (End-to-End Flow)"
                            : "End-to-End Request & Data Flow Architecture"}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                          {isAr
                            ? `${project.architecture.length} طبقات معمارية`
                            : `${project.architecture.length} Architectural Layers`}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {project.architecture.map((node) => (
                          <div
                            key={node.id}
                            className="p-4 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 flex flex-col justify-between space-y-3"
                          >
                            <div className="space-y-2">
                              <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25 text-[11px] font-mono text-cyan-300 light:text-cyan-700">
                                {node.layer}
                              </span>
                              <h5 className="text-sm font-bold text-white light:text-slate-900">
                                {node.title}
                              </h5>
                              <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                                {node.description}
                              </p>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-slate-800/80 light:border-slate-200">
                              <div className="flex flex-wrap gap-1" dir="ltr">
                                {node.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="px-1.5 py-0.5 rounded bg-slate-950 light:bg-slate-100 text-[10px] font-mono text-emerald-400 light:text-emerald-700"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <div className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                                {isAr ? "المواصفات: " : "Spec: "}
                                {node.metricsOrSpecs}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
