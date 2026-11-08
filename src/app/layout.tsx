import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tekinmimarlik.com"),
  title: {
    default: "Tekin Mimarlık | Mimari Tasarım & Proje Ofisi",
    template: "%s | Tekin Mimarlık",
  },
  description: "Cemal Tekin öncülüğünde ve deneyimli mimari tasarım kadrosuyla 35 yıllık tecrübeyle lüks villa, çok katlı konut ve rezidans projeleri üreten köklü mimarlık ofisi. Çubuk / Ankara.",
  keywords: [
    "Tekin Mimarlık",
    "Tekin Mimarlık Çubuk",
    "Tekin Mimarlık Ankara",
    "Cemal Tekin",
    "Çubuk Mimarlık Ofisi",
    "Ankara Mimarlık Ofisi",
    "Mimari Tasarım",
    "Konut Projeleri",
    "Villa Tasarımı"
  ],
  authors: [{ name: "Tekin Mimarlık" }],
  creator: "Tekin Mimarlık",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tekinmimarlik.com",
    title: "Tekin Mimarlık | Mimari Tasarım & Proje Ofisi",
    description: "Cemal Tekin öncülüğünde ve deneyimli mimari tasarım kadrosuyla 35 yıllık tecrübeyle lüks villa, çok katlı konut ve rezidans projeleri üreten köklü mimarlık ofisi.",
    siteName: "Tekin Mimarlık",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
