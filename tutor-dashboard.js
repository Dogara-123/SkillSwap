document.addEventListener("DOMContentLoaded", function () {


    const menuItems = document.querySelectorAll(".sidebar .menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const enrollButtons = document.querySelectorAll(".course-card .btn");

    enrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Enrollment feature coming soon 🚀");
        });
    });

    const searchInput = document.querySelector(".header .search");
    const courseCards = document.querySelectorAll(".course-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const searchValue = searchInput.value.toLowerCase();

            courseCards.forEach(card => {
                const courseName = card.querySelector(".body p").textContent.toLowerCase();
                if (courseName.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }


    const logoutBtn = document.querySelector(".sidebar .bottom li:last-child");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("Tutor logged out 👋");
            window.location.href = "signin.html";
        });
    }

});