# Registration Form with Validation

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Form</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="container">
    <form id="registrationForm">
      <h2>Registration Form</h2>

      <div class="form-grid">

        <!-- Name -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
          <small class="error"></small>
        </div>

        <!-- Mobile Number -->
        <div class="form-group">
          <label for="phone">Mobile Number</label>
          <input type="text" id="phone" placeholder="Enter your mobile number" />
          <small class="error"></small>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <small class="error"></small>
        </div>

        <!-- Language -->
        <div class="form-group">
          <label for="language">Language</label>
          <select id="language">
            <option value="">Select Language</option>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>German</option>
          </select>
          <small class="error"></small>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <div class="strength" id="strength"></div>
          <small class="error"></small>
        </div>

        <!-- Attachment -->
        <div class="form-group">
          <label for="file">Attachment</label>
          <input type="file" id="file" />
          <small class="error"></small>
        </div>

        <!-- Confirm Password -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm password" />
          <small class="error"></small>
        </div>

        <!-- Gender -->
        <div class="form-group gender-group">
          <label>Gender</label>
          <div class="gender-options">
            <label><input type="radio" name="gender" value="Male" /> Male</label>
            <label><input type="radio" name="gender" value="Female" /> Female</label>
          </div>
          <small class="error"></small>
        </div>

      </div>

      <!-- Terms -->
      <div class="terms">
        <label>
          <input type="checkbox" id="terms" />
          I accept the Terms & Conditions
        </label>
        <small class="error"></small>
      </div>

      <button type="submit">Register Now</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## style.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: linear-gradient(to right, #0f172a, #1e293b);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  background: white;
  width: 100%;
  max-width: 900px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #0f172a;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
  color: #334155;
}

input,
select {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  transition: 0.3s ease;
}

input:focus,
select:focus {
  border-color: #2563eb;
}

button {
  margin-top: 25px;
  width: 100%;
  padding: 14px;
  background: #2563eb;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #1d4ed8;
}

.error {
  color: red;
  font-size: 13px;
  margin-top: 4px;
}

.gender-options {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.terms {
  margin-top: 20px;
}

.strength {
  margin-top: 6px;
  font-size: 13px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 25px;
  }
}
```

---

## script.js

```javascript
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");
const languageInput = document.getElementById("language");
const fileInput = document.getElementById("file");
const termsInput = document.getElementById("terms");
const strengthText = document.getElementById("strength");

function showError(input, message) {
  input.parentElement.querySelector(".error").innerText = message;
}

function clearError(input) {
  input.parentElement.querySelector(".error").innerText = "";
}

function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  clearError(nameInput);
  return true;
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email");
    return false;
  }

  clearError(emailInput);
  return true;
}

function validatePassword() {
  const password = passwordInput.value;

  if (password.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    strengthText.innerText = "Weak Password";
    strengthText.style.color = "red";
    return false;
  }

  if (password.length >= 6 && password.length < 10) {
    strengthText.innerText = "Medium Password";
    strengthText.style.color = "orange";
  } else {
    strengthText.innerText = "Strong Password";
    strengthText.style.color = "green";
  }

  clearError(passwordInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.value !== passwordInput.value) {
    showError(confirmPassword, "Passwords do not match");
    return false;
  }

  clearError(confirmPassword);
  return true;
}

function validatePhone() {
  const phonePattern = /^[0-9]{10}$/;

  if (!phonePattern.test(phoneInput.value.trim())) {
    showError(phoneInput, "Enter a valid 10-digit number");
    return false;
  }

  clearError(phoneInput);
  return true;
}

function validateLanguage() {
  if (languageInput.value === "") {
    showError(languageInput, "Please select a language");
    return false;
  }

  clearError(languageInput);
  return true;
}

function validateFile() {
  const allowedExtensions = /(.jpg|.jpeg|.png|.pdf|.zip)$/i;

  if (!allowedExtensions.exec(fileInput.value)) {
    showError(fileInput, "Only JPG, PNG, PDF or ZIP files allowed");
    return false;
  }

  clearError(fileInput);
  return true;
}

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const error = document.querySelector(".gender-group .error");

  if (!gender) {
    error.innerText = "Please select gender";
    return false;
  }

  error.innerText = "";
  return true;
}

function validateTerms() {
  const error = document.querySelector(".terms .error");

  if (!termsInput.checked) {
    error.innerText = "You must accept the terms";
    return false;
  }

  error.innerText = "";
  return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);
phoneInput.addEventListener("input", validatePhone);
languageInput.addEventListener("change", validateLanguage);
fileInput.addEventListener("change", validateFile);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword() &&
    validatePhone() &&
    validateLanguage() &&
    validateFile() &&
    validateGender() &&
    validateTerms();

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
    strengthText.innerText = "";
  }
});
```

---

# README.md

```md
# Registration Form with Validation

This project is a responsive registration form built using HTML, CSS, and JavaScript.

## Features

- Real-time form validation
- Password confirmation validation
- Password strength indicator
- File upload validation
- Responsive design
- Mobile number validation
- Terms & Conditions checkbox validation

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run the Project

1. Download or clone the project files.
2. Open the folder in VS Code.
3. Open `index.html` in your browser.

## GitHub Submission

Push the project to your GitHub repository and submit the repository link.
```

---

# Folder Structure

```bash
registration-form/
│
├── index.html
├── style.css
├── script.js
└── README.md
```
