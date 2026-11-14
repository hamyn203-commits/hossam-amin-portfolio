"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Globe,
  Code2,
} from "lucide-react";

export function HeroSection() {
  const { locale } = useTheme();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Architectural Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: High-Converting Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-200/90 shadow-sm">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 light:text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {isAr ? "متاح لمشاريع جديدة" : "Available for New Projects"}
              </span>
              <span className="text-slate-600 light:text-slate-300">|</span>
              <span className="text-xs font-mono text-slate-300 light:text-slate-600">
                {isAr ? siteConfig.hero.badgeAr : siteConfig.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
                {isAr
                  ? `${siteConfig.nameAr} — ${siteConfig.roleAr}`
                  : `${siteConfig.name} — ${siteConfig.role}`}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.18]">
                {isAr
                  ? siteConfig.hero.headlineStartAr
                  : siteConfig.hero.headlineStart}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 light:from-emerald-600 light:via-teal-600 light:to-cyan-600 bg-clip-text text-transparent">
                  {isAr
                    ? siteConfig.hero.headlineHighlightAr
                    : siteConfig.hero.headlineHighlight}
                </span>{" "}
                {isAr
                  ? siteConfig.hero.headlineEndAr
                  : siteConfig.hero.headlineEnd}
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl">
              {isAr
                ? siteConfig.hero.descriptionAr
                : siteConfig.hero.description}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
              >
                <span>
                  {isAr
                    ? "ابدأ مشروعك / اطلب عرض سعر"
                    : "Start a Project / Get a Quote"}
                </span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 text-white light:text-slate-900 border border-slate-800 light:border-slate-200 font-semibold text-sm sm:text-base transition-all"
              >
                <span>
                  {isAr ? "استكشف المشاريع والأعمال" : "Explore Case Studies"}
                </span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 light:bg-emerald-50 hover:bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 light:text-emerald-700 font-medium text-sm transition-all"
              >
                <MessageSquareMore className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? "واتساب مباشر" : "WhatsApp Direct"}</span>
              </a>
            </div>

            {/* Social & Live Production Links Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400 light:text-slate-600">
              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span dir="ltr">github.com/hamyn203-commits</span>
              </a>
              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? "حساب LinkedIn" : "LinkedIn Profile"}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span dir="ltr">{siteConfig.contact.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait + Live Production Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Ambient Glow behind Portrait Card */}
              <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/25 via-cyan-500/20 to-violet-500/20 blur-2xl opacity-80" />

              <div className="relative rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800/90 light:border-slate-200 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Portrait Showcase Area */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/hossam-amin.jpg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  {/* Bottom Gradient Vignette for seamless blending */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Floating Top-Left Verified Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 flex items-center gap-2 text-xs font-mono text-emerald-400 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isAr ? "مهندس Full-Stack معتمد" : "Verified Architect"}
                    </span>
                  </div>

                  {/* Floating Top-Right Experience Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 flex items-center gap-1.5 text-xs font-mono text-cyan-300 shadow-lg">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isAr ? "+4 سنوات خبرة" : "4+ Yrs Exp"}</span>
                  </div>

                  {/* Overlay Identity Nameplate at Bottom of Photo */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow">
                        {isAr ? siteConfig.nameAr : siteConfig.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-mono text-emerald-400">
                        {isAr
                          ? "مهندس برمجيات Full-Stack أول"
                          : "Senior Full-Stack Software Engineer"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Flagship System & Quick Tech Bar */}
                <div className="p-5 sm:p-6 space-y-4 bg-slate-900/95 light:bg-white">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-slate-950/60 to-cyan-500/10 light:from-emerald-50 light:via-slate-50 light:to-cyan-50 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700 font-semibold flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />{" "}
                        {isAr
                          ? "أحدث منصة حية في الإنتاج"
                          : "Live Flagship Production"}
                      </span>
                      <a
                        href={siteConfig.contact.featuredLiveDomain}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-white light:text-slate-900 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <span>wahywanamaa.com</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white light:text-slate-900">
                      {isAr
                        ? "أكاديمية وَحْيٌ وَنَمَاء — منصة تعليمية وفصول بث مباشر"
                        : "Wahy Wa Namaa Academy — Multi-Role EdTech & Live LMS"}
                    </p>
                  </div>

                  {/* Quick Capabilities Strip */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-2 text-slate-200 light:text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">
                        {isAr ? "React / Next.js / Vue" : "React / Next.js / Vue"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-2 text-slate-200 light:text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate">
                        {isAr
                          ? "Node / FastAPI / .NET"
                          : "Node / FastAPI / .NET"}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Guarantee Banner */}
                  <div className="pt-2 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      {isAr
                        ? "تواصل مباشر · تسليم كود نظيف"
                        : "Direct communication · Clean handover"}
                    </span>
                    <span className="font-mono text-emerald-400 light:text-emerald-700 font-medium">
                      {isAr
                        ? siteConfig.availability.responseTimeAr
                        : siteConfig.availability.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Engineering Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800/70 light:border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 light:bg-white border border-slate-800/70 light:border-slate-200/90 hover:border-emerald-500/30 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                {isAr ? stat.valueAr : stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-emerald-400 light:text-emerald-700">
                {isAr ? stat.labelAr : stat.label}
              </div>
              <div className="mt-0.5 text-xs font-mono text-slate-400 light:text-slate-500">
                {isAr ? stat.detailAr : stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
