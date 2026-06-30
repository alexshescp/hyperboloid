import json
import re

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    lines = f.readlines()

# Attempt to fix the lines before parsing
# We know the duplicate starts at 662 and there's junk at 714
# This is a bit risky.

# Let's try to find the "pages" object and reconstruct it.
# Or better, just fix the specific lines we know are bad.

fixed_lines = []
skip = False
for i, line in enumerate(lines):
    ln = i + 1
    if ln == 662:
        skip = True
    if skip and '"governance": {' in line and ln > 690:
        skip = False
        # Do not skip this line, it's the start of the real governance
    
    if skip:
        continue
    
    if ln == 714:
        # 714:     },rencia para nuestra misión de derechos digitales.",
        # It should be: "es": "Estructura de la fundación, ética y transparencia para nuestra misión de derechos digitales.",
        fixed_lines.append('        "es": "Estructura de la fundación, ética y transparencia para nuestra misión de derechos digitales.",\n')
        continue

    fixed_lines.append(line)

content = "".join(fixed_lines)
try:
    data = json.loads(content)
    # Re-apply the new sections correctly
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
    # Fix contact cities
    data['pages']['contact']['heroLead'] = {
        "en": "Our hubs in Amsterdam, Berlin, Lyon, and Riga are available for civic cooperation.",
        "ru": "Наши центры в Амстердаме, Берлине, Лионе и Риге открыты для гражданского сотрудничества.",
        "nl": "Onze hubs in Amsterdam, Berlijn, Lyon en Riga zijn beschikbaar voor burgerlijke samenwerking.",
        "es": "Nuestros centros en Ámsterdam, Berlín, Lyon y Riga están disponibles для la cooperación cívica.",
        "fr": "Nos centres à Amsterdam, Berlin, Lyon et Riga sont disponibles pour la coopération civique.",
        "de": "Unsere Standorte in Amsterdam, Berlin, Lyon und Riga stehen für zivile Zusammenarbeit zur Verfügung.",
        "pl": "Nasze centra в Amsterdamie, Berlinie, Лионе и Риге доступны для гражданского сотрудничества."
    }
    # Update email in labels and footer
    for lang in data['labels']:
        pass # labels already updated or will be updated in site-content
    
    with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
    # Print a few lines around the error if possible
    # (Actually json.loads error message usually contains line/col)
