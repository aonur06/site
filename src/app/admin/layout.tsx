export const metadata = {
  title: "Yönetim Paneli | Tekin Mimarlık",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* İleride buraya Admin Sidebar (Sol Menü) eklenecek */}
      {children}
    </div>
  );
}
