import json
from urllib.parse import urlparse

with open('guides.json', 'r') as file:
    guides = json.load(file)

guide_url_list = {}

def process_url(url):
    parsed_url = urlparse(url)
    parsed_url = parsed_url.netloc\
        .replace('www.', '') + parsed_url.path
    return parsed_url

for package_id, guide_data in guides.items():
    print(f"Listing URLs for {package_id}")

    url_without_protocol = process_url(guide_data['url'])
    guide_url_list[url_without_protocol] = {
        'package_id': package_id,
        'version': 'latest'}
    for version_data in guide_data['versions']:
        url_without_protocol = process_url(version_data['path'])
        guide_url_list[url_without_protocol] = {
            'package_id': package_id,
            'version': version_data['version']}

with open('guide_url_list.json', 'w') as file:
    json.dump(guide_url_list, file, indent=4)

guides_js = f"export var guides = {json.dumps(guides, indent=4)};\n\n"
guides_js += f"export var guide_url_list = {json.dumps(guide_url_list, indent=4)};\n\n"
with open('guides.js', 'w') as file:
    file.write(guides_js)