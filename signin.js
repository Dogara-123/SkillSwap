document.addEventListener("DOMContentLoaded", function () {
    const signinBtn = document.getElementById("signinBtn");

    signinBtn.addEventListener("click", function () {
        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value;

        const savedUser = JSON.parse(localStorage.getItem("skillswapUser"));

        if (!savedUser) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            alert("Login successful 🎉");

            window.location.href = "user-dashboard.html";
        } else {
            alert("Invalid email or password");
        }
    });
});