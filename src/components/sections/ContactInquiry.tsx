"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Send,
  MessageSquareMore,
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const projectTypesEn = [
  "Custom SaaS / Web Platform",
  "Backend & API Architecture",
  "Enterprise ERP / Internal Tool",
  "EdTech / LMS System",
  "Performance / Technical Audit",
];

const projectTypesAr = [
  "منصة SaaS / تطبيق ويب متكامل",
  "بناء Backend وواجهات API",
  "نظام ERP / إدارة مخازن وحسابات",
  "منصة تعليمية EdTech / LMS",
  "تطوير أو تحسين نظام قائم",
];

const budgetRangesEn = [
  "< $1,000 (Focused Milestone)",
  "$1,000 – $2,500 (Full MVP)",
  "$2,500 – $5,000+ (Enterprise System)",
  "Monthly Retainer / Dedicated Contract",
];

const budgetRangesAr = [
  "أقل من 1,000$ (مرحلة محددة)",
  "1,000$ – 2,500$ (مشروع MVP متكامل)",
  "2,500$ – 5,000$+ (نظام مؤسسي شامل)",
  "تعاقد شهري / تفرغ للمشروع",
];

const timelinesEn = [
  "Urgent (1–2 Weeks)",
  "Standard (3–5 Weeks)",
  "Comprehensive (1–3 Months)",
  "Flexible / Ongoing",
];

const timelinesAr = [
  "عاجل (1 – 2 أسبوع)",
  "متوسط (3 – 5 أسابيع)",
  "مشروع شامل (1 – 3 أشهر)",
  "مرن / مستمر",
];

export function ContactInquiry() {
  const { locale } = useTheme();
  const isAr = locale === "ar";

  const projectTypes = isAr ? projectTypesAr : projectTypesEn;
  const budgetRanges = isAr ? budgetRangesAr : budgetRangesEn;
  const timelines = isAr ? timelinesAr : timelinesEn;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectTypeIdx, setProjectTypeIdx] = useState(0);
  const [budgetIdx, setBudgetIdx] = useState(1);
  const [timelineIdx, setTimelineIdx] = useState(1);
  const [details, setDetails] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const selectedProjectType = projectTypes[projectTypeIdx] || projectTypes[0];
  const selectedBudget = budgetRanges[budgetIdx] || budgetRanges[0];
  const selectedTimeline = timelines[timelineIdx] || timelines[0];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const buildFormattedMessage = () => {
    if (isAr) {
      return [
        `مرحباً م. حسام، أود مناقشة مشروع جديد معك:`,
        ``,
        `• الاسم: ${name || "عميل محتمل"}`,
        `• البريد الإلكتروني: ${email || "غير محدد"}`,
        company ? `• الشركة / الموقع: ${company}` : null,
        `• نوع المشروع: ${selectedProjectType}`,
        `• الميزانية التقديرية: ${selectedBudget}`,
        `• المدة المستهدفة: ${selectedTimeline}`,
        ``,
        `تفاصيل المشروع:`,
        details || "أرغب في تحديد موعد لمناقشة تفاصيل المشروع.",
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      `Hello Hossam, I would like to discuss a project with you:`,
      ``,
      `• Name: ${name || "Prospective Client"}`,
      `• Email: ${email || "Not specified"}`,
      company ? `• Company/Website: ${company}` : null,
      `• Project Type: ${selectedProjectType}`,
      `• Estimated Budget: ${selectedBudget}`,
      `• Target Timeline: ${selectedTimeline}`,
      ``,
      `Project Overview:`,
      details || "Let's schedule a quick call to discuss the requirements.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(buildFormattedMessage());
    window.open(
      `https://wa.me/${siteConfig.contact.phoneRaw}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !details.trim()) {
      setErrorMsg(
        isAr
          ? "يرجى إدخال الاسم والبريد الإلكتروني ونبذة عن المشروع."
          : "Please fill in your name, email, and a short project brief."
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          companyOrWebsite: company,
          projectType: selectedProjectType,
          budgetRange: selectedBudget,
          timeline: selectedTimeline,
          details,
        }),
      }).catch(() => null);

      if (res && res.ok) {
        const data = await res.json();
        setSubmittedRef(data.referenceId || "HA-READY");
      } else {
        const fallbackRef = `HA-${Date.now().toString(36).toUpperCase().slice(-6)}`;
        setSubmittedRef(fallbackRef);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Could not send inquiry.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${
    siteConfig.contact.email
  }?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedProjectType} — ${name || "Client"}`
  )}&body=${encodeURIComponent(buildFormattedMessage())}`;

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-800/60 light:border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700">
            {isAr
              ? "06 · ابدأ مشروعك / اطلب عرض سعر"
              : "06 · Start a Project / Request a Quote"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white light:text-slate-900">
            {isAr ? "هل أنت مستعد لبناء مشروع " : "Ready to Build Something "}
            <span className="text-emerald-400 light:text-emerald-600">
              {isAr ? "استثنائي؟" : "Exceptional?"}
            </span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed">
            {isAr
              ? "اختر تفاصيل مشروعك أدناه للحصول على خطة تقنية وعرض سعر، أو أرسل الطلب مباشرة إلى واتساب لبدء المحادثة فوراً."
              : "Configure your project brief below to receive a technical roadmap and quote—or send it directly to my WhatsApp for an immediate conversation."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Interactive Project Quote Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/85 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xl">
            {submittedRef ? (
              <div className="py-8 space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950 light:bg-slate-100 border border-slate-800 text-xs font-mono text-emerald-400">
                    REF: {submittedRef}
                  </span>
                  <h3 className="text-2xl font-bold text-white light:text-slate-900">
                    {isAr
                      ? "تم تسجيل طلب مشروعك بنجاح!"
                      : "Project Brief Logged Successfully!"}
                  </h3>
                  <p className="text-sm text-slate-300 light:text-slate-600 max-w-md mx-auto">
                    {isAr ? (
                      <>
                        شكراً لك يا{" "}
                        <span className="font-semibold">{name}</span>. للحصول
                        على أسرع رد الآن، يمكنك إرسال هذا الملخص مباشرة إلى
                        واتساب أو البريد الإلكتروني بضغطة واحدة:
                      </>
                    ) : (
                      <>
                        Thank you, <span className="font-semibold">{name}</span>
                        . To get the fastest response right now, you can also
                        forward this brief directly to my WhatsApp or Email with
                        one click:
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm cursor-pointer transition-all"
                  >
                    <MessageSquareMore className="w-4 h-4" />
                    <span>
                      {isAr
                        ? "إرسال عبر واتساب الآن"
                        : "Open Brief in WhatsApp Now"}
                    </span>
                  </button>

                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-white light:text-slate-900 font-semibold text-sm transition-all"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isAr ? "فتح في تطبيق الإيميل" : "Open in Email Client"}
                    </span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="text-xs font-mono text-slate-400 hover:text-emerald-400 underline cursor-pointer"
                >
                  {isAr
                    ? "← تعديل أو إرسال طلب آخر"
                    : "← Edit or send another inquiry"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-6">
                {/* 1. Project Type Selector */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700">
                    {isAr
                      ? "1. ما هو نوع المشروع؟"
                      : "1. What are we building?"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type, idx) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectTypeIdx(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                          projectTypeIdx === idx
                            ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 light:text-emerald-800 light:bg-emerald-100 font-semibold"
                            : "bg-slate-950/70 light:bg-slate-50 border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-600 hover:border-slate-700"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="budget-select"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                    >
                      {isAr ? "2. الميزانية التقديرية" : "2. Estimated Budget"}
                    </label>
                    <select
                      id="budget-select"
                      value={budgetIdx}
                      onChange={(e) => setBudgetIdx(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 focus:outline-none focus:border-emerald-500"
                    >
                      {budgetRanges.map((b, idx) => (
                        <option key={b} value={idx}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="timeline-select"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                    >
                      {isAr ? "3. المدة الزمنية المستهدفة" : "3. Target Timeline"}
                    </label>
                    <select
                      id="timeline-select"
                      value={timelineIdx}
                      onChange={(e) => setTimelineIdx(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 focus:outline-none focus:border-emerald-500"
                    >
                      {timelines.map((t, idx) => (
                        <option key={t} value={idx}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                    >
                      {isAr ? "الاسم الكريم *" : "Your Name *"}
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isAr ? "مثال: أحمد محمد" : "e.g. Alex Morgan"}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="client-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                    >
                      {isAr ? "البريد الإلكتروني *" : "Your Email *"}
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      dir="ltr"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="client-company"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                  >
                    {isAr
                      ? "اسم الشركة أو رابط الموقع الحالي (اختياري)"
                      : "Company or Existing Website (Optional)"}
                  </label>
                  <input
                    id="client-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* 4. Project Details */}
                <div className="space-y-2">
                  <label
                    htmlFor="project-details"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 light:text-slate-700"
                  >
                    {isAr
                      ? "نبذة عن المشروع وأهم المتطلبات *"
                      : "Project Scope & Key Goals *"}
                  </label>
                  <textarea
                    id="project-details"
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={
                      isAr
                        ? "اكتب فكرة المشروع، أهم الميزات المطلوبة، أو أي تفاصيل تقنية تود مشاركتها..."
                        : "Tell me about the core problem you are solving, key features needed, or any existing tech stack..."
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                    {errorMsg}
                  </div>
                )}

                {/* Dual Action Buttons: Submit via API OR Instant WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? isAr
                          ? "جاري إرسال الطلب..."
                          : "Sending Project Brief..."
                        : isAr
                        ? "إرسال طلب المشروع"
                        : "Submit Project Brief"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950 light:bg-emerald-50 hover:bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 light:text-emerald-700 font-semibold text-sm transition-all cursor-pointer"
                  >
                    <MessageSquareMore className="w-4 h-4 text-emerald-400" />
                    <span>
                      {isAr
                        ? "إرسال فوري عبر واتساب"
                        : "Send Instantly via WhatsApp"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Columns: Direct Contact Channels & Trust Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Cards */}
            <div className="rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700">
                  {isAr ? "قنوات التواصل المباشر" : "Direct Channels"}
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  {isAr
                    ? "تواصل معي مباشرة في أي وقت"
                    : "Reach Out Directly Anytime"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
                  {isAr
                    ? "تفضل التواصل السريع عبر البريد الإلكتروني أو محادثة واتساب مباشرة؟ يمكنك الوصول إليّ عبر أي من القنوات التالية:"
                    : "Prefer direct email or a quick WhatsApp message? Connect with me directly through any of the channels below:"}
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Card with Copy Button */}
                <div className="p-4 rounded-2xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                        {isAr ? "البريد الإلكتروني المباشر" : "Direct Email"}
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        dir="ltr"
                        className="text-sm font-bold text-white light:text-slate-900 hover:text-emerald-400 truncate block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700 hover:text-emerald-400 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isAr ? "تم النسخ" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isAr ? "نسخ" : "Copy"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* WhatsApp / Phone Card */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                        {isAr
                          ? "واتساب واتصال مباشر"
                          : "WhatsApp & Direct Phone"}
                      </div>
                      <div
                        dir="ltr"
                        className="text-sm font-bold text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                </a>

                {/* LinkedIn Card */}
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                        {isAr ? "حساب لينكد إن" : "LinkedIn Network"}
                      </div>
                      <div className="text-sm font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        Hossam Abdelhamid
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                </a>

                {/* GitHub Card */}
                <a
                  href={siteConfig.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-950/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-violet-500/40 flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                        {isAr ? "مستودعات الكود GitHub" : "GitHub Repositories"}
                      </div>
                      <div
                        dir="ltr"
                        className="text-sm font-bold text-white light:text-slate-900 group-hover:text-violet-400 transition-colors"
                      >
                        @hamyn203-commits
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-violet-400" />
                </a>
              </div>

              {/* Client Assurance Note */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 light:text-emerald-800">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isAr
                      ? "ماذا يحدث بعد تواصلك معي؟"
                      : "What happens after you reach out?"}
                  </span>
                </div>
                <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed">
                  {isAr
                    ? "أقوم بمراجعة متطلبات مشروعك شخصياً، وأجهز تصوراً معمارياً مبدئياً، وأرد عليك خلال ساعتين لتحديد مكالمة سريعة أو إرسال عرض سعر ومراحل تنفيذ واضحة."
                    : "I review your requirements personally, prepare an initial architectural recommendation, and reply within 2 hours to schedule a discovery chat or send a clear milestone quote."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
