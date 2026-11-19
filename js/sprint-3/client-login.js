// basic demo credentials; client-side checks are not secure authentication.
const CLIENT_USERNAME = "client";
const CLIENT_PASSWORD = "goodhikes";
const LOGIN_SESSION_KEY = "goodHikesClientLoggedIn";

// send an already logged-in client straight to the notes page
if (sessionStorage.getItem(LOGIN_SESSION_KEY) === "true") {
    window.location.replace("./guide-notes.html");
}

document.getElementById("login-form").addEventListener("submit", function (event) {
    // handle the credentials here instead of submitting and reloading the form
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const message = document.getElementById("login-message");

    if (username === CLIENT_USERNAME && password === CLIENT_PASSWORD) {
        sessionStorage.setItem(LOGIN_SESSION_KEY, "true");
        window.location.assign("./guide-notes.html");
        return;
    }

    message.textContent = "Incorrect username or password. Please try again.";
});
