import requests
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import re
import json

url = "https://build.fhir.org/ig/qas.json"
response_qas = requests.get(url)

guides = {}

if response_qas.status_code == 200:
    json_data_qas = response_qas.json()
    for entry in json_data_qas:        
        package_id = entry.get('package-id')
        if package_id not in guides:
            print(f"Processing {package_id}")

            repo_path = '/'.join(entry.get('repo').split('/')[0:2])
            repo = f"https://github.com/{repo_path}"

            root_url = entry.get('url').split('/ImplementationGuide')[0]

            # Get history page and scrape versions
            try:
                response_history = requests.get(f"{root_url}/history.html")
            except requests.exceptions.RequestException as e:
                print(f"Failed to retrieve history page for {package_id}: {e}")

            if response_history and response_history.status_code == 200:
                print(f"Parsing versions for {package_id}")
                soup = BeautifulSoup(response_history.text, 'html.parser')
                script = soup.find('script', string=re.compile('var pageJSON'))
                
                try:
                    json_str = re.search(r'var pageJSON = \'(.*?)\';', script.string).group(1)
                except AttributeError:
                    json_str = None
                
                if json_str:
                    guide_data = json.loads(json_str)

                    guides[package_id] = {
                        'url': root_url,
                        'versions': guide_data.get('list'),
                        'name': entry.get('name'),
                        'title': entry.get('title'),
                        'fhirversion_latest': entry.get('version'),
                        'current_version': entry.get('ig-ver'),
                        'repo': repo,
                    }
            else:
                guides[package_id] = {
                        'url': root_url,
                        'not_yet_published': True, # 'history.html' not found
                        'versions': [
                            {
                                'version': 'current',
                                'path': 'http://build.fhir.org/ig/'+repo_path,
                                'fhirversion': entry.get('version')
                            }
                        ],
                        'name': entry.get('name'),
                        'title': entry.get('title'),
                        'fhirversion_latest': entry.get('version'),
                        'current_version': entry.get('ig-ver'),
                        'repo': repo,
                    }
                
    with open('guides.json', 'w') as file:
        print("Writing to guides.json")
        json.dump(guides, file, indent=4)
else:
    print("Failed to retrieve JSON from the URL.")