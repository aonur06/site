"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[var(--color-tekin-navy)] text-white py-16 mt-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Tekin Mimarlık Logo" className="h-16 w-auto object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.15em] text-white leading-none">TEKİN</span>
                <span className="text-[10px] tracking-[0.4em] text-[var(--color-tekin-gray)] font-bold pl-1 mt-1 leading-none uppercase">
                  {lang === "en" ? "ARCHITECTURE" : "MİMARLIK"}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed font-light max-w-xs">
              {t("footer_tagline")}
            </p>
          </div>

          {/* İletişim */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-medium mb-6 tracking-[0.2em] uppercase text-white/50">{t("footer_contact_title")}</h4>
            <div className="flex flex-col gap-5 text-sm font-light text-white/80">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tekin+Mimarl%C4%B1k+%C3%87ubuk+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5 mt-0.5 text-[var(--color-tekin-gray)] shrink-0" strokeWidth={1.5} />
                <span className="whitespace-pre-line">{t("footer_address")}</span>
              </a>
              <a
                href="tel:+905318167909"
                className="flex items-center gap-4 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[var(--color-tekin-gray)] shrink-0" strokeWidth={1.5} />
                <span>0531 816 79 09</span>
              </a>
              <a
                href="mailto:tekinmimarlik6@gmail.com"
                className="flex items-center gap-4 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[var(--color-tekin-gray)] shrink-0" strokeWidth={1.5} />
                <span>tekinmimarlik6@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Linkler & Sosyal */}
          <div className="flex flex-col">
            <h4 className="text-[13px] font-medium mb-6 tracking-[0.2em] uppercase text-white/50">{t("footer_explore_title")}</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-white/80">
              <Link href="/hakkimizda" className="hover:text-white transition-colors w-max">{t("footer_explore_about")}</Link>
              <Link href="/projeler" className="hover:text-white transition-colors w-max">{t("footer_explore_projects")}</Link>
              <Link href="/iletisim" className="hover:text-white transition-colors w-max">{t("footer_explore_contact")}</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-light">
          <p>© {new Date().getFullYear()} {t("footer_rights")}</p>
          <p className="mt-4 md:mt-0 tracking-wider">{t("footer_studio_badge")}</p>
        </div>
      </div>
    </footer>
  );
}
