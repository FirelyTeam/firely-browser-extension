import {
  generateSearchUrl,
  updateUI,
  refreshClicked,
  resetClicked
} from './functions.js';

console.log('Firely FHIR Extension: This is where popup.js logs to the console.');

document.addEventListener("DOMContentLoaded", function() {

  // Add listener to the Firely logo
  var firelyLogo = document.getElementById("firely-logo");
  firelyLogo.onclick = function() {
      chrome.tabs.create({url: "https://fire.ly"});
  };

  // Add listener to the search field
  var searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var searchUrl = generateSearchUrl(document);
      chrome.tabs.create({url: searchUrl});
  });

  // Add listener to the refresh link
  var refreshLink = document.getElementById("refresh-link");
  refreshLink.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      refreshClicked(tabs[0].url);
    });
  });

  // Add listener to the reset link
  var resetLink = document.getElementById("reset-link");
  resetLink.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      resetClicked(tabs[0].url);
    });
  });

  // Focus on the search field
  var searchQuery = document.getElementById("search-query");
  searchQuery.focus();
});

// Get FHIR Version and Path from current tab
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  updateUI(tabs[0].url);
});
