'use strict';

// Selecting modal elements
const modal = document.querySelector('[data-modal]'); // The modal popup
const modalCloseBtn = document.querySelector('[data-modal-close]'); // Close button inside the modal
const modalCloseOverlay = document.querySelector('[data-modal-overlay]'); // The overlay (background) that closes the modal when clicked

// Function to close the modal
const modalCloseFunc = function () { 
  modal.classList.add('closed'); // Adds the 'closed' class to hide the modal
}

// Event listeners to close the modal when clicking the close button or overlay
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


// Selecting notification toast elements
const notificationToast = document.querySelector('[data-toast]'); // The notification toast
const toastCloseBtn = document.querySelector('[data-toast-close]'); // Button to close the toast

// Event listener to close the toast when clicking the close button
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed'); // Adds 'closed' class to hide the toast
});


// Selecting mobile menu elements
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]'); // Buttons to open the mobile menu
const mobileMenu = document.querySelectorAll('[data-mobile-menu]'); // The mobile menu itself
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]'); // Buttons to close the mobile menu
const overlay = document.querySelector('[data-overlay]'); // The overlay that appears when the menu is open

// Loop through all mobile menu open buttons (for cases where there are multiple menus)
for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // Function to close the mobile menu
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active'); // Removes 'active' class to hide the menu
    overlay.classList.remove('active'); // Hides the overlay
  }

  // Open the mobile menu when clicking the open button
  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active'); // Adds 'active' class to show the menu
    overlay.classList.add('active'); // Shows the overlay
  });

  // Close the mobile menu when clicking the close button or overlay
  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}


// Selecting accordion elements
const accordionBtn = document.querySelectorAll('[data-accordion-btn]'); // Buttons that expand/collapse the accordion
const accordion = document.querySelectorAll('[data-accordion]'); // The accordion content

// Loop through all accordion buttons
for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active'); // Check if the clicked accordion is already open

    // Loop through all accordions to close any open one before opening a new one
    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break; // If the clicked one is already open, stop here

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active'); // Close any open accordion
        accordionBtn[i].classList.remove('active'); // Remove active state from the button
      }

    }

    // Toggle the clicked accordion (open if closed, close if open)
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
