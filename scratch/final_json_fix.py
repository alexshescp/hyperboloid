import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

# 1. Update Hero Title (Labels)
hero_titles = {
    "en": "Digital Human Rights",
    "ru": "Цифровые права человека",
    "nl": "Digitale mensenrechten",
    "es": "Derechos humanos digitales",
    "fr": "Droits de l'homme numériques",
    "de": "Digitale Menschenrechte",
    "pl": "Cyfrowe prawa człowieka"
}
for lang in data['labels']:
    data['labels'][lang]['hero'] = hero_titles[lang]

# 2. Update Roadmap Hero Lead (Translations)
roadmap_leads = {
    "en": "The path to digital liberation is paved with precise technical steps.",
    "ru": "Путь к цифровому освобождению вымощен точными техническими шагами.",
    "nl": "De weg naar digitale bevrijding is geplaveid met precieze technische stappen.",
    "es": "El camino hacia la liberación digital está pavimentado con pasos técnicos precisos.",
    "fr": "Le chemin vers la libération numérique est pavé de mesures techniques précises.",
    "de": "Der Weg zur digitalen Befreiung ist mit präzisen technischen Schritten gepflastert.",
    "pl": "Droga do cyfrowego wyzwolenia jest wybrukowana precyzyjnymi krokami technicznymi."
}
data['pages']['roadmap']['heroLead'] = roadmap_leads

# 3. Restore Governance missing fields
data['pages']['governance']['orgCommittee'] = {
    "title": {
        "en": "Organizational Committee",
        "ru": "Организационный комитет",
        "nl": "Organisatiecomité",
        "es": "Comité organizador",
        "fr": "Comité d'organisation",
        "de": "Organisationskomitee",
        "pl": "Komitet organizacyjny"
    },
    "structure": [
        {
            "name": { "en": "The Board (Bestuur)", "ru": "Правление (Bestuur)", "nl": "Het Bestuur", "es": "La Junta (Bestuur)", "fr": "Le Conseil (Bestuur)", "de": "Der Vorstand (Bestuur)", "pl": "Zarząd (Bestuur)" },
            "desc": { "en": "Supreme governing body making key decisions and managing assets.", "ru": "Высший орган управления, принимающий ключевые решения.", "nl": "Hoogste bestuursorgaan dat de belangrijkste beslissingen neemt.", "es": "Órgano supremo de gobierno que toma decisiones clave.", "fr": "Organe suprême de direction prenant les décisions clés.", "de": "Oberstes Leitungsorgan, das wichtige Entscheidungen trifft.", "pl": "Najwyższy organ zarządzający podejmujący kluczowe decyzje." }
        },
        {
            "name": { "en": "Founders (Oprichters)", "ru": "Учредители (Oprichters)", "nl": "Oprichters", "es": "Fundadores (Oprichters)", "fr": "Fondateurs (Oprichters)", "de": "Gründer (Oprichters)", "pl": "Założyciele (Oprichters)" },
            "desc": { "en": "They step out after creation but may retain rights to appoint the board.", "ru": "Выходят из структуры после создания, сохраняя право назначения правления.", "nl": "Zij treden uit na oprichting maar kunnen het recht behouden om het bestuur te benoemen.", "es": "Se retiran tras la creación pero pueden conservar derechos de nombramiento.", "fr": "Ils se retirent après la création mais peuvent conserver des droits de nomination.", "de": "Sie scheiden nach der Gründung aus, behalten aber ggf. das Recht zur Vorstandsbestellung.", "pl": "Wychodzą ze struktury po utworzeniu, zachowując prawo do mianowania zarządu." }
        },
        {
            "name": { "en": "Management", "ru": "Менеджмент / Исполнительный директор", "nl": "Management", "es": "Gestión", "fr": "Direction", "de": "Management", "pl": "Zarządzanie" },
            "desc": { "en": "Operational leadership and execution of strategic goals.", "ru": "Оперативное управление и выполнение стратегических целей.", "nl": "Operationele leiding en uitvoering van strategische doelen.", "es": "Liderazgo operativo y ejecución de objetivos estratégicos.", "fr": "Direction opérationnelle et exécution des objectifs stratégiques.", "de": "Operative Führung und Umsetzung strategischer Ziele.", "pl": "Zarządzanie operacyjne i realizacja celów strategicznych." }
        }
    ]
}
data['pages']['governance']['reports'] = {
    "title": { "en": "Public Reports", "ru": "Публичные отчеты", "nl": "Publieke rapporten", "es": "Informes públicos", "fr": "Rapports publics", "de": "Öffentliche Berichte", "pl": "Raporty publiczne" },
    "items": [
        { "period": "Q3 2026", "url": "#" },
        { "period": "Q2 2026", "url": "#" }
    ]
}
data['pages']['governance']['sponsors'] = {
    "title": { "en": "For Sponsors", "ru": "Для спонсоров", "nl": "Voor sponsoren", "es": "Para patrocinadores", "fr": "Pour les sponsors", "de": "Für Sponsoren", "pl": "Dla sponsorów" },
    "lead": { "en": "Strategic support for institutional digital rights monitoring.", "ru": "Стратегическая поддержка институционального мониторинга цифровых прав.", "nl": "Стратегическая поддержка институционального мониторинга цифровых прав.", "es": "Apoyo estratégico para el monitoreo institucional de derechos digitales.", "fr": "Soutien stratégique au suivi institutionnel des droits numériques.", "de": "Strategische Unterstützung für das institutionelle Monitoring digitaler Rechte.", "pl": "Strategiczne wsparcie для институционального мониторинга прав цифровых." }
}

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
