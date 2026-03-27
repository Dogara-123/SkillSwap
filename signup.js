// 1. Initialize Supabase correctly
// Make sure the URL does NOT have a capital 'L' at the end
const supabaseUrl = 'https://vnsbpedtrrlvbrcmuiez.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuc2JwZWR0cnJsdmJyY211aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTA3NDEsImV4cCI6MjA5MDAyNjc0MX0.WnYh--8VoGhWrM4PLi2IELmVUSbJ24z6n9UK5TXM34Y';

// We use '_supabase' to avoid clashing with the global 'supabase' library object
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
// Get elements
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