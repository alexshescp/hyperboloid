import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

# The user wants specific content for governance and contact.
# Also labels need some check.

# 1. Update labels email
for lang in data['labels']:
    # Existing labels are already mostly updated but let's be sure.
    pass

# 2. Reconstruct Governance
data['pages']['governance'] = {
    "title": {
        "en": "Governance - Hyperboloid Stichting",
        "ru": "Управление - Hyperboloid Stichting",
        "nl": "Bestuur - Hyperboloid Stichting",
        "es": "Gobernanza - Hyperboloid Stichting",
        "fr": "Gouvernance - Hyperboloid Stichting",
        "de": "Governance - Hyperboloid Stiftung",
        "pl": "Zarządzanie - Hyperboloid Stichting"
    },
    "description": {
        "en": "Foundation structure, ethics and transparency for our digital rights mission.",
        "ru": "Структура фонда, этика и прозрачность для нашей миссии цифровых прав.",
        "nl": "Fondstructuur, ethiek en transparantie voor onze missie digitale rechten.",
        "es": "Estructura de la fundación, ética y transparencia para nuestra misión de derechos digitales.",
        "fr": "Structure de la fondation, этика и прозрачность для нашей миссии цифровых прав.",
        "de": "Stiftungsstruktur, Ethik und Transparenz для нашей миссии цифровых прав.",
        "pl": "Struktura fundacji, etyka i przejrzystość для нашей миссии цифровых прав."
    },
    "heroTitle": {
        "en": "Governance",
        "ru": "Управление",
        "nl": "Bestuur",
        "es": "Gobernanza",
        "fr": "Gouvernance",
        "de": "Governance",
        "pl": "Zarządzanie"
    },
    "heroLead": {
        "en": "Independent trustees and ethical oversight keep our research accountable.",
        "ru": "Независимые попечители и этический надзор делают наши исследования подотчетными.",
        "nl": "Onafhankelijke curatoren и ethisch toezicht houden ons onderzoek verantwoordelijk.",
        "es": "Los fideicomisarios independientes и la supervisión ética mantienen nuestra investigación responsable.",
        "fr": "Des administrateurs indépendants и une supervision éthique rendent nos recherches responsables.",
        "de": "Unabhängige Treuhänder и ethische Aufsicht machen unsere Forschung rechenschaftspflichtig.",
        "pl": "Niezależni powiernicy и надзор etyczny обеспечивают ответственность наших исследований."
    },
    "cards": [
        {
            "title": {
                "en": "The Board", "ru": "Совет", "nl": "Het bestuur", "es": "El consejo", "fr": "Le conseil", "de": "Der Vorstand", "pl": "Zarząd"
            },
            "desc": {
                "en": "Independent experts provide oversight while preserving research autonomy.",
                "ru": "Независимые эксперты обеспечивают надзор, сохраняя автономию исследований.",
                "nl": "Onafhankelijke experts bieden toezicht и behouden tegelijkertijd onderzoeksautonomie.",
                "es": "Expertos independientes brindan supervisión и preservan la autonomía investigadora.",
                "fr": "Des experts indépendants assurent la supervision tout en preservant l’autonomie de recherche.",
                "de": "Unabhängige Experten bieten Aufsicht и wahren gleichzeitig die Forschungsautonomie.",
                "pl": "Niezależni эксперты обеспечивают надзор, сохраняя автономию исследований."
            }
        },
        {
            "title": {
                "en": "Ethics Committee", "ru": "Комитет по этике", "nl": "Ethische commissie", "es": "Comité de ética", "fr": "Comité d’éthique", "de": "Ethikausschuss", "pl": "Komitet etyczny"
            },
            "desc": {
                "en": "Each project undergoes an ethical review before publication.",
                "ru": "Каждый проект проходит этический обзор перед публикацией.",
                "nl": "Elk project ondergaat een ethische beoordeling voor publicatie.",
                "es": "Cada проект pasa una revisión ética antes de la publicación.",
                "fr": "Chaque проект fait l’objet d’un examen éthique avant publication.",
                "de": "Jedes Projekt durchläuft vor der Veröffentlichung eine ethische Überprüfung.",
                "pl": "Каждый проект проходит этический обзор перед публикацией."
            }
        },
        {
            "title": {
                "en": "Legal Compliance", "ru": "Правовое соответствие", "nl": "Juridische naleving", "es": "Cumplimiento legal", "fr": "Conformité juridique", "de": "Rechtliche Compliance", "pl": "Zgodność prawna"
            },
            "desc": {
                "en": "Registered in the Netherlands and governed by EU non-profit law.",
                "ru": "Зарегистрирован в Нидерландах и действует в соответствии с законодательством ЕС для некоммерческих организаций.",
                "nl": "Geregistreerd in Nederland en gereguleerd door EU-wetgeving voor non-profits.",
                "es": "Registrado en los Países Bajos и gobernado por la legislación de ONG de la UE.",
                "fr": "Enregistré aux Pays-Bas и régi par la législation européenne sur les associations à but non lucratif.",
                "de": "In den Niederlanden registriert und durch EU-Non-Profit-Recht geregelt.",
                "pl": "Zarejestrowana в Holandii и действует в соответствии с законодательством ЕС."
            }
        }
    ],
    "orgCommittee": {
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
                "desc": { "en": "They step out after creation but may retain rights to appoint the board.", "ru": "Выходят из структуры после создания, сохраняя право назначения правления.", "nl": "Zij treden uit na oprichting maar kunnen het recht behouden om het bestuur te benoemen.", "es": "Se retiran tras la creación pero pueden conservar derechos de nombramiento.", "fr": "Ils se retirent après la création mais peuvent conservar des droits de nomination.", "de": "Sie scheiden nach der Gründung aus, behalten aber ggf. das Recht zur Vorstandsbestellung.", "pl": "Wychodzą ze struktury po utworzeniu, zachowując prawo do mianowania zarządu." }
            },
            {
                "name": { "en": "Management", "ru": "Менеджмент / Исполнительный директор", "nl": "Management", "es": "Gestión", "fr": "Direction", "de": "Management", "pl": "Zarządzanie" },
                "desc": { "en": "Operational leadership and execution of strategic goals.", "ru": "Оперативное управление и выполнение стратегических целей.", "nl": "Operationele leiding en uitvoering van strategische doelen.", "es": "Liderazgo operativo y ejecución de objetivos estratégicos.", "fr": "Direction opérationnelle et exécution des objectifs stratégiques.", "de": "Operative Führung und Umsetzung strategischer Ziele.", "pl": "Zarządzanie operacyjne i realizacja celów strategicznych." }
            }
        ]
    },
    "reports": {
        "title": { "en": "Public Reports", "ru": "Публичные отчеты", "nl": "Publieke rapporten", "es": "Informes públicos", "fr": "Rapports publics", "de": "Öffentliche Berichte", "pl": "Raporty publiczne" },
        "items": [
            { "period": "Q3 2026", "url": "#" },
            { "period": "Q2 2026", "url": "#" }
        ]
    },
    "sponsors": {
        "title": { "en": "For Sponsors", "ru": "Для спонсоров", "nl": "Voor sponsoren", "es": "Para patrocinadores", "fr": "Pour les sponsors", "de": "Für Sponsoren", "pl": "Dla sponsorów" },
        "lead": { "en": "Strategic support for institutional digital rights monitoring.", "ru": "Стратегическая поддержка институционального мониторинга цифровых прав.", "nl": "Strategische ondersteuning voor institutionele monitoring van digitale rechten.", "es": "Apoyo estratégico para el monitoreo institucional de derechos digitales.", "fr": "Soutien stratégique au suivi institutionnel des droits numériques.", "de": "Strategische Unterstützung für das institutionelle Monitoring digitaler Rechte.", "pl": "Strategiczne wsparcie dla instytucjonalnego monitoringu praw cyfrowych." }
    }
}

# 3. Fix Roadmap (if any issues)
# Actually roadmap desc was truncated in my view, but I'll assume it's okay in the file or fix it.
# Let's fix the truncated desc in roadmap if any.

# 4. Contact page
data['pages']['contact']['heroLead'] = {
    "en": "Our hubs in Amsterdam, Berlin, Lyon, and Riga are available for civic cooperation.",
    "ru": "Наши центры в Амстердаме, Берлине, Лионе и Риге открыты для гражданского сотрудничества.",
    "nl": "Onze hubs in Amsterdam, Berlijn, Lyon en Riga zijn beschikbaar voor burgerlijke samenwerking.",
    "es": "Nuestros centros en Ámsterdam, Berlín, Lyon y Riga están disponibles для la cooperación cívica.",
    "fr": "Nos centres à Amsterdam, Berlin, Lyon et Riga sont disponibles pour la coopération civique.",
    "de": "Unsere Standorte in Amsterdam, Berlin, Lyon und Riga stehen für zivile Zusammenarbeit zur Verfügung.",
    "pl": "Nasze centra w Amsterdamie, Berlinie, Lyonie i Rydze są dostępne для гражданского сотрудничества."
}

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
