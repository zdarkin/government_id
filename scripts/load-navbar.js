document.addEventListener("DOMContentLoaded", () => {
    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const navbarPath = isInPagesFolder ? "../components/navbar.html" : "components/navbar.html";

    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            adjustNavbarLinks(isInPagesFolder);
            initHamburgerMenu();
        })
        .catch(error => console.error("Error loading the navbar:", error));
});

function adjustNavbarLinks(isInPagesFolder) {
    const linkMap = {
        "index.html": isInPagesFolder ? "../index.html" : "index.html",
        "all-ids.html": isInPagesFolder ? "all-ids.html" : "pages/all-ids.html",
        "about.html": isInPagesFolder ? "about.html" : "pages/about.html",
        "employment.html": isInPagesFolder ? "employment.html" : "pages/employment.html",
        "licensure.html": isInPagesFolder ? "licensure.html" : "pages/licensure.html",
        "special-groups.html": isInPagesFolder ? "special-groups.html" : "pages/special-groups.html",
        "clearances.html": isInPagesFolder ? "clearances.html" : "pages/clearances.html",
        "institutional.html": isInPagesFolder ? "institutional.html" : "pages/institutional.html"
    };

    document.querySelectorAll("#navLinks a").forEach(link => {
        const originalHref = link.getAttribute("href");
        if (linkMap[originalHref]) {
            link.setAttribute("href", linkMap[originalHref]);
        }
    });

    const logoImg = document.querySelector(".logo img");
    if (logoImg) {
        logoImg.setAttribute("src", isInPagesFolder ? "../assets/images/logo.png" : "assets/images/logo.png");
    }
}

function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
}
