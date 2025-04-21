import {
    generateSearchUrl,
    getMatchingGuide,
    transformHL7packagelist,
    getHL7GuideVersions,
    showStatus
} from '../src/functions.js';
import packageRegistry from './test_data/package-registry.json' assert { type: "json" };
import usCorePackageList from './test_data/us-core-package-list.json' assert { type: "json" };
import chCorePackageList from './test_data/ch-core-package-list.json' assert { type: "json" };
import * as chai from 'chai';
const { expect } = chai;

// Simple spy implementation
function createSpy() {
    const spy = function(...args) {
        spy.called = true;
        spy.callCount++;
        spy.lastCall = args;
        return spy.returnValue;
    };
    spy.called = false;
    spy.callCount = 0;
    spy.lastCall = null;
    spy.returnValue = null;
    return spy;
}

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

        // Check if the transformed list is an object
        expect(transformedList).to.be.an('object');

        const itemUSCoreCanonical = transformedList['hl7.org/fhir/us/core'];
        expect(itemUSCoreCanonical).to.have.property('package_id');
        expect(itemUSCoreCanonical.package_id).to.equal('hl7.fhir.us.core');
        expect(itemUSCoreCanonical).to.have.property('canonical');
        expect(itemUSCoreCanonical.canonical).to.equal('http://hl7.org/fhir/us/core');
        
        const itemUSCoreBuild = transformedList['build.fhir.org/ig/HL7/US-Core'];
        expect(itemUSCoreBuild).to.have.property('package_id');
        expect(itemUSCoreBuild.package_id).to.equal('hl7.fhir.us.core');
        expect(itemUSCoreBuild).to.have.property('canonical');
        expect(itemUSCoreBuild.canonical).to.equal('http://hl7.org/fhir/us/core');
    });
});

describe("getHL7GuideVersions US core", function() {
    beforeEach(function() {
        // Mock global fetch
        const fetchSpy = createSpy();
        fetchSpy.returnValue = {
            ok: true,
            json: async () => ({
                "package-id": "hl7.fhir.us.core",
                "canonical": "http://hl7.org/fhir/us/core",
                "list": [
                    {
                        "version": "6.0.0",
                        "path": "http://hl7.org/fhir/us/core/STU6",
                        "status": "trial-use",
                        "sequence": "STU 6",
                        "current": true
                    },
                    {
                        "version": "5.0.1",
                        "path": "http://hl7.org/fhir/us/core/STU5.0.1",
                        "status": "trial-use",
                        "sequence": "STU 5.0.1"
                    }
                ]
            })
        };
        global.fetch = fetchSpy;
    });

    afterEach(function() {
        delete global.fetch;
    });

    it("should process package-list.json into guide versions", async function() {
        const guideVersions = await getHL7GuideVersions("http://hl7.org/fhir/us/core", "hl7.org/fhir/us/core/STU6", null);
        
        expect(guideVersions).to.be.an('object');
        
        const stu6Version = guideVersions['hl7.org/fhir/us/core/STU6'];
        expect(stu6Version).to.have.property('guideVersionLabel', '6.0.0 (Latest)');
        expect(stu6Version).to.have.property('guideVersionLink', 'http://hl7.org/fhir/us/core/STU6');
        
        const stu5Version = guideVersions['hl7.org/fhir/us/core/STU5.0.1'];
        expect(stu5Version).to.have.property('guideVersionLabel', '5.0.1');
        expect(stu5Version).to.have.property('guideVersionLink', 'http://hl7.org/fhir/us/core/STU5.0.1');
    });
});

describe("getHL7GuideVersions Swiss core", function() {
    beforeEach(function() {
        // Mock global fetch
        const fetchSpy = createSpy();
        fetchSpy.returnValue = {
            ok: true,
            json: async () => ({
                "package-id": "ch.fhir.ig.ch-core",
                "title": "CH Core (R4)",
                "introduction": "Core FHIR profiles for Switzerland in development by the HL7 Switzerland FHIR workgroup",
                "canonical": "http://fhir.ch/ig/ch-core",
                "category": "National Base",
                "list": [
                    {
                        "version": "6.0.0",
                        "path": "http://hl7.org/fhir/us/core/STU6",
                        "status": "trial-use",
                        "sequence": "STU 6",
                        "current": true
                    },
                    {
                        "version": "5.0.1",
                        "path": "http://hl7.org/fhir/us/core/STU5.0.1",
                        "status": "trial-use",
                        "sequence": "STU 5.0.1"
                    }
                ]
            })
        };
        global.fetch = fetchSpy;

        // Mock chrome.storage.local.get to return immediately
        global.chrome = {
            storage: {
                local: {
                    get: function(key, callback) {
                        // Mock the guide_url_list data
                        const mockGuideUrlList = {
                            'fhir.ch/ig/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            },
                            'github.com/hl7ch/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            },
                            'build.fhir.org/ig/hl7ch/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            }
                        };
                        
                        // Call callback immediately
                        callback({ guide_url_list: mockGuideUrlList });
                    },
                    set: function(data, callback) {
                        // Mock the set operation
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        };
    });

    afterEach(function() {
        delete global.fetch;
    });

    it("should not query for versions when on a non-HL7 domain", async function() {
        const guideVersions = await getHL7GuideVersions("http://fhir.ch/ig/ch-core/", "build.fhir.org/ig/hl7ch/ch-core/", null);
        // Check that fetch was not called
        expect(global.fetch.called).to.be.false;
    });
});

describe("getMatchingGuide", function() {
    beforeEach(function() {
        // Mock chrome.storage.local.get to return immediately
        global.chrome = {
            storage: {
                local: {
                    get: function(key, callback) {
                        // Mock the guide_url_list data
                        const mockGuideUrlList = {
                            'hl7.org/fhir/us/core': {
                                'package_id': 'hl7.fhir.us.core',
                                'canonical': 'http://hl7.org/fhir/us/core'
                            },
                            'build.fhir.org/ig/HL7/US-Core': {
                                'package_id': 'hl7.fhir.us.core',
                                'canonical': 'http://hl7.org/fhir/us/core'
                            }
                        };
                        
                        // Call callback immediately
                        callback({ guide_url_list: mockGuideUrlList });
                    }
                }
            }
        };

        // Mock global fetch
        global.fetch = async () => ({
            ok: true,
            json: async () => usCorePackageList
        });
    });

    afterEach(function() {
        // Clean up the mocks
        delete global.chrome;
        delete global.fetch;
    });

    it("should find a versioned US core page", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/us/core/STU6/index.html", null);
        expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
        expect(guide_details['currentFhirVersion']).to.equal('R4');
        expect(guide_details).to.have.property('guideVersions');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.not.be.undefined;
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', '6.0.0');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'http://hl7.org/fhir/us/core/STU6/index.html');

        const latestGuideVersion = guide_details.guideVersions.find(version => version.guideVersionLabel === 'latest');
        expect(latestGuideVersion).to.have.property(
            'guideVersionLink', 'http://hl7.org/fhir/us/core/index.html');
    });

    it("should find a latest US Core page", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/us/core/index.html", null);
        expect(guide_details['packageName']).to.equal('hl7.fhir.us.core');
        expect(guide_details['currentFhirVersion']).to.equal('R4');

        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.not.be.undefined;
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'latest');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionNumber', '7.0.0');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'http://hl7.org/fhir/us/core/index.html');
    });

    it("should match a guide for the core FHIR spec root", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');

        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'latest (R5)');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/');
    });

    it("should match a guide for the core FHIR spec build", async function() {
        let guide_details = await getMatchingGuide("https://build.fhir.org/");
        expect(guide_details).to.not.have.property('packageName');
        expect(guide_details).to.not.have.property('currentFhirVersion');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'current (R6)');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://build.fhir.org/');
    });

    it("should match a guide for the core FHIR spec version", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/R5");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'R5');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/r5/');
    });

    it("should match a guide for the core FHIR spec version with slash", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/R5/");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');

        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'R5');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/r5/');
    });

    it("should match a guide for the core FHIR spec version on http", async function() {
        let guide_details = await getMatchingGuide("http://hl7.org/fhir/R5");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'R5');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/r5/');
    });

    it("should match a guide for the core FHIR spec version with www", async function() {
        let guide_details = await getMatchingGuide("https://www.hl7.org/fhir/R5");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'R5');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/r5/');
    });

    it("should match a guide for the core FHIR spec version patient page", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/R5/patient.html");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'R5');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/r5/patient.html');
    });

    it("should match a guide for the core FHIR spec root patient page", async function() {
        let guide_details = await getMatchingGuide("https://hl7.org/fhir/patient.html");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r5.core');
        expect(guide_details['currentFhirVersion']).to.equal('R5');
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLabel', 'latest (R5)');
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'https://hl7.org/fhir/patient.html');
    });

    it("should not match a guide for random URL", async function() {
        let guide_details = await getMatchingGuide("https://fire.ly");
        expect(guide_details).to.be.undefined;
    });

    // FHIR Build server is not case insensitive
    it("should maintain capitalization of the path", async function() {
        let guide_details = await getMatchingGuide("https://build.fhir.org/ig/HL7/US-Core/StructureDefinition-us-core-coverage.html");
        
        const selectedGuideVersion = guide_details.guideVersions.find(version => version.selected === true);
        expect(selectedGuideVersion).to.have.property(
            'guideVersionLink', 'http://build.fhir.org/ig/HL7/US-Core/StructureDefinition-us-core-coverage.html');
    });

    // https://simplifier.net/guide/HL7-FHIR-Guide-Template/Home/FHIR-Artifacts/US-Core-Patient.page.md?version=current
    it("should match a guide for a Simplifier guide", async function() {
        let guide_details = await getMatchingGuide("https://simplifier.net/guide/HL7-FHIR-Guide-Template/Home/FHIR-Artifacts/US-Core-Patient.page.md?version=current");
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
    it("should match a package for a Simplifier package", async function() {
        let guide_details = await getMatchingGuide("https://simplifier.net/packages/hl7.fhir.r3.core/3.0.2/files/59464");
        expect(guide_details['packageName']).to.equal('hl7.fhir.r3.core');
        expect(guide_details['packageVersion']).to.equal('3.0.2');
        expect(guide_details['currentFhirVersion']).to.be.undefined;
    });

    it("should match a package without a version for a Simplifier package root", async function() {
        let guide_details = await getMatchingGuide("https://simplifier.net/packages/hl7.fhir.r3.core");
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

describe("getMatchingGuideNonHL7", function() {

    beforeEach(function() {

        // Mock chrome.storage.local.get to return immediately
        global.chrome = {
            storage: {
                local: {
                    get: function(key, callback) {
                        // Mock the guide_url_list data
                        const mockGuideUrlList = {
                            'fhir.ch/ig/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            },
                            'github.com/hl7ch/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            },
                            'build.fhir.org/ig/hl7ch/ch-core': {
                                'package_id': 'hl7.fhir.ch.core',
                                'canonical': 'http://fhir.ch/ig/ch-core'
                            }
                        };
                        
                        // Call callback immediately
                        callback({ guide_url_list: mockGuideUrlList });
                    },
                    set: function(data, callback) {
                        // Mock the set operation
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        };

        // Mock global fetch
        global.fetch = createSpy();
        global.fetch.returnValue = {
            ok: true,
            json: async () => chCorePackageList
        };
    });

    afterEach(function() {
        // Clean up the mocks
        delete global.chrome;
        delete global.fetch;
    });

    

    it("should match a guide for a FHIR Build server", async function() {
        let guide_details = await getMatchingGuide("https://build.fhir.org/ig/hl7ch/ch-core/something");

        // For non-HL7 domains, fetch should not be called when domain does not match
        expect(global.fetch.called).to.be.false;

        expect(guide_details['packageName']).to.equal('hl7.fhir.ch.core');

        // Extra path should be added for FHIR Build servers
        expect(guide_details['guideVersions']).to.be.an('array');
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'current')).to.exist;
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'current')).to.have.property('guideVersionLink', 'https://build.fhir.org/ig/hl7ch/ch-core/something');
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'GitHub')).to.exist;
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'GitHub')).to.have.property('guideVersionLink', 'https://github.com/hl7ch/ch-core');
    });

    it("should match a guide for a GitHub repository", async function() {
        let guide_details = await getMatchingGuide("https://github.com/hl7ch/ch-core/something");

        // For non-HL7 domains, fetch should not be called when domain does not match
        expect(global.fetch.called).to.be.false;

        expect(guide_details['packageName']).to.equal('hl7.fhir.ch.core');

        // Extra path should be ignored for GitHub repositories
        expect(guide_details['guideVersions']).to.be.an('array');
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'current')).to.exist;
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'current')).to.have.property('guideVersionLink', 'https://build.fhir.org/ig/hl7ch/ch-core');
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'GitHub')).to.exist;
        expect(guide_details['guideVersions'].find(v => v.guideVersionLabel === 'GitHub')).to.have.property('guideVersionLink', 'https://github.com/hl7ch/ch-core');
    });

    it("should match a guide for the canonical URL", async function() {
        let guide_details = await getMatchingGuide("http://fhir.ch/ig/ch-core/");

        // For non-HL7 domains, fetch should only be called when domain matches
        expect(global.fetch.called).to.be.true;

        expect(guide_details['packageName']).to.equal('hl7.fhir.ch.core');
    });
    
});


describe("updateUI", function() {
    // TODO

    // Mock document
    // Mock getMatchingGuide
    // See if right versions are added, right search elements are populated

});