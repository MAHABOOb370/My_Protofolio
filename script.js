
// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING NAVIGATION LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

    });

});


// DYNAMIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
