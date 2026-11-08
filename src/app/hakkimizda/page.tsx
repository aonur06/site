"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title =
      lang === "en"
        ? "About Us & 35 Years Heritage | Tekin Architecture"
        : "Hakkımızda & 35 Yıllık Tecrübe | Tekin Mimarlık";
  }, [lang]);

  const coreValues = [
    {
      icon: Compass,
      title: t("about_v1_title"),
      desc: t("about_v1_desc"),
    },
    {
      icon: Sparkles,
      title: t("about_v2_title"),
      desc: t("about_v2_desc"),
    },
    {
      icon: Award,
      title: t("about_v3_title"),
      desc: t("about_v3_desc"),
    },
    {
      icon: Layers,
      title: t("about_v4_title"),
      desc: t("about_v4_desc"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      {/* 1. KURUMSAL MİRAS & KURUCU */}
      <section className="container mx-auto px-6 max-w-7xl pt-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[var(--color-tekin-navy)] dark:text-white/60 block mb-3">
            {t("about_tag")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {t("about_title_part1")} <span className="font-light text-[var(--color-tekin-gray)]">{t("about_title_highlight")}</span>
          </h1>
          <div className="w-20 h-1 bg-[var(--color-tekin-navy)] dark:bg-white mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-lg font-light leading-relaxed text-foreground/80">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <p>
              {t("about_p1")}
            </p>
            <p>
              {t("about_p2")}
            </p>
            
            <div className="p-6 bg-foreground/[0.02] border-l-2 border-[var(--color-tekin-navy)] dark:border-white rounded-r-sm">
              <p className="text-base italic text-[var(--color-tekin-navy)] dark:text-[var(--color-tekin-gray)] font-medium">
                {t("about_quote")}
              </p>
            </div>

            {/* Tecrübe & Portfolyo İstatistikleri */}
            <div className="pt-4 border-t border-foreground/10 flex flex-wrap gap-8 sm:gap-12 font-mono text-xs text-foreground/70">
              <div>
                <span className="block text-2xl font-bold text-foreground">{t("about_stat_years_num")}</span>
                <span className="text-[11px] uppercase tracking-wider text-foreground/50">{t("about_stat_years_label")}</span>
              </div>
              <div className="border-l border-foreground/15 pl-8 sm:pl-12">
                <span className="block text-2xl font-bold text-foreground">{t("about_stat_projects_num")}</span>
                <span className="text-[11px] uppercase tracking-wider text-foreground/50">{t("about_stat_projects_label")}</span>
              </div>
              <div className="border-l border-foreground/15 pl-8 sm:pl-12">
                <span className="block text-2xl font-bold text-foreground">{t("about_founder_name")}</span>
                <span className="text-[11px] uppercase tracking-wider text-foreground/50">{t("about_founder_title")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-foreground/10 shadow-xl"
          >
            <img
              src="/images/about/office.jpg"
              alt="Tekin Mimarlık Merkez Ofis & Çalışma Alanı"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-1">
                  {t("about_studio_tag")}
                </span>
                <p className="text-sm font-medium">{t("about_studio_name")}</p>
                <p className="text-xs text-white/60 font-light">{t("about_studio_loc")}</p>
              </div>
              <span className="text-[11px] font-mono tracking-wider px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white shrink-0">
                Est. 1989
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DEĞERLERİMİZ & TASARIM FELSEFESİ */}
      <section className="py-24 border-t border-foreground/10 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-[var(--color-tekin-navy)] dark:text-white/60 block mb-3">
              {t("about_values_tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {t("about_values_title")} <span className="font-light text-[var(--color-tekin-gray)]">{t("about_values_highlight")}</span>
            </h2>
            <p className="text-foreground/70 font-light text-base leading-relaxed">
              {t("about_values_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-background border border-foreground/10 rounded-sm hover:border-foreground/30 transition-all"
                >
                  <div className="p-3 w-fit rounded-full bg-foreground/[0.04] text-[var(--color-tekin-navy)] dark:text-white mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-3">{val.title}</h3>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. İLETİŞİME GEÇ CTA */}
      <section className="py-20 border-t border-foreground/10 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-foreground/50 block mb-3">
            {t("about_cta_tag")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t("about_cta_title")}
          </h2>
          <p className="text-foreground/70 font-light max-w-xl mx-auto text-base mb-8">
            {t("about_cta_desc")}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/iletisim"
              className="bg-[var(--color-tekin-navy)] hover:bg-[var(--color-tekin-navy)]/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
            >
              {t("about_cta_btn_contact")}
            </Link>
            <Link
              href="/projeler"
              className="border border-foreground/20 hover:border-foreground px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              {t("about_cta_btn_projects")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
