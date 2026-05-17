const form = document.getElementById('regForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    let valid = true;

    // Name validation
    const name = form.name.value.trim();
    if (name === '') {
      valid = false;
      document.getElementById('nameError').textContent = 'Please enter your full name.';
    }

    // Email validation
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      valid = false;
      document.getElementById('emailError').textContent = 'Please enter your email.';
    } else if (!emailPattern.test(email)) {
      valid = false;
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
    }

    // Password validation
    const password = form.password.value;
    if (password === '') {
      valid = false;
      document.getElementById('passwordError').textContent = 'Please enter a password.';
    } else if (password.length < 6) {
      valid = false;
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    }

    // Confirm Password validation
    const confirmPassword = form.confirmPassword.value;
    if (confirmPassword === '') {
      valid = false;
      document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      valid = false;
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    // Mobile validation (simple digits check)
    const mobile = form.mobile.value.trim();
    const mobilePattern = /^[0-9]{10,15}$/;
    if (mobile === '') {
      valid = false;
      document.getElementById('mobileError').textContent = 'Please enter your mobile number.';
    } else if (!mobilePattern.test(mobile)) {
      valid = false;
      document.getElementById('mobileError').textContent = 'Enter a valid mobile number (10-15 digits).';
    }

    // Language validation
    const language = form.language.value;
    if (language === '') {
      valid = false;
      document.getElementById('languageError').textContent = 'Please select a language.';
    }

    // Attachment validation
    const attachment = form.attachment.value;
    if (attachment === '') {
      valid = false;
      document.getElementById('attachmentError').textContent = 'Please upload an attachment.';
    }

    // Gender validation
    const gender = form.gender.value;
    if (!gender) {
      valid = false;
      document.getElementById('genderError').textContent = 'Please select your gender.';
    }

    // Terms validation
    const terms = form.terms.checked;
    if (!terms) {
      valid = false;
      document.getElementById('termsError').textContent = 'You must accept the terms of use.';
    }

    if (valid) {
      alert('Registration successful!');
      form.reset();
    }
  });