"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  MessageSquareMore,
  Languages,
} from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme, locale, toggleLocale } = useTheme();
  const isAr = locale === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = isAr
    ? [
        { label: "الخدمات", href: "#services" },
        { label: "المشاريع", href: "#work" },
        { label: "المعمارية", href: "#architecture" },
        { label: "المهارات", href: "#skills" },
        { label: "آلية العمل", href: "#process" },
        { label: "تواصل معي", href: "#contact" },
      ]
    : [
        { label: "Services", href: "#services" },
        { label: "Case Studies", href: "#work" },
        { label: "Architecture", href: "#architecture" },
        { label: "Tech Stack", href: "#skills" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/85 light:bg-white/85 backdrop-blur-xl border-b border-slate-800/80 light:border-slate-200 shadow-lg shadow-black/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Portrait Avatar */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Hossam Amin Home"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-emerald-500/60 group-hover:border-emerald-400 group-hover:scale-105 transition-all shadow-md shadow-emerald-500/15">
            <img
              src="/images/hossam-amin.jpg"
              alt={siteConfig.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base text-white light:text-slate-900 flex items-center gap-1.5">
              {isAr ? siteConfig.shortNameAr : siteConfig.shortName}
              <span className="text-emerald-400 font-mono text-xs" dir="ltr">
                .dev
              </span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 light:text-slate-500 hidden sm:inline">
              {isAr ? "مهندس معماري Full-Stack" : "Full-Stack Architect"}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/70 light:bg-slate-100/90 border border-slate-800/80 light:border-slate-200/80 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-950 hover:bg-slate-800/60 light:hover:bg-white transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Availability Pill */}
          <a
            href="#contact"
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-300 light:text-emerald-700 hover:bg-emerald-500/15 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {isAr ? "متاح للمشاريع" : "Available for Freelance"}
          </a>

          {/* Language Switcher Button (EN <-> AR) */}
          <button
            onClick={toggleLocale}
            type="button"
            aria-label="Switch Language"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-bold text-slate-200 light:text-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            <Languages className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? "EN · English" : "AR · عربي"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle color theme"
            className="p-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all"
          >
            <span>{isAr ? "ابدأ مشروعك" : "Hire Me"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLocale}
            type="button"
            aria-label="Switch Language"
            className="px-2.5 py-2 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs font-bold text-emerald-400 flex items-center gap-1"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{isAr ? "EN" : "عربي"}</span>
          </button>
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle color theme"
            className="p-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-300 light:text-slate-700"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="p-2.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border border-slate-800 light:border-slate-200 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 light:text-slate-700 hover:bg-slate-800/70 light:hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 light:border-slate-200 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <span>
                {isAr ? "اطلب تسعير مشروعك" : "Request a Project Quote"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 font-medium text-sm text-center flex items-center justify-center gap-2"
            >
              <MessageSquareMore className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
