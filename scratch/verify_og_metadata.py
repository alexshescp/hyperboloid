import json

with open('/var/hyperboloid/i18n/site-content.json', 'r') as f:
    data = json.load(f)

pages = data.get('pages', {})

for page_name, page_data in pages.items():
    if 'title' in page_data and 'ogTitle' not in page_data:
        page_data['ogTitle'] = page_data['title']
    if 'description' in page_data and 'ogDescription' not in page_data:
        page_data['ogDescription'] = page_data['description']

with open('/var/hyperboloid/i18n/site-content.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Verified and updated ogTitle/ogDescription in site-content.json")
