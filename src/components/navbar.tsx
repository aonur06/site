"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa değiştiğinde mobil menüyü otomatik kapat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Escape tuşuna basıldığında menüyü kapat
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleNavLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "/hakkimizda" },
    { name: t("nav_projects"), href: "/projeler" },
    { name: t("nav_contact"), href: "/iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-foreground/10 py-2 sm:py-2.5 shadow-sm"
          : "bg-transparent py-2.5 sm:py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        {/* LOGO KISMI */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 sm:gap-4 group cursor-pointer shrink-0"
        >
          <img 
            src="/logo.png" 
            alt="Tekin Mimarlık Logo" 
            className="h-11 sm:h-14 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="flex flex-col justify-center">
            <span className="text-xl sm:text-2xl md:text-[34px] font-bold tracking-[0.12em] md:tracking-[0.15em] text-foreground group-hover:text-[var(--color-tekin-gray)] transition-colors duration-300 leading-none">
              TEKİN
            </span>
            <span className="text-[10px] sm:text-xs md:text-base tracking-[0.4em] md:tracking-[0.5em] font-bold text-[var(--color-tekin-gray)] pl-0.5 mt-1 leading-none uppercase">
              MİMARLIK
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVİGASYON (BÜYÜK EKRANLAR) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(link.href, e)}
              className="text-[13px] uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-foreground transition-colors overflow-hidden relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="w-[1px] h-4 bg-foreground/20 mx-1"></div>

          {/* DİL DEĞİŞTİRİCİ (TR / EN) */}
          <div className="flex items-center text-[11px] font-mono tracking-wider border border-foreground/15 rounded-full p-0.5 bg-foreground/[0.03]">
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === "tr"
                  ? "bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black font-semibold shadow-xs"
                  : "text-foreground/50 hover:text-foreground"
              }`}
              aria-label="Türkçe"
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black font-semibold shadow-xs"
                  : "text-foreground/50 hover:text-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          
          {/* TEMA DEĞİŞTİRİCİ BUTON (AY/GÜNEŞ) */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors cursor-pointer"
              aria-label="Temayı Değiştir"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground/80 hover:text-[var(--color-tekin-gray)] transition-colors" strokeWidth={1.5} />
              ) : (
                <Moon className="w-5 h-5 text-foreground/80 hover:text-[var(--color-tekin-gray)] transition-colors" strokeWidth={1.5} />
              )}
            </button>
          )}
        </nav>

        {/* MOBİL SAĞ KONTROLLER (DİL + TEMA + MENÜ) */}
        <div className="md:hidden flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Mobil Dil Seçici */}
          <div className="flex items-center text-[10px] font-mono tracking-wider border border-foreground/15 rounded-full p-0.5 bg-foreground/[0.03]">
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === "tr"
                  ? "bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black font-semibold shadow-xs"
                  : "text-foreground/50"
              }`}
              aria-label="Türkçe"
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black font-semibold shadow-xs"
                  : "text-foreground/50"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Mobil Tema Butonu */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground/80 hover:bg-foreground/5 active:bg-foreground/10 transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Temayı Değiştir"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" strokeWidth={1.75} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={1.75} />
              )}
            </button>
          )}

          {/* Mobil Hamburger / Kapat Butonu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-foreground hover:bg-foreground/5 active:bg-foreground/10 transition-colors cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6 text-foreground" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* MOBİL NAVİGASYON AÇILIR MENÜ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full bg-background/98 backdrop-blur-xl border-b border-foreground/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(link.href, e)}
                    className={`text-base uppercase tracking-[0.2em] py-2.5 transition-colors border-b border-foreground/5 flex items-center justify-between ${
                      isActive
                        ? "font-semibold text-foreground"
                        : "font-light text-foreground/70 hover:text-foreground active:text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-tekin-navy)] dark:bg-white" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+905318167909"
                  className="text-center py-3.5 bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black rounded-full font-mono text-xs uppercase tracking-widest font-semibold shadow-md active:scale-98 transition-all"
                >
                  {lang === "en" ? "Call Now: +90 531 816 79 09" : "Hemen Ara: 0531 816 79 09"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
