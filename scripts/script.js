document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section[id]");
    const backLinks = document.querySelectorAll(".back-link");

    function updateActiveLink() {
        let current = "";

        sections.forEach((section) => {
            const top = section.offsetTop - 140;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    backLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});