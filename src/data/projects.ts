export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  category: "TAMAMLANANLAR" | "DEVAM EDENLER";
  typology: "villa" | "konut";
  typologyName: string;
  location: string;
  ada: string;
  parsel: string;
  area: string;
  year: string;
  client?: string;
  coverImage: string;
  gallery: string[];
  concept: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    "id": "40",
    "slug": "proje-tekin-ys",
    "title": "TEKİN Prime",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Yavuz Selim",
    "ada": "—",
    "parsel": "—",
    "area": "8.800 m²",
    "year": "2024",
    "client": "Tekin İnşaat",
    "coverImage": "/renders/projeler/proje-tekin-ys/1.jpg",
    "gallery": [
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
      "/renders/projeler/proje-tekin-ys/11.jpg"
    ],
    "concept": "Tekin İnşaat öz sermayesiyle hayata geçirilen TEKİN Prime; modern cephe oranları, geniş köşe cam bantları, prestijli giriş tagı ve 11 katlı dinamik mimari kurgusuyla bölgenin ikonik yapılarından biri olarak tasarlanmıştır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "23",
    "slug": "proje-220-14teki-n",
    "title": "Miray Bulvar",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "220",
    "parsel": "14",
    "area": "5.514 m²",
    "year": "2024",
    "client": "Tekin İnşaat / Miray Yapı",
    "coverImage": "/renders/projeler/proje-220-14teki-n/1.jpg",
    "gallery": [
      "/renders/projeler/proje-220-14teki-n/1.jpg",
      "/renders/projeler/proje-220-14teki-n/2.jpg",
      "/renders/projeler/proje-220-14teki-n/3.jpg",
      "/renders/projeler/proje-220-14teki-n/4.jpg",
      "/renders/projeler/proje-220-14teki-n/5.jpg",
      "/renders/projeler/proje-220-14teki-n/6.jpg",
      "/renders/projeler/proje-220-14teki-n/7.jpg"
    ],
    "concept": "220 Ada 14 Parsel üzerinde yükselen Miray Bulvar; 72 konut birimi, 7 katlı modern blok kurgusu ve 5.514 m² toplam inşaat alanıyla ferah yaşam alanları ve yüksek mühendislik kalitesini buluşturmaktadır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "29",
    "slug": "proje-5080-5",
    "title": "TEKİN İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "5080",
    "parsel": "5",
    "area": "1.818 m²",
    "year": "2023",
    "client": "Tekin İnşaat",
    "coverImage": "/renders/projeler/proje-5080-5/1.jpg",
    "gallery": [
      "/renders/projeler/proje-5080-5/1.jpg",
      "/renders/projeler/proje-5080-5/2.jpg",
      "/renders/projeler/proje-5080-5/3.jpg",
      "/renders/projeler/proje-5080-5/4.jpg"
    ],
    "concept": "Tekin İnşaat güvencesiyle 5080 Ada 5 Parsel'de projelendirilen yapı; 1.818 m² kapalı inşaat alanı, B+Z+4 (6 katlı) mimari formu, kontrast fuga detayları ve çağdaş balkon hatlarıyla estetik bir kentsel duruş sunar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "1",
    "slug": "kocalar-port",
    "title": "Kocalar PORT",
    "type": "Çok Katlı Konut & Rezidans",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "190465",
    "parsel": "2",
    "area": "9.365 m²",
    "year": "2023",
    "client": "Kocalar İnşaat",
    "coverImage": "/renders/vitrin-camlica/camlica-01.jpg",
    "gallery": [
      "/renders/vitrin-camlica/camlica-01.jpg",
      "/renders/vitrin-camlica/camlica-02.jpg",
      "/renders/vitrin-camlica/camlica-03.jpg",
      "/renders/vitrin-camlica/camlica-04.jpg",
      "/renders/vitrin-camlica/camlica-05.jpg",
      "/renders/vitrin-camlica/camlica-06.jpg",
      "/renders/vitrin-camlica/camlica-07.jpg",
      "/renders/vitrin-camlica/camlica-08.jpg",
      "/renders/vitrin-camlica/camlica-09.jpg"
    ],
    "concept": "190465 Ada 2 Parsel'de yükselen Kocalar PORT; A ve B bloktan oluşan 9.365 m² toplam inşaat alanı, 2B+Z+10 (13 katlı) görkemli kule yapısı ve modern ticari donatılarıyla prestijli bir karma yaşam merkezi oluşturmaktadır.",
    "features": [
      "Panoramik Şehir Manzarası",
      "Doğal Taş & Kompozit Cephe Bütünlüğü",
      "Kapalı Otopark & Sosyal Donatı Entegrasyonu",
      "Güneş Kırıcı Ahşap Görünümlü Alüminyum Latalar"
    ]
  },
  {
    "id": "2",
    "slug": "skylife-esenboga",
    "title": "SKYLIFE",
    "type": "Çok Katlı Konut & Rezidans",
    "category": "DEVAM EDENLER",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Esenboğa",
    "ada": "190492",
    "parsel": "11",
    "area": "15.736 m²",
    "year": "2025",
    "client": "Skylife Yapı",
    "coverImage": "/renders/skylife/skylife-01.jpg",
    "gallery": [
      "/renders/skylife/skylife-01.jpg",
      "/renders/skylife/skylife-02.jpg",
      "/renders/skylife/skylife-03.jpg",
      "/renders/skylife/skylife-04.jpg"
    ],
    "concept": "Esenboğa Havalimanı aksında 190492 Ada 11 Parsel'de inşa edilen SKYLIFE; 86 bağımsız bölüm, 15.736 m² blok alanı (22.800 m² toplam parsel inşaatı), fore kazıklı derin temel sistemi ve 13 katlı aerodinamik mimarisiyle geleceğin rezidans standardını belirler.",
    "features": [
      "Hafifletilmiş Dinamik Balkon Hatları",
      "İklim Duyarlı Enerji Verimli Cam Sistemleri",
      "Geniş İç Avlu ve Yeşil Rekreasyon Alanları",
      "Akıllı Ev Altyapısı"
    ]
  },
  {
    "id": "41",
    "slug": "proje-190134-6",
    "title": "Çubukçu İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "190134",
    "parsel": "6",
    "area": "7.039 m²",
    "year": "2025",
    "client": "Çubukçu İnşaat",
    "coverImage": "/renders/projeler/proje-190134-6/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190134-6/1.jpg",
      "/renders/projeler/proje-190134-6/2.jpg",
      "/renders/projeler/proje-190134-6/3.jpg",
      "/renders/projeler/proje-190134-6/4.jpg",
      "/renders/projeler/proje-190134-6/5.jpg",
      "/renders/projeler/proje-190134-6/6.jpg",
      "/renders/projeler/proje-190134-6/7.jpg",
      "/renders/projeler/proje-190134-6/8.jpg"
    ],
    "concept": "190134 Ada 6 Parsel'de yükselen Çubukçu İnşaat projesi; 45 bağımsız bölüm, 7.039 m² inşaat alanı ve 2B+Z+5 (8 kat) mimari planlamasıyla fonksiyonel mekan kurgusu ve modern dış cephe karakterini bir arada sunmaktadır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "4",
    "slug": "villa-projesi-1",
    "title": "Çubuk Konsept Villa I",
    "type": "Müstakil Villa Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "villa",
    "typologyName": "Villa & Müstakil",
    "location": "Ankara / Çubuk",
    "ada": "—",
    "parsel": "—",
    "area": "450 m²",
    "year": "2024",
    "client": "Özel İşveren",
    "coverImage": "/renders/villalar/tekin-villa/1.jpg",
    "gallery": [
      "/renders/villalar/tekin-villa/1.jpg",
      "/renders/villalar/tekin-villa/2.jpg",
      "/renders/villalar/tekin-villa/3.jpg",
      "/renders/villalar/tekin-villa/4.jpg",
      "/renders/villalar/tekin-villa/5.jpg",
      "/renders/villalar/tekin-villa/6.jpg",
      "/renders/villalar/tekin-villa/7.jpg",
      "/renders/villalar/tekin-villa/8.jpg",
      "/renders/villalar/tekin-villa/9.jpg",
      "/renders/villalar/tekin-villa/10.jpg"
    ],
    "concept": "Doğayla iç içe, modern ve yalın hatlara sahip müstakil villa projesi. Geniş cam açıklıklar, korunaklı bahçe verandası ve çift katlı galeri boşluğuyla yüksek konforlu ve mahremiyeti önceleyen bir yaşam sunar.",
    "features": [
      "Geniş Bahçe ve Peyzaj Bütünlüğü",
      "Doğal Işık Alan Yüksek Tavanlı Galeri Boşluğu",
      "Güneş Kırıcı Ahşap ve Alüminyum Cephe Detayları",
      "Müstakil Kapalı / Açık Otopark Entegrasyonu"
    ]
  },
  {
    "id": "5",
    "slug": "villa-projesi-2",
    "title": "Çubuk Konsept Villa III",
    "type": "Müstakil Villa Projesi",
    "category": "DEVAM EDENLER",
    "typology": "villa",
    "typologyName": "Villa & Müstakil",
    "location": "Ankara / Çubuk",
    "ada": "—",
    "parsel": "—",
    "area": "520 m²",
    "year": "2025",
    "client": "Özel İşveren",
    "coverImage": "/renders/villalar/konsept-villa/1.jpg",
    "gallery": [
      "/renders/villalar/konsept-villa/1.jpg",
      "/renders/villalar/konsept-villa/2.jpg",
      "/renders/villalar/konsept-villa/3.jpg",
      "/renders/villalar/konsept-villa/4.jpg",
      "/renders/villalar/konsept-villa/5.jpg",
      "/renders/villalar/konsept-villa/6.jpg"
    ],
    "concept": "Yatay mimari kurgusu ve zengin malzeme dokusuyla dikkat çeken çağdaş villa projesi. Teraslar ve konsollarla zenginleştirilmiş 520 m² kapalı alanı, iç ve dış mekan sınırlarını kusursuzca harmanlar.",
    "features": [
      "Modern Taş ve Ahşap Kompozit Doku Uyumu",
      "Geniş Veranda ve Dinlenme Terasları",
      "Enerji Verimli Yüksek Performanslı Cephe Camları",
      "Akıllı Ev ve Güvenlik Altyapısı"
    ]
  },
  {
    "id": "6",
    "slug": "villa-projesi-3",
    "title": "Çubuk Konsept Villa II",
    "type": "Müstakil Villa Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "villa",
    "typologyName": "Villa & Müstakil",
    "location": "Ankara / Çubuk",
    "ada": "—",
    "parsel": "—",
    "area": "480 m²",
    "year": "2024",
    "client": "Özel İşveren",
    "coverImage": "/renders/villalar/yilmaz-mangal/1.jpg",
    "gallery": [
      "/renders/villalar/yilmaz-mangal/1.jpg",
      "/renders/villalar/yilmaz-mangal/2.jpg",
      "/renders/villalar/yilmaz-mangal/3.jpg",
      "/renders/villalar/yilmaz-mangal/4.jpg",
      "/renders/villalar/yilmaz-mangal/5.jpg"
    ],
    "concept": "Geleneksel malzeme sıcaklığını modern çizgilerle harmanlayan nitelikli villa tasarımı. 480 m² kullanım alanı, peyzajla bütünleşen zemin terasları ve müstakil yaşam ayrıcalığı sağlar.",
    "features": [
      "Doğal Doku Birlikteliği",
      "Geniş Bahçe Verandası ve Barbekü Alanı",
      "Akustik ve Isı Yalıtımlı Premium Detaylar",
      "Özel Tasarım İç Mimari Entegrasyonu"
    ]
  },
  {
    "id": "7",
    "slug": "proje-1074-4",
    "title": "Ersöz İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Cumhuriyet Mah.",
    "ada": "1074",
    "parsel": "4",
    "area": "968 m²",
    "year": "2023",
    "client": "Ersöz İnşaat",
    "coverImage": "/renders/projeler/proje-1074-4/1.jpg",
    "gallery": [
      "/renders/projeler/proje-1074-4/1.jpg",
      "/renders/projeler/proje-1074-4/2.jpg",
      "/renders/projeler/proje-1074-4/3.jpg",
      "/renders/projeler/proje-1074-4/4.jpg"
    ],
    "concept": "Cumhuriyet Mahallesi 1074 Ada 4 Parsel'de yer alan Ersöz İnşaat konut projesi; 968 m² inşaat alanı, B+Z+3 (5 kat) ergonomik kat kurgusu ve butik apartman konseptiyle kaliteli bir yaşam alanı sunar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "11",
    "slug": "proje-1580-9",
    "title": "Ahenk İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Akyurt",
    "ada": "1580",
    "parsel": "9",
    "area": "3.110 m²",
    "year": "2023",
    "client": "Ahenk İnşaat",
    "coverImage": "/renders/projeler/proje-1580-9/1.png",
    "gallery": [
      "/renders/projeler/proje-1580-9/1.png",
      "/renders/projeler/proje-1580-9/2.jpg",
      "/renders/projeler/proje-1580-9/3.png",
      "/renders/projeler/proje-1580-9/4.jpg",
      "/renders/projeler/proje-1580-9/5.jpg",
      "/renders/projeler/proje-1580-9/6.jpg"
    ],
    "concept": "Akyurt Saracalar Mahallesi 1580 Ada 9 Parsel üzerinde inşa edilen Ahenk İnşaat projesi; 3.110 m² toplam kapalı inşaat alanı, Z+5 (6 katlı) mimari formu ve modern balkon cephe oranlarıyla bölgeye değer katmaktadır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "12",
    "slug": "proje-190050-4",
    "title": "Cemre Konutları",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Dumlupınar Mah.",
    "ada": "190050",
    "parsel": "4",
    "area": "2.707 m²",
    "year": "2023",
    "client": "Cem Demirkan Adi Ortaklığı",
    "coverImage": "/renders/projeler/proje-190050-4/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190050-4/1.jpg",
      "/renders/projeler/proje-190050-4/2.jpg",
      "/renders/projeler/proje-190050-4/3.jpg",
      "/renders/projeler/proje-190050-4/4.jpg",
      "/renders/projeler/proje-190050-4/5.jpg"
    ],
    "concept": "Dumlupınar Mahallesi 190050 Ada 4 Parsel'de projelendirilen Cemre Ticaret ve Ofis Kompleksi; 40 bağımsız bölüm, 2.707 m² inşaat alanı ve B+Z+5 (7 kat) modern cephe kurgusuyla karma ticari ve konut ihtiyacını karşılar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "13",
    "slug": "proje-1900888-4",
    "title": "Çubuk Barbaros I",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Barbaros Mah.",
    "ada": "190088",
    "parsel": "4",
    "area": "1.143 m²",
    "year": "2023",
    "client": "Tekin Mimarlık",
    "coverImage": "/renders/projeler/proje-1900888-4/1.jpg",
    "gallery": [
      "/renders/projeler/proje-1900888-4/1.jpg",
      "/renders/projeler/proje-1900888-4/2.jpg",
      "/renders/projeler/proje-1900888-4/3.jpg"
    ],
    "concept": "Barbaros Mahallesi Kurbantepe Caddesi 190088 Ada 4 Parsel üzerinde tasarlanan yapı; 1.143 m² inşaat alanı, B+Z+4 (6 katlı) dengeli kütle tasarımı ve verimli plan kurgusuyla çağdaş bir konut projesidir.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "14",
    "slug": "proje-190130-14",
    "title": "BG Design",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Atatürk Mah.",
    "ada": "190130",
    "parsel": "14",
    "area": "3.180 m²",
    "year": "2022",
    "client": "BG Design",
    "coverImage": "/renders/projeler/proje-190130-14/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190130-14/1.jpg",
      "/renders/projeler/proje-190130-14/2.jpg",
      "/renders/projeler/proje-190130-14/3.jpg"
    ],
    "concept": "Atatürk Mahallesi 190130 Ada 14 Parsel'de yer alan BG Design projesi; 1.054 m² arsa üzerinde 2B+Z+4 (7 kat) kurgusu, 3.180 m² kapalı alanı ve dinamik cephe hareketleriyle öne çıkan bir konut yapısıdır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "15",
    "slug": "proje-190460-6",
    "title": "Nova CAMPUS",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "190460",
    "parsel": "6",
    "area": "11.708 m²",
    "year": "2024",
    "client": "Nova Yapı",
    "coverImage": "/renders/projeler/proje-190460-6/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190460-6/1.jpg",
      "/renders/projeler/proje-190460-6/2.jpg",
      "/renders/projeler/proje-190460-6/3.jpg",
      "/renders/projeler/proje-190460-6/4.jpg",
      "/renders/projeler/proje-190460-6/5.jpg",
      "/renders/projeler/proje-190460-6/6.jpg",
      "/renders/projeler/proje-190460-6/7.jpg",
      "/renders/projeler/proje-190460-6/8.jpg",
      "/renders/projeler/proje-190460-6/9.jpg",
      "/renders/projeler/proje-190460-6/10.jpg",
      "/renders/projeler/proje-190460-6/11.jpg",
      "/renders/projeler/proje-190460-6/12.jpg",
      "/renders/projeler/proje-190460-6/13.jpg",
      "/renders/projeler/proje-190460-6/14.jpg",
      "/renders/projeler/proje-190460-6/15.jpg"
    ],
    "concept": "190460 Ada 6 Parsel'de projelendirilen Nova CAMPUS; 11.708 m² inşaat alanı, 3B+Z+9 (13 kat) anıtsal ölçeği ve çağdaş kampüs-rezidans mimarisiyle modern kentsel yaşamı üst seviyeye taşır.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "17",
    "slug": "proje-190511-1",
    "title": "Elmas Konutları",
    "type": "Çok Katlı Konut & Rezidans",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "190511",
    "parsel": "1",
    "area": "9.269 m²",
    "year": "2022",
    "client": "Elmas İnşaat",
    "coverImage": "/renders/projeler/proje-190511-1/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190511-1/1.jpg",
      "/renders/projeler/proje-190511-1/2.jpg",
      "/renders/projeler/proje-190511-1/3.jpg",
      "/renders/projeler/proje-190511-1/9.jpg",
      "/renders/projeler/proje-190511-1/10.jpg",
      "/renders/projeler/proje-190511-1/11.jpg",
      "/renders/projeler/proje-190511-1/12.jpg",
      "/renders/projeler/proje-190511-1/13.jpg",
      "/renders/projeler/proje-190511-1/14.jpg",
      "/renders/projeler/proje-190511-1/15.jpg",
      "/renders/projeler/proje-190511-1/16.jpg",
      "/renders/projeler/proje-190511-1/17.jpg",
      "/renders/projeler/proje-190511-1/19.jpg",
      "/renders/projeler/proje-190511-1/20.jpg",
      "/renders/projeler/proje-190511-1/21.jpg",
      "/renders/projeler/proje-190511-1/22.jpg",
      "/renders/projeler/proje-190511-1/23.jpg",
      "/renders/projeler/proje-190511-1/24.jpg",
      "/renders/projeler/proje-190511-1/25.jpg",
      "/renders/projeler/proje-190511-1/26.jpg",
      "/renders/projeler/proje-190511-1/27.jpg"
    ],
    "concept": "190511 Ada 1 Parsel'de yer alan Elmas Konutları; A ve B blok toplamında 9.269 m² inşaat alanı, B+Z+9 (11 kat) mimari yüksekliği ve estetik konsol balkonlarıyla göz alıcı bir silüet çizer.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "18",
    "slug": "proje-190533-1",
    "title": "Çubuk Konsept Villa IV",
    "type": "Müstakil Villa Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "villa",
    "typologyName": "Villa & Müstakil",
    "location": "Ankara / Çubuk",
    "ada": "190533",
    "parsel": "1",
    "area": "450 m²",
    "year": "2025",
    "client": "Özel İşveren",
    "coverImage": "/renders/projeler/proje-190533-1/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190533-1/1.jpg",
      "/renders/projeler/proje-190533-1/2.jpg",
      "/renders/projeler/proje-190533-1/3.jpg",
      "/renders/projeler/proje-190533-1/4.jpg"
    ],
    "concept": "190533 Ada 1 Parsel'de ruhsatlandırılan özel villa projesi; 2 katlı müstakil dubleks mimarisi, 450 m² inşaat alanı, geniş bahçe peyzajı ve lüks detaylarıyla seçkin bir villa yaşamı sunar.",
    "features": [
      "Modern Taş & Kompozit Cephe Detayları",
      "Doğal Işık Alan Geniş Cam Yüzeyler",
      "Geniş Giriş Sundurması & Kapalı Otopark",
      "Peyzaj ve Bahçe Entegrasyonu"
    ]
  },
  {
    "id": "19",
    "slug": "proje-190606-14",
    "title": "MSR İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "190606",
    "parsel": "14",
    "area": "8.598 m²",
    "year": "2021",
    "client": "MSR İnşaat",
    "coverImage": "/renders/projeler/proje-190606-14/1.jpg",
    "gallery": [
      "/renders/projeler/proje-190606-14/1.jpg",
      "/renders/projeler/proje-190606-14/2.jpg",
      "/renders/projeler/proje-190606-14/3.jpg",
      "/renders/projeler/proje-190606-14/4.jpg",
      "/renders/projeler/proje-190606-14/5.jpg",
      "/renders/projeler/proje-190606-14/6.jpg"
    ],
    "concept": "190606 Ada 14 Parsel'de inşa edilen MSR İnşaat projesi; 8.598 m² inşaat alanı, bodrum + zemin + 9 normal kat (11 katlı) statik yapısı ve ferah iç planlarıyla modern rezidans standartlarını karşılar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "22",
    "slug": "proje-191332-5",
    "title": "Saygıdeğer İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Çubuk",
    "ada": "191332",
    "parsel": "5",
    "area": "518 m²",
    "year": "2023",
    "client": "Saygıdeğer İnşaat",
    "coverImage": "/renders/projeler/proje-191332-5/1.jpg",
    "gallery": [
      "/renders/projeler/proje-191332-5/1.jpg",
      "/renders/projeler/proje-191332-5/2.jpg",
      "/renders/projeler/proje-191332-5/3.jpg",
      "/renders/projeler/proje-191332-5/4.jpg",
      "/renders/projeler/proje-191332-5/5.jpg"
    ],
    "concept": "191332 Ada 5 Parsel'de projelendirilen Saygıdeğer İnşaat konutu; 518 m² inşaat alanı, B+Z+1 (3 katlı) sıcak ve sakin butik yapısıyla fonksiyonel bir mahalle dokusu sunar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "24",
    "slug": "proje-233-5",
    "title": "Esenboğa Konutları",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Esenboğa",
    "ada": "233",
    "parsel": "5",
    "area": "848 m²",
    "year": "2024",
    "client": "Tekin Mimarlık",
    "coverImage": "/renders/projeler/proje-233-5/1.jpg",
    "gallery": [
      "/renders/projeler/proje-233-5/1.jpg",
      "/renders/projeler/proje-233-5/2.jpg",
      "/renders/projeler/proje-233-5/3.jpg",
      "/renders/projeler/proje-233-5/4.jpg"
    ],
    "concept": "Esenboğa 233 Ada 5 Parsel üzerinde ruhsatlandırılan yapı; 9 konut birimi, 848 m² inşaat alanı ve 4 katlı zarif kütlesiyle modern ve samimi bir yaşam çevresi oluşturur.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "26",
    "slug": "proje-256-1",
    "title": "Çubuk Merkez",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Yıldırım Beyazıt Mah.",
    "ada": "256",
    "parsel": "1",
    "area": "3.728 m²",
    "year": "2023",
    "client": "Ferhat Tuğluca / Mustafa Ünal",
    "coverImage": "/renders/projeler/proje-256-1/1.jpg",
    "gallery": [
      "/renders/projeler/proje-256-1/1.jpg",
      "/renders/projeler/proje-256-1/2.jpg",
      "/renders/projeler/proje-256-1/3.jpg",
      "/renders/projeler/proje-256-1/4.jpg"
    ],
    "concept": "Yıldırım Beyazıt Mahallesi 256 Ada 1 Parsel'de hayata geçirilen Çubuk Merkez projesi; 47 bağımsız bölüm, 3.728 m² toplam inşaat alanı ve B+Z+3 (5 kat) mimarisiyle kentin merkezinde canlı bir yaşam alanı sunar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "27",
    "slug": "proje-256-9",
    "title": "Çubuk Merkez II",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Yıldırım Beyazıt Mah.",
    "ada": "256",
    "parsel": "9",
    "area": "1.652 m²",
    "year": "2022",
    "client": "Mustafa Ünal (Ünallar Emlak)",
    "coverImage": "/renders/projeler/proje-256-9/1.jpg",
    "gallery": [
      "/renders/projeler/proje-256-9/1.jpg",
      "/renders/projeler/proje-256-9/2.jpg",
      "/renders/projeler/proje-256-9/3.jpg"
    ],
    "concept": "Yıldırım Beyazıt Mahallesi 256 Ada 9 Parsel üzerinde yükselen Çubuk Merkez II; 16 konut birimi, 1.652 m² inşaat alanı ve 5 katlı çağdaş apartman kurgusuyla nitelikli konut ihtiyacını karşılar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "32",
    "slug": "proje-5121-4",
    "title": "TPY İnşaat",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Çubuk",
    "ada": "5121",
    "parsel": "4",
    "area": "1.570 m²",
    "year": "2024",
    "client": "TPY İnşaat",
    "coverImage": "/renders/projeler/proje-5121-4/1.jpg",
    "gallery": [
      "/renders/projeler/proje-5121-4/1.jpg",
      "/renders/projeler/proje-5121-4/2.jpg",
      "/renders/projeler/proje-5121-4/3.jpg"
    ],
    "concept": "5121 Ada 4 Parsel üzerinde projelendirilen TPY İnşaat yapısı; 12 daire, 1.570 m² inşaat alanı ve 5 katlı dengeli cephe oranlarıyla modern kentsel dönüşümün nitelikli örneklerinden biridir.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "37",
    "slug": "proje-demars",
    "title": "DEMARS Konutları",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara",
    "ada": "—",
    "parsel": "—",
    "area": "16.500 m²",
    "year": "2024",
    "client": "Demars Yapı",
    "coverImage": "/renders/projeler/proje-demars/1.jpg",
    "gallery": [
      "/renders/projeler/proje-demars/1.jpg",
      "/renders/projeler/proje-demars/2.jpg",
      "/renders/projeler/proje-demars/3.jpg",
      "/renders/projeler/proje-demars/4.jpg",
      "/renders/projeler/proje-demars/5.jpg",
      "/renders/projeler/proje-demars/6.jpg",
      "/renders/projeler/proje-demars/7.jpg",
      "/renders/projeler/proje-demars/8.jpg",
      "/renders/projeler/proje-demars/9.jpg",
      "/renders/projeler/proje-demars/10.jpg",
      "/renders/projeler/proje-demars/11.jpg",
      "/renders/projeler/proje-demars/12.jpg",
      "/renders/projeler/proje-demars/13.jpg"
    ],
    "concept": "İki adet 12 katlı rezidans kulesi ve geniş ticari baza bloğundan oluşan DEMARS Konutları; 16.500 m² kapalı inşaat alanı, açık-kapalı otoparkları ve zengin peyzaj düzenlemesiyle prestijli bir yaşam kompleksi sunar.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  },
  {
    "id": "38",
    "slug": "proje-eras",
    "title": "ERAS Bulvar",
    "type": "Konut Projesi",
    "category": "TAMAMLANANLAR",
    "typology": "konut",
    "typologyName": "Çok Katlı Konut & Rezidans",
    "location": "Ankara / Esenboğa Bulvarı",
    "ada": "—",
    "parsel": "—",
    "area": "9.800 m²",
    "year": "2024",
    "client": "Eras Yapı",
    "coverImage": "/renders/projeler/proje-eras/1.jpg",
    "gallery": [
      "/renders/projeler/proje-eras/1.jpg",
      "/renders/projeler/proje-eras/2.jpg",
      "/renders/projeler/proje-eras/3.jpg",
      "/renders/projeler/proje-eras/4.jpg",
      "/renders/projeler/proje-eras/5.jpg",
      "/renders/projeler/proje-eras/6.jpg",
      "/renders/projeler/proje-eras/7.jpg",
      "/renders/projeler/proje-eras/8.jpg",
      "/renders/projeler/proje-eras/9.jpg",
      "/renders/projeler/proje-eras/10.jpg",
      "/renders/projeler/proje-eras/11.jpg",
      "/renders/projeler/proje-eras/12.jpg",
      "/renders/projeler/proje-eras/13.jpg",
      "/renders/projeler/proje-eras/14.jpg"
    ],
    "concept": "Esenboğa Bulvar aksında yükselen ERAS Bulvar; zemin katta caddeye cepheli 6 adet mağaza, üzerinde yükselen 10 katlı modern konut kulesi ve 9.800 m² toplam inşaat alanıyla karma bulvar mimarisinin seçkin bir örneğidir.",
    "features": [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  }
];
