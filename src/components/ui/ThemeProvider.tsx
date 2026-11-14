"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale } from "@/types";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (loc: Locale) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  locale: "en",
  toggleLocale: () => {},
  setLocale: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(
      "hossam-portfolio-theme"
    ) as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      document.documentElement.classList.toggle("light", savedTheme === "light");
    } else {
      document.documentElement.classList.add("dark");
    }

    const savedLocale = localStorage.getItem(
      "hossam-portfolio-locale"
    ) as Locale | null;
    if (savedLocale === "ar" || savedLocale === "en") {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
      document.documentElement.dir = savedLocale === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("hossam-portfolio-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
  };

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("hossam-portfolio-locale", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme : "dark",
        toggleTheme,
        locale: mounted ? locale : "en",
        toggleLocale,
        setLocale,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
