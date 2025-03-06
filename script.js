document.addEventListener("DOMContentLoaded", function () {
  // Handle "Sign in/Sign up" button click (on homepage)
  const signInButton = document.getElementById("button");
  if (signInButton) {
    signInButton.addEventListener("click", function () {
      window.location.href = "signup.html"; // Redirect to signup page
    });
  }

  // Handle "TRACK" button click (on homepage and tracking page)
  const trackButton = document.querySelector(".submit-button");
  const inputField = document.getElementById("input-field");
  if (trackButton && inputField) {
    trackButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      const trackingNumber = inputField.value.trim();

      // Validate that the tracking number contains only numbers
      if (/^\d+$/.test(trackingNumber)) {
        // Get the current date and time
        const now = new Date();
        const currentDateTime = now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS AM/PM"

        // Redirect to tracking page with the tracking number and current date/time as query parameters
        window.location.href = `tracking.html?trackingNumber=${trackingNumber}&dateTime=${encodeURIComponent(
          currentDateTime
        )}`;
      } else {
        alert("Please enter a valid tracking number (numbers only).");
      }
    });
  }

  // Handle tracking page functionality
  const trackingResults = document.getElementById("tracking-results");
  if (trackingResults) {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get("trackingNumber");
    const dateTime = urlParams.get("dateTime");

    if (trackingNumber) {
      // Simulate fetching tracking details (replace with actual API call)
      const trackingDetails = {
        status: "In Transit",
        location: "Lagos, Nigeria",
        estimatedDelivery: "2 days",
      };

      // Display tracking details and current date/time
      trackingResults.innerHTML = `
        <h2>Tracking Details for ${trackingNumber}</h2>
        <p><strong>Status:</strong> ${trackingDetails.status}</p>
        <p><strong>Location:</strong> ${trackingDetails.location}</p>
        <p><strong>Estimated Delivery:</strong> ${trackingDetails.estimatedDelivery}</p>
        <p><strong>Date & Time:</strong> ${dateTime}</p>
      `;
    } else {
      trackingResults.innerHTML = "<p>No tracking number provided.</p>";
    }
  }

  // Handle signup form submission
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Simulate signup logic (replace with actual API call)
      alert(`Signup successful for ${email}`);
      window.location.href = "index.html"; // Redirect to homepage after signup
    });
  }

  // Handle sign-in form submission
  const signinForm = document.getElementById("signin-form");
  if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get the values from the input fields
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Validate email and password
      if (validateEmail(email) && validatePassword(password)) {
        // Simulate successful sign-in (replace with actual API call)
        alert(`Sign-in successful for ${email}`);
        window.location.href = "index.html"; // Redirect to homepage after sign-in
      } else {
        // Display error messages if validation fails
        if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
        }
        if (!validatePassword(password)) {
          alert("Password must be at least 6 characters long.");
        }
      }
    });
  }

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  }

  // Function to validate password
  function validatePassword(password) {
    return password.length >= 6; // Password must be at least 6 characters long
  }

  // Handle "Read more" button clicks (on homepage)
  const readMoreButtons = document.querySelectorAll(".btn");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardContent = this.closest(".content");
      const paragraph = cardContent.querySelector(".para");

      // Toggle the visibility of the paragraph
      if (paragraph.style.display === "none" || !paragraph.style.display) {
        paragraph.style.display = "block";
        this.textContent = "Read less";
      } else {
        paragraph.style.display = "none";
        this.textContent = "Read more";
      }
    });
  });

  // Dropdown functionality for "Our Services" and "Our Office"
  const ourServices = document.querySelector(".lists li:nth-child(2)");
  const ourOffice = document.querySelector(".lists li:nth-child(3)");

  if (ourServices) {
    ourServices.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      const dropdown = this.querySelector(".dropdown");
      if (dropdown) {
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      }
    });

    // Create dropdown for "Our Services"
    const servicesDropdown = document.createElement("ul");
    servicesDropdown.className = "dropdown";
    servicesDropdown.innerHTML = `
      <li><a href="#">Air Freight</a></li>
      <li><a href="#">Truck</a></li>
      <li><a href="#">Sea Freight</a></li>
    `;
    ourServices.appendChild(servicesDropdown);
  }

  if (ourOffice) {
    ourOffice.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      const dropdown = this.querySelector(".dropdown");
      if (dropdown) {
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      }
    });

    // Create dropdown for "Our Office"
    const officeDropdown = document.createElement("ul");
    officeDropdown.className = "dropdown";
    officeDropdown.innerHTML = `
      <li><a href="#">Lagos</a></li>
      <li><a href="#">Abuja</a></li>
      <li><a href="#">Kaduna</a></li>
      <li><a href="#">Borno</a></li>
    `;
    ourOffice.appendChild(officeDropdown);
  }
});
