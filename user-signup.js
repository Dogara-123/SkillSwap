document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signupBtn");

    signupBtn.addEventListener("click", function () {
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const agree = document.getElementById("agree").checked;

        if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (!agree) {
            alert("Please agree to Privacy Policy");
            return;
        }

        const user = {
            fullname,
            email,
            password
        };

        localStorage.setItem("skillswapUser", JSON.stringify(user));

        alert("Signup successful 🎉");

        window.location.href = "signin.html";
    });
});