export function generateSearchUrl(document) {
    var searchQuery = document.getElementById("search-query").value;
    var searchUrl = "https://simplifier.net/search?q=" + encodeURIComponent(searchQuery);
    var searchTypePackage = document.getElementById("search-type-package");
    if (searchTypePackage.checked) {
        var packageTextField = document.getElementById("package-text-field").value;
        searchUrl += "&package=" + encodeURIComponent(packageTextField);
    }
    var searchTypeGuide = document.getElementById("search-type-guide");
    if (searchTypeGuide.checked) {
        let guideTextField = document.getElementById("guide-text-field").value;
        searchUrl += "&guide=" + encodeURIComponent(guideTextField);
    }
    var searchTypeFHIRVersion = document.getElementById("search-type-fhir-version");
    if (searchTypeFHIRVersion.checked) {
        var fhirVersionTextField = document.getElementById("fhir-version-text-field").value;
        searchUrl += "&fhir=" + encodeURIComponent(fhirVersionTextField);
    }
    return searchUrl;
}

function getCoreGuideUrlList() {
    return {
        "build.fhir.org": {
            "name": "current (R6)"
        },
        "hl7.org/fhir": {
            "package_id": "hl7.fhir.r5.core",
            "version": "5.0.0",
            "name": "latest (R5)"
        },
        "hl7.org/fhir/r5": {
            "package_id": "hl7.fhir.r5.core",
            "version": "5.0.0",
            "name": "R5"
        },
        "hl7.org/fhir/r4b": {
            "package_id": "hl7.fhir.r4b.core",
            "version": "4.3.0",
            "name": "R4B"
        },
        "hl7.org/fhir/r4": {
            "package_id": "hl7.fhir.r4.core",
            "version": "4.0.1",
            "name": "R4"
        },
        "hl7.org/fhir/stu3": {
            "package_id": "hl7.fhir.r3.core",
            "version": "3.0.2",
            "name": "STU3"
        },
        "hl7.org/fhir/dstu2": {
            "package_id": "hl7.fhir.r2.core",
            "version": "1.0.2",
            "name": "DSTU2"
        }
    };
}

function getFhirVersionLabel(fhirVersionNumber) {
    let fhirVersionLabelMapping = {
        'DSTU2': ['2'],
        'STU3': ['3.0.1', '3.0.2', '3'],
        'R4': ['4.0.0', '4.0.1', '4'],
        'R4B': ['4.1.0', '4.3.0', '4.3.0-snapshot1'],
        'R5': ['4.2.0', '4.4.0', '4.5.0', '4.6.0', '5', '5.0.0-snapshot1', '5.0.0']
    }
    for (let [label, versions] of Object.entries(fhirVersionLabelMapping)) {
        if (versions.includes(fhirVersionNumber)) {
            return label;
        }
    }
}

export async function getMatchingGuide(urlString) {
    let url = new URL(urlString);
    let locationHostname = String(url.hostname).toLowerCase();

    if (locationHostname == 'simplifier.net') {
        // Match against Simplifier.net
        return getSimplifierDetails(url);
    } else if (locationHostname == 'registry.fhir.org') {
        // Match against registry.fhir.org
    } else {
        let matchingGuide = await getMatchingHL7Guide(url);
        if (matchingGuide) {
            return matchingGuide;
        } else if (locationHostname == 'hl7.org' || locationHostname == 'www.hl7.org' || locationHostname == 'build.fhir.org') {
            return getMatchingHl7FhirCoreGuide(url);
        }
    }
}

function getSimplifierDetails(url) {
    let pathParts = url.pathname.split('/');
    if (pathParts.length > 2) {
        let entityType = pathParts[1];
        if (entityType == 'guide' || entityType == 'published-guide') {
            // https://simplifier.net/guide/HL7-FHIR-Guide-Template/Home/FHIR-Artifacts/US-Core-Patient.page.md?version=current
            let guideUrlKey = pathParts[2];

            // Add the recommended version
            let return_array = {
                path: '',
                simplifierGuideKey: guideUrlKey,
                guideVersions: [
                    {
                        guideVersionLabel: 'Recommended',
                        guideVersionLink: 'https://simplifier.net/guide/' + guideUrlKey,
                    }
                ]
            }

            // Add the currrently selected version, if there's a version parameter
            if (entityType == 'guide') {
                let urlParams = new URLSearchParams(url.search);
                let version = urlParams.get('version');
                if (version) {
                    return_array.guideVersions.push(
                        {
                            guideVersionLabel: version,
                            guideVersionLink: 'https://simplifier.net/guide/' + guideUrlKey + '?version=' + version,
                            selected: true
                        }
                    );
                }
            }

            // Add the all versions link
            let allGuideVersions = {
                guideVersionLabel: 'All versions',
                guideVersionLink: 'https://simplifier.net/published-guide/' + guideUrlKey + '/versions',
            }
            if (entityType == 'published-guide' && pathParts[3] == 'versions') {
                allGuideVersions.selected = true;
            }
            return_array.guideVersions.push(allGuideVersions);

            return return_array;

        } else if (entityType == 'packages') {
            // https://simplifier.net/packages/hl7.fhir.r3.core/3.0.2/files/59464
            let packageName = pathParts[2];
            let packageVersion = pathParts[3];
            let return_array = {
                packageName: packageName
            }
            if (packageVersion) {
                return_array['packageVersion'] = packageVersion
            }
            return return_array
        }
    }
}

function findLongestMatch(element, list) {
    let matches = list.filter(item => element.toLowerCase().startsWith(item.toLowerCase()));    
    // Find the longest match
    let longestMatch = matches.reduce((a, b) => a.length > b.length ? a : b, "");
    return longestMatch;
}

function processUrl(url) {
    // Remove the www. from the hostname and return only the hostname + pathname
    // Example: https://www.hl7.org/fhir/us/core/STU6/index.html -> hl7.org/fhir/us/core/STU6/index.html
    url.hostname = url.hostname
        .replace('www.', '');
    return url.hostname + url.pathname;
}

export async function refreshClicked(urlString) {
    await fetchAndStoreHL7GuidesList();
    updateUI(urlString);
}

export function resetClicked(urlString) {
    console.log('Resetting');
    chrome.storage.local.clear(() => {
        updateUI(urlString);
    });
}

export async function fetchAndStoreHL7GuidesList() {
    console.log('Fetching new data');
    var refreshLink = document.getElementById("refresh-link");

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://hl7.org/fhir/package-registry.json');
            const hl7_package_list = await response.json();

            // TODO Also process https://build.fhir.org/ig/qas.json for extra guides
            
            const now = new Date().getTime();
            const item = {
                data: hl7_package_list,
                timestamp: now
            };

            await new Promise(resolve => {
                chrome.storage.local.set({'hl7-package-list': item}, () => {
                    console.log('Package list fetched and stored', hl7_package_list);
                    refreshLink.innerText = 'Package list downloaded';
                    resolve();
                });
            });

            const guide_url_list = transformHL7packagelist(hl7_package_list);
            await new Promise(resolve => {
                chrome.storage.local.set({'guide_url_list': guide_url_list}, () => {
                    console.log('Guide URL list transformed', guide_url_list);
                    refreshLink.innerText = 'Package list transformed';
                    resolve();
                });
            });

            resolve(guide_url_list);
        } catch (error) {
            console.error('Error:', error);
            refreshLink.innerText = 'Error when downloading package list';
            reject(error);
        }
    });
}

export async function retrieveHL7GuidesList() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get('guide_url_list', async (result) => {
            try {
                if (result?.guide_url_list) {
                    resolve(result.guide_url_list);
                } else {
                    const guide_url_list = await fetchAndStoreHL7GuidesList();
                    resolve(guide_url_list);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
}

export function transformHL7packagelist(hl7_package_list) {
    var guide_url_list = {};

    hl7_package_list.packages.forEach(package_item => {
        
        let urlCanonical = new URL(package_item['canonical']);
        let processedCanonical = processUrl(urlCanonical);
        guide_url_list[processedCanonical] = {
            package_id: package_item['package-id'],
            canonical: package_item['canonical']
        }

        let urlCiBuild = new URL(package_item['ci-build']);
        let processedCiBuild = processUrl(urlCiBuild);
        guide_url_list[processedCiBuild] = {
            package_id: package_item['package-id'],
            canonical: package_item['canonical']
        }

        if (processedCiBuild.startsWith('build.fhir.org/ig/')) {
            let githubUrl = processedCiBuild.replace('build.fhir.org/ig/', 'github.com/');
            guide_url_list[githubUrl] = {
                package_id: package_item['package-id'],
                canonical: package_item['canonical']
            }
        }
    });

    return guide_url_list
}

export async function getHL7GuideVersions(url) {
    let packageList = await fetch(url + '/package-list.json');
    let packageListData = await packageList.json();

    let guideVersions = {};

    guideVersions[packageListData.canonical] = {
        guideVersionLabel: 'Latest',
        guideVersionLink: packageListData.canonical
    };

    for (let version of packageListData.list) {
        let processedPath = processUrl(new URL(version.path));
        guideVersions[processedPath] = {
            guideVersionLabel: version.version,
            guideVersionLink: version.path
        };

        if (version.sequence) {
            guideVersions[processedPath]['guideVersionLabel'] = guideVersions[processedPath]['guideVersionLabel'] + ' ('+version.sequence+')';
        }

        if (processedPath.startsWith('build.fhir.org/ig/')) {
            let githubUrl = processedPath.replace('build.fhir.org/ig/', 'github.com/');
            guideVersions[githubUrl] = {
                guideVersionLabel: 'GitHub',
                guideVersionLink: 'https://'+githubUrl
            };
        }
    }

    return guideVersions;
}

function getMatchingHL7Guide(url) {
    const processedUrl = processUrl(url);
    console.log('HL7Guide processedUrl', processedUrl);

    return new Promise(async (resolve) => {
        let guide_url_list = await retrieveHL7GuidesList();
        if (guide_url_list) {
            let longestMatch = findLongestMatch(processedUrl, Object.keys(guide_url_list));
            console.log('HL7Guide longestGuideMatch', longestMatch);
            let guide_url_metadata = guide_url_list[longestMatch];

            if (guide_url_metadata) {

                let return_array = {
                    packageName: guide_url_metadata.package_id,
                };

                let guideVersions = await getHL7GuideVersions(guide_url_metadata.canonical);
                if (guideVersions) {
                    let longestMatch = findLongestMatch(processedUrl, Object.keys(guideVersions));
                    console.log('HL7Guide longestGuideVersionMatch', longestMatch);
                    let current_path = processedUrl.substring(longestMatch.length).replace(/^\/+/, '');
                    console.log('HL7Guide current_path', current_path);

                    let versions = [];
                    for (let [path, version] of Object.entries(guideVersions)) {
                        // TODO: Add the current_path to the guideVersionLink, unless GitHub
                        versions.push(version);
                        if (path == longestMatch) {
                            version.selected = true;
                        }
                    }
                    console.log('HL7Guide versions', versions);
                    return_array['guideVersions'] = versions;
                }

                resolve(return_array);
            } else {
                resolve(null);
            }
        } else {
            console.log('No guide URL list found');
            resolve(null);
        }
    });

    // If there's a match and there are guide details for this match
    // if (guide_url_metadata) {
    //     let current_guide_version = guide_url_metadata.version
    //     let current_path = processedUrl.substring(longestMatch.length).replace(/^\/+/, '')
    //     let guide_details = guides[guide_url_metadata['package_id']]

    //     let guideVersions = []

    //     // Add the current version
    //     const currentVersionEntry = guide_details.versions.find(versionEntry => versionEntry.version === 'current');
    //     if (currentVersionEntry) {
    //         let currentGuideVersion = {}
    //         if (current_guide_version == 'current') {
    //             currentGuideVersion['selected'] = true;
    //         }
    //         currentGuideVersion['guideVersionLabel'] = currentGuideVersion['guideVersionNumber'] = currentVersionEntry.version;
    //         if ('current_version' in guide_details) {
    //             currentGuideVersion['guideVersionNumber'] = guide_details.current_version;
    //         }

    //         if (currentVersionEntry.name) {
    //             currentGuideVersion['guideVersionLabel'] += ' (${currentVersionEntry.name})';
    //         }
    //         currentGuideVersion['guideVersionLink'] = currentVersionEntry.path + '/' + current_path;
    //         guideVersions.push(currentGuideVersion);
    //     }

    //     // Add the latest (root) version
    //     if (!('not_yet_published' in guide_details)) {
    //         let latestGuideVersion = {}
    //         if (current_guide_version == 'latest') {
    //         latestGuideVersion['selected'] = true;
    //         }
    //         latestGuideVersion['guideVersionLabel'] = 'latest';

    //         // Find the current version
    //         const currentVersionEntry = guide_details.versions.find(versionEntry => versionEntry.current === true);
    //         if (currentVersionEntry) {
    //             latestGuideVersion['guideVersionNumber'] = currentVersionEntry.version;
    //         }

    //         latestGuideVersion['guideVersionLink'] = guide_details.url + '/' + current_path;
    //         guideVersions.push(latestGuideVersion);
    //     }

    //     // Add the other versions
    //     for (var i = 0; i < guide_details.versions.length; i++) {
    //         if (guide_details.versions[i].version != 'current') {
    //             let guideVersion = {}
    //             if (guide_details.versions[i].version == current_guide_version) {
    //                 guideVersion['selected'] = true;
    //             }
    //             guideVersion['guideVersionLabel'] = guideVersion['guideVersionNumber'] = guide_details.versions[i].version;
    //             if (guide_details.versions[i].name) {
    //                 guideVersion['guideVersionLabel'] += ' ('+guide_details.versions[i].name+')';
    //             }
    //             guideVersion['guideVersionLink'] = guide_details.versions[i].path + '/' + current_path;
    //             guideVersions.push(guideVersion);
    //         }
    //     }
        
    //     let return_array = {
    //         packageName: guide_url_metadata.package_id,
    //         guideVersions: guideVersions
    //     }


    //     // Add the FHIR version of the current guide version
    //     let current_guide_version_fhir_version;
    //     if (current_guide_version=='latest') {
    //         // get the details from the latest version
    //         let current_guide_version_details = guide_details['versions'].find(version => version['current'] === true && version['version'] !== 'current');
    //         if (current_guide_version_details) {
    //             current_guide_version_fhir_version = current_guide_version_details['fhirversion'];
    //         }
    //     } else if (current_guide_version=='current') {
    //         current_guide_version_fhir_version = guide_details['fhirversion_latest']
    //     } else {
    //         // get the details from the version
    //         let current_guide_version_details = guide_details['versions'].find(version => version['version'] == guide_url_metadata['version'])    
    //         current_guide_version_fhir_version = current_guide_version_details['fhirversion']
    //     }
    //     if (current_guide_version_fhir_version) {
    //         let currentFhirVersion = getFhirVersionLabel(current_guide_version_fhir_version)
    //         if (currentFhirVersion) {
    //             return_array['currentFhirVersion'] = currentFhirVersion
    //         }
    //     }
        
    //     return return_array
    // }
}

function getMatchingHl7FhirCoreGuide(url) {
    let guide_url_list = getCoreGuideUrlList();
    const processedUrl = processUrl(url);
    let longestMatch = findLongestMatch(processedUrl, Object.keys(guide_url_list));
    let guide_details = guide_url_list[longestMatch]

    if (guide_details) {

        let current_path = processedUrl.substring(longestMatch.length).replace(/^\/+/, '')
        let guideVersions = []

        for (let [key, value] of Object.entries(guide_url_list)) {
            let guideVersion = {}
            if (key == longestMatch) {
                guideVersion['selected'] = true;
            }
            guideVersion['guideVersionNumber'] = value['version'];
            guideVersion['guideVersionLabel'] = value['name'];
            guideVersion['guideVersionLink'] = 'https://'+key + '/' + current_path;
            guideVersions.push(guideVersion);
        }

        let return_array = {
            guideVersions: guideVersions
        }
        if (guide_details.package_id) {
            return_array['packageName'] = guide_details.package_id
        }
        let current_guide_version_fhir_version = getFhirVersionLabel(guide_details.version)
        if (current_guide_version_fhir_version) {
            return_array['currentFhirVersion'] = current_guide_version_fhir_version
        }

        return return_array
    }
}

export function createVersionListItem(versionListElement, version, url, selected) {
    var versionListButton = document.createElement("button");
    versionListButton.type = "button";
    versionListButton.title = "Visit this page in version " + version;
    versionListButton.textContent = version.toUpperCase();
    versionListButton.classList.add("yellow-button"); // add yellow-button class
    if (selected) {
        versionListButton.classList.add("selected"); // add selected class
    }
    versionListButton.addEventListener("click", function() {
        chrome.tabs.update({url: url});
        updateUI(url);
    });
    versionListElement.appendChild(versionListButton);
}

export function createToolsListItem(toolsListElement, text, url, title) {
    var toolsListButton = document.createElement("button");
    toolsListButton.type = "button";
    toolsListButton.classList.add("tools-button");
    toolsListButton.textContent = text;
    toolsListButton.href = url;
    toolsListButton.title = title;
    toolsListButton.addEventListener("click", function() {
        chrome.tabs.create({url: url});
    });
    toolsListElement.appendChild(toolsListButton);
}

function resetUI() {
    var versionListElement = document.getElementById("version-list")
    versionListElement.innerHTML = '';
    versionListElement.style.display = "none";

    var toolsListElement = document.getElementById("tools-list")
    toolsListElement.innerHTML = '';
    toolsListElement.style.display = "none";
    
    document.getElementById("search-scope").style.display = "none";
}

export async function updateUI(urlString) {
    resetUI();

    console.log('urlString: ' + urlString);
    var matchingGuide = await getMatchingGuide(urlString);

    if (matchingGuide) {
        let currentFhirVersion = matchingGuide.currentFhirVersion;
        let packageName = matchingGuide.packageName;
        let guideVersions = matchingGuide.guideVersions;
        let simplifierGuideKey = matchingGuide.simplifierGuideKey;

        console.log('matchingGuide', matchingGuide);

        if (guideVersions) {
            var versionListElement = document.getElementById("version-list");
            versionListElement.style.display = "block";

            for (var i = 0; i < guideVersions.length; i++) {
                var version = guideVersions[i];
                createVersionListItem(versionListElement, version.guideVersionLabel, version.guideVersionLink, version.selected);
            }

            if (guideVersions.length > 6) {
                var buttons = versionListElement.getElementsByTagName("button");
                for (var j = 5; j < buttons.length; j++) {
                    buttons[j].style.display = "none";
                }

                var showAllLink = document.createElement("a");
                showAllLink.classList.add("glyphicon", "glyphicon-chevron-down", "more-button");
                showAllLink.href = "#";
                showAllLink.title = "Show all versions";

                showAllLink.addEventListener("click", function() {
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].style.display = "inline";
                    }
                    showAllLink.style.display = "none";
                });

                versionListElement.appendChild(showAllLink);    
            }
        }

        if (packageName !== undefined || currentFhirVersion !== undefined
            || simplifierGuideKey !== undefined) {
            
            var searchScope = document.getElementById("search-scope");
            searchScope.style.display = "block";

            var toolsListElement = document.getElementById("tools-list");
            
            if (packageName) {
                // Update package search scope button
                console.log('packageName: ' + packageName);

                if (guideVersions) {
                    var selectedVersion = guideVersions.find(version => version.selected);
                    if (selectedVersion) {
                        
                        var packageVersion = selectedVersion.guideVersionLabel;
                        if ('guideVersionNumber' in selectedVersion) {
                            packageVersion = selectedVersion.guideVersionNumber;
                        }

                        console.log('Selected Version: ' + packageVersion);
                        // Do something with the selected version

                        if (selectedVersion.guideVersionLabel != 'current') {
                            toolsListElement.style.display = "block";

                            createToolsListItem(toolsListElement, 'Validator', 'https://simplifier.net/validate?scope='+packageName+'@'+packageVersion, 'Validate against '+packageName+'@'+packageVersion);
                            
                            createToolsListItem(toolsListElement, 'FHIRPath', 'https://simplifier.net/fhirpath?scope='+packageName+'@'+packageVersion, 'Query against '+packageName+'@'+packageVersion+' with FHIRPath');

                            createToolsListItem(toolsListElement, 'FQL', 'https://simplifier.net/fql?scope='+packageName+'@'+packageVersion, 'Query against '+packageName+'@'+packageVersion+' with the FHIR Query Language');
                        }


                    } else {
                        console.log('No selected version found');
                    }
                } 

                document.getElementById("search-scope-package-name").style.display = "block";
                
                var searchTypePackageLabel = document.querySelector("label[for='search-type-package']");
                searchTypePackageLabel.textContent = 'In ' + packageName;
                var searchTypePackage = document.getElementById("search-type-package");
                searchTypePackage.removeAttribute("disabled");
                searchTypePackage.checked = true;
                var packageTextField = document.getElementById("package-text-field");
                packageTextField.value = packageName;
            } else {
                document.getElementById("search-scope-package-name").style.display = "none";
            }

            if (simplifierGuideKey) {
                console.log('simplifierGuideKey: ' + simplifierGuideKey);
                document.getElementById("search-scope-guide-key").style.display = "block";

                let searchTypeGuide = document.getElementById("search-type-guide");
                searchTypeGuide.removeAttribute("disabled");
                searchTypeGuide.checked = true;
                let guideTextField = document.getElementById("guide-text-field");
                guideTextField.value = simplifierGuideKey;
            } else {
                document.getElementById("search-scope-guide-key").style.display = "none";
            }

            if (currentFhirVersion) {
                // Update FHIR version search scope button
                console.log('FHIR version: ' + currentFhirVersion);
                document.getElementById("search-scope-fhir-version").style.display = "block";

                var searchTypeFHIRVersionLabel = document.querySelector("label[for='search-type-fhir-version']");
                searchTypeFHIRVersionLabel.textContent = 'In ' + currentFhirVersion.toUpperCase();
                var searchTypeFHIRVersion = document.getElementById("search-type-fhir-version");
                searchTypeFHIRVersion.removeAttribute("disabled");
                var fhirVersionTextField = document.getElementById("fhir-version-text-field");
                fhirVersionTextField.value = currentFhirVersion;
            } else {
                document.getElementById("search-scope-fhir-version").style.display = "none";
            }
        }
    } else {
        console.log('Unknown location');
    }
}
