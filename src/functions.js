import { guides, guide_url_list } from './guides.js';

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
            "version": "current",
            "name": "build (R6)"
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

export function getMatchingGuide(urlString) {
    let url = new URL(urlString);
    let locationHostname = String(url.hostname).toLowerCase();

    if (locationHostname == 'simplifier.net') {
        // Match against Simplifier.net
        return getSimplifierDetails(url);
    } else if (locationHostname == 'registry.fhir.org') {
        // Match against registry.fhir.org
    } else {
        var matchingGuide = getMatchingHL7Guide(url)
        if (matchingGuide) {
            return matchingGuide
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
    url.hostname = url.hostname
        .replace('www.', '');
    return url.hostname + url.pathname;
}

function getMatchingHL7Guide(url) {
    const processedUrl = processUrl(url);
    let longestMatch = findLongestMatch(processedUrl, Object.keys(guide_url_list));
    let guide_url_metadata = guide_url_list[longestMatch]

    // If there's a match and there are guide details for this match
    if (guide_url_metadata) {
        let current_guide_version = guide_url_metadata.version
        let current_path = processedUrl.substring(longestMatch.length).replace(/^\/+/, '')
        let guide_details = guides[guide_url_metadata['package_id']]

        let guideVersions = []

        // Add the current version
        const currentVersionEntry = guide_details.versions.find(versionEntry => versionEntry.version === 'current');
        if (currentVersionEntry) {
            let currentGuideVersion = {}
            if (current_guide_version == 'current') {
                currentGuideVersion['selected'] = true;
            }
            currentGuideVersion['guideVersionLabel'] = currentVersionEntry.version;
            if (currentVersionEntry.name) {
                currentGuideVersion['guideVersionLabel'] += ' (${currentVersionEntry.name})';
            }
            currentGuideVersion['guideVersionLink'] = currentVersionEntry.path + '/' + current_path;
            guideVersions.push(currentGuideVersion);
        }

        // Add the latest (root) version
        let latestGuideVersion = {}
        if (current_guide_version == 'latest') {
            latestGuideVersion['selected'] = true;
        }
        latestGuideVersion['guideVersionLabel'] = 'latest';
        latestGuideVersion['guideVersionLink'] = guide_details.url + '/' + current_path;
        guideVersions.push(latestGuideVersion);

        // Add the other versions
        for (var i = 0; i < guide_details.versions.length; i++) {
            if (guide_details.versions[i].version != 'current') {
                let guideVersion = {}
                if (guide_details.versions[i].version == current_guide_version) {
                    guideVersion['selected'] = true;
                }
                guideVersion['guideVersionLabel'] = guide_details.versions[i].version;
                if (guide_details.versions[i].name) {
                    guideVersion['guideVersionLabel'] += ' ('+guide_details.versions[i].name+')';
                }
                guideVersion['guideVersionLink'] = guide_details.versions[i].path + '/' + current_path;
                guideVersions.push(guideVersion);
            }
        }
        
        let return_array = {
            packageName: guide_url_metadata.package_id,
            guideVersions: guideVersions
        }


        // Add the FHIR version of the current guide version
        let current_guide_version_fhir_version;
        if (current_guide_version=='latest') {
            // get the details from the latest version
            let current_guide_version_details = guide_details['versions'].find(version => version['current'] === true && version['version'] !== 'current');
            if (current_guide_version_details) {
                current_guide_version_fhir_version = current_guide_version_details['fhirversion'];
            }
        } else if (current_guide_version=='current') {
            current_guide_version_fhir_version = guide_details['fhirversion_latest']
        } else {
            // get the details from the version
            let current_guide_version_details = guide_details['versions'].find(version => version['version'] == guide_url_metadata['version'])    
            current_guide_version_fhir_version = current_guide_version_details['fhirversion']
        }
        if (current_guide_version_fhir_version) {
            let currentFhirVersion = getFhirVersionLabel(current_guide_version_fhir_version)
            if (currentFhirVersion) {
                return_array['currentFhirVersion'] = currentFhirVersion
            }
        }
        
        return return_array
    }
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

function resetUI() {
    document.getElementById("version-list").innerHTML = '';
    document.getElementById("search-scope").style.display = "none";
}

export function updateUI(urlString) {
    // Here we should send the URL and get:
    // - currentFhirVersion: the FHIR version
    // - packageName: the package name
    // - guideVersions: a list of all versions of the guide
    //    - guideVersionLabel: Version label
    //    - guideVersionLink: Version link
    //    - selected: true if this is the selected version
    resetUI();

    console.log(urlString)
    var matchingGuide = getMatchingGuide(urlString);

    if (matchingGuide) {
        let currentFhirVersion = matchingGuide.currentFhirVersion;
        let packageName = matchingGuide.packageName;
        let guideVersions = matchingGuide.guideVersions;
        let simplifierGuideKey = matchingGuide.simplifierGuideKey;

        console.log(matchingGuide)

        if (guideVersions) {
            var versionListElement = document.getElementById("version-list");
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
            
            if (packageName) {
                // Update package search scope button
                console.log('packageName: ' + packageName);
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