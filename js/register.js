// Initial setup to clear error line on load
var errorLine = document.getElementById('error-line');
errorLine.innerHTML = "";

// Add event listener to the register button
document.getElementById('register-btn').addEventListener('click', validateForm);

// Function to validate the form inputs
function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var conPass = document.getElementById('con-pass').value;

    var hasUpper = false;
    var hasLower = false;
    var hasNumber = false;
    var hasSymbol = false;
    var symbol = ['!', '@', '#'];

    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z') {
            hasUpper = true;
        } else if (pass[i] >= 'a' && pass[i] <= 'z') {
            hasLower = true;
        } else if (symbol.includes(pass[i])) {
            hasSymbol = true;
        } else if (pass[i] >= '0' && pass[i] <= '9') {
            hasNumber = true;
        }
    }

    if (username === "") {
        errorLine.innerHTML = "Please enter your email or username!";
    } else if (pass === "") {
        errorLine.innerHTML = "Please enter your password!";
    } else if (!hasUpper) {
        errorLine.innerHTML = "Password must contain at least 1 uppercase letter!";
    } else if (!hasLower) {
        errorLine.innerHTML = "Password must contain at least 1 lowercase letter!";
    } else if (!hasSymbol) {
        errorLine.innerHTML = "Password must contain at least 1 symbol!";
    } else if (!hasNumber) {
        errorLine.innerHTML = "Password must contain at least 1 number!";
    } else if (pass.length < 8) {
        errorLine.innerHTML = "Password must be at least 8 characters long!";
    } else if (pass !== conPass) {
        errorLine.innerHTML = "Passwords do not match!";
    } else {
        registerUser(username, pass);
    }
}

// Function to register user by saving to localStorage
function registerUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the list
    users.push({ username: username, password: password });

    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful");
    window.location.href = '../html/main-course.html';
}
