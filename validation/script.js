document.addEventListener("DOMContentLoaded", function () {
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitBtn");

    submitButton.addEventListener("click", function () {
        const loginValue = loginInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        if (loginValue.length <= 8 || passwordValue.length <= 8) {
            alert("WRONG FORMAT"); 
        } else {
            alert(`Login: ${loginValue}\nPassword: ${passwordValue}`);
        }
    });
});
