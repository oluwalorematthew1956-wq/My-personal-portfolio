// Portfolio - script.js - Oluwalore Matthew
// Websites for Restaurants in USA, UK & Canada

document.addEventListener("DOMContentLoaded", () => {
  // ===== CONTACT PAGE - Form Validation =====
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const restaurant = document.getElementById("restaurant");
      const country = document.getElementById("country");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const message = document.getElementById("message");

      // Helper: stop + show message + focus
      function showError(msg, field) {
        e.preventDefault();
        alert(msg);
        if (field) field.focus();
        return false;
      }

      // 1. No field is empty
      if (firstName && firstName.value.trim() === "") {
        return showError("Please enter your First Name.", firstName);
      }
      if (lastName && lastName.value.trim() === "") {
        return showError("Please enter your Last Name.", lastName);
      }
      if (restaurant && restaurant.value.trim() === "") {
        return showError("Please enter your Restaurant Name.", restaurant);
      }
      if (country && country.value === "") {
        return showError(
          "Please choose your country - USA, UK or Canada.",
          country,
        );
      }
      if (email && email.value.trim() === "") {
        return showError("Please enter your Email Address.", email);
      }
      if (phone && phone.value.trim() === "") {
        return showError("Please enter your WhatsApp Number.", phone);
      }
      if (message && message.value.trim() === "") {
        return showError(
          "Please type your message about your restaurant.",
          message,
        );
      }

      // 2. Email format is valid - must have @ and .
      // Better check: something@something.something
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        return showError(
          "Please enter a valid Email Address, e.g. john@restaurant.com",
          email,
        );
      }

      // 3. Phone / WhatsApp - allow + , spaces, - , ( ) for USA / UK / Canada
      // Example: +1 555 123 4567, +44 20 1234 5678
      // Must have at least 7 digits, max 15 digits
      if (phone) {
        const digitsOnly = phone.value.replace(/[^0-9]/g, "");
        if (
          !/^[+0-9\s\-()]+$/.test(phone.value.trim()) ||
          digitsOnly.length < 7 ||
          digitsOnly.length > 15
        ) {
          return showError(
            "Please enter a valid WhatsApp Number, e.g. +1 555 123 4567",
            phone,
          );
        }
      }

      // If form is Netlify / normal form, let it submit normally
      // If you want WhatsApp only, it will still show thank you
      alert(
        "Thank you " +
          firstName.value.trim() +
          "! Your message has been received. I will reply within 24 hours.",
      );
      // Do NOT preventDefault here - let the form submit
    });
  }

  // ===== ALL PAGES - Video Play / Pause on click =====
  // Fixed: now works for ALL videos, not only first one
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });

  // ===== FOOTER - Auto Year (optional, no error if no footer year) =====
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
