"use client";

import React, { useState } from "react";
import { skillsCategoriesByLocale } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import { CheckCircle2, Code2 } from "lucide-react";

export function SkillsMatrix() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const categories = skillsCategoriesByLocale[locale];

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayedCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono uppercase tracking-wider text-violet-400 light:text-violet-700">
              {isAr ? "04 · الترسانة التقنية والمهارات" : "04 · Technical Arsenal"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
              {isAr ? "تقنيات مجرّبة في بيئات " : "Production-Tested "}
              <span className="text-emerald-400 light:text-emerald-600">
                {isAr ? "الإنتاج الفعلي" : "Full-Stack Tech Stack"}
              </span>
            </h2>
            <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
              {isAr
                ? "خبرة عملية تزيد عن 4 سنوات في أحدث أطر الواجهات الأمامية، خوادم الـ Backend عالية الأداء، قواعد البيانات العلائقية وغير العلائقية، وأتمتة الاختبارات."
                : "4+ years of hands-on mastery across modern frontend frameworks, high-speed backend runtimes, relational & NoSQL databases, and automated QA pipelines."}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border ${
                activeCategory === "all"
                  ? "bg-emerald-500 text-slate-950 border-emerald-400"
                  : "bg-slate-900 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-emerald-500/40"
              }`}
            >
              {isAr ? "جميع التخصصات" : "All Domains"}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-slate-950 border-emerald-400"
                    : "bg-slate-900 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-200 hover:border-emerald-500/40"
                }`}
              >
                {cat.title.split("&")[0].split("(")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-slate-900/75 light:bg-white border border-slate-800/90 light:border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-lg"
            >
              <div className="space-y-4">
                <div className="border-b border-slate-800 light:border-slate-200 pb-4">
                  <div className="flex items-center gap-2 text-emerald-400 light:text-emerald-600 text-xs font-mono uppercase">
                    <Code2 className="w-4 h-4" />
                    <span>
                      {isAr ? "تخصص هندسي" : "Domain Specialization"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900 mt-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-500 mt-1">
                    {category.subtitle}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/70 light:border-slate-200 hover:border-emerald-500/35 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="text-sm font-bold text-white light:text-slate-900 flex items-center gap-2"
                          dir="ltr"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 light:text-emerald-700 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-400 light:text-slate-600">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
