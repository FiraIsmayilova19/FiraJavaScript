document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault();
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const loginError = document.getElementById("loginError");
    const passwordError = document.getElementById("passwordError");
    const emailError = document.getElementById("emailError");
    const resultMessage = document.getElementById("resultMessage");
    let isTrue = true;
    if (login.length <= 8 || /\d/.test(login) || /^[A-Z]/.test(login)) {
        loginError.textContent = "Login must be longer than 8 characters, should not contain numbers, and the first letter must be lowercase.";
        isTrue = false;
    }
    if (password.length <= 8 || !/\d/.test(password) || /^[a-z]/.test(password)) {
        passwordError.textContent = "Password must be longer than 8 characters, contain numbers, and the first letter must be uppercase.";
        isTrue = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Email must be in the correct format (e.g., user@example.com).";
        isTrue = false;
    }
    if (isTrue) {
        resultMessage.textContent = "Data successfully submitted!";
        resultMessage.className = "success";
    } else {
        resultMessage.textContent = "Please correct the errors.";
        resultMessage.className = "error";
    }
});
