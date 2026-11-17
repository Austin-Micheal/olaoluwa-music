
// Automatically update the footer year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});
