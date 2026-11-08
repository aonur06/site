import json
import re

with open(r"C:\Users\User\.gemini\antigravity\scratch\tekin-mimarlik-guncel\src\data\projects.ts", "r", encoding="utf-8") as f:
    content = f.read()

match = re.search(r"export const projectsData:\s*Project\[\]\s*=\s*(\[[\s\S]*?\]);", content)
if match:
    data = json.loads(match.group(1))
    print(f"Total projects: {len(data)}")
    for i, p in enumerate(data, 1):
        slug = p.get("slug")
        title = p.get("title")
        ada = p.get("ada")
        parsel = p.get("parsel")
        typology = p.get("typology")
        typologyName = p.get("typologyName")
        print(f"{i:2d}. slug: {slug:22s} | title: {title:30s} | ada: {ada:8s} | parsel: {parsel:8s} | typo: {typology}")
else:
    print("Could not parse json")
