import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { siteConfig } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.hero.description,
  keywords: [
    "Hossam Amin Abdelhamed",
    "حسام أمين عبد الحميد",
    "Senior Full-Stack Engineer",
    "Freelance Full-Stack Developer",
    "React Next.js Developer",
    "Node.js NestJS FastAPI Architect",
    "SaaS & ERP Software Engineer",
    "Wahy Wa Namaa Academy",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${inter.variable} ${cairo.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased bg-architect-grid selection:bg-emerald-500/30 selection:text-emerald-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
