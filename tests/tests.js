describe("generateSearchUrl", function() {

    it("should generate the correct search URL when searchTypePackage is checked and package-text-field is hl7.fhir.r4.core", function() {
        
        // Mock testDocument
        var testDocument = {
            getElementById: function(id) {
                if (id === "search-query") {
                    return { value: "test" };
                } else if (id === "search-type-package") {
                    return { checked: true };
                } else if (id === "package-text-field") {
                    return { value: "hl7.fhir.r4.core" };
                } else if (id === "search-type-fhir-version") {
                    return { checked: false };
                }
            }
        };
  
        // Call the function being tested
        var searchUrl = generateSearchUrl(testDocument);

        // Check the result
        expect(searchUrl).toBe("https://simplifier.net/search?q=test&package=hl7.fhir.r4.core");
    });
});

describe("getVersionAndPath", function() {

    var fhirVersions = getFhirVersions();

    it("should get the right version and path for build root HTTPS URL", function() {

        url = "https://build.fhir.org"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("build");
        expect(currentPath).toBe("");
    })

    it("should get the right version and path for build root HTTP URL", function() {

        url = "http://build.fhir.org"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("build");
        expect(currentPath).toBe("");
    })

    it("should get the right version and path for build root URL with slash", function() {

        url = "https://build.fhir.org/"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("build");
        expect(currentPath).toBe("");
    })

    it("should get the right version and path for build sub URL", function() {
        url = "https://build.fhir.org/patient.html"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("build");
        expect(currentPath).toBe("patient.html");
    })

    it("should get the right version and path for random URL", function() {
        url = "https://fire.ly"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe(null);
        expect(currentPath).toBe(null);
    })

    it("should get the right version and path for current sub URL", function() {
        url = "https://hl7.org/fhir/patient.html"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("current");
        expect(currentPath).toBe("patient.html");
    })

    it("should get the right version and path for current sub URL", function() {
        url = "https://hl7.org/fhir/r4/patient.html"
        var [currentVersion, currentPath] = getVersionAndPath(url, fhirVersions);
        expect(currentVersion).toBe("r4");
        expect(currentPath).toBe("patient.html");
    })

});