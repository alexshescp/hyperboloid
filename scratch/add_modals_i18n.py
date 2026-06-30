import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

# Add modal content to UI labels
for lang in data['labels']:
    data['labels'][lang]['modals'] = {
        "subscribe": {
            "title": {
                "en": "Subscription",
                "ru": "Подписка",
                "nl": "Abonnement",
                "es": "Suscripción",
                "fr": "Abonnement",
                "de": "Abonnement",
                "pl": "Subskrypcja"
            },
            "message": {
                "en": "Currently, all our news and updates are published on our LinkedIn page. We recommend following us there for real-time information.",
                "ru": "В данный момент все наши новости и обновления публикуются на нашей странице в LinkedIn. Рекомендуем подписаться на нас там для получения оперативной информации.",
                "nl": "Momenteel worden al onze nieuwsberichten en updates gepubliceerd op onze LinkedIn-pagina. We raden u aan ons daar te volgen voor actuele informatie.",
                "es": "Actualmente, todas nuestras noticias y actualizaciones se publican en nuestra página de LinkedIn. Le recomendamos que nos siga allí para obtener información en tiempo real.",
                "fr": "Actuellement, toutes nos actualités et mises à jour sont publiées sur notre page LinkedIn. Nous vous recommandons de nous y suivre pour des informations en temps réel.",
                "de": "Derzeit werden alle unsere Neuigkeiten und Updates auf unserer LinkedIn-Seite veröffentlicht. Wir empfehlen Ihnen, uns dort zu folgen, um Echtzeit-Informationen zu erhalten.",
                "pl": "Obecnie wszystkie nasze wiadomości i aktualizacje są publikowane na naszej stronie LinkedIn. Zalecamy śledzenie nas tam, aby otrzymywać informacje w czasie rzeczywistym."
            },
            "cta": {
                "en": "Follow on LinkedIn",
                "ru": "Подписаться в LinkedIn",
                "nl": "Volg op LinkedIn",
                "es": "Seguir en LinkedIn",
                "fr": "Suivre sur LinkedIn",
                "de": "Auf LinkedIn folgen",
                "pl": "Obserwuj na LinkedIn"
            }
        },
        "feedback": {
            "title": { "en": "Feedback", "ru": "Обратная связь", "nl": "Feedback", "es": "Comentarios", "fr": "Commentaires", "de": "Feedback", "pl": "Informacja zwrotna" },
            "submit": { "en": "Submit", "ru": "Отправить", "nl": "Verzenden", "es": "Enviar", "fr": "Envoyer", "de": "Absenden", "pl": "Wyślij" }
        },
        "sos": {
            "title": { "en": "Urgent Incident Report", "ru": "Срочное сообщение об инциденте", "nl": "Dringende incidentmelding", "es": "Informe urgente de incidente", "fr": "Signalement urgent d'incident", "de": "Dringende Incident-Meldung", "pl": "Pilne zgłoszenie incydentu" },
            "desc": {
                "en": "For incidents involving Interpol, FATF, Egmont Group, or PNR.",
                "ru": "Для инцидентов с участием Interpol, FATF, Egmont Group или PNR.",
                "nl": "Voor incidenten met Interpol, FATF, Egmont Group of PNR.",
                "es": "Para incidentes que involucren a Interpol, FATF, Egmont Group o PNR.",
                "fr": "Pour les incidents impliquant Interpol, le GAFI, le Groupe Egmont ou le PNR.",
                "de": "Für Vorfälle mit Interpol, FATF, Egmont Group oder PNR.",
                "pl": "Dla incydentów z udziałem Interpolu, FATF, Egmont Group lub PNR."
            }
        }
    }

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
