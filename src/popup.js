import {
  generateSearchUrl,
  updateUI,
  resetClicked
} from './functions.js';

document.addEventListener("DOMContentLoaded", function() {

  let statusMessage = document.getElementById('status-message');

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

  // Add listener to the reset button
  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      resetClicked(tabs[0].url, statusMessage);
    });
  });

  // Focus on the search field
  var searchQuery = document.getElementById("search-query");
  searchQuery.focus();

  // Get FHIR Version and Path from current tab
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    updateUI(tabs[0].url, statusMessage);
  });
});


