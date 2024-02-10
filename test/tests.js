import {
    generateSearchUrl,
    getMatchingGuide,
} from '../src/functions.js';

describe("generateSearchUrl-package", function() {

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
        expect(searchUrl).to.equal("https://simplifier.net/search?q=test&package=hl7.fhir.r4.core");
    });
});

describe("generateSearchUrl-fhirVersion", function() {

    it("should generate the correct search URL when searchTypePackage is checked and package-text-field is hl7.fhir.r4.core", function() {
        
        // Mock testDocument
        var testDocument = {
            getElementById: function(id) {
                if (id === "search-query") {
                    return { value: "test" };
                } else if (id === "search-type-package") {
                    return { checked: false };
                } else if (id === "fhir-version-text-field") {
                    return { value: "r4" };
                } else if (id === "search-type-fhir-version") {
                    return { checked: true };
                }
            }
        };
  
        // Call the function being tested
        var searchUrl = generateSearchUrl(testDocument);

        // Check the result
        expect(searchUrl).to.equal("https://simplifier.net/search?q=test&fhir=r4");
    });
});

describe("getMatchingGuide", function() {
        
        it("should find a versioned US core page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/us/core/STU6/index.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
            expect(guide_details['currentFhirVersion']).to.equal('R4');
            expect(guide_details['path']).to.equal('index.html');
        });

        it("should find a latest US Core page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/us/core/index.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
            expect(guide_details['currentFhirVersion']).to.equal('R4');
            expect(guide_details['path']).to.equal('index.html');
        });

        it("should match a guide for the core FHIR spec root", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec build", function() {
            let guide_details = getMatchingGuide("https://build.fhir.org/");
            expect(guide_details).to.not.have.property('packageName');
            expect(guide_details).to.not.have.property('currentFhirVersion');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec version", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec version with slash", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5/");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec version on http", function() {
            let guide_details = getMatchingGuide("http://hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec version with www", function() {
            let guide_details = getMatchingGuide("https://www.hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('');
        });

        it("should match a guide for the core FHIR spec version patient page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5/patient.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('patient.html');
        });

        it("should match a guide for the core FHIR spec root patient page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/patient.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('patient.html');
        });

        it("should not match a guide for random URL", function() {
            let guide_details = getMatchingGuide("https://fire.ly");
            expect(guide_details).to.be.undefined;
        });

        // FHIR Build server is not case insensitive
        it("should maintain capitalization of the path", function() {
            let guide_details = getMatchingGuide("http://hl7.org/fhir/extensions/0.1.0/StructureDefinition-alternate-codes.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.uv.extensions');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            expect(guide_details['path']).to.equal('StructureDefinition-alternate-codes.html');

        });
});
