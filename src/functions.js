let statusTimeout = null;

export function showStatus(message, statusElement) {
    if (!statusElement) {
        console.warn('showStatus called without a status element');
        return;
    }
    
    // Clear any existing timeout
    if (statusTimeout) {
        clearTimeout(statusTimeout);
    }
    
    // Set the message and show it
    statusElement.textContent = message;
    statusElement.classList.add('visible');
    
    // Hide after 3 seconds
    statusTimeout = setTimeout(() => {
        statusElement.classList.remove('visible');
    }, 3000);
}

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
        "github.com/hl7/fhir": {
            "name": "GitHub"
        },
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

export async function getMatchingGuide(urlString, statusElement) {
    let url = new URL(urlString);
    let locationHostname = String(url.hostname).toLowerCase();

    if (locationHostname == 'simplifier.net') {
        // Match against Simplifier.net
        return getSimplifierDetails(url);
    } else if (locationHostname == 'registry.fhir.org') {
        // TODO: Match against registry.fhir.org
        return getRegistryDetails(url);
    } else {
        let matchingGuide = await getMatchingHL7Guide(url, statusElement);
        if (matchingGuide) {
            return matchingGuide;
        } else if (locationHostname == 'hl7.org' || locationHostname == 'www.hl7.org' || locationHostname == 'build.fhir.org' || locationHostname == 'github.com') {
            return getMatchingHl7FhirCoreGuide(url);
        }
    }
}

function getRegistryDetails(url) {
    // https://registry.fhir.org/package/hl7.fhir.us.core%7C7.0.0
    let pathParts = url.pathname.split('/');
    if (pathParts.length > 2) {
        let entityType = pathParts[1];
        if (entityType == 'package') {
            let packageNameAndVersion = pathParts[2];
            let packageName = packageNameAndVersion.split('%7C')[0];
            let packageVersion = packageNameAndVersion.split('%7C')[1];
            return {
                packageName: packageName,
                packageVersion: packageVersion
            };
        }
    }
    return null;
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

export function resetClicked(urlString, statusElement) {
    console.log('Resetting');
    chrome.storage.local.clear(() => {
        showStatus('Cache cleared, reloading...', statusElement);
        updateUI(urlString, statusElement);
    });
}

export async function fetchAndStoreHL7GuidesList() {
    console.log('Fetching new data');

    try {
        // Fetch both package registry and qas data
        const [hl7Response, qasResponse] = await Promise.all([
            fetch('https://hl7.org/fhir/package-registry.json'),
            fetch('https://build.fhir.org/ig/qas.json')
        ]);
        
        const [hl7_package_list, qas_data] = await Promise.all([
            hl7Response.json(),
            qasResponse.json()
        ]);

        // Process both sources
        const now = new Date().getTime();
        
        // Store HL7 package list
        await new Promise((resolve) => {
            chrome.storage.local.set({'hl7-package-list': { data: hl7_package_list, timestamp: now }}, () => {
                console.log('Package list fetched and stored', hl7_package_list);
                resolve();
            });
        });

        // Store QAS data
        await new Promise((resolve) => {
            chrome.storage.local.set({'qas-data': { data: qas_data, timestamp: now }}, () => {
                console.log('QAS data fetched and stored', qas_data);
                resolve();
            });
        });

        // Transform and combine both sources
        const hl7Transformed = transformHL7packagelist(hl7_package_list);
        const qasTransformed = transformQASData(qas_data);

        const guide_url_list = {
            ...hl7Transformed,
            ...qasTransformed
        };

        await new Promise((resolve) => {
            chrome.storage.local.set({'guide_url_list': guide_url_list}, () => {
                console.log('Guide URL list transformed and stored', guide_url_list);
                resolve();
            });
        });

        return guide_url_list;
        
    } catch (error) {
        console.error('Error in fetchAndStoreHL7GuidesList:', error);
        console.error('Error stack:', error.stack);
        throw error;
    }
}

function transformQASData(qas_data) {
    const guide_url_list = {};
    
    if (qas_data && Array.isArray(qas_data)) {
        qas_data.forEach(guide => {
            if (guide.url && guide['package-id']) {
                try {
                    // Split URL on 'ImplementationGuide' and take first part
                    let canonical = guide.url.split('/ImplementationGuide')[0];
                    const processedUrl = processUrl(new URL(canonical));
                    guide_url_list[processedUrl] = {
                        package_id: guide['package-id'],
                        canonical: canonical
                    };

                    let repoPath = guide.repo.split('/branches')[0];

                    // Add current version
                    if (guide.repo) {
                        let repoUrl = 'build.fhir.org/ig/'+repoPath;
                        guide_url_list[repoUrl] = {
                            package_id: guide['package-id'],
                            canonical: canonical
                        };
                    }
                    // Add GitHub version
                    if (guide.repo) {
                        let githubUrl = 'github.com/'+repoPath;
                        guide_url_list[githubUrl] = {
                            package_id: guide['package-id'],
                            canonical: canonical
                        };  
                    }
                } catch (error) {
                    console.warn('Failed to process guide:', guide.url);
                }
            }
        });
    }
    
    return guide_url_list;
}

export async function retrieveHL7GuidesList() {
    try {
        const result = await new Promise((resolve) => {
            chrome.storage.local.get('guide_url_list', resolve);
        });

        if (result?.guide_url_list) {
            return result.guide_url_list;
        } else {
            return await fetchAndStoreHL7GuidesList();
        }
    } catch (error) {
        console.error('Error in retrieveHL7GuidesList:', error);
        throw error;
    }
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

export async function getHL7GuideVersions(canonicalUrlString, processedCurrentUrlString, statusElement) {
    let canonicalUrl = new URL(canonicalUrlString);
    // Change to https, because canonicals are sometimes http but website is generally https
    if (canonicalUrl.protocol === 'http:') {
        canonicalUrl.protocol = 'https:';
    }
    // Remove trailing slash if present
    if (canonicalUrl.pathname.endsWith('/')) {
        canonicalUrl.pathname = canonicalUrl.pathname.slice(0, -1);
    }

    // Get domains for comparison
    const canonicalDomain = canonicalUrl.hostname.toLowerCase();
    const currentUrl = new URL('https://' + processedCurrentUrlString);
    const currentDomain = currentUrl.hostname.toLowerCase();
    
    // Check if domains match or if it's an HL7 domain
    const isHL7Domain = canonicalDomain === 'hl7.org' || 
                       canonicalDomain === 'build.fhir.org' || 
                       canonicalDomain === 'www.hl7.org';
    const domainsMatch = canonicalDomain === currentDomain;
    
    if (!isHL7Domain && !domainsMatch) {

        // Check if package list is already stored in Chrome storage
        const packageListKey = canonicalUrl.toString();
        const packageListResult = await new Promise((resolve) => {
            chrome.storage.local.get(packageListKey, resolve);
        });

        if (packageListResult[packageListKey]) {
            console.log('Package list found in Chrome storage', packageListResult[packageListKey]);
            return processPackageListData(packageListResult[packageListKey]['data']);
        } else {
            showStatus('Please one-time navigate to the latest version of this guide to load all versions', statusElement);
            
            let guideVersions = {
                [processUrl(canonicalUrl)]: {
                    guideVersionLabel: 'latest',
                    guideVersionLink: canonicalUrl.toString()
                }
            };

            if (processedCurrentUrlString.startsWith('github.com/')) {
                let githubUrl = `${currentUrl.protocol}//${currentUrl.hostname}/${currentUrl.pathname.split('/')[1]}/${currentUrl.pathname.split('/')[2]}`;
                guideVersions[processUrl(new URL(githubUrl))] = {
                    guideVersionLabel: 'GitHub',
                    guideVersionLink: githubUrl
                };
                let buildIgUrl = githubUrl.replace('github.com/', 'build.fhir.org/ig/');
                guideVersions[processUrl(new URL(buildIgUrl))] = {
                    guideVersionLabel: 'current',
                    guideVersionLink: buildIgUrl
                };
            } else if (processedCurrentUrlString.startsWith('build.fhir.org/ig/')) {
                let buildIgUrl = `${currentUrl.protocol}//${currentUrl.hostname}/${currentUrl.pathname.split('/')[1]}/${currentUrl.pathname.split('/')[2]}/${currentUrl.pathname.split('/')[3]}`;
                guideVersions[processUrl(new URL(buildIgUrl))] = {
                    guideVersionLabel: 'current',
                    guideVersionLink: buildIgUrl
                };
                let githubUrl = buildIgUrl.replace('build.fhir.org/ig/', 'github.com/');
                guideVersions[processUrl(new URL(githubUrl))] = {
                    guideVersionLabel: 'GitHub',
                    guideVersionLink: githubUrl
                };
            }
            return orderGuideVersions(guideVersions);
        }
    }

    let packageListData;
    try {
        let packageList = await fetch(canonicalUrl + '/package-list.json');
        if (!packageList.ok) {
            throw new Error(`HTTP error! status: ${packageList.status}`);
        }
        packageListData = await packageList.json();

        // Store package list data in Chrome storage
        if (!isHL7Domain) {
            try {
                await chrome.storage.local.set({
                    [canonicalUrl.toString()]: {
                        timestamp: Date.now(),
                        data: packageListData
                    }
                });
                console.log('Package list stored in Chrome storage fore '+ canonicalUrl.toString());
            } catch (storageError) {
                console.error('Error storing package list:', storageError);
            }
        }
    } catch (error) {
        console.error('Error fetching package list:', error);
        showStatus('Error fetching guide versions', statusElement);
        return null;
    }

    return processPackageListData(packageListData);
}

function processPackageListData(packageListData) {
    let guideVersions = {};

    // Add the latest version
    let processedCanonical = processUrl(new URL(packageListData.canonical));
    guideVersions[processedCanonical] = {
        guideVersionLabel: 'latest',
        guideVersionLink: packageListData.canonical,
        ...(packageListData.list.find(v => v.current === true) && {
            guideVersionNumber: packageListData.list.find(v => v.current === true).version,
            guideFhirVersion: packageListData.list.find(v => v.current === true).fhirversion
        })
    };

    for (let version of packageListData.list) {
        let processedPath = processUrl(new URL(version.path));
        guideVersions[processedPath] = {
            guideVersionLabel: version.version,
            guideVersionLink: version.path,
            guideVersionNumber: version.version,
            guideFhirVersion: version.fhirversion
        };

        if (version.current === true) {
            guideVersions[processedPath]['guideVersionLabel'] = guideVersions[processedPath]['guideVersionLabel'] + ' (Latest)';
        }

        if (processedPath.startsWith('build.fhir.org/ig/')) {
            let githubUrl = processedPath.replace('build.fhir.org/ig/', 'github.com/');
            guideVersions[githubUrl] = {
                guideVersionLabel: 'GitHub',
                guideVersionLink: 'https://'+githubUrl
            };
        }
    }

    return orderGuideVersions(guideVersions);
}

function orderGuideVersions(guideVersions) {
    // Reorder versions to put GitHub, current and latest first
    let orderedVersions = {};
    
    // Add GitHub version first if it exists
    Object.entries(guideVersions).forEach(([path, version]) => {
        if (version.guideVersionLabel === 'GitHub') {
            orderedVersions[path] = version;
        }
    });

    // Add current version next
    Object.entries(guideVersions).forEach(([path, version]) => {
        if (version.guideVersionLabel === 'current') {
            orderedVersions[path] = version;
        }
    });

    // Add latest version if not already added
    Object.entries(guideVersions).forEach(([path, version]) => {
        if (version.guideVersionLabel === 'latest') {
            orderedVersions[path] = version;
        }
    });

    // Add remaining versions
    Object.entries(guideVersions).forEach(([path, version]) => {
        if (!orderedVersions[path]) {
            orderedVersions[path] = version;
        }
    });

    return orderedVersions;
}

function getMatchingHL7Guide(url, statusElement) {
    const processedUrl = processUrl(url);

    return new Promise(async (resolve) => {
        let guide_url_list = await retrieveHL7GuidesList();
        if (guide_url_list) {
            let longestMatch = findLongestMatch(processedUrl, Object.keys(guide_url_list));
            let guide_url_metadata = guide_url_list[longestMatch];

            if (guide_url_metadata) {
                let return_array = {
                    packageName: guide_url_metadata.package_id,
                };

                let guideVersions = await getHL7GuideVersions(guide_url_metadata.canonical, processedUrl, statusElement);
                if (guideVersions) {
                    let longestMatch = findLongestMatch(processedUrl, Object.keys(guideVersions));
                    let current_path = processedUrl.substring(longestMatch.length).replace(/^\/+/, '');
                    let versions = [];
                    let selectedVersion = null;
                    
                    // First pass: find the selected version
                    for (let [path, version] of Object.entries(guideVersions)) {
                        if (path == longestMatch) {
                            version.selected = true;
                            selectedVersion = version;
                            if (version.guideFhirVersion) {
                                return_array['currentFhirVersion'] = getFhirVersionLabel(version.guideFhirVersion);
                            }
                        }
                    }

                    // Second pass: add versions with appropriate links
                    for (let [path, version] of Object.entries(guideVersions)) {
                        // Only add current_path if the selected version is not GitHub
                        if (selectedVersion?.guideVersionLabel !== 'GitHub') {
                            version.guideVersionLink = version.guideVersionLabel === 'GitHub' ? 
                                version.guideVersionLink : 
                                version.guideVersionLink + (current_path ? '/' + current_path : '');
                        }
                        versions.push(version);
                    }
                    
                    return_array['guideVersions'] = versions;
                }

                resolve(return_array);
            } else {
                resolve(null);
            }
        } else {
            resolve(null);
        }
    });
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

            if (longestMatch == 'github.com/hl7/fhir') {
                guideVersion['guideVersionLink'] = 'https://'+key;
            } else {
                if (key == 'github.com/hl7/fhir') {
                    guideVersion['guideVersionLink'] = 'https://'+key;
                } else {
                    guideVersion['guideVersionLink'] = 'https://'+key + '/' + current_path;
                }
            }

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

export function createVersionListItem(versionListElement, version, urlString, selected, statusElement) {
    var versionListButton = document.createElement("button");
    versionListButton.type = "button";
    versionListButton.title = "Visit this page in version " + version;
    
    if (version === 'GitHub') {
        // Create a span for the GitHub icon
        var githubIcon = document.createElement("i");
        githubIcon.classList.add("fab", "fa-github");
        versionListButton.appendChild(githubIcon);
        versionListButton.title = 'View this specification on GitHub';
    } else if (version === 'current') {
        // Create a span for the development icon
        var devIcon = document.createElement("i");
        devIcon.classList.add("fas", "fa-flask");
        versionListButton.appendChild(devIcon);
    } else {
        versionListButton.textContent = version.toUpperCase();
    }
    
    versionListButton.classList.add("yellow-button"); // add yellow-button class
    if (selected) {
        versionListButton.classList.add("selected"); // add selected class
    }
    versionListButton.addEventListener("click", function() {
        chrome.tabs.update({url: urlString});
        updateUI(urlString, statusElement);
    });
    versionListElement.appendChild(versionListButton);
}

export function createToolsListItem(toolsListElement, text, url, title) {
    var toolsListButton = document.createElement("button");
    toolsListButton.type = "button";
    toolsListButton.classList.add("tools-button");
    
    if (text === 'Package') {
        var packageIcon = document.createElement("i");
        packageIcon.classList.add("fas", "fa-box");
        toolsListButton.appendChild(packageIcon);
    } else if (text === 'Validator') {
        var validatorIcon = document.createElement("i");
        validatorIcon.classList.add("fas", "fa-check");
        toolsListButton.appendChild(validatorIcon);
    } else if (text === 'FHIRPath') {
        var fhirpathIcon = document.createElement("i");
        fhirpathIcon.classList.add("fas", "fa-filter");
        toolsListButton.appendChild(fhirpathIcon);
    } else if (text === 'FQL') {
        var fqlIcon = document.createElement("i");
        fqlIcon.classList.add("fas", "fa-table");
        toolsListButton.appendChild(fqlIcon);
    } else {
        toolsListButton.textContent = text;
    }
    
    toolsListButton.href = url;
    toolsListButton.title = title;
    toolsListButton.addEventListener("click", function() {
        chrome.tabs.create({url: url});
    });
    toolsListElement.appendChild(toolsListButton);
}

function addToolsListItems(packageName, packageVersion, toolsListElement) {
    toolsListElement.style.display = "block";

    createToolsListItem(toolsListElement, 'Package', 'https://simplifier.net/packages/'+packageName+'/'+packageVersion, 'View package '+packageName+'@'+packageVersion+' on Simplifier');

    createToolsListItem(toolsListElement, 'Validator', 'https://simplifier.net/validator?scope='+packageName+'@'+packageVersion, 'Validate against package '+packageName+'@'+packageVersion);
    
    createToolsListItem(toolsListElement, 'FHIRPath', 'https://simplifier.net/fhirpath?scope='+packageName+'@'+packageVersion, 'Query with FHIRPath against package '+packageName+'@'+packageVersion);

    createToolsListItem(toolsListElement, 'FQL', 'https://simplifier.net/fql?scope='+packageName+'@'+packageVersion, 'Query with the FHIR Query Language against package '+packageName+'@'+packageVersion);
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

export async function updateUI(urlString, statusElement) {
    resetUI();

    var matchingGuide = await getMatchingGuide(urlString, statusElement);

    if (matchingGuide) {
        let currentFhirVersion = matchingGuide.currentFhirVersion;
        let packageName = matchingGuide.packageName;
        let packageVersion = matchingGuide.packageVersion;
        let guideVersions = matchingGuide.guideVersions;
        let simplifierGuideKey = matchingGuide.simplifierGuideKey;

        if (guideVersions) {
            var versionListElement = document.getElementById("version-list");
            versionListElement.style.display = "block";

            for (var i = 0; i < guideVersions.length; i++) {
                var version = guideVersions[i];
                createVersionListItem(versionListElement, version.guideVersionLabel, version.guideVersionLink, version.selected, statusElement);
            }

            if (guideVersions.length > 6) {
                var buttons = versionListElement.getElementsByTagName("button");
                for (var j = 5; j < buttons.length; j++) {
                    buttons[j].style.display = "none";
                }

                var showAllLink = document.createElement("a");
                showAllLink.classList.add("fas", "fa-chevron-down", "more-button");
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
                if (guideVersions) {
                    var selectedVersion = guideVersions.find(version => version.selected);
                    if (selectedVersion) {
                        
                        var selectedGuideVersion = selectedVersion.guideVersionLabel;
                        if ('guideVersionNumber' in selectedVersion) {
                            selectedGuideVersion = selectedVersion.guideVersionNumber;
                        }

                        if (selectedVersion.guideVersionLabel != 'current' && selectedVersion.guideVersionLabel != 'GitHub') {
                            addToolsListItems(packageName, selectedGuideVersion, toolsListElement);
                        }

                    }
                } else {
                    if (packageVersion) {
                        addToolsListItems(packageName, packageVersion, toolsListElement);
                    }
                }

                document.getElementById("search-scope-package-name").style.display = "block";
                
                var searchTypePackageLabel = document.querySelector("label[for='search-type-package']");
                searchTypePackageLabel.textContent = 'in ' + packageName;
                searchTypePackageLabel.title = 'Search within package ' + packageName;
                var searchTypePackage = document.getElementById("search-type-package");
                searchTypePackage.removeAttribute("disabled");
                searchTypePackage.checked = true;
                var packageTextField = document.getElementById("package-text-field");
                packageTextField.value = packageName;
            } else {
                document.getElementById("search-scope-package-name").style.display = "none";
            }

            if (simplifierGuideKey) {
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
                document.getElementById("search-scope-fhir-version").style.display = "block";

                var searchTypeFHIRVersionLabel = document.querySelector("label[for='search-type-fhir-version']");
                searchTypeFHIRVersionLabel.textContent = 'in ' + currentFhirVersion.toUpperCase();
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
