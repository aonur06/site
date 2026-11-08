"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLanguage();

  const waText =
    lang === "en"
      ? "Hello, I am contacting you via Tekin Architecture website. We would like to consult about our project."
      : "Merhaba, Tekin Mimarlık web sitenizden ulaşıyorum. Projemiz hakkında görüşmek istiyoruz.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`bg-black/90 text-white dark:bg-white dark:text-black text-xs font-mono tracking-wider py-2 px-3.5 rounded-full shadow-lg transition-all duration-300 hidden sm:block ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        {t("whatsapp_tooltip")}
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/905318167909?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
