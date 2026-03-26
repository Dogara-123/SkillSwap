// 1. Initialize Supabase correctly
// Make sure the URL does NOT have a capital 'L' at the end
const supabaseUrl = 'https://vnsbpedtrrlvbrcmuiez.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuc2JwZWR0cnJsdmJyY211aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTA3NDEsImV4cCI6MjA5MDAyNjc0MX0.WnYh--8VoGhWrM4PLi2IELmVUSbJ24z6n9UK5TXM34Y';

// We use '_supabase' to avoid clashing with the global 'supabase' library object
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
// Get elements
document.addEventListener("DOMContentLoaded", function () {

    const savedUser = JSON.parse(localStorage.getItem("skillswapUser"));

    if (savedUser) {
        const userName = document.getElementById("userName");
        const userEmail = document.getElementById("userEmail");

        if (userName) userName.textContent = savedUser.fullname;
        if (userEmail) userEmail.textContent = savedUser.email;
    }

    
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("skillswapUser");
            alert("Logged out successfully 👋");
            window.location.href = "signin.html";
        });
    }

    
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(li => li.classList.remove("active"));
            this.classList.add("active");
        });
    });

   
    const searchInput = document.getElementById("searchInput");
    const courseCards = document.querySelectorAll(".course-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchValue = searchInput.value.toLowerCase();

            courseCards.forEach(card => {
                const title = card.querySelector(".course-title").textContent.toLowerCase();

                if (title.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

   
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Course details coming soon 🚀");
        });
    });

});