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

  // Handle dropdown menu
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const resetButton = document.getElementById("reset-button");

  // Toggle dropdown menu
  dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
  });

  // Prevent dropdown from closing when clicking inside it
  dropdownMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Add listener to the reset button
  resetButton.addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      resetClicked(tabs[0].url, statusMessage);
    });
    dropdownMenu.classList.remove('show');
  });

  // Focus on the search field
  var searchQuery = document.getElementById("search-query");
  searchQuery.focus();

  // Get FHIR Version and Path from current tab
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    updateUI(tabs[0].url, statusMessage);
  });
});


