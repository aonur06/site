"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Layers, Hammer, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      icon: Compass,
      tag: t("process_step1_tag"),
      title: t("process_step1_title"),
      desc: t("process_step1_desc"),
      deliverables: [
        t("process_step1_d1"),
        t("process_step1_d2"),
      ],
    },
    {
      step: "02",
      icon: Eye,
      tag: t("process_step2_tag"),
      title: t("process_step2_title"),
      desc: t("process_step2_desc"),
      deliverables: [
        t("process_step2_d1"),
        t("process_step2_d2"),
      ],
    },
    {
      step: "03",
      icon: Layers,
      tag: t("process_step3_tag"),
      title: t("process_step3_title"),
      desc: t("process_step3_desc"),
      deliverables: [
        t("process_step3_d1"),
        t("process_step3_d2"),
      ],
    },
    {
      step: "04",
      icon: Hammer,
      tag: t("process_step4_tag"),
      title: t("process_step4_title"),
      desc: t("process_step4_desc"),
      deliverables: [
        t("process_step4_d1"),
        t("process_step4_d2"),
      ],
    },
  ];

  return (
    <section className="py-28 border-t border-foreground/10 bg-foreground/[0.015]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Üst Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-tekin-navy)] dark:text-white/60 block mb-3">
              {t("process_tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t("process_title_part1")} <span className="font-light text-[var(--color-tekin-gray)]">{t("process_title_highlight")}</span>
            </h2>
          </div>
          <p className="text-foreground/70 font-light max-w-md text-base leading-relaxed">
            {t("process_subtitle")}
          </p>
        </div>

        {/* 4 Adımlı Timeline Grid */}
        <div className="relative">
          {/* Masaüstü Bağlantı Çizgisi */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-[1px] bg-foreground/15 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 bg-background border border-foreground/10 rounded-sm hover:border-[var(--color-tekin-navy)] dark:hover:border-white transition-all flex flex-col justify-between h-full hover:shadow-xl"
                >
                  <div>
                    {/* Üst Adım Numarası & İkon */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl font-bold text-[var(--color-tekin-navy)] dark:text-white">
                          {item.step}
                        </span>
                        <span className="h-3 w-[1px] bg-foreground/20" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-foreground/50 font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-full bg-foreground/[0.04] text-[var(--color-tekin-navy)] dark:text-white group-hover:bg-[var(--color-tekin-navy)] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Başlık */}
                    <h3 className="text-lg font-semibold tracking-tight mb-3 text-foreground leading-snug">
                      {item.title}
                    </h3>

                    {/* Açıklama */}
                    <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Teslim / Çıktı Maddeleri */}
                  <div className="pt-5 border-t border-foreground/10 flex flex-col gap-2">
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-foreground/80 font-light">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
