"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  MapPin,
  Calendar,
  Building,
  Ruler,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/language-context";

export default function ProjectDetailView({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  // Lightbox state
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (project?.title) {
      document.title = `${project.title} | ${lang === "en" ? "Tekin Architecture" : "Tekin Mimarlık"}`;
    }
  }, [project, lang]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % project.gallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + project.gallery.length) % project.gallery.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, project.gallery.length]);

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      {/* Üst Navigasyon & Breadcrumb */}
      <div className="border-b border-foreground/10 bg-background/50 backdrop-blur-md sticky top-20 md:top-24 z-20">
        <div className="container mx-auto px-6 max-w-7xl py-4 flex justify-between items-center text-xs tracking-widest uppercase font-mono">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t("detail_back_to_projects")}
          </Link>
          <div className="hidden md:flex items-center gap-3 text-foreground/40">
            <span>{lang === "en" ? (project.typology === "villa" ? "Villa & Residential" : "Multi-Story & Residence") : project.typologyName}</span>
            <span>/</span>
            <span className="text-foreground font-semibold">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Proje Başlık & Hero */}
      <section className="container mx-auto px-6 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase px-3 py-1 bg-[var(--color-tekin-navy)]/10 text-[var(--color-tekin-navy)] dark:bg-white/10 dark:text-white rounded-full">
                {lang === "en"
                  ? (project.typology === "villa" ? "Villa & Residential" : "Multi-Story & Residence")
                  : project.typologyName}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-foreground/60">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {project.year}
            </span>
          </div>
        </div>

        {/* Ana Kapak Görseli */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-foreground/5 mb-16 group">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button
            onClick={() => setActiveImageIndex(0)}
            className="absolute bottom-6 right-6 bg-black/60 hover:bg-black/80 text-white backdrop-blur-md px-4 py-2 rounded-sm text-xs tracking-widest uppercase flex items-center gap-2 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" /> {t("lightbox_expand")}
          </button>
        </div>

        {/* Proje Künyesi & Mimari Konsept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 pb-16 border-b border-foreground/10">
          {/* Sol Kolon: Mimari Konsept */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {t("detail_concept_title")}
            </h2>
            <div className="w-16 h-0.5 bg-[var(--color-tekin-navy)] dark:bg-white mb-2" />
            <p className="text-lg font-light leading-relaxed text-foreground/80">
              {project.concept}
            </p>

            {project.features && project.features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-widest font-mono text-foreground/60 mb-4">
                  {t("detail_features_title")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 bg-foreground/[0.02] border border-foreground/10 rounded-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-tekin-navy)] dark:text-white shrink-0 mt-0.5" />
                      <span className="text-sm font-light text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sağ Kolon: Mimari Künye (Fact Sheet) */}
          <div className="lg:col-span-5 bg-foreground/[0.02] border border-foreground/10 p-8 rounded-sm">
            <h3 className="text-xs uppercase tracking-[0.25em] font-mono text-foreground/50 mb-6 pb-3 border-b border-foreground/10">
              {t("detail_factsheet_title")}
            </h3>

            <dl className="flex flex-col divide-y divide-foreground/10 text-sm">
              <div className="py-3 flex justify-between items-center">
                <dt className="text-foreground/50 font-mono text-xs uppercase flex items-center gap-2">
                  <Building className="w-3.5 h-3.5" /> {t("detail_factsheet_typology")}
                </dt>
                <dd className="font-medium text-right">{project.type}</dd>
              </div>

              <div className="py-3 flex justify-between items-center">
                <dt className="text-foreground/50 font-mono text-xs uppercase flex items-center gap-2">
                  <Ruler className="w-3.5 h-3.5" /> {t("detail_factsheet_area")}
                </dt>
                <dd className="font-mono font-semibold text-right">{project.area}</dd>
              </div>

              <div className="py-3 flex justify-between items-center">
                <dt className="text-foreground/50 font-mono text-xs uppercase flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> {t("detail_factsheet_adaparsel")}
                </dt>
                <dd className="font-mono text-right">
                  {project.ada !== "—"
                    ? `${lang === "en" ? "Block" : "Ada"} ${project.ada} / ${lang === "en" ? "Parcel" : "Parsel"} ${project.parsel}`
                    : t("detail_not_specified")}
                </dd>
              </div>

              <div className="py-3 flex justify-between items-center">
                <dt className="text-foreground/50 font-mono text-xs uppercase flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> {t("detail_factsheet_location")}
                </dt>
                <dd className="font-medium text-right">{project.location}</dd>
              </div>

              <div className="py-3 flex justify-between items-center">
                <dt className="text-foreground/50 font-mono text-xs uppercase flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> {t("detail_factsheet_year")}
                </dt>
                <dd className="font-mono text-right">{project.year}</dd>
              </div>

              {project.client && (
                <div className="py-3 flex justify-between items-center">
                  <dt className="text-foreground/50 font-mono text-xs uppercase">{t("detail_factsheet_client")}</dt>
                  <dd className="font-medium text-right">{project.client}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        {/* Yüksek Çözünürlüklü Proje Galerisi */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{t("detail_gallery_title")}</h2>
              <p className="text-foreground/60 font-light mt-1 text-sm">
                {t("detail_gallery_subtitle")} ({project.gallery.length} {t("detail_gallery_count_suffix")}).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative aspect-[4/3] bg-foreground/5 overflow-hidden rounded-sm cursor-pointer border border-foreground/5 hover:border-foreground/20 shadow-sm"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} Render ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" /> {t("lightbox_expand")} ({idx + 1}/{project.gallery.length})
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projeler Arası Geçiş (Prev / Next Navigation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 pb-16 border-t border-foreground/10">
          <Link
            href={`/projeler/${prevProject.slug}`}
            className="group flex flex-col p-6 rounded-sm border border-foreground/10 hover:border-foreground/30 transition-all bg-foreground/[0.01] hover:bg-foreground/[0.03]"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/40 group-hover:text-foreground/70 flex items-center gap-2 mb-2">
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> {t("detail_prev_project")}
            </span>
            <span className="text-xl font-medium tracking-wide">{prevProject.title}</span>
            <span className="text-xs text-foreground/50 mt-1 uppercase tracking-wider">{prevProject.type}</span>
          </Link>

          <Link
            href={`/projeler/${nextProject.slug}`}
            className="group flex flex-col p-6 rounded-sm border border-foreground/10 hover:border-foreground/30 transition-all bg-foreground/[0.01] hover:bg-foreground/[0.03] text-right"
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/40 group-hover:text-foreground/70 flex items-center justify-end gap-2 mb-2">
              {t("detail_next_project")} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xl font-medium tracking-wide">{nextProject.title}</span>
            <span className="text-xs text-foreground/50 mt-1 uppercase tracking-wider">{nextProject.type}</span>
          </Link>
        </div>

        {/* Proje İletişim / Teklif CTA Bandı */}
        <div className="mt-8 p-10 md:p-14 bg-[var(--color-tekin-navy)] text-white rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-white/60">
              {t("detail_cta_tag")}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
              {t("detail_cta_title")}
            </h3>
            <p className="text-white/70 font-light text-sm max-w-xl mt-2">
              {t("detail_cta_desc")}
            </p>
          </div>
          <a
            href={`https://wa.me/905318167909?text=${encodeURIComponent(
              lang === "en"
                ? `Hello, I am interested in ${project.title} on your Tekin Architecture website. We would like to consult with the architect about our project.`
                : `Merhaba, Tekin Mimarlık web sitenizdeki ${project.title} projenizi inceledim. Kendi projemiz için görüşmek istiyoruz.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-semibold flex items-center gap-3 transition-transform hover:scale-105 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            {t("detail_cta_btn")}
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6 md:p-10 backdrop-blur-xl select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Modal Header */}
            <div
              className="flex justify-between items-center text-white/80 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="font-mono text-xs tracking-widest uppercase">
                <span className="text-white font-semibold">{project.title}</span> — Render{" "}
                {activeImageIndex + 1} / {project.gallery.length}
              </div>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label={t("lightbox_close")}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image + Prev / Next Arrows */}
            <div
              className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setActiveImageIndex(
                    (activeImageIndex - 1 + project.gallery.length) % project.gallery.length
                  )
                }
                className="absolute left-2 md:left-6 p-3 text-white/70 hover:text-white rounded-full bg-black/50 hover:bg-black/80 transition-all z-20 cursor-pointer"
                aria-label={lang === "en" ? "Previous Image" : "Önceki Görsel"}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} Render ${activeImageIndex + 1}`}
                className="max-h-[82vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
              />

              <button
                onClick={() =>
                  setActiveImageIndex((activeImageIndex + 1) % project.gallery.length)
                }
                className="absolute right-2 md:right-6 p-3 text-white/70 hover:text-white rounded-full bg-black/50 hover:bg-black/80 transition-all z-20 cursor-pointer"
                aria-label={lang === "en" ? "Next Image" : "Sonraki Görsel"}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Modal Footer Thumbnails */}
            <div
              className="flex justify-center items-center gap-2 overflow-x-auto py-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {project.gallery.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-10 rounded-sm overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? "border-white scale-110 opacity-100"
                      : "border-transparent opacity-40 hover:opacity-75"
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
