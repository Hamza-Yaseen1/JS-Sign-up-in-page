// Data storage for registered users
let users = [];

// Sign Up
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (users.find(user => user.email === email)) {
        document.getElementById("signup-error").innerText = "Error: Email already exists";
        return;
    }

    users.push({ email, password });
    console.log("User signed up successfully:", email);
    document.getElementById("signup-error").innerText = "";
    document.getElementById("signup-form").reset();
});

// Sign In
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("User signed in successfully:", email);
        document.getElementById("signin-error").innerText = "";
        // Redirect to a new page or perform other actions after successful sign-in
    } else {
        document.getElementById("signin-error").innerText = "Error: Incorrect email or password";
    }
});
