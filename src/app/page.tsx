"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ProcessSection } from "@/components/process-section";
import { useLanguage } from "@/context/language-context";

// 1. Madde: Arka plan slider'ı kullanıcının isteğiyle Tekay renderları olarak kalıyor
const renderImages = [
  "/renders/tekay-01.jpg",
  "/renders/tekay-02.jpg",
  "/renders/tekay-03.jpg",
  "/renders/tekay-04.jpg",
  "/renders/tekay-05.jpg",
  "/renders/tekay-06.jpg",
  "/renders/tekay-07.jpg",
  "/renders/tekay-08.jpg",
  "/renders/tekay-09.jpg",
  "/renders/tekay-10.jpg",
  "/renders/tekay-11.jpg",
];

// 2. Madde: Vitrin projeleri için render görselleri
const skylifeImages = [
  "/renders/skylife/skylife-01.jpg",
  "/renders/skylife/skylife-02.jpg",
  "/renders/skylife/skylife-03.jpg",
  "/renders/skylife/skylife-04.jpg",
];

const kocalarPortImages = [
  "/renders/vitrin-camlica/camlica-01.jpg",
  "/renders/vitrin-camlica/camlica-02.jpg",
  "/renders/vitrin-camlica/camlica-03.jpg",
  "/renders/vitrin-camlica/camlica-04.jpg",
  "/renders/vitrin-camlica/camlica-05.jpg",
  "/renders/vitrin-camlica/camlica-06.jpg",
];

// 190511-1 Projesi (Sadece renderları)
const proje190511Images = [
  "/renders/projeler/proje-190511-1/1.jpg",
  "/renders/projeler/proje-190511-1/2.jpg",
  "/renders/projeler/proje-190511-1/3.jpg",
  "/renders/projeler/proje-190511-1/9.jpg",
  "/renders/projeler/proje-190511-1/10.jpg",
  "/renders/projeler/proje-190511-1/11.jpg",
  "/renders/projeler/proje-190511-1/12.jpg",
  "/renders/projeler/proje-190511-1/13.jpg",
];

// Tekin YS Konut Projesi Görselleri
const tekinYSImages = [
  "/renders/projeler/proje-tekin-ys/1.jpg",
  "/renders/projeler/proje-tekin-ys/2.jpg",
  "/renders/projeler/proje-tekin-ys/3.jpg",
  "/renders/projeler/proje-tekin-ys/4.jpg",
  "/renders/projeler/proje-tekin-ys/5.jpg",
  "/renders/projeler/proje-tekin-ys/6.jpg",
  "/renders/projeler/proje-tekin-ys/7.jpg",
  "/renders/projeler/proje-tekin-ys/8.jpg",
  "/renders/projeler/proje-tekin-ys/9.jpg",
  "/renders/projeler/proje-tekin-ys/10.jpg",
  "/renders/projeler/proje-tekin-ys/11.jpg",
];

// Villa 2: Tekin Villa
const tekinVillaImages = [
  "/renders/villalar/tekin-villa/1.jpg",
  "/renders/villalar/tekin-villa/2.jpg",
  "/renders/villalar/tekin-villa/3.jpg",
  "/renders/villalar/tekin-villa/4.jpg",
  "/renders/villalar/tekin-villa/5.jpg",
  "/renders/villalar/tekin-villa/6.jpg",
  "/renders/villalar/tekin-villa/7.jpg",
  "/renders/villalar/tekin-villa/8.jpg",
];

// Villa 3: Yılmaz Mangal Villa
const yilmazVillaImages = [
  "/renders/villalar/yilmaz-mangal/1.jpg",
  "/renders/villalar/yilmaz-mangal/2.jpg",
  "/renders/villalar/yilmaz-mangal/3.jpg",
  "/renders/villalar/yilmaz-mangal/4.jpg",
  "/renders/villalar/yilmaz-mangal/5.jpg",
];

interface ShowcaseItem {
  slug: string;
  title: string;
  type: string;
  typeEn: string;
  ada: string;
  adaEn: string;
  images: string[];
  interval: number;
}

// 6 Adet Seçkin Vitrin Projesi (Sıralama: 1. Tekin YS, 2. 190465-2, 3. 190511-1, 4. 190492-11, 5. Yılmaz Villa, 6. Tekin Villa)
const showcaseProjects: ShowcaseItem[] = [
  {
    slug: "proje-tekin-ys",
    title: "TEKİN Prime",
    type: "Çok Katlı Konut & Rezidans",
    typeEn: "Multi-Story & Residence",
    ada: "TEKİN Prime",
    adaEn: "TEKİN Prime",
    images: tekinYSImages,
    interval: 2600,
  },
  {
    slug: "kocalar-port",
    title: "Kocalar PORT",
    type: "Çok Katlı Konut & Rezidans",
    typeEn: "Multi-Story & Residence",
    ada: "Ada 190465 Parsel 2",
    adaEn: "Block 190465 Parcel 2",
    images: kocalarPortImages,
    interval: 2600,
  },
  {
    slug: "proje-190511-1",
    title: "Elmas Konutları",
    type: "Çok Katlı Konut & Rezidans",
    typeEn: "Multi-Story & Residence",
    ada: "Ada 190511 Parsel 1",
    adaEn: "Block 190511 Parcel 1",
    images: proje190511Images,
    interval: 2400,
  },
  {
    slug: "skylife-esenboga",
    title: "SKYLIFE",
    type: "Rezidans & Yaşam",
    typeEn: "Residence & Living",
    ada: "Ada 190492 Parsel 11",
    adaEn: "Block 190492 Parcel 11",
    images: skylifeImages,
    interval: 2800,
  },
  {
    slug: "villa-projesi-3",
    title: "Çubuk Konsept Villa II",
    type: "Müstakil Villa Projesi",
    typeEn: "Detached Villa Project",
    ada: "Müstakil Villa",
    adaEn: "Detached Villa",
    images: yilmazVillaImages,
    interval: 2900,
  },
  {
    slug: "villa-projesi-1",
    title: "Çubuk Konsept Villa I",
    type: "Müstakil Villa Projesi",
    typeEn: "Detached Villa Project",
    ada: "Müstakil Villa",
    adaEn: "Detached Villa",
    images: tekinVillaImages,
    interval: 2700,
  },
];

// Tekil Proje Vitrin Kartı (Kendi renderları arasında bağımsız döner)
function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % item.images.length);
    }, item.interval);
    return () => clearInterval(timer);
  }, [item.images, item.interval]);

  return (
    <Link href={`/projeler/${item.slug}`}>
      <div className="group cursor-pointer flex flex-col h-full">
        <div className="relative aspect-[4/5] bg-foreground/10 overflow-hidden mb-6 rounded-sm">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          {/* Ada Parsel Hover Bilgisi */}
          <div className="absolute bottom-8 left-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="text-xs uppercase tracking-[0.4em] text-white/90 font-mono">
              {lang === "en" ? item.adaEn : item.ada}
            </span>
            <div className="w-0 h-[1px] bg-white/50 mt-2 transition-all duration-700 group-hover:w-full" />
          </div>

          {/* Kart İçi Render Geçişi */}
          <div className="w-full h-full relative transition-transform duration-1000 group-hover:scale-105">
            {item.images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`${item.title} - Render ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: activeIdx === idx ? 1 : 0 }}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-medium tracking-wide group-hover:text-[var(--color-tekin-gray)] transition-colors mt-auto">
          {item.title}
        </h3>
        <p className="text-sm text-foreground/50 mt-2 font-light tracking-wide uppercase">
          {lang === "en" ? item.typeEn : item.type}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title =
      lang === "en"
        ? "Tekin Architecture | Architectural Design & Project Office"
        : "Tekin Mimarlık | Mimari Tasarım & Proje Ofisi";
  }, [lang]);

  // Hero arkaplan slider zamanlayıcısı (Tekay renderları)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % renderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO ALANI — RENDER SLIDER + İSTATİSTİKLER */}
      <section style={{ position: "relative", height: "92vh", width: "100%", overflow: "hidden" }}>
        {/* Render Görselleri (Arka Plan Slider) */}
        {renderImages.map((src, index) => (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              transition: "opacity 1.2s ease-in-out",
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <img
              src={src}
              alt={`Tekin Mimarlık Render ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundColor: "#0a0f1a",
              }}
            />
          </div>
        ))}

        {/* Koyu gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Hero İçerik */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 24px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.85rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "800px",
              marginBottom: "20px",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            {t("hero_title_part1")} <span style={{ fontWeight: 300, color: "var(--color-tekin-gray, #94a3b8)" }}>{t("hero_title_highlight")}</span> {t("hero_title_part2")}
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontWeight: 300,
              maxWidth: "600px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              marginBottom: "36px",
              textShadow: "0 1px 10px rgba(0,0,0,0.4)",
            }}
          >
            {t("hero_subtitle")}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/projeler"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "14px 36px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              {t("hero_cta")}
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </div>
        </div>

        {/* Slide göstergeleri */}
        <div className="absolute bottom-28 md:bottom-28 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {renderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                currentSlide === index
                  ? "w-7 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Alt kısım — istatistikler (3 Sütun) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 py-4 md:py-6 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-3 gap-2 md:gap-8 text-center">
            <div className="px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-0.5 md:mb-1 font-mono">{t("stats_completed_num")}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 font-mono">{t("stats_completed_label")}</div>
            </div>
            <div className="px-2 border-l border-white/15">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-0.5 md:mb-1 font-mono">{t("stats_years_num")}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 font-mono">{t("stats_years_label")}</div>
            </div>
            <div className="px-2 border-l border-white/15">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-0.5 md:mb-1 font-mono">{t("stats_team_num")}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 font-mono">{t("stats_team_label")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOWCASE (VİTRİN) KISMI — 6 SEÇKİN PROJE */}
      <section className="py-32 bg-foreground/[0.02]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-foreground/50 block mb-2">
                {t("showcase_tag")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {t("showcase_title")}
              </h2>
              <p className="text-foreground/60 font-light max-w-xl text-lg">
                {t("showcase_desc")}
              </p>
            </div>
            <Link
              href="/projeler"
              className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-tekin-navy)] dark:text-white hover:text-[var(--color-tekin-gray)] transition-colors border-b border-foreground/20 pb-1"
            >
              {t("showcase_view_all")} ({showcaseProjects.length}+) <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* 6 Projelik 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {showcaseProjects.map((item) => (
              <ShowcaseCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-foreground hover:opacity-70 transition-opacity border-b border-foreground/20 pb-1"
            >
              {t("showcase_view_all")} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MİMARİ SÜREÇ (NASIL ÇALIŞIYORUZ?) BÖLÜMÜ */}
      <ProcessSection />

      {/* 4. ÇAĞRI (CTA) ALANI */}
      <section className="py-24 bg-[var(--color-tekin-navy)] text-white">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-white/60 block mb-2">
              {t("cta_banner_tag")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t("cta_banner_title")}
            </h2>
            <p className="text-white/70 font-light max-w-xl text-base mt-3">
              {t("cta_banner_desc")}
            </p>
          </div>
          <div className="flex gap-4 shrink-0 flex-wrap">
            <a
              href={`https://wa.me/905318167909?text=${encodeURIComponent(
                lang === "en"
                  ? "Hello, I am contacting you via Tekin Architecture website. We would like to consult about our project."
                  : "Merhaba, Tekin Mimarlık web sitenizden ulaşıyorum. Projemiz için görüşmek istiyoruz."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] font-semibold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              {t("cta_banner_whatsapp")}
            </a>
            <Link
              href="/iletisim"
              className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-xs font-mono uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-colors"
            >
              {t("cta_banner_contact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
