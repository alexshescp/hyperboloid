import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

# Add Project Lifespan to labels
lifespan_trans = {
    "en": "Project Lifespan",
    "ru": "Жизненный цикл проекта",
    "nl": "Levensduur van het project",
    "es": "Vida útil del proyecto",
    "fr": "Durée de vie du projet",
    "de": "Lebensdauer des Projekts",
    "pl": "Cykl życia projektu"
}

for lang in data['labels']:
    data['labels'][lang]['projectLifespan'] = lifespan_trans[lang]

# Ensure roadmap heroTitle is what user wants (ROADMAP)
for lang in data['pages']['roadmap']['heroTitle']:
    data['pages']['roadmap']['heroTitle'][lang] = "ROADMAP"

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
