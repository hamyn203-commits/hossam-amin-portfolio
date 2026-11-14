"use client";

import React from "react";
import { workProcessStepsByLocale } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import { CheckCircle2 } from "lucide-react";

export function WorkProcess() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const steps = workProcessStepsByLocale[locale];

  return (
    <section
      id="process"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 bg-slate-950/40 light:bg-slate-50/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono uppercase tracking-wider text-amber-400 light:text-amber-700">
            {isAr
              ? "05 · منهجية العمل مع العملاء"
              : "05 · Client Collaboration Workflow"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
            {isAr
              ? "خطوات عمل واضحة من "
              : "Predictable Delivery From "}
            <span className="text-emerald-400 light:text-emerald-600">
              {isAr ? "التخطيط إلى الإطلاق" : "Blueprint to Production"}
            </span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            {isAr
              ? "يختارني العملاء لأنني أوفر رؤية تقنية واضحة والتزاماً بالمواعيد. كل مشروع يمر عبر 4 مراحل منظمة مع روابط معاينة حية لمتابعة الإنجاز."
              : "Clients hire me because I eliminate technical guesswork. Every engagement follows a transparent, milestone-driven engineering process with live staging previews."}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl bg-slate-900/80 light:bg-white border border-slate-800/90 light:border-slate-200 p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-all shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-extrabold text-emerald-400 light:text-emerald-600">
                    {step.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-[11px] font-mono text-slate-300 light:text-slate-600">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white light:text-slate-900">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200">
                <div className="text-[11px] font-mono uppercase text-slate-400 light:text-slate-500 mb-1">
                  {isAr ? "مخرجات المرحلة" : "Key Deliverable"}
                </div>
                <div className="text-xs font-semibold text-emerald-300 light:text-emerald-700 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
