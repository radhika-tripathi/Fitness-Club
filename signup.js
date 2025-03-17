document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        
        if (validateSignup(name, email, password, confirmPassword)) {
            registerUser(name, email, password);
        }
    });
});

function validateSignup(name, email, password, confirmPassword) {
    if (name.length < 3) {
        showErrorMessage("Name must be at least 3 characters long.");
        return false;
    }
    if (!validateEmail(email)) {
        showErrorMessage("Invalid email address.");
        return false;
    }
    if (!validatePassword(password)) {
        showErrorMessage("Password must be at least 6 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        showErrorMessage("Passwords do not match.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function registerUser(name, email, password) {
    console.log("Registering user:", name, email);
    
    // Simulate signup request (Replace with actual API call)
    setTimeout(() => {
        alert("Signup successful! Redirecting to login page...");
        window.location.href = "login.html";
    }, 1000);
}

function showErrorMessage(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}
