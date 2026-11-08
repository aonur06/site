"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Layers, Ruler, Search, X, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ProjectsPage() {
  const { lang, t } = useLanguage();
  const [typologyFilter, setTypologyFilter] = useState<string>("TÜMÜ");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    document.title =
      lang === "en"
        ? "Architectural Showcase & Projects | Tekin Architecture"
        : "Mimari Vitrin & Projeler | Tekin Mimarlık";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const typologyCategories = [
    { label: t("filter_all_typologies"), value: "TÜMÜ" },
    { label: t("filter_villa"), value: "villa" },
    { label: t("filter_residence"), value: "konut" },
  ];

  const getTypologyLabel = (typology: string, defaultName: string) => {
    if (lang !== "en") return defaultName;
    switch (typology) {
      case "villa":
        return "Villa & Residential";
      case "konut":
        return "Multi-Story & Residence";
      default:
        return defaultName;
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesTypology =
      typologyFilter === "TÜMÜ" || project.typology === typologyFilter;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesTypology;

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      (project.ada && project.ada.toLowerCase().includes(query)) ||
      (project.parsel && project.parsel.toLowerCase().includes(query)) ||
      (project.location && project.location.toLowerCase().includes(query)) ||
      (project.typologyName && project.typologyName.toLowerCase().includes(query)) ||
      (project.concept && project.concept.toLowerCase().includes(query));

    return matchesTypology && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      <section className="container mx-auto px-6 max-w-7xl pt-6 pb-24">
        {/* Üst Alan & Başlık */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-foreground/50 block mb-3">
              {t("projects_tag")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {t("projects_title_part1")} <span className="font-light text-[var(--color-tekin-gray)]">{t("projects_title_highlight")}</span>
            </h1>
            <p className="text-foreground/60 font-light text-lg">
              {t("projects_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Canlı Arama Çubuğu (Ada, Parsel, Proje Adı, Tipoloji) */}
        <div className="relative mb-8">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-4 w-5 h-5 text-foreground/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("projects_search_placeholder")}
              className="w-full pl-12 pr-12 py-3.5 bg-foreground/[0.03] border border-foreground/15 rounded-sm text-sm placeholder:text-foreground/40 text-foreground focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors font-light"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 p-1 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
                title="Aramayı Temizle"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs font-mono text-foreground/50 mt-2 pl-1">
              &quot;{searchQuery}&quot; — <span className="font-semibold text-foreground">{filteredProjects.length}</span> {t("projects_count_showing")}
            </p>
          )}
        </div>

        {/* Tipoloji Alt Filtreleri */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-12 font-mono text-xs tracking-wider border-b border-foreground/10">
          {typologyCategories.map((item) => (
            <button
              key={item.value}
              onClick={() => setTypologyFilter(item.value)}
              className={`transition-all whitespace-nowrap px-3.5 py-1.5 rounded-sm border cursor-pointer ${
                typologyFilter === item.value
                  ? "border-[var(--color-tekin-navy)] text-[var(--color-tekin-navy)] dark:border-white dark:text-white font-medium bg-foreground/[0.03]"
                  : "border-transparent text-foreground/50 hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {item.label}
            </button>
          ))}
          <span className="ml-auto text-foreground/40 font-mono text-xs self-center hidden sm:inline">
            {filteredProjects.length} / {projectsData.length} {t("projects_count_showing")}
          </span>
        </div>

        {/* Projeler Grid Listesi */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-foreground/20 rounded-sm">
            <h3 className="text-lg font-medium text-foreground mb-2">
              {t("projects_empty_title")}
            </h3>
            <p className="text-foreground/50 text-base font-light">
              {t("projects_empty_desc")}
            </p>
            <button
              onClick={() => {
                setTypologyFilter("TÜMÜ");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-mono tracking-widest uppercase text-[var(--color-tekin-navy)] dark:text-white underline underline-offset-4 cursor-pointer"
            >
              {t("projects_clear_filters")}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((item) => (
              <Link href={`/projeler/${item.slug}`} key={item.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  {/* Görsel Kartı */}
                  <div className="relative aspect-[4/5] bg-foreground/10 overflow-hidden mb-6 rounded-sm">
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Ada / Parsel & Detay (Hover) */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <div className="flex items-center justify-between text-white/90 font-mono text-xs mb-2">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider truncate mr-2">
                          <Layers className="w-3.5 h-3.5 shrink-0" /> {item.ada && item.ada !== "—" ? `${lang === "en" ? "Block" : "Ada"} ${item.ada} / ${lang === "en" ? "Parcel" : "Parsel"} ${item.parsel}` : item.title}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ruler className="w-3.5 h-3.5" /> {item.area}
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-white/30 mb-2" />
                      <span className="text-[11px] font-mono tracking-widest uppercase text-white/70 flex items-center gap-1">
                        {lang === "en" ? "View Details" : "Detayları İncele"} <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Proje Kapak Resmi */}
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Kategori Etiketi */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-black/60 text-white backdrop-blur-md rounded-sm">
                        {getTypologyLabel(item.typology, item.typologyName)}
                      </span>
                    </div>
                  </div>

                  {/* Proje Başlık ve Künye */}
                  <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-medium tracking-wide group-hover:text-[var(--color-tekin-gray)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/50 mt-1.5 font-light tracking-wide uppercase">
                      {getTypologyLabel(item.typology, item.typologyName)} • {item.location} • {item.year}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Sayfa Başına Dön (Scroll to Top) Floating Butonu */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-background/90 hover:bg-background border border-foreground/20 hover:border-foreground/50 shadow-xl backdrop-blur-md text-foreground transition-all duration-300 hover:scale-105 group cursor-pointer"
            aria-label={t("projects_scroll_top")}
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span className="text-[11px] font-mono tracking-widest uppercase font-medium">{t("projects_scroll_top")}</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
