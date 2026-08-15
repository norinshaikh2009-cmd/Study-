// ============================
// MOBILE MENU
// ============================

function toggleMenu() {

    const navLinks =
        document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// ============================
// CURRENT YEAR
// ============================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ============================
// STUDY BUTTON
// ============================

function showMessage(subject) {

    alert(
        "Great choice! You selected " +
        subject +
        ". Start learning and keep practicing!"
    );

}


// ============================
// CLOSE MOBILE MENU
// ============================

const menuLinks =
    document.querySelectorAll(".nav-links a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navLinks =
            document.querySelector(".nav-links");

        navLinks.classList.remove("active");

    });

});
