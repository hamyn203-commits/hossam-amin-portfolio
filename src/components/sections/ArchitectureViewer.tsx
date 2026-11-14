"use client";

import React, { useState } from "react";
import { projectsDataByLocale } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Cpu,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Database,
  Globe,
  Server,
  ExternalLink,
} from "lucide-react";

export function ArchitectureViewer() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const projects = projectsDataByLocale[locale];
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects[0].id
  );
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  const activeProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];
  const activeLayer =
    activeProject.architecture[selectedLayerIndex] ||
    activeProject.architecture[0];

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    setSelectedLayerIndex(0);
  };

  return (
    <section
      id="architecture"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 bg-slate-950/50 light:bg-slate-100/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700">
              {isAr
                ? "03 · مختبر البنية المعمارية التفاعلي"
                : "03 · Interactive System Architecture Lab"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
              {isAr ? "كيف أصمم معمارية الأنظمة " : "How I Architect Systems "}
              <span className="text-emerald-400 light:text-emerald-600">
                {isAr ? "من الداخل" : "Under the Hood"}
              </span>
            </h2>
            <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
              {isAr
                ? "اختر أحد الأنظمة الإنتاجية أدناه واضغط على أي طبقة معمارية لاستعراض كيف يتم إدارة الطلبات، المصادقة، البث المباشر، ومعاملات قواعد البيانات."
                : "Select a production system below and click on any architectural layer to inspect how requests, authentication, real-time media, and database transactions are orchestrated."}
            </p>
          </div>

          {/* System Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {projects.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectProject(proj.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20"
                      : "bg-slate-900 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-emerald-500/40"
                  }`}
                >
                  {proj.title.split("—")[0].split("(")[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Blueprint Board */}
        <div className="rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Blueprint Top Metadata */}
          <div className="pb-6 mb-8 border-b border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-emerald-400 light:text-emerald-700 uppercase">
                {isAr ? "المخطط النشط · " : "ACTIVE BLUEPRINT · "}
                {activeProject.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mt-1">
                {activeProject.title}
              </h3>
            </div>

            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-xs font-mono font-semibold text-emerald-300 light:text-emerald-700 hover:bg-emerald-500/25 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>
                  {isAr
                    ? `زيارة النظام الحي (${activeProject.liveDomainLabel})`
                    : `Inspect Live System (${activeProject.liveDomainLabel})`}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Layer Pipeline Nodes */}
            <div className="lg:col-span-6 space-y-3">
              {activeProject.architecture.map((layer, index) => {
                const isActive = index === selectedLayerIndex;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setSelectedLayerIndex(index)}
                    className={`w-full text-start p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-transparent border-emerald-500/50 shadow-lg"
                        : "bg-slate-950/60 light:bg-slate-50 border-slate-800/80 light:border-slate-200 hover:border-slate-700"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-emerald-400 light:text-emerald-700">
                        {layer.layer}
                      </div>
                      <div className="text-base font-bold text-white light:text-slate-900">
                        {layer.title}
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1" dir="ltr">
                        {layer.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-[11px] font-mono text-slate-300 light:text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-emerald-500 text-slate-950"
                          : "bg-slate-900 light:bg-slate-200 text-slate-400"
                      }`}
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Deep-Dive Inspector Panel for Selected Layer */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950/90 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 light:border-slate-200 pb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 light:text-emerald-700">
                  {activeLayer.layer}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />{" "}
                  {isAr ? "تفاصيل الطبقة" : "Layer Telemetry"}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                  {activeLayer.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
                  {activeLayer.description}
                </p>
              </div>

              {/* Layer Technologies */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  {isAr
                    ? "التقنيات المستخدمة في هذه الطبقة"
                    : "Active Layer Technologies"}
                </div>
                <div className="flex flex-wrap gap-2" dir="ltr">
                  {activeLayer.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 light:bg-white border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-300 light:text-emerald-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Specification Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-cyan-400 light:text-cyan-700 font-semibold">
                    {isAr
                      ? "مواصفات الجودة والأمان الإنتاجي"
                      : "Production Verification & SLA Spec"}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 light:text-slate-700 font-mono">
                    {activeLayer.metricsOrSpecs}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  {isAr
                    ? `الطبقة ${selectedLayerIndex + 1} من ${
                        activeProject.architecture.length
                      }`
                    : `Node ${selectedLayerIndex + 1} of ${
                        activeProject.architecture.length
                      }`}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedLayerIndex(
                      (selectedLayerIndex + 1) %
                        activeProject.architecture.length
                    )
                  }
                  className="text-emerald-400 light:text-emerald-700 hover:underline cursor-pointer"
                >
                  {isAr ? "الطبقة التالية ←" : "Next Layer →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
