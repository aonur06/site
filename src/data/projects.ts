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
      "area": "14.500 m²",
      "year": "2024",
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
      "concept": "Modern kent yaşamının dinamizmini çağdaş cephe kurgusuyla buluşturan Kocalar PORT; geniş cam yüzeyler, dengeli konsol çıkmaları ve peyzajla bütünleşen zemin teraslarıyla sakinlerine prestijli bir yaşam deneyimi sunar.",
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
      "area": "22.800 m²",
      "year": "2025",
      "client": "Skylife Yapı",
      "coverImage": "/renders/skylife/skylife-01.jpg",
      "gallery": [
        "/renders/skylife/skylife-01.jpg",
        "/renders/skylife/skylife-02.jpg",
        "/renders/skylife/skylife-03.jpg",
        "/renders/skylife/skylife-04.jpg"
      ],
      "concept": "Havalimanı aksında yükselen SKYLIFE Esenboğa, aerodinamik çizgileri ve kesintisiz balkon hatlarıyla çağdaş havacılık estetiğinden ilham almıştır. Akıcı yatay bantlar yapının kütle ağırlığını hafifleterek modern bir silüet oluşturur.",
      "features": [
        "Hafifletilmiş Dinamik Balkon Hatları",
        "İklim Duyarlı Enerji Verimli Cam Sistemleri",
        "Geniş İç Avlu ve Yeşil Rekreasyon Alanları",
        "Akıllı Ev Altyapısı"
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
      "location": "Ankara",
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
      "concept": "Doğayla iç içe, modern ve yalın mimari hatlara sahip müstakil villa projesi. Geniş cam açıklıklar, korunaklı bahçe terasları ve akıcı mekan kurgusuyla sakinlerine yüksek konforlu ve mahremiyeti koruyan bir yaşam alanı sunar.",
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
      "location": "Ankara",
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
      "concept": "Yatay mimari kurgusu ve zengin malzeme dokusuyla dikkat çeken çağdaş villa projesi. Teraslar ve konsollarla zenginleştirilmiş kütle yerleşimi, iç ve dış mekan sınırlarını ortadan kaldırır.",
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
      "location": "Ankara",
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
      "concept": "Geleneksel malzeme sıcaklığını modern hatlarla yorumlayan nitelikli villa tasarımı. Bahçe odaklı yaşamı merkeze alan geniş açıklıklar ve peyzaj ilişkisiyle dingin bir atmosfer oluşturur.",
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
      "location": "Ankara",
      "ada": "1074",
      "parsel": "4",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-1074-4/1.jpg",
      "gallery": [
        "/renders/projeler/proje-1074-4/1.jpg",
        "/renders/projeler/proje-1074-4/2.jpg",
        "/renders/projeler/proje-1074-4/3.jpg",
        "/renders/projeler/proje-1074-4/4.jpg"
      ],
      "concept": "1074 Ada / 4 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "1580",
      "parsel": "9",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-1580-9/1.png",
      "gallery": [
        "/renders/projeler/proje-1580-9/1.png",
        "/renders/projeler/proje-1580-9/2.jpg",
        "/renders/projeler/proje-1580-9/3.png",
        "/renders/projeler/proje-1580-9/4.jpg",
        "/renders/projeler/proje-1580-9/5.jpg",
        "/renders/projeler/proje-1580-9/6.jpg"
      ],
      "concept": "1580 Ada / 9 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "190050",
      "parsel": "4",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-190050-4/1.jpg",
      "gallery": [
        "/renders/projeler/proje-190050-4/1.jpg",
        "/renders/projeler/proje-190050-4/2.jpg",
        "/renders/projeler/proje-190050-4/3.jpg",
        "/renders/projeler/proje-190050-4/4.jpg",
        "/renders/projeler/proje-190050-4/5.jpg"
      ],
      "concept": "190050 Ada / 4 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "1900888",
      "parsel": "4",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-1900888-4/1.jpg",
      "gallery": [
        "/renders/projeler/proje-1900888-4/1.jpg",
        "/renders/projeler/proje-1900888-4/2.jpg",
        "/renders/projeler/proje-1900888-4/3.jpg"
      ],
      "concept": "1900888 Ada / 4 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "190130",
      "parsel": "14",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-190130-14/1.jpg",
      "gallery": [
        "/renders/projeler/proje-190130-14/1.jpg",
        "/renders/projeler/proje-190130-14/2.jpg",
        "/renders/projeler/proje-190130-14/3.jpg"
      ],
      "concept": "190130 Ada / 14 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "190460 Ada / 6 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "190511 Ada / 1 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "190533",
      "parsel": "1",
      "area": "450 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-190533-1/1.jpg",
      "gallery": [
        "/renders/projeler/proje-190533-1/1.jpg",
        "/renders/projeler/proje-190533-1/2.jpg",
        "/renders/projeler/proje-190533-1/3.jpg",
        "/renders/projeler/proje-190533-1/4.jpg"
      ],
      "concept": "Modern taş ve ahşap dokuları bir araya getiren çağdaş müstakil villa tasarımı; geniş terasları, dengeli kütle oranları ve peyzajla bütünleşen bahçe kurgusuyla yüksek konforlu bir yaşam deneyimi sunar.",
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
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-190606-14/1.jpg",
      "gallery": [
        "/renders/projeler/proje-190606-14/1.jpg",
        "/renders/projeler/proje-190606-14/2.jpg",
        "/renders/projeler/proje-190606-14/3.jpg",
        "/renders/projeler/proje-190606-14/4.jpg",
        "/renders/projeler/proje-190606-14/5.jpg",
        "/renders/projeler/proje-190606-14/6.jpg"
      ],
      "concept": "190606 Ada / 14 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "191332",
      "parsel": "5",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-191332-5/1.jpg",
      "gallery": [
        "/renders/projeler/proje-191332-5/1.jpg",
        "/renders/projeler/proje-191332-5/2.jpg",
        "/renders/projeler/proje-191332-5/3.jpg",
        "/renders/projeler/proje-191332-5/4.jpg",
        "/renders/projeler/proje-191332-5/5.jpg"
      ],
      "concept": "191332 Ada / 5 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "220 Ada / 14 Parsel (TEKİN), modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "233",
      "parsel": "5",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-233-5/1.jpg",
      "gallery": [
        "/renders/projeler/proje-233-5/1.jpg",
        "/renders/projeler/proje-233-5/2.jpg",
        "/renders/projeler/proje-233-5/3.jpg",
        "/renders/projeler/proje-233-5/4.jpg"
      ],
      "concept": "233 Ada / 5 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "256",
      "parsel": "1",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-256-1/1.jpg",
      "gallery": [
        "/renders/projeler/proje-256-1/1.jpg",
        "/renders/projeler/proje-256-1/2.jpg",
        "/renders/projeler/proje-256-1/3.jpg",
        "/renders/projeler/proje-256-1/4.jpg"
      ],
      "concept": "256 Ada / 1 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "256",
      "parsel": "9",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-256-9/1.jpg",
      "gallery": [
        "/renders/projeler/proje-256-9/1.jpg",
        "/renders/projeler/proje-256-9/2.jpg",
        "/renders/projeler/proje-256-9/3.jpg"
      ],
      "concept": "256 Ada / 9 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "title": "Ada 5080 / Parsel 5",
      "type": "Konut Projesi",
      "category": "TAMAMLANANLAR",
      "typology": "konut",
      "typologyName": "Çok Katlı Konut & Rezidans",
      "location": "Ankara",
      "ada": "5080",
      "parsel": "5",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-5080-5/1.jpg",
      "gallery": [
        "/renders/projeler/proje-5080-5/1.jpg",
        "/renders/projeler/proje-5080-5/2.jpg",
        "/renders/projeler/proje-5080-5/3.jpg",
        "/renders/projeler/proje-5080-5/4.jpg"
      ],
      "concept": "5080 Ada / 5 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "5121",
      "parsel": "4",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
      "coverImage": "/renders/projeler/proje-5121-4/1.jpg",
      "gallery": [
        "/renders/projeler/proje-5121-4/1.jpg",
        "/renders/projeler/proje-5121-4/2.jpg",
        "/renders/projeler/proje-5121-4/3.jpg"
      ],
      "concept": "5121 Ada / 4 Parsel, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "Demars Konut Projesi, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
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
      "location": "Ankara",
      "ada": "—",
      "parsel": "—",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "Eras Konut Projesi, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
      "features": [
        "Modern Dış Cephe Karakteri",
        "Doğal Işık Alan Plan Şeması",
        "Yüksek Kalite Malzeme ve İşçilik",
        "Enerji Verimli Yalıtım Sistemleri"
      ]
    },
  {
      "id": "40",
      "slug": "proje-tekin-ys",
      "title": "TEKİN Prime",
      "type": "Konut Projesi",
      "category": "TAMAMLANANLAR",
      "typology": "konut",
      "typologyName": "Çok Katlı Konut & Rezidans",
      "location": "Ankara",
      "ada": "—",
      "parsel": "—",
      "area": "3.500 m²",
      "year": "2024",
      "client": "Tekin Mimarlık",
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
      "concept": "Tekin YS Konut Projesi, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.",
      "features": [
        "Modern Dış Cephe Karakteri",
        "Doğal Işık Alan Plan Şeması",
        "Yüksek Kalite Malzeme ve İşçilik",
        "Enerji Verimli Yalıtım Sistemleri"
      ]
    }
];
