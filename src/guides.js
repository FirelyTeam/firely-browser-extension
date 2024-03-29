export var guides = {
    "hl7.fhir.ca.baseline": {
        "url": "http://hl7.org/fhir/ca/baseline",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7-Canada/ca-baseline",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CanadianBaseline",
        "title": "Canadian Baseline",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7-Canada/ca-baseline"
    },
    "nz.central.ihub.ig": {
        "url": "https://fhir.org.nz/ig/tewhatuora/crih-fhir-ig",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/tewhatuora/centralRegion-integrationHub-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CRIntegrationHub",
        "title": "Te Whatu Ora, Central Region Integration Hub",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/tewhatuora/centralRegion-integrationHub-ig"
    },
    "tewhatuora.fhir.primarycare-acquisition": {
        "url": "https://standards.digital.health.nz",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/tewhatuora/fhir-primary-care-acquisition",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "primarycareacquisition",
        "title": "Primary care data acquisition API",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/tewhatuora/fhir-primary-care-acquisition"
    },
    "tewhatuora.fhir.nzps": {
        "url": "https://standards.digital.health.nz",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/tewhatuora/fhir-nzps",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "nzps",
        "title": "FHIR New Zealand Patient Summary IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/tewhatuora/fhir-nzps"
    },
    "hl7.fhir.us.ohsuhypertensionig": {
        "url": "http://fhir.org/guides/ohsuhypertensionig",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/OHSUCMP/htnu18ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ohsuhypertensionig",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/OHSUCMP/htnu18ig"
    },
    "ihe.de.iti.xds-vs": {
        "url": "http://www.ihe-d.de/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE-Germany/ITI.XDS.VS",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_DE_ITI_XDS_VS",
        "title": "IHE Germany - Value Sets for XDS",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/IHE-Germany/ITI.XDS.VS"
    },
    "hl7.fhir.au.base": {
        "url": "http://hl7.org.au/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/robeastwood-agency/au-fhir-base",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "AUBaseImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "4.1.1",
        "repo": "https://github.com/robeastwood-agency/au-fhir-base"
    },
    "hl7.fhir.uv.smart-app-launch": {
        "url": "http://hl7.org/fhir/smart-app-launch",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/smart-app-launch",
                "status": "ci-build"
            },
            {
                "version": "2.2.0-ballot",
                "path": "http://hl7.org/fhir/smart-app-launch/2024Jan",
                "status": "ballot",
                "sequence": "STU 2.2",
                "fhirversion": "4.0.1",
                "date": "2023-12-19",
                "desc": "Surface branding information for endpoints and organizations. Enhance fhirContext to support canonical and identifier references."
            },
            {
                "version": "2.1.0",
                "path": "http://hl7.org/fhir/smart-app-launch/STU2.1",
                "status": "trial-use",
                "sequence": "STU 2.1",
                "fhirversion": "4.0.1",
                "date": "2023-04-18",
                "current": true,
                "desc": "Allow for more detailed fhirContext when launching apps. Allow PractitionerRole for fhirUser Document absolute URL requirement for smart-configuration links. Remove note on dynamic ports in redirect_uri. Add experimental support for SMART App State Persistence. Add Task profiles for describing app launch."
            },
            {
                "version": "2.1.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/smart-app-launch/2023Jan",
                "status": "draft",
                "sequence": "STU 2.1",
                "fhirversion": "4.0.1",
                "desc": "Allow for more detailed fhirContext when launching apps. Allow PractitionerRole for fhirUser Document absolute URL requirement for smart-configuration links. Remove note on dynamic ports in redirect_uri. Add experimental support for SMART App State Persistence. Add Task profiles for describing app launch."
            },
            {
                "version": "2.0.0",
                "descmd": "STU 2: The SMART App Launch v1 IG has been widely adopted for clinician- and patient-facing app integration into EHRs and other FHIR data systems. Based on community feedback, the [Argonaut Project](https://confluence.hl7.org/display/AP/Argonaut+Project+Home) has undertaken a 2020 effort to revise and improve the SMART App Launch IG. A key area of focus in adding support for `granular permissions,` e.g. to provide access to resources at the category level in addition to the type level. This would allow apps to request narrower access, like `all vital signs` rather than `all observations.`\n\nEnhancements and Clarifications to the SMART App Launch specification (see Jira change request [FHIR-30578](https://jira.hl7.org/browse/FHIR-30578) for a log  of changes included in the ballot):\n\n- Clarification on launch context scope\n- New scope syntax for granular permissions\n- `POST`-based authorization\n- Addition of PKCE to authorization requirements\n- Profile token introspection\n- Guidance for communicating permissions to end users\n- Update discovery properties to support these changes.\n\nSeveral new pages have been added to this version of SMART App Launch Implementation Guide. A new *Overview* page has been been added to introduce the reader to the guide. The *Backend Services* pages has been moved from [FHIR Bulk Data Access](http://hl7.org/fhir/uv/bulkdata/) to consolidate the patterns for client authorization.  There are new pages to define two patterns for client authentication -*Asymmetric (public key)* and *Symmetric (shared secret)*.  The *Token Introspection* page documents how to support token introspection and there is and informative *Best Practices* page.  Finally, the  *Launch and Authorization* page has been extensively rewritten to make it clearer, and more reader friendly.",
                "desc": "STU 2: Revisions based on community feedback after wide adoption - see below for further details",
                "path": "http://hl7.org/fhir/smart-app-launch/STU2",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "date": "2021-11-26"
            },
            {
                "version": "1.1.0",
                "descmd": "STU 2 Ballot #1: The SMART App Launch v1 IG has been widely adopted for clinician- and patient-facing app integration into EHRs and other FHIR data systems. Based on community feedback, the [Argonaut Project](https://confluence.hl7.org/display/AP/Argonaut+Project+Home) has undertaken a 2020 effort to revise and improve the SMART App Launch IG. A key area of focus in adding support for `granular permissions,` e.g. to provide access to resources at the category level in addition to the type level. This would allow apps to request narrower access, like `all vital signs` rather than `all observations.` \nEnhancements and Clarifications to the SMART App Launch specification (see Jira change request [FHIR-30578](https://jira.hl7.org/browse/FHIR-30578) for a log  of changes included in the ballot):\n- Clarification on launch context scopes\n - New scope syntax for granular permissions\n - `POST`-based authorization\n - Addition of PKCE to authorization requirements\n - Profile token introspection\n - Guidance for communicating permissions to end users\n - Update discovery properties to support these changes",
                "path": "http://hl7.org/fhir/smart-app-launch/2021May",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "date": "2021-04-16"
            },
            {
                "version": "1.0.0",
                "fhirversion": "3.0.1",
                "date": "2018-11-13",
                "desc": "Release 1.0.0 (STU)",
                "path": "http://hl7.org/fhir/smart-app-launch/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1"
            },
            {
                "version": "0.8.0",
                "fhirversion": "3.0.1",
                "date": "2017-07-29",
                "desc": "STU Ballot",
                "path": "http://hl7.org/fhir/smart-app-launch/0.8.0",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "SmartAppLaunch",
        "title": "SMART App Launch",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.2.0",
        "repo": "https://github.com/bvdh/smart-app-launch-bvdh"
    },
    "ch.fhir.ig.ch-core": {
        "url": "http://fhir.ch/ig/ch-core",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-core",
                "status": "ci-build"
            },
            {
                "version": "4.0.1",
                "path": "http://fhir.ch/ig/ch-core/4.0.1",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2023-12-28",
                "current": true,
                "desc": "HL7 Switzerland STU 4",
                "descmd": "HL7 Switzerland STU 4",
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "4.0.0",
                        "path": "ch.fhir.ig.ch-core#4.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "4.0.0-ballot",
                "path": "http://fhir.ch/ig/ch-core/4.0.0-ballot",
                "status": "ballot",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2023-06-27",
                "desc": "HL7 Switzerland STU 4",
                "changes": "changelog.html"
            },
            {
                "version": "3.0.0",
                "path": "http://fhir.ch/ig/ch-core/3.0.0",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-12-21",
                "desc": "HL7 Switzerland STU 3",
                "changes": "changelog.html"
            },
            {
                "version": "2.1.0",
                "desc": "HL7 Switzerland STU 3 Ballot",
                "path": "http://fhir.ch/ig/ch-core/2.1.0",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-07-06"
            },
            {
                "version": "2.0.0",
                "date": "2021-04-24",
                "desc": "HL7 Switzerland STU 2",
                "path": "http://fhir.ch/ig/ch-core/2.0.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.2.0",
                "date": "2021-02-12",
                "desc": "HL7 Switzerland STU 2 Ballot",
                "path": "http://fhir.ch/ig/ch-core/1.2.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2020-04-21",
                "desc": "HL7 Switzerland STU 1 Final Publication",
                "path": "http://fhir.ch/ig/ch-core/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2020-02-14",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-core/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_Core",
        "title": "CH Core (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "5.0.0-ci-build",
        "repo": "https://github.com/ralych/ch-core"
    },
    "hl7.fhir.uv.playground": {
        "url": "http://healthintersections.com.au/fhir/playground",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HealthIntersections/fhir-playground",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "FHIRToolExtensionsIG",
        "title": "FHIR Tooling Extensions IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HealthIntersections/fhir-playground"
    },
    "adha.template.fhir": {
        "url": "http://ns.electronichealth.net.au/fhir/Template/adha.template.fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/AuDigitalHealth/adha-template-fhir",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.2",
        "repo": "https://github.com/AuDigitalHealth/adha-template-fhir"
    },
    "au.digitalhealth.stu3.medicare-records": {
        "url": "http://ns.electronichealth.net.au/ci/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/AuDigitalHealth/ci-medicare-records",
                "fhirversion": "3.0.2"
            }
        ],
        "name": "ADHAMedicareRecords",
        "title": "Australian Digital Health Agency Medicare Records FHIR Implementation Guide",
        "fhirversion_latest": "3.0.2",
        "current_version": "2.2.0-ci-build",
        "repo": "https://github.com/AuDigitalHealth/ci-medicare-records"
    },
    "adha.template.base": {
        "url": "http://ns.electronichealth.net.au/fhir/Template/adha.template.base",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/AuDigitalHealth/adha-template-base",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.2",
        "repo": "https://github.com/AuDigitalHealth/adha-template-base"
    },
    "au.digitalhealth.r4": {
        "url": "http://ns.electronichealth.net.au/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/AuDigitalHealth/ci-fhir-r4",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ADHAFHIR",
        "title": "Australian Digital Health Agency FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.2.0-ci-build",
        "repo": "https://github.com/AuDigitalHealth/ci-fhir-r4"
    },
    "hl7.fhir.au.pd": {
        "url": "http://hl7.org.au/fhir/pd",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/AuDigitalHealth/au-fhir-pd",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "AUProviderDirectoryImplementationGuide",
        "title": "AU Provider Directory Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/AuDigitalHealth/au-fhir-pd"
    },
    "smart.who.int.trust": {
        "url": "http://smart.who.int/trust",
        "versions": [
            {
                "version": "current",
                "path": "http://worldhealthorganization.github.io/smart-trust",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://smart.who.int/trust/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2024-01-29",
                "current": true,
                "desc": "First stable release"
            }
        ],
        "name": "trust",
        "title": "WHO SMART Trust",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/ritikarawlani/smart-trust"
    },
    "hl7.fhir.it.dossierpharma": {
        "url": "http://hl7.it/fhir/dossierPharma",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-it/dossier-pharma",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7ITDossierPharma",
        "title": "HL7 Italia Dossier Farmaceutico FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-it/dossier-pharma"
    },
    "hl7.fhir.it.base": {
        "url": "http://hl7.it/fhir",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://hl7.it/fhir/build/base",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-06-30",
                "desc": "Initial Public Comment ballot (Jun 2020 Ballot)",
                "path": "http://hl7.it/fhir/base/2020-06",
                "status": "ballot",
                "sequence": "Public Comment 1",
                "fhirversion": "4.0.1",
                "current": true
            }
        ],
        "name": "HL7ITFhirBase",
        "title": "HL7 Italia FHIR Implementation Guide (base)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.1",
        "repo": "https://github.com/hl7-it/base"
    },
    "hl7.fhir.it.terminology": {
        "url": "http://terminology.hl7.it",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-it/terminology",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7ITTerminology",
        "title": "HL7 Italia Terminologies",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/hl7-it/terminology"
    },
    "hl7.fhir.it.lab-report": {
        "url": "http://hl7.it/fhir/lab-report",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7-it/lab-report",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.2.0",
                "path": "http://hl7.it/fhir/lab-report/0.2.0",
                "status": "trial-use",
                "sequence": "Release 1",
                "fhirversion": "4.0.1",
                "date": "2024-03-08",
                "current": true,
                "desc": "This is the Edition 1 STU 1 release"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.it/fhir/lab-report/0.1.0",
                "status": "ballot",
                "sequence": "Release 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-11",
                "desc": "This is the June 2023 STU ballot version."
            }
        ],
        "name": "HL7ITLabReport",
        "title": "HL7 FHIR Implementation Guide Laboratory Report",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/hl7-it/lab-report"
    },
    "fhir.nachc.hiv-cds": {
        "url": "http://fhir.org/guides/nachc/hiv-cds",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/hiv-cds",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HIV_NACHC",
        "title": "HIV Screening Clinical Guidelines Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/cqframework/hiv-cds"
    },
    "fhir.cdc.opioid-cds-r4": {
        "url": "http://fhir.org/guides/cdc/opioid-cds",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/opioid-cds-r4",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Opioid_CDC",
        "title": "2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "2022.1.0",
        "repo": "https://github.com/cqframework/opioid-cds-r4"
    },
    "hl7.fhir.uv.cpg.opioids": {
        "url": "http://hl7.org/fhir/uv/cpg/opioids",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cpg-example-opioids",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CPGOpioidPrescribingGuidelineExamples",
        "title": "CPG Opioid Prescribing Guideline Examples",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/cqframework/cpg-example-opioids"
    },
    "hl7.fhir.uv.cpg.hepb": {
        "url": "http://hl7.org/fhir/uv/cpg/hepb",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cpg-example-hepb",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CPGHepatitisBVaccinationExample",
        "title": "Clinical Practice Guidelines Example Implmentation Guide - Hepatitis B Vaccination",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/cqframework/cpg-example-hepb"
    },
    "hl7.fhir.uv.cpg.anthrax": {
        "url": "http://hl7.org/fhir/uv/cpg/anthrax",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cpg-example-anthrax",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CPGExampleAnthraxPostExposure",
        "title": "Clinical Practice Guidelines Example Implementation Guide - Anthrax Post-Exposure Prophylaxis",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/cqframework/cpg-example-anthrax"
    },
    "hl7.fhir.uv.cpg.antenatalcare": {
        "url": "http://hl7.org/fhir/uv/cpg/antenatalcare",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cpg-example-anc",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CPGExampleAntenatalCareGuidelines",
        "title": "Clinical Practice Guidelines Example Implementation Guide - Antenatal Care Guidelines",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/cqframework/cpg-example-anc"
    },
    "example.fhir.uv.mycontentig": {
        "url": "http://somewhere.org/fhir/uv/mycontentig",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/sample-content-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "YourComputableMyContentIGNameHere",
        "title": "Your User Friendly Name for MyContentIG Here",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.4.0",
        "repo": "https://github.com/cqframework/sample-content-ig"
    },
    "cqf.fhir.cds4cpm": {
        "url": "http://fhir.org/guides/cqf/cds4cpm",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cds4cpm",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CDS4CPM",
        "title": "Clinical Decision Support for Chronic Pain Management and Shared Decision-Making IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/cqframework/cds4cpm"
    },
    "hl7.fhir.uv.cpg.ckd": {
        "url": "http://fhir.org/fhir/uv/cpg/ckd",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cpg-example-ckd",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CPGChronicKidneyDiseaseExamples",
        "title": "Clinical Practice Guidelines Example Implementation Guide - Chronic Kidney Disease",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/cqframework/cpg-example-ckd"
    },
    "fhir.cqf.us.common": {
        "url": "http://fhir.org/guides/cqf/us/common",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cqframework/cqf-us",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CQFUSCommon",
        "title": "Clinical Quality Framework Common FHIR Assets (US-Based)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/cqframework/cqf-us"
    },
    "ch.fhir.ig.ch-emed-epr": {
        "url": "https://fhir.ch/ig/ch-emed-epr",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/CARA-ch/ch-emed-epr/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://fhir.ch/ig/ch-emed-epr/1.0.0",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2024-01-26",
                "current": true,
                "desc": "CARA",
                "descmd": "FHIR eMedication exchange formats for the implementation effort of CARA within its EPR community",
                "changes": "changelog.html",
                "sub-packages": [
                    "r4"
                ]
            }
        ],
        "name": "ChEmedEpr",
        "title": "CH EMED EPR",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/CARA-ch/ch-emed-epr"
    },
    "hl7.eu.fhir.gh": {
        "url": "http://hl7.eu/fhir/ig/gravitate-health",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Gravitate-Health/hackathon",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "GhHackacthonImplementationGuide",
        "title": "Gravitate Health Hackathon FHIR Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/Gravitate-Health/hackathon"
    },
    "fhir.hrsa.uds-plus": {
        "url": "http://fhir.org/guides/hrsa/uds-plus",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/drajer-health/uds-plus",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.1",
                "path": "http://fhir.org/guides/hrsa/uds-plus/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-01",
                "current": true,
                "desc": "This UDS+ IG provides the ability for a FQHC to report UDS+ data to HRSA.",
                "changes": "changes.html"
            }
        ],
        "name": "UdsPlusFhirIg",
        "title": "HRSA 2023 Uniform Data System (UDS) Patient Level Submission (PLS) (UDS+) FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/drajer-health/uds-plus"
    },
    "who.fhir.anc-cds": {
        "url": "http://fhir.org/guides/who/anc-cds",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/mozzy11/smart-hiv",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ANCCDS",
        "title": "SMART WHO HIV Implmementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/mozzy11/smart-hiv"
    },
    "who.fhir.hiv": {
        "url": "http://worldhealthorganization.github.io/smart-hiv",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/mozzy11/smart-hiv",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "HIV",
        "title": "SMART WHO HIV Implmementation Guide",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/mozzy11/smart-hiv"
    },
    "fhir.eom": {
        "url": "https://globalalliantinc.com/enhancing-oncology-model",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/FirelyTeam/enhancing-oncology-model-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "eom",
        "title": "Enhancing Oncology Model",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/FirelyTeam/enhancing-oncology-model-ig"
    },
    "ch.chmed.emediplan": {
        "url": "http://chmed.emediplan.ch/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/pjolo/test",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CHMED",
        "title": "CHMED Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ci-build",
        "repo": "https://github.com/pjolo/test"
    },
    "fhir.example": {
        "url": "http://example.org",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/pjolo/ExampleIG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ExampleIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/pjolo/ExampleIG"
    },
    "hl7.at.fhir.template": {
        "url": "http://fhir.org/templates/hl7.at.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7Austria/at-fhir-ig-template/",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.4.0",
                "path": "http://fhir.org/templates/hl7.at.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.3.0",
                "path": "http://fhir.org/templates/hl7.at.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.2.0",
                "path": "http://fhir.org/templates/hl7.at.fhir.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.1.0",
                "path": "http://fhir.org/templates/hl7.at.fhir.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.0.1",
                "desc": "First release",
                "path": "http://fhir.org/templates/hl7.at.fhir.template/0.0.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-10-04"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.1",
        "repo": "https://github.com/HL7Austria/at-fhir-ig-template"
    },
    "patient.clinical.trial.matching": {
        "url": "http://mcodeinitiative.org/codex/us/patient.clinical.trial.matching",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/standardhealth/fsh-pct",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DRAFTCodeXImplementationGuideIntegratedTrialMatchingforCancerPatientsandProviders",
        "title": "DRAFT - CodeX Implementation Guide: Integrated Trial Matching for Cancer Patients and Providers",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/standardhealth/fsh-pct"
    },
    "hl7.fhir.us.ctcae": {
        "url": "http://hl7.org/fhir/us/ctcae",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/standardhealth/fsh-ae",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7FHIRImplementationGuideCTCAdverseEventsRelease1USRealmSTU1",
        "title": "HL7 FHIR Implementation Guide: Common Terminology Criteria (CTC) Adverse Events Release 1 - DRAFT",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/standardhealth/fsh-ae"
    },
    "au.csiro.fhir.logical-models": {
        "url": "https://aehrc.csiro.au/fhir/logical-models",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/aehrc/logical-model-web",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SparkedLogicalModels",
        "title": "Sparked Logical Models",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/aehrc/logical-model-web"
    },
    "csiro.fhir.au.smartforms": {
        "url": "https://smartforms.csiro.au/ig",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/aehrc/smart-forms-ig/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0-draft",
                "path": "https://smartforms.csiro.au/ig/0.1.0-draft",
                "status": "draft",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2024-02-19",
                "desc": "This draft is for informal use and review."
            }
        ],
        "name": "SmartForms",
        "title": "Smart Forms",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/aehrc/smart-forms-ig"
    },
    "fhir.kenyaCoreIG": {
        "url": "http://example.org",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IntelliSOFT-Consulting/Kenya-core-FHIR-IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "KENYACoreImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/IntelliSOFT-Consulting/Kenya-core-FHIR-IG"
    },
    "fhir.mamaToto": {
        "url": "http://example.org",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IntelliSOFT-Consulting/mamaToTo-FHIR-IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "mamaTotofhirIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/IntelliSOFT-Consulting/mamaToTo-FHIR-IG"
    },
    "fhir.chanjoKe": {
        "url": "http://example.org",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IntelliSOFT-Consulting/ChanjoKe-fhir-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "chanjoKeIG",
        "title": "ChanjoKE Immunization Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/IntelliSOFT-Consulting/ChanjoKe-fhir-ig"
    },
    "hl7.fhir.cl.clcore": {
        "url": "https://hl7chile.cl/fhir/ig/clcore",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7Chile/clcore",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.8.10",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.10",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-19",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.9",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-19",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.8",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-19",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.7",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-07",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-05",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-04",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-04",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-03-04",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-02-20",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-02-20",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-02-20",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.6",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.6",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-02-15",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.5",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.5",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-11-02",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.4",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.4",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-09-01",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.2",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.2",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-09-01",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.1",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.1",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-06-27",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            },
            {
                "version": "1.8.0",
                "path": "https://hl7chile.cl/fhir/ig/clcore/1.8.0",
                "status": "draft",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-06-23",
                "desc": "Versi\u00c3\u00b3n de desarrollo",
                "changes": "changes.html"
            }
        ],
        "name": "clcore",
        "title": "Gu\u00eda de Implementaci\u00f3n ''cl core'' FHIR R4, (Versi\u00f3n Evolutiva)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.8.6",
        "repo": "https://github.com/HL7Chile/clcore_ig"
    },
    "johnmoehrke.testdicom.example": {
        "url": "http://johnmoehrke.github.io/testDicom",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/JohnMoehrke/testDicom",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "JohnMoehrkeTestDicom",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0-current",
        "repo": "https://github.com/JohnMoehrke/testDicom"
    },
    "johnmoehrke.relatedpersonconsent.example": {
        "url": "http://johnmoehrke.github.io/RelatedPersonConsent",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/JohnMoehrke/RelatedPersonConsent",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "JohnMoehrkeRelatedPersonConsent",
        "title": "JohnMoehrke RelatedPerson Consent",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/JohnMoehrke/RelatedPersonConsent"
    },
    "johnmoehrke.testcore.example": {
        "url": "http://johnmoehrke.github.io/testcore",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/JohnMoehrke/testCore",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "JohnMoehrkeTestCore",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/JohnMoehrke/testCore"
    },
    "johnmoehrke.testmed.example": {
        "url": "http://johnmoehrke.github.io/testmed",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/JohnMoehrke/testMed",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "JohnMoehrkeTestMed",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/JohnMoehrke/testMed"
    },
    "fhir.asu.consent-validation": {
        "url": "https://github.com/mojitoj/ASU-research-consent-on-FHIR",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/mojitoj/ASU-research-consent-on-FHIR",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "ASUResearchConsentOnFHIR",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/mojitoj/ASU-research-consent-on-FHIR"
    },
    "va.mhv.fhir.phr": {
        "url": "https://department-of-veterans-affairs.github.io/mhv-fhir-phr-mapping",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/department-of-veterans-affairs/mhv-fhir-phr-mapping",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "VAMHVFHIRPHR",
        "title": "MyHealtheVet PHR FHIR API",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.5-current",
        "repo": "https://github.com/department-of-veterans-affairs/mhv-fhir-phr-mapping"
    },
    "ehalsomyndigheten.se.katalog": {
        "url": "http://electronichealth.se/fhir/katalog",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/danka74/VOKIG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "VOKIg",
        "title": "Implementationsguide f\u00f6r Nationell katalog \u00f6ver v\u00e5rdgivare och utf\u00f6rare av socialtj\u00e4nst",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/danka74/VOKIG"
    },
    "hl7.fhir.eu.laboratory": {
        "url": "http://hl7.eu/fhir/laboratory",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7-eu/laboratory",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.eu/fhir/laboratory/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-02-26",
                "current": true,
                "desc": "This is the Edition 1 STU 1 release"
            },
            {
                "version": "0.1.0-ballot",
                "path": "http://hl7.eu/fhir/laboratory/0.1.0-ballot",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-22",
                "desc": "This is the version released for the STU 1 ballot"
            }
        ],
        "name": "Hl7EuLaboratoryIg",
        "title": "HL7 Europe Laboratory Report",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0-ci",
        "repo": "https://github.com/danka74/hl7-eu-laboratory"
    },
    "nl.santeon.sim.r4": {
        "url": "http://sim.santeon.nl",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7-eu/laboratory",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.eu/fhir/laboratory/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-02-26",
                "current": true,
                "desc": "This is the Edition 1 STU 1 release"
            },
            {
                "version": "0.1.0-ballot",
                "path": "http://hl7.eu/fhir/laboratory/0.1.0-ballot",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-22",
                "desc": "This is the version released for the STU 1 ballot"
            }
        ],
        "name": "SIMonFHIR",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/SanteonNL/sim-on-fhir"
    },
    "hl7.cda.uv.core": {
        "url": "http://hl7.org/cda/stds/core",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/CDA-core-sd/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "2.0.0-sd-snapshot1",
                "path": "http://hl7.org/cda/stds/core/2.0.0-sd-snapshot1",
                "status": "draft",
                "sequence": "CDA2",
                "fhirversion": "5.0.0",
                "date": "2023-12-16",
                "desc": "Minor updates to address discovered issues during CCDA ballot preparation."
            },
            {
                "version": "2.0.0-sd-ballot",
                "path": "http://hl7.org/cda/stds/core/2023Sep",
                "status": "ballot",
                "sequence": "CDA 2.0",
                "fhirversion": "5.0.0",
                "date": "2023-10-27",
                "desc": "A representation of the CDA specification using FHIR Logical Models and Structure Definitions."
            },
            {
                "version": "2.1.0-draft1",
                "path": "http://hl7.org/cda/stds/core/draft1",
                "status": "draft",
                "sequence": "CDA 2.1",
                "fhirversion": "5.0.0",
                "date": "2023-01-16",
                "desc": "First draft to support the publication of CCDA 2.1"
            }
        ],
        "name": "ClinicalDocumentArchitecture",
        "title": "Clinical Document Architecture",
        "fhirversion_latest": "5.0.0",
        "current_version": "2.0.0-sd-ballot",
        "repo": "https://github.com/ahdis/cda-core-2.0"
    },
    "ch.fhir.ig.ch-elm": {
        "url": "http://fhir.ch/ig/ch-elm",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/ahdis/ch-elm/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.2.0",
                "path": "http://fhir.ch/ig/ch-elm/1.2.0",
                "status": "release",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-03-28",
                "current": true,
                "desc": "FOPH",
                "changes": "changelog.html"
            },
            {
                "version": "1.1.1",
                "path": "http://fhir.ch/ig/ch-elm/1.1.1",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-02-27",
                "desc": "FOPH",
                "changes": "changelog.html"
            },
            {
                "version": "1.1.0",
                "path": "http://fhir.ch/ig/ch-elm/1.1.0",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-01-31",
                "desc": "FOPH",
                "changes": "changelog.html"
            },
            {
                "version": "1.0.0",
                "path": "http://fhir.ch/ig/ch-elm/1.0.0",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-11-16",
                "desc": "FOPH",
                "changes": "changelog.html"
            },
            {
                "version": "1.0.0-trialuse",
                "path": "http://fhir.ch/ig/ch-elm/1.0.0-trialuse",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-09-13",
                "desc": "FOPH",
                "changes": "changelog.html"
            }
        ],
        "name": "CH_ELM",
        "title": "CH ELM (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.2.0-cibuild",
        "repo": "https://github.com/ahdis/ch-elm"
    },
    "care.commonprofiles.fhir": {
        "url": "https://commonprofiles.care/fhir",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/commonprofiles-care/fhir/branches/master",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.1",
                "path": "https://commonprofiles.care/fhir/1.0.1",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-06-12",
                "desc": "Common FHIR profile vendor collaboration"
            },
            {
                "version": "1.0.0",
                "path": "https://commonprofiles.care/fhir/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-03-17",
                "desc": "Common FHIR profile vendor collaboration"
            }
        ],
        "name": "SwedishFHIRgroupcommonprofiles",
        "title": "Swedish FHIR group common profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.2",
        "repo": "https://github.com/commonprofiles-care/fhir"
    },
    "health.gov.il.fhir.core": {
        "url": "http://fhir.health.gov.il",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/commonprofiles-care/fhir/branches/master",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.1",
                "path": "https://commonprofiles.care/fhir/1.0.1",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-06-12",
                "desc": "Common FHIR profile vendor collaboration"
            },
            {
                "version": "1.0.0",
                "path": "https://commonprofiles.care/fhir/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-03-17",
                "desc": "Common FHIR profile vendor collaboration"
            }
        ],
        "name": "ILCoreImplementationGuide",
        "title": "IL Core Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.13.2",
        "repo": "https://github.com/erezshalom/ILCOREIG"
    },
    "elga.iv.hi": {
        "url": "https://hi.iv.elga.gv.at",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/commonprofiles-care/fhir/branches/master",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.1",
                "path": "https://commonprofiles.care/fhir/1.0.1",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-06-12",
                "desc": "Common FHIR profile vendor collaboration"
            },
            {
                "version": "1.0.0",
                "path": "https://commonprofiles.care/fhir/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-03-17",
                "desc": "Common FHIR profile vendor collaboration"
            }
        ],
        "name": "IntegrierteVersorgungHerzinsuffizienz",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/ELGA-GmbH/iv-hi"
    },
    "example.fhir.uv.myig": {
        "url": "http://somewhere.org/fhir/uv/myig",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/mburwit/RiskAssessment",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "YourComputableMyIGNameHere",
        "title": "Your User Friendly Name for MyIG Here",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/mburwit/RiskAssessment"
    },
    "ch.fhir.ig.ch-vacd": {
        "url": "http://fhir.ch/ig/ch-vacd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-vacd",
                "status": "ci-build"
            },
            {
                "version": "4.0.1",
                "date": "2023-12-28",
                "path": "http://fhir.ch/ig/ch-vacd/4.0.1",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "desc": "HL7 Switzerland STU 4",
                "changes": "changelog.html",
                "current": true,
                "corrections": [
                    {
                        "version": "4.0.0",
                        "path": "ch.fhir.ig.ch-vacd#4.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "4.0.0-ballot",
                "date": "2023-06-29",
                "path": "http://fhir.ch/ig/ch-vacd/4.0.0-ballot",
                "status": "ballot",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "desc": "HL7 Switzerland STU 4 Ballot",
                "changes": "changelog.html"
            },
            {
                "version": "3.0.0",
                "path": "http://fhir.ch/ig/ch-vacd/3.0.0",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-12-21",
                "desc": "HL7 Switzerland STU 3",
                "changes": "changelog.html"
            },
            {
                "version": "2.1.0",
                "path": "http://fhir.ch/ig/ch-vacd/2.1.0",
                "status": "ballot",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-07-07",
                "desc": "HL7 Switzerland STU 3 Ballot",
                "changes": "changelog.html"
            },
            {
                "version": "2.0.0",
                "date": "2022-02-11",
                "desc": "HL7 Switzerland STU 2",
                "path": "http://fhir.ch/ig/ch-vacd/2.0.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2021-06-18",
                "desc": "HL7 Switzerland STU 2 Ballot",
                "path": "http://fhir.ch/ig/ch-vacd/1.0.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2021-06-18",
                "desc": "eHealth Suisse STU 1",
                "path": "http://fhir.ch/ig/ch-vacd/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2021-02-12",
                "desc": "eHealth Suisse STU 1 Informative Ballot",
                "path": "http://fhir.ch/ig/ch-vacd/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_VACD",
        "title": "Implementation Guide CH VACD",
        "fhirversion_latest": "4.0.1",
        "current_version": "5.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-vacd"
    },
    "ch.fhir.ig.ch-lab-report": {
        "url": "http://fhir.ch/ig/ch-lab-report",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7ch/ch-lab-report",
                "status": "ci-build",
                "sequence": "ci-build",
                "desc": "Continuous Integration Build (latest in version control)"
            },
            {
                "version": "0.1.1",
                "path": "http://fhir.ch/ig/ch-lab-report/0.1.1",
                "status": "draft",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1",
                "date": "2023-12-28",
                "current": true,
                "desc": "HL7 Switzerland DSTU 1",
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "0.1.0",
                        "path": "ch.fhir.ig.ch-lab-report#0.1.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            }
        ],
        "name": "CH_LAB_REPORT",
        "title": "CH LAB-Report (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-lab-report"
    },
    "ch.fhir.ig.ch-etoc": {
        "url": "http://fhir.ch/ig/ch-etoc",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-etoc",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://fhir.ch/ig/ch-etoc/2.0.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-28",
                "current": true,
                "desc": "HL7 Switzerland STU 2",
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "ch.fhir.ig.ch-etoc#2.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://fhir.ch/ig/ch-etoc/2.0.0-ballot",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-06-29",
                "desc": "HL7 Switzerland STU 2",
                "changes": "changelog.html"
            },
            {
                "version": "1.0.0",
                "date": "2022-04-13",
                "desc": "HL7 Switzerland STU 1",
                "path": "http://fhir.ch/ig/ch-etoc/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2021-06-18",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-etoc/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_eTOC",
        "title": "CH eTOC (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-etoc"
    },
    "ch.fhir.ig.ch-emed": {
        "url": "http://fhir.ch/ig/ch-emed",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-emed",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "4.0.1",
                "path": "http://fhir.ch/ig/ch-emed/4.0.1",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2023-12-28",
                "current": true,
                "desc": "HL7 Switzerland STU 4",
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "4.0.0",
                        "path": "ch.fhir.ig.ch-emed#4.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "4.0.0-ballot",
                "path": "http://fhir.ch/ig/ch-emed/4.0.0-ballot",
                "status": "ballot",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2023-06-29",
                "desc": "HL7 Switzerland STU 4",
                "changes": "changelog.html"
            },
            {
                "version": "3.0.0",
                "path": "http://fhir.ch/ig/ch-emed/3.0.0",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-12-21",
                "desc": "HL7 Switzerland STU 3",
                "changes": "changelog.html"
            },
            {
                "version": "2.1.0",
                "desc": "HL7 Switzerland STU 3 Ballot",
                "path": "http://fhir.ch/ig/ch-emed/2.1.0",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2022-07-07"
            },
            {
                "version": "2.0.0",
                "date": "2022-02-11",
                "desc": "HL7 Switzerland STU 2",
                "path": "http://fhir.ch/ig/ch-emed/2.0.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2021-06-14",
                "desc": "HL7 Switzerland STU 2 Ballot",
                "path": "http://fhir.ch/ig/ch-emed/1.0.0",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2021-06-14",
                "desc": "eHealth Suisse STU 1",
                "path": "http://fhir.ch/ig/ch-emed/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.2.0",
                "date": "2021-02-12",
                "desc": "eHealth Suisse STU 1 Informative Ballot",
                "path": "http://fhir.ch/ig/ch-emed/0.2.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.1",
                "date": "2020-08-18",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-emed/0.1.1",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2020-05-07",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-emed/0.1.0",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_EMED",
        "title": "CH EMED (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "5.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-emed"
    },
    "ch.fhir.ig.ch-lab-order": {
        "url": "http://fhir.ch/ig/ch-lab-order",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-lab-order",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0-ballot",
                "date": "2023-06-29",
                "desc": "HL7 Switzerland STU 2",
                "path": "http://fhir.ch/ig/ch-lab-order/2.0.0-ballot",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "1.0.0",
                "date": "2022-02-22",
                "desc": "HL7 Switzerland STU 1",
                "path": "http://fhir.ch/ig/ch-lab-order",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2021-06-16",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-lab-order/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_LAB_ORDER",
        "title": "CH LAB-Order (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/hl7ch/ch-lab-order"
    },
    "ch.fhir.ig.template": {
        "url": "http://fhir.ch/ig/template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/template",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.6.0",
                "date": "2021-06-09",
                "desc": "HL7 Switzerland",
                "path": "http://fhir.ch/ig/template",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1",
                "current": true
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.6.0",
        "repo": "https://github.com/hl7ch/ig-template"
    },
    "ch.fhir.ig.ch-rad-order": {
        "url": "http://fhir.ch/ig/ch-rad-order",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-rad-order",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "date": "2022-02-22",
                "desc": "HL7 Switzerland STU 1",
                "path": "http://fhir.ch/ig/ch-rad-order",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2021-06-17",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-rad-order/0.1.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CH_RAD_Order",
        "title": "CH RAD-Order (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/hl7ch/ch-rad-order"
    },
    "ch.fhir.ig.ch-allergyintolerance": {
        "url": "http://fhir.ch/ig/ch-allergyintolerance",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-allergyintolerance",
                "status": "ci-build"
            },
            {
                "version": "2.0.1",
                "date": "2023-12-28",
                "desc": "HL7 Switzerland STU 2",
                "path": "http://fhir.ch/ig/ch-allergyintolerance/2.0.1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 2",
                "current": true,
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "ch.fhir.ig.ch-allergyintolerance#2.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "2.0.0-ballot",
                "date": "2023-06-29",
                "desc": "HL7 Switzerland STU 2 Ballot",
                "path": "http://fhir.ch/ig/ch-allergyintolerance/2.0.0-ballot",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 2",
                "changes": "changelog.html"
            },
            {
                "version": "1.0.0",
                "date": "2022-02-11",
                "desc": "HL7 Switzerland STU 1",
                "path": "http://fhir.ch/ig/ch-allergyintolerance/1.0.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            },
            {
                "version": "0.2.0",
                "date": "2021-06-17",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-allergyintolerance/0.2.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            }
        ],
        "name": "CHAllergyIntolerance",
        "title": "CH AllergyIntolerance (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-allergyintolerance"
    },
    "ch.fhir.ig.ch-orf": {
        "url": "http://fhir.ch/ig/ch-orf",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-orf",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://fhir.ch/ig/ch-orf/2.0.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-28",
                "current": true,
                "desc": "HL7 Switzerland STU 2",
                "changes": "changelog.html",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "ch.fhir.ig.ch-orf#2.0.0.zip",
                        "date": "2023-12-28"
                    }
                ]
            },
            {
                "version": "2.0.0-ballot",
                "date": "2022-06-29",
                "desc": "HL7 Switzerland STU 2 Ballot",
                "path": "http://fhir.ch/ig/ch-orf/2.0.0-ballot",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 2"
            },
            {
                "version": "1.0.0",
                "date": "2022-02-22",
                "desc": "HL7 Switzerland STU 1",
                "path": "http://fhir.ch/ig/ch-orf/1.0.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            },
            {
                "version": "0.10.0",
                "date": "2021-06-11",
                "desc": "HL7 Switzerland STU 1 Ballot",
                "path": "http://fhir.ch/ig/ch-orf/0.10.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            },
            {
                "version": "0.9.1",
                "date": "2019-11-29",
                "desc": "Draft version 0.9.1",
                "path": "http://fhir.ch/ig/ch-orf/0.9.1",
                "status": "draft",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            }
        ],
        "name": "CH_ORF",
        "title": "CH ORF (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-orf"
    },
    "ch.fhir.ig.ch-epr-term": {
        "url": "http://fhir.ch/ig/ch-epr-term",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/hl7ch/ch-epr-term",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.10",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.10",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1",
                "date": "2023-12-19",
                "current": true,
                "desc": "Version 202306.1-stable, see https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html for changelog"
            },
            {
                "version": "2.0.9",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.9",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1",
                "date": "2023-06-27",
                "desc": "Version 202306.1-stable, see https://ehealthsuisse.art-decor.org/ch-epr-html-20230608T154548/project.html for changelog"
            },
            {
                "version": "2.0.8",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.8",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1",
                "date": "2022-12-21",
                "desc": "Version 202212.0-stable, see https://ehealthsuisse.art-decor.org/ch-epr-html-20221201T141037/project.html for changelog"
            },
            {
                "version": "2.0.7",
                "date": "2022-01-31",
                "desc": "Version 202104.0-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html (minor update, depend on ihe.formatcode.fhir#1.0.0",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.7",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.6",
                "date": "2021-12-22",
                "desc": "Version 202104.0-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html (minor update, see also https://github.com/hl7ch/ch-epr-term/issues/6)",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.6",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.5",
                "date": "2021-04-23",
                "desc": "Version 202104.0-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20210416T020411/terminology.html",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.5",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.4",
                "date": "2020-06-22",
                "desc": "Version 202004.1-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20200622T124207/project.html#_20200622124207 for changelog",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.4",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.3",
                "date": "2020-04-23",
                "desc": "Version 202004.0-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20200423T125505/project.html#_20200423125505 for changelog",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.3",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.2",
                "date": "2020-02-26",
                "desc": "Version 201907.2-stable, see http://ehealthsuisse.art-decor.org/ch-epr-html-20200226T180620/project.html#_20200226180620 for changelog",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.2",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.1",
                "date": "2019-11-11",
                "desc": "EPR Annex 3 and 9, Version 201907.1-stable",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU"
            },
            {
                "version": "2.0.0",
                "date": "2019-09-13",
                "desc": "EPR Annex 3 and 9, Version 201907.0-stable",
                "path": "http://fhir.ch/ig/ch-epr-term/2.0.0",
                "status": "trial-use",
                "fhirversion": "4.0.0",
                "sequence": "STU"
            }
        ],
        "name": "CH_EPR_TERM",
        "title": "CH EPR Term (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ci-build",
        "repo": "https://github.com/hl7ch/ch-epr-term"
    },
    "who.ddcc": {
        "url": "http://smart.who.int/ddcc",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/ddcc",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DDCC",
        "title": "WHO Digital Documentation of COVID-19 Certificates (DDCC)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/WorldHealthOrganization/ddcc"
    },
    "who.ips-pilgrimage": {
        "url": "http://smart.who.int/ips-pilgrimage",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-ips-pilgrimage",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "SMARTIPSforPilgrimage",
        "title": "SMART Verifiable IPS for Pilgrimage",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-ips-pilgrimage"
    },
    "smart.who.int.immunizations-measles": {
        "url": "http://smart.who.int/immunizations-measles",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-immunizations-measles",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SMART",
        "title": "WHO SMART Guidelines - Measles Immunization",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-immunizations-measles"
    },
    "who.fhir.smart-ig-empty": {
        "url": "http://worldhealthorganization.github.io/smart",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-tuberculosis",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "SMART",
        "title": "SMART Empty IG",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-tuberculosis"
    },
    "who.fhir.smart-ig-starter-kit": {
        "url": "http://smart.who.int/ig/smart-ig-starter-kit",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-ig-starter-kit",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "SMARTStarterKit",
        "title": "DRAFT SMART Guidelines L3 SOP",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.2.1",
        "repo": "https://github.com/WorldHealthOrganization/smart-ig-starter-kit"
    },
    "fhir.worldhealthorganization.smart-ot": {
        "url": "http://worldhealthorganization.github.io/smart-ot",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-ot",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "smartot",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.1",
        "repo": "https://github.com/WorldHealthOrganization/smart-ot"
    },
    "who.fhir.smart-base": {
        "url": "http://worldhealthorganization.github.io/smart-base",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-base",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SMARTBase",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-base"
    },
    "who.base": {
        "url": "http://smart.who.int/base",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-base",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SMARTBase",
        "title": "SMART Base",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-base"
    },
    "who.template.root": {
        "url": "http://github.com/WorldHealthOrganization/smart-ig-template-who",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-ig-template-who",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.4.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-ig-template-who"
    },
    "who.fhir.immunization": {
        "url": "http://smart.who.int/ig/smart-immunizations",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/WorldHealthOrganization/smart-immunizations",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Immunization",
        "title": "WHO Immunization Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/WorldHealthOrganization/smart-immunizations"
    },
    "uk.nhs.england": {
        "url": "https://fhir.nhs.uk/England",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/NHSDigital/interoperability-standards-experimental",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "NHSEnglandInteroperability",
        "title": "Interoperability Standards - Discovery",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/NHSDigital/interoperability-standards-experimental"
    },
    "hl7.fhir.nl.mdt": {
        "url": "http://hl7.nl/fhir/mdt-viewer",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7nl/regional-mdt-ig",
                "fhirversion": "3.0.2"
            }
        ],
        "name": "mdt",
        "title": "MDT Implementation Guide",
        "fhirversion_latest": "3.0.2",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7nl/regional-mdt-ig"
    },
    "ch.fhir.ig.ch-epr-mhealth": {
        "url": "http://fhir.ch/ig/ch-epr-mhealth",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/ehealthsuisse/ch-epr-mhealth",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/3.0.0",
                "status": "trial-use",
                "sequence": "DSTU3",
                "fhirversion": "4.0.1",
                "date": "2024-03-05",
                "current": true,
                "desc": "eHealth Suissse",
                "changes": "openissues.html"
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/3.0.0-ballot",
                "status": "ballot",
                "sequence": "Draft",
                "fhirversion": "4.0.1",
                "date": "2023-06-30",
                "desc": "eHealth Suissse",
                "changes": "openissues.html"
            },
            {
                "version": "1.1.0",
                "desc": "HL7 Switzerland Informative Ballot DSTU 2",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/1.1.0",
                "status": "trial-use",
                "sequence": "DSTU 2",
                "fhirversion": "4.0.1",
                "date": "2022-07-07"
            },
            {
                "version": "1.0.0",
                "date": "2021-12-22",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/1.0.0",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.2.0",
                "date": "2021-06-16",
                "desc": "HL7 Switzerland Informative Ballot",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/0.2.0",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.2",
                "date": "2020-12-16",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/0.1.2",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.1",
                "date": "2020-08-24",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/0.1.1",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2020-08-18",
                "desc": "eHealth Suisse DSTU 1",
                "path": "http://fhir.ch/ig/ch-epr-mhealth/0.1.0",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CHEprMhealth",
        "title": "CH EPR mHealth (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-cibuild",
        "repo": "https://github.com/qligier/ch-epr-mhealth"
    },
    "hl7.org.nz.fhir.ig.icp": {
        "url": "http://hl7.org.nz/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/acc-fhir-publisher/icp",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "icp",
        "title": "New Zealand ICP Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/acc-fhir-publisher/icp"
    },
    "hl7.fhir.fi.base": {
        "url": "https://hl7.fi/fhir/finnish-base-profiles",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://fhir.fi/finnish-base-profiles/",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0.0",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-11-10",
                "current": true,
                "desc": "Release 1.0.0, STU 1",
                "descmd": "Release 1.0.0, STU 1"
            },
            {
                "version": "1.0.0-rc24",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0.0-rc24",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-11-07",
                "desc": "QA preview for final STU 1 release",
                "descmd": "QA preview for final STU 1 release"
            },
            {
                "version": "1.0.0-rc23",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc23",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-11-06",
                "desc": "QA preview for final STU 1 release",
                "descmd": "QA preview for final STU 1 release"
            },
            {
                "version": "1.0.0-rc22",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc22",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-25",
                "desc": "QA preview for final STU 1 release",
                "descmd": "QA preview for final STU 1 release"
            },
            {
                "version": "1.0.0-rc21",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc21",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-23",
                "desc": "QA preview for final STU 1 release",
                "descmd": "QA preview for final STU 1 release"
            },
            {
                "version": "1.0.0-rc20",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc20",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-09-04",
                "desc": "Final acceptance review for the first STU 1 release",
                "descmd": "Final acceptance review for the first STU 1 release"
            },
            {
                "version": "1.0.0-rc19",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc19",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-08-17",
                "desc": "Public review for final STU 1 release",
                "descmd": "Public review for final STU 1 release"
            },
            {
                "version": "1.0.0-rc18",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc18",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-13",
                "desc": "QA preview for final STU 1 release",
                "descmd": "QA preview for final STU 1 release"
            },
            {
                "version": "1.0.0-rc17",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0.0-rc17",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-05",
                "desc": "QA review for final STU 1 release",
                "descmd": "QA review for final STU 1 release"
            },
            {
                "version": "1.0.0-rc15",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc15/",
                "status": "ballot",
                "sequence": "STU 1",
                "date": "2023-04-28",
                "desc": "Official ballot version for STU release 1.0.0",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0-rc11",
                "date": "2023-04-18",
                "desc": "Quality Assurance version for STU release 1.0.0",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc11/",
                "status": "qa-preview",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0-rc2",
                "date": "2023-02-20",
                "desc": "Pre-ballot version for STU release 1.0.0",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc2/",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0-rc1",
                "date": "2023-02-14",
                "desc": "First release candidate for 1.0.0",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/1.0-rc1/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.6.0",
                "date": "2023-02-09",
                "desc": "CI Snapshot, fix canonical url, add examples",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/0.6/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.5.0",
                "date": "2023-02-07",
                "desc": "CI Snapshot, remove Kanta PHR content",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/0.5/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.4.0",
                "date": "2023-02-02",
                "desc": "CI Snapshot, use the blue & white theme",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/0.4/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.3.0",
                "date": "2023-02-01",
                "desc": "CI Snapshot, use the color theme from the main FHIR specification",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/0.3/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.2.0",
                "date": "2023-01-09",
                "desc": "CI Snapshot, first version available on the HL7 Finland site.",
                "path": "https://hl7.fi/fhir/finnish-base-profiles/0.2/",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "FinnishBaseProfiles",
        "title": "Finnish Base Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1-cibuild",
        "repo": "https://github.com/fhir-fi/finnish-base-profiles"
    },
    "actnow.canshare.co.nz": {
        "url": "http://canshare.co.nz/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/davidhay25/actnow",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "actnow",
        "title": "ACT-NOW Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.4.0",
        "repo": "https://github.com/davidhay25/actnow"
    },
    "hl7.fhir.uv.epi-test": {
        "url": "http://hl7.org/fhir/uv/epi-test",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cander2/epi-test",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "ImplementationGuide",
        "title": "Miscellaneous ePI Test",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/cander2/epi-test"
    },
    "sequoiaproject.fhir.us.pushnotifications": {
        "url": "https://sequoiaproject.org/fhir/push-r4",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Carequality/CEQSubscription",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Carequality_Subscription_Implementation_Guide",
        "title": "Carequality Subscription Implementation Guide for Push Notifications",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.1",
        "repo": "https://github.com/Carequality/CEQSubscription"
    },
    "fhir.carequality.template": {
        "url": "https://github.com/Carequality/ig-template-carequality",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Carequality/ig-template-carequality",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "current",
        "repo": "https://github.com/Carequality/ig-template-carequality"
    },
    "snomed-ig": {
        "url": "http://snomed.info/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHTSDO/snomed-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SNOMEDCTImplementationGuideforFHIR",
        "title": "SNOMED CT Implementation Guide for FHIR",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/IHTSDO/snomed-ig"
    },
    "hl7.fhir.be.vaccination": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/vaccination",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/vaccination",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.3",
                "path": "https://www.ehealth.fgov.be/standards/fhir/vaccination/1.0.3",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-06-26",
                "current": true,
                "desc": "eHealth FHIR Vaccination Profiles for Belgium"
            },
            {
                "version": "1.0.2",
                "path": "https://www.ehealth.fgov.be/standards/fhir/vaccination/1.0.2",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-02-16",
                "desc": "eHealth FHIR Vaccination Profiles for Belgium"
            },
            {
                "version": "1.0.1",
                "status": "trial-use",
                "desc": "eHealth FHIR Vaccination Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Vaccination Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/vaccination/1.0.1",
                "fhirversion": "4.0.1",
                "date": "2022-10-19"
            },
            {
                "version": "1.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR Vaccination Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Vaccination Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/vaccination/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-05-31"
            }
        ],
        "name": "BeVaccination",
        "title": "HL7 Belgium Vaccination (Patient Dossier)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.3",
        "repo": "https://github.com/hl7-be/vaccination"
    },
    "hl7.fhir.be.infsec": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/infsec",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/infsec",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.1.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/infsec/1.1.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2024-01-24",
                "current": true,
                "desc": "eHealth FHIR Infrastructure and Security Profiles for Belgium"
            },
            {
                "version": "1.0.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/infsec/1.0.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-10-23",
                "desc": "eHealth FHIR Infrastructure and Security Profiles for Belgium"
            }
        ],
        "name": "hl7fhirbeinfsec",
        "title": "eHealth Platform Federal infsec Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/hl7-be/infsec"
    },
    "hl7.fhir.be.public-health": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/public-health",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/public-health",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.2",
                "path": "https://www.ehealth.fgov.be/standards/fhir/public-health/1.0.2",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-10-16",
                "current": true,
                "desc": "eHealth FHIR Public Health Profiles for Belgium"
            },
            {
                "version": "1.0.1",
                "path": "https://www.ehealth.fgov.be/standards/fhir/public-health/1.0.1",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-08-11",
                "desc": "eHealth FHIR Public Health Profiles for Belgium"
            },
            {
                "version": "1.0.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/public-health/1.0.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-06-27",
                "desc": "eHealth FHIR Public Health Profiles for Belgium"
            }
        ],
        "name": "PublicHealth",
        "title": "HL7 FHIR Implementation Guide: Public Health IG Release 1 - BE Realm | STU1",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.2",
        "repo": "https://github.com/hl7-be/public-health"
    },
    "hl7.fhir.be.nihdi-terminology": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/nihdi-terminology",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/nihdi-terminology",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BeNihdiTerminology",
        "title": "HL7 Belgium NIHDI Terminology",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/nihdi-terminology"
    },
    "hl7.fhir.be.allergy": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/allergy",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/allergy",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.2.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/allergy/1.2.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-12-18",
                "current": true,
                "desc": "eHealth FHIR Allergy Profiles for Belgium"
            },
            {
                "version": "1.1.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/allergy/1.1.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2023-02-06",
                "desc": "eHealth FHIR Allergy Profiles for Belgium"
            },
            {
                "version": "1.0.1",
                "status": "trial-use",
                "desc": "eHealth FHIR Allergy Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Allergy Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/allergy/1.0.1",
                "fhirversion": "4.0.1",
                "date": "2022-09-13"
            },
            {
                "version": "1.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR Allergy Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Allergy Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/allergy/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-06-07"
            }
        ],
        "name": "AllergyPatientDossier",
        "title": "Allergy (Patient Dossier)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/hl7-be/allergy"
    },
    "hl7.fhir.be.eattestation": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/eattestation",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/eattestation",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BelgianMyCareNeteAttestationProfiles",
        "title": "Belgian MyCareNet eAttestation Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/eattestation"
    },
    "hl7.fhir.be.lab": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/lab",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/lab",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR Lab related Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Lab related Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/lab/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-09-08",
                "current": true
            }
        ],
        "name": "Laboratory",
        "title": "HL7 BE Laboratory WG Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/hl7-be/lab"
    },
    "hl7.fhir.be.patientwill": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/patientwill",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/patientwill",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "https://www.ehealth.fgov.be/standards/fhir/patientwill/1.0.0",
                "status": "release",
                "sequence": "Trial Use",
                "fhirversion": "4.0.1",
                "date": "2024-01-08",
                "current": true,
                "desc": "eHealth FHIR Patient Will Profiles for Belgium"
            }
        ],
        "name": "BePatientwill",
        "title": "HL7 Belgium Patientwill (Patient Dossier)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/patientwill"
    },
    "hl7.fhir.be.mycarenet": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/mycarenet",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/mycarenet",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR MyCareNet Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR MyCareNet Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/mycarenet/2.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-09-08",
                "current": true
            }
        ],
        "name": "BelgianMyCareNetProfiles",
        "title": "Belgian MyCareNet Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/hl7-be/mycarenet"
    },
    "hl7.fhir.be.medication": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/medication",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/medication",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR Medication Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Medication Profiles for Belgium",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/medication/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-05-31",
                "current": true
            }
        ],
        "name": "Medication",
        "title": "Medication",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/hl7-be/medication"
    },
    "hl7.fhir.be.riziv-medicationrecord": {
        "url": "http://hl7belgium.org/fhir/riziv-medicationrecord",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/medication-record",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "MedicationRecord",
        "title": "MedicationRecord",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0-test",
        "repo": "https://github.com/hl7-be/medication-record"
    },
    "hl7.fhir.be.core-clinical": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/core-clinical",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/core-clinical",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "status": "trial-use",
                "desc": "eHealth FHIR Core clinical Profiles for Belgium - transversal",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Core clinical Profiles for Belgium - transversal",
                "category": "National Base",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/core-clinical/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-05-31",
                "current": true
            }
        ],
        "name": "TransversalClinicalCore",
        "title": "HL7 FHIR Implementation Guide: Transversal Clinical Core",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/hl7-be/core-clinical"
    },
    "hl7.fhir.be.etariff": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/etariff",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/etariff",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BelgianMyCareNeteTariffProfiles",
        "title": "Belgian MyCareNet eTariff Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/etariff"
    },
    "hl7.fhir.be.core": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/core",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "https://build.fhir.org/ig/hl7-be/core",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "status": "trial-use",
                "desc": "eHealth FHIR Core Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Core Profiles for Belgium",
                "category": "trial-use",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/core/2.0.1",
                "fhirversion": "4.0.1",
                "date": "2022-09-13",
                "current": true
            },
            {
                "version": "2.0.0",
                "status": "draft",
                "desc": "eHealth FHIR Core Profiles for Belgium",
                "sequence": "Trial Use",
                "intro": "eHealth FHIR Core Profiles for Belgium",
                "category": "test",
                "org": "eHealth Platform",
                "path": "https://www.ehealth.fgov.be/standards/fhir/core/2.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-03-24"
            }
        ],
        "name": "hl7fhirbecore",
        "title": "eHealth Platform Federal Core Profiles",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/hl7-be/core"
    },
    "hl7.fhir.be.referral": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/referral",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/referral",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ReferralPrescription",
        "title": "Referral Prescription",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/referral"
    },
    "hl7.be.fhir.template": {
        "url": "http://github.com/HL7/ig-template-fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/hl7.be.fhir.template",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.1",
        "repo": "https://github.com/hl7-be/hl7.be.fhir.template"
    },
    "hl7.fhir.be.capabilities": {
        "url": "https://www.ehealth.fgov.be/standards/fhir/capabilities",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-be/capabilities",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BeCapabilities",
        "title": "HL7 Belgium Capabilities",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-be/capabilities"
    },
    "kl.dk.fhir.gateway": {
        "url": "http://fhir.kl.dk/gateway",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7dk/kl-gateway/branches/main/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.1.0",
                "path": "http://fhir.kl.dk/gateway/1.1.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-06-21",
                "current": true,
                "descmd": "Initial release of KL-Gateway for nursing and home care\n\nThis is the same content as earlier released as hl7.fhir.dk.kl.gateway.care#1.0.4 with cannonical  http://gateway.kl.dk/1.0. However, canonical and package id have changed to accomodate new naming conventions. Additionally, this version inherit its terminologi from KLTerm rather than from KL`s core models (FKI)."
            }
        ],
        "name": "KLGateway",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/hl7dk/kl-gateway"
    },
    "hl7.fhir.dk.core": {
        "url": "http://hl7.dk/fhir/core",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "http://build.fhir.org/ig/hl7dk/dk-core",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.1.0",
                "path": "http://hl7.dk/fhir/core/3.1.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-01-08",
                "current": true,
                "desc": "DK Core version 3.1.0",
                "descmd": "Dk-core version 3.1.0 has been approved by HL7 Denmark. \n\nThe changes between 3.0.0 and 3.1.0 are: \n* Addition of the profile DkCoreBasicObservation, associated documentation and examples.\n* Update of Observation-instances to accommodate update in the FHIR Validator (https://chat.fhir.org/#narrow/stream/179177-conformance/topic/Vitalsigns.20Profiles)\n* Addition of patient replacement identifiers (DK: erstatningsCPR) and inclusion in DkCorePatient. \n* Added description of scenarios where Patient.name is unknown or absent.\n* Addition of link to hl7.dk on the index-page.\n"
            },
            {
                "version": "3.0.0",
                "path": "http://hl7.dk/fhir/core/3.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-12-01",
                "desc": "DK Core version 3.0.0",
                "descmd": "Dk-core version 3.0.0 has been approved by HL7 Denmark. This version is the result of external consultation of Dk-core v. 2.2.0. \n\nThe changes between 2.2.0 and 3.0.0 are: \n* Update of the introduction of DkCoreCondition\n* Addition of the DkCoreCondition instance JohnFracture which illustrates the use of SKS till\u00e6gskode. \n* Update of the introduction of DkCoreObservation, including information about which CodeSystems are recommended in the standard catalogue from the Danish Health Data Agency.\n* Update of the Observation.code.coding:SNOMEDCT and Observation.component.code.coding:SNOMEDCT to http://snomed.info/sct \n* Update of the Observation.code.coding:MedCom and Observation.component.code.coding: MedCom to http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-observation-codes \n* Added context on extension ConditionLastAssertedDate and NotFollowedAnymore\n* Bug update of invariants by changing constraint.requirements to requirements and removing of constraint.source where relevant. \n* Bug update of invariants by removing the \u2018value.\u2019 and \u2018Observation.\u2019 where relevant\n* Bug update of ValueSet TechniquesSCTCodes due to misspelling\n* Update of DkCoreObservations instances with a LOINC code corresponding to the codes in the international VitalSigns profile, due to update of FHIR validator. Missing effective timestamp were included."
            },
            {
                "version": "2.2.0",
                "path": "http://hl7.dk/fhir/core/2.2.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-05-05",
                "descmd": "DK-core version 2.2.0 has been approved by HL7 Denmark. During spring, 2023, this version will go through the needed evaluations to be approved for the national catalogue.\n\nThe changes between 2.1.0 and 2.2.0 is:\n\n* Addition of Observation profile with associated documentation and instances.\n* Updated all CPR-identifiers of the Patient instances.\n* Added experimental-status = false to all CodeSystems and ValueSets\n* Removed draft-status from identifiers."
            },
            {
                "version": "2.1.0",
                "date": "2022-11-08",
                "path": "http://hl7.dk/fhir/core/2.1.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "descmd": "DK-core version 2.1.0 has been approved by HL7 Denmark, but it is not part of the national catalogue of ICT standards <br/> to be used in the Danish health care system (Sundhedsdatastyrelsens standardkatalog). The spring 2023 version is expected to go through the needed evaluations to be approved for the national catalogue. <br/> <br/>  The changes between 2.0.0 and 2.1.0 is: <br/>  \u2022 Addition of Condition profile with associated documentation and examples <br/> \u2022 A disclaimer has been added regarding use of dk-core. It can be read on the IG\\\\`s front page in section 1.7 and 1.8 <br/> \u2022 Unused LPR3 identifier has been removed <br/> \u2022 In the documentation of the patient profile, new details are described regarding NNDNK <br/> \u2022 Adding how to represent a GP in the documentation for Organization and Practitioner to avoid SOR vs. ydernummer issues. <br/> \u2022 Clarification of primary and secondary sector the in descriptions of the Organization and Practitioner profiles.<br/> \u2022 Explanation of the use of Danish/English in the \\\\`Language\\\\` section on the front page of dk-core <br/> \u2022 Insertion of specific terms/explanations on all slices and extensions in profiles. <br/> \u2022 Target group and inclusion in the standard catalog have been added in the \\\\`Scope\\\\` section on dk-core\\\\`s front page. <br/> \u2022 Documentation has been strengthened in Patient and Practitioner profiles in the \\\\`scope and usage\\\\` section. <br/> \u2022 The section \\\\`Connection between dk-core and common Danish architectures and standards\\\\` has been added to dk-core\\\\`s front page."
            },
            {
                "version": "2.0.0",
                "desc": "Release version 2.0.0 contains three DKcore profiles. In DkCorePatient the cardinality of the extensions dk-core-RegionalSubDivisionCodes and dk-core-municipalityCodes is changed from 0..* to 0..1 and the MustSupport flags are removed from Patient.id and Patient.name. DkCoreCprIdentifier.system is changed from a ValueSet to a fixed value, where both solutions contain the same OID. In DkCoreOrganization the binding strength of the ValueSet attached to the element Organization.type is changed from required to preferred.",
                "status": "release",
                "sequence": "Release",
                "history_template_repo": "https://github.com/hl7dk/fhir-ig-history-template.git",
                "path": "http://hl7.dk/fhir/core/2.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-09-14"
            },
            {
                "version": "1.1.0",
                "status": "release",
                "date": "2021-12-18",
                "desc": "Release version 1.1.0 contains three DK core profiles. The Danish Core Practitioner and Organization profiles are both introduced in this release, and the Danish Core Patient profile has been updated with some minor changes. These updates include 1) change of the minimum allowed length from 15 to 11 units in the element for the SOR-identifier Patient.generalPractitioner:referencesSORUnit.identifier, 2) removal of the fixed value `NNDNK` in the element Patient.identifier.type.coding.code, and 3) change of the invariant expression for validation of a CPR.",
                "sequence": "Release",
                "history_template_repo": "https://github.com/hl7dk/fhir-ig-history-template",
                "path": "http://hl7.dk/fhir/core/1.1.0",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DKCore",
        "title": "HL7 FHIR Implementation Guide: DK Core",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.2.0",
        "repo": "https://github.com/hl7dk/dk-core"
    },
    "kl.dk.fhir.children": {
        "url": "http://fhir.kl.dk/children",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7dk/kl-children/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://fhir.kl.dk/children/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2023-09-30",
                "current": true,
                "desc": "Initial release",
                "descmd": "Initial release"
            }
        ],
        "name": "KLChildren",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7dk/kl-children"
    },
    "uv.esavi": {
        "url": "https://paho.org/fhir/esavi",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/PanAmericanHealthOrganization/ESAVI-IG-FHIR",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ESAVI",
        "title": "Gu\u00eda de Implementaci\u00f3n FHIR de ESAVI",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.44",
        "repo": "https://github.com/PanAmericanHealthOrganization/ESAVI-IG-FHIR"
    },
    "fhir.giis": {
        "url": "https://paho.org/fhir/giis",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/cens-chile/giis_fhir_IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "giisIG",
        "title": "GIIS Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.8",
        "repo": "https://github.com/cens-chile/giis_fhir_IG"
    },
    "who.fhir.smart-measles-catopia": {
        "url": "http://worldhealthorganization.github.io/smart",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/DigitalSQR/catopia-measles",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "SMART",
        "title": "SMART Empty IG",
        "fhirversion_latest": "4.3.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/DigitalSQR/catopia-measles"
    },
    "idmp.who-umc.org.fhir": {
        "url": "http://idmp.who-umc.org/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Uppsala-Monitoring-Centre/WHO-UMC-IDMP-Service",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "WhoUmcIDMPManagement",
        "title": "WHO-UMC IDMP Management and Publish API",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.5.0",
        "repo": "https://github.com/Uppsala-Monitoring-Centre/WHO-UMC-IDMP-Service"
    },
    "who.trust": {
        "url": "http://smart.who.int/trust",
        "versions": [
            {
                "version": "current",
                "path": "http://worldhealthorganization.github.io/smart-trust",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://smart.who.int/trust/1.0.0",
                "status": "release",
                "sequence": "Releases",
                "fhirversion": "4.0.1",
                "date": "2024-01-29",
                "current": true,
                "desc": "First stable release"
            }
        ],
        "name": "trust",
        "title": "WHO SMART Trust",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/costateixeira/smart-trust"
    },
    "fhir.gdx": {
        "url": "http://mitre.org/gdx",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/GenomeX-DataExchange",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "GenomeXDataExchange",
        "title": "GenomeX Data Exchange FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/CodeX-HL7-FHIR-Accelerator/GenomeX-DataExchange"
    },
    "fhir.mcodelite": {
        "url": "http://mitre.org/mcodelite",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/mcode-eom",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "mcodelite",
        "title": "mCODE-Lite FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/CodeX-HL7-FHIR-Accelerator/mcode-eom"
    },
    "fhir.mcodefh": {
        "url": "http://mitre.org/mcodefh",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/mcode-lite",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "McodeFederalHealth",
        "title": "mCODE for Federal Health (mCODE-FH)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/CodeX-HL7-FHIR-Accelerator/mcode-lite"
    },
    "ccu": {
        "url": "https://fhir.fabrica.inf.ufg.br/ccu",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/kyriosdata/farol",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CancerColoDoUtero",
        "title": "Rastreamento de C\u00e2ncer de Colo de \u00datero",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/kyriosdata/farol"
    },
    "ihe.qrph.ccg": {
        "url": "https://profiles.ihe.net/QRPH/CCG",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/QRPH.CCG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_QRPH_CCG",
        "title": "Computable Care Guidelines",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/QRPH.CCG"
    },
    "ihe.pharm.meow": {
        "url": "http://profiles.ihe.net/PHARM/MEOW",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/pharm-meow",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "IHE_PHARM_MEOW",
        "title": "IHE Pharmacy Medication Overview",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/IHE/pharm-meow"
    },
    "ihe.iti.pmir": {
        "url": "https://profiles.ihe.net/ITI/PMIR",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.PMIR/branches/master/index.html",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.5.0",
                "desc": "Trial Implementation - release in IG authored format",
                "path": "https://profiles.ihe.net/ITI/PMIR/1.5.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-08-08",
                "current": true
            },
            {
                "version": "1.4.0",
                "desc": "Public Comment - release for first IG authored version",
                "path": "https://profiles.ihe.net/ITI/PMIR/1.4.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-05-12"
            },
            {
                "version": "1.3.0",
                "date": "2020-12-11",
                "desc": "Rev. 1.3 - Trial Implementation (PDF)",
                "path": "https://www.ihe.net/wp-content/uploads/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PMIR_Rev1-3_TI_2020-12-11.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_PMIR",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.5.1-current",
        "repo": "https://github.com/IHE/ITI.PMIR"
    },
    "ihe.iti.svcm": {
        "url": "https://profiles.ihe.net/ITI/SVCM",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.SVCM",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.5.1",
                "path": "https://profiles.ihe.net/ITI/SVCM/1.5.1",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-02",
                "current": true,
                "desc": "Trial Implementation - use shareable as parent, quality, capabilityStatement improvements.",
                "descmd": "Version 1.5.1\r\n- changed codesystem and valueset to use shareable as parent\r\n- quality improvements\r\n- capabilityStatement improvements.",
                "changes": "issues.html"
            },
            {
                "version": "1.5.0",
                "desc": "Converted from PDF to a FHIR IG.  Added in conformance resources and Basic Audit audit events with examples.  Clarified the use of business identifiers.",
                "path": "https://profiles.ihe.net/ITI/SVCM/1.5.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-10-21"
            },
            {
                "version": "1.4.0",
                "desc": "Public Comment - Converted to IG publisher",
                "path": "https://profiles.ihe.net/ITI/SVCM/1.4.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-08-12"
            },
            {
                "version": "1.3.0",
                "date": "2022-06-17",
                "desc": "Last PDF Trial Implementation",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_SVCM_Rev1-3_TI_2022-06-17.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_SVCM",
        "title": "Sharing Valuesets, Codes, and Maps (SVCM)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.5.2-current",
        "repo": "https://github.com/IHE/ITI.SVCM"
    },
    "ihe.formatcode.fhir": {
        "url": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/FormatCode",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.2.0",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/1.2.0",
                "status": "normative",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-03-12",
                "current": true,
                "desc": "Minor release in recognition of change in past patch release to add status active to active codes."
            },
            {
                "version": "1.1.1",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/1.1.1",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-14",
                "desc": "Add status active to active codes."
            },
            {
                "version": "1.1.0",
                "date": "2022-03-01",
                "desc": "Release version with minor fixes and google analytics",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/1.1.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications"
            },
            {
                "version": "1.0.0",
                "date": "2021-06-03",
                "desc": "Release version with missing Pharmacy codes",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/1.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications"
            },
            {
                "version": "0.2.4",
                "date": "2021-03-17",
                "desc": "Second release version with new 360X codes",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/0.2.4",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications"
            },
            {
                "version": "0.2.2",
                "date": "2020-08-14",
                "desc": "Initial release version",
                "path": "https://profiles.ihe.net/fhir/ihe.formatcode.fhir/0.2.2",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications"
            }
        ],
        "name": "IHE_FORMATCODE",
        "title": "IHE FormatCode Vocabulary",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.1",
        "repo": "https://github.com/IHE/FormatCode"
    },
    "ihe.pharm.mpd": {
        "url": "http://profiles.ihe.net/PHARM/ihe.pharm.mpd",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/pharm-mpd",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "IHE_MPD",
        "title": "Medication Prescription and Delivery (MPD)",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/IHE/pharm-mpd"
    },
    "ihe.iti.scheduling": {
        "url": "https://profiles.ihe.net/ITI/Scheduling",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.Scheduling",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_ITI_Scheduling",
        "title": "IHE ITI Scheduling",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.8.0-current",
        "repo": "https://github.com/IHE/ITI.Scheduling"
    },
    "ihe.iti.pcf": {
        "url": "https://profiles.ihe.net/ITI/PCF",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.PCF/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.1.0",
                "path": "https://profiles.ihe.net/ITI/PCF/1.1.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-22",
                "current": true,
                "desc": "Trial-Implementation release built for FHIR R4",
                "descmd": "1.1.0\r\n\r\n    - Build for FHIR R4 rather than R4B to better support marketplace that is using R4 and not R4B. This also enables PCF to be depended upon by other IGs that further refine the Consent profiling.\r\n    - fix bug in the oAuth token fragment for not-authoredBy Consent\r\n    - fixes to new warnings from IG publisher such as requirement for all examples of vital signas to be compliant with vital signs profiles from FHIR core",
                "changes": "issues.html"
            },
            {
                "version": "1.0.0",
                "path": "https://profiles.ihe.net/ITI/PCF/1.0.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.3.0",
                "date": "2023-08-02",
                "desc": "Trial-Implementation release with resolved public comment",
                "descmd": "1.0.0 Trial-Implementation\r\n- Public Comment resolution\r\n- Change from SEX to SDV\r\n- Provide guidance on methods of managing changes to a persons Consent\r\n- Relax some restrictions on Consent elements that were not justified\r\n- Add example of consent to clinical trial data use\r\n- Add example of delegate consenting onbehalf of the patient",
                "changes": "issues.html"
            },
            {
                "version": "1.0.0-comment",
                "path": "https://profiles.ihe.net/ITI/PCF/1.0.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.3.0",
                "date": "2023-05-04",
                "desc": "Initial Public-Comment",
                "descmd": "Initial Public-Comment",
                "changes": "issues.html"
            }
        ],
        "name": "IHE_ITI_PCF",
        "title": "Privacy Consent on FHIR (PCF)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/IHE/ITI.PCF"
    },
    "ihe.rad.ira": {
        "url": "https://profiles.ihe.net/RAD/IRA",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/RAD.IRA/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "https://profiles.ihe.net/RAD/IRA/1.0.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "5.0.0",
                "date": "2023-10-03",
                "current": true,
                "desc": "Trial Implementation - Addresses all public comments",
                "descmd": "Version 1.0.0\r\n\r\nInitial Publication\r\n\r\n- Addresses all public comments.",
                "changes": "issues.html"
            },
            {
                "version": "1.0.0-comment",
                "path": "https://profiles.ihe.net/RAD/IRA/1.0.0-comment",
                "status": "ballot",
                "sequence": "Releases",
                "fhirversion": "5.0.0",
                "date": "2023-03-17",
                "desc": "Initial Public-Comment",
                "descmd": "Initial Public-Comment",
                "changes": "Initial Draft for public comment"
            }
        ],
        "name": "IHE_RAD_IRA",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.1",
        "repo": "https://github.com/IHE/RAD.RTC-IMR"
    },
    "ihe.pcc.qedm": {
        "url": "https://profiles.ihe.net/PCC/QEDm",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/QEDm",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PCC_QEDm",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/QEDm"
    },
    "ihe.domain.profile": {
        "url": "https://profiles.ihe.net/Domain/Profile",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/supplement-template",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_Domain_Profile",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/supplement-template"
    },
    "ihe.iti.mhd": {
        "url": "https://profiles.ihe.net/ITI/MHD",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.MHD",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "4.2.1",
                "path": "https://profiles.ihe.net/ITI/MHD/4.2.1",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-02",
                "current": true,
                "desc": "Trial Implementation - quality, CP-ITI-1254, capabilityStatement improvements.",
                "descmd": "Version 4.2.1\r\n- quality improvements\r\n- downloads and analysis page\r\n- add context to extensions\r\n- CP-ITI-1254 Date range clarity, \r\n- capabilityStatement improvements.",
                "changes": "a_issues.html"
            },
            {
                "version": "4.2.0",
                "date": "2022-12-07",
                "path": "https://profiles.ihe.net/ITI/MHD/4.2.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "desc": "Trial Implementation - alignment with BasicAudit (BALP), Generate Metadata Option, Simplified Publish Option, and Publish of FHIR-Documents Option.",
                "descmd": "Version 4.2.0\r\n - changed to AuditEvent profiling leveraging [Basic Audit Log Patterns (BALP) Release 1.1.0](https://profiles.ihe.net/ITI/BALP/index.html)\r\n   - changes to RESTful type, and query subtype\r\n - Added new features\r\n   - Add an [Generate Metadata](1332_actor_options.html#13325-generate-metadata-option) that adds the [ITI-106](ITI-106.html) operation that allows for one structured/coded document to be published.\r\n     - Is the use of Operation preferrable to the Simplified Publish?\r\n   - Add an [Simplified Publish](1332_actor_options.html#13324-simplified-publish-option) option that allows for one DocumentReference with the document in the .data element to be published, expecting the Document Recipient to create the SubmissionSet derived off of the DocumentReference and Community mapping policy.\r\n   - Add an [ITI-65 FHIR Documents Publish](1332_actor_options.html#13326-iti-65-fhir-documents-publish-option) option with support in ITI-65 to include a FHIR Document Bundle as an alternative to Binary. This makes less the burden on the Document Source to seralize the content into an appropriate Binary format, as that requirement is moved to the Document Recipient. There are use-cases where the Document Recipient will use the FHIR Document Bundle directly, and there are requirements on the Document Recipient to seralize the FHIR Document Bundle when grouped with non-FHIR Actors like XDS/XDR/XDM.\r\n     - This is added as an option at this time to keep base compatibility with existing MHD. This may become normal functionality of ITI-65 eventually\r\n   - Each of these new options may survive or may be removed. Please voice your interest, and sign up for IHE-Connectathon to test these options. Based on interest these Options may survive or be removed.\r\n - better clarity on types of Identifier\r\n - a method has been added to support DocumentReference replace that is used by the Document Source to mark the old/replaced DocumentReference instance as superseded.",
                "changes": "a_issues.html"
            },
            {
                "version": "4.2.0-ballot",
                "desc": "Public Comment for new features including alignment with BasicAudit, Generate Metadata, Simplified Publish, and Publish of FHIR-Documents.",
                "path": "https://profiles.ihe.net/ITI/MHD/4.2.0-ballot",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-10-21"
            },
            {
                "version": "4.1.0",
                "desc": "Trial Implementation - Technical Corrections and google analytics",
                "path": "https://profiles.ihe.net/ITI/MHD/4.1.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-02-28"
            },
            {
                "version": "4.0.2",
                "date": "2021-11-08",
                "desc": "Trial Implementation - IHE look-and-feel style change",
                "path": "https://profiles.ihe.net/ITI/MHD/4.0.2",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "4.0.1",
                "date": "2021-06-04",
                "desc": "Trial Implementation",
                "path": "https://profiles.ihe.net/ITI/MHD/4.0.1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "4.0.0-comment",
                "date": "2021-04-02",
                "desc": "Public Comment release for first IG authored version",
                "path": "https://profiles.ihe.net/ITI/MHD/4.0.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "3.2.0",
                "date": "2020-08-28",
                "desc": "Last PDF Trial Implementation",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHD_Rev3-2_TI_2020-08-28.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_MHD",
        "title": "Mobile access to Health Documents (MHD)",
        "fhirversion_latest": "4.0.1",
        "current_version": "4.2.2-current",
        "repo": "https://github.com/IHE/ITI.MHD"
    },
    "ihe.iti.pdqm": {
        "url": "https://profiles.ihe.net/ITI/PDQm",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.PDQm/branches/main",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0",
                "path": "https://profiles.ihe.net/ITI/PDQm/3.0.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-23",
                "current": true,
                "desc": "PDQm updated with $match operation for Trial Implementation",
                "descmd": "PDQm Version 3.0.0 for Trial Implementation\r\n\r\n- Introduced ITI-119 Patient Demographics Match as an alternative to ITI-78 Mobile Patient Demographics Query.\r\n- Introduced 2 options on the Patient Demographics Consumer, Patient Search and Match Operation, that correspond to support the ITI-78 and ITI-119 transactions, respectively. The Patient Demographics Consumer MAY support either or both options. \r\n- Introduced the Match Operation Option on the Patient Demographics Supplier to declare support for the ITI-119 transaction. The ITI-78 transaction remains REQUIRED on all Patient Demographics Suppliers. \r\n- Updated the PDQm Patient Profile to require business identifiers and align with requirements from [IPA Patient](http://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-patient.html).\r\n- Added requirements for which combinations of search parameters shall be supported by Patient Demographics consumers in section 2:3.78.4.1.2.1.1. \r\n- Added recommended response patterns for handling deprecated patient identifies to sections 2:3.78.4.1.3 and 2:3.78.4.3.3. \r\n- Updated conformance language to conform to BCP 14.\r\n- Other minor updates for clarity and conciseness.",
                "changes": "issues.html"
            },
            {
                "version": "3.0.0-comment",
                "path": "https://profiles.ihe.net/ITI/PDQm/3.0.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-11-16",
                "desc": "PDQm updated with $match operation for Public Comment",
                "descmd": "$match work item Public Comment\r\n\r\n- Introduced ITI-119 Patient Demographics Match as an alternative to ITI-78 Mobile Patient Demographics Query\r\n- Added dependency on [HL7 IPA](http://hl7.org/fhir/uv/ipa/STU1/ImplementationGuide-hl7.fhir.uv.ipa.html) and updated the PDQm Patient Profile to derive from [IPA Patient](http://hl7.org/fhir/uv/ipa/STU1/StructureDefinition-ipa-patient.html)\r\n- Added requirements for which combinations of search parameters shall be supported by Patient Demographics consumers in section 2:3.78.4.1.2.1.1. \r\n- Added recommended response patterns for handling deprecated patient identifies to sections 2:3.78.4.1.3 and 2:3.78.4.3.3. ",
                "changes": "issues.html"
            },
            {
                "version": "2.4.0",
                "desc": "Normative release for Trial Implementation - Technical Corrections and google analytics",
                "path": "https://profiles.ihe.net/ITI/PDQm/2.4.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-02-28"
            },
            {
                "version": "2.3.0",
                "date": "2021-11-08",
                "desc": "Trial Implementation",
                "path": "https://profiles.ihe.net/ITI/PDQm/2.3.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "2.2.1",
                "date": "2021-07-29",
                "desc": "Public Comment release for first IG authored version",
                "path": "https://profiles.ihe.net/ITI/PDQm/2.2.1",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "2.2.0",
                "date": "2020-08-28",
                "desc": "Rev. 2.2 - Trial Implementation (PDF)",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PDQm_Rev2-2_TI_2020-08-28.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_PDQm",
        "title": "Patient Demographics Query for Mobile (PDQm)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0",
        "repo": "https://github.com/IHE/ITI.PDQm"
    },
    "ihe.qrph.bfdr": {
        "url": "https://profiles.ihe.net/QRPH/bfdr",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/fhir-bfdr",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "UV_Vital_Records_Birth_and_Fetal_Death_Reporting",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/IHE/fhir-bfdr"
    },
    "ihe.pcc.ems-overall": {
        "url": "https://profiles.ihe.net/PCC/EMS-Overall",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/EMS-Overall",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PCC_EMSOverall",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.1-current",
        "repo": "https://github.com/IHE/EMS-Overall"
    },
    "ihe.iti.pixm": {
        "url": "https://profiles.ihe.net/ITI/PIXm",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.PIXm",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.4",
                "path": "https://profiles.ihe.net/ITI/PIXm/3.0.4",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-22",
                "current": true,
                "desc": "PIXm updated to use OperationOutcome for errors.",
                "descmd": "Clarified to use OperationOutcome directly for the error response example instead of within a Parameters resource.",
                "changes": "a_issues.html"
            },
            {
                "version": "3.0.3",
                "path": "https://profiles.ihe.net/ITI/PIXm/3.0.3",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-03",
                "desc": "Trial Implementation - quality, capabilityStatement improvements.",
                "descmd": "Version 3.0.3\r\n- add response recommendation for deleted or merged patient\r\n- quality improvements\r\n- capabilityStatement improvements.",
                "changes": "issues.html"
            },
            {
                "version": "3.0.2",
                "desc": "Normative release for Trial Implementation - Technical Corrections and google analytics",
                "path": "https://profiles.ihe.net/ITI/PIXm/3.0.2",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-02-28"
            },
            {
                "version": "3.0.0",
                "date": "2021-11-08",
                "desc": "Trial Implementation",
                "path": "https://profiles.ihe.net/ITI/PIXm/3.0.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "2.2.0",
                "date": "2021-07-29",
                "desc": "Public Comment release for first IG authored version",
                "path": "https://profiles.ihe.net/ITI/PIXm/2.2.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "2.1.0",
                "date": "2019-12-05",
                "desc": "Rev. 2.1 - Trial Implementation (PDF)",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PIXm_Rev2-1_TI_2019-12-05.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_PIXm",
        "title": "Patient Identifier Cross-referencing for mobile (PIXm)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.3",
        "repo": "https://github.com/IHE/ITI.PIXm"
    },
    "ihe.pcc.pcs": {
        "url": "https://profiles.ihe.net/PCC/PCS",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/PCC.PCS",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PCC_PCS",
        "title": "PCC - Paramedicine Care Summary (PCS)",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-draft",
        "repo": "https://github.com/IHE/PCC.PCS"
    },
    "ihe.pcc.odh": {
        "url": "https://profiles.ihe.net/PCC/ODH",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/IHE/PCC.ODH/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-comment",
                "path": "https://profiles.ihe.net/PCC/ODH/1.0.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-03-08",
                "current": true,
                "desc": "Public-Comment"
            }
        ],
        "name": "IHE_PCC_ODH",
        "title": "IHE FHIR Profile: Occupational Data for Health (ODH) - International",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-comment",
        "repo": "https://github.com/IHE/PCC.ODH"
    },
    "ihe.iti.dsubm": {
        "url": "https://profiles.ihe.net/ITI/DSUBm",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.DSUBm/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "https://profiles.ihe.net/ITI/DSUBm/1.0.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-29",
                "current": true,
                "desc": "DSUBm Version 1.0.0 for Trial Implementation",
                "descmd": "DSUBm Version 1.0.0 for Trial Implementation",
                "changes": "issues.html"
            },
            {
                "version": "1.0.0-comment",
                "path": "https://profiles.ihe.net/ITI/DSUBm/1.0.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.3.0",
                "date": "2023-11-17",
                "desc": "First Public-Comment",
                "descmd": "Version 1.0.0-comment\r\n    \r\n    - First Public-Comment",
                "changes": "issues.html"
            }
        ],
        "name": "IHE_ITI_DSUBm",
        "title": "Document Subscription for Mobile (DSUBm)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1-current",
        "repo": "https://github.com/IHE/ITI.DSUBm"
    },
    "ihe-fhir-pharm-medicationrecord": {
        "url": "http://profiles.ihe.net/PHARM/ihe.pharm.medicationrecord",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/pharm-medo",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "IHE_MPD",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/IHE/pharm-medo"
    },
    "ihe.iti.sips": {
        "url": "https://profiles.ihe.net/ITI/sIPS",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.sIPS/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "https://profiles.ihe.net/ITI/sIPS/1.0.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-11-17",
                "current": true,
                "desc": "Trial-Implementation resolving public-comments",
                "descmd": "Version 1.0.0\r\n\r\n- Trial-Implementation\r\n- resolved public-comments",
                "changes": "issues.html"
            },
            {
                "version": "1.0.0-comment",
                "path": "https://profiles.ihe.net/ITI/sIPS/1.0.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-03",
                "desc": "First Public-Comment",
                "descmd": "Version 1.0.0-comment\r\n\r\n- First Public-Comment\r\n- Previously named Accessibility to IPS (aIPS). Name was changed due to potential misunderstanding of other meanings of accessibility around user experience with disability.",
                "changes": "issues.html"
            }
        ],
        "name": "IHE_ITI_sIPS",
        "title": "Sharing of IPS (sIPS)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1-current",
        "repo": "https://github.com/IHE/ITI.sIPS"
    },
    "ihe.palm.rpc": {
        "url": "http://profiles.ihe.net/PaLM/RPC",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/PaLM.RPC",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PaLM_RPC",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/IHE/PaLM.RPC"
    },
    "ihe.iti.aips": {
        "url": "https://profiles.ihe.net/ITI/aIPS",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.aIPS",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_ITI_aIPS",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/ITI.aIPS"
    },
    "ihe.iti.npfs": {
        "url": "https://profiles.ihe.net/ITI/NPFS",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.NPFS/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "2.2.0",
                "path": "https://profiles.ihe.net/ITI/NPFS/2.2.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-11-16",
                "current": true,
                "desc": "Trial-Implementation release with resolved public comment",
                "descmd": "Version 2.2.0 \r\n    \r\n- Trial-Implementation\r\n- resolved public comment (bug fixed)",
                "changes": "issues.html"
            },
            {
                "version": "2.2.0-comment",
                "path": "https://profiles.ihe.net/ITI/NPFS/2.2.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-02",
                "desc": "Public Comment: Converted from PDF",
                "descmd": "4.2.0-comment \r\n- Converted to an IG\r\n- Replaced reference to MHD [ITI-68] Retrieve Document transaction width [ITI-109] Retrieve File transaction \r\n- Include CapabilityStatements for the actors\r\n",
                "changes": "issues.html"
            }
        ],
        "name": "IHE_ITI_NPFS",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.2.1-current",
        "repo": "https://github.com/IHE/ITI.NPFS"
    },
    "ihe.rad.imr": {
        "url": "https://profiles.ihe.net/RAD/IMR",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/RAD.IMR",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Trial Implementation: for experimental implementation and feedback.",
                "path": "https://profiles.ihe.net/RAD/IMR/1.0.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-07-25",
                "current": true
            },
            {
                "version": "1.0.0-comment",
                "desc": "Public Comment release for first IG authored version",
                "path": "https://profiles.ihe.net/RAD/IMR/1.0.0-comment",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-03-18"
            },
            {
                "version": "0.1.0",
                "desc": "Pre-Public Comment release for first IG authored version",
                "path": "https://profiles.ihe.net/RAD/IMR/0.1.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Pre Public Comment",
                "date": "2022-03-17"
            }
        ],
        "name": "IHE_RAD_IMR",
        "title": "Interactive Multimedia Report (IMR)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1-current",
        "repo": "https://github.com/IHE/RAD.IMR"
    },
    "ihe.iti.mhds": {
        "url": "https://profiles.ihe.net/ITI/MHDS",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.MHDS/branches/master/index.html",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.3.1",
                "path": "https://profiles.ihe.net/ITI/MHDS/2.3.1",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-04",
                "current": true,
                "desc": "Trial Implementation - use shareable as parent, quality, capabilityStatement improvements.",
                "descmd": "2.3.1\r\n\r\n- Quality improvements\r\n- Merge in approved CP-ITI-1238\r\n- add requirement for PMIR\r\n- Cleanup CapabilityStatements\r\n- update to pull in latest dependent IGs",
                "changes": "issues.html"
            },
            {
                "version": "2.3.0",
                "desc": "Trial Implementation - Converted to IG publisher",
                "path": "https://profiles.ihe.net/ITI/MHDS/2.3.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-02-28"
            },
            {
                "version": "2.2.0",
                "date": "2022-01-12",
                "desc": "Public Comment - Converted to IG publisher",
                "path": "https://profiles.ihe.net/ITI/MHDS/2.2.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "2.1.0",
                "date": "2020-05-29",
                "desc": "Last PDF Trial Implementation",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHDS.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_MHDS",
        "title": "Mobile Health Document Sharing",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.3.2-current",
        "repo": "https://github.com/IHE/ITI.MHDS"
    },
    "ihe.pcc.aps": {
        "url": "https://profiles.ihe.net/PCC/APS",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/PCC.APS",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PCC_APS",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/PCC.APS"
    },
    "ihe.domain.logical-datatypes": {
        "url": "https://profiles.ihe.net/Domain/LogicalDatatypes",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/datatypes",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "LogicalDatatypes",
        "title": "Logical Data Types",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/datatypes"
    },
    "ihe.fhir.template": {
        "url": "http://fhir.org/templates/ihe.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/IHE/ihe-ig-template",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.10.0",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.10.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.9.0",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.9.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.6.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.5.3",
                "desc": "Add nonumbers and automatic domain selecting graphic",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.5.3",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-06-21"
            },
            {
                "version": "0.5.2",
                "desc": "Add IHE favicon",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.5.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-03-30"
            },
            {
                "version": "0.5.1",
                "desc": "Add domain graphics, and switch to simple FHIR flame",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.5.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-03-17"
            },
            {
                "version": "0.5.0",
                "desc": "Add google analytics for IHE google analytics account",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-02-17"
            },
            {
                "version": "0.4.0",
                "desc": "Tweek colors to align with www.ihe.net, and adjust headers",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.3.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.3.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.2.0",
                "desc": "04-07-2020 - using proper colors and remove unneeded files",
                "path": "https://build.fhir.org/ig/IHE/ihe-ig-template/0.2.0",
                "status": "release",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "22-2-2020 - based on base template",
                "path": "https://build.fhir.org/ig/IHE/ihe-ig-template/0.1.0",
                "status": "release",
                "date": "2020-02-22"
            },
            {
                "version": "0.0.2",
                "desc": "First Release",
                "path": "http://fhir.org/templates/ihe.fhir.template/0.0.2",
                "status": "release",
                "date": "2020-02-05",
                "sequence": "Publications"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.10.0",
        "repo": "https://github.com/IHE/ihe-ig-template"
    },
    "ihe.rad.idr": {
        "url": "https://profiles.ihe.net/RAD/IDR",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/RAD.IDR",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_RAD_IDR",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1-current",
        "repo": "https://github.com/IHE/RAD.IDR"
    },
    "ihe.iti.balp": {
        "url": "https://profiles.ihe.net/ITI/BALP",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.BasicAudit/branches/main/index.html",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.3",
                "path": "https://profiles.ihe.net/ITI/BALP/1.1.3",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2024-02-14",
                "current": true,
                "desc": "Trial Implementation - use shareable as parent, quality, capabilityStatement improvements.",
                "descmd": "1.1.3 release\r\n\r\n - tighten constraints on .type\r\n - tighten constraints on required values\r\n - update for IG publisher warnings",
                "changes": "issues.html"
            },
            {
                "version": "1.1.2",
                "path": "https://profiles.ihe.net/ITI/BALP/1.1.2",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-01",
                "desc": "Trial Implementation - use shareable as parent, quality, capabilityStatement improvements.",
                "descmd": "Version 1.1.2\r\n- add date and patient.identifier search parameter\r\n- add context to extensions\r\n- fix slicing of a sliced extension profiling\r\n- do not include vocabulary display name in profiles to allow instances to not have display names\r\n- quality improvements\r\n- capabilityStatement improvements.",
                "changes": "issues.html"
            },
            {
                "version": "1.1.1",
                "desc": "Trial Implementation - Basic Audit Log Patterns (BALP) - Patch release\n\nThere are no functional changes or breaking changes. This release is primarly to address validation messages that have been made more strict by HL7 than when 1.1.0 was released.\n- clarify explaination of each structureDefinition profile\n- cleanup examples with explicit slice use to eliminate validation warnings\n- fix the Actor definitions\n- switch to new IHE template",
                "path": "https://profiles.ihe.net/ITI/BALP/1.1.1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-10-21"
            },
            {
                "version": "1.1.0",
                "desc": "Trial Implementation - Basic Audit Log Patterns (BALP)",
                "path": "https://profiles.ihe.net/ITI/BALP/1.1.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-05-04"
            },
            {
                "version": "1.0.1",
                "desc": "Public Comment - Basic Audit",
                "path": "https://profiles.ihe.net/ITI/BALP/1.0.1",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-03-01"
            }
        ],
        "name": "IHE_ITI_BALP",
        "title": "Basic Audit Log Patterns (BALP)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.3",
        "repo": "https://github.com/IHE/ITI.BasicAudit"
    },
    "ihe.pcc.ript": {
        "url": "http://profiles.ihe.net/PCC/RIPT",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/PCC.RIPT",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_PCC_RIPT",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-draft",
        "repo": "https://github.com/IHE/PCC.RIPT"
    },
    "ihe.pharm.supply": {
        "url": "http://profiles.ihe.net/PHARM/supply",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/pharm-supply",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "IHE_PHARM_SUPPLY",
        "title": "Supply of Products for Healthcare (SUPPLY)",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.3.0",
        "repo": "https://github.com/IHE/pharm-supply"
    },
    "ihe.iti.mxde": {
        "url": "https://profiles.ihe.net/ITI/mXDE",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/ITI.mXDE/branches/master/index.html",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.3.0",
                "path": "https://profiles.ihe.net/ITI/mXDE/1.3.0",
                "status": "trial-use",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-08-04",
                "current": true,
                "desc": "Trial-Implementation: Converted to IG from PDF, architected on Content Consumer Actor",
                "descmd": "1.3.0 Trial-Implementation\r\n- Public Comment resolution\r\n- Converted to an IG\r\n- Moved definition of Provenance here from QEDm as that enables it to be more specific to where the data are transformed.\r\n- Added examples of transform and thus use of Provenance.\r\n- Include CapabilityStatements for the actors\r\n- architect using Content Consumer and grouping with Document Sharing\r\n- depends on MHD, PDQm, PIXm, and BALP",
                "changes": "issues.html"
            },
            {
                "version": "1.3.0-comment",
                "path": "https://profiles.ihe.net/ITI/mXDE/1.3.0-comment",
                "status": "ballot",
                "sequence": "Publication",
                "fhirversion": "4.0.1",
                "date": "2023-05-04",
                "desc": "Public-Comment for conversion from PDF to IG publisher",
                "descmd": "Public-Comment for conversion from PDF to IG publisher\r\n- Converted to an IG, no content updates\r\n- Moved definition of Provenance here from QEDm as that enables it to be more specific to where the data are transformed.\r\n- Added examples of transform and thus use of Provenance.\r\n- Include CapabilityStatements for the actors\r\n- depends on MHD, PDQm, PIXm, and BALP",
                "changes": "issues.html"
            },
            {
                "version": "1.2.0",
                "date": "2017-08-18",
                "desc": "Rev. 1.2 - Trial Implementation (PDF)",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_mXDE.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_mXDE",
        "title": "Mobile Cross-Enterprise Document Data Element Extraction (mXDE)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.3.0",
        "repo": "https://github.com/IHE/ITI.mXDE"
    },
    "ihe.iti.mcsd": {
        "url": "https://profiles.ihe.net/ITI/mCSD",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/IHE/ITI.mCSD/branches/main",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.8.0",
                "desc": "Trial-Implementation",
                "path": "https://profiles.ihe.net/ITI/mCSD/3.8.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-08-12",
                "current": true
            },
            {
                "version": "3.7.0",
                "desc": "Public-Comment: comment resolution",
                "path": "https://profiles.ihe.net/ITI/mCSD/3.7.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-05-10"
            },
            {
                "version": "3.6.1",
                "desc": "Public-Comment: addition of Endpoint and OrganizationAffiliation",
                "path": "https://profiles.ihe.net/ITI/mCSD/3.6.1",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-03-02"
            },
            {
                "version": "3.5.0",
                "desc": "Normative release for Trial Implementation - Converted to IG publisher and google analytics",
                "path": "https://profiles.ihe.net/ITI/mCSD/3.5.0",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication",
                "date": "2022-02-28"
            },
            {
                "version": "3.4.0",
                "date": "2022-01-12",
                "desc": "Public Comment - Converted to IG publisher",
                "path": "https://profiles.ihe.net/ITI/mCSD/3.4.0",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            },
            {
                "version": "3.3.0",
                "date": "2021-07-02",
                "desc": "Last PDF Trial Implementation",
                "path": "https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_mCSD_Rev3-3_TI_2021-07-02.pdf",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "Publication"
            }
        ],
        "name": "IHE_ITI_mCSD",
        "title": "Mobile Care Services Discovery (mCSD)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.8.1-current",
        "repo": "https://github.com/IHE/ITI.mCSD"
    },
    "ihe.qrph.vrdr": {
        "url": "http://profiles.ihe.net/QRPH/VRDR",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/IHE/QRPH.VRDR",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IHE_QRPH_VRDR",
        "title": "Vital Records Death Reporting (VRDR) FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.0-current",
        "repo": "https://github.com/IHE/QRPH.VRDR"
    },
    "my-ig": {
        "url": "http://example.com/fhir/example",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-pt/adr-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ExampleIG",
        "title": "HL7 PT FHIR Implementation Guide: Example IG Release 1 | STU1",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-pt/adr-ig"
    },
    "hl7.fhir.pt.patient-admin-ig": {
        "url": "http://example.com/fhir/example",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-pt/patient-admin-ig",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "ExampleIG",
        "title": "HL7 PT FHIR Implementation Guide: Example IG Release 1 | STU1",
        "fhirversion_latest": "4.3.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/hl7-pt/patient-admin-ig"
    },
    "hl7.fhir.pt.core": {
        "url": "http://hl7.pt/fhir/core",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-pt/core",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "hl7fhirptcore",
        "title": "HL7 PT FHIR Implementation Guide: Example IG Release 1 | STU1",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/hl7-pt/core"
    },
    "il.moh.mri.r4": {
        "url": "http://fhir.health.gov.il/mri",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/vadi2/MRI-Scheduling",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MRIScheduling",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/vadi2/MRI-Scheduling"
    },
    "medcom.fhir.dk.xds.metadata": {
        "url": "http://medcomfhir.dk/ig/xdsmetadata",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-xds-metadata",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "TerminologyforXDSMetadata",
        "title": "Terminology for XDS Metadata",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.96.5",
        "repo": "https://github.com/medcomdk/dk-medcom-xds-metadata"
    },
    "medcom.fhir.dk.acknowledgement": {
        "url": "http://medcomfhir.dk/ig/acknowledgement",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-acknowledgement",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "2.0.2",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.2",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-02-05",
                "descmd": "* Updated reference to medcom.fhir.dk.terminology\r\n* Updated instances due to the change in terminology reference\r\n* Technical modification of the invariant medcom-acknowledgement-2, no requirements has changed",
                "changes": "https://github.com/medcomdk/dk-medcom-acknowledgement/releases",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.1",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-03-10",
                "descmd": "Updated description of MessageHeader.source and modified examples"
            },
            {
                "version": "2.0.0",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2022-10-05"
            },
            {
                "version": "1.0.0",
                "date": "2021-03-23",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/fhir/ig/dk-medcom-acknowledgement",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedComAcknowledgement",
        "title": "DK MedCom acknowledgement",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.2",
        "repo": "https://github.com/medcomdk/dk-medcom-acknowledgement"
    },
    "dk.medcom.ehmi.eds": {
        "url": "http://medcomehmi.dk/ig/ehmi-eds",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-acknowledgement",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "2.0.2",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.2",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-02-05",
                "descmd": "* Updated reference to medcom.fhir.dk.terminology\r\n* Updated instances due to the change in terminology reference\r\n* Technical modification of the invariant medcom-acknowledgement-2, no requirements has changed",
                "changes": "https://github.com/medcomdk/dk-medcom-acknowledgement/releases",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.1",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-03-10",
                "descmd": "Updated description of MessageHeader.source and modified examples"
            },
            {
                "version": "2.0.0",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2022-10-05"
            },
            {
                "version": "1.0.0",
                "date": "2021-03-23",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/fhir/ig/dk-medcom-acknowledgement",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EHMIedsIG",
        "title": "DK EHMI Delivery Status (EDS)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/medcomdk/dk-ehmi-com-status"
    },
    "dk-ehmi-sbdh": {
        "url": "http://medcomehmi.dk/ig/ehmi-sbdh",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-acknowledgement",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "2.0.2",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.2",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-02-05",
                "descmd": "* Updated reference to medcom.fhir.dk.terminology\r\n* Updated instances due to the change in terminology reference\r\n* Technical modification of the invariant medcom-acknowledgement-2, no requirements has changed",
                "changes": "https://github.com/medcomdk/dk-medcom-acknowledgement/releases",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.1",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-03-10",
                "descmd": "Updated description of MessageHeader.source and modified examples"
            },
            {
                "version": "2.0.0",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/ig/acknowledgement/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2022-10-05"
            },
            {
                "version": "1.0.0",
                "date": "2021-03-23",
                "desc": "MedCom acknowledgement",
                "path": "http://medcomfhir.dk/fhir/ig/dk-medcom-acknowledgement",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DKEHMISBDHIG",
        "title": "DK EHMI SBDH IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.9.0",
        "repo": "https://github.com/medcomdk/dk-ehmi-sbdh"
    },
    "medcom.fhir.dk.carecommunicationtestscripts": {
        "url": "http://medcomfhir.dk/ig/carecommunicationtestscripts",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-carecommunication-testscripts",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CareCommunicationTestscripts",
        "title": "CareCommunication Test scripts",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0",
        "repo": "https://github.com/medcomdk/dk-medcom-carecommunication-testscripts"
    },
    "dk.ehmi.eds": {
        "url": "http://medcomehmi.dk/ig/dk-ehmi-eds",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-ehmi-eds",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EHMIedsIG",
        "title": "DK EHMI Delivery Status (EDS)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/medcomdk/dk-medcom-ehmi-eds"
    },
    "medcom.fhir.dk.ihe.xds.metadata": {
        "url": "https://medcomfhir.dk/ig/ihexdsmetadata",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-ihe-xds-metadata",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedComIHEXDSMetadata",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.96.0",
        "repo": "https://github.com/medcomdk/dk-medcom-ihe-xds-metadata"
    },
    "dk.medcom.ehmi.eer": {
        "url": "http://medcomehmi.dk/ig/ehmi-eer",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-ehmi-mCSD",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EHMIEERIG",
        "title": "DK EHMI Endpoint Register (EER)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/medcomdk/dk-ehmi-mCSD"
    },
    "medcom.fhir.dk.diagnosiscard": {
        "url": "http://medcomfhir.dk/ig/diagnosiscard",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-diagnosiscard",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedComDiagnosisCard",
        "title": "DK MedCom Diagnosis Card",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/medcomdk/dk-medcom-diagnosiscard"
    },
    "dk.ehmi.eer": {
        "url": "http://medcomehmi.dk/ig/dk-ehmi-eer",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk-ehmi-eer",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EHMIEndpointRegisterEERIG",
        "title": "DK EHMI Endpoint Register (EER)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/medcomdk/dk-ehmi-eer"
    },
    "medcom.fhir.dk.carecommunication": {
        "url": "http://medcomfhir.dk/ig/carecommunication",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-carecommunication",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "2.1.0",
                "path": "http://medcomfhir.dk/ig/carecommunication/2.1.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-04-14",
                "descmd": "- CareCommunication profile: \r\n    - In the CareCommunication profile author, authorrole, relevant phonenumber and creation date is made optional (card 0..1) to include for attachments.\r\n    - Information about the episode of care identifier is clarified.\r\n    - Figure under Scope and Usage is updated\r\n- In general: \r\n    - Examples are updated and more examples are included. \r\n    - A recommendation about use of predefined reasons for cancellations is added under Introduction > Cancel message. \r\n    - A description about download is added under Download",
                "changes": "https://github.com/medcomdk/dk-medcom-carecommunication/releases",
                "current": true
            },
            {
                "version": "2.0.0",
                "date": "2022-11-24",
                "path": "http://medcomfhir.dk/ig/carecommunication/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "descmd": "- Communication.recipient may reference a MedComCoreCareTeam or MedComCorePractitionerRole\r\n- MedComCareCommunicationSenderExtension is added an allow reference to a MedComCoreCareTeam or MedComCorePractitionerRole\r\n- Communication.sender is no longer MS, Communication.extension.sender is MS\r\n- MedComCareCommunicationPayloadAuthorContactExtension is added and referenced from Communication.payload.extension.authorContact\r\n- MessageHeader.focus is changed from 1..1 to 1..2\r\n- Constraint 1-13 applied to MedComCommunication and MedComCareCommunicationMessage are added or updated.\r\n- Examples and descriptions updated due to the above changes",
                "changes": "https://github.com/medcomdk/dk-medcom-carecommunication/releases"
            },
            {
                "version": "1.0.0",
                "date": "2021-03-23",
                "desc": "MedCom CareCommunication",
                "path": "http://medcomfhir.dk/fhir/ig/dk-medcom-carecommunication",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedComCarecommunication",
        "title": "DK MedCom Carecommunication",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0",
        "repo": "https://github.com/medcomdk/dk-medcom-carecommunication"
    },
    "dk.ehmi.terminology": {
        "url": "http://medcomehmi.dk/ig/dk-ehmi-terminology",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-carecommunication",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "2.1.0",
                "path": "http://medcomfhir.dk/ig/carecommunication/2.1.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-04-14",
                "descmd": "- CareCommunication profile: \r\n    - In the CareCommunication profile author, authorrole, relevant phonenumber and creation date is made optional (card 0..1) to include for attachments.\r\n    - Information about the episode of care identifier is clarified.\r\n    - Figure under Scope and Usage is updated\r\n- In general: \r\n    - Examples are updated and more examples are included. \r\n    - A recommendation about use of predefined reasons for cancellations is added under Introduction > Cancel message. \r\n    - A description about download is added under Download",
                "changes": "https://github.com/medcomdk/dk-medcom-carecommunication/releases",
                "current": true
            },
            {
                "version": "2.0.0",
                "date": "2022-11-24",
                "path": "http://medcomfhir.dk/ig/carecommunication/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "descmd": "- Communication.recipient may reference a MedComCoreCareTeam or MedComCorePractitionerRole\r\n- MedComCareCommunicationSenderExtension is added an allow reference to a MedComCoreCareTeam or MedComCorePractitionerRole\r\n- Communication.sender is no longer MS, Communication.extension.sender is MS\r\n- MedComCareCommunicationPayloadAuthorContactExtension is added and referenced from Communication.payload.extension.authorContact\r\n- MessageHeader.focus is changed from 1..1 to 1..2\r\n- Constraint 1-13 applied to MedComCommunication and MedComCareCommunicationMessage are added or updated.\r\n- Examples and descriptions updated due to the above changes",
                "changes": "https://github.com/medcomdk/dk-medcom-carecommunication/releases"
            },
            {
                "version": "1.0.0",
                "date": "2021-03-23",
                "desc": "MedCom CareCommunication",
                "path": "http://medcomfhir.dk/fhir/ig/dk-medcom-carecommunication",
                "status": "trial-use",
                "sequence": "STU",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DKEHMITerminologyIG",
        "title": "DK EHMI Terminology",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.8.0",
        "repo": "https://github.com/medcomdk/dk-ehmi-terminology"
    },
    "medcom.fhir.dk.terminology": {
        "url": "http://medcomfhir.dk/ig/terminology",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-terminology",
                "status": "ci-build"
            },
            {
                "version": "1.6.0",
                "path": "http://medcomfhir.dk/ig/terminology/1.6.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-02-05",
                "descmd": "* Added the code image/bmp to the ValueSet MedComCoreAttachmentMimeTypes to support the CareCommunication standard.\r\n* Added the code NAVU to the ValueSet MedComCorePractitionerRoles to support the CareCommunication standard.\r\n* Updated the codes in CodeSystem MedComObservationResultGroup and ValueSet MedComObservarionResponesGroupValueSet\r\n* Updated the CodeSystem reference in the ValueSet MedComAcknowledgementIssueDetailValues",
                "changes": "https://github.com/medcomdk/dk-medcom-terminology/releases",
                "current": true
            },
            {
                "version": "1.5.0",
                "path": "http://medcomfhir.dk/ig/terminology/1.5.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-10-31",
                "descmd": "Added ValueSets and Codsystem that shall be used in HomecareObservation message: \r\n* MedComInterpretationCodes  \r\n* MedComCoreObservationStatus \r\n* MedComDiagnosticReportCodes \r\n* MedComDiagnosticReportStatus \r\n* MedComHomeCareObservationMessageActivityCodes \r\n* MedComMessagingMessageType \r\n* MedComObservationGroup \r\n* MedComObservationCodes \r\n* MedComProducerID \r\n* NPUObservationCodes  \r\nExperimental flag added to CodeSystems and ValueSets \r\nUpdated MedComMessagingMapFhirToSorEdi ConceptMap"
            },
            {
                "version": "1.4.0",
                "path": "http://medcomfhir.dk/ig/terminology/1.4.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-07-11",
                "descmd": "* CodeSystem MedComAcknowledgementErrorCodes is included\r\n* ValueSet MedComAcknowledgementIssueDetails is updated to include codes from MedComAcknowledgementErrorCodes and [operation-outcome](http://hl7.org/fhir/ValueSet/operation-outcome)\r\n* In ValueSet MedComCorePractitionerRoles, the display value of two codes (radiograf and socialogsundhedsassistent) is modified. \r\n* In CodeSystem MedComMessagingSorEdiCodeSystem and ValueSet MedComMessagingSorEdiValues, the display values of FDIS91 and FDIS20 are switched\r\n* Added experimental-flag to CodeSystems and ValueSet"
            },
            {
                "version": "1.3.0",
                "path": "http://medcomfhir.dk/ig/terminology/1.3.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-04-14",
                "descmd": "* Added CodeSystem with reasons for cancellation, called MedComMessagingCancellationReason.",
                "changes": "https://github.com/medcomdk/dk-medcom-terminology/releases"
            },
            {
                "version": "1.2.0",
                "path": "http://medcomfhir.dk/ig/terminology/1.2.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2023-03-10",
                "descmd": "* Added the code `FCTL` and display value to CodeSystem MedComMessagingSorEdiSystem, ValueSet MedComMessagingSorEdiValues and added Acknowledgement as codes in the ConceptMap MedComMessagingMapFhirToSorEdi."
            },
            {
                "version": "1.1.1",
                "date": "2023-01-05",
                "path": "http://medcomfhir.dk/ig/terminology/1.1.1",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "descmd": "Alligned the content of display values in the CodeSystem MedComMessagingActivityCodes and ValueSet MedComHospitalNotificationMessageActivityCodes."
            },
            {
                "version": "1.1.0",
                "date": "2022-11-21",
                "path": "http://medcomfhir.dk/ig/terminology/1.1.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "descmd": "- Added the CodeSystem MedComCorePractitionerRolesAutorisationsregistret and MedComCorePractitionerRolesSKSadministrativ and the ValueSet MedComCorePractitionerRoles to describe the roles of a practitioner.\n- The ValueSet MedComCareCommunicationMessageActivityCodes was updated as the code `carbon copy` was deprecated.\n- The ValueSet MedComCoreAttachmentMimeTypes was updated as the code `tiff` was added\n- The CodeSystem MedComCareCommunicationCategoryCodes was updated as Danish translations were added\n"
            },
            {
                "version": "1.0.0",
                "desc": "*General*: Moved all terminologies to this IG. MedComHospitalNotificationEncounterClassCode: Removed the code \u2018other\u2019 from the ValueSet. MedComMessagingActivityCodes: Changed code \u2018acknowledgment\u2019 to \u2018acknowledgement\u2019 and updated description. HospitalNotificationActivityCodes: Added a Danish description of the codes. Full Changelog: https://github.com/medcomdk/dk-medcom-terminology/commits/v.2.0.0-IG",
                "status": "release",
                "sequence": "Release",
                "path": "http://medcomfhir.dk/ig/terminology/1.0.0",
                "fhirversion": "4.0.1",
                "date": "2022-10-05"
            }
        ],
        "name": "MedComTerminology",
        "title": "DK MedCom Terminology",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.6.0",
        "repo": "https://github.com/medcomdk/dk-medcom-terminology"
    },
    "medcom.fhir.dk.homecareobservation": {
        "url": "http://medcomfhir.dk/ig/homecareobservation",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/medcomdk/dk_HomeCareObservations",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedComHomeCareObservation",
        "title": "MedCom HomeCareObservation",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/medcomdk/dk_HomeCareObservations"
    },
    "medcom.fhir.dk.messaging": {
        "url": "http://medcomfhir.dk/ig/messaging",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/medcomdk/dk-medcom-messaging",
                "status": "ci-build",
                "fhirVersion": "4.0.1",
                "current": true
            },
            {
                "version": "2.0.0",
                "desc": "MedCom Messaging",
                "path": "http://medcomfhir.dk/ig/messaging/2.0.0",
                "status": "release",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2022-10-05",
                "current": true
            },
            {
                "version": "1.0.3",
                "date": "2021-03-23",
                "desc": "MedCom Messaging",
                "path": "http://medcomfhir.dk/fhir/messaging/ig/dk-medcom-messaging",
                "status": "trial-use",
                "sequence": "STU",
                "fhirVersion": "4.0.1"
            }
        ],
        "name": "MedComMessaging",
        "title": "DK MedCom Messaging",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/medcomdk/dk-medcom-messaging"
    },
    "hl7.eu.fhir.gk": {
        "url": "http://hl7.eu/fhir/ig/gk",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gatekeeper-project/gk-fhir-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "GatekeeperImplementationGuide",
        "title": "GATEKEEPER Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/gatekeeper-project/gk-fhir-ig"
    },
    "hl7.eu.fhir.gk-poc-ai": {
        "url": "http://hl7.eu/fhir/ig/gk-poc-ai",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gatekeeper-project/poc-ai-gk",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "GatekeeperAiProofOfConcept",
        "title": "GATEKEEPER Proof of Concept for AI operations",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/gatekeeper-project/poc-ai-gk"
    },
    "hl7.au.base.template": {
        "url": "http://fhir.org/templates/hl7.base.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-hl7",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.9.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.9.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Add otherScripts for template security changes",
                "date": "2023-09-13"
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.5.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.4.0",
                "desc": "Support for xprod product family",
                "path": "http://fhir.org/templates/hl7.base.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.3.2",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.3.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.2.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.2.0",
                "desc": "Added validation of package-list, jira spec file generation",
                "path": "http://fhir.org/templates/hl7.base.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-17"
            },
            {
                "version": "0.0.1",
                "desc": "First Release",
                "path": "http://fhir.org/templates/fhir.base.template/0.0.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-03"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.7.0",
        "repo": "https://github.com/hl7au/hl7.au.base.template"
    },
    "hl7.au.fhir.template": {
        "url": "http://fhir.org/templates/hl7.au.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7au/hl7.au.fhir.template",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Revised CSS styling",
                "current": true,
                "date": "2024-03-07"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade to add CSS for new labels",
                "date": "2024-01-18"
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.5.0",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.4.0",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.2.2",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.2.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.2.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.1.2",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.1.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.1.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "First release",
                "path": "http://fhir.org/templates/hl7.au.fhir.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-03"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.8.0",
        "repo": "https://github.com/hl7au/hl7.au.fhir.template"
    },
    "hl7.fhir.au.core": {
        "url": "http://hl7.org.au/fhir/core",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7au/au-fhir-core",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "AUCoreImplementationGuide",
        "title": "AU Core Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/hl7au/au-fhir-core"
    },
    "hl7.fhir.au.erequesting": {
        "url": "http://hl7.org.au/fhir/erequesting",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7au/au-fhir-erequesting",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "AUeRequesting",
        "title": "AU eRequesting",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0-ci-build",
        "repo": "https://github.com/hl7au/au-fhir-erequesting"
    },
    "hl7.fhir.au.draft.diagnostic-orders": {
        "url": "http://draft.hl7.org.au/fhir/diagnostic-orders",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7au/draft-diagnostic-orders",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ERequesting",
        "title": "Diagnostic Requests",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.9",
        "repo": "https://github.com/hl7au/draft-diagnostic-orders"
    },
    "hl7.au.sparked.template": {
        "url": "http://fhir.org/templates/hl7.au.sparked.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7au/hl7.au.sparked.template",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.3.0",
                "path": "http://fhir.org/templates/hl7.au.sparked.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on hl7.au.fhir.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.2.0",
                "path": "http://fhir.org/templates/hl7.au.sparked.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on hl7.au.fhir.template",
                "date": "2024-01-18"
            },
            {
                "version": "0.1.0",
                "desc": "First Release",
                "path": "http://fhir.org/templates/hl7.au.sparked.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2023-11-05"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.3.0",
        "repo": "https://github.com/hl7au/hl7.au.sparked.template"
    },
    "hl7.fhir.nl.zorgviewer": {
        "url": "http://hl7.nl/fhir/zorgviewer",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/RIVO-Noord/zorgviewer-ig",
                "fhirversion": "3.0.2"
            }
        ],
        "name": "zorgviewer-ig",
        "title": "RIVO-Noord Zorgviewer MVP2 Implementation Guide",
        "fhirversion_latest": "3.0.2",
        "current_version": "0.21.0",
        "repo": "https://github.com/RIVO-Noord/zorgviewer-ig"
    },
    "hl7.eu.fhir.gh-ips": {
        "url": "http://hl7.eu/fhir/ig/gravitate-health-ips",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/gravitate-health-ips",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "GhR4ImplementationGuide",
        "title": "Gravitate Health FHIR Implementation Guide (FHIR R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/gravitate-health-ips"
    },
    "hl7.eu.fhir.xpandh.ps": {
        "url": "http://hl7.eu/fhir/ig/xpandh/ps",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/xpandh-ps",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "XpandhPatientSummaryIg",
        "title": "XpanDH Patient Summary",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/xpandh-ps"
    },
    "hl7.eu.fhir.unicom": {
        "url": "http://unicom-project.eu/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/unicom-ig",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "UnicomIG",
        "title": "UnicomIG",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/unicom-ig"
    },
    "hl7.fhir.eu.extensions.r4": {
        "url": "http://hl7.eu/fhir/r4/extensions",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/extensions-r4",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Hl7EuExtensions",
        "title": "HL7 Europe Extensions",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0-ci",
        "repo": "https://github.com/hl7-eu/extensions-r4"
    },
    "hl7.eu.fhir.xpandh.lab": {
        "url": "http://hl7.eu/fhir/ig/xpandh/lab",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/xpandh-lab",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "XpandhLaboratoryIg",
        "title": "XpanDH Laboratory Report",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/xpandh-lab"
    },
    "hl7.eu.fhir.xpandh.hdr": {
        "url": "http://hl7.eu/fhir/ig/xpandh/hdr",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/xpandh-hdr",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "XpandhHospitalDischargeReportIg",
        "title": "XpanDH Hospital Discharge Report",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/xpandh-hdr"
    },
    "hl7.eu.fhir.pcsp": {
        "url": "http://hl7.eu/fhir/ig/pcsp",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7-eu/pcsp",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.eu/fhir/ig/pcsp/0.1.0",
                "status": "qa-preview",
                "sequence": "Release 1",
                "fhirversion": "4.0.1",
                "date": "2023-01-26",
                "current": true,
                "desc": "This is the version released after the platform validation (Project M12)."
            }
        ],
        "name": "PCSPImplementationGuide",
        "title": "PanCareSurPass Project HL7 FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/hl7-eu/pcsp"
    },
    "hl7.fhir.eu.r5.mpd": {
        "url": "http://hl7.eu/fhir/r5/mpd",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/mpd",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "Hl7EuMedPrescriptionDispenseIg",
        "title": "HL7 Europe Medication Prescription and Dispense",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/mpd"
    },
    "hl7.fhir.eu.mpd": {
        "url": "http://hl7.eu/fhir/mpd",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/mpd",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Hl7EuMedPrescriptionDispenseIg",
        "title": "HL7 Europe Medication Prescription and Dispense",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/mpd"
    },
    "hl7.eu.fhir.coalesced": {
        "url": "http://hl7.eu/fhir/ig/coalesced",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/coalesced",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CoalescedImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/coalesced"
    },
    "hl7.eu.fhir.xpandh": {
        "url": "http://hl7.eu/fhir/ig/xpandh",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/xpandh",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "XpandhIg",
        "title": "XpanDH Project",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/xpandh"
    },
    "hl7.eu.fhir.idea4rc": {
        "url": "http://hl7.eu/fhir/ig/idea4rc",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/hl7-eu/idea4rc",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "IDEA4RCImplementationGuide",
        "title": "IDEA4RC FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/idea4rc"
    },
    "hl7.fhir.eu.extensions": {
        "url": "http://hl7.eu/fhir/extensions",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/hl7-eu/extensions",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.eu/fhir/extensions/0.1.0",
                "status": "trial-use",
                "sequence": "Release",
                "fhirversion": "4.0.1",
                "date": "2024-02-20",
                "current": true,
                "desc": "This is the first STU version released"
            }
        ],
        "name": "Hl7EuExtensions",
        "title": "HL7 Europe Extensions",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/hl7-eu/extensions"
    },
    "uk-core-access": {
        "url": "https://fhir.hl7.org.uk/uk-core-access",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7-UK/UK-Core-Access",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "UKCoreAccess",
        "title": "HL7 UK - UK Core Access",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7-UK/UK-Core-Access"
    },
    "ncez.cz.fhir.core": {
        "url": "https://ncez.mzcr.cz/standards/fhir/ig/core",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/ncez-cz/cz-core",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CzCoreImplementationGuide",
        "title": "Czech Core Resources IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/ncez-cz/cz-core"
    },
    "openhie.fhir.template": {
        "url": "http://github.com/openhie/openhie-ig-template",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/openhie/openhie-ig-template",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/openhie/openhie-ig-template"
    },
    "ehi.api": {
        "url": "http://fhir.org/argonaut/ehi-api",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/argonautproject/ehi-api",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EHIExportAPI",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/argonautproject/ehi-api"
    },
    "fhir.blood": {
        "url": "https://build.fhir.org/ig/ReMeDi-Blut/remedi_ig",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/ReMeDi-Blut/remedi_ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BluttransfusionenImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/ReMeDi-Blut/remedi_ig"
    },
    "ch.fhir.ig.ch-atc": {
        "url": "http://fhir.ch/ig/ch-atc",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/ehealthsuisse/ch-atc",
                "status": "ci-build",
                "fhirVersion": "4.0.1",
                "current": true
            },
            {
                "version": "3.2.0",
                "path": "http://fhir.ch/ig/ch-atc/3.2.0",
                "status": "ballot",
                "sequence": "Draft",
                "fhirversion": "4.0.1",
                "date": "2024-01-31",
                "current": true,
                "desc": "eHealth Suissse",
                "changes": "changelog.html"
            },
            {
                "version": "3.2.0-ballot",
                "path": "http://fhir.ch/ig/ch-atc/3.2.0-ballot",
                "status": "ballot",
                "sequence": "Draft",
                "fhirversion": "4.0.1",
                "date": "2023-06-30",
                "desc": "eHealth Suissse",
                "changes": "changelog.html"
            },
            {
                "version": "3.1.0",
                "date": "2020-06-11",
                "desc": "CH ATC (v3.1.0)",
                "path": "http://fhir.ch/ig/ch-atc/3.1.0",
                "status": "draft",
                "fhirVersion": "4.0.1",
                "sequence": "Draft"
            },
            {
                "version": "1.2.0",
                "date": "2019-03-01",
                "desc": "CH ATC (v1.2.0) - www.e-health-suisse.ch/fileadmin/user_upload/Dokumente/2019/E/190528_Entwurf_EPDV-EDI_E2A5_ATC_V1.9_e.pdf",
                "path": "http://fhir.ch/ig/ch-atc/1.2.0",
                "status": "draft",
                "fhirVersion": "3.0.1",
                "sequence": "Draft"
            }
        ],
        "name": "CH_ATC",
        "title": "CH ATC (R4)",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.3.0-cibuild",
        "repo": "https://github.com/ehealthsuisse/ch-atc"
    },
    "fhir.remedi-blut": {
        "url": "https://fhir.simplifier.net/remedi-blut",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/lhake17/ig_remedi",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "RemediBlutIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/lhake17/ig_remedi"
    },
    "hl7.org.nz.fhir.ig.hpi": {
        "url": "http://hl7.org.nz/fhir/ig/hpi",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/hpi",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "NewZealandHPIIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.9.0",
        "repo": "https://github.com/HL7NZ/hpi"
    },
    "hl7.org.nz.fhir.ig.formulary": {
        "url": "https://fhir-docs.nzf.org.nz",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/nzf",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "NZFormularyIG",
        "title": "HL7 FHIR Implementation Guide - New Zealand Formulary/NZULM IG",
        "fhirversion_latest": "4.3.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7NZ/nzf"
    },
    "hl7.org.nz.fhir.ig.mdr": {
        "url": "http://hl7.org.nz/fhir/ig/mdr",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/mdr",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MedicinesDataRepository",
        "title": "Medicines Data Repository Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7NZ/mdr"
    },
    "fhir.org.nz.ig.base": {
        "url": "http://hl7.org.nz/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/nzbase",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7FHIRNewZealandBaseImplementationGuide",
        "title": "HL7\u00ae FHIR\u00ae New Zealand Base Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.1.0",
        "repo": "https://github.com/HL7NZ/nzbase"
    },
    "fhir.org.nz.ig.northernregion": {
        "url": "http://fhir.org.nz/ig/northernregion",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/northernRegion",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "NorthernRegionIG",
        "title": "Northern Region Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.4.6",
        "repo": "https://github.com/HL7NZ/northernRegion"
    },
    "hl7.org.nz.fhir.ig.cca": {
        "url": "http://hl7.org.nz/fhir/ig/cca",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7NZ/cca",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CcaImplementationGuide",
        "title": "HL7\u00ae FHIR\u00ae Te Aho o Te Kahu, Cancer Control Agency Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7NZ/cca"
    },
    "gabriel0316.hl7atcoreprofiles": {
        "url": "http://hl7.at/fhir/HL7ATCoreProfiles/4.0.1",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gabriel0316/HL7-AT-FHIR-Core-R4",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7AustriaImplementationGuide",
        "title": "HL7\u00ae Austria FHIR\u00ae Core Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/gabriel0316/HL7-AT-FHIR-Core-R4"
    },
    "hl7.at.fhir.gkl.ig-tooling": {
        "url": "https://gabriel0316.github.io/ig-tooling-pages/ig/ig-tooling",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gabriel0316/ig-tooling/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "https://gabriel0316.github.io/ig-tooling-pages/ig/ig-tooling/0.1.0",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "fhirversion": "4.0.1",
                "date": "2024-03-28",
                "desc": "First attempt of release",
                "changes": "changelog.html"
            }
        ],
        "name": "IntegrierteVersorgungHerzinsuffizienz",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/gabriel0316/ig-tooling"
    },
    "gabriel0316.terminologies": {
        "url": "https://termgit.elga.gv.at",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gabriel0316/terminology",
                "fhirversion": "4.3.0"
            }
        ],
        "name": "termgit",
        "title": "\u00d6sterreichischer e-Health-Terminologie-Browser",
        "fhirversion_latest": "4.3.0",
        "current_version": "2.6.0",
        "repo": "https://github.com/gabriel0316/terminology"
    },
    "hl7.cda.us.eyecare": {
        "url": "http://hl7.org/cda/us/eyecare",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/cda-eyecare",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "CDAEyecare",
        "title": "Specialty Eyecare CDA Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/cda-eyecare"
    },
    "hl7.fhir.us.pacio-rt": {
        "url": "http://hl7.org/fhir/us/pacio-rt",
        "versions": [
            {
                "version": "current",
                "desc": "PACIO Re-Assessment Timepoints Implementation Guide CI Build",
                "path": "http://build.fhir.org/ig/HL7/fhir-pacio-rt",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "PACIO Re-Assessment Timepoints Implementation Guide Release 1 - US Realm",
                "path": "http://hl7.org/fhir/us/pacio-rt/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-09-28",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "PACIO Re-Assessment Timepoints Implementation Guide Release 1 - US Realm STU 1 Ballot",
                "path": "http://hl7.org/fhir/us/pacio-rt/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-04"
            }
        ],
        "name": "PACIOReAssessmentTimepoints",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-pacio-rt"
    },
    "hl7.fhir.uv.fhir-for-fair": {
        "url": "http://hl7.org/fhir/uv/fhir-for-fair",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-for-fair",
                "fhirversion": "4.1.0",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU 1",
                "path": "http://hl7.org/fhir/uv/fhir-for-fair/STU1",
                "sequence": "STU 1",
                "fhirversion": "4.3.0",
                "status": "trial-use",
                "date": "2022-09-28",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot 1",
                "path": "http://hl7.org/fhir/uv/fhir-for-fair/2022Jan",
                "sequence": "STU 1 (FHIR R4b)",
                "fhirversion": "4.1.0",
                "status": "ballot",
                "date": "2021-12-05"
            }
        ],
        "name": "FhirForFairIG",
        "title": "FHIR for FAIR - FHIR Implementation Guide",
        "fhirversion_latest": "4.3.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-for-fair"
    },
    "hl7.fhir.uv.termchangeset": {
        "url": "https://hl7.org/fhir/uv/termchangeset",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/tinkar-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "termchangeset",
        "title": "Terminology Change Set Exchange",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/HL7/tinkar-ig"
    },
    "hl7.ca.fhir.template": {
        "url": "http://fhir.org/templates/hl7.ca.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-ca",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.4.0",
                "path": "http://fhir.org/templates/hl7.ca.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.3.0",
                "path": "http://fhir.org/templates/hl7.ca.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template (again)",
                "date": "2023-10-27"
            },
            {
                "version": "0.2.0",
                "path": "http://fhir.org/templates/hl7.ca.fhir.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.1.0",
                "desc": "First release of the template package",
                "path": "http://fhir.org/templates/hl7.ca.fhir.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-11-25"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.4.0",
        "repo": "https://github.com/HL7/ig-template-ca"
    },
    "hl7.fhir.uv.livd": {
        "url": "http://hl7.org/fhir/uv/livd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/livd",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/livd/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-21",
                "desc": "The January 2024 Ballot Version is the third STU ballot of this implementation guide."
            },
            {
                "version": "0.3.0",
                "desc": "STU 1 Ballot 2",
                "path": "http://hl7.org/fhir/uv/livd/2021Jan",
                "sequence": "STU 1 (FHIR R4)",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "date": "2020-12-18"
            },
            {
                "version": "0.2.0",
                "date": "2019-08-06",
                "desc": "STU 1 Ballot 1",
                "path": "http://hl7.org/fhir/uv/livd/2019Sep",
                "sequence": "STU 1 (FHIR R4)",
                "fhirversion": "4.0.0",
                "status": "ballot"
            },
            {
                "version": "0.1.0",
                "date": "2018-09-01",
                "desc": "Release 0.1.0 Draft for Comment",
                "path": "http://hl7.org/fhir/uv/livd/2018Sep",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            }
        ],
        "name": "LoincIvdTestCodeMapping",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/HL7/livd"
    },
    "hl7.fhir.us.physical-activity": {
        "url": "http://hl7.org/fhir/us/physical-activity",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/HL7/physical-activity",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/physical-activity/STU1",
                "status": "trial-use",
                "sequence": "STU 1.0",
                "fhirversion": "4.0.1",
                "date": "2023-08-25",
                "current": true,
                "desc": "STU 1.0 Release",
                "descmd": "STU 1.0 Release.  See [list of changes](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/history.html#1.0.0)"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/us/physical-activity/2023May",
                "status": "ballot",
                "sequence": "STU 1.0",
                "fhirversion": "4.0.1",
                "date": "2023-03-28",
                "desc": "STU 1.0 initial ballot",
                "descmd": "STU 1.0 initial ballot release."
            }
        ],
        "name": "PhysicalActivity",
        "title": "Physical Activity Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/HL7/physical-activity"
    },
    "hl7.fhir.affiliate.template": {
        "url": "http://fhir.org/templates/hl7.fhir.affiliate.template",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-affiliate",
                "fhirversion": "4.6.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "4.6.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/ig-template-affiliate"
    },
    "hl7.fhir.us.medmorph-research-dex": {
        "url": "http://hl7.org/fhir/us/medmorph-research-dex",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-medmorph-research-dex",
                "status": "ci-build",
                "current": "true",
                "sequence": "STU 1",
                "fhirversion": "4.1.0"
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot (Jan 2022 Ballot)",
                "path": "http://hl7.org/fhir/us/medmorph-research-dex/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-09"
            }
        ],
        "name": "MedMorphResearchDataExchangeContentIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-medmorph-research-dex-ig"
    },
    "hl7.fhir.uv.rtls": {
        "url": "http://hl7.org/fhir/uv/rtls",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/rtls-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/rtls/2023May",
                "status": "ballot",
                "sequence": "STU 1.0",
                "fhirversion": "5.0.0",
                "date": "2023-03-30",
                "desc": "STU 1.0 initial ballot",
                "descmd": "STU 1.0 initial ballot"
            }
        ],
        "name": "RTLS",
        "title": "Real Time Location Services Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/rtls-ig"
    },
    "hl7.fhir.uv.shc-vaccination": {
        "url": "http://hl7.org/fhir/uv/shc-vaccination",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.6.2",
                "desc": "STU 1 Ballot Version",
                "path": "http://hl7.org/fhir/uv/shc-vaccination/2021Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-08-13"
            }
        ],
        "name": "SMARTHealthCardsVaccinationAndTestingIG",
        "title": "SMART Health Cards: Vaccination &amp; Testing Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-shc-vaccination-ig"
    },
    "hl7.fhir.us.military-service": {
        "url": "http://hl7.org/fhir/us/military-service",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-military-service",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/military-service/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-05-30",
                "current": true,
                "desc": "HL7 FHIR Implementation Guide for Military Service History and Status"
            },
            {
                "version": "0.1.0",
                "desc": "First public ballot",
                "path": "http://hl7.org/fhir/us/military-service/2021Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-08-13"
            }
        ],
        "name": "MilitaryService",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-military-service"
    },
    "hl7.fhir.uv.ipa": {
        "url": "http://hl7.org/fhir/uv/ipa",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-ipa",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/ipa/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-03-26",
                "current": true,
                "desc": "STU1 Version the International Patient Access (IPA) Implementation Guide: This is the first published version of this guide and the result of the resolution of community comments for the January 2022 Ballot Version."
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/fhir/uv/ipa/2022Jan",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "date": "2021-12-06"
            }
        ],
        "name": "InternationalPatientAccess",
        "title": "International Patient Access",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-ipa"
    },
    "hl7.cql": {
        "url": "http://cql.hl7.org",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/cql",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.5.2",
                "desc": "Current Official Published Version - Normative Release 1 (mixed Normative/Trial-use content + 1 technical errata)",
                "descmd": "* [FHIR-32666](https://jira.hl7.org/browse/FHIR-32666): Documented the use of the version parameter for media types  \r\n* [FHIR-34804](https://jira.hl7.org/browse/FHIR-34804): Improved backwards compatibility support for terminology types \r\n* [FHIR-32951](https://jira.hl7.org/browse/FHIR-32951): Corrects several inconsistencies in documentation of function-style invocation of operators \r\n* [FHIR-35917](https://jira.hl7.org/browse/FHIR-35917): Adds missing documentation for several elements in the Reference and Logical Specification \r\n* [FHIR-35904](https://jira.hl7.org/browse/FHIR-35904): Clarifies semantics for interval computation, uncertainty calculations, and list membership in the presence of nulls \r\n* Several corrections to informative content including diagrams, best-practices, and conventions documentation \r\n* Updated test cases based on implementation feedback \r\n* [J#FHIR-27059](https://jira.hl7.org/browse/FHIR-27059): Clarified equality and equivalent behavior between UCUM and calendar units [View changes](https://github.com/HL7/cql/search?q=adea3ea&type=commits) \r\n* [J#FHIR-27076](https://jira.hl7.org/browse/FHIR-27076): Allowed declarations in any order [View changes](https://github.com/HL7/cql/search?q=27076&type=commits) \r\n* [J#FHIR-27067](https://jira.hl7.org/browse/FHIR-27067): Changed text for multi-line comments to not use the @@ delimiter [View changes](https://github.com/HL7/cql/search?q=27067&type=commits) \r\n* [J#FHIR-27473](https://jira.hl7.org/browse/FHIR-27473): Added libraryId and libraryVersion to error annotation information [View changes](https://github.com/HL7/cql/search?q=b0dbd73&type=commits) \r\n* [J#FHIR-27514](https://jira.hl7.org/browse/FHIR-27514): Added syntax diagrams as an Appendix and linked throughout [View changes](https://github.com/HL7/cql/search?q=27514&type=commits) \r\n* [J#FHIR-27063](https://jira.hl7.org/browse/FHIR-27063): Corrected examples of `last day of month` behavior for date arithmetic [View changes](https://github.com/HL7/cql/search?q=39ca51e&type=commits) \r\n* [J#FHIR-28438](https://jira.hl7.org/browse/FHIR-28438): Aligned with FHIRPath to consider calendar durations above weeks, rather than above seconds, uncomparable with definite-time duration [View changes](https://github.com/HL7/cql/search?q=f2e7fb2&type=commits) \r\n* [J#FHIR-29552](https://jira.hl7.org/browse/FHIR-29552): Provided example of access to interval properties [View changes](https://github.com/HL7/cql/search?q=29552&type=commits) \r\n* [J#FHIR-29931](https://jira.hl7.org/browse/FHIR-29931): Corrected media types for cql.identifier and cql.expression to cql-identifier and cql-expression based on IANA feedback [View changes](https://github.com/HL7/cql/search?q=29931&type=commits) \r\n* [J#FHIR-29932](https://jira.hl7.org/browse/FHIR-29932): Fixed backwards compatibility for TimezoneFrom [View changes](https://github.com/HL7/cql/search?q=29932&type=commits) \r\n* [J#FHIR-29934](https://jira.hl7.org/browse/FHIR-29934): Corrected type of target attribute in model info [View changes](https://github.com/HL7/cql/search?q=29934&type=commits) \r\n \r\n* *Technical Errata Archive (zip): [v1.5.1, as published May 5th, 2021](http://cql.hl7.org/CQL-1.5.1.zip)* \r\n",
                "changes": "v1.5-changelog.html",
                "path": "http://cql.hl7.org/N1",
                "status": "normative",
                "sequence": "Normative",
                "fhirversion": "4.0.1",
                "date": "2023-01-20",
                "current": true,
                "corrections": [
                    {
                        "version": "1.5.1",
                        "path": "hl7.cql#1.5.1.zip",
                        "date": "2023-01-20"
                    }
                ]
            },
            {
                "version": "1.5.0",
                "date": "2020-04-01",
                "desc": "Normative Ballot 1",
                "descmd": "*   **Compatible, Substantive Changes:**\r\n    *   STU4#1877: Added support for modular arithmetic for quantities\r\n    *   STU4#1896: Added an overload of expand to take a single interval\r\n    *   STU4#1907: Added an aggregate clause to the query construct\r\n    *   STU4#1910: Added support for specifying search paths in the Retrieve\r\n    *   STU4#1918: Added support for comment annotations that result in tags in the ELM output\r\n    *   STU4#1920: Added a fluent keyword to support fluent-style function invocation\r\n    *   STU4#1921: Added support for specifying include and reverseInclude elements in the Retrieve\r\n    *   STU4#1923: Added System.Long to support 64-bit integers\r\n    *   STU4#1908: Added the ability to pass value sets and code systems as reference-type arguments\r\n    *   STU4#1917: Added a text/cql.identifier media type to support referencing the name of a defined CQL expression",
                "changes": "v1.5-changelog.html",
                "path": "http://cql.hl7.org/2020May",
                "status": "ballot",
                "sequence": "Normative"
            },
            {
                "version": "1.4.1",
                "date": "2019-06-30",
                "desc": "STU4 Release",
                "descmd": "*   **Breaking Changes:**\r\n    *   STU4B#22: Added definitional and referential identifier categories to the grammar to resolve ambiguity\r\n    *   STU4B#23: Updated semantics of list operators to treat null elements as equal for the purposes of membership determination\r\n    *   STU4B#27: Changed ToDateTime(Date) to leave time components unspecified\r\n    *   STU4B#70: Changed `Unspecified` context name to `Unfiltered`\r\n    *   STU4B#94: Removed the scope attribute from the Retrieve in ELM\r\n*   **Breaking Changes (from 2019 May Ballot only):  \r\n    *   STU4B#79: Required related context retrieve expression to return a singleton\r\n    *   STU4B#114: ConvertQuantity operator now throws an error if the implementation does not support the conversion\r\n **\r\n***   **Substantive Changes:**\r\n    *   STU4B#29: Added contextTargetRelationship to model information to support identifying target context elements\r\n    *   STU4B#32: Added target element to model information\r\n    *   STU4B#35: Changed timing phrase translations to add null check when the translation constructs an interval from a nullable element\r\n    *   STU4B#36: Added Precision, LowBoundary, and HighBoundary operators for Decimal, DateTime, Date, and Time types\r\n    *   STU4B#87: Added Ratio overload of ToQuantity operator\r\n    *   STU4B#109: Code paths specified in retrieves can now use literal indexers**",
                "changes": "v1.4-changelog.html",
                "path": "http://cql.hl7.org/STU4",
                "status": "trial-use",
                "sequence": "STU4"
            },
            {
                "version": "1.4.0",
                "date": "2019-03-24",
                "desc": "4th STU Ballot",
                "descmd": "*   **Breaking Changes:**\r\n    *   #1716: Added support for non-patient, model-defined contexts\r\n    *   #1723: Define seconds as a Decimal for the purposes of comparison\r\n    *   #1724: Removed timezone offset from Time; changed timezone keyword to timezoneoffset\r\n    *   #1722: Removed the `T` prefix from time formatting strings\r\n*   **Substantive Changes:**\r\n    *   #1707: Added a Size operator for intervals\r\n    *   #1719: Added support for namespaces for library names\r\n    *   #1720: Added support for qualifiers in retrieve code paths\r\n    *   #1722: Updated FHIRPath usage and translation mappings for FHIRPath Normative 3 ballot\r\n    *   #1727: Added unit conversion support for quantities\r\n    *   #1766: Added valuesetProperty to ELM Retrieve\r\n    *   Added support for related-context queries",
                "changes": "v1.4-changelog.html",
                "path": "http://cql.hl7.org/2019May",
                "status": "ballot",
                "sequence": "STU4"
            },
            {
                "version": "1.3.1",
                "date": "2018-09-05",
                "desc": "STU3 Release",
                "descmd": "*   Equality for types with components now only returns null if the values have different elements specified\r\n*   List membership and duplicate detection now use equality rather than equivalence semantics throughout\r\n*   Clarified date/time equality/equivalence/comparison semantics\r\n*   Symbolic date/time comparisons now occur at finest precision specified in either value\r\n*   Clarified relationship between symbolic/specified comparison operators\r\n*   Clarified relationship between date/time and interval overloads for equality/equivalence/comparison operators\r\n*   Clarified definition and behavior of interval promotion and demotion and indicated it is optional and disabled by default\r\n*   Improved conversion precedence\r\n*   Removed `week` operations that require a `week number`\r\n*   Changed AgeInYears() and AgeInMonths() to use Date, not DateTime\r\n*   Added a per clause to collapse\r\n*   Added SplitOnMatches\r\n*   Added backtick-delimited identifiers\r\n*   ELM operator content is now generated from the ELM model\r\n*   Numerous clarifications and errata throughout\r\n*   Added sidebar navigation",
                "changes": "v1.3-changelog.html",
                "path": "http://cql.hl7.org/STU3",
                "status": "trial-use",
                "sequence": "STU3"
            },
            {
                "version": "1.3.0",
                "date": "2018-04-01",
                "desc": "STU3 Ballot",
                "descmd": "*   **Language Changes:**\r\n    *   Added Ratio and Date system-defined types\r\n    *   Added difference of and duration between syntax\r\n    *   Named type specifiers now allow multiple qualifiers\r\n    *   Added Product and GeometricMean aggregate operators\r\n    *   Added Expand interval set operator\r\n    *   Invalid quantity operations and conversions now return null instead of error\r\n    *   Exists now ignores null elements\r\n    *   Added implicit conversion from Integer or Decimal to Quantity\r\n*   **ELM Changes:**\r\n    *   Added signature element to FunctionRef\r\n    *   Added ELM classes for new operators\r\n    *   BinaryExpression and TernaryExpression are now abstract\r\n    *   Union, Intersect, and Except are now NaryExpressions\r\n*   **FHIRPath Support:**\r\n    *   Added mappings for hasValue, conformsTo, memberOf, subsumes, subsumedBy, toChars\r\n    *   Added support for new aggregate()\r\n    *   Added support for $index and $total accessors",
                "changes": "v1.3-changelog.html",
                "path": "http://cql.hl7.org/2018May",
                "status": "ballot",
                "sequence": "STU3"
            },
            {
                "version": "1.2.1",
                "date": "2016-12-06",
                "desc": "STU2 Release (w/ Errata)",
                "descmd": "*   Adopted FHIRPath grammar as basis for expressions\r\n    *   Support for paths\r\n    *   Method-style invocation\r\n    *   List promotion and demotion\r\n    *   Empty list as null semantics\r\n    *   $ and % identifier scopes\r\n    *   Additional FHIRPath operators\r\n*   Support for declaration-only libraries\r\n*   Added choice type support\r\n*   Added Message operator to support run-time messages, errors, and warnings\r\n*   Added external function declarations\r\n*   Added debug and type information to ELM\r\n*   Specified JSON format for ELM\r\n*   Added less than/more than timing phrase modifiers\r\n*   Added on or/or on timing phrase modifiers\r\n*   Relaxed syntactic restriction on terminology target in a retrieve",
                "changes": "v1.2-changelog.html",
                "path": "http://cql.hl7.org/STU2",
                "status": "trial-use",
                "sequence": "STU2"
            },
            {
                "version": "1.1.0",
                "date": "2016-07-01",
                "desc": "STU1 Update",
                "descmd": "DSTU Update. Changes:\r\n*   Changed define clause to let within queries\r\n*   Changed matches to ~\r\n*   Changed <> to !=\r\n*   Changed lists to be 0-based instead of 1-based\r\n*   Renamed expand to flatten\r\n*   Added implicit conversion from List<Code> to Concept\r\n*   Added Exp operator (inverse of Ln)\r\n*   Added weeks duration\r\n*   Added support for forward declarations\r\n*   Added concept and code declarations",
                "changes": "v1.1-changelog.html",
                "path": "http://www.hl7.org/documentcenter/public/standards/dstu/HL7_CQL_SPEC_R1_DSTUR1dot1_2016JUL.zip",
                "status": "trial-use",
                "sequence": "STU1"
            },
            {
                "version": "1.0.0",
                "date": "2015-05-01",
                "desc": "STU1 Release",
                "path": "http://www.hl7.org/documentcenter/public/standards/dstu/HL7_CQLANG_R1_DSTU_2015MAY.zip",
                "status": "trial-use",
                "sequence": "STU1"
            }
        ],
        "name": "CQL",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.5.2",
        "repo": "https://github.com/HL7/cql"
    },
    "hl7.fhir.uv.ae-research-ig": {
        "url": "http://hl7.org/fhir/uv/ae-research-ig",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-ae-research-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/ae-research-ig/2023Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "5.0.0",
                "date": "2023-07-28",
                "desc": "FHIR STU Release 1 AdverseEvent Clinical Research Profile",
                "descmd": "FHIR STU Release 1 AdverseEvent Clinical Research Profile"
            }
        ],
        "name": "AdverseEventClinicalResearch",
        "title": "Adverse Event Clinical Research",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-ae-research-ig"
    },
    "hl7.fhir.uv.sdc": {
        "url": "http://hl7.org/fhir/uv/sdc",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/sdc",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0",
                "fhirversion": "4.0.1",
                "desc": "STU 3 Release (STU)",
                "changes": "changes.html#3.0.0",
                "path": "http://hl7.org/fhir/uv/sdc/STU3",
                "status": "trial-use",
                "sequence": "STU 3",
                "date": "2022-03-08",
                "current": true,
                "sub-packages": [
                    "hl7.fhir.uv.sdc",
                    "hl7.fhir.uv.sdc.r4",
                    "hl7.fhir.uv.sdc.r4b"
                ]
            },
            {
                "version": "3.0.0-preview",
                "fhirversion": "4.0.1",
                "desc": "STU 3 Release (STU) Preview",
                "changes": "changes.html#3.0.0",
                "path": "http://hl7.org/fhir/uv/sdc/3.0.0-preview",
                "status": "draft",
                "sequence": "STU 3",
                "date": "2022-02-16"
            },
            {
                "version": "2.7.0",
                "date": "2019-03-29",
                "desc": "STU 3 Ballot #2 (STU)",
                "changes": "changes.html#2.7.0",
                "path": "http://hl7.org/fhir/uv/sdc/2019May",
                "status": "ballot",
                "sequence": "STU 3",
                "fhirversion": "4.0.0"
            },
            {
                "version": "2.5.0",
                "date": "2018-08-31",
                "desc": "STU 3 Ballot #1",
                "changes": "changes.html#v3",
                "path": "http://hl7.org/fhir/uv/sdc/2018Sep",
                "status": "ballot",
                "sequence": "STU 3",
                "fhirversion": "3.5.0"
            },
            {
                "version": "2.0.0",
                "date": "2017-04-21",
                "desc": "STU 2 (Permanent Home)",
                "descCurrent": "Current Official Published Version (STU 2)",
                "changes": "changes.html#v2.0",
                "path": "http://hl7.org/fhir/us/sdc/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "sequenceNote": "Note: SDC STU2 and earlier was a US realm specification, and then later versions were elevated to a full international specification",
                "altloc": "http://hl7.org/fhir/us/sdc",
                "fhirversion": "3.0.1"
            },
            {
                "version": "1.6",
                "date": "2016-08-11",
                "desc": "STU 2 Ballot",
                "changes": "changes.html#v1.6",
                "path": "http://hl7.org/fhir/us/sdc/2016Sep",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "1.6.0"
            },
            {
                "version": "1.0.2",
                "date": "2015-10-24",
                "desc": "DSTU 1 (Permanent home)",
                "path": "http://hl7.org/fhir/DSTU2/sdc/sdc.html",
                "status": "trial-use",
                "sequence": "DSTU 1",
                "sequenceNote": "Note: for this sequence, SDC was balloted as part of the FHIR specification, and these links are into the SDC page of the FHIR specification. Also note that this was DSTU 2 for the FHIR specification, but DSTU 1 for the SDC specification",
                "fhirversion": "1.0.2"
            },
            {
                "version": "1.0.0",
                "date": "2015-08-31",
                "desc": "DSTU 1 Preview",
                "path": "http://hl7.org/fhir/2015Sep/sdc/sdc.html",
                "status": "preview",
                "sequence": "DSTU 1",
                "fhirversion": "1.0.0"
            },
            {
                "version": "0.5.0",
                "date": "2015-04-02",
                "desc": "DSTU 1 Ballot (May 2015 Ballot)",
                "path": "http://hl7.org/fhir/2015May/sdc.html",
                "status": "ballot",
                "sequence": "DSTU 1",
                "fhirversion": "0.5.0"
            }
        ],
        "name": "StructuredDataCapture",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0",
        "repo": "https://github.com/HL7/sdc"
    },
    "hl7.fhir.uv.ips": {
        "url": "http://hl7.org/fhir/uv/ips",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-ips",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.0",
                "date": "2022-11-22",
                "path": "http://hl7.org/fhir/uv/ips/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "desc": "This publication is an STU update (1.1.0) which incorporates implementation feedback, terminology updates and publication cleanup.",
                "descmd": "This publication is an STU update (1.1.0) which incorporates implementation feedback, terminology updates and publication cleanup. These include:<br />- Addition of Bundle Profile <br />- Addition of MedicationRequest Profile <br />- Addition of a $summary operation <br />- Reduction of Must Support <br />- Additional narrative guidance<br />- Terminology Updates",
                "current": true
            },
            {
                "version": "1.0.0",
                "date": "2020-05-19",
                "desc": "STU 1",
                "path": "http://hl7.org/fhir/uv/ips/STU1",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "status": "trial-use"
            },
            {
                "version": "0.3.0",
                "date": "2019-08-06",
                "desc": "STU 1 Ballot 3",
                "path": "http://hl7.org/fhir/uv/ips/2019Sep",
                "sequence": "STU 1 (FHIR R4)",
                "fhirversion": "4.0.0",
                "status": "ballot"
            },
            {
                "version": "0.2.0",
                "date": "2018-08-21",
                "descmd": "STU 1 Ballot 2. Changes:\r\n* [15981](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=15981), [16223](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16223) Migrated IG from FHIR version 3.0.1 (STU3) to 3.5.0 (R4)\r\n* [16202](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16202)-[16215](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16215), [16282](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16282) Fixed wrong content shown in differential views\r\n* [16275](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16275) Added new slice for vaccine type\r\n* [16463](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16463) Cardinality of clinicalStatus relaxed to 0..1\r\n* [16468](https://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=16468) Relaxed excessive cardinality contraints and added mustSupport where appropriate\r\n* (many) Fixed typos and additional wording and formatting updates",
                "path": "http://hl7.org/fhir/uv/ips/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-04-04",
                "desc": "STU 1 Ballot 1",
                "path": "http://hl7.org/fhir/uv/ips/2018May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            }
        ],
        "name": "InternationalPatientSummaryIG",
        "title": "International Patient Summary Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/fhir-ips"
    },
    "hl7.fhir.uv.shorthand": {
        "url": "http://hl7.org/fhir/uv/shorthand",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-shorthand",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/shorthand/2023Sep",
                "status": "ballot",
                "sequence": "Release 3",
                "fhirversion": "4.0.1",
                "date": "2023-07-30",
                "desc": "The FHIR Shorthand Release 3 ballot promotes most existing trial-use features to normative, introduces new trial-use features, and provides clarifications where necessary.",
                "changes": "change_log.html#fhir-shorthand-300-ballot-hl7-mixed-normative--trial-use-ballot-1"
            },
            {
                "version": "2.0.0",
                "fhirversion": "4.0.1",
                "desc": "FHIR Shorthand, version 2.0.0",
                "path": "http://hl7.org/fhir/uv/shorthand/N1",
                "status": "normative+trial-use",
                "sequence": "N1",
                "date": "2022-02-17",
                "current": true
            },
            {
                "version": "1.2.0",
                "desc": "HL7 Mixed Normative/Trial Use Ballot",
                "path": "http://hl7.org/fhir/uv/shorthand/2021Sep",
                "status": "ballot",
                "sequence": "N1",
                "fhirversion": "4.0.1",
                "date": "2021-08-10"
            },
            {
                "version": "1.0.0",
                "fhirversion": "4.0.1",
                "desc": "FHIR Shorthand STU 1, version 1.0.0",
                "path": "http://hl7.org/fhir/uv/shorthand/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "date": "2020-10-12"
            },
            {
                "version": "0.12.0",
                "fhirversion": "4.0.1",
                "date": "2020-03-31",
                "desc": "FHIR Shorthand STU 1, version 0.12.0",
                "path": "http://hl7.org/fhir/uv/shorthand/2020May",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "FHIRShorthand",
        "title": "FHIR Shorthand",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-shorthand"
    },
    "hl7.fast.template": {
        "url": "http://fhir.org/templates/hl7.fast.template",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-fast",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/ig-template-fast"
    },
    "hl7.fhir.us.registry-protocols": {
        "url": "http://hl7.org/fhir/us/registry-protocols",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-registry-protocols-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/registry-protocols/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-11-14",
                "current": true,
                "desc": "This is the published version of the first release in the STU1 sequence."
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/us/registry-protocols/2023May",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-03-29",
                "desc": "Publication for May 2023 ballot"
            }
        ],
        "name": "FHIRRegistryProtocolsIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-registry-protocols-ig"
    },
    "hl7.fhir.uv.saner": {
        "url": "http://hl7.org/fhir/uv/saner",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-saner",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Standard for Trial Use 1 Release",
                "path": "http://hl7.org/fhir/uv/saner/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-09-07",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-10-19",
                "desc": "Initial STU ballot (Oct 2020 Ballot)",
                "path": "http://hl7.org/fhir/uv/saner/2021Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SituationalAwarenessforNovelEpidemicResponse",
        "title": "Situational Awareness for Novel Epidemic Response",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/HL7/fhir-saner"
    },
    "hl7.fhir.uv.capstmt": {
        "url": "http://www.hl7.org/fhir/uv/capstmt",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/capstmt",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CapabilityStatementIG",
        "title": "FHIR CapabilityStatement Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/capstmt"
    },
    "hl7.fhir.us.eltss": {
        "url": "http://hl7.org/fhir/us/eltss",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/eLTSS",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/us/eltss/2024Jan",
                "status": "ballot",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-12-15",
                "desc": "Ballot version for STU2 update Electronic Long-Term Services and Supports (eLTSS) Release 1 - US",
                "descmd": "Ballot version for STU2 update Electronic Long-Term Services and Supports (eLTSS) Release 1 - US",
                "changes": "change_log.html"
            },
            {
                "version": "1.0.0",
                "date": "2019-09-12",
                "desc": "Publication for Trial Use",
                "path": "http://hl7.org/fhir/us/eltss/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.0",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2019-03-27",
                "desc": "STU #1 1st Ballot",
                "path": "http://hl7.org/fhir/us/eltss/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "ELTSS",
        "title": "Electronic Long-Term Services and Supports (eLTSS) Release 1 - US Realm",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-ballot",
        "repo": "https://github.com/HL7/eLTSS"
    },
    "hl7.davinci.template": {
        "url": "http://fhir.org/templates/hl7.davinci.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-davinci/",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.5.0",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on hl7.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.4.0",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.2.0",
                "desc": "Upgrade for dependency on hl7.base.template",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.1.0",
                "desc": "First release",
                "path": "http://fhir.org/templates/hl7.davinci.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-11-12"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.7.0",
        "repo": "https://github.com/HL7/ig-template-davinci"
    },
    "hl7.fhir.us.davinci-pdex": {
        "url": "http://hl7.org/fhir/us/davinci-pdex",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for Da Vinci PDex (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-epdx",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "path": "http://hl7.org/fhir/us/davinci-pdex/STU2",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2024-01-06",
                "current": true,
                "desc": "This STU2 specification has undergone ballot and connectathon testing. It is expected to evolve, possibly significantly, as part of that process.\nFeedback is welcome and may be submitted through the FHIR JIRA tracker indicating US Da Vinci PDex as the specification. \n",
                "descmd": "This STU2 specification has undergone ballot and connectathon testing. It is expected to evolve, possibly significantly, as part of that process.\nFeedback is welcome and may be submitted through the FHIR JIRA tracker indicating US Da Vinci PDex as the specification. If balloting on this IG, please submit your comments via the tracker and reference them in your ballot submission implementation guide.\n\nThis guide can be reviewed offline. Go to the Downloads section. Click on the link to download the full Implementation Guide as a zip file. Expand the zip file and use a web browser to launch the index.html file in the directory created by the zip extract process. External hyperlinks in the guide will not be available unless you have an active internet connection. \n\n[Financial Management](https://confluence.hl7.org/display/FM/Financial+Management+Home) is the Sponsoring Work Group for this Implementation Guide.\n\n**The Payer Data Exchange (PDex) Implementation Guide (IG) is provided for Payers/Health Plans to enable them to create a Health History for a Member using clinical resources (based on US Core 3.1.1 Profiles based on FHIR R4) which can be understood by providers and, if they choose to, committed to their Electronic Medical Records (EMR) System.**\n\nThe PDex work group has made changes to the original version of the IG following the publication of the final CMS Interoperability and Patient Access Rule.\n\nThis IG uses the same Member Health History payload for member-authorized exchange of information with other Health Plans and with Third-Party Applications. It describes the interaction patterns that, when followed, allow the various parties involved in managing healthcare and payer data to more easily integrate and exchange data securely and effectively.\n\nThis IG covers the exchange of:\n- Claims-based information\n- Clinical Information (such as Lab Results, Allergies and Conditions)\n\nThis IG covers the exchange of this information using US Core and Da Vinci Health Record Exchange (HRex) Profiles. This superset of clinical profiles forms the Health Plan Health History for a Member. \n\nThis IG covers the exchange of the Health History for a Member in the following scenarios:\n- Provider requested Provider-Health Plan Exchange using CDS-Hooks and SMART-on-FHIR\n- Member-authorized Health Plan to Health Plan exchange\n- Member-authorized Health Plan to Third-Party Application exchange\n\nThe latter two scenarios are provided to meet the requirements identified in the CMS Interoperability and Patient Access Final Rule.\n\n**There are items in this guide that are subject to update**. This includes:\n- Value Sets\n- Vocabularies (X12, NUBC etc.)\n- Examples\n\n**The Vocabulary, Value Sets and codings used to express data in this IG are subject to review and will be reconciled with**  [X12](http://www.x12.org).\n\nSee the [Table of Contents](toc.html) for more information.\n"
            },
            {
                "version": "2.0.0-ballot",
                "desc": "HL7 FHIR\u00ae Implementation Guide: Payer Data Exchange (PDex), Release 2.0.0-ballot - US Realm.",
                "path": "http://hl7.org/fhir/us/davinci-pdex/2022May",
                "status": "ballot",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2022-02-18"
            },
            {
                "version": "1.0.0",
                "desc": "HL7 FHIR\u00ae Implementation Guide: Payer Data Exchange (PDex), Release 1 - US Realm.",
                "path": "http://hl7.org/fhir/us/davinci-pdex/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2020-12-22"
            },
            {
                "version": "0.1.0",
                "desc": "June 2019 Ballot for Da Vinci PDex",
                "date": "2019-06-20",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/davinci-pdex/2019Jun",
                "status": "ballot",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "DaVinciPayerDataExchange",
        "title": "Da Vinci Payer Data Exchange",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/davinci-epdx"
    },
    "hl7.utg.template": {
        "url": "http://github.com/HL7/ig-template-hl7",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-utg",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.7.0",
        "repo": "https://github.com/HL7/ig-template-utg"
    },
    "hl7.fhir.us.dental-data-exchange": {
        "url": "http://hl7.org/fhir/us/dental-data-exchange",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/dental-data-exchange",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU Release 1",
                "path": "http://hl7.org/fhir/us/dental-data-exchange/STU1",
                "fhirversion": "4.0.1",
                "sequence": "STU1",
                "status": "trial-use",
                "date": "2021-11-02",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-08-10",
                "path": "http://hl7.org/fhir/us/dental-data-exchange/2020Sep",
                "desc": "Ballot for STU Release 1",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "DentalDataExchange",
        "title": "Dental Data Exchange",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/dental-data-exchange"
    },
    "hl7.fhir.us.davinci-hrex": {
        "url": "http://hl7.org/fhir/us/davinci-hrex",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-ehrx",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Initial Da Vinci HRex STU release",
                "sequence": "STU1",
                "path": "http://hl7.org/fhir/us/davinci-hrex/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "date": "2022-03-23",
                "current": true
            },
            {
                "version": "0.2.0",
                "desc": "Sept 2020 Ballot for Da Vinci HRex",
                "date": "2020-08-14",
                "sequence": "STU1",
                "path": "http://hl7.org/fhir/us/davinci-hrex/2020Sep",
                "status": "ballot",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "desc": "June 2019 Ballot for Da Vinci HRex",
                "date": "2019-06-20",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/davinci-hrex/2019Jun",
                "status": "ballot",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "DaVinciHealthRecordExchangeHRex",
        "title": "Da Vinci Health Record Exchange (HRex)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/davinci-ehrx"
    },
    "hl7.fhir.us.davinci-crd": {
        "url": "http://hl7.org/fhir/us/davinci-crd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-crd",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://hl7.org/fhir/us/davinci-crd/STU2",
                "status": "trial-use",
                "sequence": "STU 2.0",
                "fhirversion": "4.0.1",
                "date": "2024-01-08",
                "current": true,
                "desc": "STU 2.0.1 Release",
                "descmd": "STU 2.0.0 First Technical Correction.  See [list of changes](http://hl7.org/fhir/us/davinci-crd/STU2/history.html#2.0.1)",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "hl7.fhir.us.davinci-crd#2.0.0.zip",
                        "date": "2024-01-08"
                    }
                ]
            },
            {
                "version": "1.1.0-ballot",
                "fhirversion": "4.0.1",
                "descmd": "Ballot for second STU release",
                "path": "http://hl7.org/fhir/us/davinci-crd/2022May",
                "status": "ballot",
                "sequence": "STU 1.1",
                "date": "2022-02-17"
            },
            {
                "version": "1.0.0",
                "fhirversion": "4.0.1",
                "descmd": "First official STU release of the implementation guide",
                "path": "http://hl7.org/fhir/us/davinci-crd/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "date": "2020-12-22"
            },
            {
                "version": "0.3.0",
                "date": "2019-03-27",
                "descmd": "Second ballot incorporating feedback from the first ballot.  Significant changes include:\r\n\r\n* updating to point to draft US Core profiles based on FHIR R4\r\n* adjusting to reflect changes to CDS Hooks, including the official publication of CRD-proposed hooks\r\n* adjusting profiles to reflect changes in the final FHIR R4 specification\r\n* completed examples and background documentation that had previously been marked as **to do**\r\n* numerous changes to improve clarity of the specification",
                "path": "http://hl7.org/fhir/us/davinci-crd/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-09-01",
                "descmd": "First public ballot - see [R4 Index](http://hl7.org/fhir/us/davinci-crd/2018Sep/index.html) and [R3 Index](http://hl7.org/fhir/us/davinci-crd/2018Sep/STU3/index.html)",
                "path": "http://hl7.org/fhir/us/davinci-crd/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            }
        ],
        "name": "CoverageRequirementsDiscovery",
        "title": "Da Vinci - Coverage Requirements Discovery",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.1",
        "repo": "https://github.com/HL7/davinci-crd"
    },
    "hl7.fhir.uv.cql": {
        "url": "http://hl7.org/fhir/uv/cql",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/cql-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/cql/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-20",
                "desc": "STU1 Ballot (v1.0.0)",
                "descmd": "This is the initial ballot of the Using CQL with FHIR IG STU1"
            }
        ],
        "name": "CQL",
        "title": "Using CQL with FHIR",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/cql-ig"
    },
    "hl7.fhir.uv.order-catalog": {
        "url": "http://hl7.org/fhir/uv/order-catalog",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-order-catalog",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-08-05",
                "desc": "STU 1 Ballot 1",
                "path": "http://hl7.org/fhir/uv/order-catalog/2020Sep",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "status": "ballot"
            }
        ],
        "name": "OrderCatalogIG",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "current",
        "repo": "https://github.com/HL7/fhir-order-catalog"
    },
    "hl7.fhir.us.mcode": {
        "url": "http://hl7.org/fhir/us/mcode",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-mCODE-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0",
                "path": "http://hl7.org/fhir/us/mcode/STU3",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2023-10-26",
                "current": true,
                "desc": "STU3 Release",
                "descmd": "STU3 Release",
                "changes": "change_log.html"
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://hl7.org/fhir/us/mcode/2023May",
                "status": "ballot",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2023-03-28",
                "desc": "Ballot version for STU3",
                "descmd": "Ballot version for STU3",
                "changes": "change_log.html"
            },
            {
                "version": "2.1.0",
                "path": "http://hl7.org/fhir/us/mcode/STU2.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-03-21",
                "desc": "Update to mCODE STU2 incorporating newly-issued SNOMEDCT codes",
                "descmd": "Update to mCODE STU2 incorporating newly-issued SNOMEDCT codes",
                "changes": "change_log.html"
            },
            {
                "version": "2.0.0",
                "desc": "STU 2 Release",
                "path": "http://hl7.org/fhir/us/mcode/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2022-01-18"
            },
            {
                "version": "1.16.0",
                "desc": "STU 2 Ballot Version",
                "path": "http://hl7.org/fhir/us/mcode/2021May",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2021-04-15"
            },
            {
                "version": "1.0.0",
                "fhirversion": "4.0.1",
                "date": "2020-03-18",
                "desc": "STU 1 Release",
                "path": "http://hl7.org/fhir/us/mcode/STU1",
                "status": "trial-use",
                "sequence": "STU 1"
            },
            {
                "version": "0.9.1",
                "fhirversion": "4.0.0",
                "date": "2019-06-10",
                "desc": "Initial STU ballot (Sep 2019 Ballot)",
                "path": "http://hl7.org/fhir/us/mcode/2019Sep",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "MinimalCommonOncologyDataElements",
        "title": "minimal Common Oncology Data Elements (mCODE) Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "4.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-mCODE-ig"
    },
    "hl7.fhir.us.pacio-pfe": {
        "url": "http://hl7.org/fhir/us/pacio-pfe",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-pacio-pfe",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/pacio-pfe/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-01-05",
                "current": true,
                "desc": "STU1 Release",
                "descmd": "STU1 Release",
                "changes": "change_log.html"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Initial STU ballot (Sep 2022 Ballot)",
                "path": "http://hl7.org/fhir/us/pacio-pfe/2022Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-08-05"
            }
        ],
        "name": "PACIOPersonalFunctioningAndEngagementImplementationGuide",
        "title": "PACIO Personal Functioning and Engagement Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-pacio-pfe"
    },
    "hl7.cda.us.ccdar2dot2": {
        "url": "http://hl7.org/cda/us/ccda",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/CDA-ccda",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://hl7.org/cda/us/ccda/2024Jan",
                "status": "ballot",
                "sequence": "CCDA 3.0",
                "fhirversion": "5.0.0",
                "date": "2023-12-21",
                "desc": "First ballot using FHIR publishing framework"
            },
            {
                "version": "2.1.0-draft1",
                "path": "http://hl7.org/cda/stds/ccda/draft1",
                "status": "draft",
                "sequence": "CCDA 2.1",
                "fhirversion": "5.0.0",
                "date": "2023-01-16",
                "desc": "First release using FHIR publishing framework for review and discussion"
            }
        ],
        "name": "CCDAR2dot2",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.2",
        "repo": "https://github.com/HL7/CDA-ccda-2.2"
    },
    "hl7.cda.template": {
        "url": "http://github.com/HL7/ig-template-cda",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-cda",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.8.0",
        "repo": "https://github.com/HL7/ig-template-cda"
    },
    "hl7.fhir.uv.v2mappings": {
        "url": "http://hl7.org/fhir/uv/v2mappings",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/v2-to-fhir",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/v2mappings/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-20",
                "desc": "The January 2024 Ballot version is the second STU ballot of this implementation guide."
            },
            {
                "version": "0.1.0",
                "date": "2020-08-12",
                "desc": "Initial STU ballot (Sep 2020 Ballot)",
                "path": "http://hl7.org/fhir/uv/v2mappings/2020Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HL7Version2toFHIR",
        "title": "HL7 Version 2 to FHIR",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/v2-to-fhir"
    },
    "hl7.fhir.us.hai-ltcf": {
        "url": "http://hl7.org/fhir/us/hai-ltcf",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/HAI-LTCF",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/us/hai-ltcf/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1.1",
                "fhirversion": "4.0.1",
                "date": "2023-04-19",
                "current": true,
                "desc": "FHIR STU Release 1.1",
                "descmd": "FHIR STU Release 1.1"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/hai-ltcf/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-01-09",
                "desc": "FHIR STU Release 1",
                "descmd": "FHIR STU Release 1"
            },
            {
                "version": "0.1.0",
                "date": "2019-08-01",
                "desc": "Ballot for FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/hai-ltcf/2019Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "HealthcareAssociatedInfectionReportsLongTermCareFacilities",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/HAI-LTCF"
    },
    "hl7.cda.us.ccda": {
        "url": "http://hl7.org/cda/us/ccda",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/CDA-ccda",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://hl7.org/cda/us/ccda/2024Jan",
                "status": "ballot",
                "sequence": "CCDA 3.0",
                "fhirversion": "5.0.0",
                "date": "2023-12-21",
                "desc": "First ballot using FHIR publishing framework"
            },
            {
                "version": "2.1.0-draft1",
                "path": "http://hl7.org/cda/stds/ccda/draft1",
                "status": "draft",
                "sequence": "CCDA 2.1",
                "fhirversion": "5.0.0",
                "date": "2023-01-16",
                "desc": "First release using FHIR publishing framework for review and discussion"
            }
        ],
        "name": "CCDA",
        "title": "Consolidated CDA",
        "fhirversion_latest": "5.0.0",
        "current_version": "3.0.0-ballot",
        "repo": "https://github.com/HL7/CDA-ccda"
    },
    "hl7.fhir.us.insurance-card": {
        "url": "http://hl7.org/fhir/us/insurance-card",
        "versions": [
            {
                "version": "current",
                "desc": "CARIN Digital Insurance Card CI Build",
                "path": "https://build.fhir.org/ig/HL7/carin-digital-insurance-card",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "CARIN Digital Insurance Card Release 1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/insurance-card/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-07-13",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "CARIN Digital Insurance Card Release 1 | STU 1 Ballot",
                "path": "http://hl7.org/fhir/us/insurance-card/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-06"
            }
        ],
        "name": "CARINForDigitalInsuranceCard",
        "title": "CARIN Digital Insurance Card",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/carin-digital-insurance-card"
    },
    "hl7.fhir.uv.security-label-ds4p": {
        "url": "http://hl7.org/fhir/uv/security-label-ds4p",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://hl7.org/fhir/ig/HL7/security-label-ds4p",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/security-label-ds4p/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-04-17",
                "current": true,
                "desc": "Provides guidance for applying security labels for use in access control systems governing the collection, access, use, and disclosure of the target FHIR Resource(s) as required by applicable organizational or jurisdictional policies.",
                "changes": "change_history.html"
            },
            {
                "version": "0.3.0",
                "desc": "STU 1 ballot (Sep 2021 Ballot)",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/uv/security-label-ds4p/2021Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "date": "2021-08-12"
            },
            {
                "version": "0.2.0",
                "desc": "STU 1 ballot (May 2021 Ballot)",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/uv/security-label-ds4p/2021May",
                "status": "ballot",
                "sequence": "STU 1",
                "date": "2021-04-13"
            },
            {
                "version": "0.1.0",
                "date": "2020-04-07",
                "desc": "Initial STU ballot (May 2020 Ballot)",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/uv/security-label-ds4p/2020May",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "HL7_fhir_security_label_ds4p",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-security-label-ds4p"
    },
    "hl7.fhir.efss": {
        "url": "http://hl7.org/fhir/us/efss",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/efss",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "EFSSIG",
        "title": "Enhancing FHIR for Social Services",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/efss"
    },
    "fhir.efss": {
        "url": "http://hl7.org/fhir/us",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/efss",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EFSSIG",
        "title": "Enhancing FHIR for Social Services",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/efss"
    },
    "hl7.fhir.us.cancer-reporting": {
        "url": "http://hl7.org/fhir/us/cancer-reporting",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/cancer-reporting",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "date": "2021-08-06"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/cancer-reporting/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-11",
                "current": true,
                "desc": "This is the first Standard for Trial Use (STU) of a Cancer-reporting FHIR IG. It defines the data exchange standard between primary care provider and specialist EHR systems, pathology labs, and the central cancer registry.",
                "descmd": "This is the first Standard for Trial Use (STU) of a Cancer-reporting FHIR IG. It defines the data exchange standard between primary care provider and specialist EHR systems, pathology labs, and the central cancer registry."
            },
            {
                "version": "0.1.0",
                "desc": "Ballot for STU Release 1",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/cancer-reporting/2021Sep",
                "date": "2021-08-12"
            }
        ],
        "name": "USCancerPathologyData",
        "title": "Cancer Pathology Data Sharing",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/HL7/cancer-reporting"
    },
    "hl7.gravity.template": {
        "url": "http://github.com/HL7/ig-template-gravity",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-gravity",
                "fhirversion": "5.0.0"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.1",
        "repo": "https://github.com/HL7/ig-template-gravity"
    },
    "hl7.fhir.uv.radiation-dose-summary": {
        "url": "http://hl7.org/fhir/uv/radiation-dose-summary",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-radiation-dose-summary-ig",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "January 2022 Ballot",
                "path": "http://hl7.org/fhir/uv/radiation-dose-summary/2022Jan",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "date": "2021-12-08"
            }
        ],
        "name": "RadiationDoseSummaryForDiagnosticProceduresOnFHIR",
        "title": "Radiation Dose Summary for Diagnostic Procedures on FHIR",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-radiation-dose-summary-ig"
    },
    "hl7.fhir.us.bser": {
        "url": "http://hl7.org/fhir/us/bser",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/bser",
                "status": "ci-build"
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/us/bser/2023Sep",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-07-31",
                "desc": "STU 2 Ballot"
            },
            {
                "version": "1.0.0",
                "date": "2020-03-02",
                "desc": "FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/bser/STU1",
                "changes": "history.html",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "current": true,
                "sequence": "STU 1"
            },
            {
                "version": "0.2.0",
                "date": "2019-03-21",
                "desc": "STU #1 2nd Ballot",
                "path": "http://hl7.org/fhir/us/bser/2019May",
                "changes": "history.html",
                "status": "ballot",
                "fhirversion": "3.0.1",
                "sequence": "STU 1 on FHIR STU3"
            },
            {
                "version": "0.1.0",
                "date": "2018-08-17",
                "desc": "STU #1 1st Ballot",
                "path": "http://hl7.org/fhir/us/bser/2018Sep",
                "status": "ballot",
                "fhirversion": "3.0.1",
                "sequence": "STU 1 on FHIR STU3"
            }
        ],
        "name": "BSeRBidirectionalServicesEReferral",
        "title": "Bidirectional Services eReferral (BSeR)",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-ballot",
        "repo": "https://github.com/HL7/bser"
    },
    "hl7.fhir.us.specialty-rx": {
        "url": "http://hl7.org/fhir/us/specialty-rx",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for FHIR STU1 (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-specialty-rx",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "path": "http://hl7.org/fhir/us/specialty-rx/STU2",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-05-04",
                "current": true,
                "desc": "This STU2 version of Specialty Medication Enrollment FHIR IG adds content to support requesting and sharing of patient consents and other authorizations that are often needed during fulfillment of specialty products. This publication is the result of the September 2022 HL7 balloting process and resolution of submitted comments, which have been agreed to and voted on by the members of the sponsoring HL7 Pharmacy Work Group",
                "changes": "changes.html"
            },
            {
                "version": "2.0.0-ballot",
                "desc": "Specialty Medication Enrollment Implementation Guide STU2 Ballot",
                "changes": "",
                "path": "http://hl7.org/fhir/us/specialty-rx/2022Sep",
                "status": "ballot",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2022-08-05"
            },
            {
                "version": "1.0.0",
                "desc": "Specialty Medication Enrollment Implementation Guide STU1",
                "changes": "",
                "path": "http://hl7.org/fhir/us/specialty-rx/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2021-06-21"
            },
            {
                "version": "0.1.0",
                "desc": "STU1 Ballot",
                "changes": "",
                "path": "http://hl7.org/fhir/us/specialty-rx/2021Jan",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU1",
                "date": "2020-12-16"
            }
        ],
        "name": "SpecialtyRx",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/HL7/fhir-specialty-rx"
    },
    "hl7.fhir.uv.fhircast": {
        "url": "http://hl7.org/fhir/uv/fhircast",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhircast-docs",
                "status": "ci-build",
                "sequence": "STU3",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "2.1.0-ballot",
                "desc": "Ballot for STU Release 3",
                "status": "ballot",
                "sequence": "STU3",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/uv/fhircast/2022May",
                "date": "2022-04-01"
            },
            {
                "version": "2.0.0",
                "desc": "STU 2 Publication",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "path": "https://fhircast.hl7.org/specification/STU2",
                "date": "2021-02-03",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Standard for Trial Use (STU1) This is the 1.0 release of the FHIRcast specification.",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "path": "https://fhircast.hl7.org/specification/STU1",
                "date": "2019-09-10",
                "current": false
            }
        ],
        "name": "FHIRcast",
        "title": "FHIRcast",
        "fhirversion_latest": "4.3.0",
        "current_version": "3.0.0",
        "repo": "https://github.com/HL7/fhircast-docs"
    },
    "hl7.fhir.us.davinci-dtr": {
        "url": "http://hl7.org/fhir/us/davinci-dtr",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for FHIR R4 (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-dtr",
                "status": "ci-build",
                "current": true,
                "fhirversion": "4.0.0"
            },
            {
                "version": "2.0.1",
                "path": "http://hl7.org/fhir/us/davinci-dtr/STU2",
                "status": "trial-use",
                "sequence": "STU 2.0",
                "fhirversion": "4.0.1",
                "date": "2024-01-11",
                "current": true,
                "desc": "STU 2.0.1 Release",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "hl7.fhir.us.davinci-dtr#2.0.0.zip",
                        "date": "2024-01-11"
                    }
                ]
            },
            {
                "version": "1.1.0-ballot",
                "desc": "STU 1.1 Ballot for FHIR R4",
                "path": "http://hl7.org/fhir/us/davinci-dtr/2022May",
                "status": "ballot",
                "sequence": "STU 1.1",
                "fhirversion": "4.0.1",
                "date": "2022-02-18"
            },
            {
                "version": "1.0.0",
                "desc": "STU1 Trial Use for FHIR R4",
                "path": "http://hl7.org/fhir/us/davinci-dtr/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-23"
            },
            {
                "version": "0.2.0",
                "date": "2019-08-06",
                "desc": "STU 1 Ballot for FHIR R4",
                "path": "http://hl7.org/fhir/us/davinci-dtr/2019Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            },
            {
                "version": "0.1.0",
                "date": "2019-05-01",
                "desc": "For Comment Ballot for FHIR R4",
                "path": "http://hl7.org/fhir/us/davinci-dtr/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            }
        ],
        "name": "DocumentationTemplatesRules",
        "title": "Da Vinci - Documentation Templates and Rules",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.1",
        "repo": "https://github.com/HL7/davinci-dtr"
    },
    "hl7.fhir.us.resp-net": {
        "url": "http://hl7.org/fhir/us/resp-net",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/HL7/fhir-resp-net-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/us/resp-net/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-21",
                "desc": "This is the initial ballot release of the RESP-NET FHIR IG.",
                "changes": "changes.html"
            }
        ],
        "name": "RESPNET",
        "title": "Respiratory Virus Hospitalization Surveillance Network (RESP-NET) Content Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-resp-net-ig"
    },
    "hl7.fhir.uv.ihe-sdc-ecc": {
        "url": "http://hl7.org/fhir/uv/ihe-sdc-ecc",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ihe-sdc-ecc-on-fhir",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "date": "2022-03-11"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/ihe-sdc-ecc/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-12",
                "current": true,
                "desc": "IHE SDC/electronic Cancer Protocols (eCPs) on FHIR STU1 Release",
                "descmd": "IHE SDC/electronic Cancer Protocols (eCPs) on FHIR STU1 Release"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Ballot for STU Release 1",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/uv/ihe-sdc-ecc/2022Sep",
                "date": "2022-08-11"
            }
        ],
        "name": "IHESDCeCCOnFHIR",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/ihe-sdc-ecc-on-fhir"
    },
    "hl7.fhir.uv.vulcan-schedule": {
        "url": "http://hl7.org/fhir/uv/vulcan-schedule",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/Vulcan-schedule-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/vulcan-schedule/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-04-18",
                "current": true,
                "desc": "This is the published version of the first release in the STU1 sequence."
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/uv/vulcan-schedule/2023Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "desc": "This is the ballot version of the first release in the STU1 sequence."
            }
        ],
        "name": "StudyScheduleOfActivities",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/Vulcan-schedule-ig"
    },
    "hl7.fhir.uv.vulcan-soa": {
        "url": "http://hl7.org/fhir/uv/vulcan-soa",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/Vulcan-schedule-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "VulcanSofA",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/Vulcan-schedule-ig"
    },
    "hl7.fhir.uv.ichom-breast-cancer": {
        "url": "http://hl7.org/fhir/uv/ichom-breast-cancer",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-ichom-breast-cancer-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/ichom-breast-cancer/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-08-21",
                "current": true,
                "desc": "First release of the specification representing the ICHOM Breast Cancer Patient-Centered Outcome Set version 5.0, modelled as both FHIR Questionnaires and resource profiles."
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-07",
                "path": "http://hl7.org/fhir/uv/ichom-breast-cancer/2023Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "desc": "First release of the specification representing the ICHOM Breast Cancer Patient-Centered Outcome Set version 5.0, modelled as both FHIR Questionnaires and resource profiles."
            }
        ],
        "name": "BreastCancerICHOM",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-ichom-breast-cancer-ig"
    },
    "hl7.fhir.uv.ichom.breastcancer": {
        "url": "https://connect.ichom.org/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-ichom-breast-cancer-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "BreastCancerICHOM",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.0.1",
        "repo": "https://github.com/HL7/fhir-ichom-breast-cancer-ig"
    },
    "hl7.fhir.us.ecr": {
        "url": "http://hl7.org/fhir/us/ecr",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/case-reporting",
                "status": "ci-build",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "2.1.1",
                "path": "http://hl7.org/fhir/us/ecr/STU2.1.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-14",
                "current": true,
                "desc": "Technical correction to STU 2.1"
            },
            {
                "version": "2.1.0",
                "desc": "FHIR eCR STU Release 2.1",
                "path": "http://hl7.org/fhir/us/ecr/STU2.1",
                "changes": "http://hl7.org/fhir/us/ecrhistory.html",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 2",
                "date": "2022-08-31"
            },
            {
                "version": "2.0.0",
                "desc": "FHIR STU Release 2",
                "path": "http://hl7.org/fhir/us/ecr/STU2",
                "changes": "http://hl7.org/fhir/us/ecrhistory.html",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 2",
                "date": "2022-01-18"
            },
            {
                "version": "1.1.0",
                "desc": "Ballot for FHIR STU Release 2",
                "path": "http://hl7.org/fhir/us/ecr/2021Jan",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 2",
                "date": "2020-12-16"
            },
            {
                "version": "1.0.0",
                "date": "2020-01-29",
                "desc": "FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/ecr/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1"
            },
            {
                "version": "0.2.0",
                "date": "2018-08-21",
                "desc": "Ballot for FHIR STU",
                "path": "http://hl7.org/fhir/us/ecr/2018Sep",
                "status": "ballot",
                "fhirversion": "3.0.2",
                "sequence": "STU 1"
            },
            {
                "version": "0.1.0",
                "date": "2017-12-20",
                "desc": "For Comment Ballot",
                "path": "http://hl7.org/fhir/uv/ecr/2018Jan",
                "status": "ballot",
                "fhirversion": "3.0.2",
                "sequence": "STU 1"
            }
        ],
        "name": "ElectronicCaseReporting",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.1",
        "repo": "https://github.com/HL7/case-reporting"
    },
    "hl7.fhir.uv.bulkdata": {
        "url": "http://hl7.org/fhir/uv/bulkdata",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/bulk-data",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "desc": "STU 2 Publcation",
                "changes": "changes.html",
                "path": "http://hl7.org/fhir/uv/bulkdata/STU2",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "date": "2021-11-26",
                "current": true
            },
            {
                "version": "1.1.0",
                "desc": "STU 2 Ballot #1",
                "changes": "/changes.html",
                "path": "http://hl7.org/fhir/uv/bulkdata/2021May",
                "sequence": "STU 2 (FHIR R4)",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "date": "2021-04-16"
            },
            {
                "version": "1.0.1",
                "desc": "STU 1 with technical errata",
                "descmd": "STU 1 with technical errata comprising the following changes:\n* Updated the CapabilityStatement to move the Patient and Group level export operations from the `rest.operation` element to `rest.resource.operation` elements and correct the OperationDefinition URLs\n* Corrected conformance URL\n* Added note on export complete status extension field description to clarify that extensions may be placed under to any field in the export complete status response and not just at the root level of the response",
                "path": "http://hl7.org/fhir/uv/bulkdata/STU1.0.1",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "date": "2020-12-04"
            },
            {
                "version": "1.0.0",
                "date": "2019-08-22",
                "desc": "STU 1",
                "path": "http://hl7.org/fhir/uv/bulkdata/STU1",
                "sequence": "STU 1",
                "fhirversion": "4.0.0",
                "status": "trial-use"
            },
            {
                "version": "0.1.0",
                "date": "2019-03-27",
                "desc": "STU #1 1st Ballot",
                "package-id": "hl7.fhir.us.bulkdata",
                "canonical": "http://hl7.org/fhir/us/bulkdata",
                "path": "http://hl7.org/fhir/us/bulkdata/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "BulkDataAccessIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/bulk-data"
    },
    "hl7.fhir.uv.pocd": {
        "url": "http://hl7.org/fhir/uv/pocd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/uv-pocd",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.3.0",
                "desc": "STU 1 ballot (Sep 2021 Ballot)",
                "path": "http://hl7.org/fhir/uv/pocd/2021Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2021-08-14"
            },
            {
                "version": "0.2.0",
                "date": "2018-09-01",
                "desc": "Release 0.2.0 (STU1) Ballot 2",
                "changes": "changes.html",
                "path": "http://hl7.org/fhir/uv/pocd/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-01-01",
                "desc": "Release 0.1.0 (STU1) first ballot (Draft for Comment)",
                "path": "http://hl7.org/fhir/uv/pocd/2018Jan",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "3.0.0"
            }
        ],
        "name": "PoCDImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "current",
        "repo": "https://github.com/HL7/uv-pocd"
    },
    "hl7.fhir.us.ccda": {
        "url": "http://hl7.org/fhir/us/ccda",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/ccda-on-fhir",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.2.0",
                "path": "http://hl7.org/fhir/us/ccda/STU1.2",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-03-12",
                "current": true,
                "desc": "The C-CDA on FHIR Implementation Guide is a US Realm Implementation Guide of the FHIR Specification addressing the key aspects of Consolidated CDA (C-CDA) required for Meaningful Use (MU). This IG publication release focuses on providing data mappings for problems, allergies, medications, immunization, patient and procedures (PAMI+). The clinical document header and document guidance from the earlier publications have not been updated since 2020.",
                "descmd": "The C-CDA on FHIR Implementation Guide is a US Realm Implementation Guide of the FHIR Specification addressing the key aspects of Consolidated CDA (C-CDA) required for Meaningful Use (MU). This IG publication release focuses on providing data mappings for problems, allergies, medications, immunization, patient and procedures (PAMI+). The clinical document header and document guidance from the earlier publications have not been updated since 2020."
            },
            {
                "version": "1.2.0-ballot",
                "path": "http://hl7.org/fhir/us/ccda/2023May",
                "status": "ballot",
                "sequence": "STU 1.2",
                "fhirversion": "4.0.1",
                "date": "2023-03-27",
                "desc": "The C-CDA on FHIR Implementation Guide is a US Realm Implementation Guide of the FHIR Specification addressing the key aspects of Consolidated CDA (C-CDA) required for Meaningful Use (MU). This IG publication release focuses on providing data mappings for problems, allergies, medications, immunization, patient and procedures (PAMI+). The clinical document header and document guidance from the earlier publications are retained in this guide but not designated for commenter feedback at this time.",
                "descmd": "The C-CDA on FHIR Implementation Guide is a US Realm Implementation Guide of the FHIR Specification addressing the key aspects of Consolidated CDA (C-CDA) required for Meaningful Use (MU). This IG publication release focuses on providing data mappings for problems, allergies, medications, immunization, patient and procedures (PAMI+). The clinical document header and document guidance from the earlier publications are retained in this guide but not designated for commenter feedback at this time."
            },
            {
                "version": "1.1.0",
                "desc": "STU 1.1 Published version",
                "path": "http://hl7.org/fhir/us/ccda/STU1.1",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "sequence": "STU 1.1",
                "date": "2020-10-21"
            },
            {
                "version": "1.0.0",
                "date": "2018-04-07",
                "desc": "STU 1 Published version (permanent home). Note that the version number was reset to 1.0.0 for this version since the IG acquired its own version separate to the main FHIR version)",
                "path": "http://hl7.org/fhir/us/ccda/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            },
            {
                "version": "1.8.0",
                "date": "2016-12-06",
                "desc": "STU 1 2nd Ballot",
                "path": "http://hl7.org/fhir/us/ccda/2017Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "1.8.0"
            },
            {
                "version": "1.6.0",
                "date": "2016-08-11",
                "desc": "STU 1 1st Ballot",
                "path": "http://hl7.org/fhir/us/ccda/2016Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "1.6.0"
            }
        ],
        "name": "CCDAonFHIR",
        "title": "C-CDA on FHIR",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.2.0-ballot",
        "repo": "https://github.com/HL7/ccda-on-fhir"
    },
    "hl7.fhir.us.directory-query": {
        "url": "http://hl7.org/fhir/us/directory-query",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-directory-query",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "desc": "National Directory",
                "path": "http://hl7.org/fhir/us/directory-query/2022Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-08-09"
            }
        ],
        "name": "NationalHealthcareDirectoryQuery",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-directory-query"
    },
    "hl7.fhir.us.pacio-adi": {
        "url": "http://hl7.org/fhir/us/pacio-adi",
        "versions": [
            {
                "version": "current",
                "desc": "PACIO Advance Directive Information Implementation Guide CI Build",
                "path": "http://build.fhir.org/ig/HL7/fhir-pacio-adi",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/pacio-adi/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-01-11",
                "current": true,
                "desc": "STU1 Release",
                "descmd": "STU1 Release",
                "changes": "change_log.html"
            },
            {
                "version": "0.1.0",
                "desc": "PACIO Advance Directive Information Implementation Guide Release 1 - US Realm STU 1 Ballot",
                "path": "http://hl7.org/fhir/us/pacio-adi/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-06"
            }
        ],
        "name": "PACIOAdvanceDirectiveInteroperability",
        "title": "PACIO Advance Directive Interoperability Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/HL7/fhir-pacio-adi"
    },
    "hl7.fhir.us.hai": {
        "url": "http://hl7.org/fhir/us/hai",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/HAI",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.1.0",
                "path": "http://hl7.org/fhir/us/hai/STU2.1",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-09-06",
                "current": true,
                "desc": "Update to FHIR STU Release 2"
            },
            {
                "version": "2.0.0",
                "date": "2019-10-11",
                "desc": "FHIR STU Release 2",
                "path": "http://hl7.org/fhir/us/hai/STU2",
                "changes": "releaseHistory.html",
                "status": "trial-use",
                "fhirversion": "4.0.0",
                "sequence": "STU 2"
            },
            {
                "version": "1.1.0",
                "date": "2019-03-27",
                "desc": "Ballot for FHIR STU Release 2",
                "path": "http://hl7.org/fhir/us/hai/2019May",
                "changes": "releaseHistory.html",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "3.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2019-03-08",
                "desc": "STU Release 1 (FHIR STU 3)",
                "path": "http://hl7.org/fhir/us/hai/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2018-04-04",
                "desc": "STU Ballot",
                "path": "http://hl7.org/fhir/us/hai/2018May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.3.0"
            }
        ],
        "name": "HealthcareAssociatedInfectionReports",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/HL7/HAI"
    },
    "hl7.fhir.us.bfdr": {
        "url": "http://hl7.org/fhir/us/bfdr",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-bfdr",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "sequence": "STU 1 on FHIR R4"
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/us/bfdr/2024Jan",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-18",
                "desc": "STU 2 ballot"
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/us/bfdr/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-10",
                "current": true,
                "desc": "Update to STU 1 addressing connectathon feedback"
            },
            {
                "version": "1.0.0",
                "desc": "FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/bfdr/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1 on FHIR R4",
                "date": "2021-10-22"
            },
            {
                "version": "0.1.0",
                "desc": "Ballot for FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/bfdr/2021Jan",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "sequence": "STU 1 on FHIR R4",
                "date": "2020-12-16"
            }
        ],
        "name": "BirthAndFetalDeath",
        "title": "Birth And Fetal Death (BFDR) - STU2-ballot",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-CIbuild",
        "repo": "https://github.com/HL7/fhir-bfdr"
    },
    "hl7.fhir.us.pq-cmc-fda": {
        "url": "http://hl7.org/fhir/us/pq-cmc-fda",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/FHIR-us-pq-cmc-fda",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "FHIR_pqcmc_fda",
        "title": "Pharmaceutical Quality - Chemistry, Manufacturing and Controls (PQ-CMC) Submissions to FDA",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/FHIR-us-pq-cmc-fda"
    },
    "hl7.fhir.us.sirb": {
        "url": "http://hl7.org/fhir/us/sirb",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-sirb",
                "desc": "Current continuous integration build",
                "fhirversion": "4.0.1",
                "sequence": "",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/sirb/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-04-20",
                "current": true,
                "desc": "Single Institutional Review Board (sIRB) Implementation Guide"
            },
            {
                "version": "0.1.0",
                "desc": "Initial STU Ballot",
                "path": "http://hl7.org/fhir/us/sirb/2021Sep",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "status": "ballot",
                "date": "2021-08-10"
            }
        ],
        "name": "SingleInstitutionalReviewBoard",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-sirb"
    },
    "hl7.fhir.us.illTraveler": {
        "url": "http://hl7.org/fhir/us/reportofilltraveler",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ReportIIITraveler-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CDCDGMHReportofIllTraveler",
        "title": "CDC DGMH Report of Ill Traveler",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/ReportIIITraveler-ig"
    },
    "hl7.fhir.us.davinci-drug-formulary": {
        "url": "http://hl7.org/fhir/us/davinci-drug-formulary",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-pdex-formulary",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/STU2.0.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-01",
                "current": true,
                "desc": "Substantive Technical Correction of STU 2"
            },
            {
                "version": "2.0.0",
                "desc": "DaVinci Payer Data Exchange (PDex) US Drug Formulary, Release 2.0.0 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2022-08-25"
            },
            {
                "version": "1.2.0",
                "desc": "DaVinci Payer Data Exchange (PDex) US Drug Formulary | STU2 Ballot",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/2022Jan",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2021-12-03"
            },
            {
                "version": "1.1.0",
                "desc": "Payer Data Exchange (PDex) Drug Formulary, Release 1.1.0 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-10-15"
            },
            {
                "version": "1.0.1",
                "desc": "Payer Data Exchange (PDex) Drug Formulary, Release 1.0.1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/STU1.0.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-21"
            },
            {
                "version": "1.0.0",
                "date": "2020-01-21",
                "desc": "Payer Data Exchange (PDex) Drug Formulary, Release 1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2019-06-18",
                "desc": "US Drug Formulary - STU Ballot",
                "path": "http://hl7.org/fhir/us/davinci-drug-formulary/Jun2019",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "Formulary",
        "title": "DaVinci Payer Data Exchange (PDex) US Drug Formulary",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.1",
        "repo": "https://github.com/HL7/davinci-pdex-formulary"
    },
    "hl7.fhir.uv.CardX-HTN-MNG": {
        "url": "http://hl7.org/fhir/uv/CardX-HTN-MNG",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/CardX-HTN-MNG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HTNMngCardX",
        "title": "CardX Hypertension Management",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/CardX-HTN-MNG"
    },
    "hl7.fhir.us.cardx-htn": {
        "url": "http://hl7.org/fhir/us/cardx-htn",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/cardx-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "HTNMngCardX",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/cardx-ig"
    },
    "hl7.fhir.uv.genomics-reporting": {
        "url": "http://hl7.org/fhir/uv/genomics-reporting",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/genomics-reporting",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "3.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/2024Jan",
                "status": "ballot",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "date": "2023-12-18",
                "desc": "Ballot version for STU3 update of Genomics Reporting IG",
                "descmd": "Ballot version for STU3 update of Genomics Reporting IG"
            },
            {
                "version": "2.0.0",
                "desc": "STU 2",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2022-05-09",
                "current": true
            },
            {
                "version": "1.1.0",
                "desc": "STU 2",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/2021May",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2021-04-13"
            },
            {
                "version": "1.0.0",
                "date": "2019-11-20",
                "desc": "STU 1",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.3.0",
                "date": "2018-12-04",
                "desc": "STU 1 Ballot #2",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/2019Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-04-04",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/fhir/uv/genomics-reporting/2018May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.3.0"
            }
        ],
        "name": "GenomicsReporting",
        "title": "Genomics Reporting Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.1-SNAPSHOT",
        "repo": "https://github.com/HL7/genomics-reporting"
    },
    "hl7.fhir.template": {
        "url": "http://fhir.org/templates/hl7.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-fhir",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.9.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.9.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on hl7.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.5.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.4.0",
                "desc": "Upgrade for dependency on hl7.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.3.3",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.3",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.3.2",
                "desc": "Fix search link",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.2.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.2.0",
                "desc": "Upgrade for dependency on hl7.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-17"
            },
            {
                "version": "0.0.5",
                "date": "2020-02-03",
                "desc": "First Release",
                "path": "http://fhir.org/templates/fhir.base.template/0.0.5",
                "status": "release",
                "sequence": "Publications"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.9.0",
        "repo": "https://github.com/HL7/ig-template-fhir"
    },
    "hl7.fhir.us.consent-management": {
        "url": "http://hl7.org/fhir/us/consent-management",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-consent-management",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ScalableConsentManagement",
        "title": "Scalable Consent Management",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-consent-management"
    },
    "hl7.fhir.us.breast-radiology": {
        "url": "http://hl7.org/fhir/us/breast-radiology",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.hl7.org/fhir/us/breast-radiology/",
                "status": "ci-build",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "0.2.0",
                "date": "2019-3-25",
                "desc": "STU1 Ballot",
                "path": "http://hl7.org/fhir/us/breast-radiology/2020May",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU1"
            },
            {
                "version": "0.1.0",
                "date": "2019-09-30",
                "desc": "Initial release for comment",
                "path": "http://hl7.org/fhir/us/breast-radiology/2019Sep",
                "status": "ballot",
                "fhirversion": "4.0.0",
                "sequence": "Comment"
            }
        ],
        "name": "BreastImagingReporting2ndSTUballot",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.3.0",
        "repo": "https://github.com/HL7/fhir-breast-radiology-ig"
    },
    "hl7.fhir.us.cimilabs": {
        "url": "http://hl7.org/fhir/us/cimi-labs",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/cimi-labs",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CIMILaboratoryResults",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1",
        "repo": "https://github.com/HL7/cimi-labs"
    },
    "hl7.fhir.uv.pddi": {
        "url": "http://hl7.org/fhir/uv/pddi",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/PDDI-CDS",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-07",
                "path": "http://hl7.org/fhir/uv/pddi/2023Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "desc": "Release 2.0.0 STU1 Ballot 2",
                "descmd": "This ballot incorporates changes from implementation and connectathon experience as well as previous ballot reconciliation. See the home page of the ballot IG for a detailed change log."
            },
            {
                "version": "0.2.0",
                "date": "2020-08-10",
                "desc": "Release 0.2.0 STU1 Ballot 2",
                "descmd": "#### Substantive\r\n* Introduced a new method for coordinating order-select and order-sign hooks to avoid duplicate card responses that no longer uses  DetectedIssue in the CDS Service response. [FHIR-18804](https://jira.hl7.org/browse/FHIR-18804)\r\n* Brief description of the relationship between of the CDS Hooks Feedback Endpoint and how a PDDI CDS Service would conduct duplicate card filtering.\r\n* Made conformance criteria more visible [FHIR-18078](https://jira.hl7.org/browse/FHIR-18078)\r\n\r\n#### Non-substantive\r\n* Fixed bad links [FHIR-18805](https://jira.hl7.org/browse/FHIR-18805), [FHIR-18806](https://jira.hl7.org/browse/FHIR-18806), [FHIR-18807](https://jira.hl7.org/browse/FHIR-18807)\r\n* Editorial changes to ensure consistency, correct references, and better navigation  [FHIR-18073](https://jira.hl7.org/browse/FHIR-18073), [FHIR-18074](https://jira.hl7.org/browse/FHIR-18057), [FHIR-18074](https://jira.hl7.org/browse/FHIR-18074), [FHIR-18056](https://jira.hl7.org/browse/FHIR-18056)",
                "path": "http://hl7.org/fhir/uv/pddi/2020Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2018-09-01",
                "desc": "Release 0.1.0 STU1 Ballot 1",
                "path": "http://hl7.org/fhir/uv/pddi/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            }
        ],
        "name": "PDDI_CDS",
        "title": "Potential Drug-Drug Interaction (PDDI) CDS IG : STU1 Ballot 2",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/PDDI-CDS"
    },
    "hl7.fhir.us.nhsn-dqm": {
        "url": "http://hl7.org/fhir/us/nhsn-dqm",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/nhsn-dqm",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "NHSNdQM",
        "title": "National Healthcare Safety Network (NHSN) using digital quality measures (dQMs)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-cibuild",
        "repo": "https://github.com/HL7/nhsn-dqm"
    },
    "hl7.fhir.us.core": {
        "url": "http://hl7.org/fhir/us/core",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control) - Content subject to frequent changes.",
                "path": "http://build.fhir.org/ig/HL7/US-Core",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "7.0.0-ballot",
                "path": "http://hl7.org/fhir/us/core/2024Jan",
                "status": "ballot",
                "sequence": "STU7",
                "fhirversion": "4.0.1",
                "date": "2023-12-19",
                "desc": "The January 2024 Ballot Version adds United States Core Data for Interoperability (USCDI) V4 updates that the Office of the National Coordinator (ONC) published in July 2023. It also addresses over 50 trackers submitted by implementers since the publication of US Core ver 6.1.0. For a detailed list of the changes for this version, see the Change Notes (http://hl7.org/fhir/us/core/2024Jan/changes.html).",
                "descmd": "The January 2024 Ballot Version adds United States Core Data for Interoperability (USCDI) V4 updates that the Office of the National Coordinator (ONC) published in July 2023. It also addresses over 50 trackers submitted by implementers since the publication of US Core ver 6.1.0. For a detailed list of the changes for this version, see the [Change Notes](http://hl7.org/fhir/us/core/2024Jan/changes.html).",
                "changes": "changes.html"
            },
            {
                "version": "6.1.0",
                "name": "STU6.1",
                "path": "http://hl7.org/fhir/us/core/STU6.1",
                "status": "update",
                "sequence": "STU6",
                "fhirversion": "4.0.1",
                "date": "2023-06-30",
                "current": true,
                "desc": "This STU Update to version 6.0.0 of US Core has been reviewed by the public per the HL7 STU update process and voted on by the members of the HL7 International Cross-Group Projects work group. - see the Change Notes (http://hl7.org/fhir/us/core/STU6/changes.html).",
                "descmd": "This STU Update to version 6.0.0 of US Core has been reviewed by the public per the HL7 STU update process and voted on by the members of the HL7 International Cross-Group Projects work group. - see the [Change Notes](http://hl7.org/fhir/us/core/STU6/changes.html)."
            },
            {
                "version": "6.1.0-snapshot1",
                "path": "http://hl7.org/fhir/us/core/STU6.1-snapshot1",
                "status": "update",
                "sequence": "STU6",
                "fhirversion": "4.0.1",
                "date": "2023-05-27",
                "desc": "This publication snapshot of the STU Update to version 6.0.0 of US Core is published for review by the public per the HL7 STU update process. The resolution of these change has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group. - see the Change Notes (http://hl7.org/fhir/us/core/STU6/changes.html).",
                "descmd": "This publication snapshot of the STU Update to version 6.0.0 of US Core is published for review by the public per the HL7 STU update process. The resolution of these change has been agreed to and voted on by the members of the HL7 International Cross-Group Projects work group. - see the [Change Notes](http://hl7.org/fhir/us/core/STU6/changes.html)."
            },
            {
                "version": "6.0.0",
                "name": "STU6",
                "path": "http://hl7.org/fhir/us/core/STU6",
                "status": "trial-use",
                "sequence": "STU6",
                "fhirversion": "4.0.1",
                "date": "2023-05-03",
                "desc": "STU6 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the January 2023 Ballot Version. - see the Change Notes (http://hl7.org/fhir/us/core/STU6/changes.html).",
                "descmd": "STU6 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the January 2023 Ballot Version. - see the [Change Notes](http://hl7.org/fhir/us/core/STU6/changes.html)."
            },
            {
                "version": "6.0.0-ballot",
                "date": "2022-12-05",
                "path": "http://hl7.org/fhir/us/core/2023Jan",
                "status": "ballot",
                "sequence": "STU6",
                "fhirversion": "4.0.1",
                "desc": "The January 2022 Ballot Version: This version adds United States Core Data for Interoperability (USCDI) V3 updates that the Office of the National Coordinator (ONC) published in July 2022. It addresses over 70 trackers submitted by implementers since the publication of US Core ver 5.0.1. For a detailed list of the changes for this version, see the [Change Notes](http://hl7.org/fhir/us/core/2023Jan/changes.html).",
                "milestoneName": "R6"
            },
            {
                "version": "5.0.1",
                "name": "STU5",
                "desc": "STU5 Errata Update of the US Core Implementation Guide: 1) Correction of typos in Condition profile urls, 2)Update VSAC version package dependency and 3)Correction to Provenance profile.",
                "changes": "changes.html",
                "path": "http://hl7.org/fhir/us/core/STU5.0.1",
                "status": "trial-use",
                "sequence": "STU5",
                "fhirversion": "4.0.1",
                "date": "2022-06-22",
                "milestoneName": "R5"
            },
            {
                "version": "5.0.0",
                "desc": "STU5 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the January 2022 Ballot Version.",
                "changes": "changes.html",
                "path": "http://hl7.org/fhir/us/core/STU5",
                "status": "trial-use",
                "sequence": "STU5",
                "fhirversion": "4.0.1",
                "date": "2022-05-13"
            },
            {
                "version": "4.1.0",
                "date": "2021-11-30",
                "desc": "The January 2022 Ballot Version:  this version adds United States Core Data for Interoperability (USCDI) V2 updates that the Office of the National Coordinator (ONC) published in July of 2021. Continues efforts to link terminology directly to Value Set Authority Center (VSAC) where applicable. Addresses over 30 trackers submitted by implementers since the previous STU2 ballot for US Core ver 4.0.0.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2022Jan",
                "status": "ballot",
                "sequence": "STU5",
                "fhirversion": "4.0.1"
            },
            {
                "version": "4.0.0",
                "name": "STU4",
                "date": "2021-06-28",
                "desc": "STU4 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the January 2021 Ballot Version.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU4",
                "status": "trial-use",
                "sequence": "STU4",
                "fhirversion": "4.0.1",
                "milestoneName": "R4"
            },
            {
                "version": "3.2.0",
                "date": "2021-1-30",
                "desc": "The January 2021 Ballot Version: this version 1) adds new Conformance Expectations, 2)  add a set of US Core Vital Signs, 3) links terminology directly to the Value Set Authority Center (VSAC), 4) migrates to the standard set of HL7 FHIR IG templates for publishing and addresses over 95 outstanding trackers from the FHIR community.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2021Jan",
                "status": "ballot",
                "sequence": "STU4",
                "fhirversion": "4.0.1"
            },
            {
                "version": "3.1.1",
                "name": "STU3",
                "date": "2020-6-30",
                "desc": "STU3 Technical Correction of the US Core Implementation Guide: this version addresses several technical corrections and errata and clarifications.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU3.1.1",
                "status": "trial-use",
                "sequence": "STU3",
                "fhirversion": "4.0.1",
                "milestoneName": "R3"
            },
            {
                "version": "3.1.0",
                "date": "2019-10-31",
                "desc": "2nd STU3 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the STU3 For Comment Version of the US Core Implementation Guide.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU3.1",
                "status": "trial-use",
                "sequence": "STU3",
                "fhirversion": "4.0.1"
            },
            {
                "version": "3.0.1",
                "date": "2019-09-01",
                "desc": "STU3 For Comment Version of the US Core Implementation Guide: this version add changes to meet the proposed ONC U.S. Core Data for Interoperability (USCDI) v1 regulatory requirements for access to patient data.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2019Sep",
                "status": "ballot",
                "sequence": "STU3",
                "fhirversion": "4.0.0"
            },
            {
                "version": "3.0.0",
                "date": "2019-06-15",
                "desc": "1st STU3 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the The January 2019 Ballot Version.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU3",
                "status": "trial-use",
                "sequence": "STU3",
                "fhirversion": "4.0.0"
            },
            {
                "version": "2.1.0",
                "date": "2018-12-04",
                "desc": "January 2019 Ballot Version: this version is the first ballot on FHIR R4. Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2019Jan",
                "status": "ballot",
                "sequence": "STU3",
                "fhirversion": "4.0.0"
            },
            {
                "version": "2.0.0",
                "name": "STU2",
                "date": "2018-12-04",
                "desc": "STU2 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the The January 2018 Ballot Version.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU2",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "3.0.1",
                "milestoneName": "R2"
            },
            {
                "version": "1.1.0",
                "date": "2017-12-20",
                "desc": "January 2018 Ballot Version: this version added the US Core DocumentReference, US Core Encounter, and US Core PractitionerRole profiles.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2018Jan",
                "status": "ballot",
                "sequence": "STU2",
                "fhirversion": "3.0.1"
            },
            {
                "version": "1.0.1",
                "date": "2017-11-02",
                "desc": "STU1 Technical Correction of the US Core Implementation Guide: this version addresses several technical corrections and errata and clarifications.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/1.0.1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "3.0.1",
                "milestoneName": "R1"
            },
            {
                "version": "1.0.0",
                "name": "STU1",
                "date": "2017-03-21",
                "desc": "STU1 Update of the US Core Implementation Guide: this version is the result of resolution of the community comments for the The January 2017 Ballot Version.  Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "3.0.1"
            },
            {
                "version": "0.0.0",
                "date": "2016-12-06",
                "desc": "January 2017 Ballot Version: this version is the first ballot of US Core Details of the changes in this version can be seen at https://github.com/HL7/US-Core/blob/master/input/pagecontent/changes.md",
                "path": "http://hl7.org/fhir/us/core/2017Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "1.8.0"
            }
        ],
        "name": "USCore",
        "title": "US Core Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "7.0.0",
        "repo": "https://github.com/HL7/US-Core"
    },
    "hl7.fhir.uv.vulcan-rwd": {
        "url": "http://hl7.org/fhir/uv/vulcan-rwd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/vulcan-rwd",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/vulcan-rwd/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-05-26",
                "current": true,
                "desc": "This is the first release of the published STU1 version of the guide."
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/uv/vulcan-rwd/2023Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "desc": "This is the ballot version of the first release in the STU1 sequence."
            }
        ],
        "name": "RealWorldData",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/vulcan-rwd"
    },
    "hl7.fhir.uv.cmi": {
        "url": "http://hl7.org/fhir/uv/cmi",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/Content-Management-Infrastructure-IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CMI",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/Content-Management-Infrastructure-IG"
    },
    "hl7.fhir.us.ndh": {
        "url": "http://hl7.org/fhir/us/ndh",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-us-ndh",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/us/ndh/2023Sep",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-07-30",
                "desc": "STU1 (v1.0.0) ballot"
            }
        ],
        "name": "NationalDirectoryHealthcare",
        "title": "National Directory of Healthcare Providers & Services (NDH) Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-us-ndh"
    },
    "hl7.fhir.us.medication-rems": {
        "url": "http://example.org",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-medication-rems-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "RemsIG",
        "title": "US Medication Risk Evaluation and Mitigation Strategies (REMS) FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-medication-rems-ig"
    },
    "hl7.fhir.us.directory-attestation": {
        "url": "http://hl7.org/fhir/us/directory-attestation",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-directory-attestation",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "desc": "National Directory",
                "path": "http://hl7.org/fhir/us/directory-attestation/2022Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-08-09"
            }
        ],
        "name": "NationalHealthcareDirectoryAttestationAndVerification",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-directory-attestation"
    },
    "hl7.fhir.uv.deval": {
        "url": "http://hl7.org/fhir/uv/deval",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/DeviceAlerting",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DeviceAlerting",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/DeviceAlerting"
    },
    "fhir.base.template": {
        "url": "http://fhir.org/templates/fhir.base.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-base",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.7.0",
                "desc": "Force snapshot release of all templates prior to making a change to the base template that depends on a new IG publisher",
                "path": "http://fhir.org/templates/fhir.base.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.6.0",
                "desc": "Update template for apply-wg",
                "path": "http://fhir.org/templates/fhir.base.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2023-09-21"
            },
            {
                "version": "0.5.0",
                "desc": "Add otherScripts for template security changes",
                "path": "http://fhir.org/templates/fhir.base.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2023-09-13"
            },
            {
                "version": "0.4.0",
                "desc": "Fix bugs in xslt + add test tab",
                "path": "http://fhir.org/templates/fhir.base.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-12-17"
            },
            {
                "version": "0.3.0",
                "desc": "Updated R5 support",
                "path": "http://fhir.org/templates/fhir.base.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.2.2",
                "desc": "release updated version of onload.xslt for Sushi users",
                "path": "http://fhir.org/templates/fhir.base.template/0.2.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.2.1",
                "desc": "update to correct versions of prism.js",
                "path": "http://fhir.org/templates/fhir.base.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.2.0",
                "desc": "Syntax highlighting for xml | json | turtle etc",
                "path": "http://fhir.org/templates/fhir.base.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.1.1",
                "desc": "Copy button, mapping folder, better overrides",
                "path": "http://fhir.org/templates/fhir.base.template/0.1.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-06-15"
            },
            {
                "version": "0.1.0",
                "desc": "Improved error messages and vocab layout",
                "path": "http://fhir.org/templates/fhir.base.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "current": false,
                "date": "2020-02-17"
            },
            {
                "version": "0.0.2",
                "date": "2020-02-03",
                "desc": "First Release",
                "path": "http://fhir.org/templates/fhir.base.template/0.0.2",
                "status": "release",
                "sequence": "Publications",
                "current": false
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.7.0",
        "repo": "https://github.com/HL7/ig-template-base"
    },
    "hl7.fhir.us.davinci-vbpr": {
        "url": "http://hl7.org/fhir/us/davinci-vbpr",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/HL7/davinci-vbpr",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/us/davinci-vbpr/2023Sep",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-07-31",
                "desc": "STU1 (v1.0.0) ballot",
                "descmd": "The Sept 2023 Ballot Version: This is the initial ballot of the Da Vinci Value-Based Performance Reporting Implementation Guide."
            }
        ],
        "name": "ValueBasedPerformanceReporting",
        "title": "Da Vinci Value-Based Performance Reporting Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/davinci-vbpr"
    },
    "hl7.fhir.us.lower-extremity-skin-wound-assessment": {
        "url": "http://hl7.org/fhir/us/lower-extremity-skin-wound-assessment",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-skin-wound-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "LowerExtremitySkinWoundAssessmentIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-skin-wound-ig"
    },
    "hl7.fhir.uv.adverseeventclinicalcare": {
        "url": "http://hl7.org/fhir/uv/adverseeventclinicalcare",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-ae-care-ig",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "adverseeventclinicalcare",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.2.0",
        "repo": "https://github.com/HL7/fhir-ae-care-ig"
    },
    "hl7.fhir.us.vitals": {
        "url": "http://hl7.org/fhir/us/vitals",
        "versions": [
            {
                "version": "current",
                "fhir-version": "4.0.1",
                "date": "n/a",
                "desc": "Continuous Integration Build for Vital Signs with Qualifying Extensions (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/cimi-vital-signs",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "fhirversion": "4.0.1",
                "desc": "STU 1 release",
                "path": "http://hl7.org/fhir/us/vitals/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "date": "2022-09-12",
                "current": true
            },
            {
                "version": "0.1.0",
                "fhirversion": "4.0.1",
                "date": "2020-08-07",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/fhir/us/vitals/2020Sep",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "CIMIVitalSigns",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/cimi-vital-signs"
    },
    "hl7.fhir.us.nhsn-ade": {
        "url": "http://hl7.org/fhir/us/nhsn-ade",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-nhsn-ade-ig/branches/main/index.html",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "date": "",
                "sequence": "STU 1 on FHIR R4",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/nhsn-ade/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1 on FHIR R4",
                "date": "2021-10-12",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/fhir/us/nhsn-ade/2021May",
                "fhirversion": "4.0.1",
                "sequence": "STU 1 on FHIR R4",
                "status": "ballot",
                "date": "2021-04-12"
            }
        ],
        "name": "AdverseDrugEventsGlycemicControl",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-nhsn-ade-ig"
    },
    "hl7.fhir.us.central-cancer-registry-reporting": {
        "url": "http://hl7.org/fhir/us/central-cancer-registry-reporting",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-central-cancer-registry-reporting",
                "status": "ci-build",
                "current": "true",
                "sequence": "STU 1",
                "fhirversion": "4.1.0"
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot (Jan 2022 Ballot)",
                "path": "http://hl7.org/fhir/us/central-cancer-registry-reporting/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-09"
            }
        ],
        "name": "CentralCancerRegistryReporting",
        "title": "Central Cancer Registry Reporting Content IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-central-cancer-registry-reporting-ig"
    },
    "hl7.fhir.us.mcc": {
        "url": "http://hl7.org/fhir/us/mcc",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-us-mcc",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot2",
                "path": "http://hl7.org/fhir/us/mcc/2023Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-28",
                "desc": "FHIR STU Release 1",
                "descmd": "FHIR STU Release 1"
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/us/mcc/2023Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "desc": "FHIR STU Release 1",
                "descmd": "FHIR STU Release 1"
            }
        ],
        "name": "MCCeCarePlan",
        "title": "MCC eCare Plan Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot2",
        "repo": "https://github.com/HL7/fhir-us-mcc"
    },
    "hl7.fhir.uv.ebm": {
        "url": "http://hl7.org/fhir/uv/ebm",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ebm",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/ebm/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "5.0.0",
                "date": "2023-12-17",
                "desc": "This is the initial release of the EBMonFHIR Implementation Guide for initial ballot January 2024."
            }
        ],
        "name": "EBMIG",
        "title": "Evidence Based Medicine on FHIR Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/ebm"
    },
    "hl7.fhir.us.medmorph": {
        "url": "http://hl7.org/fhir/us/medmorph",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-medmorph",
                "status": "ci-build",
                "current": "true",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/medmorph/STU1",
                "status": "trial-use",
                "sequence": "STU1 Release 1",
                "fhirversion": "4.0.1",
                "date": "2023-06-08",
                "current": true,
                "desc": "This release is the first release of the MedMorph Reference Architecture which provides the framework and an architecture to use FHIR to support publichealth reporting and research data submission use cases.",
                "changes": "changes.html"
            },
            {
                "version": "0.2.0",
                "desc": "Interim release to support MedMorph Content IG ballot - Healthcare Surveys, Cancer Registries, Medmorph Research",
                "path": "http://hl7.org/fhir/us/medmorph/2022Jan",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-08"
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot (Jan 2021 Ballot)",
                "path": "http://hl7.org/fhir/us/medmorph/2021Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-16"
            }
        ],
        "name": "MakingElectronicDataMoreAvailableForResearchAndPublicHealth",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-medmorph"
    },
    "hl7.fhir.us.carin-bb": {
        "url": "http://hl7.org/fhir/us/carin-bb",
        "versions": [
            {
                "version": "current",
                "desc": "CARIN Blue Button Implementation Guide CI Build",
                "path": "http://build.fhir.org/ig/HL7/carin-bb",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "date": "2022-11-28",
                "path": "http://hl7.org/fhir/us/carin-bb/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "desc": "CARIN Blue Button Implementation Guide Release 2 - US Realm STU",
                "current": true
            },
            {
                "version": "1.2.0",
                "desc": "CARIN Blue Button Implementation Guide Release 1 | STU2 Ballot",
                "path": "http://hl7.org/fhir/us/carin-bb/2022Jan",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2021-12-06"
            },
            {
                "version": "1.1.0",
                "desc": "CARIN Blue Button Implementation Guide Release 1 - US Realm STU",
                "changes": "9_change_notes.html#changes-and-updates-for-version-1-1-0",
                "path": "http://hl7.org/fhir/us/carin-bb/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-07-02"
            },
            {
                "version": "1.0.0",
                "desc": "CARIN Blue Button Implementation Guide Release 1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/carin-bb/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-11-23"
            },
            {
                "version": "0.1.0",
                "desc": "CARIN Blue Button FHIR IG STU1 ballot",
                "date": "2019-12-23",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/carin-bb/2020Feb",
                "status": "ballot",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CARINConsumerDirectedPayerDataExchange",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/carin-bb"
    },
    "hl7.base.template": {
        "url": "http://fhir.org/templates/hl7.base.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-hl7",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.9.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.9.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Add otherScripts for template security changes",
                "date": "2023-09-13"
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.base.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.5.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.4.0",
                "desc": "Support for xprod product family",
                "path": "http://fhir.org/templates/hl7.base.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.3.2",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.3.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.2.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.2.0",
                "desc": "Added validation of package-list, jira spec file generation",
                "path": "http://fhir.org/templates/hl7.base.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.base.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-17"
            },
            {
                "version": "0.0.1",
                "desc": "First Release",
                "path": "http://fhir.org/templates/fhir.base.template/0.0.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-03"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.9.0",
        "repo": "https://github.com/HL7/ig-template-hl7"
    },
    "hl7.fhir.us.identity-matching": {
        "url": "http://hl7.org/fhir/us/identity-matching",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for Digital Identity FHIR IG (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-identity-matching-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/identity-matching/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-06-02",
                "current": true,
                "desc": "HL7 FHIR Implementation Guide for Interoperable Digital Identity and Patient Matching"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Digital Identity IG First STU ballot",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/identity-matching/2022May",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "date": "2022-03-31"
            }
        ],
        "name": "DigitalIdentity",
        "title": "Interoperable Digital Identity and Patient Matching",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-draft",
        "repo": "https://github.com/HL7/fhir-identity-matching-ig"
    },
    "hl7.fhir.uv.phenomics-exchange": {
        "url": "http://hl7.org/fhir/uv/phenomics-exchange",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/phenomics-exchange-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "PhenomicsExchange",
        "title": "Phenomics Exchange for Research and Diagnostics",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/phenomics-exchange-ig"
    },
    "hl7.fhir.us.pdmp": {
        "url": "http://hl7.org/fhir/us/pdmp",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-pdmp",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "PDMP",
        "title": "US Prescription Drug Monitoring Program (PDMP)",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-pdmp"
    },
    "hl7.fhir.us.davinci-ra": {
        "url": "http://hl7.org/fhir/us/davinci-ra",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-ra",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/us/davinci-ra/2023May",
                "status": "ballot",
                "sequence": "STU2 (v2.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-03-28",
                "desc": "STU2 (v2.0.0)",
                "descmd": "The May 2023 Ballot Version: this version updates the Da Vinci Risk Adjustment Implementation Guide (IG) to STU2 (v2.0.0)."
            },
            {
                "version": "1.0.0",
                "desc": "STU 1: Initial Da Vinci Risk Adjustment IG for FHIR R4 STU release",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/us/davinci-ra/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2022-06-16",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "First public ballot - see (http://hl7.org/fhir/us/davinci-ra/2022Jan/index.html)",
                "path": "http://hl7.org/fhir/us/davinci-ra/2022Jan",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2021-12-06"
            }
        ],
        "name": "RiskAdjustment",
        "title": "Da Vinci Risk Adjustment Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/davinci-ra"
    },
    "hl7.fhir.us.qicore": {
        "url": "http://hl7.org/fhir/us/qicore",
        "versions": [
            {
                "version": "current",
                "date": "Latest Build",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/fhir-qi-core",
                "status": "ci-build",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "6.0.0",
                "path": "http://hl7.org/fhir/us/qicore/STU6",
                "status": "trial-use",
                "sequence": "STU6 (v6.0.0)",
                "fhirversion": "4.0.1",
                "date": "2024-03-01",
                "current": true,
                "desc": "STU6 (v6.0.0) Publication",
                "descmd": "This version updates the QI-Core (Quality Improvement Core Framework) Implementation Guide to STU6 (v6.0.0) and aligns with the US Core Implementation Guide STU6 (v6.1.0)"
            },
            {
                "version": "6.0.0-ballot",
                "path": "http://hl7.org/fhir/us/qicore/2023Sep",
                "status": "ballot",
                "sequence": "STU6 (v6.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-08-03",
                "desc": "Release 6.0.0-ballot STU6 Ballot",
                "descmd": "The September 2023 Ballot version updates the QI-Core (Quality Improvement Core Framework) Implementation Guide to STU6 (v6.0.0) and aligns with the US Core Implementation Guide STU6 (v6.1.0)"
            },
            {
                "version": "5.0.0",
                "path": "http://hl7.org/fhir/us/qicore/STU5",
                "status": "trial-use",
                "sequence": "STU5 (v5.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-04-04",
                "desc": "STU5 (v5.0.0)",
                "descmd": "This version updates the QI-Core (Quality Improvement Core Framework) Implementation Guide to STU5 (v5.0.0) and aligns with the US Core Implementation Guide STU5"
            },
            {
                "version": "5.0.0-ballot",
                "descmd": "The September 2022 Ballot Version: this version updates the QI-Core (Quality Improvement Core Framework) Implementation Guide to STU5 (v5.0.0) and aligns with the US Core Implementation Guide STU5",
                "desc": "STU5 (v5.0.0)",
                "path": "http://hl7.org/fhir/us/qicore/2022Sep",
                "status": "ballot",
                "sequence": "STU 5",
                "fhirversion": "4.0.1",
                "date": "2022-08-08"
            },
            {
                "version": "4.1.1",
                "descmd": "* [FHIR-35873](https://jira.hl7.org/browse/FHIR-35873): Corrected version-independent links to USCore throughout\r\n* [FHIR-35802](https://jira.hl7.org/browse/FHIR-35802): Corrected negation examples and added guidance for usage of valueset-based negation\r\n\r\n",
                "desc": "STU4.1 with 1 Technical Errata (v4.1.1)",
                "path": "http://hl7.org/fhir/us/qicore/STU4.1.1",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2022-03-31"
            },
            {
                "version": "4.1.0",
                "descmd": "#### STU4 (v4.1.0)\r\n* 1. **Applied**:Broken Link for QUICK AdverseEvent actuality value set binding ([FHIR-23934](https://jira.hl7.org/browse/FHIR-23934))\r\n1. **Applied**:Immunization.occurrence should remove the String choice ([FHIR-26407](https://jira.hl7.org/browse/FHIR-26407))\r\n1. **Applied**:MedicationNotDispensed ([FHIR-26409](https://jira.hl7.org/browse/FHIR-26409))\r\n1. **Applied**:Naming of QUICK vs QI-Core Logical View  ([FHIR-26592](https://jira.hl7.org/browse/FHIR-26592))\r\n1.  **Applied**:Medication list patient reported medications use Intent = Plan (not order) ([FHIR-26829](https://jira.hl7.org/browse/FHIR-26829))\r\n1. **Applied**:wrong link in QDM to QICore mapping ([FHIR-27031](https://jira.hl7.org/browse/FHIR-27031))\r\n1. **Applied**:Remove imagingStudy must support from the QICoreDiagnosticReportLab profile ([FHIR-27163](https://jira.hl7.org/browse/FHIR-27163))\r\n1. **Applied**:Add TIN to QICore Organization Profile ([FHIR-27804](https://jira.hl7.org/browse/FHIR-27804))\r\n1. **Applied**:DEQM Practitioner and DEQM Organization Profile should be added to QI Core ([FHIR-28157](https://jira.hl7.org/browse/FHIR-28157))\r\n1. **Applied**:Patient resource generalpractitioner needs to consider PractitionerRole (https://jira.hl7.org/browse/FHIR-28220))\r\n1. **Applied**:Can you add my affiliation? ([FHIR-28231](https://jira.hl7.org/browse/FHIR-28231))\r\n1. **Applied**:change D.role to D.use in example with Encounter.diagnosis ([FHIR-28241](https://jira.hl7.org/browse/FHIR-28241))\r\n1. **Applied**:Add MUST HAVE for MedicationRequest timing elements ([FHIR-28286](https://jira.hl7.org/browse/FHIR-28286))\r\n1. **Applied**:Update Present On Admission in QDM to QI Core Mapping ([FHIR-29703](https://jira.hl7.org/browse/FHIR-29703))\r\n1. **Applied**:Change mapping of `Encounter, Performed` code from Encounter.class to Encounter.type ([FHIR-29819](https://jira.hl7.org/browse/FHIR-29819))\r\n1. **Applied**:QDM to QI-Core mapping for AdverseEvent error ([FHIR-30098](https://jira.hl7.org/browse/FHIR-30098))\r\n1. **Applied**:Add QICoreModelInfo ([FHIR-30771](https://jira.hl7.org/browse/FHIR-30771))\r\n1. **Applied**:Include US Core errata (3.1.1) to QI-Core Update process ([FHIR-31350](https://jira.hl7.org/browse/FHIR-31350))\r\n1. **Applied**:Add MedicationDispense.whenPrepared MUST SUPPORT ([FHIR-31609](https://jira.hl7.org/browse/FHIR-31609))\r\n1. **Applied**:Update QDM to QI-Core Mapping to address QDM 5.6 ([FHIR-31629](https://jira.hl7.org/browse/FHIR-31649))\r\n1. **Applied**:Add guidance about use of references in profiles QI-Core inherits from US Core and FHIR ([FHIR-31738](https://jira.hl7.org/browse/FHIR-31738))\r\n1. **Applied**:Update QDM to QI-Core mapping for ([FHIR-31740](https://jira.hl7.org/browse/FHIR-31740))\r\n1. **Applied**:Profile Procedure NOT Done - why is element code not required ([FHIR-31929](https://jira.hl7.org/browse/FHIR-31929))\r\n1. **Applied**:Procedure NOT Done - what is the intent of the valueset-reference in Code element ([FHIR-31930](https://jira.hl7.org/browse/FHIR-31930))\r\n1. **Applied**:Procedure NOT Done - recorded does not have a clear description ([FHIR-31931](https://jira.hl7.org/browse/FHIR-31931))\r\n1. **Applied**:Coverage.period shows in Differential but we cannot identify the change from FHIR Core ([FHIR-31932](https://jira.hl7.org/browse/FHIR-31932))\r\n1. **Applied**:QI Core Observation.code binding is just example to LOINC ([FHIR-31933](https://jira.hl7.org/browse/FHIR-31933))\r\n1. **Applied**:QI Core IG does not have a Table of Contents page ([FHIR-31935](https://jira.hl7.org/browse/FHIR-31935))\r\n1. **Applied**:QDM to QI-Core mapping Section 8.1 correct text to QDM 5.6 ([FHIR-31974](https://jira.hl7.org/browse/FHIR-31974))\r\n1. **Applied**:Adverse Event QDM-to-QI-Core mapping errata ([FHIR-31975](https://jira.hl7.org/browse/FHIR-31975))\r\n1. **Applied**:QDM to Qi-Core mapping AllergyIntolerance ([FHIR-31976](https://jira.hl7.org/browse/FHIR-31976))\r\n1. **Applied**:QDM to Qi-Core sections 8.4.1, 8.4.3 Assessment Order/Recommended ([FHIR-31977](https://jira.hl7.org/browse/FHIR-31977))\r\n1. **Applied**:QDM to QI-Core mapping Communication, Performed ([FHIR-31978](https://jira.hl7.org/browse/FHIR-31978))\r\n1. **Applied**:QDM to Qi-Core mapping for Device Order, Device Recommended ([FHIR-31979](https://jira.hl7.org/browse/FHIR-31979))\r\n1. **Applied**:QDM to QI-Core mapping Diagnostic Study corrections ([FHIR-31980](https://jira.hl7.org/browse/FHIR-31980))\r\n1. **Applied**:QDM to QI-Core mapping - Encounter ([FHIR-31981](https://jira.hl7.org/browse/FHIR-31981))\r\n1. **Applied**:QDM to QI-Core mapping Immunization Administered status error ([FHIR-31982](https://jira.hl7.org/browse/FHIR-31982))\r\n1. **Applied**:QDM to QI-Core mapping Intervention performed errors ([FHIR-31983](https://jira.hl7.org/browse/FHIR-31983))\r\n1. **Applied**:QDM to QI-Core mapping Laboratory order and recommended error ([FHIR-31984](https://jira.hl7.org/browse/FHIR-31984))\r\n1. **Applied**:QDM to QI-Core mapping Medication Administered error ([FHIR-31985](https://jira.hl7.org/browse/FHIR-31985))\r\n1. **Applied**:QDM to QI-Core mapping Medication, Discharge error ([FHIR-31987](https://jira.hl7.org/browse/FHIR-31987))\r\n1. **Applied**:QDM to QI-Core mapping update for Medication, Dispensed ([FHIR-31988](https://jira.hl7.org/browse/FHIR-31988))\r\n1. **Applied**:QDM to QI-Core mapping Physical Exam Order and Recommended error ([FHIR-31989](https://jira.hl7.org/browse/FHIR-31989))\r\n1. **Applied**:QDM to QI Core mapping changes for Procedure, Order, Procedure, Recommended and Procedure, Performed ([FHIR-31990](https://jira.hl7.org/browse/FHIR-31990))\r\n1. **Applied**:QDM to QI-Core mapping - error in Immunization, Administered not done mapping ([FHIR-32005](https://jira.hl7.org/browse/FHIR-32005\r\n1. **Applied**:QDM to QI-Core mapping for `Medication, Order` status constraints ([FHIR-32037](https://jira.hl7.org/browse/FHIR-32037\r\n1. **Applied**:CommunicationNotDone code requires change in cardinality and modeling ([FHIR-32052](https://jira.hl7.org/browse/FHIR-32052))\r\n1. **Applied**:DeviceRequestNotDone code binding and cardinality may require a specific slice for the eCQM use case ([FHIR-32053](https://jira.hl7.org/browse/FHIR-32053))\r\n1. **Applied**:ImmunizationNotDone should allow indication an individual immunization was not performed and a slice to indicate none of the members of a value set was performed ([FHIR-32054](https://jira.hl7.org/browse/FHIR-32054))\r\n1. **Applied**:MedicationNotAdministered requires ability to specify a single medication or an entire value set slice ([FHIR-32055](https://jira.hl7.org/browse/FHIR-32055))\r\n1. **Applied**:MedicationNotDispensed should allow indication of a single medication not dispensed or a slice to indicate an entire value set was not dispensed ([FHIR-32056](https://jira.hl7.org/browse/FHIR-32056))\r\n1. **Applied**:MedicationNotRequested should allow reference to a single medication not requested or a slice for a value set of all medications not requested ([FHIR-32057](https://jira.hl7.org/browse/FHIR-32057))\r\n1. **Applied**:ObservationNotDone should allow reference to a single observation not performed or a slice for a value set for which none of the items were performed ([FHIR-32058](https://jira.hl7.org/browse/FHIR-32058))\r\n1. **Applied**:ServiceNotRequested requires ability to specify a single service not requested or a slice for any one of a value set of services not requested ([FHIR-32059](https://jira.hl7.org/browse/FHIR-32059))\r\n1. **Applied**:DiagnosticReportLab does not have Performer or Issued as Must Support even though the US Core Specification Does ([FHIR-32235](https://jira.hl7.org/browse/FHIR-32235))\r\n1. **Applied**:How to reference TaskNotDone ([FHIR-32273](https://jira.hl7.org/browse/FHIR-32273))\r\n1. **Applied**:Create QICorePresentOnAdmission value set ([FHIR-32378](https://jira.hl7.org/browse/FHIR-32378))\r\n1. **Applied**:Add Must Support to Procedure.usedCode ([FHIR-32991](https://jira.hl7.org/browse/FHIR-32991))\r\n1. **Applied**:Add Must Support for ServiceRequest.intent, MedicationRequest.intent, NutritionOrder.intent, NutritionOrder.status ([FHIR-33027](https://jira.hl7.org/browse/FHIR-33027))\r\n1. **Applied**:Update identifiers throughout ([FHIR-33085](https://jira.hl7.org/browse/FHIR-33085))\r\n1. **Applied**:Remove Authoring section ([FHIR-33260](https://jira.hl7.org/browse/FHIR-33260))\r\n\r\n1. #### The following tickets listed below were incorporated from the **US Core errata (3.1.1)**:\r\n* Add guidance for representing patient name suffix and previous patient name to the US Core Patient Profile ([FHIR-28129](https://jira.hl7.org/browse/FHIR-28129))\r\n* Correct copy/paste error in Goal Profile ([FHIR-28109](https://jira.hl7.org/browse/FHIR-28109))\r\n* Correct US Core Provider Speciality (NUCC) ValueSet to hide abstract grouping codes ([FHIR-27975](https://jira.hl7.org/browse/FHIR-27975))\r\n* Added example of US Core Direct Extension to Practitioner-2 Example ([FHIR-27947](https://jira.hl7.org/browse/FHIR-27947))\r\n* Corrected technical errors in pediatric profiles StructureDefinitions ([FHIR-27946](https://jira.hl7.org/browse/FHIR-27946))\r\n* Corrected errors in DiagnosticReport Cardiology Example ([FHIR-27913](https://jira.hl7.org/browse/FHIR-27913))\r\n* Update Federal Register link for OMB race and ethnicity category classifications. ([FHIR-27907](https://jira.hl7.org/browse/FHIR-27907))\r\n* Clarified token search syntax ([FHIR-27897](https://jira.hl7.org/browse/FHIR-27897))\r\n* Corrected US Core DocumentReference Profile to support multiple attachments ([FHIR-25778](https://jira.hl7.org/browse/FHIR-25778))\r\n* Fix FHIRPath Expression in USCoreGoalTargetDate ([FHIR-27892](https://jira.hl7.org/browse/FHIR-27892))\r\n* Fix FHIRPath Expression in USCoreProcedureDate ([FHIR-27887](https://jira.hl7.org/browse/FHIR-27887))\r\n* Add omitted ge comparators to SearchParameters ([FHIR-27893](https://jira.hl7.org/browse/FHIR-27893))\r\n* Remove Must Support References to non US Core Profiles ([FHIR-27876](https://jira.hl7.org/browse/FHIR-27876))\r\n* Add missing reaction to the US Core AllergyIntolerance Profile ([FHIR-27867](https://jira.hl7.org/browse/FHIR-27867))\r\n* Clarify reference to US Core Patient in Vitals Signs Profiles ([FHIR-27857](https://jira.hl7.org/browse/FHIR-27857))\r\n* Corrected US Core Pulse Oximetry Profile component.valueQuantity.code and component.valueQuantity.unit min from 0 to 1 to be consistent with the valueQuantity constraints within US Core ([FHIR-27846](https://jira.hl7.org/browse/FHIR-27846))\r\n* Correct UCUM Unit in US Core Pulse Oximetry Profile Text Summary ([FHIR-27845](https://jira.hl7.org/browse/FHIR-27845))\r\n* Update Procedure Codes Value Set to include ICD-10 PCS codes ([FHIR-27836](https://jira.hl7.org/browse/FHIR-27836))\r\n* Update Procedure Codes Value Set to include CDT codes ([FHIR-27737](https://jira.hl7.org/browse/FHIR-27737))\r\n* Clarify that pediatric vital sign percentile Observations should reference growth chart ([FHIR-27549](https://jira.hl7.org/browse/FHIR-27549))\r\n* Added Missing US core Head Occipital-frontal Circumference Percentile Profile ([FHIR-27542](https://jira.hl7.org/browse/FHIR-27542))\r\n* Correct requirements for supporting CLIA identifiers ([FHIR-27158](https://jira.hl7.org/browse/FHIR-27158))\r\n* Change Description of ICD-10-PCS Value Set ([FHIR-27116](https://jira.hl7.org/browse/FHIR-27176))\r\n* Correct AllergyIntolerance guidance for verificationStatus ([FHIR-27096](https://jira.hl7.org/browse/FHIR-27096))\r\n* Fix example US Core heart-rate example ([FHIR-27086](https://jira.hl7.org/browse/FHIR-27086))\r\n* Review period comments Update smoking status codes to align with USCDI ([FHIR-27082](https://jira.hl7.org/browse/FHIR-27082))\r\n* Fix invariant provenance-1 ([FHIR-27065](https://jira.hl7.org/browse/FHIR-27065))\r\n* Fix invalid json snippet ([FHIR-27001](https://jira.hl7.org/browse/FHIR-27001))\r\n* Review period comments Remove Provenance requirement from Medication, Location, Practitioner, PractitionerRole, and Organization and correct copy and paste error to Medication and Provenance searchType support in CapabilityStatement ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)),([FHIR-28161](https://jira.hl7.org/browse/FHIR-28161))\r\n* Correction on USCDI Table change MedicationStatement to MedicationRequest and remove references to MedicationStatement in the Medication Profile and CapabilityStatements ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))\r\n* Clarify that US Core Location/PractitionerRole are not being referenced by other resources ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))\r\n* Correct editing error restoring Write and Operation capability guidance into DocumentReference QuickStart ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))\r\n* Clarify guidance that servers SHALL support search with status if status required ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))\r\n* Correct canonical url for ImplementationGuide ([FHIR-26686](https://jira.hl7.org/browse/FHIR-26686))\r\n* Correct system URI for ICD-10 procedure codes ([FHIR-26679](https://jira.hl7.org/browse/FHIR-26679))\r\n* Fix invariant us-core-1 ([FHIR-26605](https://jira.hl7.org/browse/FHIR-26605))\r\n* Change valueCode min from 0 to 1 for US Core Birth Sex Extension and valueBoolean min from 0 to 1 forUS Core Direct email Extension ([FHIR-26459](https://jira.hl7.org/browse/FHIR-26459))\r\n* Change valueQuantity min from 1 to 0 for US Core Pediatric BMI for Age Observation Profile and US Core Pediatric Weight for Height Observation Profile ([FHIR-26363](https://jira.hl7.org/browse/FHIR-26363))\r\n* Add page contents to Clinical Notes and Basic Provenance pages ([FHIR-25785](https://jira.hl7.org/browse/FHIR-25785))\r\n* Fix duplicate URL causing validation failure. ([FHIR-25536](https://jira.hl7.org/browse/FHIR-25536))\r\n* Fix Invariant us-core-8 ([FHIR-25459](https://jira.hl7.org/browse/FHIR-25459))\r\n* Corrected the wording should support to shall support in Clinical Notes Guidance ([FHIR-25455](https://jira.hl7.org/browse/FHIR-25455))\r\n* Fix Invariant us-core-8 to allow for Data Absent Reason Extension on Patient name.([FHIR-25249](https://jira.hl7.org/browse/FHIR-25249))\r\n* Fix Link to LOINC LP29708-2 ([FHIR-25213](https://jira.hl7.org/browse/FHIR-25213))\r\n* Corrected guidance for conveying Patient-Reported medications ([FHIR-25035](https://jira.hl7.org/browse/FHIR-25035))\r\n*",
                "desc": "STU4 (v4.1.0)",
                "path": "http://hl7.org/fhir/us/qicore/STU4.1",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "date": "2022-01-18"
            },
            {
                "version": "4.0.0",
                "date": "2020-03-19",
                "descmd": "STU 4 (v4.0.0)\r\n* Created negation profiles\r\n* Added patterns pages and CQL examples\r\n* Corrections throughout\r\n* Updated QDM-to-QI-Core mapping\r\n* Added negation reason value set and bindings",
                "desc": "STU 4 (v4.0.0)",
                "path": "http://hl7.org/fhir/us/qicore/STU4",
                "status": "trial-use",
                "sequence": "STU 4",
                "fhirversion": "4.0.1"
            },
            {
                "version": "3.3.0",
                "date": "2019-08-06",
                "descmd": "STU 4 Ballot (v3.3.0)\r\n* Updated profiles to be based on FHIR R4 and US Core STU 3\r\n* #22645 Added profiles on Immunization and Evaluation\r\n* #15012 Added a profile on NutritionOrder\r\n* #20727 Updated Observation documentation to provide clarity on use of FHIR and US Core profiles\r\n\r\n* #20610 Created the notDone extension and modified the DeviceUseStatement profile to use it; added the DeviceRequest profile, use the doNotPerform extension\r\n* #22646 Relaxed Must Support requirement on some fields of Immunization and ImmunizationRecommendation profiles\r\n* #14991 Added an example of using body position with an Observation",
                "desc": "STU 4 Ballot (v3.3.0)",
                "path": "http://hl7.org/fhir/us/qicore/2019Sep",
                "status": "ballot",
                "fhirversion": "4.0.0",
                "sequence": "STU 4"
            },
            {
                "version": "3.2.0",
                "date": "2019-04-14",
                "descmd": "STU 3.2 (v3.2.0)\r\n* Updated profiles to be based on US Core 2.0.0\r\n* Derived Encounter and PractitionerRole profiles from US Core profiles",
                "desc": "STU 3.2 (v3.2.0)",
                "path": "http://hl7.org/fhir/us/qicore/STU32",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "3.0.1"
            },
            {
                "version": "3.1.0",
                "date": "2018-08-21",
                "descmd": "STU 3 (v3.1.0)\r\n* Added profile for PractitionerRole and removed Practitioner.role extension\r\n* Added profile for Task\r\n* Established pattern for representing QDM Principal Diagnosis in Encounters\r\n* Relaxed conformance requirements from all profiles to profiles that are relevant to a particular use case",
                "desc": "STU 3 (v3.1.0)",
                "path": "http://hl7.org/fhir/us/qicore/STU3",
                "status": "trial-use",
                "fhirversion": "3.0.1",
                "sequence": "STU 3"
            },
            {
                "version": "2.1.0",
                "date": "2017-12-20",
                "descmd": "STU 3 Ballot (v3.0.0)\r\n* Incorporates ballot reconciliation from all comments from the September 2016 ballot which have been applied to FHIR 3.0 and US Core Release 1.0.1\r\n* Includes mapping to QDM Version 5.3 Annotated available at: https://ecqi.healthit.gov/qdm\r\n* ncludes an updated Mapping table from the QI-Core metadata to QDM 5.3\r\n* \r\n* Includes a direct mapping from QDM version 5.3 to QI Core",
                "path": "http://hl7.org/fhir/us/qicore/2018Jan",
                "status": "ballot",
                "fhirversion": "3.0.1",
                "sequence": "STU 3"
            },
            {
                "version": "2.0.0",
                "date": "2017-12-12",
                "descmd": "STU 2 (v2.0.0)\r\n* Updated to FHIR STU3 (3.0.1)\r\n* Changed from Universal Realm to US Realm\r\n* Derived from US Core profiles where possible\r\n* Added support for Claim and Coverage resources\r\n* Changed AdverseEvent profile to use the base resource\r\n* Numerous typographical and technical errors corrected",
                "path": "http://hl7.org/fhir/us/qicore/STU2",
                "status": "trial-use",
                "fhirversion": "3.0.1",
                "sequence": "STU 2"
            },
            {
                "version": "1.6.0",
                "date": "2016-08-11",
                "descmd": "STU 2 Ballot\r\n* Moved out of main FHIR publication package to its own home\r\n* Updated QI-Core profiles for changes to underlying specification\r\n* Added an additional profile on Condition\r\n* The QUICK logical model is included",
                "path": "http://hl7.org/fhir/us/qicore/2016Sep",
                "status": "ballot",
                "fhirversion": "1.6.0",
                "sequence": "STU 2"
            },
            {
                "version": "1.0.2",
                "date": "2015-10-24",
                "desc": "DSTU 1 (Permanent home)",
                "path": "http://hl7.org/fhir/DSTU2/qicore/qicore.html",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "1.0.2",
                "sequence-note": "Note: for this sequence, QI-Core was balloted as part of the FHIR specification, and these links are into the QI-Core page of the FHIR specification. Also note that this was DSTU 2 for the FHIR specification, but DSTU 1 for the QI-Core specification."
            },
            {
                "version": "1.0.0",
                "date": "2015-08-31",
                "desc": "DSTU 1 Preview",
                "path": "http://hl7.org/fhir/2015Sep/qicore/qicore.html",
                "status": "preview",
                "fhirversion": "1.0.0",
                "sequence": "STU 1"
            },
            {
                "version": "0.5.0",
                "date": "2015-04-02",
                "desc": "DSTU 1 Ballot (May 2015 Ballot)",
                "path": "http://hl7.org/fhir/2015May/qicore.html",
                "status": "ballot",
                "fhirversion": "0.5.0",
                "sequence": "STU 1"
            }
        ],
        "name": "QICore",
        "title": "QI-Core Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "6.0.0",
        "repo": "https://github.com/HL7/fhir-qi-core"
    },
    "hl7.fhir.us.ph-library": {
        "url": "http://hl7.org/fhir/us/ph-library",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-us-ph-library",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.1.1",
                "date": "",
                "sequence": "",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/ph-library/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-08-17",
                "current": true,
                "desc": "STU 1"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Ballot for STU Release 1",
                "path": "http://hl7.org/fhir/us/ph-library/2022Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2022-08-05"
            }
        ],
        "name": "USPublicHealthProfilesLibrary",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-us-ph-common-library-ig"
    },
    "hl7.fhir.us.vr-common-library": {
        "url": "http://hl7.org/fhir/us/vr-common-library",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/vr-common-library",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "sequence": "STU 1 on FHIR R4"
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/us/vr-common-library/2024Jan",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-16",
                "desc": "Update to STU 2"
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/us/vr-common-library/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-10-06",
                "current": true,
                "desc": "Update to STU 1 addressing connectathon feedback"
            },
            {
                "version": "1.0.0",
                "desc": "FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/vr-common-library/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1 on FHIR R4",
                "date": "2021-10-12"
            },
            {
                "version": "0.1.0",
                "desc": "Ballot for FHIR STU Release 1",
                "path": "http://hl7.org/fhir/us/vr-common-library/2021Jan",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "sequence": "STU 1 on FHIR R4",
                "date": "2020-12-16"
            }
        ],
        "name": "VitalRecordsCommonLibrary",
        "title": "Vital Records Common Library (VRCL) STU2-ballot",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-ballot",
        "repo": "https://github.com/HL7/vr-common-library"
    },
    "hl7.fhir.uv.xver": {
        "url": "http://hl7.org/fhir/extensions",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-extensions",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "5.1.0-snapshot1",
                "path": "http://hl7.org/fhir/extensions/5.1.0-snapshot1",
                "status": "trial-use",
                "sequence": "Release 5.1",
                "fhirversion": "5.0.0",
                "date": "2024-03-12",
                "desc": "Snapshot1 - Implementation Support prior to ballot completion",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "5.1.0-ballot",
                "path": "http://hl7.org/fhir/extensions/5.1.0-ballot",
                "status": "ballot",
                "sequence": "Release 5.1",
                "fhirversion": "5.0.0",
                "date": "2023-12-19",
                "desc": "Ballot for second release",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/extensions/1.0.0",
                "status": "trial-use",
                "sequence": "Release 1.0",
                "fhirversion": "5.0.0",
                "date": "2023-03-26",
                "current": true,
                "desc": "First release (With R5)"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.org/fhir/extensions/0.1.0",
                "status": "draft",
                "sequence": "Release 1.0",
                "fhirversion": "5.0.0",
                "date": "2023-03-04",
                "desc": "1st Draft - R5 QA"
            }
        ],
        "name": "FHIRXVersionMappingPack",
        "title": "FHIR Cross-Version Mapping Pack",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-cross-version"
    },
    "hl7.fhir.us.home-lab-report": {
        "url": "http://hl7.org/fhir/us/home-lab-report",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/home-lab-report",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "date": "",
                "sequence": "",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/home-lab-report/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-03-25",
                "current": true,
                "desc": "FHIR STU Release 1"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Ballot for STU Release 1",
                "path": "http://hl7.org/fhir/us/home-lab-report/2022Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2022-08-09"
            }
        ],
        "name": "AtHomeInVitroTestReport",
        "title": "At-Home In-Vitro Test Report",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/home-lab-report"
    },
    "hl7.fhir.uv.omop": {
        "url": "http://hl7.org/fhir/uv/omop",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-omop-ig",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "FHIROMOP",
        "title": "FHIR to OMOP FHIR IG",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-omop-ig"
    },
    "hl7.terminology": {
        "url": "http://terminology.hl7.org",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/UTG",
                "status": "ci-build",
                "current": true,
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ]
            },
            {
                "version": "5.5.0",
                "path": "http://terminology.hl7.org/5.5.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2024-03-09",
                "current": true,
                "desc": "Twelfth publication of the HL7 Terminology 20 UTG approved tickets applied.",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "5.4.0",
                "path": "http://terminology.hl7.org/5.4.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2023-11-17",
                "desc": "Eleventh publication of the HL7 Terminology 9 UTG approved tickets applied.",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "5.3.0",
                "path": "http://terminology.hl7.org/5.3.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2023-09-08",
                "desc": "Ninth publication of the HL7 Terminology 11 UTG approved tickets applied.",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "5.2.0",
                "path": "http://terminology.hl7.org/5.2.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2023-07-18",
                "desc": "Eighth publication of the HL7 Terminology 26 UTG approved tickets applied."
            },
            {
                "version": "5.1.0",
                "path": "http://terminology.hl7.org/5.1.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "date": "2023-02-25",
                "desc": "Seventh publication of the HL7 Terminology 7 UTG approved tickets applied."
            },
            {
                "version": "5.0.0",
                "desc": "sixth publication of the HL7 Terminology 14 UTG approved tickets applied.",
                "path": "http://terminology.hl7.org/5.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2022-11-04"
            },
            {
                "version": "4.0.0",
                "desc": "sixth publication of the HL7 Terminology 26 UTG approved tickets applied.",
                "path": "http://terminology.hl7.org/4.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2022-09-14"
            },
            {
                "version": "3.1.0",
                "desc": "Fifth publication of the HL7 Terminology 13 UTG approved tickets applied.",
                "path": "http://terminology.hl7.org/3.1.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2022-02-23"
            },
            {
                "version": "3.0.0",
                "desc": "Fourth publication of the HL7 Terminology 39 UTG approved tickets applied.",
                "path": "http://terminology.hl7.org/3.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2021-12-02"
            },
            {
                "version": "2.1.0",
                "desc": "Third publication of the HL7 Terminology 19 UTG approved tickets applied.",
                "path": "http://terminology.hl7.org/2.1.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2021-03-06"
            },
            {
                "version": "2.0.0",
                "desc": "Second publication of the HL7 Terminology with initial content issues addressed.",
                "path": "http://terminology.hl7.org/2.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ],
                "date": "2020-11-07"
            },
            {
                "version": "1.0.0",
                "date": "2020-05-08",
                "desc": "Initial publication of the HL7 Terminology.",
                "path": "http://terminology.hl7.org/1.0.0",
                "status": "release",
                "fhirversion": "4.0.1",
                "sequence": "Publications",
                "sub-packages": [
                    "hl7.terminology.r3",
                    "hl7.terminology.r4",
                    "hl7.terminology.r5"
                ]
            }
        ],
        "name": "HL7Terminology",
        "title": "HL7 Terminology (THO)",
        "fhirversion_latest": "4.0.1",
        "current_version": "5.4.18",
        "repo": "https://github.com/HL7/UTG"
    },
    "hl7.fhir.us.hsds": {
        "url": "http://hl7.org/fhir/us/hsds",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/FHIR-IG-Human-Services-Directory",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/hsds/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-10-04",
                "current": true,
                "desc": "FHIR IG Human Services Directory, STU 1. January 2023 Ballot reconciliation comments have been resolved"
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-08",
                "path": "http://hl7.org/fhir/us/hsds/2023Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "desc": "FHIR STU Release 1"
            }
        ],
        "name": "FHIRHumanServicesDirectory",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/FHIR-IG-Human-Services-Directory"
    },
    "hl7.fhir.us.pacio-fs": {
        "url": "http://hl7.org/fhir/us/pacio-fs",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-pacio-functional-status",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 release",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/pacio-fs/STU1",
                "date": "2021-11-03",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-10-19",
                "desc": "Initial STU ballot (01 2021 Ballot)",
                "path": "http://hl7.org/fhir/us/pacio-fs/2021Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "PACIOFunctionalStatusImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-pacio-functional-status"
    },
    "hl7.fhir.uv.ehrs-rle": {
        "url": "http://hl7.org/fhir/uv/ehrs-rle",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/ehrs-rle-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/uv/ehrs-rle/Informative1",
                "status": "informative",
                "sequence": "Informative Release 1",
                "fhirversion": "5.0.0",
                "date": "2024-01-02",
                "current": true,
                "desc": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide",
                "descmd": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide"
            },
            {
                "version": "1.1.0-ballot",
                "path": "http://hl7.org/fhir/uv/ehrs-rle/2023May",
                "status": "ballot",
                "sequence": "Informative Release 1",
                "fhirversion": "5.0.0",
                "date": "2023-03-29",
                "desc": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide",
                "descmd": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide"
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-07",
                "path": "http://hl7.org/fhir/uv/ehrs-rle/2023Jan",
                "status": "ballot",
                "sequence": "Informative Release 1",
                "fhirversion": "4.0.1",
                "desc": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide",
                "descmd": "EHRS Functional Model - Record Lifecycle Events - FHIR Implementation Guide"
            }
        ],
        "name": "EHRSFunctionalModelRecordLifecycleEventsIG",
        "title": "EHR and PHR System Functional Models - Record Lifecycle Events Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/ehrs-rle-ig"
    },
    "hl7.fhir.uv.dap": {
        "url": "http://hl7.org/fhir/uv/dap",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/data-access-policies",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "DataAccessPolicies",
        "title": "HL7 FHIR Implementation Guide: Data Access Policies",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0-current",
        "repo": "https://github.com/HL7/data-access-policies"
    },
    "hl7.fhir.us.cqfmeasures": {
        "url": "http://hl7.org/fhir/us/cqfmeasures",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for FHIR STU3 (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/cqf-measures",
                "status": "ci-build",
                "current": true,
                "fhirversion": "3.0.2"
            },
            {
                "version": "5.0.0-ballot",
                "path": "http://hl7.org/fhir/us/cqfmeasures/2024Jan",
                "status": "ballot",
                "sequence": "STU5 (v5.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-12-15",
                "desc": "Release 5.0.0-ballot STU5 Ballot",
                "descmd": "This STU v5.0.0-ballot incorporates changes from implementation and connectathon experience. See the home page of the ballot IG for a detailed change log."
            },
            {
                "version": "4.0.0",
                "path": "http://hl7.org/fhir/us/cqfmeasures/STU4",
                "status": "trial-use",
                "sequence": "STU4 (v4.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-08-28",
                "current": true,
                "desc": "STU4 (v4.0.0) Publication",
                "descmd": "This STU4 publication incorporates changes from implementation and connectathon experience. See the home page of the ballot IG for a detailed change log."
            },
            {
                "version": "4.0.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/us/cqfmeasures/2023Jan",
                "status": "ballot",
                "sequence": "STU 4",
                "fhirversion": "4.0.1",
                "desc": "Release 4.0.0-ballot STU4 Ballot",
                "descmd": "This ballot incorporates changes from implementation and connectathon experience. See the home page of the ballot IG for a detailed change log."
            },
            {
                "version": "3.0.0",
                "descmd": "This release includes changes due to ballot reconciliation and connectathon testing. For a complete list of changes, see the [Changes](STU3/changes.html) page in the implementation guide.",
                "desc": "STU3 Release for FHIR R4",
                "path": "http://hl7.org/fhir/us/cqfmeasures/STU3",
                "status": "trial-use",
                "sequence": "STU3",
                "fhirversion": "4.0.1",
                "date": "2022-04-28"
            },
            {
                "version": "2.1.0",
                "descmd": "1. **Applied**:conformance requirement 1 does not mention composite measures. Should it? ([FHIR-21107](https://jira.hl7.org/browse/FHIR-21107))\r\n1. **Applied**:Need to clarify how measure evaluation parameters are specified in a test case ([FHIR-27795](https://jira.hl7.org/browse/FHIR-27795))\r\n1. **Applied**:Permit stratifier expression to have any type (Conformance requirement 15) ([FHIR-27878](https://jira.hl7.org/browse/FHIR-27878))\r\n1. **Applied**:Glossary population criteria entries are inconsistent with population code system ([FHIR-28206](https://jira.hl7.org/browse/FHIR-28206))\r\n1. **Applied**:Example measure 146 is incorrectly described as `patient-based` ([FHIR-28210](https://jira.hl7.org/browse/FHIR-28210))\r\n1. **Applied**:CQFM Library has incorrect cardinality for profile constraint ([FHIR-28238](https://jira.hl7.org/browse/FHIR-28238))\r\n1. **Applied**:CQFMMeasure profile has incorrect cardinality for profile constraint ([FHIR-28239](https://jira.hl7.org/browse/FHIR-28239))\r\n1. **Applied**:Possible issue with related artifact example ([FHIR-28288](https://jira.hl7.org/browse/FHIR-28288))\r\n1. **Applied**:PopulationBasis definition ([FHIR-28290](https://jira.hl7.org/browse/FHIR-28290))\r\n1. **Applied**:Measure Type valueset needs a concept map to the V3 codes ([FHIR-28300](https://jira.hl7.org/browse/FHIR-28300))\r\n1. **Applied**:Measure scoring value set needs a concept map from V3 ([FHIR-28301](https://jira.hl7.org/browse/FHIR-28301))\r\n1. **Applied**:Composite Measure Scoring needs a mapping to V3 concepts ([FHIR-28302](https://jira.hl7.org/browse/FHIR-28302))\r\n1. **Applied**:Aggregate method needs a mapping to HL7 V3 concepts ([FHIR-28303](https://jira.hl7.org/browse/FHIR-28303))\r\n1. **Applied**:Ratio measure profile ([FHIR-28338](https://jira.hl7.org/browse/FHIR-28338))\r\n1. **Applied**:Cardinality of Measure.meta.profile ([FHIR-29649](https://jira.hl7.org/browse/FHIR-29649))\r\n1. **Applied**:Issues with Packaging and Bundle profiles ([FHIR-30079](https://jira.hl7.org/browse/FHIR-30079))\r\n1. **Applied**:Define a computable measure profile ([FHIR-30394](https://jira.hl7.org/browse/FHIR-30394))\r\n1. **Applied**:Add identifier slices for shortname, publisher, and endorser ([FHIR-30395](https://jira.hl7.org/browse/FHIR-30395))\r\n1. **Applied**:Add attribution model identifier to quality program ([FHIR-30401](https://jira.hl7.org/browse/FHIR-30401))\r\n1. **Applied**:Support specification of scoringUnit ([FHIR-30506](https://jira.hl7.org/browse/FHIR-30506))\r\n1. **Applied**:Conformance requirements for CQL Library resource usage ([FHIR-30569](https://jira.hl7.org/browse/FHIR-30569))\r\n1. **Resolved - No Change Required**:Support authoring concerns for inactive value set codes ([FHIR-30573](https://jira.hl7.org/browse/FHIR-30573))\r\n1. **Resolved - Change Required**:Move the `composite` code from Measure Type to Measure Scoring ([FHIR-30763](https://jira.hl7.org/browse/FHIR-30763))\r\n1. **Resolved - Change Required**:Allow the specification of `intended data source` ([FHIR-30764](https://jira.hl7.org/browse/FHIR-30764))\r\n1. **Applied**:Add a profile for FHIR Model Info Library ([FHIR-30770](https://jira.hl7.org/browse/FHIR-30770))\r\n1. **Applied**:Add composite measure support and profiles ([FHIR-30873](https://jira.hl7.org/browse/FHIR-30873))\r\n1. **Applied**:Support measure terminology service ([FHIR-30874](https://jira.hl7.org/browse/FHIR-30874))\r\n1. **Applied**:Create measure repository service ([FHIR-30875](https://jira.hl7.org/browse/FHIR-30875))\r\n1. **Applied**:Support specifying quality domain and meaningful measure area in quality programs ([FHIR-31409](https://jira.hl7.org/browse/FHIR-31409))\r\n1. **Applied**:Modify diagram text to `Population Relationships` Figures 3.2, 3.3, 3.4, 3.5 ([FHIR-31592](https://jira.hl7.org/browse/FHIR-31592))\r\n1. **Applied**:All-or-nothing scoring should use implies ([FHIR-31624](https://jira.hl7.org/browse/FHIR-31624))",
                "desc": "STU3 Ballot for FHIR R4",
                "path": "http://hl7.org/fhir/us/cqfmeasures/2021May",
                "status": "ballot",
                "sequence": "STU3",
                "fhirversion": "4.0.1",
                "date": "2021-04-13"
            },
            {
                "version": "2.0.0",
                "date": "2020-07-23",
                "descmd": "#### Non-compatible\r\n\r\n* [FHIR-26534](https://jira.hl7.org/browse/FHIR-26534) - Use of `text/cql.identifier` media type for CQL expression references\r\n* [FHIR-21994](https://jira.hl7.org/browse/FHIR-21994) - Use of namespaces with CQL libraries\r\n* [FHIR-25285](https://jira.hl7.org/browse/FHIR-25285) - Changed definition term extension to preserve association of term and definition\r\n* [FHIR-21998](https://jira.hl7.org/browse/FHIR-21998) - Disallowed stratification of ratio measures\r\n* [FHIR-21996](https://jira.hl7.org/browse/FHIR-21996) - Required use of `called` clause for included libraries\r\n\r\n#### Compatible, Substantive\r\n* Corrections to proportion, ratio, and continuous-variable measure profiles\r\n* Added profile layering for shareable, computable, publishable, and executable capabilities\r\n* Added profiles and guidance for packaging, distribution, and testing\r\n* Clarified risk adjustment conformance requirements\r\n* Added support for identifying packaging, testing, and authoring tooling\r\n* Library and measure resources require narrative and profile declarations\r\n* Added publicationStatus and publicationDate extensions for relatedArtifact\r\n* Clarified calculation flow diagrams for all measure types\r\n* Clarified relationship of FHIR terminology to V3 measure terminology\r\n* Added support for defining and referencing measure programs\r\n\r\n#### Non-substantive\r\n* Numerous clarifications and corrections throughout",
                "desc": "STU 2 Release for FHIR R4 Version",
                "path": "http://hl7.org/fhir/us/cqfmeasures/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.1.0",
                "date": "2019-12-22",
                "descmd": "STU 2 1.1 (v1.1.0)\r\nThis ballot is a minimal update to the STU1 ballot to address the following items:\r\n* Updated to use FHIR R4\r\n* Added artifact packaging guidance and conformance requirements",
                "desc": "STU 2 Ballot for FHIR R4 Version",
                "path": "http://hl7.org/fhir/us/cqfmeasures/2020Feb",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1"
            },
            {
                "version": "1.0.0",
                "date": "2019-10-30",
                "descmd": "STU 1 1.0 (v1.0.0)\r\n* Clarifications and fixes throughout\r\n\r\n## Compatible, substantive\r\n* 21181 1..1 relationships\r\n* 21684 Risk adjustment naming conventions? - QM #15\r\n* 21156 Clarify where the risk adjustment variables are stored in the fhir document.\r\n* 21155 Inconsistent conformance requirements (16 and 17).\r\n* 21986 Denominator exceptions in differential table? - QM #136\r\n* 21988 Supporting measurement period without specifying year? - QM #137\r\n* 21145 conformance requirement 13 states that a continuous variable measure SHALL have a criteriaReference extension but the profile has this extension as 0..1 rather than 1..1. Should the profile have 1..1?\r\n* 21187 consider for all slices that aren`t `measure observation` to make cqfm-criteriaReference and cqfm-aggregateMethod 0..0\r\n* 21183 initial population slice for proportion measure is 1..2. Should be 1..1. (1..2 is for ratio measure).\r\n* 21192 EXM55 library references\r\n* 21178 Does it make sense for the profile itself to specify usage for criteriaReference and aggregateMethod (measure observations)\r\n* 21191 consider slicing content and including the required contentType (text/cql) and optional ones (application/elm+xml, application/elm+json)\r\n* 21984 Require use of specific model? - QM #135\r\n* 21158 Should this be a conformance requirement?\r\n* 21188 consider making cqfm-criteriaReference and cqfm-aggregateMethod 1..1 for `measure observation` slice.\r\n* 21186 measure population exclusion slice should be 0..1. population.code for this slice should still be required (1..1)\r\n* 21182 should population.identifier, supplementalData.identifier and stratification.identifier be required?\r\n* 21185 missing denominator exception slice\r\n* 21173 This statement uses SHOULD NOT language but the conformance requirement is SHALL NOT. Recommend rewording for clarity.\r\n* 21146 should conformance requirement 13 require an aggregateMethod extension on the measure observation criteria? It\r\n currently does not.\r\n\r\n## Non-compatible\r\n* 21998 Restrict stratification of ratio measure - QM #142\r\n* 21994 Library namespace guidance - QM #140\r\n* 21056 Disallow the use of strings for membership testing in value sets and code systems\r\n* 21996 Library alias guidance - QM #141",
                "desc": "STU 1 Release for FHIR STU3",
                "path": "http://hl7.org/fhir/us/cqfmeasures/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "3.0.2"
            },
            {
                "version": "0.1.0",
                "date": "2019-05-01",
                "desc": "STU 1 Ballot for FHIR STU3 Version",
                "path": "http://hl7.org/fhir/us/cqfmeasures/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            }
        ],
        "name": "CQFMeasures",
        "title": "Quality Measure Implementation Guide (STU5)",
        "fhirversion_latest": "4.0.1",
        "current_version": "5.0.0-ballot2",
        "repo": "https://github.com/HL7/cqf-measures"
    },
    "hl7.fhir.uv.vhdir": {
        "url": "http://hl7.org/fhir/uv/vhdir",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/VhDir",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.2.0",
                "date": "2018-09-01",
                "desc": "Ballot 2",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/uv/vhdir/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.5.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-01-01",
                "desc": "First ballot (Draft for Comment)",
                "path": "http://hl7.org/fhir/uv/vhdir/2018Jan",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "3.2.0"
            }
        ],
        "name": "ValidatedHealthcareDirectory",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/HL7/VhDir"
    },
    "hl7.fhir.us.davinci-pct": {
        "url": "http://hl7.org/fhir/us/davinci-pct",
        "versions": [
            {
                "version": "current",
                "desc": "Patient Cost Transparency Implementation Guide CI Build",
                "path": "http://build.fhir.org/ig/HL7/davinci-pct",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/us/davinci-pct/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2024-01-03",
                "current": true,
                "desc": "Da Vinci Patient Cost Transparency Implementation Guide Release 1, 1.1.0 - US Realm STU"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/davinci-pct/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-03-30",
                "desc": "Da Vinci Patient Cost Transparency Implementation Guide Release 1 - US Realm STU"
            },
            {
                "version": "0.1.0",
                "desc": "Patient Cost Transparency Implementation Guide Release 1 - US Realm",
                "path": "http://hl7.org/fhir/us/davinci-pct/2022Jan",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-04"
            }
        ],
        "name": "PatientCostTransparency",
        "title": "Patient Cost Transparency Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/davinci-pct"
    },
    "hl7.fhir.us.davinci-pcde": {
        "url": "http://hl7.org/fhir/us/davinci-pcde",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-pcde",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "First STU release",
                "path": "http://hl7.org/fhir/us/davinci-pcde/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-23",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2019-08-09",
                "descmd": "First public ballot",
                "path": "http://hl7.org/fhir/us/davinci-pcde/2019Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "PayerCoverageDecisionExchange",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/davinci-pcde"
    },
    "hl7.fhir.us.icsr-ae-reporting": {
        "url": "http://hl7.org/fhir/us/icsr-ae-reporting",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/icsr-ae-reporting",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.1",
                "desc": "This is a technical correction to the first release in the STU 1 sequence.",
                "path": "http://hl7.org/fhir/us/icsr-ae-reporting/STU1",
                "status": "update",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-08-29",
                "current": true,
                "corrections": [
                    {
                        "version": "1.0.0",
                        "path": "hl7.fhir.us.icsr-ae-reporting#1.0.0.zip",
                        "date": "2023-08-29"
                    }
                ]
            },
            {
                "version": "0.1.0",
                "desc": "First public ballot",
                "path": "http://hl7.org/fhir/us/icsr-ae-reporting/2021Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-08-05"
            }
        ],
        "name": "TransfusionVaccinationAdverseEventDetectionReporting",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/HL7/fhir-icsr-ae-reporting"
    },
    "hl7.xprod.uv.gender-harmony": {
        "url": "http://hl7.org/xprod/ig/uv/gender-harmony",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/fhir-gender-harmony",
                "fhirversion": "5.0.0",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/xprod/ig/uv/gender-harmony/informative1",
                "status": "informative",
                "sequence": "Informative Edition 1",
                "fhirversion": "5.0.0",
                "date": "2023-09-29",
                "current": true,
                "desc": "A cross-paradigm implementation guide that provides definitive guidance on how to exchange clinical sex and gender affirming information using HL7 models. This specification is built upon, but has some changes in comparison to, the initial `Gender Harmony - Modeling Sex and Gender Representation, Release 1` logical model. This guide provides an updated general model to clearly separate gender from summary sex-related clinical observations, as well as provides additional useful gender-related elements. The application of the gender harmony general model is discussed for each specific product family: V2 (as V2.9.1), CDA (the templates are published as a separate specification), and in FHIR, initially in the R5 version. All terminology is published by HL7 at terminology.hl7.org, often referred to as \u201cTHO\u201d. Examples and overall background are also provided.",
                "changes": "changelog.html"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/xprod/ig/uv/gender-harmony/2022Sep",
                "sequence": "Informative Edition 1",
                "fhirversion": "5.0.0-ballot",
                "status": "ballot",
                "date": "2022-09-14"
            }
        ],
        "name": "hl7genderharmony",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-gender-harmony"
    },
    "hl7.fhir.uv.pharm-quality": {
        "url": "http://hl7.org/fhir/uv/pharm-quality",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/uv-dx-pq",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/pharm-quality/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "5.0.0",
                "date": "2023-12-18",
                "desc": "The January 2024 Ballot Version is the first ballot of this implementation guide."
            }
        ],
        "name": "PharmaceuticalQualityIndustry",
        "title": "Pharmaceutical Quality (Industry)",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/uv-dx-pq"
    },
    "hl7.fhir.us.directory-exchange": {
        "url": "http://hl7.org/fhir/us/directory-exchange",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-directory-exchange",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "desc": "National Directory",
                "path": "http://hl7.org/fhir/us/directory-exchange/2022Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-08-09"
            }
        ],
        "name": "NationalHealthcareDirectoryExchange",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-directory-exchange"
    },
    "hl7.fhir.us.davinci-cdex": {
        "url": "http://hl7.org/fhir/us/davinci-cdex",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for Da Vinci CDex (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-ecdx",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "path": "http://hl7.org/fhir/us/davinci-cdex/STU2",
                "status": "trial-use",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-03-22",
                "current": true,
                "desc": "This STU2 version of Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the third published version of this guide and is the result of the 2022 Sept HL7 balloting process. The resulting resolution of the community comments and edits to the guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care and Payer/Provider Information Exchange Work Groups.  Details of the changes in this version can be seen at http:/hl7.org/fhir/us/davinci-cdex/STU2/changes.html"
            },
            {
                "version": "2.0.0-ballot",
                "desc": "2022 September Ballot Version: This ballot is restricted to the Draft content in the STU 1.1.0 version of CDex. The draft content includes 1) requesting and sending attachments and 2) communicating the purpose of use in Task Based Queries. Details of the changes in this version can be seen at http://hl7.org/fhir/us/davinci-cdex/2022Sept/changes.html",
                "sequence": "STU2",
                "path": "http://hl7.org/fhir/us/davinci-cdex/2022Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "date": "2022-08-08"
            },
            {
                "version": "1.1.0",
                "desc": "This STU1.1.0 version of Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the second published version of this guide and is the result of the 2022 May HL7 balloting process. The resulting resolution of the community comments and edits to the guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care and Payer/Provider Information Exchange Work Groups.  Details of the changes in this version can be seen at http:/hl7.org/fhir/us/davinci-cdex/STU1.1.0/changes.html",
                "sequence": "STU1.1",
                "path": "http://hl7.org/fhir/us/davinci-cdex/STU1.1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "date": "2022-08-08"
            },
            {
                "version": "1.0.0",
                "descmd": "This STU1 version of Da Vinci Clinical Data Exchange (CDex) Implementation Guide is the first published version of this guide and is the result of the June 2019 and January 2021 HL7 balloting process. The resulting resolution of the community comments and edits to the guide has been agreed to and voted on by the members of the sponsoring HL7 International Patient Care Work Group.\n\nJanuary 2021 Ballot comments and links to the updated content are below::\n\n**Status: Summary (Jira Issue) Link to Change**\n\n1. **Applied**: CDex documents require signature, but don`t explain how used ([FHIR-26855](https://jira.hl7.org/browse/FHIR-26855)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1direct_query#signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approache#signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1attachments#signatures.html)\n1. **Applied**: Add reference to C-CDA on FHIR ([FHIR-28158](https://jira.hl7.org/browse/FHIR-28158)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Provide another example of a use case not covered by another Da Vinci IG ([FHIR-30146](https://jira.hl7.org/browse/FHIR-30146)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html##where-does-cdex-fit-in-the-da-vinci-project)\n1. **Applied**: Fix link and expectations to CapabilityStatements ([FHIR-30147](https://jira.hl7.org/browse/FHIR-30147)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1CapabilityStatement-data-source-server.html#resource-details)\n1. **Applied**: Failed task or task without result? ([FHIR-30148](https://jira.hl7.org/browse/FHIR-30148)) See Changes:\n   -  [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n   -  [Here](http://hl7.org/fhir/us/davinci-cdex/STU1CapabilityStatement-data-source-server.html#task)\n1. **Applied**: add item to list of benefits ([FHIR-30440](https://jira.hl7.org/browse/FHIR-30440)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Update section on What Payers Do with Clinical Information ([FHIR-30442](https://jira.hl7.org/browse/FHIR-30442)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1ackground.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Update text in sequence diagrams ([FHIR-30445](https://jira.hl7.org/browse/FHIR-30445)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#steps)\n1. **Applied**: Update Scenarios to include to support claim submission - Attachments. ([FHIR-30446](https://jira.hl7.org/browse/FHIR-30446)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#example-scenarios)\n1. **Applied**: Update definition of clinical data and added guidance on data provenance([FHIR-30489](https://jira.hl7.org/browse/FHIR-30489)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1direct-query.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html#provenance)\n1. **Applied**: Referennce clinical safety section in HREX ([FHIR-30490](https://jira.hl7.org/browse/FHIR-30490)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html#da-vinci-hrex-security-and-privacy-requirements)\n1. **Applied**: Delete use of word `complete` ([FHIR-30494](https://jira.hl7.org/browse/FHIR-30494)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Explicitly reference the Da Vinci Guiding Principles in new Privacy and Security section. ([FHIR-30498](https://jira.hl7.org/browse/FHIR-30498)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html)\n1. **Applied**: Update Figure 1 ([FHIR-30500](https://jira.hl7.org/browse/FHIR-30500)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#where-does-cdex-fit-in-the-da-vinci-project)\n1. **Applied**: Typo. ([FHIR-30812](https://jira.hl7.org/browse/FHIR-30812)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Remove word complete. ([FHIR-30813](https://jira.hl7.org/browse/FHIR-30813)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#example-scenarios)\n1. **Applied**: Corrects and clarifies direct provider to provider scenario. ([FHIR-30814](https://jira.hl7.org/browse/FHIR-30814)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#example-scenarios)\n1. **Applied**: Updates to Provider to Provider use case([FHIR-30815](https://jira.hl7.org/browse/FHIR-30815)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#provider-to-provider-data-exchange)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1exchanging-clinical-data.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#provider-to-provider)\n1. **Applied**: Please clarify whether any human involvement is required, and an example, as well as define the term fulfillment as it relates to attestation. ([FHIR-30816](https://jira.hl7.org/browse/FHIR-30816)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1direct_query#signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approache#signatures.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1attachments#signatures.html)\n1. **Applied**: Rephrase. ([FHIR-30817](https://jira.hl7.org/browse/FHIR-30817)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1direct-query.html)\n1. **Applied**: Clarify how subscripition mitigates risks ([FHIR-30819](https://jira.hl7.org/browse/FHIR-30819)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Add section on termination of access to request([FHIR-30820](https://jira.hl7.org/browse/FHIR-30820)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification#how-long-is-the-data-available)\n1. **Applied**: Update how a client`s set of requests is terminated([FHIR-30821](https://jira.hl7.org/browse/FHIR-30821)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification#fetching-the-data)\n1. **Applied**: Formalize the current scenarios ([FHIR-30826](https://jira.hl7.org/browse/FHIR-30826)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html)\n1. **Applied**: replace /Patient/$everything with /Group/$export in the bulk example ([FHIR-30827](https://jira.hl7.org/browse/FHIR-30827)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1exchanging-clinical-data.html)\n1. **Applied**: Remove empty pages ([FHIR-30828](https://jira.hl7.org/browse/FHIR-30828))\n1. **Applied**: Clarified formal authorization use case ([FHIR-30829](https://jira.hl7.org/browse/FHIR-30829)) See Changes:\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n   - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Data Consumer Server SHOULD support Claim. ([FHIR-30830](https://jira.hl7.org/browse/FHIR-30830)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1CapabilityStatement-data-source-server.html#claim)\n1. **Applied**: Modify CapabilityStatement Rest summary table ([FHIR-30831](https://jira.hl7.org/browse/FHIR-30831)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1CapabilityStatement-data-consumer-server.html#resource--details)\n1. **Applied**: Add hyperlinks. ([FHIR-30834](https://jira.hl7.org/browse/FHIR-30834)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specifications)\n1. **Applied**: Add benefit of transition towards direct queries to Task benefits. ([FHIR-30835](https://jira.hl7.org/browse/FHIR-30835)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification#task-based-approach)\n1. **Appied**: Update section on Authoization requirements ([FHIR-30836](https://jira.hl7.org/browse/FHIR-30836)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification#formal-authorization)\n1. **Applied**: Typo ([FHIR-30840](https://jira.hl7.org/browse/FHIR-30840)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Typo ([FHIR-30841](https://jira.hl7.org/browse/FHIR-30841)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Typo ([FHIR-30842](https://jira.hl7.org/browse/FHIR-30842)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Updated anticipated benefits of standard ([FHIR-30843](https://jira.hl7.org/browse/FHIR-30843)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#home)\n1. **Applied**: Typo ([FHIR-30844](https://jira.hl7.org/browse/FHIR-30844)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Correct Grammar ([FHIR-30845](https://jira.hl7.org/browse/FHIR-30845)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Correct Grammar ([FHIR-30846](https://jira.hl7.org/browse/FHIR-30846)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Remove unsubstantiated claims. ([FHIR-30847](https://jira.hl7.org/browse/FHIR-30847)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Remove HEDIS score claim. ([FHIR-30849](https://jira.hl7.org/browse/FHIR-30849)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#what-do-payers-do-with-clinical-information)\n1. **Applied**: Relocate paragraph. ([FHIR-30850](https://jira.hl7.org/browse/FHIR-30850)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#actors-and-roles)\n1. **Applied**: Remove paragraph and refer to HREX security page. ([FHIR-30851](https://jira.hl7.org/browse/FHIR-30851)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.md)\n1. **Applied**: Typo ([FHIR-30852](https://jira.hl7.org/browse/FHIR-30852)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#where-does-cdex-fit-in-the-da-vinci-project)\n1. **Applied**: Reword statement. ([FHIR-30853](https://jira.hl7.org/browse/FHIR-30853)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#where-does-cdex-fit-in-the-da-vinci-project)\n1. **Applied**: Typo ([FHIR-30854](https://jira.hl7.org/browse/FHIR-30854)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#example-scenarios)\n1. **Applied**: Typo ([FHIR-30855](https://jira.hl7.org/browse/FHIR-30855)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#example-scenarios)\n1. **Applied**: Typo ([FHIR-30856](https://jira.hl7.org/browse/FHIR-30856)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#steps)\n1. **Applied**: Typo ([FHIR-30857](https://jira.hl7.org/browse/FHIR-30857)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#steps)\n1. **Applied**: Updated STU-note on when authorization needed? ([FHIR-30863](https://jira.hl7.org/browse/FHIR-30863)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification#formal-authorization)\n1. **Applied**: Remove `?` or correct the section name if it is in question ([FHIR-30864](https://jira.hl7.org/browse/FHIR-30864)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Typo ([FHIR-30865](https://jira.hl7.org/browse/FHIR-30865)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Updated Purpose of Use section for Direct Query. ([FHIR-30867](https://jira.hl7.org/browse/FHIR-30867)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1direct-query.html)\n1. **Applied**: Updated Sensitivity and Confidentiality protection guidance. ([FHIR-30868](https://jira.hl7.org/browse/FHIR-30868)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html#sensitive-and-confidential-data)\n1. **Applied**: Updated Sensitivity and Confidentiality protection guidance. ([FHIR-30869](https://jira.hl7.org/browse/FHIR-30869)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html#sensitive-and-confidential-data)\n1. **Applied**: clarify when attribution is not present or non-repudiable ([FHIR-30870](https://jira.hl7.org/browse/FHIR-30870)) various changes\n1. **Applied**: Fix sequential numbering of figures  ([FHIR-30935](https://jira.hl7.org/browse/FHIR-30935)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1specification.html)\n1. **Applied**: correct last example bullet ([FHIR-31050](https://jira.hl7.org/browse/FHIR-31050)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1davinci-ecdx/background.html#example-scenarios)\n1. **Applied**: Remove reference to HREX CommunicationRequest plus Task transaction ([FHIR-31516](https://jira.hl7.org/browse/FHIR-31516)) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Clarify human involvement in Task transaction ([FHIR-31886](https://jira.hl7.org/browse/FHIR-31886) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Create privacy and security page ([FHIR-31885](https://jira.hl7.org/browse/FHIR-31885) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html)\n1. **Applied**: Clarify when HIEs are data sources ([FHIR-31884](https://jira.hl7.org/browse/FHIR-31884))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#actors-and-roles)\n1. **Applied**: Add supplemental security guidance on audit ([FHIR-31888](https://jira.hl7.org/browse/FHIR-31888))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html#general-considerations)\n1. **Applied**: Add supplemental security guidance on scopes([FHIR-31887](https://jira.hl7.org/browse/FHIR-31887))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1security.html#general-considerations)\n1. **Applied**: Clarify human involvement needed([FHIR-31886](https://jira.hl7.org/browse/FHIR-31886))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Provide guidance on finding organization and provider identifiers([FHIR-32841](https://jira.hl7.org/browse/FHIR-32841))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Update how to represent Purpose of Use and reason in Task Based Query ([FHIR-31996](https://jira.hl7.org/browse/FHIR-31996))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html)\n1. **Applied**: Clarify the relationship between this guide and others([FHIR-32116](https://jira.hl7.org/browse/FHIR-32116))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#where-does-cdex-fit-in-the-da-vinci-project)\n1. **Applied**: Added guidance on matching patients([FHIR-32840](https://jira.hl7.org/browse/FHIR-32840))[See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html#discovery-of-fhir-ids)\n1. **Applied**: Update to the USCDI link ([FHIR-33265](https://jira.hl7.org/browse/FHIR-33265)\n1. **Applied**: Add guidance how to provide some work queue tags([FHIR-31890](https://jira.hl7.org/browse/FHIR-31890) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1task-based-approach.html#work-queues)\n1. **Applied**: Add push mechanism to support Attachments for Claims and Prior Auth([FHIR-33129](https://jira.hl7.org/browse/FHIR-33129) See Changes:\n  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1background.html#attachments-workflow)\n  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1attachments.html)\n  - [Here](http://hl7.org/fhir/us/davinci-cdex/STU1OperationDefinition-submit-attachment.html)\n1. **Applied**: Add figure to clarify relationship between cdex and hrex([FHIR-34559](https://jira.hl7.org/browse/FHIR-34559) [See Change Here](http://hl7.org/fhir/us/davinci-cdex/STU1index.html#about-this-guide)",
                "sequence": "STU1",
                "path": "http://hl7.org/fhir/us/davinci-cdex/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "date": "2022-03-28"
            },
            {
                "version": "0.2.0",
                "desc": "Jan 2021 Ballot for Da Vinci CDex: Based on balloter feedback, this IG has been completely re-written. The refactoring has been sufficiently large that it is not practical/useful to enumerate a list of changes.",
                "sequence": "STU1",
                "path": "http://hl7.org/fhir/us/davinci-cdex/2021Jan",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "date": "2020-12-16"
            },
            {
                "version": "0.1.0",
                "desc": "June 2019 Ballot for Da Vinci CDex",
                "date": "2019-06-20",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/davinci-cdex/2019Jun",
                "status": "ballot",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "DaVinciCDex",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0-preview",
        "repo": "https://github.com/HL7/davinci-ecdx"
    },
    "hl7.fhir.us.cdmh": {
        "url": "http://hl7.org/fhir/us/cdmh",
        "versions": [
            {
                "version": "current",
                "date": "2018-04-02",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/cdmh",
                "status": "ci-build",
                "current": true,
                "sequence": "Release 4"
            },
            {
                "version": "1.0.0",
                "desc": "STU1 Release",
                "path": "http://hl7.org/fhir/us/cdmh/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-06",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2018-04-02",
                "desc": "Release 4 STU Ballot",
                "path": "http://hl7.org/fhir/us/cdmh/2019May",
                "status": "ballot",
                "sequence": "Release 4",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "CommonDataModelsHarmonization",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/cdmh"
    },
    "hl7.fhir.us.codex-radiation-therapy": {
        "url": "http://hl7.org/fhir/us/codex-radiation-therapy",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/codex-radiation-therapy",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/codex-radiation-therapy/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-28",
                "current": true,
                "desc": "Initial publication of Codex Radiation Therapy STU1",
                "changes": "change_log.html"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "STU1 First Ballot",
                "path": "http://hl7.org/fhir/us/codex-radiation-therapy/2022Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2022-08-08"
            }
        ],
        "name": "CodeXRadiationTherapy",
        "title": "CodeX Radiation Therapy",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0-cibuild",
        "repo": "https://github.com/HL7/codex-radiation-therapy"
    },
    "hl7.fhir.us.health-care-surveys-reporting": {
        "url": "http://hl7.org/fhir/us/health-care-surveys-reporting",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-health-care-surveys-reporting",
                "status": "ci-build",
                "current": "true",
                "sequence": "STU 1",
                "fhirversion": "4.1.0"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/health-care-surveys-reporting/STU1",
                "status": "trial-use",
                "sequence": "STU1 Release 1",
                "fhirversion": "4.0.1",
                "date": "2023-08-22",
                "current": true,
                "desc": "This release is the first release of the Health Care Surveys Reporting Content IG to deliver Health Care Survey data to NCHS.",
                "changes": "changes.html"
            },
            {
                "version": "0.1.0",
                "desc": "STU 1 Ballot (Jan 2022 Ballot)",
                "path": "http://hl7.org/fhir/us/health-care-surveys-reporting/2022Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-12-09"
            }
        ],
        "name": "HealthcareSurveysReporting",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.1",
        "repo": "https://github.com/HL7/fhir-health-care-surveys-reporting-ig"
    },
    "hl7.fhir.uv.smart-web-messaging": {
        "url": "http://hl7.org/fhir/uv/smart-web-messaging",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/smart-web-messaging",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 Release.  For a list of changes applied to this version see the SMART Web Messaging STU1 trackers at https://jira.hl7.org/issues/?filter=16804# (log in required)",
                "path": "http://hl7.org/fhir/uv/smart-web-messaging/STU1",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "date": "2022-05-06",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-08-11",
                "desc": "STU 1 Ballot",
                "path": "http://hl7.org/fhir/uv/smart-web-messaging/2020Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SmartWebMessaging",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/smart-web-messaging"
    },
    "hl7.fhir.uv.extensions": {
        "url": "http://hl7.org/fhir/extensions",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-extensions",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "5.1.0-snapshot1",
                "path": "http://hl7.org/fhir/extensions/5.1.0-snapshot1",
                "status": "trial-use",
                "sequence": "Release 5.1",
                "fhirversion": "5.0.0",
                "date": "2024-03-12",
                "desc": "Snapshot1 - Implementation Support prior to ballot completion",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "5.1.0-ballot",
                "path": "http://hl7.org/fhir/extensions/5.1.0-ballot",
                "status": "ballot",
                "sequence": "Release 5.1",
                "fhirversion": "5.0.0",
                "date": "2023-12-19",
                "desc": "Ballot for second release",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/extensions/1.0.0",
                "status": "trial-use",
                "sequence": "Release 1.0",
                "fhirversion": "5.0.0",
                "date": "2023-03-26",
                "current": true,
                "desc": "First release (With R5)"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.org/fhir/extensions/0.1.0",
                "status": "draft",
                "sequence": "Release 1.0",
                "fhirversion": "5.0.0",
                "date": "2023-03-04",
                "desc": "1st Draft - R5 QA"
            }
        ],
        "name": "FHIRExtensionPack",
        "title": "FHIR Extensions Pack",
        "fhirversion_latest": "5.0.0",
        "current_version": "5.1.0-cibuild",
        "repo": "https://github.com/HL7/fhir-extensions"
    },
    "hl7.fhir.uv.patient-corrections": {
        "url": "http://hl7.org/fhir/uv/patient-corrections",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-patient-correction",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Initial STU ballot (May 2022 Ballot)",
                "path": "http://hl7.org/fhir/uv/patient-corrections/2022May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-03-29"
            }
        ],
        "name": "PatientCorrectionsImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fhir-patient-correction"
    },
    "hl7.fhir.us.pq-cmc": {
        "url": "http://hl7.org/fhir/us/pq-cmc",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/FHIR-us-pq-cmc",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "FHIR_pqcmc",
        "title": "Pharmaceutical Quality Submissions to Food & Drug Administration (PQ/CMC)",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.20",
        "repo": "https://github.com/HL7/FHIR-us-pq-cmc"
    },
    "hl7.vulcan.template": {
        "url": "http://fhir.org/templates/hl7.vulcan.template",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/ig-template-vulcan",
                "fhirversion": "5.0.0-snapshot1"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0-snapshot1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/ig-template-vulcan"
    },
    "hl7.fhir.us.dme-orders": {
        "url": "http://hl7.org/fhir/us/dme-orders",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/dme-orders",
                "status": "ci-build",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.2.0",
                "date": "2020-08-10",
                "sequence": "STU 1",
                "desc": "September 2020 Ballot",
                "path": "http://hl7.org/fhir/us/dme-orders/2020Sep",
                "fhirversion": "4.0.1",
                "status": "ballot"
            },
            {
                "version": "0.1.0",
                "date": "2020-04-02",
                "sequence": "STU 1",
                "desc": "QA version for May 2020 Ballot",
                "path": "http://hl7.org/fhir/us/dme-orders/2020May",
                "status": "ballot",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "PostAcuteOrderExchange",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.2",
        "repo": "https://github.com/HL7/dme-orders"
    },
    "hl7.fhir.uv.emedicinal-product-info": {
        "url": "http://hl7.org/fhir/uv/emedicinal-product-info",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/emedicinal-product-info",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/uv/emedicinal-product-info/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "5.0.0",
                "date": "2023-07-26",
                "current": true,
                "desc": "This is the published version of the first release in the STU1 sequence."
            },
            {
                "version": "1.0.0-ballot",
                "date": "2022-12-04",
                "path": "http://hl7.org/fhir/uv/emedicinal-product-info/2023Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "5.0.0-ballot",
                "desc": "This is the ballot version of the first release in the STU1 sequence."
            }
        ],
        "name": "EpiIG",
        "title": "Electronic Medicinal Product Information (ePI) FHIR Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/emedicinal-product-info"
    },
    "hl7.fhir.uv.eyecare": {
        "url": "http://hl7.org/fhir/uv/eyecare",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-eyecare-ig",
                "status": "ci-build",
                "fhirversion": "4.0.1",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "STU1 ballot",
                "path": "http://hl7.org/fhir/uv/eyecare/2021Sep",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2021-08-12"
            }
        ],
        "name": "OphthalmologyImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-eyecare-ig"
    },
    "hl7.fhir.us.udap-security": {
        "url": "http://hl7.org/fhir/us/udap-security",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for UDAP Security FHIR IG (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-udap-security-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "UDAP Security IG STU1",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/udap-security/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "date": "2022-09-27",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "UDAP Security IG First STU ballot",
                "sequence": "STU 1",
                "path": "http://hl7.org/fhir/us/udap-security/2021Sep",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "date": "2021-08-06"
            }
        ],
        "name": "UDAPSecurity",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-udap-security-ig"
    },
    "hl7.fhir.us.spl": {
        "url": "http://hl7.org/fhir/us/spl",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-spl",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "FHIR_SPL",
        "title": "SPL Mapping FHIR R5 Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.2.0",
        "repo": "https://github.com/HL7/fhir-spl"
    },
    "hl7.fhir.us.davinci-deqm": {
        "url": "http://hl7.org/fhir/us/davinci-deqm",
        "versions": [
            {
                "current": true,
                "descmd": "Continuous Integration Build (latest in version control) (also [R3](http://build.fhir.org/ig/HL7/davinci-deqm))",
                "path": "http://build.fhir.org/ig/HL7/davinci-deqm",
                "status": "ci-build",
                "version": "current"
            },
            {
                "version": "4.0.0",
                "path": "http://hl7.org/fhir/us/davinci-deqm/STU4",
                "status": "trial-use",
                "sequence": "STU4 (v4.0.0)",
                "fhirversion": "4.0.1",
                "date": "2023-10-03",
                "current": true,
                "desc": "STU4 (v4.0.0) Publication",
                "descmd": "STU4 (v4.0.0) Publication: this version updates the Data Exchange for Quality Measures Implementation Guide (IG) to STU4 (v4.0.0)."
            },
            {
                "version": "4.0.0-ballot",
                "date": "2022-12-05",
                "path": "http://hl7.org/fhir/us/davinci-deqm/2023Jan",
                "status": "ballot",
                "sequence": "STU4 (v4.0.0)",
                "fhirversion": "4.0.1",
                "desc": "STU4 (v4.0.0)",
                "descmd": "The January 2023 Ballot Version: this version updates the Data Exchange for Quality Measures Implementation Guide (IG) to STU4 (v4.0.0)."
            },
            {
                "version": "3.1.0",
                "date": "2022-11-21",
                "path": "http://hl7.org/fhir/us/davinci-deqm/STU3.1",
                "status": "trial-use",
                "sequence": "STU 3",
                "fhirversion": "4.0.1",
                "desc": "DEQM STU3.1.0 Release for FHIR R4",
                "changes": "change-notes.html#changes-and-updates-for-version-310"
            },
            {
                "version": "3.0.0",
                "fhirversion": "4.0.1",
                "desc": "DEQM STU 3 for FHIR R4",
                "changes": "change-notes.html#changes-and-updates-for-version-300",
                "path": "http://hl7.org/fhir/us/davinci-deqm/STU3",
                "status": "trial-use",
                "sequence": "STU 3",
                "date": "2021-06-21"
            },
            {
                "version": "2.1.0",
                "fhirversion": "4.0.1",
                "date": "2020-08-15",
                "desc": "STU 3 Ballot for 2nd Release FHIR R4 Version of DEQM",
                "changes": "change-notes.html#changes-and-updates-for-version-210",
                "path": "http://hl7.org/fhir/us/davinci-deqm/2020Sep",
                "status": "trial-use",
                "sequence": "STU 3"
            },
            {
                "version": "2.0.0",
                "fhirversion": "4.0.1",
                "date": "2020-08-15",
                "desc": "The current official published version of the DEQM IG for FHIR R4.",
                "changes": "change-notes.html#changes-and-updates-for-version-200",
                "path": "http://hl7.org/fhir/us/davinci-deqm/STU2",
                "status": "trial-use",
                "sequence": "STU 2"
            },
            {
                "version": "1.1.0",
                "fhirversion": "4.0.1",
                "date": "2019-12-27",
                "desc": "STU 2 Ballot for FHIR R4 Version of DEQM",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/us/davinci-deqm/2020Feb",
                "status": "ballot",
                "sequence": "STU 2"
            },
            {
                "version": "1.0.0",
                "fhirversion": "3.0.1",
                "date": "2019-10-31",
                "desc": "The current official published version of the DEQM IG for FHIR STU3.",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/us/davinci-deqm/STU1",
                "status": "trial-use",
                "sequence": "STU 1"
            },
            {
                "changes": "STU 3/change-notes.html",
                "date": "2019-03-27",
                "descmd": "STU Ballot 2 for FHIR STU3 Version of DEQM - see [R3 Index](http://hl7.org/fhir/us/davinci-deqm/2018Sep/STU3/index.html) (No R4 version this time)",
                "path": "http://hl7.org/fhir/us/davinci-deqm/2019May",
                "sequence": "STU 1",
                "status": "ballot",
                "version": "0.2.0",
                "fhirversion": "3.0.1"
            },
            {
                "date": "2018-09-01",
                "descmd": "First public ballot - see [R4 Index](http://hl7.org/fhir/us/davinci-deqm/2018Sep/index.html) and [R3 Index](http://hl7.org/fhir/us/davinci-deqm/2018Sep/STU3/index.html)",
                "path": "http://hl7.org/fhir/us/davinci-deqm/2018Sep",
                "sequence": "STU 1",
                "status": "ballot",
                "version": "0.1.0",
                "fhirversion": "3.0.1|3.5.0"
            }
        ],
        "name": "DEQM",
        "title": "Data Exchange For Quality Measures Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "4.0.0",
        "repo": "https://github.com/HL7/davinci-deqm"
    },
    "hl7.fhir.us.smp": {
        "url": "http://hl7.org/fhir/us/smp",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/smp-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "StandardizedMedicationProfile",
        "title": "Standardized Medication Profile (SMP) FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/smp-ig"
    },
    "hl7.fhir.us.odh": {
        "url": "http://hl7.org/fhir/us/odh",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/us-odh",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.3.0",
                "path": "http://hl7.org/fhir/us/odh/STU1.3",
                "status": "trial-use",
                "sequence": "STU 1.3 on FHIR R4",
                "fhirversion": "4.0.1",
                "date": "2023-03-27",
                "current": true,
                "desc": "Release 1.3.0 STU1.3 (Build)"
            },
            {
                "version": "1.2.0",
                "desc": "Release 1.2.0 STU1.2",
                "path": "http://hl7.org/fhir/us/odh/STU1.2",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1.2 on FHIR R4",
                "date": "2022-08-17"
            },
            {
                "version": "1.1.0",
                "desc": "Release 1.1.0 STU1.1 (Build)",
                "path": "http://hl7.org/fhir/us/odh/STU1.1",
                "fhirversion": "4.0.1",
                "sequence": "STU 1.1 on FHIR R4",
                "status": "trial-use",
                "date": "2021-07-12"
            },
            {
                "version": "1.0.0",
                "date": "2020-01-08",
                "desc": "Release 1.0.0 STU1",
                "path": "http://hl7.org/fhir/us/odh/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            },
            {
                "version": "0.1.0",
                "date": "2018-09-01",
                "desc": "Release 0.1.0 STU1 Ballot 1",
                "path": "http://hl7.org/fhir/us/odh/2018Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            }
        ],
        "name": "HL7_FHIR_Profile_Occupational_Data_for_Health_ODH_Release_1_3_Standard_for_Trial_Use",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.3.0",
        "repo": "https://github.com/HL7/us-odh"
    },
    "hl7.fhir.us.pacio-cs": {
        "url": "http://hl7.org/fhir/us/pacio-cs",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-pacio-cognitive-status",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 release",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/pacio-cs/STU1",
                "date": "2021-11-03",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2020-10-19",
                "desc": "Initial STU ballot (Jan 2021 Ballot)",
                "path": "http://hl7.org/fhir/us/pacio-cs/2021Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "PACIOCognitiveStatusImplementationGuide",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-pacio-cognitive-status"
    },
    "hl7.fhir.us.mdi": {
        "url": "http://hl7.org/fhir/us/mdi",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-mdi-ig",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "date": "2022-03-27"
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/us/mdi/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-11-16",
                "current": true,
                "desc": "Technical corrections and minor updates to STU 1"
            },
            {
                "version": "1.0.0",
                "desc": "MDI STU 1",
                "path": "http://hl7.org/fhir/us/mdi/STU1",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "status": "trial-use",
                "date": "2022-09-30"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Ballot for STU Release 1",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/mdi/2022May",
                "date": "2022-03-28"
            }
        ],
        "name": "MedicolegalDeathInvestigation",
        "title": "Medicolegal Death Investigation (MDI)",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/fhir-mdi-ig"
    },
    "hl7.fhir.uv.dicom-sr": {
        "url": "http://hl7.org/fhir/dicom-sr",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/dicom-sr",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "DICOMSRToFHIRResourceMappingIG",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/dicom-sr"
    },
    "hl7.other.template": {
        "url": "http://fhir.org/templates/hl7.fhir.template",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/ig-template-fhir",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "0.9.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.9.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2024-03-07",
                "current": true
            },
            {
                "version": "0.8.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.8.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2023-09-21"
            },
            {
                "version": "0.7.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.7.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on hl7.base.template",
                "date": "2023-09-13"
            },
            {
                "version": "0.6.0",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.6.0",
                "status": "release",
                "sequence": "Publications",
                "fhirversion": "4.0.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "date": "2022-12-17"
            },
            {
                "version": "0.5.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.5.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.4.0",
                "desc": "Upgrade for dependency on hl7.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.4.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2022-09-16"
            },
            {
                "version": "0.3.3",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.3",
                "status": "release",
                "sequence": "Publications",
                "date": "2021-09-03"
            },
            {
                "version": "0.3.2",
                "desc": "Fix search link",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.2",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-29"
            },
            {
                "version": "0.3.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.3.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-09-26"
            },
            {
                "version": "0.2.1",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.1",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.2.0",
                "desc": "Upgrade for dependency on hl7.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.2.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-07-08"
            },
            {
                "version": "0.1.0",
                "desc": "Upgrade for dependency on fhir.base.template",
                "path": "http://fhir.org/templates/hl7.fhir.template/0.1.0",
                "status": "release",
                "sequence": "Publications",
                "date": "2020-02-17"
            },
            {
                "version": "0.0.5",
                "date": "2020-02-03",
                "desc": "First Release",
                "path": "http://fhir.org/templates/fhir.base.template/0.0.5",
                "status": "release",
                "sequence": "Publications"
            }
        ],
        "name": null,
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/ig-template-other"
    },
    "hl7.fhir.us.mihr": {
        "url": "http://hl7.org/fhir/us/mihr",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-mmm-ig",
                "desc": "Continuous Integration Build (latest in version control)",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "date": "2022-03-14"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/mihr/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-03-29",
                "current": true,
                "desc": "FHIR STU Release 1"
            },
            {
                "version": "1.0.0-ballot",
                "desc": "Ballot for FHIR STU Release 1",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/mihr/2022May",
                "date": "2022-03-29"
            }
        ],
        "name": "MaternalInfantHealthResearch",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-mmm-ig"
    },
    "hl7.fhir.uv.crmi": {
        "url": "http://hl7.org/fhir/uv/crmi",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/crmi-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot2",
                "path": "http://hl7.org/fhir/uv/crmi/2024Jan",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-12-20",
                "desc": "STU1 Ballot 2 (v1.0.0)",
                "descmd": "This is the second ballot of the Canonical Resource Management Infrastructure IG STU1"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/crmi/2023Sep",
                "status": "ballot",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2023-08-03",
                "desc": "STU1 Ballot (v1.0.0)",
                "descmd": "This is the initial ballot of the Canonical Resource Management Infrastructure IG STU1"
            }
        ],
        "name": "CRMI",
        "title": "Canonical Resource Management Infrastructure Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0-ballot2",
        "repo": "https://github.com/HL7/crmi-ig"
    },
    "hl7.fhir.us.exchange-routing": {
        "url": "http://hl7.org/fhir/us/exchange-routing",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for FHIR STU1 (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-exchange-routing-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU1",
                "changes": "",
                "path": "http://hl7.org/fhir/us/exchange-routing/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU1",
                "date": "2022-09-26",
                "current": true
            },
            {
                "version": "0.1.0",
                "desc": "STU1 Ballot",
                "changes": "",
                "path": "http://hl7.org/fhir/us/exchange-routing/2022Jan",
                "status": "ballot",
                "fhirversion": "4.0.1",
                "sequence": "STU1",
                "date": "2021-12-03"
            }
        ],
        "name": "HybridIntermediaryExchange",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-exchange-routing-ig"
    },
    "hl7.fhir.uv.fhirpath": {
        "url": "http://hl7.org/fhirpath",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "descmd": "Continuous Integration Build (latest in version control)",
                "path": "https://build.fhir.org/ig/HL7/FHIRPath",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.0",
                "date": "2020-Jan-16",
                "desc": "Normative Release",
                "descmd": "Normative Release. Changes:\r\n\r\n* Clarified calendar duration vs definite duration time-valued quantities\r\n* Clarified calendar semantics for date/time arithmetic\r\n* Clarified UCUM support conformance requirements\r\n* Added reference to conformance language\r\n* Reorganized conversion documentation for clarity\r\n* Clarified date/time literal in the grammar\r\n* Clarified conversion and formatting patterns throughout\r\n* Updated error handling language for consistency throughout\r\n* Added missing example explanations throughout\r\n* Added definitions and references for clarity throughout\r\n* Clarified escape-handling in strings and identifiers\r\n* Clarified unary operator precedence behavior\r\n* Clarified function invocation terms and descriptions throughout\r\n* Typographical corrections and clarifications throughout",
                "path": "https://hl7.org/fhirpath/N1/index.html",
                "status": "normative",
                "sequence": "Normative",
                "current": true
            },
            {
                "version": "1.3.0",
                "date": "2019-05-01",
                "descmd": "3rd Normative Ballot. Changes:\r\n\r\n* Removed timezone offset from Time values (still present on DateTime values)\r\n* Corrected convertsToTime to not require the `T` prefix\r\n* Marked Aggregate and Reflection sections as STU\r\n* Defined seconds as a decimal rather than having a separate millisecond precision for comparison\r\n* Added .is() and .as() functions for backwards compatibility\r\n* Allowed strings to be used for environment variables for backwards compability\r\n* Added literal notation for parital datetimes\r\n* Added quantity conversion functions\r\n* Added contains as a keyword to the grammar\r\n* Added Math functions (as STU): .round(), .sqrt(), .log(), .exp(), .ln(), .power(), .floor(), .ceiling(), .truncate(), and .abs()\r\n* Added an optional argument to trace() to allow logged content to be shaped\r\n* Clarified today() and now() semantics and added timeOfDay()\r\n* Various errata and clarifications throughout.",
                "path": "https://hl7.org/fhirpath/2019May/index.html",
                "status": "ballot",
                "sequence": "Normative"
            },
            {
                "version": "1.2.0",
                "date": "2018-08-21",
                "descmd": "2nd Normative Ballot. Changes:\r\n\r\n* Changed delimited identifiers to use a backtick rather than a double-quote\r\n* Changed isXXX conversion testing operators to convertsToXXX\r\n* Added Date type literals, system type, and operators\r\n* Clarified semantics of equality/equivalence for Date/Time types\r\n* Added weeks to Date/Time addition/subtraction\r\n* Clarified partial Date/Time comparison semantics\r\n* Various errata and clarifications throughout",
                "path": "https://hl7.org/fhirpath/2018Sep/index.html",
                "status": "ballot",
                "sequence": "Normative"
            },
            {
                "version": "1.1.0",
                "date": "2018-03-31",
                "descmd": "Normative Ballot. Changes:\r\n\r\n* Added terminology operators to FHIR appendix\r\n* Increased precedence of is/as operators\r\n* Added .aggregate() operator\r\n* Clarified support for namespaces in FHIRPath and its usage contexts (FHIR, CQL, V2)\r\n* Relaxed conversion failures to return null instead of throw an error\r\n* Added support for quantity comparisons\r\n* Relaxed definition of code equivalence (only uses code and system, not version or text/display)\r\n* Added $index accessor to iteratio contexts\r\n* Added profile validation operators to FHIR appendix\r\n\r\nSee changes from ballot to release for the [spec](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhirpath%2F2016Sept%2Findex.html&doc2=http%3A%2F%2Fhl7.org%2Ffhirpath%2Findex.html) or the [grammar](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhirpath%2F2016Sept%2Fgrammar.html&doc2=http%3A%2F%2Fhl7.org%2Ffhirpath%2Fgrammar.html)",
                "path": "https://hl7.org/fhirpath/2018May/index.html",
                "status": "ballot",
                "sequence": "Normative"
            },
            {
                "version": "1.0.0",
                "date": "2016-12-06",
                "descmd": "STU1 Release. Changes:\r\n* Rename from FluentPath to FHIRPath for trademark reasons\r\n* Added string concatenate (&) operator\r\n* Added URI and Media Types\r\n* Added combine operator to support combining lists without removing duplicates\r\n* Added anyFalse and allFalse operators\r\n* Clarified lexical elements for whitespace, comments, case-sensitivity, etc.\r\n* Added ability to reference case-insensitive models, and note about models specifying alternative collection offsets\r\n* Added a usage appendix for HL7 V2\r\n* Added an implementation appendix\r\n* Added examples and clarifying documentation throughout\r\n\r\nSee changes from ballot to release for the [spec](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhirpath%2F2016Sept%2Findex.html&doc2=http%3A%2F%2Fhl7.org%2Ffhirpath%2Findex.html) or the [grammar](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhirpath%2F2016Sept%2Fgrammar.html&doc2=http%3A%2F%2Fhl7.org%2Ffhirpath%2Fgrammar.html)",
                "path": "https://hl7.org/fhirpath/2017Jan/index.html",
                "status": "trial-use",
                "sequence": "STU 1"
            },
            {
                "version": "0.3.0",
                "date": "2016-08-11",
                "descmd": "STU1 Ballot. Changes:\r\n* refine notions around 3 value Boolean logic\r\n* clarify use & syntax of constants\r\n* add date operations\r\n* many minor changes to functions\r\n* provide test cases for FHIR implementations\r\n* added support for reflection\r\n* improved support for extensions and profiles in FHIR",
                "path": "https://hl7.org/fhirpath/2016Sept/index.html",
                "status": "ballot",
                "sequence": "STU 1"
            },
            {
                "version": "0.2.0",
                "date": "2015-03-31",
                "descmd": "STU1 Draft (first joint version between FHIR & CQL)",
                "path": "https://hl7.org/fhirpath/2016May/index.html",
                "status": "ballot",
                "sequence": "STU 1"
            }
        ],
        "name": "FHIRPath",
        "title": "FHIRPath Specification",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/HL7/FHIRPath"
    },
    "hl7.fhir.us.vrdr": {
        "url": "http://hl7.org/fhir/us/vrdr",
        "versions": [
            {
                "version": "current",
                "date": "n/a",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/vrdr",
                "status": "ci-build"
            },
            {
                "version": "2.2.0",
                "path": "http://hl7.org/fhir/us/vrdr/STU2.2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-10-17",
                "current": true,
                "desc": "Update to VRDR STU2 addressing minor corrections (documentation)",
                "descmd": "Update to VRDR STU2 addressing minor corrections (documentation)",
                "changes": "change_log.html"
            },
            {
                "version": "2.1.0",
                "path": "http://hl7.org/fhir/us/vrdr/STU2.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-03-24",
                "desc": "Update to VRDR STU2 addressing minor corrections (missing codes, display strings)",
                "descmd": "Update to VRDR STU2 addressing minor corrections (missing codes, display strings)",
                "changes": "change_log.html"
            },
            {
                "version": "2.0.0",
                "path": "http://hl7.org/fhir/us/vrdr/STU2",
                "desc": "STU R2",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "sequence": "STU 2",
                "date": "2022-08-31"
            },
            {
                "version": "1.2.0",
                "path": "http://hl7.org/fhir/us/vrdr/2021Sep",
                "desc": "VRDR STU R2 Ballot",
                "fhirversion": "4.0.1",
                "status": "ballot",
                "sequence": "STU 2",
                "date": "2021-08-13"
            },
            {
                "version": "1.0.0",
                "path": "http://hl7.org/fhir/us/vrdr/STU1",
                "desc": "VRDR STU R1",
                "fhirversion": "4.0.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "date": "2020-10-27"
            },
            {
                "version": "0.1.0",
                "date": "2019-03-21",
                "desc": "STU #1 1st Ballot",
                "path": "http://hl7.org/fhir/us/vrdr/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "3.0.1"
            }
        ],
        "name": "VRDR",
        "title": "Vital Records Death Reporting (VRDR) FHIR Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "3.0.0-CIBuild",
        "repo": "https://github.com/HL7/vrdr"
    },
    "hl7.fhir.us.covid19library": {
        "url": "http://hl7.org/fhir/us/covid19library",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/covid19library",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Official informative publication release",
                "path": "http://hl7.org/fhir/us/covid19library/informative1",
                "status": "informative",
                "sequence": "Informative",
                "fhirversion": "4.0.1",
                "date": "2022-07-25",
                "current": true
            },
            {
                "version": "0.14.0",
                "desc": "Official informative ballot release",
                "path": "http://hl7.org/fhir/us/covid19library/2022Jan",
                "status": "ballot",
                "sequence": "Drafts",
                "fhirversion": "4.0.1",
                "date": "2021-12-08"
            },
            {
                "version": "0.13.0",
                "desc": "Official for-comment ballot release",
                "path": "http://hl7.org/fhir/us/covid19library/2021Sep",
                "status": "ballot",
                "sequence": "Drafts",
                "fhirversion": "4.0.1",
                "date": "2021-08-27"
            }
        ],
        "name": "COVID19FHIRProfileLibraryIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-COVID19Library-ig"
    },
    "hl7.fhir.uv.cow": {
        "url": "http://hl7.org/fhir/uv/cow",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-cow-ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ClinicalOrderWorkflows",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/HL7/fhir-cow-ig"
    },
    "hl7.fhir.us.davinci-pdex-plan-net": {
        "url": "http://hl7.org/fhir/us/davinci-pdex-plan-net",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-pdex-plan-net",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.1.0",
                "desc": "Davinci pdex Plan Net, Release 1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-04-04",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "Davinci PDEX Plan Net, Release 1 - US Realm STU",
                "path": "http://hl7.org/fhir/us/davinci-pdex-plan-net/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-20"
            },
            {
                "version": "0.1.0",
                "date": "2019-10-24",
                "desc": "Davinci pdex Plan Net - STU Ballot",
                "path": "http://hl7.org/fhir/us/davinci-pdex-plan-net/2020Feb",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "DaVinciPDEXPlanNet",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0",
        "repo": "https://github.com/HL7/davinci-pdex-plan-net"
    },
    "hl7.fhir.us.davinci-pas": {
        "url": "http://hl7.org/fhir/us/davinci-pas",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-pas",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "2.0.1",
                "path": "http://hl7.org/fhir/us/davinci-pas/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "date": "2023-12-01",
                "current": true,
                "desc": "This errata fixes a dependency on the CRD guide.",
                "corrections": [
                    {
                        "version": "2.0.0",
                        "path": "hl7.fhir.us.davinci-pas#2.0.0.zip",
                        "date": "2023-12-01"
                    }
                ]
            },
            {
                "version": "1.2.0-ballot",
                "desc": "STU 1.2 Ballot",
                "path": "http://hl7.org/fhir/us/davinci-pas/2022May",
                "status": "ballot",
                "sequence": "STU 1.2",
                "fhirversion": "4.0.1",
                "date": "2022-02-17"
            },
            {
                "version": "1.1.0",
                "desc": "STU Update Release",
                "path": "http://hl7.org/fhir/us/davinci-pas/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1.1",
                "fhirversion": "4.0.1",
                "date": "2021-12-20"
            },
            {
                "version": "1.0.0",
                "desc": "First STU Release",
                "path": "http://hl7.org/fhir/us/davinci-pas/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-20"
            },
            {
                "version": "0.1.0",
                "date": "2019-08-05",
                "descmd": "First public ballot",
                "path": "http://hl7.org/fhir/us/davinci-pas/2019Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "DaVinciPriorAuthorizationSupport",
        "title": "Da Vinci Prior Authorization Support (PAS) FHIR IG",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.1",
        "repo": "https://github.com/HL7/davinci-pas"
    },
    "hl7.fhir.uv.cpg": {
        "url": "http://hl7.org/fhir/uv/cpg",
        "versions": [
            {
                "version": "current",
                "date": "Latest Build",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/cqf-recommendations",
                "status": "ci-build",
                "fhirversion": "4.0.0",
                "current": true
            },
            {
                "version": "2.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/cpg/2024Jan",
                "status": "ballot",
                "sequence": "STU2",
                "fhirversion": "4.0.1",
                "date": "2023-12-19",
                "desc": "STU2 Ballot (v2.0.0)",
                "descmd": "This is the first STU2 ballot of the Clinical Guidelines IG"
            },
            {
                "version": "1.0.0",
                "descmd": "* [J#23945](https://jira.hl7.org/browse/FHIR-23945): Changed protocol and workflow to pathway and strategy definitions\r\n* [J#24177](https://jira.hl7.org/browse/FHIR-23945): Improved activity catalog\r\n* [J#24087](https://jira.hl7.org/browse/FHIR-24087): Moved recommendation-specific extensions to recommendation definition\r\n* [J#26612](https://jira.hl7.org/browse/FHIR-26612): Defined shareable, computable, publishable, and executable knowledge capabilities and profiles\r\n* [J#23954](https://jira.hl7.org/browse/FHIR-23954): Added support for case features\r\n* [J#27154](https://jira.hl7.org/browse/FHIR-27154): Formalized $cql and Library/$evaluate operations\r\n* [J#27151](https://jira.hl7.org/browse/FHIR-27151): Removed rating extensions from instance profiles\r\n* [J#23951](https://jira.hl7.org/browse/FHIR-23951): Formalized strategy behavior\r\n* [J#23952](https://jira.hl7.org/browse/FHIR-23952): Formalized case behavior\r\n* [J#23960](https://jira.hl7.org/browse/FHIR-23960): Formalized care plan behavior\r\n* [J#26875](https://jira.hl7.org/browse/FHIR-26875): Relaxed url requirement in related artifacts\r\n* [J#23968](https://jira.hl7.org/browse/FHIR-23968): Formalized request proposal/plan/order behavior\r\n* [J#23964](https://jira.hl7.org/browse/FHIR-23964): Formalized eligibility and enrollment behavior\r\n* [J#24163](https://jira.hl7.org/browse/FHIR-24163): Added testing and packaging support and documentation\r\n* [J#24161](https://jira.hl7.org/browse/FHIR-24161): Clarified rating systems conformance requirements\r\n* [J#23956](https://jira.hl7.org/browse/FHIR-23956): Formalized metric behavior\r\n* [J#23959](https://jira.hl7.org/browse/FHIR-23959): Added support for clinical impressions\r\n* [J#23957](https://jira.hl7.org/browse/FHIR-23957): Added case summary support\r\n* [J#23963](https://jira.hl7.org/browse/FHIR-23963): Added case plan summary support\r\n* [J#23958](https://jira.hl7.org/browse/FHIR-23958): Added case plan progressing note support\r\n* [J#23949](https://jira.hl7.org/browse/FHIR-23949): Completed examples for all activity types\r\n* [J#24221](https://jira.hl7.org/browse/FHIR-24221): Formalized activity processing semantics\r\n* [J#24217](https://jira.hl7.org/browse/FHIR-24217): Formalized triggering behavior\r\n* [J#23940](https://jira.hl7.org/browse/FHIR-23940): Added patient safety discussion to conformance page\r\n* [J#24165](https://jira.hl7.org/browse/FHIR-24165): Added Development/methodology documentation and walkthroughs\r\n* [J#24236](https://jira.hl7.org/browse/FHIR-24236): Added a complete example for Congestive Heart Failure pathway\r\n* [J#24227](https://jira.hl7.org/browse/FHIR-24227): Updated narratives for examples throughout\r\n* [J#24156](https://jira.hl7.org/browse/FHIR-24156): Updated topic binding to preferred for all artifact types\r\n* [J#30007](https://jira.hl7.org/browse/FHIR-30007): Support for images in questionnaire questions and answers\r\n* [J#26885](https://jira.hl7.org/browse/FHIR-26885): Formalized conformance requirements for input and output of CQL libraries\r\n* [J#26621](https://jira.hl7.org/browse/FHIR-26621): Clarified conformance requirements for Library resolution and naming/namespacing\r\n* [J#24150](https://jira.hl7.org/browse/FHIR-24150): Separated examples vs artifacts and provided index for both\r\n* [J#23991](https://jira.hl7.org/browse/FHIR-24150): Added a glossary of key terms\r\n* [J#24223](https://jira.hl7.org/browse/FHIR-24223): Added history of attempts to background section\r\n* [J#23948](https://jira.hl7.org/browse/FHIR-23948): Reorganized overall guide content and navigation\r\n\r\nIn addition, numerous corrections and clarifications were made throughout, as well as substantial expansion of approach and methodology documentation. Refer to the HL7 JIRA for a complete description of changes applied to the 1.0.0 version.",
                "desc": "STU1 Release (v1.0.0)",
                "path": "http://hl7.org/fhir/uv/cpg/STU1",
                "status": "trial-use",
                "fhirversion": "4.0.1",
                "sequence": "STU 1",
                "date": "2021-02-11",
                "current": true
            },
            {
                "version": "0.1.0",
                "date": "2019-08-04",
                "descmd": "STU 1 (v0.1.0)\r\n* The initial ballot combines experience gained from multiple guideline representation projects, including Opioid Prescribing Support, Chronic Kidney Disease Management, Antenatal Care, HIV/HBV Screening, Prevention, and Treatment, and Immunization Decision Support.",
                "desc": "STU 1 (v0.1.0)",
                "path": "http://hl7.org/fhir/uv/cpg/2019Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            }
        ],
        "name": "CPG",
        "title": "Clinical Practice Guidelines",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0-ballot",
        "repo": "https://github.com/HL7/cqf-recommendations"
    },
    "hl7.fhir.uv.subscriptions-backport": {
        "url": "http://hl7.org/fhir/uv/subscriptions-backport",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/fhir-subscription-backport-ig",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.2.0-ballot",
                "path": "http://hl7.org/fhir/uv/subscriptions-backport/2024Jan",
                "status": "ballot",
                "sequence": "STU 1.2",
                "fhirversion": "4.3.0",
                "date": "2023-12-18",
                "desc": "Add notified pull option to notifications.\nAdd operation to resend events.\nClarify where the id is in id-only notifications.\nAdd authorization information to notifications.\nFix incorrect search parameter types.\nAdd definitions and explanations for topics in R4.\nVarious Technical Corrections.",
                "descmd": "* [FHIR-43275](https://jira.hl7.org/browse/FHIR-43275): Add notified pull option to notifications\n* [FHIR-43082](https://jira.hl7.org/browse/FHIR-43082): Add operation to resend events\n* [FHIR-41917](https://jira.hl7.org/browse/FHIR-41917): Clarify where the id is in the id-only Notification Profile\n* [FHIR-43081](https://jira.hl7.org/browse/FHIR-43081): Add authorization information to notifications\n* [FHIR-43072](https://jira.hl7.org/browse/FHIR-43072): Incorrect search parameter type\n* [FHIR-38803](https://jira.hl7.org/browse/FHIR-38803): the subscriptions backport should describe how to do notifications in R4 as well as or instead of R4B\n* Various TCs (e.g., typos)\n  * [FHIR-41024](https://jira.hl7.org/browse/FHIR-41024): 2.3.3 Workflow for R4 includes a subsection referencing R4B\n  * Fixes to `CapabilityStatement` resources for correctness.\n  * Fixes to FHIRPath expressions in `SearchParameter` resources for correctness.\n* Added change log.",
                "changes": "ig_changelog.html#stu-120"
            },
            {
                "version": "1.1.0",
                "path": "http://hl7.org/fhir/uv/subscriptions-backport/STU1.1",
                "status": "trial-use",
                "sequence": "STU 1.1",
                "fhirversion": "4.3.0",
                "date": "2023-01-11",
                "current": true,
                "desc": "STU1.1 - Added explicit support for R4, in addition to R4B."
            },
            {
                "version": "1.0.0",
                "desc": "Subscriptions R5 Backport STU 1, version 1.0.0",
                "path": "http://hl7.org/fhir/uv/subscriptions-backport/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.3.0",
                "date": "2022-07-18"
            },
            {
                "version": "0.1.0",
                "desc": "Initial STU ballot (Jan 2021 Ballot)",
                "path": "http://hl7.org/fhir/uv/subscriptions-backport/2021Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2020-12-16"
            }
        ],
        "name": "SubscriptionsR5Backport",
        "title": "Subscriptions R5 Backport",
        "fhirversion_latest": "4.3.0",
        "current_version": "1.2.0-ballot",
        "repo": "https://github.com/HL7/fhir-subscription-backport-ig"
    },
    "hl7.fhir.us.davinci-alerts": {
        "url": "http://hl7.org/fhir/us/davinci-alerts",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build for FHIR STU1 (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-alerts",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "The current official published version of the Da Vinci Unsolicited Notifications Guide STU1 for FHIR R4.",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/us/davinci-alerts/STU1",
                "status": "trial-use",
                "sequence": "STU1",
                "fhirversion": "4.0.1",
                "date": "2020-10-15",
                "current": true
            },
            {
                "version": "0.2.0",
                "date": "2019-12-22",
                "desc": "STU 1 Ballot",
                "changes": "change-notes.html",
                "path": "http://hl7.org/fhir/us/davinci-alerts/2020Feb",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DaVinciUnsolicitedNotifications",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "1.1.0-preview",
        "repo": "https://github.com/HL7/davinci-alerts"
    },
    "hl7.fhir.us.sdoh-clinicalcare": {
        "url": "http://hl7.org/fhir/us/sdoh-clinicalcare",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare",
                "desc": "Continuous  Integration Build",
                "fhirversion": "4.0.1",
                "status": "ci-build",
                "current": true,
                "date": "2020-12-01"
            },
            {
                "version": "2.1.0",
                "path": "http://hl7.org/fhir/us/sdoh-clinicalcare/STU2.1",
                "status": "trial-use",
                "sequence": "STU 2.1",
                "fhirversion": "4.0.1",
                "date": "2023-07-27",
                "current": true,
                "desc": "STU 2.1 official release",
                "descmd": "STU 2.1 official release.  See list of changes [here](http://hl7.org/fhir/us/sdoh-clinicalcare/STU2/stu2_changes.html)"
            },
            {
                "version": "2.0.0",
                "date": "2022-11-21",
                "path": "http://hl7.org/fhir/us/sdoh-clinicalcare/STU2",
                "status": "trial-use",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "desc": "STU 2 official release",
                "descmd": "STU 2 official release.  See list of changes [here](http://hl7.org/fhir/us/sdoh-clinicalcare/STU2/stu2_publication_changes.html)"
            },
            {
                "version": "1.1.0",
                "desc": "STU 2 ballot",
                "status": "ballot",
                "sequence": "STU 2",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/sdoh-clinicalcare/2022Jan",
                "date": "2021-12-07"
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 release",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/sdoh-clinicalcare/STU1",
                "date": "2021-08-05"
            },
            {
                "version": "0.1.0",
                "desc": "First STU ballot",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "path": "http://hl7.org/fhir/us/sdoh-clinicalcare/2021Jan",
                "date": "2020-12-16"
            }
        ],
        "name": "Sdohclinicalcare",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "2.1.0",
        "repo": "https://github.com/HL7/fhir-sdoh-clinicalcare"
    },
    "hl7.fhir.uv.ibcm": {
        "url": "http://hl7.org/fhir/uv/ibcm",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fetal_records",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/ibcm/1.0.0-ballot",
                "status": "ballot",
                "sequence": "Releases",
                "fhirversion": "5.0.0",
                "date": "2023-08-01",
                "desc": "This publication is the first draft of the Implementation Guide to seek for feedback from the CHOICE group"
            }
        ],
        "name": "InternationalBirthAndChildModel",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0-ballot",
        "repo": "https://github.com/HL7/fetal_records"
    },
    "hl7.fhir.us.davinci-atr": {
        "url": "http://hl7.org/fhir/us/davinci-atr",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/davinci-atr",
                "status": "ci-build",
                "current": "true"
            },
            {
                "version": "2.0.0",
                "path": "http://hl7.org/fhir/us/davinci-atr/STU2",
                "status": "trial-use",
                "sequence": "STU2 Release 1",
                "fhirversion": "4.0.1",
                "date": "2024-01-09",
                "current": true,
                "desc": "This release adds the generic patient lists, generic davinci bulk export and the ability for reconciling member attribution lists using member-add and member-remove operations.",
                "changes": "changes.html"
            },
            {
                "version": "2.0.0-ballot",
                "date": "2022-12-05",
                "path": "http://hl7.org/fhir/us/davinci-atr/2023Jan",
                "status": "ballot",
                "sequence": "STU2 Release 1",
                "fhirversion": "4.0.1",
                "desc": "This release adds the generic patient lists, generic davinci bulk export and the ability for reconciling member attribution lists using member-add and member-remove operations.",
                "changes": "changes.html"
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 for Publication",
                "changes": "Ballot reconciliation completed, profiles updated and APIs updated.",
                "path": "http://hl7.org/fhir/us/davinci-atr/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2021-02-08"
            },
            {
                "version": "0.1.0",
                "date": "2019-12-23",
                "desc": "STU 1 for Ballot",
                "changes": "Initial Version for Ballot",
                "path": "http://hl7.org/fhir/us/davinci-atr/2020Feb",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MemberAttributionList",
        "title": "Da Vinci - Member Attribution (ATR) List",
        "fhirversion_latest": "4.0.1",
        "current_version": "2.0.0",
        "repo": "https://github.com/HL7/davinci-atr"
    },
    "hl7.fhir.uv.phd": {
        "url": "http://hl7.org/fhir/uv/phd",
        "versions": [
            {
                "version": "current",
                "desc": "Continuous Integration Build (latest in version control)",
                "path": "http://build.fhir.org/ig/HL7/phd",
                "status": "ci-build",
                "current": true
            },
            {
                "version": "1.0.0",
                "desc": "STU 1 accepted version",
                "path": "http://hl7.org/fhir/uv/phd/STU1",
                "status": "trial-use",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2022-05-12",
                "current": true
            },
            {
                "version": "0.3.0",
                "date": "2019-03-27",
                "desc": "STU #1 2nd Ballot",
                "path": "http://hl7.org/fhir/uv/phd/2019May",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            },
            {
                "version": "0.2.0",
                "date": "2018-12-04",
                "desc": "STU #1 First Ballot",
                "path": "http://hl7.org/fhir/uv/phd/2019Jan",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.0"
            },
            {
                "version": "0.1.0",
                "date": "2018-01-01",
                "desc": "STU #1 Draft for Comment",
                "path": "http://hl7.org/fhir/uv/phd/2018Jan",
                "status": "draft",
                "sequence": "STU 1",
                "fhirversion": "3.0.0"
            }
        ],
        "name": "PhdImplementationGuide",
        "title": "Personal Health Device Implementation Guide",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/phd"
    },
    "hl7.fhir.uv.ae-research-backport-ig": {
        "url": "http://hl7.org/fhir/uv/ae-research-backport-ig",
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/HL7/fhir-ae-research-backport-ig",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "1.0.0-ballot",
                "path": "http://hl7.org/fhir/uv/ae-research-backport-ig/2023Sep",
                "status": "ballot",
                "sequence": "STU 1",
                "fhirversion": "4.0.1",
                "date": "2023-07-28",
                "desc": "FHIR STU Release 1 AdverseEvent Clinical Research Profile R4 Backport",
                "descmd": "FHIR STU Release 1 AdverseEvent Clinical Research Profile R4 Backport"
            }
        ],
        "name": "AdverseEventClinicalResearchR4backport",
        "title": "Adverse Event Clinical Research R4 Backport",
        "fhirversion_latest": "4.0.1",
        "current_version": "1.0.0",
        "repo": "https://github.com/HL7/fhir-ae-research-backport-ig"
    },
    "hl7.fhir.eu.spor": {
        "url": "http://unicom-project.eu/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/joofio/spor-as-cs",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "UnicomIG",
        "title": "UnicomIG",
        "fhirversion_latest": "5.0.0",
        "current_version": "1.0.0",
        "repo": "https://github.com/joofio/spor-as-cs"
    },
    "hl7.eu.fhir.ufis-swe-unicom": {
        "url": "http://unicom-project.eu/fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/joofio/ufis-swe-ig",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "UFISSWEIG",
        "title": "UFIS-SWE-IG",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/joofio/ufis-swe-ig"
    },
    "hl7.eu.fhir.ghepi": {
        "url": "http://hl7.eu/fhir/ig/gravitate-health",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/joofio/test-epi-composition",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "GhImplementationGuide",
        "title": "Gravitate Health FHIR Implementation Guide",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/joofio/test-epi-composition"
    },
    "obs.cdss.ig": {
        "url": "https://joofio.github.io/obs-cdss-fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/joofio/obs-cdss-fhir",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "OBSCDSS",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/joofio/obs-cdss-fhir"
    },
    "hl7.fhir.us.vrsandbox": {
        "url": "http://hl7.org/fhir/us/vrsandbox",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/nightingaleproject/vital_records_sandbox_ig",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "VitalRecordsSandboxIG",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/nightingaleproject/vital_records_sandbox_ig"
    },
    "who-umc.fhir.poc-php": {
        "url": "http://www.who-umc.org/idmp",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/gcangioli/who-umc-poc",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "WhoUmcIDMPManagement",
        "title": "WHO-UMC IDMP Management and Publish API",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.3.0",
        "repo": "https://github.com/gcangioli/who-umc-poc"
    },
    "hl7.fhir.uv.sql-on-fhir": {
        "url": "http://hl7.org/fhir/uv/sql-on-fhir",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/FHIR/sql-on-fhir-v2",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "SQLonFHIR",
        "title": "SQL on FHIR",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.0.1-pre",
        "repo": "https://github.com/FHIR/sql-on-fhir-v2"
    },
    "hl7.fhir.uv.howto": {
        "url": "http://hl7.org/fhir/uv/howto",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/FHIR/ig-guidance",
                "fhirversion": "5.0.0"
            }
        ],
        "name": "HowToCreateIGs",
        "title": null,
        "fhirversion_latest": "5.0.0",
        "current_version": "0.1.0",
        "repo": "https://github.com/FHIR/ig-guidance"
    },
    "hl7.fhir.uv.tools": {
        "url": "http://hl7.org/fhir/tools",
        "versions": [
            {
                "version": "current",
                "path": "https://build.fhir.org/ig/FHIR/fhir-tools-ig/",
                "status": "ci-build",
                "sequence": "ci-build"
            },
            {
                "version": "0.1.0",
                "path": "http://hl7.org/fhir/tools/0.1.0",
                "status": "informative",
                "sequence": "Releases",
                "fhirversion": "5.0.0",
                "date": "2023-12-19",
                "desc": "First stable release",
                "sub-packages": [
                    "r3",
                    "r4",
                    "r5"
                ]
            }
        ],
        "name": "FHIRToolExtensionsIG",
        "title": "FHIR Tooling Extensions IG",
        "fhirversion_latest": "5.0.0",
        "current_version": "0.2.0-snapshot",
        "repo": "https://github.com/FHIR/fhir-tools-ig"
    },
    "hl7.fhir.cl.minsal.eis": {
        "url": "https://interoperabilidad.minsal.cl/fhir/ig/eis",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/eis",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "EstandaresdeInformaciondeSalud",
        "title": "Gu\u00eda de Estandares de Informacionde Salud",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.1",
        "repo": "https://github.com/Minsal-CL/eis"
    },
    "hl7.fhir.cl.deis321": {
        "url": "https://hl7chile.cl/fhir/ig/deis321",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/deis",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "DEIS321",
        "title": "Gu\u00eda de Implementaci\u00f3n DExe 321-Reemplaza 820 DEIS",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/Minsal-CL/deis"
    },
    "hl7.fhir.cl.minsal.snre": {
        "url": "https://interoperabilidad.minsal.cl/fhir/ig/snre",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/IG_snre",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "SistemaNacionalDeRecetaElectronica",
        "title": "Sistema Nacional de receta electronica",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.9.6",
        "repo": "https://github.com/Minsal-CL/IG_snre"
    },
    "fhir.minsal.ListaDeEspera": {
        "url": "http://minsal.cl/listaespera",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/SIGTEv2-IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "ListaEsperaChile",
        "title": "Proyecto Listas de Espera MINSAL CHILE",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.3",
        "repo": "https://github.com/Minsal-CL/SIGTEv2-IG"
    },
    "hl7.fhir.cl.minsal.tei": {
        "url": "https://interoperabilidad.minsal.cl/fhir/ig/tei",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/SIGTEv2-IG",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "TiemposDeEsperaInteroperable",
        "title": "Tiempos de Espera Interoperable",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.6",
        "repo": "https://github.com/Minsal-CL/SIGTEv2-IG"
    },
    "hl7.fhir.cl.minsal.mpi": {
        "url": "https://interoperabilidad.minsal.cl/fhir/ig/mpi",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/IG_mpi",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MaestroDePacientes",
        "title": "Maestro de pacientes",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.2.0",
        "repo": "https://github.com/Minsal-CL/IG_mpi"
    },
    "minsal.fhir.core": {
        "url": "http://minsal.cl/fhir/core",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/MFR",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "CoreMinsal",
        "title": null,
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.0",
        "repo": "https://github.com/Minsal-CL/MFR"
    },
    "hl7.fhir.cl.minsal.mfr": {
        "url": "https://interoperabilidad.minsal.cl/fhir/ig/mfr",
        "not_yet_published": true,
        "versions": [
            {
                "version": "current",
                "path": "http://build.fhir.org/ig/Minsal-CL/MFR",
                "fhirversion": "4.0.1"
            }
        ],
        "name": "MaestroPrestadoresInstitucionales",
        "title": "Maestro Prestadores Institucionales",
        "fhirversion_latest": "4.0.1",
        "current_version": "0.1.4",
        "repo": "https://github.com/Minsal-CL/MFR"
    }
};

export var guide_url_list = {
    "hl7.org/fhir/ca/baseline": {
        "package_id": "hl7.fhir.ca.baseline",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7-Canada/ca-baseline": {
        "package_id": "hl7.fhir.ca.baseline",
        "version": "current"
    },
    "fhir.org.nz/ig/tewhatuora/crih-fhir-ig": {
        "package_id": "nz.central.ihub.ig",
        "version": "latest"
    },
    "build.fhir.org/ig/tewhatuora/centralRegion-integrationHub-ig": {
        "package_id": "nz.central.ihub.ig",
        "version": "current"
    },
    "standards.digital.health.nz": {
        "package_id": "tewhatuora.fhir.nzps",
        "version": "latest"
    },
    "build.fhir.org/ig/tewhatuora/fhir-primary-care-acquisition": {
        "package_id": "tewhatuora.fhir.primarycare-acquisition",
        "version": "current"
    },
    "build.fhir.org/ig/tewhatuora/fhir-nzps": {
        "package_id": "tewhatuora.fhir.nzps",
        "version": "current"
    },
    "fhir.org/guides/ohsuhypertensionig": {
        "package_id": "hl7.fhir.us.ohsuhypertensionig",
        "version": "latest"
    },
    "build.fhir.org/ig/OHSUCMP/htnu18ig": {
        "package_id": "hl7.fhir.us.ohsuhypertensionig",
        "version": "current"
    },
    "ihe-d.de/fhir": {
        "package_id": "ihe.de.iti.xds-vs",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE-Germany/ITI.XDS.VS": {
        "package_id": "ihe.de.iti.xds-vs",
        "version": "current"
    },
    "hl7.org.au/fhir": {
        "package_id": "hl7.fhir.au.base",
        "version": "latest"
    },
    "build.fhir.org/ig/robeastwood-agency/au-fhir-base": {
        "package_id": "hl7.fhir.au.base",
        "version": "current"
    },
    "hl7.org/fhir/smart-app-launch": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/smart-app-launch": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "current"
    },
    "hl7.org/fhir/smart-app-launch/2024Jan": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "2.2.0-ballot"
    },
    "hl7.org/fhir/smart-app-launch/STU2.1": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "2.1.0"
    },
    "hl7.org/fhir/smart-app-launch/2023Jan": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "2.1.0-ballot"
    },
    "hl7.org/fhir/smart-app-launch/STU2": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "2.0.0"
    },
    "hl7.org/fhir/smart-app-launch/2021May": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "1.1.0"
    },
    "hl7.org/fhir/smart-app-launch/1.0.0": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "1.0.0"
    },
    "hl7.org/fhir/smart-app-launch/0.8.0": {
        "package_id": "hl7.fhir.uv.smart-app-launch",
        "version": "0.8.0"
    },
    "fhir.ch/ig/ch-core": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-core": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "current"
    },
    "fhir.ch/ig/ch-core/4.0.1": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "4.0.1"
    },
    "fhir.ch/ig/ch-core/4.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "4.0.0-ballot"
    },
    "fhir.ch/ig/ch-core/3.0.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "3.0.0"
    },
    "fhir.ch/ig/ch-core/2.1.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "2.1.0"
    },
    "fhir.ch/ig/ch-core/2.0.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "2.0.0"
    },
    "fhir.ch/ig/ch-core/1.2.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "1.2.0"
    },
    "fhir.ch/ig/ch-core/1.0.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-core/0.1.0": {
        "package_id": "ch.fhir.ig.ch-core",
        "version": "0.1.0"
    },
    "healthintersections.com.au/fhir/playground": {
        "package_id": "hl7.fhir.uv.playground",
        "version": "latest"
    },
    "build.fhir.org/ig/HealthIntersections/fhir-playground": {
        "package_id": "hl7.fhir.uv.playground",
        "version": "current"
    },
    "ns.electronichealth.net.au/fhir/Template/adha.template.fhir": {
        "package_id": "adha.template.fhir",
        "version": "latest"
    },
    "build.fhir.org/ig/AuDigitalHealth/adha-template-fhir": {
        "package_id": "adha.template.fhir",
        "version": "current"
    },
    "ns.electronichealth.net.au/ci/fhir": {
        "package_id": "au.digitalhealth.stu3.medicare-records",
        "version": "latest"
    },
    "build.fhir.org/ig/AuDigitalHealth/ci-medicare-records": {
        "package_id": "au.digitalhealth.stu3.medicare-records",
        "version": "current"
    },
    "ns.electronichealth.net.au/fhir/Template/adha.template.base": {
        "package_id": "adha.template.base",
        "version": "latest"
    },
    "build.fhir.org/ig/AuDigitalHealth/adha-template-base": {
        "package_id": "adha.template.base",
        "version": "current"
    },
    "ns.electronichealth.net.au/fhir": {
        "package_id": "au.digitalhealth.r4",
        "version": "latest"
    },
    "build.fhir.org/ig/AuDigitalHealth/ci-fhir-r4": {
        "package_id": "au.digitalhealth.r4",
        "version": "current"
    },
    "hl7.org.au/fhir/pd": {
        "package_id": "hl7.fhir.au.pd",
        "version": "latest"
    },
    "build.fhir.org/ig/AuDigitalHealth/au-fhir-pd": {
        "package_id": "hl7.fhir.au.pd",
        "version": "current"
    },
    "smart.who.int/trust": {
        "package_id": "who.trust",
        "version": "latest"
    },
    "worldhealthorganization.github.io/smart-trust": {
        "package_id": "who.trust",
        "version": "current"
    },
    "smart.who.int/trust/1.0.0": {
        "package_id": "who.trust",
        "version": "1.0.0"
    },
    "hl7.it/fhir/dossierPharma": {
        "package_id": "hl7.fhir.it.dossierpharma",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-it/dossier-pharma": {
        "package_id": "hl7.fhir.it.dossierpharma",
        "version": "current"
    },
    "hl7.it/fhir": {
        "package_id": "hl7.fhir.it.base",
        "version": "latest"
    },
    "hl7.it/fhir/build/base": {
        "package_id": "hl7.fhir.it.base",
        "version": "current"
    },
    "hl7.it/fhir/base/2020-06": {
        "package_id": "hl7.fhir.it.base",
        "version": "0.1.0"
    },
    "terminology.hl7.it": {
        "package_id": "hl7.fhir.it.terminology",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-it/terminology": {
        "package_id": "hl7.fhir.it.terminology",
        "version": "current"
    },
    "hl7.it/fhir/lab-report": {
        "package_id": "hl7.fhir.it.lab-report",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-it/lab-report": {
        "package_id": "hl7.fhir.it.lab-report",
        "version": "current"
    },
    "hl7.it/fhir/lab-report/0.2.0": {
        "package_id": "hl7.fhir.it.lab-report",
        "version": "0.2.0"
    },
    "hl7.it/fhir/lab-report/0.1.0": {
        "package_id": "hl7.fhir.it.lab-report",
        "version": "0.1.0"
    },
    "fhir.org/guides/nachc/hiv-cds": {
        "package_id": "fhir.nachc.hiv-cds",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/hiv-cds": {
        "package_id": "fhir.nachc.hiv-cds",
        "version": "current"
    },
    "fhir.org/guides/cdc/opioid-cds": {
        "package_id": "fhir.cdc.opioid-cds-r4",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/opioid-cds-r4": {
        "package_id": "fhir.cdc.opioid-cds-r4",
        "version": "current"
    },
    "hl7.org/fhir/uv/cpg/opioids": {
        "package_id": "hl7.fhir.uv.cpg.opioids",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cpg-example-opioids": {
        "package_id": "hl7.fhir.uv.cpg.opioids",
        "version": "current"
    },
    "hl7.org/fhir/uv/cpg/hepb": {
        "package_id": "hl7.fhir.uv.cpg.hepb",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cpg-example-hepb": {
        "package_id": "hl7.fhir.uv.cpg.hepb",
        "version": "current"
    },
    "hl7.org/fhir/uv/cpg/anthrax": {
        "package_id": "hl7.fhir.uv.cpg.anthrax",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cpg-example-anthrax": {
        "package_id": "hl7.fhir.uv.cpg.anthrax",
        "version": "current"
    },
    "hl7.org/fhir/uv/cpg/antenatalcare": {
        "package_id": "hl7.fhir.uv.cpg.antenatalcare",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cpg-example-anc": {
        "package_id": "hl7.fhir.uv.cpg.antenatalcare",
        "version": "current"
    },
    "somewhere.org/fhir/uv/mycontentig": {
        "package_id": "example.fhir.uv.mycontentig",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/sample-content-ig": {
        "package_id": "example.fhir.uv.mycontentig",
        "version": "current"
    },
    "fhir.org/guides/cqf/cds4cpm": {
        "package_id": "cqf.fhir.cds4cpm",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cds4cpm": {
        "package_id": "cqf.fhir.cds4cpm",
        "version": "current"
    },
    "fhir.org/fhir/uv/cpg/ckd": {
        "package_id": "hl7.fhir.uv.cpg.ckd",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cpg-example-ckd": {
        "package_id": "hl7.fhir.uv.cpg.ckd",
        "version": "current"
    },
    "fhir.org/guides/cqf/us/common": {
        "package_id": "fhir.cqf.us.common",
        "version": "latest"
    },
    "build.fhir.org/ig/cqframework/cqf-us": {
        "package_id": "fhir.cqf.us.common",
        "version": "current"
    },
    "fhir.ch/ig/ch-emed-epr": {
        "package_id": "ch.fhir.ig.ch-emed-epr",
        "version": "latest"
    },
    "build.fhir.org/ig/CARA-ch/ch-emed-epr/": {
        "package_id": "ch.fhir.ig.ch-emed-epr",
        "version": "current"
    },
    "fhir.ch/ig/ch-emed-epr/1.0.0": {
        "package_id": "ch.fhir.ig.ch-emed-epr",
        "version": "1.0.0"
    },
    "hl7.eu/fhir/ig/gravitate-health": {
        "package_id": "hl7.eu.fhir.ghepi",
        "version": "latest"
    },
    "build.fhir.org/ig/Gravitate-Health/hackathon": {
        "package_id": "hl7.eu.fhir.gh",
        "version": "current"
    },
    "fhir.org/guides/hrsa/uds-plus": {
        "package_id": "fhir.hrsa.uds-plus",
        "version": "latest"
    },
    "build.fhir.org/ig/drajer-health/uds-plus": {
        "package_id": "fhir.hrsa.uds-plus",
        "version": "current"
    },
    "fhir.org/guides/hrsa/uds-plus/STU1": {
        "package_id": "fhir.hrsa.uds-plus",
        "version": "1.0.1"
    },
    "fhir.org/guides/who/anc-cds": {
        "package_id": "who.fhir.anc-cds",
        "version": "latest"
    },
    "build.fhir.org/ig/mozzy11/smart-hiv": {
        "package_id": "who.fhir.hiv",
        "version": "current"
    },
    "worldhealthorganization.github.io/smart-hiv": {
        "package_id": "who.fhir.hiv",
        "version": "latest"
    },
    "globalalliantinc.com/enhancing-oncology-model": {
        "package_id": "fhir.eom",
        "version": "latest"
    },
    "build.fhir.org/ig/FirelyTeam/enhancing-oncology-model-ig": {
        "package_id": "fhir.eom",
        "version": "current"
    },
    "chmed.emediplan.ch/fhir": {
        "package_id": "ch.chmed.emediplan",
        "version": "latest"
    },
    "build.fhir.org/ig/pjolo/test": {
        "package_id": "ch.chmed.emediplan",
        "version": "current"
    },
    "example.org": {
        "package_id": "hl7.fhir.us.medication-rems",
        "version": "latest"
    },
    "build.fhir.org/ig/pjolo/ExampleIG": {
        "package_id": "fhir.example",
        "version": "current"
    },
    "fhir.org/templates/hl7.at.fhir.template": {
        "package_id": "hl7.at.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7Austria/at-fhir-ig-template/": {
        "package_id": "hl7.at.fhir.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.at.fhir.template/0.4.0": {
        "package_id": "hl7.at.fhir.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.at.fhir.template/0.3.0": {
        "package_id": "hl7.at.fhir.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.at.fhir.template/0.2.0": {
        "package_id": "hl7.at.fhir.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.at.fhir.template/0.1.0": {
        "package_id": "hl7.at.fhir.template",
        "version": "0.1.0"
    },
    "fhir.org/templates/hl7.at.fhir.template/0.0.1": {
        "package_id": "hl7.at.fhir.template",
        "version": "0.0.1"
    },
    "mcodeinitiative.org/codex/us/patient.clinical.trial.matching": {
        "package_id": "patient.clinical.trial.matching",
        "version": "latest"
    },
    "build.fhir.org/ig/standardhealth/fsh-pct": {
        "package_id": "patient.clinical.trial.matching",
        "version": "current"
    },
    "hl7.org/fhir/us/ctcae": {
        "package_id": "hl7.fhir.us.ctcae",
        "version": "latest"
    },
    "build.fhir.org/ig/standardhealth/fsh-ae": {
        "package_id": "hl7.fhir.us.ctcae",
        "version": "current"
    },
    "aehrc.csiro.au/fhir/logical-models": {
        "package_id": "au.csiro.fhir.logical-models",
        "version": "latest"
    },
    "build.fhir.org/ig/aehrc/logical-model-web": {
        "package_id": "au.csiro.fhir.logical-models",
        "version": "current"
    },
    "smartforms.csiro.au/ig": {
        "package_id": "csiro.fhir.au.smartforms",
        "version": "latest"
    },
    "build.fhir.org/ig/aehrc/smart-forms-ig/": {
        "package_id": "csiro.fhir.au.smartforms",
        "version": "current"
    },
    "smartforms.csiro.au/ig/0.1.0-draft": {
        "package_id": "csiro.fhir.au.smartforms",
        "version": "0.1.0-draft"
    },
    "build.fhir.org/ig/IntelliSOFT-Consulting/Kenya-core-FHIR-IG": {
        "package_id": "fhir.kenyaCoreIG",
        "version": "current"
    },
    "build.fhir.org/ig/IntelliSOFT-Consulting/mamaToTo-FHIR-IG": {
        "package_id": "fhir.mamaToto",
        "version": "current"
    },
    "build.fhir.org/ig/IntelliSOFT-Consulting/ChanjoKe-fhir-ig": {
        "package_id": "fhir.chanjoKe",
        "version": "current"
    },
    "hl7chile.cl/fhir/ig/clcore": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7Chile/clcore": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "current"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.10": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.10"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.6": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.6"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.5": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.5"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.4": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.4"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.2": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.2"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.1": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.1"
    },
    "hl7chile.cl/fhir/ig/clcore/1.8.0": {
        "package_id": "hl7.fhir.cl.clcore",
        "version": "1.8.0"
    },
    "johnmoehrke.github.io/testDicom": {
        "package_id": "johnmoehrke.testdicom.example",
        "version": "latest"
    },
    "build.fhir.org/ig/JohnMoehrke/testDicom": {
        "package_id": "johnmoehrke.testdicom.example",
        "version": "current"
    },
    "johnmoehrke.github.io/RelatedPersonConsent": {
        "package_id": "johnmoehrke.relatedpersonconsent.example",
        "version": "latest"
    },
    "build.fhir.org/ig/JohnMoehrke/RelatedPersonConsent": {
        "package_id": "johnmoehrke.relatedpersonconsent.example",
        "version": "current"
    },
    "johnmoehrke.github.io/testcore": {
        "package_id": "johnmoehrke.testcore.example",
        "version": "latest"
    },
    "build.fhir.org/ig/JohnMoehrke/testCore": {
        "package_id": "johnmoehrke.testcore.example",
        "version": "current"
    },
    "johnmoehrke.github.io/testmed": {
        "package_id": "johnmoehrke.testmed.example",
        "version": "latest"
    },
    "build.fhir.org/ig/JohnMoehrke/testMed": {
        "package_id": "johnmoehrke.testmed.example",
        "version": "current"
    },
    "github.com/mojitoj/ASU-research-consent-on-FHIR": {
        "package_id": "fhir.asu.consent-validation",
        "version": "latest"
    },
    "build.fhir.org/ig/mojitoj/ASU-research-consent-on-FHIR": {
        "package_id": "fhir.asu.consent-validation",
        "version": "current"
    },
    "department-of-veterans-affairs.github.io/mhv-fhir-phr-mapping": {
        "package_id": "va.mhv.fhir.phr",
        "version": "latest"
    },
    "build.fhir.org/ig/department-of-veterans-affairs/mhv-fhir-phr-mapping": {
        "package_id": "va.mhv.fhir.phr",
        "version": "current"
    },
    "electronichealth.se/fhir/katalog": {
        "package_id": "ehalsomyndigheten.se.katalog",
        "version": "latest"
    },
    "build.fhir.org/ig/danka74/VOKIG": {
        "package_id": "ehalsomyndigheten.se.katalog",
        "version": "current"
    },
    "hl7.eu/fhir/laboratory": {
        "package_id": "hl7.fhir.eu.laboratory",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/laboratory": {
        "package_id": "nl.santeon.sim.r4",
        "version": "current"
    },
    "hl7.eu/fhir/laboratory/0.1.0": {
        "package_id": "nl.santeon.sim.r4",
        "version": "0.1.0"
    },
    "hl7.eu/fhir/laboratory/0.1.0-ballot": {
        "package_id": "nl.santeon.sim.r4",
        "version": "0.1.0-ballot"
    },
    "sim.santeon.nl": {
        "package_id": "nl.santeon.sim.r4",
        "version": "latest"
    },
    "hl7.org/cda/stds/core": {
        "package_id": "hl7.cda.uv.core",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/CDA-core-sd/": {
        "package_id": "hl7.cda.uv.core",
        "version": "current"
    },
    "hl7.org/cda/stds/core/2.0.0-sd-snapshot1": {
        "package_id": "hl7.cda.uv.core",
        "version": "2.0.0-sd-snapshot1"
    },
    "hl7.org/cda/stds/core/2023Sep": {
        "package_id": "hl7.cda.uv.core",
        "version": "2.0.0-sd-ballot"
    },
    "hl7.org/cda/stds/core/draft1": {
        "package_id": "hl7.cda.uv.core",
        "version": "2.1.0-draft1"
    },
    "fhir.ch/ig/ch-elm": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "latest"
    },
    "build.fhir.org/ig/ahdis/ch-elm/index.html": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "current"
    },
    "fhir.ch/ig/ch-elm/1.2.0": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "1.2.0"
    },
    "fhir.ch/ig/ch-elm/1.1.1": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "1.1.1"
    },
    "fhir.ch/ig/ch-elm/1.1.0": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "1.1.0"
    },
    "fhir.ch/ig/ch-elm/1.0.0": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-elm/1.0.0-trialuse": {
        "package_id": "ch.fhir.ig.ch-elm",
        "version": "1.0.0-trialuse"
    },
    "commonprofiles.care/fhir": {
        "package_id": "care.commonprofiles.fhir",
        "version": "latest"
    },
    "build.fhir.org/ig/commonprofiles-care/fhir/branches/master": {
        "package_id": "elga.iv.hi",
        "version": "current"
    },
    "commonprofiles.care/fhir/1.0.1": {
        "package_id": "elga.iv.hi",
        "version": "1.0.1"
    },
    "commonprofiles.care/fhir/1.0.0": {
        "package_id": "elga.iv.hi",
        "version": "1.0.0"
    },
    "fhir.health.gov.il": {
        "package_id": "health.gov.il.fhir.core",
        "version": "latest"
    },
    "hi.iv.elga.gv.at": {
        "package_id": "elga.iv.hi",
        "version": "latest"
    },
    "somewhere.org/fhir/uv/myig": {
        "package_id": "example.fhir.uv.myig",
        "version": "latest"
    },
    "build.fhir.org/ig/mburwit/RiskAssessment": {
        "package_id": "example.fhir.uv.myig",
        "version": "current"
    },
    "fhir.ch/ig/ch-vacd": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-vacd": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "current"
    },
    "fhir.ch/ig/ch-vacd/4.0.1": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "4.0.1"
    },
    "fhir.ch/ig/ch-vacd/4.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "4.0.0-ballot"
    },
    "fhir.ch/ig/ch-vacd/3.0.0": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "3.0.0"
    },
    "fhir.ch/ig/ch-vacd/2.1.0": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "2.1.0"
    },
    "fhir.ch/ig/ch-vacd/2.0.0": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "2.0.0"
    },
    "fhir.ch/ig/ch-vacd/1.0.0": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-vacd/0.1.0": {
        "package_id": "ch.fhir.ig.ch-vacd",
        "version": "0.1.0"
    },
    "fhir.ch/ig/ch-lab-report": {
        "package_id": "ch.fhir.ig.ch-lab-report",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-lab-report": {
        "package_id": "ch.fhir.ig.ch-lab-report",
        "version": "current"
    },
    "fhir.ch/ig/ch-lab-report/0.1.1": {
        "package_id": "ch.fhir.ig.ch-lab-report",
        "version": "0.1.1"
    },
    "fhir.ch/ig/ch-etoc": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-etoc": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "current"
    },
    "fhir.ch/ig/ch-etoc/2.0.1": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "2.0.1"
    },
    "fhir.ch/ig/ch-etoc/2.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "2.0.0-ballot"
    },
    "fhir.ch/ig/ch-etoc/1.0.0": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-etoc/0.1.0": {
        "package_id": "ch.fhir.ig.ch-etoc",
        "version": "0.1.0"
    },
    "fhir.ch/ig/ch-emed": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-emed": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "current"
    },
    "fhir.ch/ig/ch-emed/4.0.1": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "4.0.1"
    },
    "fhir.ch/ig/ch-emed/4.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "4.0.0-ballot"
    },
    "fhir.ch/ig/ch-emed/3.0.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "3.0.0"
    },
    "fhir.ch/ig/ch-emed/2.1.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "2.1.0"
    },
    "fhir.ch/ig/ch-emed/2.0.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "2.0.0"
    },
    "fhir.ch/ig/ch-emed/1.0.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-emed/0.2.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "0.2.0"
    },
    "fhir.ch/ig/ch-emed/0.1.1": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "0.1.1"
    },
    "fhir.ch/ig/ch-emed/0.1.0": {
        "package_id": "ch.fhir.ig.ch-emed",
        "version": "0.1.0"
    },
    "fhir.ch/ig/ch-lab-order": {
        "package_id": "ch.fhir.ig.ch-lab-order",
        "version": "1.0.0"
    },
    "build.fhir.org/ig/hl7ch/ch-lab-order": {
        "package_id": "ch.fhir.ig.ch-lab-order",
        "version": "current"
    },
    "fhir.ch/ig/ch-lab-order/2.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-lab-order",
        "version": "2.0.0-ballot"
    },
    "fhir.ch/ig/ch-lab-order/0.1.0": {
        "package_id": "ch.fhir.ig.ch-lab-order",
        "version": "0.1.0"
    },
    "fhir.ch/ig/template": {
        "package_id": "ch.fhir.ig.template",
        "version": "0.6.0"
    },
    "build.fhir.org/ig/hl7ch/template": {
        "package_id": "ch.fhir.ig.template",
        "version": "current"
    },
    "fhir.ch/ig/ch-rad-order": {
        "package_id": "ch.fhir.ig.ch-rad-order",
        "version": "1.0.0"
    },
    "build.fhir.org/ig/hl7ch/ch-rad-order": {
        "package_id": "ch.fhir.ig.ch-rad-order",
        "version": "current"
    },
    "fhir.ch/ig/ch-rad-order/0.1.0": {
        "package_id": "ch.fhir.ig.ch-rad-order",
        "version": "0.1.0"
    },
    "fhir.ch/ig/ch-allergyintolerance": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-allergyintolerance": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "current"
    },
    "fhir.ch/ig/ch-allergyintolerance/2.0.1": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "2.0.1"
    },
    "fhir.ch/ig/ch-allergyintolerance/2.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "2.0.0-ballot"
    },
    "fhir.ch/ig/ch-allergyintolerance/1.0.0": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-allergyintolerance/0.2.0": {
        "package_id": "ch.fhir.ig.ch-allergyintolerance",
        "version": "0.2.0"
    },
    "fhir.ch/ig/ch-orf": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-orf": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "current"
    },
    "fhir.ch/ig/ch-orf/2.0.1": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "2.0.1"
    },
    "fhir.ch/ig/ch-orf/2.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "2.0.0-ballot"
    },
    "fhir.ch/ig/ch-orf/1.0.0": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-orf/0.10.0": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "0.10.0"
    },
    "fhir.ch/ig/ch-orf/0.9.1": {
        "package_id": "ch.fhir.ig.ch-orf",
        "version": "0.9.1"
    },
    "fhir.ch/ig/ch-epr-term": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7ch/ch-epr-term": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "current"
    },
    "fhir.ch/ig/ch-epr-term/2.0.10": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.10"
    },
    "fhir.ch/ig/ch-epr-term/2.0.9": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.9"
    },
    "fhir.ch/ig/ch-epr-term/2.0.8": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.8"
    },
    "fhir.ch/ig/ch-epr-term/2.0.7": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.7"
    },
    "fhir.ch/ig/ch-epr-term/2.0.6": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.6"
    },
    "fhir.ch/ig/ch-epr-term/2.0.5": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.5"
    },
    "fhir.ch/ig/ch-epr-term/2.0.4": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.4"
    },
    "fhir.ch/ig/ch-epr-term/2.0.3": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.3"
    },
    "fhir.ch/ig/ch-epr-term/2.0.2": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.2"
    },
    "fhir.ch/ig/ch-epr-term/2.0.1": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.1"
    },
    "fhir.ch/ig/ch-epr-term/2.0.0": {
        "package_id": "ch.fhir.ig.ch-epr-term",
        "version": "2.0.0"
    },
    "smart.who.int/ddcc": {
        "package_id": "who.ddcc",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/ddcc": {
        "package_id": "who.ddcc",
        "version": "current"
    },
    "smart.who.int/ips-pilgrimage": {
        "package_id": "who.ips-pilgrimage",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-ips-pilgrimage": {
        "package_id": "who.ips-pilgrimage",
        "version": "current"
    },
    "smart.who.int/immunizations-measles": {
        "package_id": "smart.who.int.immunizations-measles",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-immunizations-measles": {
        "package_id": "smart.who.int.immunizations-measles",
        "version": "current"
    },
    "worldhealthorganization.github.io/smart": {
        "package_id": "who.fhir.smart-measles-catopia",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-tuberculosis": {
        "package_id": "who.fhir.smart-ig-empty",
        "version": "current"
    },
    "smart.who.int/ig/smart-ig-starter-kit": {
        "package_id": "who.fhir.smart-ig-starter-kit",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-ig-starter-kit": {
        "package_id": "who.fhir.smart-ig-starter-kit",
        "version": "current"
    },
    "worldhealthorganization.github.io/smart-ot": {
        "package_id": "fhir.worldhealthorganization.smart-ot",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-ot": {
        "package_id": "fhir.worldhealthorganization.smart-ot",
        "version": "current"
    },
    "worldhealthorganization.github.io/smart-base": {
        "package_id": "who.fhir.smart-base",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-base": {
        "package_id": "who.base",
        "version": "current"
    },
    "smart.who.int/base": {
        "package_id": "who.base",
        "version": "latest"
    },
    "github.com/WorldHealthOrganization/smart-ig-template-who": {
        "package_id": "who.template.root",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-ig-template-who": {
        "package_id": "who.template.root",
        "version": "current"
    },
    "smart.who.int/ig/smart-immunizations": {
        "package_id": "who.fhir.immunization",
        "version": "latest"
    },
    "build.fhir.org/ig/WorldHealthOrganization/smart-immunizations": {
        "package_id": "who.fhir.immunization",
        "version": "current"
    },
    "fhir.nhs.uk/England": {
        "package_id": "uk.nhs.england",
        "version": "latest"
    },
    "build.fhir.org/ig/NHSDigital/interoperability-standards-experimental": {
        "package_id": "uk.nhs.england",
        "version": "current"
    },
    "hl7.nl/fhir/mdt-viewer": {
        "package_id": "hl7.fhir.nl.mdt",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7nl/regional-mdt-ig": {
        "package_id": "hl7.fhir.nl.mdt",
        "version": "current"
    },
    "fhir.ch/ig/ch-epr-mhealth": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "latest"
    },
    "build.fhir.org/ig/ehealthsuisse/ch-epr-mhealth": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "current"
    },
    "fhir.ch/ig/ch-epr-mhealth/3.0.0": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "3.0.0"
    },
    "fhir.ch/ig/ch-epr-mhealth/3.0.0-ballot": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "3.0.0-ballot"
    },
    "fhir.ch/ig/ch-epr-mhealth/1.1.0": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "1.1.0"
    },
    "fhir.ch/ig/ch-epr-mhealth/1.0.0": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "1.0.0"
    },
    "fhir.ch/ig/ch-epr-mhealth/0.2.0": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "0.2.0"
    },
    "fhir.ch/ig/ch-epr-mhealth/0.1.2": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "0.1.2"
    },
    "fhir.ch/ig/ch-epr-mhealth/0.1.1": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "0.1.1"
    },
    "fhir.ch/ig/ch-epr-mhealth/0.1.0": {
        "package_id": "ch.fhir.ig.ch-epr-mhealth",
        "version": "0.1.0"
    },
    "hl7.org.nz/fhir": {
        "package_id": "fhir.org.nz.ig.base",
        "version": "latest"
    },
    "build.fhir.org/ig/acc-fhir-publisher/icp": {
        "package_id": "hl7.org.nz.fhir.ig.icp",
        "version": "current"
    },
    "hl7.fi/fhir/finnish-base-profiles": {
        "package_id": "hl7.fhir.fi.base",
        "version": "latest"
    },
    "fhir.fi/finnish-base-profiles/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "current"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0.0": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0.0-rc24": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc24"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc23": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc23"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc22": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc22"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc21": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc21"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc20": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc20"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc19": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc19"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc18": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc18"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0.0-rc17": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc17"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc15/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc15"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc11/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc11"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc2/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc2"
    },
    "hl7.fi/fhir/finnish-base-profiles/1.0-rc1/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "1.0.0-rc1"
    },
    "hl7.fi/fhir/finnish-base-profiles/0.6/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "0.6.0"
    },
    "hl7.fi/fhir/finnish-base-profiles/0.5/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "0.5.0"
    },
    "hl7.fi/fhir/finnish-base-profiles/0.4/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "0.4.0"
    },
    "hl7.fi/fhir/finnish-base-profiles/0.3/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "0.3.0"
    },
    "hl7.fi/fhir/finnish-base-profiles/0.2/": {
        "package_id": "hl7.fhir.fi.base",
        "version": "0.2.0"
    },
    "canshare.co.nz/fhir": {
        "package_id": "actnow.canshare.co.nz",
        "version": "latest"
    },
    "build.fhir.org/ig/davidhay25/actnow": {
        "package_id": "actnow.canshare.co.nz",
        "version": "current"
    },
    "hl7.org/fhir/uv/epi-test": {
        "package_id": "hl7.fhir.uv.epi-test",
        "version": "latest"
    },
    "build.fhir.org/ig/cander2/epi-test": {
        "package_id": "hl7.fhir.uv.epi-test",
        "version": "current"
    },
    "sequoiaproject.org/fhir/push-r4": {
        "package_id": "sequoiaproject.fhir.us.pushnotifications",
        "version": "latest"
    },
    "build.fhir.org/ig/Carequality/CEQSubscription": {
        "package_id": "sequoiaproject.fhir.us.pushnotifications",
        "version": "current"
    },
    "github.com/Carequality/ig-template-carequality": {
        "package_id": "fhir.carequality.template",
        "version": "latest"
    },
    "build.fhir.org/ig/Carequality/ig-template-carequality": {
        "package_id": "fhir.carequality.template",
        "version": "current"
    },
    "snomed.info/fhir": {
        "package_id": "snomed-ig",
        "version": "latest"
    },
    "build.fhir.org/ig/IHTSDO/snomed-ig": {
        "package_id": "snomed-ig",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/vaccination": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/vaccination": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/vaccination/1.0.3": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "1.0.3"
    },
    "ehealth.fgov.be/standards/fhir/vaccination/1.0.2": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "1.0.2"
    },
    "ehealth.fgov.be/standards/fhir/vaccination/1.0.1": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "1.0.1"
    },
    "ehealth.fgov.be/standards/fhir/vaccination/1.0.0": {
        "package_id": "hl7.fhir.be.vaccination",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/infsec": {
        "package_id": "hl7.fhir.be.infsec",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/infsec": {
        "package_id": "hl7.fhir.be.infsec",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/infsec/1.1.0": {
        "package_id": "hl7.fhir.be.infsec",
        "version": "1.1.0"
    },
    "ehealth.fgov.be/standards/fhir/infsec/1.0.0": {
        "package_id": "hl7.fhir.be.infsec",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/public-health": {
        "package_id": "hl7.fhir.be.public-health",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/public-health": {
        "package_id": "hl7.fhir.be.public-health",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/public-health/1.0.2": {
        "package_id": "hl7.fhir.be.public-health",
        "version": "1.0.2"
    },
    "ehealth.fgov.be/standards/fhir/public-health/1.0.1": {
        "package_id": "hl7.fhir.be.public-health",
        "version": "1.0.1"
    },
    "ehealth.fgov.be/standards/fhir/public-health/1.0.0": {
        "package_id": "hl7.fhir.be.public-health",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/nihdi-terminology": {
        "package_id": "hl7.fhir.be.nihdi-terminology",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/nihdi-terminology": {
        "package_id": "hl7.fhir.be.nihdi-terminology",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/allergy": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/allergy": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/allergy/1.2.0": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "1.2.0"
    },
    "ehealth.fgov.be/standards/fhir/allergy/1.1.0": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "1.1.0"
    },
    "ehealth.fgov.be/standards/fhir/allergy/1.0.1": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "1.0.1"
    },
    "ehealth.fgov.be/standards/fhir/allergy/1.0.0": {
        "package_id": "hl7.fhir.be.allergy",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/eattestation": {
        "package_id": "hl7.fhir.be.eattestation",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/eattestation": {
        "package_id": "hl7.fhir.be.eattestation",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/lab": {
        "package_id": "hl7.fhir.be.lab",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/lab": {
        "package_id": "hl7.fhir.be.lab",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/lab/1.0.0": {
        "package_id": "hl7.fhir.be.lab",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/patientwill": {
        "package_id": "hl7.fhir.be.patientwill",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/patientwill": {
        "package_id": "hl7.fhir.be.patientwill",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/patientwill/1.0.0": {
        "package_id": "hl7.fhir.be.patientwill",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/mycarenet": {
        "package_id": "hl7.fhir.be.mycarenet",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/mycarenet": {
        "package_id": "hl7.fhir.be.mycarenet",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/mycarenet/2.0.0": {
        "package_id": "hl7.fhir.be.mycarenet",
        "version": "2.0.0"
    },
    "ehealth.fgov.be/standards/fhir/medication": {
        "package_id": "hl7.fhir.be.medication",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/medication": {
        "package_id": "hl7.fhir.be.medication",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/medication/1.0.0": {
        "package_id": "hl7.fhir.be.medication",
        "version": "1.0.0"
    },
    "hl7belgium.org/fhir/riziv-medicationrecord": {
        "package_id": "hl7.fhir.be.riziv-medicationrecord",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/medication-record": {
        "package_id": "hl7.fhir.be.riziv-medicationrecord",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/core-clinical": {
        "package_id": "hl7.fhir.be.core-clinical",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/core-clinical": {
        "package_id": "hl7.fhir.be.core-clinical",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/core-clinical/1.0.0": {
        "package_id": "hl7.fhir.be.core-clinical",
        "version": "1.0.0"
    },
    "ehealth.fgov.be/standards/fhir/etariff": {
        "package_id": "hl7.fhir.be.etariff",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/etariff": {
        "package_id": "hl7.fhir.be.etariff",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/core": {
        "package_id": "hl7.fhir.be.core",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/core": {
        "package_id": "hl7.fhir.be.core",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/core/2.0.1": {
        "package_id": "hl7.fhir.be.core",
        "version": "2.0.1"
    },
    "ehealth.fgov.be/standards/fhir/core/2.0.0": {
        "package_id": "hl7.fhir.be.core",
        "version": "2.0.0"
    },
    "ehealth.fgov.be/standards/fhir/referral": {
        "package_id": "hl7.fhir.be.referral",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/referral": {
        "package_id": "hl7.fhir.be.referral",
        "version": "current"
    },
    "github.com/HL7/ig-template-fhir": {
        "package_id": "hl7.be.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/hl7.be.fhir.template": {
        "package_id": "hl7.be.fhir.template",
        "version": "current"
    },
    "ehealth.fgov.be/standards/fhir/capabilities": {
        "package_id": "hl7.fhir.be.capabilities",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-be/capabilities": {
        "package_id": "hl7.fhir.be.capabilities",
        "version": "current"
    },
    "fhir.kl.dk/gateway": {
        "package_id": "kl.dk.fhir.gateway",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7dk/kl-gateway/branches/main/": {
        "package_id": "kl.dk.fhir.gateway",
        "version": "current"
    },
    "fhir.kl.dk/gateway/1.1.0": {
        "package_id": "kl.dk.fhir.gateway",
        "version": "1.1.0"
    },
    "hl7.dk/fhir/core": {
        "package_id": "hl7.fhir.dk.core",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7dk/dk-core": {
        "package_id": "hl7.fhir.dk.core",
        "version": "current"
    },
    "hl7.dk/fhir/core/3.1.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "3.1.0"
    },
    "hl7.dk/fhir/core/3.0.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "3.0.0"
    },
    "hl7.dk/fhir/core/2.2.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "2.2.0"
    },
    "hl7.dk/fhir/core/2.1.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "2.1.0"
    },
    "hl7.dk/fhir/core/2.0.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "2.0.0"
    },
    "hl7.dk/fhir/core/1.1.0": {
        "package_id": "hl7.fhir.dk.core",
        "version": "1.1.0"
    },
    "fhir.kl.dk/children": {
        "package_id": "kl.dk.fhir.children",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7dk/kl-children/": {
        "package_id": "kl.dk.fhir.children",
        "version": "current"
    },
    "fhir.kl.dk/children/1.0.0": {
        "package_id": "kl.dk.fhir.children",
        "version": "1.0.0"
    },
    "paho.org/fhir/esavi": {
        "package_id": "uv.esavi",
        "version": "latest"
    },
    "build.fhir.org/ig/PanAmericanHealthOrganization/ESAVI-IG-FHIR": {
        "package_id": "uv.esavi",
        "version": "current"
    },
    "paho.org/fhir/giis": {
        "package_id": "fhir.giis",
        "version": "latest"
    },
    "build.fhir.org/ig/cens-chile/giis_fhir_IG": {
        "package_id": "fhir.giis",
        "version": "current"
    },
    "build.fhir.org/ig/DigitalSQR/catopia-measles": {
        "package_id": "who.fhir.smart-measles-catopia",
        "version": "current"
    },
    "idmp.who-umc.org/fhir": {
        "package_id": "idmp.who-umc.org.fhir",
        "version": "latest"
    },
    "build.fhir.org/ig/Uppsala-Monitoring-Centre/WHO-UMC-IDMP-Service": {
        "package_id": "idmp.who-umc.org.fhir",
        "version": "current"
    },
    "mitre.org/gdx": {
        "package_id": "fhir.gdx",
        "version": "latest"
    },
    "build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/GenomeX-DataExchange": {
        "package_id": "fhir.gdx",
        "version": "current"
    },
    "mitre.org/mcodelite": {
        "package_id": "fhir.mcodelite",
        "version": "latest"
    },
    "build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/mcode-eom": {
        "package_id": "fhir.mcodelite",
        "version": "current"
    },
    "mitre.org/mcodefh": {
        "package_id": "fhir.mcodefh",
        "version": "latest"
    },
    "build.fhir.org/ig/CodeX-HL7-FHIR-Accelerator/mcode-lite": {
        "package_id": "fhir.mcodefh",
        "version": "current"
    },
    "fhir.fabrica.inf.ufg.br/ccu": {
        "package_id": "ccu",
        "version": "latest"
    },
    "build.fhir.org/ig/kyriosdata/farol": {
        "package_id": "ccu",
        "version": "current"
    },
    "profiles.ihe.net/QRPH/CCG": {
        "package_id": "ihe.qrph.ccg",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/QRPH.CCG": {
        "package_id": "ihe.qrph.ccg",
        "version": "current"
    },
    "profiles.ihe.net/PHARM/MEOW": {
        "package_id": "ihe.pharm.meow",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/pharm-meow": {
        "package_id": "ihe.pharm.meow",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PMIR": {
        "package_id": "ihe.iti.pmir",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.PMIR/branches/master/index.html": {
        "package_id": "ihe.iti.pmir",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PMIR/1.5.0": {
        "package_id": "ihe.iti.pmir",
        "version": "1.5.0"
    },
    "profiles.ihe.net/ITI/PMIR/1.4.0": {
        "package_id": "ihe.iti.pmir",
        "version": "1.4.0"
    },
    "ihe.net/wp-content/uploads/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PMIR_Rev1-3_TI_2020-12-11.pdf": {
        "package_id": "ihe.iti.pmir",
        "version": "1.3.0"
    },
    "profiles.ihe.net/ITI/SVCM": {
        "package_id": "ihe.iti.svcm",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.SVCM": {
        "package_id": "ihe.iti.svcm",
        "version": "current"
    },
    "profiles.ihe.net/ITI/SVCM/1.5.1": {
        "package_id": "ihe.iti.svcm",
        "version": "1.5.1"
    },
    "profiles.ihe.net/ITI/SVCM/1.5.0": {
        "package_id": "ihe.iti.svcm",
        "version": "1.5.0"
    },
    "profiles.ihe.net/ITI/SVCM/1.4.0": {
        "package_id": "ihe.iti.svcm",
        "version": "1.4.0"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_SVCM_Rev1-3_TI_2022-06-17.pdf": {
        "package_id": "ihe.iti.svcm",
        "version": "1.3.0"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir": {
        "package_id": "ihe.formatcode.fhir",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/FormatCode": {
        "package_id": "ihe.formatcode.fhir",
        "version": "current"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/1.2.0": {
        "package_id": "ihe.formatcode.fhir",
        "version": "1.2.0"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/1.1.1": {
        "package_id": "ihe.formatcode.fhir",
        "version": "1.1.1"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/1.1.0": {
        "package_id": "ihe.formatcode.fhir",
        "version": "1.1.0"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/1.0.0": {
        "package_id": "ihe.formatcode.fhir",
        "version": "1.0.0"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/0.2.4": {
        "package_id": "ihe.formatcode.fhir",
        "version": "0.2.4"
    },
    "profiles.ihe.net/fhir/ihe.formatcode.fhir/0.2.2": {
        "package_id": "ihe.formatcode.fhir",
        "version": "0.2.2"
    },
    "profiles.ihe.net/PHARM/ihe.pharm.mpd": {
        "package_id": "ihe.pharm.mpd",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/pharm-mpd": {
        "package_id": "ihe.pharm.mpd",
        "version": "current"
    },
    "profiles.ihe.net/ITI/Scheduling": {
        "package_id": "ihe.iti.scheduling",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.Scheduling": {
        "package_id": "ihe.iti.scheduling",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PCF": {
        "package_id": "ihe.iti.pcf",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.PCF/branches/master/index.html": {
        "package_id": "ihe.iti.pcf",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PCF/1.1.0": {
        "package_id": "ihe.iti.pcf",
        "version": "1.1.0"
    },
    "profiles.ihe.net/ITI/PCF/1.0.0": {
        "package_id": "ihe.iti.pcf",
        "version": "1.0.0"
    },
    "profiles.ihe.net/ITI/PCF/1.0.0-comment": {
        "package_id": "ihe.iti.pcf",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/RAD/IRA": {
        "package_id": "ihe.rad.ira",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/RAD.IRA/branches/master/index.html": {
        "package_id": "ihe.rad.ira",
        "version": "current"
    },
    "profiles.ihe.net/RAD/IRA/1.0.0": {
        "package_id": "ihe.rad.ira",
        "version": "1.0.0"
    },
    "profiles.ihe.net/RAD/IRA/1.0.0-comment": {
        "package_id": "ihe.rad.ira",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/PCC/QEDm": {
        "package_id": "ihe.pcc.qedm",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/QEDm": {
        "package_id": "ihe.pcc.qedm",
        "version": "current"
    },
    "profiles.ihe.net/Domain/Profile": {
        "package_id": "ihe.domain.profile",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/supplement-template": {
        "package_id": "ihe.domain.profile",
        "version": "current"
    },
    "profiles.ihe.net/ITI/MHD": {
        "package_id": "ihe.iti.mhd",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.MHD": {
        "package_id": "ihe.iti.mhd",
        "version": "current"
    },
    "profiles.ihe.net/ITI/MHD/4.2.1": {
        "package_id": "ihe.iti.mhd",
        "version": "4.2.1"
    },
    "profiles.ihe.net/ITI/MHD/4.2.0": {
        "package_id": "ihe.iti.mhd",
        "version": "4.2.0"
    },
    "profiles.ihe.net/ITI/MHD/4.2.0-ballot": {
        "package_id": "ihe.iti.mhd",
        "version": "4.2.0-ballot"
    },
    "profiles.ihe.net/ITI/MHD/4.1.0": {
        "package_id": "ihe.iti.mhd",
        "version": "4.1.0"
    },
    "profiles.ihe.net/ITI/MHD/4.0.2": {
        "package_id": "ihe.iti.mhd",
        "version": "4.0.2"
    },
    "profiles.ihe.net/ITI/MHD/4.0.1": {
        "package_id": "ihe.iti.mhd",
        "version": "4.0.1"
    },
    "profiles.ihe.net/ITI/MHD/4.0.0": {
        "package_id": "ihe.iti.mhd",
        "version": "4.0.0-comment"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHD_Rev3-2_TI_2020-08-28.pdf": {
        "package_id": "ihe.iti.mhd",
        "version": "3.2.0"
    },
    "profiles.ihe.net/ITI/PDQm": {
        "package_id": "ihe.iti.pdqm",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.PDQm/branches/main": {
        "package_id": "ihe.iti.pdqm",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PDQm/3.0.0": {
        "package_id": "ihe.iti.pdqm",
        "version": "3.0.0"
    },
    "profiles.ihe.net/ITI/PDQm/3.0.0-comment": {
        "package_id": "ihe.iti.pdqm",
        "version": "3.0.0-comment"
    },
    "profiles.ihe.net/ITI/PDQm/2.4.0": {
        "package_id": "ihe.iti.pdqm",
        "version": "2.4.0"
    },
    "profiles.ihe.net/ITI/PDQm/2.3.0": {
        "package_id": "ihe.iti.pdqm",
        "version": "2.3.0"
    },
    "profiles.ihe.net/ITI/PDQm/2.2.1": {
        "package_id": "ihe.iti.pdqm",
        "version": "2.2.1"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PDQm_Rev2-2_TI_2020-08-28.pdf": {
        "package_id": "ihe.iti.pdqm",
        "version": "2.2.0"
    },
    "profiles.ihe.net/QRPH/bfdr": {
        "package_id": "ihe.qrph.bfdr",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/fhir-bfdr": {
        "package_id": "ihe.qrph.bfdr",
        "version": "current"
    },
    "profiles.ihe.net/PCC/EMS-Overall": {
        "package_id": "ihe.pcc.ems-overall",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/EMS-Overall": {
        "package_id": "ihe.pcc.ems-overall",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PIXm": {
        "package_id": "ihe.iti.pixm",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.PIXm": {
        "package_id": "ihe.iti.pixm",
        "version": "current"
    },
    "profiles.ihe.net/ITI/PIXm/3.0.4": {
        "package_id": "ihe.iti.pixm",
        "version": "3.0.4"
    },
    "profiles.ihe.net/ITI/PIXm/3.0.3": {
        "package_id": "ihe.iti.pixm",
        "version": "3.0.3"
    },
    "profiles.ihe.net/ITI/PIXm/3.0.2": {
        "package_id": "ihe.iti.pixm",
        "version": "3.0.2"
    },
    "profiles.ihe.net/ITI/PIXm/3.0.0": {
        "package_id": "ihe.iti.pixm",
        "version": "3.0.0"
    },
    "profiles.ihe.net/ITI/PIXm/2.2.0": {
        "package_id": "ihe.iti.pixm",
        "version": "2.2.0"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_PIXm_Rev2-1_TI_2019-12-05.pdf": {
        "package_id": "ihe.iti.pixm",
        "version": "2.1.0"
    },
    "profiles.ihe.net/PCC/PCS": {
        "package_id": "ihe.pcc.pcs",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/PCC.PCS": {
        "package_id": "ihe.pcc.pcs",
        "version": "current"
    },
    "profiles.ihe.net/PCC/ODH": {
        "package_id": "ihe.pcc.odh",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/PCC.ODH/branches/master/index.html": {
        "package_id": "ihe.pcc.odh",
        "version": "current"
    },
    "profiles.ihe.net/PCC/ODH/1.0.0-comment": {
        "package_id": "ihe.pcc.odh",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/ITI/DSUBm": {
        "package_id": "ihe.iti.dsubm",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.DSUBm/branches/master/index.html": {
        "package_id": "ihe.iti.dsubm",
        "version": "current"
    },
    "profiles.ihe.net/ITI/DSUBm/1.0.0": {
        "package_id": "ihe.iti.dsubm",
        "version": "1.0.0"
    },
    "profiles.ihe.net/ITI/DSUBm/1.0.0-comment": {
        "package_id": "ihe.iti.dsubm",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/PHARM/ihe.pharm.medicationrecord": {
        "package_id": "ihe-fhir-pharm-medicationrecord",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/pharm-medo": {
        "package_id": "ihe-fhir-pharm-medicationrecord",
        "version": "current"
    },
    "profiles.ihe.net/ITI/sIPS": {
        "package_id": "ihe.iti.sips",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.sIPS/branches/master/index.html": {
        "package_id": "ihe.iti.sips",
        "version": "current"
    },
    "profiles.ihe.net/ITI/sIPS/1.0.0": {
        "package_id": "ihe.iti.sips",
        "version": "1.0.0"
    },
    "profiles.ihe.net/ITI/sIPS/1.0.0-comment": {
        "package_id": "ihe.iti.sips",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/PaLM/RPC": {
        "package_id": "ihe.palm.rpc",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/PaLM.RPC": {
        "package_id": "ihe.palm.rpc",
        "version": "current"
    },
    "profiles.ihe.net/ITI/aIPS": {
        "package_id": "ihe.iti.aips",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.aIPS": {
        "package_id": "ihe.iti.aips",
        "version": "current"
    },
    "profiles.ihe.net/ITI/NPFS": {
        "package_id": "ihe.iti.npfs",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.NPFS/branches/master/index.html": {
        "package_id": "ihe.iti.npfs",
        "version": "current"
    },
    "profiles.ihe.net/ITI/NPFS/2.2.0": {
        "package_id": "ihe.iti.npfs",
        "version": "2.2.0"
    },
    "profiles.ihe.net/ITI/NPFS/2.2.0-comment": {
        "package_id": "ihe.iti.npfs",
        "version": "2.2.0-comment"
    },
    "profiles.ihe.net/RAD/IMR": {
        "package_id": "ihe.rad.imr",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/RAD.IMR": {
        "package_id": "ihe.rad.imr",
        "version": "current"
    },
    "profiles.ihe.net/RAD/IMR/1.0.0": {
        "package_id": "ihe.rad.imr",
        "version": "1.0.0"
    },
    "profiles.ihe.net/RAD/IMR/1.0.0-comment": {
        "package_id": "ihe.rad.imr",
        "version": "1.0.0-comment"
    },
    "profiles.ihe.net/RAD/IMR/0.1.0": {
        "package_id": "ihe.rad.imr",
        "version": "0.1.0"
    },
    "profiles.ihe.net/ITI/MHDS": {
        "package_id": "ihe.iti.mhds",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.MHDS/branches/master/index.html": {
        "package_id": "ihe.iti.mhds",
        "version": "current"
    },
    "profiles.ihe.net/ITI/MHDS/2.3.1": {
        "package_id": "ihe.iti.mhds",
        "version": "2.3.1"
    },
    "profiles.ihe.net/ITI/MHDS/2.3.0": {
        "package_id": "ihe.iti.mhds",
        "version": "2.3.0"
    },
    "profiles.ihe.net/ITI/MHDS/2.2.0": {
        "package_id": "ihe.iti.mhds",
        "version": "2.2.0"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHDS.pdf": {
        "package_id": "ihe.iti.mhds",
        "version": "2.1.0"
    },
    "profiles.ihe.net/PCC/APS": {
        "package_id": "ihe.pcc.aps",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/PCC.APS": {
        "package_id": "ihe.pcc.aps",
        "version": "current"
    },
    "profiles.ihe.net/Domain/LogicalDatatypes": {
        "package_id": "ihe.domain.logical-datatypes",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/datatypes": {
        "package_id": "ihe.domain.logical-datatypes",
        "version": "current"
    },
    "fhir.org/templates/ihe.fhir.template": {
        "package_id": "ihe.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ihe-ig-template": {
        "package_id": "ihe.fhir.template",
        "version": "current"
    },
    "fhir.org/templates/ihe.fhir.template/0.10.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.10.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.9.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.9.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.8.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.8.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.7.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.6.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.5.3": {
        "package_id": "ihe.fhir.template",
        "version": "0.5.3"
    },
    "fhir.org/templates/ihe.fhir.template/0.5.2": {
        "package_id": "ihe.fhir.template",
        "version": "0.5.2"
    },
    "fhir.org/templates/ihe.fhir.template/0.5.1": {
        "package_id": "ihe.fhir.template",
        "version": "0.5.1"
    },
    "fhir.org/templates/ihe.fhir.template/0.5.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.4.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.3.1": {
        "package_id": "ihe.fhir.template",
        "version": "0.3.1"
    },
    "fhir.org/templates/ihe.fhir.template/0.3.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.3.0"
    },
    "build.fhir.org/ig/IHE/ihe-ig-template/0.2.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.2.0"
    },
    "build.fhir.org/ig/IHE/ihe-ig-template/0.1.0": {
        "package_id": "ihe.fhir.template",
        "version": "0.1.0"
    },
    "fhir.org/templates/ihe.fhir.template/0.0.2": {
        "package_id": "ihe.fhir.template",
        "version": "0.0.2"
    },
    "profiles.ihe.net/RAD/IDR": {
        "package_id": "ihe.rad.idr",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/RAD.IDR": {
        "package_id": "ihe.rad.idr",
        "version": "current"
    },
    "profiles.ihe.net/ITI/BALP": {
        "package_id": "ihe.iti.balp",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.BasicAudit/branches/main/index.html": {
        "package_id": "ihe.iti.balp",
        "version": "current"
    },
    "profiles.ihe.net/ITI/BALP/1.1.3": {
        "package_id": "ihe.iti.balp",
        "version": "1.1.3"
    },
    "profiles.ihe.net/ITI/BALP/1.1.2": {
        "package_id": "ihe.iti.balp",
        "version": "1.1.2"
    },
    "profiles.ihe.net/ITI/BALP/1.1.1": {
        "package_id": "ihe.iti.balp",
        "version": "1.1.1"
    },
    "profiles.ihe.net/ITI/BALP/1.1.0": {
        "package_id": "ihe.iti.balp",
        "version": "1.1.0"
    },
    "profiles.ihe.net/ITI/BALP/1.0.1": {
        "package_id": "ihe.iti.balp",
        "version": "1.0.1"
    },
    "profiles.ihe.net/PCC/RIPT": {
        "package_id": "ihe.pcc.ript",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/PCC.RIPT": {
        "package_id": "ihe.pcc.ript",
        "version": "current"
    },
    "profiles.ihe.net/PHARM/supply": {
        "package_id": "ihe.pharm.supply",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/pharm-supply": {
        "package_id": "ihe.pharm.supply",
        "version": "current"
    },
    "profiles.ihe.net/ITI/mXDE": {
        "package_id": "ihe.iti.mxde",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.mXDE/branches/master/index.html": {
        "package_id": "ihe.iti.mxde",
        "version": "current"
    },
    "profiles.ihe.net/ITI/mXDE/1.3.0": {
        "package_id": "ihe.iti.mxde",
        "version": "1.3.0"
    },
    "profiles.ihe.net/ITI/mXDE/1.3.0-comment": {
        "package_id": "ihe.iti.mxde",
        "version": "1.3.0-comment"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_mXDE.pdf": {
        "package_id": "ihe.iti.mxde",
        "version": "1.2.0"
    },
    "profiles.ihe.net/ITI/mCSD": {
        "package_id": "ihe.iti.mcsd",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/ITI.mCSD/branches/main": {
        "package_id": "ihe.iti.mcsd",
        "version": "current"
    },
    "profiles.ihe.net/ITI/mCSD/3.8.0": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.8.0"
    },
    "profiles.ihe.net/ITI/mCSD/3.7.0": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.7.0"
    },
    "profiles.ihe.net/ITI/mCSD/3.6.1": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.6.1"
    },
    "profiles.ihe.net/ITI/mCSD/3.5.0": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.5.0"
    },
    "profiles.ihe.net/ITI/mCSD/3.4.0": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.4.0"
    },
    "ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_mCSD_Rev3-3_TI_2021-07-02.pdf": {
        "package_id": "ihe.iti.mcsd",
        "version": "3.3.0"
    },
    "profiles.ihe.net/QRPH/VRDR": {
        "package_id": "ihe.qrph.vrdr",
        "version": "latest"
    },
    "build.fhir.org/ig/IHE/QRPH.VRDR": {
        "package_id": "ihe.qrph.vrdr",
        "version": "current"
    },
    "example.com/fhir/example": {
        "package_id": "hl7.fhir.pt.patient-admin-ig",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-pt/adr-ig": {
        "package_id": "my-ig",
        "version": "current"
    },
    "build.fhir.org/ig/hl7-pt/patient-admin-ig": {
        "package_id": "hl7.fhir.pt.patient-admin-ig",
        "version": "current"
    },
    "hl7.pt/fhir/core": {
        "package_id": "hl7.fhir.pt.core",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-pt/core": {
        "package_id": "hl7.fhir.pt.core",
        "version": "current"
    },
    "fhir.health.gov.il/mri": {
        "package_id": "il.moh.mri.r4",
        "version": "latest"
    },
    "build.fhir.org/ig/vadi2/MRI-Scheduling": {
        "package_id": "il.moh.mri.r4",
        "version": "current"
    },
    "medcomfhir.dk/ig/xdsmetadata": {
        "package_id": "medcom.fhir.dk.xds.metadata",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-xds-metadata": {
        "package_id": "medcom.fhir.dk.xds.metadata",
        "version": "current"
    },
    "medcomfhir.dk/ig/acknowledgement": {
        "package_id": "medcom.fhir.dk.acknowledgement",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-acknowledgement": {
        "package_id": "dk-ehmi-sbdh",
        "version": "current"
    },
    "medcomfhir.dk/ig/acknowledgement/2.0.2": {
        "package_id": "dk-ehmi-sbdh",
        "version": "2.0.2"
    },
    "medcomfhir.dk/ig/acknowledgement/2.0.1": {
        "package_id": "dk-ehmi-sbdh",
        "version": "2.0.1"
    },
    "medcomfhir.dk/ig/acknowledgement/2.0.0": {
        "package_id": "dk-ehmi-sbdh",
        "version": "2.0.0"
    },
    "medcomfhir.dk/fhir/ig/dk-medcom-acknowledgement": {
        "package_id": "dk-ehmi-sbdh",
        "version": "1.0.0"
    },
    "medcomehmi.dk/ig/ehmi-eds": {
        "package_id": "dk.medcom.ehmi.eds",
        "version": "latest"
    },
    "medcomehmi.dk/ig/ehmi-sbdh": {
        "package_id": "dk-ehmi-sbdh",
        "version": "latest"
    },
    "medcomfhir.dk/ig/carecommunicationtestscripts": {
        "package_id": "medcom.fhir.dk.carecommunicationtestscripts",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-carecommunication-testscripts": {
        "package_id": "medcom.fhir.dk.carecommunicationtestscripts",
        "version": "current"
    },
    "medcomehmi.dk/ig/dk-ehmi-eds": {
        "package_id": "dk.ehmi.eds",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-ehmi-eds": {
        "package_id": "dk.ehmi.eds",
        "version": "current"
    },
    "medcomfhir.dk/ig/ihexdsmetadata": {
        "package_id": "medcom.fhir.dk.ihe.xds.metadata",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-ihe-xds-metadata": {
        "package_id": "medcom.fhir.dk.ihe.xds.metadata",
        "version": "current"
    },
    "medcomehmi.dk/ig/ehmi-eer": {
        "package_id": "dk.medcom.ehmi.eer",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-ehmi-mCSD": {
        "package_id": "dk.medcom.ehmi.eer",
        "version": "current"
    },
    "medcomfhir.dk/ig/diagnosiscard": {
        "package_id": "medcom.fhir.dk.diagnosiscard",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-diagnosiscard": {
        "package_id": "medcom.fhir.dk.diagnosiscard",
        "version": "current"
    },
    "medcomehmi.dk/ig/dk-ehmi-eer": {
        "package_id": "dk.ehmi.eer",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-ehmi-eer": {
        "package_id": "dk.ehmi.eer",
        "version": "current"
    },
    "medcomfhir.dk/ig/carecommunication": {
        "package_id": "medcom.fhir.dk.carecommunication",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-carecommunication": {
        "package_id": "dk.ehmi.terminology",
        "version": "current"
    },
    "medcomfhir.dk/ig/carecommunication/2.1.0": {
        "package_id": "dk.ehmi.terminology",
        "version": "2.1.0"
    },
    "medcomfhir.dk/ig/carecommunication/2.0.0": {
        "package_id": "dk.ehmi.terminology",
        "version": "2.0.0"
    },
    "medcomfhir.dk/fhir/ig/dk-medcom-carecommunication": {
        "package_id": "dk.ehmi.terminology",
        "version": "1.0.0"
    },
    "medcomehmi.dk/ig/dk-ehmi-terminology": {
        "package_id": "dk.ehmi.terminology",
        "version": "latest"
    },
    "medcomfhir.dk/ig/terminology": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-terminology": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "current"
    },
    "medcomfhir.dk/ig/terminology/1.6.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.6.0"
    },
    "medcomfhir.dk/ig/terminology/1.5.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.5.0"
    },
    "medcomfhir.dk/ig/terminology/1.4.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.4.0"
    },
    "medcomfhir.dk/ig/terminology/1.3.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.3.0"
    },
    "medcomfhir.dk/ig/terminology/1.2.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.2.0"
    },
    "medcomfhir.dk/ig/terminology/1.1.1": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.1.1"
    },
    "medcomfhir.dk/ig/terminology/1.1.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.1.0"
    },
    "medcomfhir.dk/ig/terminology/1.0.0": {
        "package_id": "medcom.fhir.dk.terminology",
        "version": "1.0.0"
    },
    "medcomfhir.dk/ig/homecareobservation": {
        "package_id": "medcom.fhir.dk.homecareobservation",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk_HomeCareObservations": {
        "package_id": "medcom.fhir.dk.homecareobservation",
        "version": "current"
    },
    "medcomfhir.dk/ig/messaging": {
        "package_id": "medcom.fhir.dk.messaging",
        "version": "latest"
    },
    "build.fhir.org/ig/medcomdk/dk-medcom-messaging": {
        "package_id": "medcom.fhir.dk.messaging",
        "version": "current"
    },
    "medcomfhir.dk/ig/messaging/2.0.0": {
        "package_id": "medcom.fhir.dk.messaging",
        "version": "2.0.0"
    },
    "medcomfhir.dk/fhir/messaging/ig/dk-medcom-messaging": {
        "package_id": "medcom.fhir.dk.messaging",
        "version": "1.0.3"
    },
    "hl7.eu/fhir/ig/gk": {
        "package_id": "hl7.eu.fhir.gk",
        "version": "latest"
    },
    "build.fhir.org/ig/gatekeeper-project/gk-fhir-ig": {
        "package_id": "hl7.eu.fhir.gk",
        "version": "current"
    },
    "hl7.eu/fhir/ig/gk-poc-ai": {
        "package_id": "hl7.eu.fhir.gk-poc-ai",
        "version": "latest"
    },
    "build.fhir.org/ig/gatekeeper-project/poc-ai-gk": {
        "package_id": "hl7.eu.fhir.gk-poc-ai",
        "version": "current"
    },
    "fhir.org/templates/hl7.base.template": {
        "package_id": "hl7.base.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-hl7": {
        "package_id": "hl7.base.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.base.template/0.9.0": {
        "package_id": "hl7.base.template",
        "version": "0.9.0"
    },
    "fhir.org/templates/hl7.base.template/0.8.0": {
        "package_id": "hl7.base.template",
        "version": "0.8.0"
    },
    "fhir.org/templates/hl7.base.template/0.7.0": {
        "package_id": "hl7.base.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/hl7.base.template/0.6.0": {
        "package_id": "hl7.base.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/hl7.base.template/0.5.0": {
        "package_id": "hl7.base.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/hl7.base.template/0.4.0": {
        "package_id": "hl7.base.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.base.template/0.3.2": {
        "package_id": "hl7.base.template",
        "version": "0.3.2"
    },
    "fhir.org/templates/hl7.base.template/0.3.1": {
        "package_id": "hl7.base.template",
        "version": "0.3.1"
    },
    "fhir.org/templates/hl7.base.template/0.3.0": {
        "package_id": "hl7.base.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.base.template/0.2.1": {
        "package_id": "hl7.base.template",
        "version": "0.2.1"
    },
    "fhir.org/templates/hl7.base.template/0.2.0": {
        "package_id": "hl7.base.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.base.template/0.1.0": {
        "package_id": "hl7.base.template",
        "version": "0.1.0"
    },
    "fhir.org/templates/fhir.base.template/0.0.1": {
        "package_id": "hl7.base.template",
        "version": "0.0.1"
    },
    "fhir.org/templates/hl7.au.fhir.template": {
        "package_id": "hl7.au.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7au/hl7.au.fhir.template": {
        "package_id": "hl7.au.fhir.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.8.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.8.0"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.7.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.6.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.5.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.4.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.3.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.2.2": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.2.2"
    },
    "fhir.org/templates/hl7.fhir.template/0.2.1": {
        "package_id": "hl7.other.template",
        "version": "0.2.1"
    },
    "fhir.org/templates/hl7.fhir.template/0.2.0": {
        "package_id": "hl7.other.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.1.2": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.1.2"
    },
    "fhir.org/templates/hl7.fhir.template/0.1.1": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.1.1"
    },
    "fhir.org/templates/hl7.au.fhir.template/0.1.0": {
        "package_id": "hl7.au.fhir.template",
        "version": "0.1.0"
    },
    "hl7.org.au/fhir/core": {
        "package_id": "hl7.fhir.au.core",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7au/au-fhir-core": {
        "package_id": "hl7.fhir.au.core",
        "version": "current"
    },
    "hl7.org.au/fhir/erequesting": {
        "package_id": "hl7.fhir.au.erequesting",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7au/au-fhir-erequesting": {
        "package_id": "hl7.fhir.au.erequesting",
        "version": "current"
    },
    "draft.hl7.org.au/fhir/diagnostic-orders": {
        "package_id": "hl7.fhir.au.draft.diagnostic-orders",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7au/draft-diagnostic-orders": {
        "package_id": "hl7.fhir.au.draft.diagnostic-orders",
        "version": "current"
    },
    "fhir.org/templates/hl7.au.sparked.template": {
        "package_id": "hl7.au.sparked.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7au/hl7.au.sparked.template": {
        "package_id": "hl7.au.sparked.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.au.sparked.template/0.3.0": {
        "package_id": "hl7.au.sparked.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.au.sparked.template/0.2.0": {
        "package_id": "hl7.au.sparked.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.au.sparked.template/0.1.0": {
        "package_id": "hl7.au.sparked.template",
        "version": "0.1.0"
    },
    "hl7.nl/fhir/zorgviewer": {
        "package_id": "hl7.fhir.nl.zorgviewer",
        "version": "latest"
    },
    "build.fhir.org/ig/RIVO-Noord/zorgviewer-ig": {
        "package_id": "hl7.fhir.nl.zorgviewer",
        "version": "current"
    },
    "hl7.eu/fhir/ig/gravitate-health-ips": {
        "package_id": "hl7.eu.fhir.gh-ips",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/gravitate-health-ips": {
        "package_id": "hl7.eu.fhir.gh-ips",
        "version": "current"
    },
    "hl7.eu/fhir/ig/xpandh/ps": {
        "package_id": "hl7.eu.fhir.xpandh.ps",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/xpandh-ps": {
        "package_id": "hl7.eu.fhir.xpandh.ps",
        "version": "current"
    },
    "unicom-project.eu/fhir": {
        "package_id": "hl7.eu.fhir.ufis-swe-unicom",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/unicom-ig": {
        "package_id": "hl7.eu.fhir.unicom",
        "version": "current"
    },
    "hl7.eu/fhir/r4/extensions": {
        "package_id": "hl7.fhir.eu.extensions.r4",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/extensions-r4": {
        "package_id": "hl7.fhir.eu.extensions.r4",
        "version": "current"
    },
    "hl7.eu/fhir/ig/xpandh/lab": {
        "package_id": "hl7.eu.fhir.xpandh.lab",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/xpandh-lab": {
        "package_id": "hl7.eu.fhir.xpandh.lab",
        "version": "current"
    },
    "hl7.eu/fhir/ig/xpandh/hdr": {
        "package_id": "hl7.eu.fhir.xpandh.hdr",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/xpandh-hdr": {
        "package_id": "hl7.eu.fhir.xpandh.hdr",
        "version": "current"
    },
    "hl7.eu/fhir/ig/pcsp": {
        "package_id": "hl7.eu.fhir.pcsp",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/pcsp": {
        "package_id": "hl7.eu.fhir.pcsp",
        "version": "current"
    },
    "hl7.eu/fhir/ig/pcsp/0.1.0": {
        "package_id": "hl7.eu.fhir.pcsp",
        "version": "0.1.0"
    },
    "hl7.eu/fhir/r5/mpd": {
        "package_id": "hl7.fhir.eu.r5.mpd",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/mpd": {
        "package_id": "hl7.fhir.eu.mpd",
        "version": "current"
    },
    "hl7.eu/fhir/mpd": {
        "package_id": "hl7.fhir.eu.mpd",
        "version": "latest"
    },
    "hl7.eu/fhir/ig/coalesced": {
        "package_id": "hl7.eu.fhir.coalesced",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/coalesced": {
        "package_id": "hl7.eu.fhir.coalesced",
        "version": "current"
    },
    "hl7.eu/fhir/ig/xpandh": {
        "package_id": "hl7.eu.fhir.xpandh",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/xpandh": {
        "package_id": "hl7.eu.fhir.xpandh",
        "version": "current"
    },
    "hl7.eu/fhir/ig/idea4rc": {
        "package_id": "hl7.eu.fhir.idea4rc",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/idea4rc": {
        "package_id": "hl7.eu.fhir.idea4rc",
        "version": "current"
    },
    "hl7.eu/fhir/extensions": {
        "package_id": "hl7.fhir.eu.extensions",
        "version": "latest"
    },
    "build.fhir.org/ig/hl7-eu/extensions": {
        "package_id": "hl7.fhir.eu.extensions",
        "version": "current"
    },
    "hl7.eu/fhir/extensions/0.1.0": {
        "package_id": "hl7.fhir.eu.extensions",
        "version": "0.1.0"
    },
    "fhir.hl7.org.uk/uk-core-access": {
        "package_id": "uk-core-access",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7-UK/UK-Core-Access": {
        "package_id": "uk-core-access",
        "version": "current"
    },
    "ncez.mzcr.cz/standards/fhir/ig/core": {
        "package_id": "ncez.cz.fhir.core",
        "version": "latest"
    },
    "build.fhir.org/ig/ncez-cz/cz-core": {
        "package_id": "ncez.cz.fhir.core",
        "version": "current"
    },
    "github.com/openhie/openhie-ig-template": {
        "package_id": "openhie.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/openhie/openhie-ig-template": {
        "package_id": "openhie.fhir.template",
        "version": "current"
    },
    "fhir.org/argonaut/ehi-api": {
        "package_id": "ehi.api",
        "version": "latest"
    },
    "build.fhir.org/ig/argonautproject/ehi-api": {
        "package_id": "ehi.api",
        "version": "current"
    },
    "build.fhir.org/ig/ReMeDi-Blut/remedi_ig": {
        "package_id": "fhir.blood",
        "version": "current"
    },
    "fhir.ch/ig/ch-atc": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "latest"
    },
    "build.fhir.org/ig/ehealthsuisse/ch-atc": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "current"
    },
    "fhir.ch/ig/ch-atc/3.2.0": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "3.2.0"
    },
    "fhir.ch/ig/ch-atc/3.2.0-ballot": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "3.2.0-ballot"
    },
    "fhir.ch/ig/ch-atc/3.1.0": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "3.1.0"
    },
    "fhir.ch/ig/ch-atc/1.2.0": {
        "package_id": "ch.fhir.ig.ch-atc",
        "version": "1.2.0"
    },
    "fhir.simplifier.net/remedi-blut": {
        "package_id": "fhir.remedi-blut",
        "version": "latest"
    },
    "build.fhir.org/ig/lhake17/ig_remedi": {
        "package_id": "fhir.remedi-blut",
        "version": "current"
    },
    "hl7.org.nz/fhir/ig/hpi": {
        "package_id": "hl7.org.nz.fhir.ig.hpi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7NZ/hpi": {
        "package_id": "hl7.org.nz.fhir.ig.hpi",
        "version": "current"
    },
    "fhir-docs.nzf.org.nz": {
        "package_id": "hl7.org.nz.fhir.ig.formulary",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7NZ/nzf": {
        "package_id": "hl7.org.nz.fhir.ig.formulary",
        "version": "current"
    },
    "hl7.org.nz/fhir/ig/mdr": {
        "package_id": "hl7.org.nz.fhir.ig.mdr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7NZ/mdr": {
        "package_id": "hl7.org.nz.fhir.ig.mdr",
        "version": "current"
    },
    "build.fhir.org/ig/HL7NZ/nzbase": {
        "package_id": "fhir.org.nz.ig.base",
        "version": "current"
    },
    "fhir.org.nz/ig/northernregion": {
        "package_id": "fhir.org.nz.ig.northernregion",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7NZ/northernRegion": {
        "package_id": "fhir.org.nz.ig.northernregion",
        "version": "current"
    },
    "hl7.org.nz/fhir/ig/cca": {
        "package_id": "hl7.org.nz.fhir.ig.cca",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7NZ/cca": {
        "package_id": "hl7.org.nz.fhir.ig.cca",
        "version": "current"
    },
    "hl7.at/fhir/HL7ATCoreProfiles/4.0.1": {
        "package_id": "gabriel0316.hl7atcoreprofiles",
        "version": "latest"
    },
    "build.fhir.org/ig/gabriel0316/HL7-AT-FHIR-Core-R4": {
        "package_id": "gabriel0316.hl7atcoreprofiles",
        "version": "current"
    },
    "gabriel0316.github.io/ig-tooling-pages/ig/ig-tooling": {
        "package_id": "hl7.at.fhir.gkl.ig-tooling",
        "version": "latest"
    },
    "build.fhir.org/ig/gabriel0316/ig-tooling/": {
        "package_id": "hl7.at.fhir.gkl.ig-tooling",
        "version": "current"
    },
    "gabriel0316.github.io/ig-tooling-pages/ig/ig-tooling/0.1.0": {
        "package_id": "hl7.at.fhir.gkl.ig-tooling",
        "version": "0.1.0"
    },
    "termgit.elga.gv.at": {
        "package_id": "gabriel0316.terminologies",
        "version": "latest"
    },
    "build.fhir.org/ig/gabriel0316/terminology": {
        "package_id": "gabriel0316.terminologies",
        "version": "current"
    },
    "hl7.org/cda/us/eyecare": {
        "package_id": "hl7.cda.us.eyecare",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cda-eyecare": {
        "package_id": "hl7.cda.us.eyecare",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-rt": {
        "package_id": "hl7.fhir.us.pacio-rt",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pacio-rt": {
        "package_id": "hl7.fhir.us.pacio-rt",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-rt/STU1": {
        "package_id": "hl7.fhir.us.pacio-rt",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/pacio-rt/2022Jan": {
        "package_id": "hl7.fhir.us.pacio-rt",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/fhir-for-fair": {
        "package_id": "hl7.fhir.uv.fhir-for-fair",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-for-fair": {
        "package_id": "hl7.fhir.uv.fhir-for-fair",
        "version": "current"
    },
    "hl7.org/fhir/uv/fhir-for-fair/STU1": {
        "package_id": "hl7.fhir.uv.fhir-for-fair",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/fhir-for-fair/2022Jan": {
        "package_id": "hl7.fhir.uv.fhir-for-fair",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/termchangeset": {
        "package_id": "hl7.fhir.uv.termchangeset",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/tinkar-ig": {
        "package_id": "hl7.fhir.uv.termchangeset",
        "version": "current"
    },
    "fhir.org/templates/hl7.ca.fhir.template": {
        "package_id": "hl7.ca.fhir.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-ca": {
        "package_id": "hl7.ca.fhir.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.ca.fhir.template/0.4.0": {
        "package_id": "hl7.ca.fhir.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.ca.fhir.template/0.3.0": {
        "package_id": "hl7.ca.fhir.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.ca.fhir.template/0.2.0": {
        "package_id": "hl7.ca.fhir.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.ca.fhir.template/0.1.0": {
        "package_id": "hl7.ca.fhir.template",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/livd": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/livd": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "current"
    },
    "hl7.org/fhir/uv/livd/2024Jan": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/livd/2021Jan": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/livd/2019Sep": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/livd/2018Sep": {
        "package_id": "hl7.fhir.uv.livd",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/physical-activity": {
        "package_id": "hl7.fhir.us.physical-activity",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/physical-activity": {
        "package_id": "hl7.fhir.us.physical-activity",
        "version": "current"
    },
    "hl7.org/fhir/us/physical-activity/STU1": {
        "package_id": "hl7.fhir.us.physical-activity",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/physical-activity/2023May": {
        "package_id": "hl7.fhir.us.physical-activity",
        "version": "1.0.0-ballot"
    },
    "fhir.org/templates/hl7.fhir.affiliate.template": {
        "package_id": "hl7.fhir.affiliate.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-affiliate": {
        "package_id": "hl7.fhir.affiliate.template",
        "version": "current"
    },
    "hl7.org/fhir/us/medmorph-research-dex": {
        "package_id": "hl7.fhir.us.medmorph-research-dex",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-medmorph-research-dex": {
        "package_id": "hl7.fhir.us.medmorph-research-dex",
        "version": "current"
    },
    "hl7.org/fhir/us/medmorph-research-dex/2022Jan": {
        "package_id": "hl7.fhir.us.medmorph-research-dex",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/rtls": {
        "package_id": "hl7.fhir.uv.rtls",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/rtls-ig": {
        "package_id": "hl7.fhir.uv.rtls",
        "version": "current"
    },
    "hl7.org/fhir/uv/rtls/2023May": {
        "package_id": "hl7.fhir.uv.rtls",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/shc-vaccination": {
        "package_id": "hl7.fhir.uv.shc-vaccination",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-shc-vaccination-ig": {
        "package_id": "hl7.fhir.uv.shc-vaccination",
        "version": "current"
    },
    "hl7.org/fhir/uv/shc-vaccination/2021Sep": {
        "package_id": "hl7.fhir.uv.shc-vaccination",
        "version": "0.6.2"
    },
    "hl7.org/fhir/us/military-service": {
        "package_id": "hl7.fhir.us.military-service",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-military-service": {
        "package_id": "hl7.fhir.us.military-service",
        "version": "current"
    },
    "hl7.org/fhir/us/military-service/STU1": {
        "package_id": "hl7.fhir.us.military-service",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/military-service/2021Sep": {
        "package_id": "hl7.fhir.us.military-service",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/ipa": {
        "package_id": "hl7.fhir.uv.ipa",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ipa": {
        "package_id": "hl7.fhir.uv.ipa",
        "version": "current"
    },
    "hl7.org/fhir/uv/ipa/STU1": {
        "package_id": "hl7.fhir.uv.ipa",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/ipa/2022Jan": {
        "package_id": "hl7.fhir.uv.ipa",
        "version": "0.1.0"
    },
    "cql.hl7.org": {
        "package_id": "hl7.cql",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cql": {
        "package_id": "hl7.cql",
        "version": "current"
    },
    "cql.hl7.org/N1": {
        "package_id": "hl7.cql",
        "version": "1.5.2"
    },
    "cql.hl7.org/2020May": {
        "package_id": "hl7.cql",
        "version": "1.5.0"
    },
    "cql.hl7.org/STU4": {
        "package_id": "hl7.cql",
        "version": "1.4.1"
    },
    "cql.hl7.org/2019May": {
        "package_id": "hl7.cql",
        "version": "1.4.0"
    },
    "cql.hl7.org/STU3": {
        "package_id": "hl7.cql",
        "version": "1.3.1"
    },
    "cql.hl7.org/2018May": {
        "package_id": "hl7.cql",
        "version": "1.3.0"
    },
    "cql.hl7.org/STU2": {
        "package_id": "hl7.cql",
        "version": "1.2.1"
    },
    "hl7.org/documentcenter/public/standards/dstu/HL7_CQL_SPEC_R1_DSTUR1dot1_2016JUL.zip": {
        "package_id": "hl7.cql",
        "version": "1.1.0"
    },
    "hl7.org/documentcenter/public/standards/dstu/HL7_CQLANG_R1_DSTU_2015MAY.zip": {
        "package_id": "hl7.cql",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/ae-research-ig": {
        "package_id": "hl7.fhir.uv.ae-research-ig",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ae-research-ig": {
        "package_id": "hl7.fhir.uv.ae-research-ig",
        "version": "current"
    },
    "hl7.org/fhir/uv/ae-research-ig/2023Sep": {
        "package_id": "hl7.fhir.uv.ae-research-ig",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/sdc": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/sdc": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "current"
    },
    "hl7.org/fhir/uv/sdc/STU3": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "3.0.0"
    },
    "hl7.org/fhir/uv/sdc/3.0.0-preview": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "3.0.0-preview"
    },
    "hl7.org/fhir/uv/sdc/2019May": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "2.7.0"
    },
    "hl7.org/fhir/uv/sdc/2018Sep": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "2.5.0"
    },
    "hl7.org/fhir/us/sdc/STU2": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/sdc/2016Sep": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "1.6"
    },
    "hl7.org/fhir/DSTU2/sdc/sdc.html": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "1.0.2"
    },
    "hl7.org/fhir/2015Sep/sdc/sdc.html": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "1.0.0"
    },
    "hl7.org/fhir/2015May/sdc.html": {
        "package_id": "hl7.fhir.uv.sdc",
        "version": "0.5.0"
    },
    "hl7.org/fhir/uv/ips": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ips": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "current"
    },
    "hl7.org/fhir/uv/ips/STU1.1": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "1.1.0"
    },
    "hl7.org/fhir/uv/ips/STU1": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/ips/2019Sep": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/ips/2018Sep": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/ips/2018May": {
        "package_id": "hl7.fhir.uv.ips",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/shorthand": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-shorthand": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "current"
    },
    "hl7.org/fhir/uv/shorthand/2023Sep": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "3.0.0-ballot"
    },
    "hl7.org/fhir/uv/shorthand/N1": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "2.0.0"
    },
    "hl7.org/fhir/uv/shorthand/2021Sep": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "1.2.0"
    },
    "hl7.org/fhir/uv/shorthand/STU1": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/shorthand/2020May": {
        "package_id": "hl7.fhir.uv.shorthand",
        "version": "0.12.0"
    },
    "fhir.org/templates/hl7.fast.template": {
        "package_id": "hl7.fast.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-fast": {
        "package_id": "hl7.fast.template",
        "version": "current"
    },
    "hl7.org/fhir/us/registry-protocols": {
        "package_id": "hl7.fhir.us.registry-protocols",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-registry-protocols-ig": {
        "package_id": "hl7.fhir.us.registry-protocols",
        "version": "current"
    },
    "hl7.org/fhir/us/registry-protocols/STU1": {
        "package_id": "hl7.fhir.us.registry-protocols",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/registry-protocols/2023May": {
        "package_id": "hl7.fhir.us.registry-protocols",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/saner": {
        "package_id": "hl7.fhir.uv.saner",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-saner": {
        "package_id": "hl7.fhir.uv.saner",
        "version": "current"
    },
    "hl7.org/fhir/uv/saner/STU1": {
        "package_id": "hl7.fhir.uv.saner",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/saner/2021Jan": {
        "package_id": "hl7.fhir.uv.saner",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/capstmt": {
        "package_id": "hl7.fhir.uv.capstmt",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/capstmt": {
        "package_id": "hl7.fhir.uv.capstmt",
        "version": "current"
    },
    "hl7.org/fhir/us/eltss": {
        "package_id": "hl7.fhir.us.eltss",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/eLTSS": {
        "package_id": "hl7.fhir.us.eltss",
        "version": "current"
    },
    "hl7.org/fhir/us/eltss/2024Jan": {
        "package_id": "hl7.fhir.us.eltss",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/eltss/STU1": {
        "package_id": "hl7.fhir.us.eltss",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/eltss/2019May": {
        "package_id": "hl7.fhir.us.eltss",
        "version": "0.1.0"
    },
    "fhir.org/templates/hl7.davinci.template": {
        "package_id": "hl7.davinci.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-davinci/": {
        "package_id": "hl7.davinci.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.davinci.template/0.7.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.6.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.5.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.4.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.3.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.2.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/hl7.davinci.template/0.1.0": {
        "package_id": "hl7.davinci.template",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-pdex": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-epdx": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pdex/STU2": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/davinci-pdex/2022May": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-pdex/STU1": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-pdex/2019Jun": {
        "package_id": "hl7.fhir.us.davinci-pdex",
        "version": "0.1.0"
    },
    "github.com/HL7/ig-template-hl7": {
        "package_id": "hl7.utg.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-utg": {
        "package_id": "hl7.utg.template",
        "version": "current"
    },
    "hl7.org/fhir/us/dental-data-exchange": {
        "package_id": "hl7.fhir.us.dental-data-exchange",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/dental-data-exchange": {
        "package_id": "hl7.fhir.us.dental-data-exchange",
        "version": "current"
    },
    "hl7.org/fhir/us/dental-data-exchange/STU1": {
        "package_id": "hl7.fhir.us.dental-data-exchange",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/dental-data-exchange/2020Sep": {
        "package_id": "hl7.fhir.us.dental-data-exchange",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-hrex": {
        "package_id": "hl7.fhir.us.davinci-hrex",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-ehrx": {
        "package_id": "hl7.fhir.us.davinci-hrex",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-hrex/STU1": {
        "package_id": "hl7.fhir.us.davinci-hrex",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-hrex/2020Sep": {
        "package_id": "hl7.fhir.us.davinci-hrex",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/davinci-hrex/2019Jun": {
        "package_id": "hl7.fhir.us.davinci-hrex",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-crd": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-crd": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-crd/STU2": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "2.0.1"
    },
    "hl7.org/fhir/us/davinci-crd/2022May": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "1.1.0-ballot"
    },
    "hl7.org/fhir/us/davinci-crd/STU1": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-crd/2019May": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "0.3.0"
    },
    "hl7.org/fhir/us/davinci-crd/2018Sep": {
        "package_id": "hl7.fhir.us.davinci-crd",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/cql": {
        "package_id": "hl7.fhir.uv.cql",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cql-ig": {
        "package_id": "hl7.fhir.uv.cql",
        "version": "current"
    },
    "hl7.org/fhir/uv/cql/2024Jan": {
        "package_id": "hl7.fhir.uv.cql",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/order-catalog": {
        "package_id": "hl7.fhir.uv.order-catalog",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-order-catalog": {
        "package_id": "hl7.fhir.uv.order-catalog",
        "version": "current"
    },
    "hl7.org/fhir/uv/order-catalog/2020Sep": {
        "package_id": "hl7.fhir.uv.order-catalog",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/mcode": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-mCODE-ig": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "current"
    },
    "hl7.org/fhir/us/mcode/STU3": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "3.0.0"
    },
    "hl7.org/fhir/us/mcode/2023May": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "3.0.0-ballot"
    },
    "hl7.org/fhir/us/mcode/STU2.1": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/mcode/STU2": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/mcode/2021May": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "1.16.0"
    },
    "hl7.org/fhir/us/mcode/STU1": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/mcode/2019Sep": {
        "package_id": "hl7.fhir.us.mcode",
        "version": "0.9.1"
    },
    "hl7.org/fhir/us/pacio-pfe": {
        "package_id": "hl7.fhir.us.pacio-pfe",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pacio-pfe": {
        "package_id": "hl7.fhir.us.pacio-pfe",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-pfe/STU1": {
        "package_id": "hl7.fhir.us.pacio-pfe",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/pacio-pfe/2022Sep": {
        "package_id": "hl7.fhir.us.pacio-pfe",
        "version": "1.0.0-ballot"
    },
    "hl7.org/cda/us/ccda": {
        "package_id": "hl7.cda.us.ccda",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/CDA-ccda": {
        "package_id": "hl7.cda.us.ccda",
        "version": "current"
    },
    "hl7.org/cda/us/ccda/2024Jan": {
        "package_id": "hl7.cda.us.ccda",
        "version": "3.0.0-ballot"
    },
    "hl7.org/cda/stds/ccda/draft1": {
        "package_id": "hl7.cda.us.ccda",
        "version": "2.1.0-draft1"
    },
    "github.com/HL7/ig-template-cda": {
        "package_id": "hl7.cda.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-cda": {
        "package_id": "hl7.cda.template",
        "version": "current"
    },
    "hl7.org/fhir/uv/v2mappings": {
        "package_id": "hl7.fhir.uv.v2mappings",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/v2-to-fhir": {
        "package_id": "hl7.fhir.uv.v2mappings",
        "version": "current"
    },
    "hl7.org/fhir/uv/v2mappings/2024Jan": {
        "package_id": "hl7.fhir.uv.v2mappings",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/v2mappings/2020Sep": {
        "package_id": "hl7.fhir.uv.v2mappings",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/hai-ltcf": {
        "package_id": "hl7.fhir.us.hai-ltcf",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/HAI-LTCF": {
        "package_id": "hl7.fhir.us.hai-ltcf",
        "version": "current"
    },
    "hl7.org/fhir/us/hai-ltcf/STU1.1": {
        "package_id": "hl7.fhir.us.hai-ltcf",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/hai-ltcf/STU1": {
        "package_id": "hl7.fhir.us.hai-ltcf",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/hai-ltcf/2019Sep": {
        "package_id": "hl7.fhir.us.hai-ltcf",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/insurance-card": {
        "package_id": "hl7.fhir.us.insurance-card",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/carin-digital-insurance-card": {
        "package_id": "hl7.fhir.us.insurance-card",
        "version": "current"
    },
    "hl7.org/fhir/us/insurance-card/STU1": {
        "package_id": "hl7.fhir.us.insurance-card",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/insurance-card/2022Jan": {
        "package_id": "hl7.fhir.us.insurance-card",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/security-label-ds4p": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "latest"
    },
    "hl7.org/fhir/ig/HL7/security-label-ds4p": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "current"
    },
    "hl7.org/fhir/uv/security-label-ds4p/STU1": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/security-label-ds4p/2021Sep": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/security-label-ds4p/2021May": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/security-label-ds4p/2020May": {
        "package_id": "hl7.fhir.uv.security-label-ds4p",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/efss": {
        "package_id": "hl7.fhir.efss",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/efss": {
        "package_id": "fhir.efss",
        "version": "current"
    },
    "hl7.org/fhir/us": {
        "package_id": "fhir.efss",
        "version": "latest"
    },
    "hl7.org/fhir/us/cancer-reporting": {
        "package_id": "hl7.fhir.us.cancer-reporting",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cancer-reporting": {
        "package_id": "hl7.fhir.us.cancer-reporting",
        "version": "current"
    },
    "hl7.org/fhir/us/cancer-reporting/STU1": {
        "package_id": "hl7.fhir.us.cancer-reporting",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/cancer-reporting/2021Sep": {
        "package_id": "hl7.fhir.us.cancer-reporting",
        "version": "0.1.0"
    },
    "github.com/HL7/ig-template-gravity": {
        "package_id": "hl7.gravity.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-gravity": {
        "package_id": "hl7.gravity.template",
        "version": "current"
    },
    "hl7.org/fhir/uv/radiation-dose-summary": {
        "package_id": "hl7.fhir.uv.radiation-dose-summary",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-radiation-dose-summary-ig": {
        "package_id": "hl7.fhir.uv.radiation-dose-summary",
        "version": "current"
    },
    "hl7.org/fhir/uv/radiation-dose-summary/2022Jan": {
        "package_id": "hl7.fhir.uv.radiation-dose-summary",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/bser": {
        "package_id": "hl7.fhir.us.bser",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/bser": {
        "package_id": "hl7.fhir.us.bser",
        "version": "current"
    },
    "hl7.org/fhir/us/bser/2023Sep": {
        "package_id": "hl7.fhir.us.bser",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/bser/STU1": {
        "package_id": "hl7.fhir.us.bser",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/bser/2019May": {
        "package_id": "hl7.fhir.us.bser",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/bser/2018Sep": {
        "package_id": "hl7.fhir.us.bser",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/specialty-rx": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-specialty-rx": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "current"
    },
    "hl7.org/fhir/us/specialty-rx/STU2": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/specialty-rx/2022Sep": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/specialty-rx/STU1": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/specialty-rx/2021Jan": {
        "package_id": "hl7.fhir.us.specialty-rx",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/fhircast": {
        "package_id": "hl7.fhir.uv.fhircast",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhircast-docs": {
        "package_id": "hl7.fhir.uv.fhircast",
        "version": "current"
    },
    "hl7.org/fhir/uv/fhircast/2022May": {
        "package_id": "hl7.fhir.uv.fhircast",
        "version": "2.1.0-ballot"
    },
    "fhircast.hl7.org/specification/STU2": {
        "package_id": "hl7.fhir.uv.fhircast",
        "version": "2.0.0"
    },
    "fhircast.hl7.org/specification/STU1": {
        "package_id": "hl7.fhir.uv.fhircast",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-dtr": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-dtr": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-dtr/STU2": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "2.0.1"
    },
    "hl7.org/fhir/us/davinci-dtr/2022May": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "1.1.0-ballot"
    },
    "hl7.org/fhir/us/davinci-dtr/STU1": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-dtr/2019Sep": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/davinci-dtr/2019May": {
        "package_id": "hl7.fhir.us.davinci-dtr",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/resp-net": {
        "package_id": "hl7.fhir.us.resp-net",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-resp-net-ig": {
        "package_id": "hl7.fhir.us.resp-net",
        "version": "current"
    },
    "hl7.org/fhir/us/resp-net/2024Jan": {
        "package_id": "hl7.fhir.us.resp-net",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/ihe-sdc-ecc": {
        "package_id": "hl7.fhir.uv.ihe-sdc-ecc",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ihe-sdc-ecc-on-fhir": {
        "package_id": "hl7.fhir.uv.ihe-sdc-ecc",
        "version": "current"
    },
    "hl7.org/fhir/uv/ihe-sdc-ecc/STU1": {
        "package_id": "hl7.fhir.uv.ihe-sdc-ecc",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/ihe-sdc-ecc/2022Sep": {
        "package_id": "hl7.fhir.uv.ihe-sdc-ecc",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/vulcan-schedule": {
        "package_id": "hl7.fhir.uv.vulcan-schedule",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/Vulcan-schedule-ig": {
        "package_id": "hl7.fhir.uv.vulcan-soa",
        "version": "current"
    },
    "hl7.org/fhir/uv/vulcan-schedule/STU1": {
        "package_id": "hl7.fhir.uv.vulcan-schedule",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/vulcan-schedule/2023Jan": {
        "package_id": "hl7.fhir.uv.vulcan-schedule",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/vulcan-soa": {
        "package_id": "hl7.fhir.uv.vulcan-soa",
        "version": "latest"
    },
    "hl7.org/fhir/uv/ichom-breast-cancer": {
        "package_id": "hl7.fhir.uv.ichom-breast-cancer",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ichom-breast-cancer-ig": {
        "package_id": "hl7.fhir.uv.ichom.breastcancer",
        "version": "current"
    },
    "hl7.org/fhir/uv/ichom-breast-cancer/STU1": {
        "package_id": "hl7.fhir.uv.ichom-breast-cancer",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/ichom-breast-cancer/2023Jan": {
        "package_id": "hl7.fhir.uv.ichom-breast-cancer",
        "version": "1.0.0-ballot"
    },
    "connect.ichom.org/fhir": {
        "package_id": "hl7.fhir.uv.ichom.breastcancer",
        "version": "latest"
    },
    "hl7.org/fhir/us/ecr": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/case-reporting": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "current"
    },
    "hl7.org/fhir/us/ecr/STU2.1.1": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "2.1.1"
    },
    "hl7.org/fhir/us/ecr/STU2.1": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/ecr/STU2": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/ecr/2021Jan": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/ecr/STU1": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/ecr/2018Sep": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/ecr/2018Jan": {
        "package_id": "hl7.fhir.us.ecr",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/bulkdata": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/bulk-data": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "current"
    },
    "hl7.org/fhir/uv/bulkdata/STU2": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "2.0.0"
    },
    "hl7.org/fhir/uv/bulkdata/2021May": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "1.1.0"
    },
    "hl7.org/fhir/uv/bulkdata/STU1.0.1": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "1.0.1"
    },
    "hl7.org/fhir/uv/bulkdata/STU1": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/bulkdata/2019May": {
        "package_id": "hl7.fhir.uv.bulkdata",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/pocd": {
        "package_id": "hl7.fhir.uv.pocd",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/uv-pocd": {
        "package_id": "hl7.fhir.uv.pocd",
        "version": "current"
    },
    "hl7.org/fhir/uv/pocd/2021Sep": {
        "package_id": "hl7.fhir.uv.pocd",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/pocd/2018Sep": {
        "package_id": "hl7.fhir.uv.pocd",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/pocd/2018Jan": {
        "package_id": "hl7.fhir.uv.pocd",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/ccda": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ccda-on-fhir": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "current"
    },
    "hl7.org/fhir/us/ccda/STU1.2": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.2.0"
    },
    "hl7.org/fhir/us/ccda/2023May": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.2.0-ballot"
    },
    "hl7.org/fhir/us/ccda/STU1.1": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/ccda/STU1": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/ccda/2017Jan": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.8.0"
    },
    "hl7.org/fhir/us/ccda/2016Sep": {
        "package_id": "hl7.fhir.us.ccda",
        "version": "1.6.0"
    },
    "hl7.org/fhir/us/directory-query": {
        "package_id": "hl7.fhir.us.directory-query",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-directory-query": {
        "package_id": "hl7.fhir.us.directory-query",
        "version": "current"
    },
    "hl7.org/fhir/us/directory-query/2022Sep": {
        "package_id": "hl7.fhir.us.directory-query",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/pacio-adi": {
        "package_id": "hl7.fhir.us.pacio-adi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pacio-adi": {
        "package_id": "hl7.fhir.us.pacio-adi",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-adi/STU1": {
        "package_id": "hl7.fhir.us.pacio-adi",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/pacio-adi/2022Jan": {
        "package_id": "hl7.fhir.us.pacio-adi",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/hai": {
        "package_id": "hl7.fhir.us.hai",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/HAI": {
        "package_id": "hl7.fhir.us.hai",
        "version": "current"
    },
    "hl7.org/fhir/us/hai/STU2.1": {
        "package_id": "hl7.fhir.us.hai",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/hai/STU2": {
        "package_id": "hl7.fhir.us.hai",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/hai/2019May": {
        "package_id": "hl7.fhir.us.hai",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/hai/STU1": {
        "package_id": "hl7.fhir.us.hai",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/hai/2018May": {
        "package_id": "hl7.fhir.us.hai",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/bfdr": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-bfdr": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "current"
    },
    "hl7.org/fhir/us/bfdr/2024Jan": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/bfdr/STU1.1": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/bfdr/STU1": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/bfdr/2021Jan": {
        "package_id": "hl7.fhir.us.bfdr",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/pq-cmc-fda": {
        "package_id": "hl7.fhir.us.pq-cmc-fda",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/FHIR-us-pq-cmc-fda": {
        "package_id": "hl7.fhir.us.pq-cmc-fda",
        "version": "current"
    },
    "hl7.org/fhir/us/sirb": {
        "package_id": "hl7.fhir.us.sirb",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-sirb": {
        "package_id": "hl7.fhir.us.sirb",
        "version": "current"
    },
    "hl7.org/fhir/us/sirb/STU1": {
        "package_id": "hl7.fhir.us.sirb",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/sirb/2021Sep": {
        "package_id": "hl7.fhir.us.sirb",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/reportofilltraveler": {
        "package_id": "hl7.fhir.us.illTraveler",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ReportIIITraveler-ig": {
        "package_id": "hl7.fhir.us.illTraveler",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-drug-formulary": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-pdex-formulary": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/STU2.0.1": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "2.0.1"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/STU2": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/2022Jan": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "1.2.0"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/STU1.1": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/STU1.0.1": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "1.0.1"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/STU1": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-drug-formulary/Jun2019": {
        "package_id": "hl7.fhir.us.davinci-drug-formulary",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/CardX-HTN-MNG": {
        "package_id": "hl7.fhir.uv.CardX-HTN-MNG",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/CardX-HTN-MNG": {
        "package_id": "hl7.fhir.uv.CardX-HTN-MNG",
        "version": "current"
    },
    "hl7.org/fhir/us/cardx-htn": {
        "package_id": "hl7.fhir.us.cardx-htn",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cardx-ig": {
        "package_id": "hl7.fhir.us.cardx-htn",
        "version": "current"
    },
    "hl7.org/fhir/uv/genomics-reporting": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/genomics-reporting": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "current"
    },
    "hl7.org/fhir/uv/genomics-reporting/2024Jan": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "3.0.0-ballot"
    },
    "hl7.org/fhir/uv/genomics-reporting/STU2": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "2.0.0"
    },
    "hl7.org/fhir/uv/genomics-reporting/2021May": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "1.1.0"
    },
    "hl7.org/fhir/uv/genomics-reporting/STU1": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/genomics-reporting/2019Jan": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/genomics-reporting/2018May": {
        "package_id": "hl7.fhir.uv.genomics-reporting",
        "version": "0.1.0"
    },
    "fhir.org/templates/hl7.fhir.template": {
        "package_id": "hl7.other.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-fhir": {
        "package_id": "hl7.other.template",
        "version": "current"
    },
    "fhir.org/templates/hl7.fhir.template/0.9.0": {
        "package_id": "hl7.other.template",
        "version": "0.9.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.8.0": {
        "package_id": "hl7.other.template",
        "version": "0.8.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.7.0": {
        "package_id": "hl7.other.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.6.0": {
        "package_id": "hl7.other.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.5.0": {
        "package_id": "hl7.other.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.4.0": {
        "package_id": "hl7.other.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.3.3": {
        "package_id": "hl7.other.template",
        "version": "0.3.3"
    },
    "fhir.org/templates/hl7.fhir.template/0.3.2": {
        "package_id": "hl7.other.template",
        "version": "0.3.2"
    },
    "fhir.org/templates/hl7.fhir.template/0.3.1": {
        "package_id": "hl7.other.template",
        "version": "0.3.1"
    },
    "fhir.org/templates/hl7.fhir.template/0.3.0": {
        "package_id": "hl7.other.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/hl7.fhir.template/0.1.0": {
        "package_id": "hl7.other.template",
        "version": "0.1.0"
    },
    "fhir.org/templates/fhir.base.template/0.0.5": {
        "package_id": "hl7.other.template",
        "version": "0.0.5"
    },
    "hl7.org/fhir/us/consent-management": {
        "package_id": "hl7.fhir.us.consent-management",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-consent-management": {
        "package_id": "hl7.fhir.us.consent-management",
        "version": "current"
    },
    "hl7.org/fhir/us/breast-radiology": {
        "package_id": "hl7.fhir.us.breast-radiology",
        "version": "latest"
    },
    "build.hl7.org/fhir/us/breast-radiology/": {
        "package_id": "hl7.fhir.us.breast-radiology",
        "version": "current"
    },
    "hl7.org/fhir/us/breast-radiology/2020May": {
        "package_id": "hl7.fhir.us.breast-radiology",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/breast-radiology/2019Sep": {
        "package_id": "hl7.fhir.us.breast-radiology",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/cimi-labs": {
        "package_id": "hl7.fhir.us.cimilabs",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cimi-labs": {
        "package_id": "hl7.fhir.us.cimilabs",
        "version": "current"
    },
    "hl7.org/fhir/uv/pddi": {
        "package_id": "hl7.fhir.uv.pddi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/PDDI-CDS": {
        "package_id": "hl7.fhir.uv.pddi",
        "version": "current"
    },
    "hl7.org/fhir/uv/pddi/2023Jan": {
        "package_id": "hl7.fhir.uv.pddi",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/pddi/2020Sep": {
        "package_id": "hl7.fhir.uv.pddi",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/pddi/2018Sep": {
        "package_id": "hl7.fhir.uv.pddi",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/nhsn-dqm": {
        "package_id": "hl7.fhir.us.nhsn-dqm",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/nhsn-dqm": {
        "package_id": "hl7.fhir.us.nhsn-dqm",
        "version": "current"
    },
    "hl7.org/fhir/us/core": {
        "package_id": "hl7.fhir.us.core",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/US-Core": {
        "package_id": "hl7.fhir.us.core",
        "version": "current"
    },
    "hl7.org/fhir/us/core/2024Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "7.0.0-ballot"
    },
    "hl7.org/fhir/us/core/STU6.1": {
        "package_id": "hl7.fhir.us.core",
        "version": "6.1.0"
    },
    "hl7.org/fhir/us/core/STU6.1-snapshot1": {
        "package_id": "hl7.fhir.us.core",
        "version": "6.1.0-snapshot1"
    },
    "hl7.org/fhir/us/core/STU6": {
        "package_id": "hl7.fhir.us.core",
        "version": "6.0.0"
    },
    "hl7.org/fhir/us/core/2023Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "6.0.0-ballot"
    },
    "hl7.org/fhir/us/core/STU5.0.1": {
        "package_id": "hl7.fhir.us.core",
        "version": "5.0.1"
    },
    "hl7.org/fhir/us/core/STU5": {
        "package_id": "hl7.fhir.us.core",
        "version": "5.0.0"
    },
    "hl7.org/fhir/us/core/2022Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "4.1.0"
    },
    "hl7.org/fhir/us/core/STU4": {
        "package_id": "hl7.fhir.us.core",
        "version": "4.0.0"
    },
    "hl7.org/fhir/us/core/2021Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "3.2.0"
    },
    "hl7.org/fhir/us/core/STU3.1.1": {
        "package_id": "hl7.fhir.us.core",
        "version": "3.1.1"
    },
    "hl7.org/fhir/us/core/STU3.1": {
        "package_id": "hl7.fhir.us.core",
        "version": "3.1.0"
    },
    "hl7.org/fhir/us/core/2019Sep": {
        "package_id": "hl7.fhir.us.core",
        "version": "3.0.1"
    },
    "hl7.org/fhir/us/core/STU3": {
        "package_id": "hl7.fhir.us.core",
        "version": "3.0.0"
    },
    "hl7.org/fhir/us/core/2019Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/core/STU2": {
        "package_id": "hl7.fhir.us.core",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/core/2018Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/core/1.0.1": {
        "package_id": "hl7.fhir.us.core",
        "version": "1.0.1"
    },
    "hl7.org/fhir/us/core/STU1": {
        "package_id": "hl7.fhir.us.core",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/core/2017Jan": {
        "package_id": "hl7.fhir.us.core",
        "version": "0.0.0"
    },
    "hl7.org/fhir/uv/vulcan-rwd": {
        "package_id": "hl7.fhir.uv.vulcan-rwd",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/vulcan-rwd": {
        "package_id": "hl7.fhir.uv.vulcan-rwd",
        "version": "current"
    },
    "hl7.org/fhir/uv/vulcan-rwd/STU1": {
        "package_id": "hl7.fhir.uv.vulcan-rwd",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/vulcan-rwd/2023Jan": {
        "package_id": "hl7.fhir.uv.vulcan-rwd",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/cmi": {
        "package_id": "hl7.fhir.uv.cmi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/Content-Management-Infrastructure-IG": {
        "package_id": "hl7.fhir.uv.cmi",
        "version": "current"
    },
    "hl7.org/fhir/us/ndh": {
        "package_id": "hl7.fhir.us.ndh",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-us-ndh": {
        "package_id": "hl7.fhir.us.ndh",
        "version": "current"
    },
    "hl7.org/fhir/us/ndh/2023Sep": {
        "package_id": "hl7.fhir.us.ndh",
        "version": "1.0.0-ballot"
    },
    "build.fhir.org/ig/HL7/fhir-medication-rems-ig": {
        "package_id": "hl7.fhir.us.medication-rems",
        "version": "current"
    },
    "hl7.org/fhir/us/directory-attestation": {
        "package_id": "hl7.fhir.us.directory-attestation",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-directory-attestation": {
        "package_id": "hl7.fhir.us.directory-attestation",
        "version": "current"
    },
    "hl7.org/fhir/us/directory-attestation/2022Sep": {
        "package_id": "hl7.fhir.us.directory-attestation",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/deval": {
        "package_id": "hl7.fhir.uv.deval",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/DeviceAlerting": {
        "package_id": "hl7.fhir.uv.deval",
        "version": "current"
    },
    "fhir.org/templates/fhir.base.template": {
        "package_id": "fhir.base.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-base": {
        "package_id": "fhir.base.template",
        "version": "current"
    },
    "fhir.org/templates/fhir.base.template/0.7.0": {
        "package_id": "fhir.base.template",
        "version": "0.7.0"
    },
    "fhir.org/templates/fhir.base.template/0.6.0": {
        "package_id": "fhir.base.template",
        "version": "0.6.0"
    },
    "fhir.org/templates/fhir.base.template/0.5.0": {
        "package_id": "fhir.base.template",
        "version": "0.5.0"
    },
    "fhir.org/templates/fhir.base.template/0.4.0": {
        "package_id": "fhir.base.template",
        "version": "0.4.0"
    },
    "fhir.org/templates/fhir.base.template/0.3.0": {
        "package_id": "fhir.base.template",
        "version": "0.3.0"
    },
    "fhir.org/templates/fhir.base.template/0.2.2": {
        "package_id": "fhir.base.template",
        "version": "0.2.2"
    },
    "fhir.org/templates/fhir.base.template/0.2.1": {
        "package_id": "fhir.base.template",
        "version": "0.2.1"
    },
    "fhir.org/templates/fhir.base.template/0.2.0": {
        "package_id": "fhir.base.template",
        "version": "0.2.0"
    },
    "fhir.org/templates/fhir.base.template/0.1.1": {
        "package_id": "fhir.base.template",
        "version": "0.1.1"
    },
    "fhir.org/templates/fhir.base.template/0.1.0": {
        "package_id": "fhir.base.template",
        "version": "0.1.0"
    },
    "fhir.org/templates/fhir.base.template/0.0.2": {
        "package_id": "fhir.base.template",
        "version": "0.0.2"
    },
    "hl7.org/fhir/us/davinci-vbpr": {
        "package_id": "hl7.fhir.us.davinci-vbpr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-vbpr": {
        "package_id": "hl7.fhir.us.davinci-vbpr",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-vbpr/2023Sep": {
        "package_id": "hl7.fhir.us.davinci-vbpr",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/lower-extremity-skin-wound-assessment": {
        "package_id": "hl7.fhir.us.lower-extremity-skin-wound-assessment",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-skin-wound-ig": {
        "package_id": "hl7.fhir.us.lower-extremity-skin-wound-assessment",
        "version": "current"
    },
    "hl7.org/fhir/uv/adverseeventclinicalcare": {
        "package_id": "hl7.fhir.uv.adverseeventclinicalcare",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ae-care-ig": {
        "package_id": "hl7.fhir.uv.adverseeventclinicalcare",
        "version": "current"
    },
    "hl7.org/fhir/us/vitals": {
        "package_id": "hl7.fhir.us.vitals",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cimi-vital-signs": {
        "package_id": "hl7.fhir.us.vitals",
        "version": "current"
    },
    "hl7.org/fhir/us/vitals/STU1": {
        "package_id": "hl7.fhir.us.vitals",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/vitals/2020Sep": {
        "package_id": "hl7.fhir.us.vitals",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/nhsn-ade": {
        "package_id": "hl7.fhir.us.nhsn-ade",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-nhsn-ade-ig/branches/main/index.html": {
        "package_id": "hl7.fhir.us.nhsn-ade",
        "version": "current"
    },
    "hl7.org/fhir/us/nhsn-ade/STU1": {
        "package_id": "hl7.fhir.us.nhsn-ade",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/nhsn-ade/2021May": {
        "package_id": "hl7.fhir.us.nhsn-ade",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/central-cancer-registry-reporting": {
        "package_id": "hl7.fhir.us.central-cancer-registry-reporting",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-central-cancer-registry-reporting": {
        "package_id": "hl7.fhir.us.central-cancer-registry-reporting",
        "version": "current"
    },
    "hl7.org/fhir/us/central-cancer-registry-reporting/2022Jan": {
        "package_id": "hl7.fhir.us.central-cancer-registry-reporting",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/mcc": {
        "package_id": "hl7.fhir.us.mcc",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-us-mcc": {
        "package_id": "hl7.fhir.us.mcc",
        "version": "current"
    },
    "hl7.org/fhir/us/mcc/2023Sep": {
        "package_id": "hl7.fhir.us.mcc",
        "version": "1.0.0-ballot2"
    },
    "hl7.org/fhir/us/mcc/2023Jan": {
        "package_id": "hl7.fhir.us.mcc",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/ebm": {
        "package_id": "hl7.fhir.uv.ebm",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ebm": {
        "package_id": "hl7.fhir.uv.ebm",
        "version": "current"
    },
    "hl7.org/fhir/uv/ebm/2024Jan": {
        "package_id": "hl7.fhir.uv.ebm",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/medmorph": {
        "package_id": "hl7.fhir.us.medmorph",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-medmorph": {
        "package_id": "hl7.fhir.us.medmorph",
        "version": "current"
    },
    "hl7.org/fhir/us/medmorph/STU1": {
        "package_id": "hl7.fhir.us.medmorph",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/medmorph/2022Jan": {
        "package_id": "hl7.fhir.us.medmorph",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/medmorph/2021Jan": {
        "package_id": "hl7.fhir.us.medmorph",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/carin-bb": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/carin-bb": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "current"
    },
    "hl7.org/fhir/us/carin-bb/STU2": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/carin-bb/2022Jan": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "1.2.0"
    },
    "hl7.org/fhir/us/carin-bb/STU1.1": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/carin-bb/STU1": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/carin-bb/2020Feb": {
        "package_id": "hl7.fhir.us.carin-bb",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/identity-matching": {
        "package_id": "hl7.fhir.us.identity-matching",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-identity-matching-ig": {
        "package_id": "hl7.fhir.us.identity-matching",
        "version": "current"
    },
    "hl7.org/fhir/us/identity-matching/STU1": {
        "package_id": "hl7.fhir.us.identity-matching",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/identity-matching/2022May": {
        "package_id": "hl7.fhir.us.identity-matching",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/phenomics-exchange": {
        "package_id": "hl7.fhir.uv.phenomics-exchange",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/phenomics-exchange-ig": {
        "package_id": "hl7.fhir.uv.phenomics-exchange",
        "version": "current"
    },
    "hl7.org/fhir/us/pdmp": {
        "package_id": "hl7.fhir.us.pdmp",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pdmp": {
        "package_id": "hl7.fhir.us.pdmp",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-ra": {
        "package_id": "hl7.fhir.us.davinci-ra",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-ra": {
        "package_id": "hl7.fhir.us.davinci-ra",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-ra/2023May": {
        "package_id": "hl7.fhir.us.davinci-ra",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-ra/STU1": {
        "package_id": "hl7.fhir.us.davinci-ra",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-ra/2022Jan": {
        "package_id": "hl7.fhir.us.davinci-ra",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/qicore": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-qi-core": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "current"
    },
    "hl7.org/fhir/us/qicore/STU6": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "6.0.0"
    },
    "hl7.org/fhir/us/qicore/2023Sep": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "6.0.0-ballot"
    },
    "hl7.org/fhir/us/qicore/STU5": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "5.0.0"
    },
    "hl7.org/fhir/us/qicore/2022Sep": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "5.0.0-ballot"
    },
    "hl7.org/fhir/us/qicore/STU4.1.1": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "4.1.1"
    },
    "hl7.org/fhir/us/qicore/STU4.1": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "4.1.0"
    },
    "hl7.org/fhir/us/qicore/STU4": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "4.0.0"
    },
    "hl7.org/fhir/us/qicore/2019Sep": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "3.3.0"
    },
    "hl7.org/fhir/us/qicore/STU32": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "3.2.0"
    },
    "hl7.org/fhir/us/qicore/STU3": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "3.1.0"
    },
    "hl7.org/fhir/us/qicore/2018Jan": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/qicore/STU2": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/qicore/2016Sep": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "1.6.0"
    },
    "hl7.org/fhir/DSTU2/qicore/qicore.html": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "1.0.2"
    },
    "hl7.org/fhir/2015Sep/qicore/qicore.html": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "1.0.0"
    },
    "hl7.org/fhir/2015May/qicore.html": {
        "package_id": "hl7.fhir.us.qicore",
        "version": "0.5.0"
    },
    "hl7.org/fhir/us/ph-library": {
        "package_id": "hl7.fhir.us.ph-library",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-us-ph-library": {
        "package_id": "hl7.fhir.us.ph-library",
        "version": "current"
    },
    "hl7.org/fhir/us/ph-library/STU1": {
        "package_id": "hl7.fhir.us.ph-library",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/ph-library/2022Sep": {
        "package_id": "hl7.fhir.us.ph-library",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/vr-common-library": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/vr-common-library": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "current"
    },
    "hl7.org/fhir/us/vr-common-library/2024Jan": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/vr-common-library/STU1.1": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/vr-common-library/STU1": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/vr-common-library/2021Jan": {
        "package_id": "hl7.fhir.us.vr-common-library",
        "version": "0.1.0"
    },
    "hl7.org/fhir/extensions": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-extensions": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "current"
    },
    "hl7.org/fhir/extensions/5.1.0-snapshot1": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "5.1.0-snapshot1"
    },
    "hl7.org/fhir/extensions/5.1.0-ballot": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "5.1.0-ballot"
    },
    "hl7.org/fhir/extensions/1.0.0": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "1.0.0"
    },
    "hl7.org/fhir/extensions/0.1.0": {
        "package_id": "hl7.fhir.uv.extensions",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/home-lab-report": {
        "package_id": "hl7.fhir.us.home-lab-report",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/home-lab-report": {
        "package_id": "hl7.fhir.us.home-lab-report",
        "version": "current"
    },
    "hl7.org/fhir/us/home-lab-report/STU1": {
        "package_id": "hl7.fhir.us.home-lab-report",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/home-lab-report/2022Sep": {
        "package_id": "hl7.fhir.us.home-lab-report",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/omop": {
        "package_id": "hl7.fhir.uv.omop",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-omop-ig": {
        "package_id": "hl7.fhir.uv.omop",
        "version": "current"
    },
    "terminology.hl7.org": {
        "package_id": "hl7.terminology",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/UTG": {
        "package_id": "hl7.terminology",
        "version": "current"
    },
    "terminology.hl7.org/5.5.0": {
        "package_id": "hl7.terminology",
        "version": "5.5.0"
    },
    "terminology.hl7.org/5.4.0": {
        "package_id": "hl7.terminology",
        "version": "5.4.0"
    },
    "terminology.hl7.org/5.3.0": {
        "package_id": "hl7.terminology",
        "version": "5.3.0"
    },
    "terminology.hl7.org/5.2.0": {
        "package_id": "hl7.terminology",
        "version": "5.2.0"
    },
    "terminology.hl7.org/5.1.0": {
        "package_id": "hl7.terminology",
        "version": "5.1.0"
    },
    "terminology.hl7.org/5.0.0": {
        "package_id": "hl7.terminology",
        "version": "5.0.0"
    },
    "terminology.hl7.org/4.0.0": {
        "package_id": "hl7.terminology",
        "version": "4.0.0"
    },
    "terminology.hl7.org/3.1.0": {
        "package_id": "hl7.terminology",
        "version": "3.1.0"
    },
    "terminology.hl7.org/3.0.0": {
        "package_id": "hl7.terminology",
        "version": "3.0.0"
    },
    "terminology.hl7.org/2.1.0": {
        "package_id": "hl7.terminology",
        "version": "2.1.0"
    },
    "terminology.hl7.org/2.0.0": {
        "package_id": "hl7.terminology",
        "version": "2.0.0"
    },
    "terminology.hl7.org/1.0.0": {
        "package_id": "hl7.terminology",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/hsds": {
        "package_id": "hl7.fhir.us.hsds",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/FHIR-IG-Human-Services-Directory": {
        "package_id": "hl7.fhir.us.hsds",
        "version": "current"
    },
    "hl7.org/fhir/us/hsds/STU1": {
        "package_id": "hl7.fhir.us.hsds",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/hsds/2023Jan": {
        "package_id": "hl7.fhir.us.hsds",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/pacio-fs": {
        "package_id": "hl7.fhir.us.pacio-fs",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pacio-functional-status": {
        "package_id": "hl7.fhir.us.pacio-fs",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-fs/STU1": {
        "package_id": "hl7.fhir.us.pacio-fs",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/pacio-fs/2021Jan": {
        "package_id": "hl7.fhir.us.pacio-fs",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/ehrs-rle": {
        "package_id": "hl7.fhir.uv.ehrs-rle",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ehrs-rle-ig": {
        "package_id": "hl7.fhir.uv.ehrs-rle",
        "version": "current"
    },
    "hl7.org/fhir/uv/ehrs-rle/Informative1": {
        "package_id": "hl7.fhir.uv.ehrs-rle",
        "version": "1.1.0"
    },
    "hl7.org/fhir/uv/ehrs-rle/2023May": {
        "package_id": "hl7.fhir.uv.ehrs-rle",
        "version": "1.1.0-ballot"
    },
    "hl7.org/fhir/uv/ehrs-rle/2023Jan": {
        "package_id": "hl7.fhir.uv.ehrs-rle",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/dap": {
        "package_id": "hl7.fhir.uv.dap",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/data-access-policies": {
        "package_id": "hl7.fhir.uv.dap",
        "version": "current"
    },
    "hl7.org/fhir/us/cqfmeasures": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cqf-measures": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "current"
    },
    "hl7.org/fhir/us/cqfmeasures/2024Jan": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "5.0.0-ballot"
    },
    "hl7.org/fhir/us/cqfmeasures/STU4": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "4.0.0"
    },
    "hl7.org/fhir/us/cqfmeasures/2023Jan": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "4.0.0-ballot"
    },
    "hl7.org/fhir/us/cqfmeasures/STU3": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "3.0.0"
    },
    "hl7.org/fhir/us/cqfmeasures/2021May": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/cqfmeasures/STU2": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/cqfmeasures/2020Feb": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/cqfmeasures/STU1": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/cqfmeasures/2019May": {
        "package_id": "hl7.fhir.us.cqfmeasures",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/vhdir": {
        "package_id": "hl7.fhir.uv.vhdir",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/VhDir": {
        "package_id": "hl7.fhir.uv.vhdir",
        "version": "current"
    },
    "hl7.org/fhir/uv/vhdir/2018Sep": {
        "package_id": "hl7.fhir.uv.vhdir",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/vhdir/2018Jan": {
        "package_id": "hl7.fhir.uv.vhdir",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-pct": {
        "package_id": "hl7.fhir.us.davinci-pct",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-pct": {
        "package_id": "hl7.fhir.us.davinci-pct",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pct/STU1.1": {
        "package_id": "hl7.fhir.us.davinci-pct",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-pct/STU1": {
        "package_id": "hl7.fhir.us.davinci-pct",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-pct/2022Jan": {
        "package_id": "hl7.fhir.us.davinci-pct",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-pcde": {
        "package_id": "hl7.fhir.us.davinci-pcde",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-pcde": {
        "package_id": "hl7.fhir.us.davinci-pcde",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pcde/STU1": {
        "package_id": "hl7.fhir.us.davinci-pcde",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-pcde/2019Sep": {
        "package_id": "hl7.fhir.us.davinci-pcde",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/icsr-ae-reporting": {
        "package_id": "hl7.fhir.us.icsr-ae-reporting",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/icsr-ae-reporting": {
        "package_id": "hl7.fhir.us.icsr-ae-reporting",
        "version": "current"
    },
    "hl7.org/fhir/us/icsr-ae-reporting/STU1": {
        "package_id": "hl7.fhir.us.icsr-ae-reporting",
        "version": "1.0.1"
    },
    "hl7.org/fhir/us/icsr-ae-reporting/2021Sep": {
        "package_id": "hl7.fhir.us.icsr-ae-reporting",
        "version": "0.1.0"
    },
    "hl7.org/xprod/ig/uv/gender-harmony": {
        "package_id": "hl7.xprod.uv.gender-harmony",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-gender-harmony": {
        "package_id": "hl7.xprod.uv.gender-harmony",
        "version": "current"
    },
    "hl7.org/xprod/ig/uv/gender-harmony/informative1": {
        "package_id": "hl7.xprod.uv.gender-harmony",
        "version": "1.0.0"
    },
    "hl7.org/xprod/ig/uv/gender-harmony/2022Sep": {
        "package_id": "hl7.xprod.uv.gender-harmony",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/pharm-quality": {
        "package_id": "hl7.fhir.uv.pharm-quality",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/uv-dx-pq": {
        "package_id": "hl7.fhir.uv.pharm-quality",
        "version": "current"
    },
    "hl7.org/fhir/uv/pharm-quality/2024Jan": {
        "package_id": "hl7.fhir.uv.pharm-quality",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/directory-exchange": {
        "package_id": "hl7.fhir.us.directory-exchange",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-directory-exchange": {
        "package_id": "hl7.fhir.us.directory-exchange",
        "version": "current"
    },
    "hl7.org/fhir/us/directory-exchange/2022Sep": {
        "package_id": "hl7.fhir.us.directory-exchange",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-cdex": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-ecdx": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-cdex/STU2": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/davinci-cdex/2022Sep": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-cdex/STU1.1": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-cdex/STU1": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-cdex/2021Jan": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/davinci-cdex/2019Jun": {
        "package_id": "hl7.fhir.us.davinci-cdex",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/cdmh": {
        "package_id": "hl7.fhir.us.cdmh",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cdmh": {
        "package_id": "hl7.fhir.us.cdmh",
        "version": "current"
    },
    "hl7.org/fhir/us/cdmh/STU1": {
        "package_id": "hl7.fhir.us.cdmh",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/cdmh/2019May": {
        "package_id": "hl7.fhir.us.cdmh",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/codex-radiation-therapy": {
        "package_id": "hl7.fhir.us.codex-radiation-therapy",
        "version": "latest"
    },
    "build.fhir.org/ig/codex-radiation-therapy": {
        "package_id": "hl7.fhir.us.codex-radiation-therapy",
        "version": "current"
    },
    "hl7.org/fhir/us/codex-radiation-therapy/STU1": {
        "package_id": "hl7.fhir.us.codex-radiation-therapy",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/codex-radiation-therapy/2022Sep": {
        "package_id": "hl7.fhir.us.codex-radiation-therapy",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/health-care-surveys-reporting": {
        "package_id": "hl7.fhir.us.health-care-surveys-reporting",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-health-care-surveys-reporting": {
        "package_id": "hl7.fhir.us.health-care-surveys-reporting",
        "version": "current"
    },
    "hl7.org/fhir/us/health-care-surveys-reporting/STU1": {
        "package_id": "hl7.fhir.us.health-care-surveys-reporting",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/health-care-surveys-reporting/2022Jan": {
        "package_id": "hl7.fhir.us.health-care-surveys-reporting",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/smart-web-messaging": {
        "package_id": "hl7.fhir.uv.smart-web-messaging",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/smart-web-messaging": {
        "package_id": "hl7.fhir.uv.smart-web-messaging",
        "version": "current"
    },
    "hl7.org/fhir/uv/smart-web-messaging/STU1": {
        "package_id": "hl7.fhir.uv.smart-web-messaging",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/smart-web-messaging/2020Sep": {
        "package_id": "hl7.fhir.uv.smart-web-messaging",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/patient-corrections": {
        "package_id": "hl7.fhir.uv.patient-corrections",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-patient-correction": {
        "package_id": "hl7.fhir.uv.patient-corrections",
        "version": "current"
    },
    "hl7.org/fhir/uv/patient-corrections/2022May": {
        "package_id": "hl7.fhir.uv.patient-corrections",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/pq-cmc": {
        "package_id": "hl7.fhir.us.pq-cmc",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/FHIR-us-pq-cmc": {
        "package_id": "hl7.fhir.us.pq-cmc",
        "version": "current"
    },
    "fhir.org/templates/hl7.vulcan.template": {
        "package_id": "hl7.vulcan.template",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/ig-template-vulcan": {
        "package_id": "hl7.vulcan.template",
        "version": "current"
    },
    "hl7.org/fhir/us/dme-orders": {
        "package_id": "hl7.fhir.us.dme-orders",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/dme-orders": {
        "package_id": "hl7.fhir.us.dme-orders",
        "version": "current"
    },
    "hl7.org/fhir/us/dme-orders/2020Sep": {
        "package_id": "hl7.fhir.us.dme-orders",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/dme-orders/2020May": {
        "package_id": "hl7.fhir.us.dme-orders",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/emedicinal-product-info": {
        "package_id": "hl7.fhir.uv.emedicinal-product-info",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/emedicinal-product-info": {
        "package_id": "hl7.fhir.uv.emedicinal-product-info",
        "version": "current"
    },
    "hl7.org/fhir/uv/emedicinal-product-info/STU1": {
        "package_id": "hl7.fhir.uv.emedicinal-product-info",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/emedicinal-product-info/2023Jan": {
        "package_id": "hl7.fhir.uv.emedicinal-product-info",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/eyecare": {
        "package_id": "hl7.fhir.uv.eyecare",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-eyecare-ig": {
        "package_id": "hl7.fhir.uv.eyecare",
        "version": "current"
    },
    "hl7.org/fhir/uv/eyecare/2021Sep": {
        "package_id": "hl7.fhir.uv.eyecare",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/udap-security": {
        "package_id": "hl7.fhir.us.udap-security",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-udap-security-ig": {
        "package_id": "hl7.fhir.us.udap-security",
        "version": "current"
    },
    "hl7.org/fhir/us/udap-security/STU1": {
        "package_id": "hl7.fhir.us.udap-security",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/udap-security/2021Sep": {
        "package_id": "hl7.fhir.us.udap-security",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/spl": {
        "package_id": "hl7.fhir.us.spl",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-spl": {
        "package_id": "hl7.fhir.us.spl",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-deqm": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-deqm": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-deqm/STU4": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "4.0.0"
    },
    "hl7.org/fhir/us/davinci-deqm/2023Jan": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "4.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-deqm/STU3.1": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "3.1.0"
    },
    "hl7.org/fhir/us/davinci-deqm/STU3": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "3.0.0"
    },
    "hl7.org/fhir/us/davinci-deqm/2020Sep": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/davinci-deqm/STU2": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/davinci-deqm/2020Feb": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-deqm/STU1": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-deqm/2019May": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/davinci-deqm/2018Sep": {
        "package_id": "hl7.fhir.us.davinci-deqm",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/smp": {
        "package_id": "hl7.fhir.us.smp",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/smp-ig": {
        "package_id": "hl7.fhir.us.smp",
        "version": "current"
    },
    "hl7.org/fhir/us/odh": {
        "package_id": "hl7.fhir.us.odh",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/us-odh": {
        "package_id": "hl7.fhir.us.odh",
        "version": "current"
    },
    "hl7.org/fhir/us/odh/STU1.3": {
        "package_id": "hl7.fhir.us.odh",
        "version": "1.3.0"
    },
    "hl7.org/fhir/us/odh/STU1.2": {
        "package_id": "hl7.fhir.us.odh",
        "version": "1.2.0"
    },
    "hl7.org/fhir/us/odh/STU1.1": {
        "package_id": "hl7.fhir.us.odh",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/odh/STU1": {
        "package_id": "hl7.fhir.us.odh",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/odh/2018Sep": {
        "package_id": "hl7.fhir.us.odh",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/pacio-cs": {
        "package_id": "hl7.fhir.us.pacio-cs",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-pacio-cognitive-status": {
        "package_id": "hl7.fhir.us.pacio-cs",
        "version": "current"
    },
    "hl7.org/fhir/us/pacio-cs/STU1": {
        "package_id": "hl7.fhir.us.pacio-cs",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/pacio-cs/2021Jan": {
        "package_id": "hl7.fhir.us.pacio-cs",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/mdi": {
        "package_id": "hl7.fhir.us.mdi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-mdi-ig": {
        "package_id": "hl7.fhir.us.mdi",
        "version": "current"
    },
    "hl7.org/fhir/us/mdi/STU1.1": {
        "package_id": "hl7.fhir.us.mdi",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/mdi/STU1": {
        "package_id": "hl7.fhir.us.mdi",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/mdi/2022May": {
        "package_id": "hl7.fhir.us.mdi",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/dicom-sr": {
        "package_id": "hl7.fhir.uv.dicom-sr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/dicom-sr": {
        "package_id": "hl7.fhir.uv.dicom-sr",
        "version": "current"
    },
    "hl7.org/fhir/us/mihr": {
        "package_id": "hl7.fhir.us.mihr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-mmm-ig": {
        "package_id": "hl7.fhir.us.mihr",
        "version": "current"
    },
    "hl7.org/fhir/us/mihr/STU1": {
        "package_id": "hl7.fhir.us.mihr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/mihr/2022May": {
        "package_id": "hl7.fhir.us.mihr",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/uv/crmi": {
        "package_id": "hl7.fhir.uv.crmi",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/crmi-ig": {
        "package_id": "hl7.fhir.uv.crmi",
        "version": "current"
    },
    "hl7.org/fhir/uv/crmi/2024Jan": {
        "package_id": "hl7.fhir.uv.crmi",
        "version": "1.0.0-ballot2"
    },
    "hl7.org/fhir/uv/crmi/2023Sep": {
        "package_id": "hl7.fhir.uv.crmi",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/exchange-routing": {
        "package_id": "hl7.fhir.us.exchange-routing",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-exchange-routing-ig": {
        "package_id": "hl7.fhir.us.exchange-routing",
        "version": "current"
    },
    "hl7.org/fhir/us/exchange-routing/STU1": {
        "package_id": "hl7.fhir.us.exchange-routing",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/exchange-routing/2022Jan": {
        "package_id": "hl7.fhir.us.exchange-routing",
        "version": "0.1.0"
    },
    "hl7.org/fhirpath": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/FHIRPath": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "current"
    },
    "hl7.org/fhirpath/N1/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "2.0.0"
    },
    "hl7.org/fhirpath/2019May/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "1.3.0"
    },
    "hl7.org/fhirpath/2018Sep/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "1.2.0"
    },
    "hl7.org/fhirpath/2018May/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "1.1.0"
    },
    "hl7.org/fhirpath/2017Jan/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "1.0.0"
    },
    "hl7.org/fhirpath/2016Sept/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "0.3.0"
    },
    "hl7.org/fhirpath/2016May/index.html": {
        "package_id": "hl7.fhir.uv.fhirpath",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/vrdr": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/vrdr": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "current"
    },
    "hl7.org/fhir/us/vrdr/STU2.2": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "2.2.0"
    },
    "hl7.org/fhir/us/vrdr/STU2.1": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/vrdr/STU2": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/vrdr/2021Sep": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "1.2.0"
    },
    "hl7.org/fhir/us/vrdr/STU1": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/vrdr/2019May": {
        "package_id": "hl7.fhir.us.vrdr",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/covid19library": {
        "package_id": "hl7.fhir.us.covid19library",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/covid19library": {
        "package_id": "hl7.fhir.us.covid19library",
        "version": "current"
    },
    "hl7.org/fhir/us/covid19library/informative1": {
        "package_id": "hl7.fhir.us.covid19library",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/covid19library/2022Jan": {
        "package_id": "hl7.fhir.us.covid19library",
        "version": "0.14.0"
    },
    "hl7.org/fhir/us/covid19library/2021Sep": {
        "package_id": "hl7.fhir.us.covid19library",
        "version": "0.13.0"
    },
    "hl7.org/fhir/uv/cow": {
        "package_id": "hl7.fhir.uv.cow",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-cow-ig": {
        "package_id": "hl7.fhir.uv.cow",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pdex-plan-net": {
        "package_id": "hl7.fhir.us.davinci-pdex-plan-net",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-pdex-plan-net": {
        "package_id": "hl7.fhir.us.davinci-pdex-plan-net",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pdex-plan-net/STU1.1": {
        "package_id": "hl7.fhir.us.davinci-pdex-plan-net",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-pdex-plan-net/STU1": {
        "package_id": "hl7.fhir.us.davinci-pdex-plan-net",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-pdex-plan-net/2020Feb": {
        "package_id": "hl7.fhir.us.davinci-pdex-plan-net",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-pas": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-pas": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-pas/STU2": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "2.0.1"
    },
    "hl7.org/fhir/us/davinci-pas/2022May": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "1.2.0-ballot"
    },
    "hl7.org/fhir/us/davinci-pas/STU1.1": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/davinci-pas/STU1": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-pas/2019Sep": {
        "package_id": "hl7.fhir.us.davinci-pas",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/cpg": {
        "package_id": "hl7.fhir.uv.cpg",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/cqf-recommendations": {
        "package_id": "hl7.fhir.uv.cpg",
        "version": "current"
    },
    "hl7.org/fhir/uv/cpg/2024Jan": {
        "package_id": "hl7.fhir.uv.cpg",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/uv/cpg/STU1": {
        "package_id": "hl7.fhir.uv.cpg",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/cpg/2019Sep": {
        "package_id": "hl7.fhir.uv.cpg",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/subscriptions-backport": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-subscription-backport-ig": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "current"
    },
    "hl7.org/fhir/uv/subscriptions-backport/2024Jan": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "1.2.0-ballot"
    },
    "hl7.org/fhir/uv/subscriptions-backport/STU1.1": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "1.1.0"
    },
    "hl7.org/fhir/uv/subscriptions-backport/STU1": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/subscriptions-backport/2021Jan": {
        "package_id": "hl7.fhir.uv.subscriptions-backport",
        "version": "0.1.0"
    },
    "hl7.org/fhir/us/davinci-alerts": {
        "package_id": "hl7.fhir.us.davinci-alerts",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-alerts": {
        "package_id": "hl7.fhir.us.davinci-alerts",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-alerts/STU1": {
        "package_id": "hl7.fhir.us.davinci-alerts",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-alerts/2020Feb": {
        "package_id": "hl7.fhir.us.davinci-alerts",
        "version": "0.2.0"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-sdoh-clinicalcare": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "current"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare/STU2.1": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "2.1.0"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare/STU2": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare/2022Jan": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "1.1.0"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare/STU1": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/sdoh-clinicalcare/2021Jan": {
        "package_id": "hl7.fhir.us.sdoh-clinicalcare",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/ibcm": {
        "package_id": "hl7.fhir.uv.ibcm",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fetal_records": {
        "package_id": "hl7.fhir.uv.ibcm",
        "version": "current"
    },
    "hl7.org/fhir/uv/ibcm/1.0.0-ballot": {
        "package_id": "hl7.fhir.uv.ibcm",
        "version": "1.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-atr": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/davinci-atr": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "current"
    },
    "hl7.org/fhir/us/davinci-atr/STU2": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "2.0.0"
    },
    "hl7.org/fhir/us/davinci-atr/2023Jan": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "2.0.0-ballot"
    },
    "hl7.org/fhir/us/davinci-atr/STU1": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "1.0.0"
    },
    "hl7.org/fhir/us/davinci-atr/2020Feb": {
        "package_id": "hl7.fhir.us.davinci-atr",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/phd": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/phd": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "current"
    },
    "hl7.org/fhir/uv/phd/STU1": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "1.0.0"
    },
    "hl7.org/fhir/uv/phd/2019May": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "0.3.0"
    },
    "hl7.org/fhir/uv/phd/2019Jan": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "0.2.0"
    },
    "hl7.org/fhir/uv/phd/2018Jan": {
        "package_id": "hl7.fhir.uv.phd",
        "version": "0.1.0"
    },
    "hl7.org/fhir/uv/ae-research-backport-ig": {
        "package_id": "hl7.fhir.uv.ae-research-backport-ig",
        "version": "latest"
    },
    "build.fhir.org/ig/HL7/fhir-ae-research-backport-ig": {
        "package_id": "hl7.fhir.uv.ae-research-backport-ig",
        "version": "current"
    },
    "hl7.org/fhir/uv/ae-research-backport-ig/2023Sep": {
        "package_id": "hl7.fhir.uv.ae-research-backport-ig",
        "version": "1.0.0-ballot"
    },
    "build.fhir.org/ig/joofio/spor-as-cs": {
        "package_id": "hl7.fhir.eu.spor",
        "version": "current"
    },
    "build.fhir.org/ig/joofio/ufis-swe-ig": {
        "package_id": "hl7.eu.fhir.ufis-swe-unicom",
        "version": "current"
    },
    "build.fhir.org/ig/joofio/test-epi-composition": {
        "package_id": "hl7.eu.fhir.ghepi",
        "version": "current"
    },
    "joofio.github.io/obs-cdss-fhir": {
        "package_id": "obs.cdss.ig",
        "version": "latest"
    },
    "build.fhir.org/ig/joofio/obs-cdss-fhir": {
        "package_id": "obs.cdss.ig",
        "version": "current"
    },
    "hl7.org/fhir/us/vrsandbox": {
        "package_id": "hl7.fhir.us.vrsandbox",
        "version": "latest"
    },
    "build.fhir.org/ig/nightingaleproject/vital_records_sandbox_ig": {
        "package_id": "hl7.fhir.us.vrsandbox",
        "version": "current"
    },
    "who-umc.org/idmp": {
        "package_id": "who-umc.fhir.poc-php",
        "version": "latest"
    },
    "build.fhir.org/ig/gcangioli/who-umc-poc": {
        "package_id": "who-umc.fhir.poc-php",
        "version": "current"
    },
    "hl7.org/fhir/uv/sql-on-fhir": {
        "package_id": "hl7.fhir.uv.sql-on-fhir",
        "version": "latest"
    },
    "build.fhir.org/ig/FHIR/sql-on-fhir-v2": {
        "package_id": "hl7.fhir.uv.sql-on-fhir",
        "version": "current"
    },
    "hl7.org/fhir/uv/howto": {
        "package_id": "hl7.fhir.uv.howto",
        "version": "latest"
    },
    "build.fhir.org/ig/FHIR/ig-guidance": {
        "package_id": "hl7.fhir.uv.howto",
        "version": "current"
    },
    "hl7.org/fhir/tools": {
        "package_id": "hl7.fhir.uv.tools",
        "version": "latest"
    },
    "build.fhir.org/ig/FHIR/fhir-tools-ig/": {
        "package_id": "hl7.fhir.uv.tools",
        "version": "current"
    },
    "hl7.org/fhir/tools/0.1.0": {
        "package_id": "hl7.fhir.uv.tools",
        "version": "0.1.0"
    },
    "interoperabilidad.minsal.cl/fhir/ig/eis": {
        "package_id": "hl7.fhir.cl.minsal.eis",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/eis": {
        "package_id": "hl7.fhir.cl.minsal.eis",
        "version": "current"
    },
    "hl7chile.cl/fhir/ig/deis321": {
        "package_id": "hl7.fhir.cl.deis321",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/deis": {
        "package_id": "hl7.fhir.cl.deis321",
        "version": "current"
    },
    "interoperabilidad.minsal.cl/fhir/ig/snre": {
        "package_id": "hl7.fhir.cl.minsal.snre",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/IG_snre": {
        "package_id": "hl7.fhir.cl.minsal.snre",
        "version": "current"
    },
    "minsal.cl/listaespera": {
        "package_id": "fhir.minsal.ListaDeEspera",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/SIGTEv2-IG": {
        "package_id": "hl7.fhir.cl.minsal.tei",
        "version": "current"
    },
    "interoperabilidad.minsal.cl/fhir/ig/tei": {
        "package_id": "hl7.fhir.cl.minsal.tei",
        "version": "latest"
    },
    "interoperabilidad.minsal.cl/fhir/ig/mpi": {
        "package_id": "hl7.fhir.cl.minsal.mpi",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/IG_mpi": {
        "package_id": "hl7.fhir.cl.minsal.mpi",
        "version": "current"
    },
    "minsal.cl/fhir/core": {
        "package_id": "minsal.fhir.core",
        "version": "latest"
    },
    "build.fhir.org/ig/Minsal-CL/MFR": {
        "package_id": "hl7.fhir.cl.minsal.mfr",
        "version": "current"
    },
    "interoperabilidad.minsal.cl/fhir/ig/mfr": {
        "package_id": "hl7.fhir.cl.minsal.mfr",
        "version": "latest"
    }
};

