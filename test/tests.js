import {
    generateSearchUrl,
    getMatchingGuide,
    fetchAndStoreData,
    transformHL7packagelist
} from '../src/functions.js';
import packageRegistry from './test_data/package-registry.json' assert { type: "json" };
import {expect} from 'chai';

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
                } else if (id === "search-type-guide") {
                    return { checked: false };
                }
            }
        };
  
        // Call the function being tested
        var searchUrl = generateSearchUrl(testDocument);

        // Check the result
        expect(searchUrl).to.equal("https://simplifier.net/search?q=test&package=hl7.fhir.r4.core");
    });

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
                } else if (id === "search-type-guide") {
                    return { checked: false };
                }
            }
        };
  
        // Call the function being tested
        var searchUrl = generateSearchUrl(testDocument);

        // Check the result
        expect(searchUrl).to.equal("https://simplifier.net/search?q=test&fhir=r4");
    });

    // TODO generateSearchUrl-simplifierGuideKey

});

describe("downloadData", function() {

    it("should check for a local copy of the HL7 guide list and if it finds one return it", function() {
        // fetchDataFromStorage;
    });

    it("should process the hl7_package_list to a guides list", function() {
        // transformHL7packagelist;
    });

    it("should download the package list and process it", function() {
        // TODO Mock fetch first
        // fetchAndStoreData();
    });

});

describe("transformHL7packagelist", function() {
    it("should transform the package registry list correctly", function() {
        const transformedList = transformHL7packagelist(packageRegistry);

        // Check if the transformed list is an array
        expect(transformedList).to.be.an('object');

        const itemUSCoreCanonical = transformedList['http://hl7.org/fhir/us/core'];
        console.log(itemUSCoreCanonical);
        expect(itemUSCoreCanonical).to.have.property('package_id');
        expect(itemUSCoreCanonical.package_id).to.equal('hl7.fhir.us.core');

        const itemUSCoreBuild = transformedList['http://build.fhir.org/ig/HL7/US-Core'];
        console.log(itemUSCoreBuild);
        expect(itemUSCoreBuild).to.have.property('package_id');
        expect(itemUSCoreBuild.package_id).to.equal('hl7.fhir.us.core');
    });
});

describe("getMatchingGuide", function() {
        
        it("should find a versioned US core page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/us/core/STU6/index.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
            expect(guide_details['currentFhirVersion']).to.equal('R4');
            expect(guide_details).to.have.property('guideVersions');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', '6.0.0 (STU6)');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'http://hl7.org/fhir/us/core/STU6/index.html');

            const latestGuideVersion = guide_details.guideVersions.find(version => version.guideVersionLabel === 'latest');
            expect(latestGuideVersion).to.have.property(
                'guideVersionLink', 'http://hl7.org/fhir/us/core/index.html');
        });

        it("should find a latest US Core page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/us/core/index.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
            expect(guide_details['currentFhirVersion']).to.equal('R4');

            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'latest');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionNumber', '6.1.0');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'http://hl7.org/fhir/us/core/index.html');
        });

        it("should match a guide for the core FHIR spec root", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');

            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'latest (R5)');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/');
        });

        it("should match a guide for the core FHIR spec build", function() {
            let guide_details = getMatchingGuide("https://build.fhir.org/");
            expect(guide_details).to.not.have.property('packageName');
            expect(guide_details).to.not.have.property('currentFhirVersion');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'current (R6)');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://build.fhir.org/');
        });

        it("should match a guide for the core FHIR spec version", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'R5');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/r5/');
        });

        it("should match a guide for the core FHIR spec version with slash", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5/");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');

            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'R5');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/r5/');
        });

        it("should match a guide for the core FHIR spec version on http", function() {
            let guide_details = getMatchingGuide("http://hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'R5');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/r5/');
        });

        it("should match a guide for the core FHIR spec version with www", function() {
            let guide_details = getMatchingGuide("https://www.hl7.org/fhir/R5");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'R5');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/r5/');
        });

        it("should match a guide for the core FHIR spec version patient page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/R5/patient.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'R5');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/r5/patient.html');
        });

        it("should match a guide for the core FHIR spec root patient page", function() {
            let guide_details = getMatchingGuide("https://hl7.org/fhir/patient.html");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
            expect(guide_details['currentFhirVersion']).to.equal('R5');
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'latest (R5)');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://hl7.org/fhir/patient.html');
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

            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', '0.1.0');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'http://hl7.org/fhir/extensions/0.1.0/StructureDefinition-alternate-codes.html');
        });

        // https://simplifier.net/guide/HL7-FHIR-Guide-Template/Home/FHIR-Artifacts/US-Core-Patient.page.md?version=current
        it("should match a guide for a Simplifier guide", function() {
            let guide_details = getMatchingGuide("https://simplifier.net/guide/HL7-FHIR-Guide-Template/Home/FHIR-Artifacts/US-Core-Patient.page.md?version=current");
            expect(guide_details['packageName']).to.be.undefined;
            expect(guide_details['currentFhirVersion']).to.be.undefined;
            
            const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLabel', 'current');
            expect(selectedGuideVersion).to.have.property(
                'guideVersionLink', 'https://simplifier.net/guide/HL7-FHIR-Guide-Template?version=current');

            const latestGuideVersion = guide_details.guideVersions.find(version => version.guideVersionLabel === 'Recommended');
            expect(latestGuideVersion).to.have.property(
                'guideVersionLink', 'https://simplifier.net/guide/HL7-FHIR-Guide-Template');
            
            const allGuideVersions = guide_details.guideVersions.find(version => version.guideVersionLabel === 'All versions');
            expect(allGuideVersions).to.have.property(
                'guideVersionLink', 'https://simplifier.net/published-guide/HL7-FHIR-Guide-Template/versions');
        });

        // https://simplifier.net/packages/hl7.fhir.r3.core/3.0.2/files/59464
        it("should match a package for a Simplifier package", function() {
            let guide_details = getMatchingGuide("https://simplifier.net/packages/hl7.fhir.r3.core/3.0.2/files/59464");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r3.core');
            expect(guide_details['packageVersion']).to.equal('3.0.2');
            expect(guide_details['currentFhirVersion']).to.be.undefined;
        });

        it("should match a package without a version for a Simplifier package root", function() {
            let guide_details = getMatchingGuide("https://simplifier.net/packages/hl7.fhir.r3.core");
            expect(guide_details['packageName']).to.equal('hl7.fhir.r3.core');
            expect(guide_details['packageVersion']).to.be.undefined;
            expect(guide_details['currentFhirVersion']).to.be.undefined;
        });

        // // https://registry.fhir.org/package/fhir.test.data.r2|0.2.1
        // it("should match a package for a FHIR Registry package", function() {
        //     let guide_details = getMatchingGuide("https://registry.fhir.org/package/fhir.test.data.r2|0.2.1");
        //     expect(guide_details['packageName']).to.equal('fhir.test.data.r2');
        //     expect(guide_details['packageVersion']).to.equal('0.2.1');
        //     expect(guide_details['currentFhirVersion']).to.be.undefined;
        // });
});

describe("updateUI", function() {
    // TODO

    // Mock document
    // Mock getMatchingGuide
    // See if right versions are added, right search elements are populated

});