import requests
import json

base_url = "https://www.dnd5eapi.co"
spells_url = f"{base_url}/api/spells"

response = requests.get(spells_url)
spells = response.json()["results"][:50]

detailed_spells = []

for spell in spells:
    detail = requests.get(f"{base_url}{spell['url']}").json()
    detailed_spells.append({
        "name": detail["name"],
        "level": detail["level"],
        "school": detail["school"]["name"],
        "casting_time": detail["casting_time"],
        "range": detail["range"],
        "components": detail.get("components", []),
        "duration": detail.get("duration", ""),
        "description": detail.get("desc", [])
    })

with open("spells.json", "w") as f:
    json.dump(detailed_spells, f, indent=2)

print("✅ Done: spells.json created.")
