import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

# Update Home page title to localized "Digital Human Rights"
home_titles = {
    "en": "Digital Human Rights",
    "ru": "Цифровые права человека",
    "nl": "Digitale mensenrechten",
    "es": "Derechos humanos digitales",
    "fr": "Droits de l'homme numériques",
    "de": "Digitale Menschenrechte",
    "pl": "Cyfrowe prawa człowieka"
}
data['pages']['home']['title'] = home_titles

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
