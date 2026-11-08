"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Admin paneline giriş başarılı! (Veritabanı bağlantısı bekleniyor)");
    // router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-foreground/5 p-10 border border-[var(--color-tekin-gray)]/10 shadow-2xl rounded-sm"
      >
        <div className="flex flex-col items-center mb-10">
          <img src="/logo.png" alt="Tekin Mimarlık Logo" className="h-32 w-auto object-contain mb-6" />
          <div className="flex flex-col items-center">
             <span className="text-3xl font-bold tracking-[0.2em] text-[var(--color-tekin-navy)] dark:text-white leading-none">TEKİN</span>
             <span className="text-xs tracking-[0.5em] text-[var(--color-tekin-gray)] font-bold mt-2 pl-1 uppercase leading-none">MİMARLIK</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/40 mt-6 font-medium">Bireysel Yönetim Paneli</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--color-tekin-gray)] font-bold">Kullanıcı E-Posta</label>
            <input type="email" placeholder="ornek@tekinmimarlik.com" className="bg-background border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] focus:ring-1 focus:ring-[var(--color-tekin-navy)] transition-all" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--color-tekin-gray)] font-bold">Güvenlik Şifresi</label>
            <input type="password" placeholder="••••••••" className="bg-background border border-foreground/10 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-tekin-navy)] focus:ring-1 focus:ring-[var(--color-tekin-navy)] transition-all" required />
          </div>
          
          <button type="submit" className="mt-6 bg-[var(--color-tekin-navy)] dark:bg-white text-white dark:text-black py-4 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity">
            GÜVENLİ GİRİŞ YAP
          </button>
        </form>
        
        <div className="mt-8 text-center border-t border-foreground/5 pt-6">
           <p className="text-[10px] text-foreground/30 uppercase tracking-widest">Altyapı v1.0.0</p>
        </div>
      </motion.div>
    </div>
  );
}
