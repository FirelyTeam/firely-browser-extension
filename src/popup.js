import {
    generateSearchUrl,
    updateUI,
} from './functions.js';

console.log('Firely FHIR Extension: This is where popup.js logs to the console.');

// Add listener to the search field
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var searchUrl = generateSearchUrl(document);
    chrome.tabs.create({url: searchUrl});
});

document.addEventListener("DOMContentLoaded", function() {

    // Add listener to the Firely logo
    var firelyLogo = document.getElementById("firely-logo");
    firelyLogo.onclick = function() {
        chrome.tabs.create({url: "https://fire.ly"});
    };

    // Focus on the search field
    var searchQuery = document.getElementById("search-query");
    searchQuery.focus();
});

// Get FHIR Version and Path from current tab
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    updateUI(tabs[0].url);
});
  