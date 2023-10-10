function generateSearchUrl(document) {
    var searchQuery = document.getElementById("search-query").value;
    var searchUrl = "https://simplifier.net/search?q=" + encodeURIComponent(searchQuery);
    var searchTypePackage = document.getElementById("search-type-package");
    if (searchTypePackage.checked) {
        var packageTextField = document.getElementById("package-text-field").value;
        searchUrl += "&package=" + encodeURIComponent(packageTextField);
    }
    var searchTypeFHIRVersion = document.getElementById("search-type-fhir-version");
    if (searchTypeFHIRVersion.checked) {
        var fhirVersionTextField = document.getElementById("fhir-version-text-field").value;
        searchUrl += "&fhir=" + encodeURIComponent(fhirVersionTextField);
    }
    return searchUrl;
}

function getFhirVersions() {
    return {
        r5: {
            package: 'hl7.fhir.r5.core',
        },
        r4b: {
            package: 'hl7.fhir.r4b.core',
        },
        r4: {
            package: 'hl7.fhir.r4.core',
        },
        stu3: {
            package: 'hl7.fhir.r3.core',
        },
        dstu2: {
            package: 'hl7.fhir.r2.core',
        }
    };
}

function getVersionAndPath(url, fhirVersions) {
    let parsedUrl = new URL(url);
    let locationHostname = parsedUrl.hostname.toLowerCase();
    let locationPathParts = parsedUrl.pathname.toLowerCase().split('/');

    var currentVersion = null;
    var currentPath = null;

    if (locationHostname == 'build.fhir.org') {
        currentVersion = 'build';
        currentPath = locationPathParts.slice(1).join('/') // remove leading slash

        //TODO: When https://build.fhir.org/ig/, parse package name from footer/page title

    } else if (locationHostname == 'hl7.org' || locationHostname == 'www.hl7.org') {
        if (locationPathParts.length > 0) {
            if (locationPathParts[1] == 'fhir') {
                if (locationPathParts.length > 1) {
                    if (Object.keys(fhirVersions).includes(locationPathParts[2])) {
                        currentVersion = locationPathParts[2];
                        currentPath = 
                            locationPathParts.slice(3).join('/') // remove leading slash + fhir + version
                    } // else some other hl7.org/fhir path, not a version
                } // else root hl7.org/fhir
                
                // Root FHIR path or no version specified
                if (!currentVersion) {
                    currentVersion = 'current';
                    currentPath = locationPathParts.slice(2).join('/') // remove leading slash and fhir

                    //TODO: Try to parse package name from footer/page title
                    //TODO: Try to parse canonical from page content
                }
            } // else some other hl7.org path, not fhir
        } // else root hl7.org
    } //TODO: Add support for packages on registry.fhir.org and simplifier.net

    return [currentVersion, currentPath];
}