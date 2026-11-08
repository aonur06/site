const fs = require('fs');
const path = require('path');

const desktopRenderDir = 'C:\\Users\\User\\Desktop\\render';
const projectPublicDir = 'C:\\Users\\User\\.gemini\\antigravity\\scratch\\tekin-mimarlik-guncel\\public\\renders\\projeler';
const projectsTsPath = 'C:\\Users\\User\\.gemini\\antigravity\\scratch\\tekin-mimarlik-guncel\\src\\data\\projects.ts';

if (!fs.existsSync(projectPublicDir)) {
  fs.mkdirSync(projectPublicDir, { recursive: true });
}

// Folders to skip (already added)
const skipFolders = [
  'tekin villa',
  'villa',
  'YILMAZ MANGAL',
  'skylife',
  '190877-3 TEKİN',
  '190877-3 TEKN'
];

// Existing base projects
const existingProjects = [
  {
    id: "1",
    slug: "kocalar-port",
    title: "Kocalar PORT",
    type: "Çok Katlı Konut & Rezidans",
    category: "TAMAMLANANLAR",
    typology: "konut",
    typologyName: "Çok Katlı Konut & Rezidans",
    location: "Ankara",
    ada: "190465",
    parsel: "2",
    area: "14.500 m²",
    year: "2024",
    client: "Kocalar İnşaat",
    coverImage: "/renders/vitrin-camlica/camlica-01.jpg",
    gallery: [
      "/renders/vitrin-camlica/camlica-01.jpg",
      "/renders/vitrin-camlica/camlica-02.jpg",
      "/renders/vitrin-camlica/camlica-03.jpg",
      "/renders/vitrin-camlica/camlica-04.jpg",
      "/renders/vitrin-camlica/camlica-05.jpg",
      "/renders/vitrin-camlica/camlica-06.jpg",
      "/renders/vitrin-camlica/camlica-07.jpg",
      "/renders/vitrin-camlica/camlica-08.jpg",
      "/renders/vitrin-camlica/camlica-09.jpg",
    ],
    concept: "Modern kent yaşamının dinamizmini çağdaş cephe kurgusuyla buluşturan Kocalar PORT; geniş cam yüzeyler, dengeli konsol çıkmaları ve peyzajla bütünleşen zemin teraslarıyla sakinlerine prestijli bir yaşam deneyimi sunar.",
    features: ["Panoramik Şehir Manzarası", "Doğal Taş & Kompozit Cephe Bütünlüğü", "Kapalı Otopark & Sosyal Donatı Entegrasyonu", "Güneş Kırıcı Ahşap Görünümlü Alüminyum Latalar"]
  },
  {
    id: "2",
    slug: "skylife-esenboga",
    title: "SKYLIFE Esenboğa",
    type: "Çok Katlı Konut & Rezidans",
    category: "DEVAM EDENLER",
    typology: "konut",
    typologyName: "Çok Katlı Konut & Rezidans",
    location: "Ankara / Esenboğa",
    ada: "190492",
    parsel: "11",
    area: "22.800 m²",
    year: "2025",
    client: "Skylife Yapı",
    coverImage: "/renders/skylife/skylife-01.jpg",
    gallery: [
      "/renders/skylife/skylife-01.jpg",
      "/renders/skylife/skylife-02.jpg",
      "/renders/skylife/skylife-03.jpg",
      "/renders/skylife/skylife-04.jpg",
    ],
    concept: "Havalimanı aksında yükselen SKYLIFE Esenboğa, aerodinamik çizgileri ve kesintisiz balkon hatlarıyla çağdaş havacılık estetiğinden ilham almıştır. Akıcı yatay bantlar yapının kütle ağırlığını hafifleterek modern bir silüet oluşturur.",
    features: ["Hafifletilmiş Dinamik Balkon Hatları", "İklim Duyarlı Enerji Verimli Cam Sistemleri", "Geniş İç Avlu ve Yeşil Rekreasyon Alanları", "Akıllı Ev Altyapısı"]
  },
  {
    id: "3",
    slug: "tekin-1402",
    title: "TEKİN 1402",
    type: "Çok Katlı Konut & Rezidans",
    category: "TAMAMLANANLAR",
    typology: "konut",
    typologyName: "Çok Katlı Konut & Rezidans",
    location: "Ankara",
    ada: "190877",
    parsel: "3",
    area: "8.200 m²",
    year: "2024",
    client: "Tekin Yatırım",
    coverImage: "/renders/tekin1402/tekin1402-01.jpg",
    gallery: [
      "/renders/tekin1402/tekin1402-01.jpg",
      "/renders/tekin1402/tekin1402-02.jpg",
      "/renders/tekin1402/tekin1402-03.jpg",
      "/renders/tekin1402/tekin1402-04.jpg",
    ],
    concept: "Brütalist sadelik ile sıcak malzeme paletinin kusursuz dengesi. TEKİN 1402, monolitik blok etkisini ahşap dokular ve gizli lineer aydınlatmalarla yumuşatarak sofistike bir mimari kimlik ortaya koyar.",
    features: ["Yüksek Tavanlı Ferah İç Hacimler", "Geniş Teras ve Bahçe Entegrasyonu", "Gizli Çatı ve Özel Detaylandırılmış Yağmur Drenajı", "Akustik ve Termal Yüksek Yalıtım Katmanları"]
  },
  {
    id: "4",
    slug: "villa-projesi-1",
    title: "Ada ... / Parsel ... (Villa 1)",
    type: "Müstakil Villa Projesi",
    category: "TAMAMLANANLAR",
    typology: "villa",
    typologyName: "Villa & Müstakil",
    location: "Ankara",
    ada: "—",
    parsel: "—",
    area: "450 m²",
    year: "2024",
    client: "Özel İşveren",
    coverImage: "/renders/villalar/tekin-villa/1.jpg",
    gallery: [
      "/renders/villalar/tekin-villa/1.jpg",
      "/renders/villalar/tekin-villa/2.jpg",
      "/renders/villalar/tekin-villa/3.jpg",
      "/renders/villalar/tekin-villa/4.jpg",
      "/renders/villalar/tekin-villa/5.jpg",
      "/renders/villalar/tekin-villa/6.jpg",
      "/renders/villalar/tekin-villa/7.jpg",
      "/renders/villalar/tekin-villa/8.jpg",
      "/renders/villalar/tekin-villa/9.jpg",
      "/renders/villalar/tekin-villa/10.jpg",
    ],
    concept: "Doğayla iç içe, modern ve yalın mimari hatlara sahip müstakil villa projesi. Geniş cam açıklıklar, korunaklı bahçe terasları ve akıcı mekan kurgusuyla sakinlerine yüksek konforlu ve mahremiyeti koruyan bir yaşam alanı sunar.",
    features: ["Geniş Bahçe ve Peyzaj Bütünlüğü", "Doğal Işık Alan Yüksek Tavanlı Galeri Boşluğu", "Güneş Kırıcı Ahşap ve Alüminyum Cephe Detayları", "Müstakil Kapalı / Açık Otopark Entegrasyonu"]
  },
  {
    id: "5",
    slug: "villa-projesi-2",
    title: "Ada ... / Parsel ... (Villa 2)",
    type: "Müstakil Villa Projesi",
    category: "DEVAM EDENLER",
    typology: "villa",
    typologyName: "Villa & Müstakil",
    location: "Ankara",
    ada: "—",
    parsel: "—",
    area: "520 m²",
    year: "2025",
    client: "Özel İşveren",
    coverImage: "/renders/villalar/konsept-villa/1.jpg",
    gallery: [
      "/renders/villalar/konsept-villa/1.jpg",
      "/renders/villalar/konsept-villa/2.jpg",
      "/renders/villalar/konsept-villa/3.jpg",
      "/renders/villalar/konsept-villa/4.jpg",
      "/renders/villalar/konsept-villa/5.jpg",
      "/renders/villalar/konsept-villa/6.jpg",
    ],
    concept: "Yatay mimari kurgusu ve zengin malzeme dokusuyla dikkat çeken çağdaş villa projesi. Teraslar ve konsollarla zenginleştirilmiş kütle yerleşimi, iç ve dış mekan sınırlarını ortadan kaldırır.",
    features: ["Modern Taş ve Ahşap Kompozit Doku Uyumu", "Geniş Veranda ve Dinlenme Terasları", "Enerji Verimli Yüksek Performanslı Cephe Camları", "Akıllı Ev ve Güvenlik Altyapısı"]
  },
  {
    id: "6",
    slug: "villa-projesi-3",
    title: "Ada ... / Parsel ... (Villa 3)",
    type: "Müstakil Villa Projesi",
    category: "TAMAMLANANLAR",
    typology: "villa",
    typologyName: "Villa & Müstakil",
    location: "Ankara",
    ada: "—",
    parsel: "—",
    area: "480 m²",
    year: "2024",
    client: "Özel İşveren",
    coverImage: "/renders/villalar/yilmaz-mangal/1.jpg",
    gallery: [
      "/renders/villalar/yilmaz-mangal/1.jpg",
      "/renders/villalar/yilmaz-mangal/2.jpg",
      "/renders/villalar/yilmaz-mangal/3.jpg",
      "/renders/villalar/yilmaz-mangal/4.jpg",
      "/renders/villalar/yilmaz-mangal/5.jpg",
    ],
    concept: "Geleneksel malzeme sıcaklığını modern hatlarla yorumlayan nitelikli villa tasarımı. Bahçe odaklı yaşamı merkeze alan geniş açıklıklar ve peyzaj ilişkisiyle dingin bir atmosfer oluşturur.",
    features: ["Doğal Doku Birlikteliği", "Geniş Bahçe Verandası ve Barbekü Alanı", "Akustik ve Isı Yalıtımlı Premium Detaylar", "Özel Tasarım İç Mimari Entegrasyonu"]
  }
];

const newProjects = [];
let nextId = 7;

const allDirs = fs.readdirSync(desktopRenderDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const dirName of allDirs) {
  const isSkip = skipFolders.some(s => s.toLowerCase() === dirName.toLowerCase());
  if (isSkip) continue;

  const fullDirPath = path.join(desktopRenderDir, dirName);
  const imageFiles = fs.readdirSync(fullDirPath)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  if (imageFiles.length === 0) continue;

  // Slug generation
  const slug = 'proje-' + dirName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const destSubDir = path.join(projectPublicDir, slug);
  if (!fs.existsSync(destSubDir)) {
    fs.mkdirSync(destSubDir, { recursive: true });
  }

  // Copy images
  const gallery = [];
  let imgIdx = 1;
  for (const imgFile of imageFiles) {
    let ext = path.extname(imgFile).toLowerCase();
    if (ext === '.jpeg') ext = '.jpg';
    const destFileName = `${imgIdx}${ext}`;
    const destFilePath = path.join(destSubDir, destFileName);
    fs.copyFileSync(path.join(fullDirPath, imgFile), destFilePath);
    gallery.push(`/renders/projeler/${slug}/${destFileName}`);
    imgIdx++;
  }

  // Parse Ada and Parsel if name matches e.g. "1074-4", "190460-6", "220-14TEKİN"
  let ada = "—";
  let parsel = "—";
  let title = dirName;
  let typology = "konut";
  let typologyName = "Çok Katlı Konut & Rezidans";
  let type = "Konut Projesi";

  // Check if matches numbers like "1074-4" or "190460-6"
  const adaParselMatch = dirName.match(/^(\d+)-(\d+)(.*)$/);
  if (adaParselMatch) {
    ada = adaParselMatch[1];
    parsel = adaParselMatch[2];
    title = `${ada} Ada / ${parsel} Parsel`;
    if (adaParselMatch[3].trim()) {
      title += ` (${adaParselMatch[3].trim()})`;
    }
  }

  // Specific typology overrides
  if (/villa/i.test(dirName)) {
    typology = "villa";
    typologyName = "Villa & Müstakil";
    type = "Müstakil Villa Projesi";
    if (ada === "—") title = dirName;
  } else if (dirName === "190511-1") {
    typology = "ic-mimari";
    typologyName = "İç Mimari & Dekorasyon";
    type = "İç Mimari & Tasarım";
  } else if (/yüksek kat/i.test(dirName) || /yuksek/i.test(dirName)) {
    title = "Yüksek Katlı Konut Projesi";
    type = "Çok Katlı Konut";
  } else if (/z\+3/i.test(dirName)) {
    title = "Zemin + 3 Kat Konut Projesi";
    type = "Konut Projesi";
  } else if (/demars/i.test(dirName)) {
    title = "Demars Konut Projesi";
  } else if (/eras/i.test(dirName)) {
    title = "Eras Konut Projesi";
  } else if (/force/i.test(dirName)) {
    title = "Force Grup Konut Projesi";
  } else if (/tekin ys/i.test(dirName)) {
    title = "Tekin YS Konut Projesi";
  }

  newProjects.push({
    id: String(nextId++),
    slug: slug,
    title: title,
    type: type,
    category: "TAMAMLANANLAR",
    typology: typology,
    typologyName: typologyName,
    location: "Ankara",
    ada: ada,
    parsel: parsel,
    area: "3.500 m²", // taslak
    year: "2024",      // taslak
    client: "Tekin Mimarlık",
    coverImage: gallery[0],
    gallery: gallery,
    concept: `${title}, modern cephe oranları ve fonksiyonel plan kurgusuyla çevre dokuya değer katan çağdaş bir mimari projedir. Estetik ve sağlam mühendislik çözümleri tek bir çatı altında buluşturulmuştur.`,
    features: [
      "Modern Dış Cephe Karakteri",
      "Doğal Işık Alan Plan Şeması",
      "Yüksek Kalite Malzeme ve İşçilik",
      "Enerji Verimli Yalıtım Sistemleri"
    ]
  });
}

const allProjects = [...existingProjects, ...newProjects];

const fileContent = `export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  category: "TAMAMLANANLAR" | "DEVAM EDENLER";
  typology: "villa" | "konut" | "ticari" | "ic-mimari";
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

export const projectsData: Project[] = ${JSON.stringify(allProjects, null, 2)};
`;

fs.writeFileSync(projectsTsPath, fileContent, 'utf-8');

console.log(`Successfully imported ${newProjects.length} new projects!`);
console.log(`Total projects in portfolio now: ${allProjects.length}`);
