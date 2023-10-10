// popup.js
console.log('Firely FHIR Extension: This is where popup.js logs to the console.');

// Add listener to the search field
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchUrl = generateSearchUrl(document);
    chrome.tabs.update({url: searchUrl});
});

document.addEventListener("DOMContentLoaded", function(event) {
    var searchQuery = document.getElementById("search-query");
    searchQuery.focus();
});

// Get FHIR Version and Path from current tab
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    
    var fhirVersions = getFhirVersions();
    
    var [currentVersion, currentPath] = getVersionAndPath(tabs[0].url, fhirVersions);

    // If we have a version, show the version list switcher
    if (currentVersion) {
        console.log('FHIR version: ' + currentVersion);
        console.log('FHIR path: ' + currentPath);

        var versionList = document.getElementById("version-list");

        function createVersionListItem(version, url) {
            var versionListButton = document.createElement("button");
            versionListButton.type = "button";
            versionListButton.textContent = version.toUpperCase();
            versionListButton.classList.add("yellow-button"); // add yellow-button class
            if (version === currentVersion) {
                versionListButton.classList.add("selected"); // add selected class
            }
            versionListButton.addEventListener("click", function(event) {
                chrome.tabs.update({url: url});
            });
            versionList.appendChild(versionListButton);
        }
    
        createVersionListItem('build', 'https://build.fhir.org/' + currentPath);
        createVersionListItem('current', 'https://hl7.org/fhir/' + currentPath);
    
        for (var version in fhirVersions) {
            if (fhirVersions.hasOwnProperty(version)) {
                createVersionListItem(version, 'https://hl7.org/fhir/' + version + '/' + currentPath);
            }
        }

        if (fhirVersions[currentVersion]) {
            var searchScope = document.getElementById("search-scope");
            searchScope.style.display = "block";
            
            var searchTypePackageLabel = document.querySelector("label[for='search-type-package']");
            searchTypePackageLabel.textContent = 'In ' + fhirVersions[currentVersion].package;
            var searchTypePackage = document.getElementById("search-type-package");
            searchTypePackage.removeAttribute("disabled");
            searchTypePackage.checked = true;
            var packageTextField = document.getElementById("package-text-field");
            packageTextField.value = fhirVersions[currentVersion].package;
            
            var searchTypeFHIRVersionLabel = document.querySelector("label[for='search-type-fhir-version']");
            searchTypeFHIRVersionLabel.textContent = 'In ' + currentVersion.toUpperCase();
            var searchTypeFHIRVersion = document.getElementById("search-type-fhir-version");
            searchTypeFHIRVersion.removeAttribute("disabled");
            var fhirVersionTextField = document.getElementById("fhir-version-text-field");
            fhirVersionTextField.value = currentVersion;
        }
        
    } else {
        console.log('Unknown location');
    }
});
  