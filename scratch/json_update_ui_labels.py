import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

new_labels = {
    "en": {
        "email": "research@hyperboloid.eu",
        "cities": "Amsterdam · Berlin · Lyon · Riga",
        "newsSubscription": "News Subscription",
        "getInTouch": "Get in Touch",
        "contactPoint": "Contact",
        "navigation": "Navigation"
    },
    "ru": {
        "email": "research@hyperboloid.eu",
        "cities": "Амстердам · Берлин · Лион · Рига",
        "newsSubscription": "Подписка на новости",
        "getInTouch": "Свяжитесь с нами",
        "contactPoint": "Контакт",
        "navigation": "Навигация"
    },
    "nl": {
        "email": "research@hyperboloid.eu",
        "cities": "Amsterdam · Berlijn · Lyon · Riga",
        "newsSubscription": "Nieuwsbrief abonnement",
        "getInTouch": "Neem contact op",
        "contactPoint": "Contact",
        "navigation": "Navigatie"
    },
    "es": {
        "email": "research@hyperboloid.eu",
        "cities": "Ámsterdam · Berlín · Lyon · Riga",
        "newsSubscription": "Suscripción de noticias",
        "getInTouch": "Ponte en contacto",
        "contactPoint": "Contacto",
        "navigation": "Navegación"
    },
    "fr": {
        "email": "research@hyperboloid.eu",
        "cities": "Amsterdam · Berlin · Lyon · Riga",
        "newsSubscription": "Abonnement aux nouvelles",
        "getInTouch": "Contactez-nous",
        "contactPoint": "Contact",
        "navigation": "Navigation"
    },
    "de": {
        "email": "research@hyperboloid.eu",
        "cities": "Amsterdam · Berlin · Lyon · Riga",
        "newsSubscription": "News-Abonnement",
        "getInTouch": "Kontaktiere uns",
        "contactPoint": "Kontakt",
        "navigation": "Navigation"
    },
    "pl": {
        "email": "research@hyperboloid.eu",
        "cities": "Amsterdam · Berlin · Lyon · Riga",
        "newsSubscription": "Subskrypcja wiadomości",
        "getInTouch": "Skontaktuj się z nami",
        "contactPoint": "Kontakt",
        "navigation": "Nawigacja"
    }
}

for lang in data['labels']:
    if lang in new_labels:
        data['labels'][lang].update(new_labels[lang])

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
