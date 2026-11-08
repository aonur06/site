const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/projects.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Match the JSON array
const regex = /export const projectsData:\s*Project\[\]\s*=\s*(\[[\s\S]*?\]);/;
const match = fileContent.match(regex);

if (!match) {
  console.error("Could not find projectsData array");
  process.exit(1);
}

const projects = JSON.parse(match[1]);

const knownNames = {
  "kocalar-port": "Kocalar PORT",
  "skylife-esenboga": "SKYLIFE",
  "tekin-1402": "TEKİN 1402",
  "villa-projesi-1": "Tekin Villa",
  "villa-projesi-2": "Konsept Villa",
  "villa-projesi-3": "Yılmaz Villa",
  "proje-220-14teki-n": "TEKİN",
  "proje-ct-vi-lla": "CT Villa",
  "proje-demars": "Demars Konut",
  "proje-eras": "Eras Konut",
  "proje-force": "Force Grup",
  "proje-tekin-ys": "Tekin YS",
  "proje-y-ksek-kat": "Yüksek Katlı Konut",
  "proje-z-3": "Zemin + 3 Konut"
};

projects.forEach((p, idx) => {
  const ada = p.ada && p.ada !== "—" ? p.ada : "...";
  const parsel = p.parsel && p.parsel !== "—" ? p.parsel : "...";
  const name = knownNames[p.slug];

  let newTitle = "";
  if (name) {
    newTitle = `Ada ${ada} / Parsel ${parsel} (${name})`;
  } else {
    newTitle = `Ada ${ada} / Parsel ${parsel}`;
  }

  p.title = newTitle;
  console.log(`${idx + 1}. [${p.slug}] -> ${newTitle}`);
});

const updatedJson = JSON.stringify(projects, null, 2);
const updatedFileContent = fileContent.replace(regex, `export const projectsData: Project[] = ${updatedJson};`);

fs.writeFileSync(filePath, updatedFileContent, 'utf8');
console.log("\nSuccessfully updated projects.ts!");
