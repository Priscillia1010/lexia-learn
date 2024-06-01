var errorLine = document.getElementById('error-line');
errorLine.innerHTML = "";
document.getElementById('login-btn').addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    var registeredUsername = localStorage.getItem('registeredUsername');
    var registeredPassword = localStorage.getItem('registeredPassword');

    if (username === "") {
        errorLine.innerHTML = "Please enter your email or username!";
    } else if (pass === "") {
        errorLine.innerHTML = "Please enter your password!";
    } else if (username !== registeredUsername || pass !== registeredPassword) {
        errorLine.innerHTML = "Invalid username or password!";
    } else {
        alert("Login successful");
        window.location.href = '../html/main-course.html';
    }
}
