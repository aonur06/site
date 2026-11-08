"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Müstakil Villa",
    adaParsel: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title =
      lang === "en"
        ? "Contact & Studio Location | Tekin Architecture"
        : "İletişim & Ofis Konumu | Tekin Mimarlık";
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp için mesaj metnini hazırla
    const messageLines =
      lang === "en"
        ? [
            `*Tekin Architecture Project Inquiry*`,
            `━━━━━━━━━━━━━━━━━━`,
            `👤 *Name:* ${formData.name}`,
            `📞 *Phone:* ${formData.phone}`,
            `🏛️ *Project Type:* ${formData.projectType}`,
            formData.adaParsel ? `📍 *Block / Parcel / Location:* ${formData.adaParsel}` : "",
            formData.message ? `📝 *Notes:* ${formData.message}` : "",
            `━━━━━━━━━━━━━━━━━━`,
            `I would like to receive an architectural consultation and preliminary quote.`,
          ].filter(Boolean)
        : [
            `*Tekin Mimarlık Proje Talebi*`,
            `━━━━━━━━━━━━━━━━━━`,
            `👤 *İsim:* ${formData.name}`,
            `📞 *Telefon:* ${formData.phone}`,
            `🏛️ *Proje Türü:* ${formData.projectType}`,
            formData.adaParsel ? `📍 *Ada / Parsel / Konum:* ${formData.adaParsel}` : "",
            formData.message ? `📝 *Not:* ${formData.message}` : "",
            `━━━━━━━━━━━━━━━━━━`,
            `Web siteniz üzerinden teklif ve randevu almak istiyorum.`,
          ].filter(Boolean);

    const fullMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/905318167909?text=${fullMessage}`;

    setSubmitted(true);

    // WhatsApp'a yönlendir
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-28">
      {/* 1. HERO BÖLÜMÜ */}
      <section className="container mx-auto px-6 max-w-7xl pt-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-foreground/50 block mb-3">
            {t("contact_tag")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {t("contact_title_part1")} <span className="font-light text-[var(--color-tekin-gray)]">{t("contact_title_highlight")}</span>
          </h1>
          <p className="text-foreground/70 font-light text-lg leading-relaxed">
            {t("contact_subtitle")}
          </p>
        </motion.div>
      </section>

      {/* 2. İLETİŞİM KARTLARI (4 KART) */}
      <section className="container mx-auto px-6 max-w-7xl pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Adres Kartı */}
          <div className="p-6 rounded-sm border border-foreground/10 bg-foreground/[0.015] hover:border-foreground/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-tekin-navy)] text-white dark:bg-white dark:text-black flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-2">{t("contact_card_address_title")}</h2>
              <p className="text-sm font-medium leading-relaxed whitespace-pre-line">
                {t("contact_card_address_lines")}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tekin+Mimarl%C4%B1k+%C3%87ubuk+Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--color-tekin-navy)] dark:text-white hover:underline underline-offset-4 cursor-pointer"
            >
              <span>{t("contact_card_address_action")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Telefon Kartı */}
          <div className="p-6 rounded-sm border border-foreground/10 bg-foreground/[0.015] hover:border-foreground/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-5">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-2">{t("contact_card_phone_title")}</h2>
              <p className="text-lg font-semibold tracking-wide">
                {t("contact_card_phone_num")}
              </p>
              <p className="text-xs font-light text-foreground/60 mt-1">
                {t("contact_card_phone_desc")}
              </p>
            </div>
            <a
              href="tel:+905318167909"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 font-semibold cursor-pointer"
            >
              <span>{t("contact_card_phone_action")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Kartı */}
          <div className="p-6 rounded-sm border border-foreground/10 bg-foreground/[0.015] hover:border-foreground/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-2">{t("contact_card_chat_title")}</h2>
              <p className="text-sm font-medium leading-relaxed">
                {t("contact_card_chat_desc")}
              </p>
            </div>
            <a
              href={
                lang === "en"
                  ? "https://wa.me/905318167909?text=Hello,%20I%20am%20contacting%20you%20from%20the%20Tekin%20Architecture%20website.%20I%20would%20like%20to%20consult%20about%20a%20project."
                  : "https://wa.me/905318167909?text=Merhaba,%20Tekin%20Mimarl%C4%B1k%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projemiz%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 font-semibold"
            >
              <span>{t("contact_card_chat_action")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* E-Posta & Saatler Kartı */}
          <div className="p-6 rounded-sm border border-foreground/10 bg-foreground/[0.015] hover:border-foreground/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[var(--color-tekin-gray)] text-white flex items-center justify-center mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-2">{t("contact_card_email_title")}</h2>
              <p className="text-sm font-medium truncate mb-2">
                tekinmimarlik6@gmail.com
              </p>
              <div className="flex flex-col gap-1 text-xs text-foreground/60 font-light mt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-foreground/40 shrink-0" />
                  <span>{t("contact_card_hours_weekdays")}</span>
                </div>
                <div className="pl-5">
                  <span>{t("contact_card_hours_saturday")}</span>
                </div>
                <div className="pl-5 text-foreground/40">
                  <span>{t("contact_card_hours_sunday")}</span>
                </div>
              </div>
            </div>
            <a
              href="mailto:tekinmimarlik6@gmail.com"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--color-tekin-navy)] dark:text-white hover:underline underline-offset-4"
            >
              <span>{t("contact_card_email_action")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. PROJE TALEP FORMU VE HARİTA (YAN YANA) */}
      <section className="container mx-auto px-6 max-w-7xl pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sol Kolon: Proje Ön Bilgi Formu */}
          <div className="lg:col-span-6 bg-background border border-foreground/10 p-8 md:p-10 rounded-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-foreground/50 block mb-2">
              {t("contact_form_tag")}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {t("contact_form_title")}
            </h2>
            <p className="text-sm text-foreground/70 font-light leading-relaxed mb-8">
              {t("contact_form_desc")}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-sm text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                  {t("contact_form_success_title")}
                </h3>
                <p className="text-sm text-foreground/70 font-light mb-4">
                  {t("contact_form_success_desc")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-wider underline text-foreground/60 hover:text-foreground cursor-pointer"
                >
                  {t("contact_form_new_btn")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-foreground/60 mb-2">
                    {t("contact_form_name_label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/15 rounded-sm text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-foreground/60 mb-2">
                    {t("contact_form_phone_label")}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/15 rounded-sm text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-foreground/60 mb-2">
                    {t("contact_form_type_label")}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/15 rounded-sm text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors"
                  >
                    <option value={lang === "en" ? "Detached Villa Project" : "Müstakil Villa"}>{t("contact_form_opt_villa")}</option>
                    <option value={lang === "en" ? "Multi-Story Residential / Residence" : "Çok Katlı Konut & Rezidans"}>{t("contact_form_opt_residence")}</option>
                    <option value={lang === "en" ? "Interior Architecture & Decoration" : "İç Mimari & Dekorasyon"}>{t("contact_form_opt_interior")}</option>
                    <option value={lang === "en" ? "Commercial Landmark / Retail / Center" : "Ticari & Karma Yapı"}>{t("contact_form_opt_commercial")}</option>
                    <option value={lang === "en" ? "Zoning & Municipal Permit Consultancy" : "İmar & Ruhsat Danışmanlığı"}>{t("contact_form_opt_consulting")}</option>
                    <option value={lang === "en" ? "Other" : "Diğer"}>{t("contact_form_opt_other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-foreground/60 mb-2">
                    {t("contact_form_adaparsel_label")} <span className="text-foreground/40">{t("contact_form_adaparsel_optional")}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.adaParsel}
                    onChange={(e) => setFormData({ ...formData, adaParsel: e.target.value })}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/15 rounded-sm text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-foreground/60 mb-2">
                    {t("contact_form_message_label")}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-foreground/[0.02] border border-foreground/15 rounded-sm text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-[var(--color-tekin-navy)] hover:bg-[var(--color-tekin-navy)]/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 py-4 px-6 rounded-sm font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-3 transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  {t("contact_form_submit_btn")}
                </button>
              </form>
            )}
          </div>

          {/* Sağ Kolon: Google Maps & Ofis Ziyaret Bilgisi */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="p-8 bg-[var(--color-tekin-navy)] text-white rounded-sm mb-6">
                <span className="text-xs uppercase tracking-[0.3em] font-mono text-white/50 block mb-2">
                  {t("contact_invite_tag")}
                </span>
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {t("contact_invite_title")}
                </h3>
                <p className="text-sm font-light text-white/80 leading-relaxed mb-6">
                  {t("contact_invite_desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:05318167909"
                    className="bg-white text-[var(--color-tekin-navy)] px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-center hover:bg-white/90 transition-colors"
                  >
                    {t("contact_invite_btn_call")}
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tekin+Mimarl%C4%B1k+%C3%87ubuk+Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/30 text-white px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-center hover:border-white transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {t("contact_invite_btn_map")}
                  </a>
                </div>
              </div>

              {/* Canlı Google Harita */}
              <div className="rounded-sm overflow-hidden border border-foreground/10 h-[400px] w-full bg-foreground/5 shadow-md">
                <iframe
                  title={t("contact_map_iframe_title")}
                  src="https://maps.google.com/maps?q=Tekin+Mimarlık+Çubuk+Ankara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
