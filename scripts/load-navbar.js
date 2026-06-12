document.addEventListener("DOMContentLoaded", () => {
    const isInPagesFolder = window.location.pathname.includes("/pages/");
    const navbarPath = isInPagesFolder ? "../components/navbar.html" : "components/navbar.html";
    const footerPath = isInPagesFolder ? "../components/footer.html" : "components/footer.html";

    // 1. Load Navbar
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("navbar-container");
            if (container) {
                container.innerHTML = data;
                adjustNavbarLinks(isInPagesFolder);
                initHamburgerMenu();
                initThemeToggle();
                initGlobalSearch(isInPagesFolder);
            }
        })
        .catch(error => console.error("Error loading the navbar:", error));

    // 2. Load Footer
    // If pages don't have footer-container, we can dynamically append it
    let footerContainer = document.getElementById("footer-container");
    if (!footerContainer) {
        footerContainer = document.createElement("div");
        footerContainer.id = "footer-container";
        document.body.appendChild(footerContainer);
    }

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
            adjustFooterLinks(isInPagesFolder);
            // Set year
            const yearEl = document.getElementById("footerYear");
            if (yearEl) yearEl.textContent = new Date().getFullYear();
        })
        .catch(error => console.error("Error loading the footer:", error));

    // 3. Add Back-to-Top Button Dynamically
    addBackToTopButton();
});

// Resolves a link href based on current folder context
function resolvePath(href, isInPagesFolder) {
    if (href === "index.html") {
        return isInPagesFolder ? "../index.html" : "index.html";
    }
    return isInPagesFolder ? href : `pages/${href}`;
}

function adjustNavbarLinks(isInPagesFolder) {
    const navHrefs = ["index.html", "all-ids.html", "compare.html", "finder.html", "faq.html", "about.html", "contact.html"];
    const linkMap = Object.fromEntries(navHrefs.map(href => [href, resolvePath(href, isInPagesFolder)]));

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navLinks a").forEach(link => {
        const originalHref = link.getAttribute("href");
        if (linkMap[originalHref]) {
            link.setAttribute("href", linkMap[originalHref]);
        }
        // Highlight active page
        if (originalHref === currentPage || (currentPage === "" && originalHref === "index.html")) {
            link.classList.add("active");
        }
    });

    const logoImg = document.querySelector(".logo img");
    if (logoImg) {
        logoImg.setAttribute("src", isInPagesFolder ? "../assets/images/logo.png" : "assets/images/logo.png");
    }
    const logoLink = document.querySelector(".logo");
    if (logoLink) {
        logoLink.setAttribute("href", isInPagesFolder ? "../index.html" : "index.html");
    }
}

function adjustFooterLinks(isInPagesFolder) {
    const footerHrefs = [
        "index.html", "all-ids.html", "compare.html", "finder.html", "faq.html", "about.html", "contact.html",
        "category.html?cat=national-civil", "category.html?cat=employment", "category.html?cat=licensure",
        "category.html?cat=special-groups", "category.html?cat=clearances", "category.html?cat=institutional"
    ];
    const linkMap = Object.fromEntries(footerHrefs.map(href => [href, resolvePath(href, isInPagesFolder)]));

    document.querySelectorAll(".footer-links a").forEach(link => {
        const originalHref = link.getAttribute("href");
        if (linkMap[originalHref]) {
            link.setAttribute("href", linkMap[originalHref]);
        }
    });
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

// Dark Mode Toggle Logic
function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");

    // Check system preference if no saved preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-theme");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", currentTheme);
        });
    }
}

// Global Live Search Logic
function initGlobalSearch(isInPagesFolder) {
    const searchInput = document.getElementById("navSearchInput");
    const suggestionsBox = document.getElementById("searchSuggestions");
    if (!searchInput || !suggestionsBox) return;

    // If data is already loaded, attach listener immediately
    if (typeof idDatabase !== "undefined" && typeof idDetails !== "undefined") {
        attachSearchListener(searchInput, suggestionsBox, isInPagesFolder);
        return;
    }

    // Otherwise load scripts sequentially, then attach listener
    const scriptData = document.createElement("script");
    scriptData.src = isInPagesFolder ? "../scripts/data.js" : "scripts/data.js";

    const scriptDetails = document.createElement("script");
    scriptDetails.src = isInPagesFolder ? "../scripts/data-details.js" : "scripts/data-details.js";

    scriptDetails.onload = () => attachSearchListener(searchInput, suggestionsBox, isInPagesFolder);
    scriptData.onload = () => document.head.appendChild(scriptDetails);

    document.head.appendChild(scriptData);
}

function attachSearchListener(searchInput, suggestionsBox, isInPagesFolder) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
            suggestionsBox.innerHTML = "";
            suggestionsBox.classList.remove("active");
            return;
        }

        const results = [];

        // Traverse categories and search items
        for (const catKey in idDatabase) {
            const cat = idDatabase[catKey];
            if (!cat || !cat.items) continue;

            cat.items.forEach(item => {
                const detailedInfo = idDetails[item.id] || {};
                const nameMatch = item.name.toLowerCase().includes(query);
                const taglineMatch = (item.tagline || "").toLowerCase().includes(query);

                // Also search in requirements for the ID
                const reqsStr = (detailedInfo.requirements || []).join(" ").toLowerCase();
                const reqsMatch = reqsStr.includes(query);

                if (nameMatch || taglineMatch || reqsMatch) {
                    results.push({
                        id: item.id,
                        name: item.name,
                        tagline: item.tagline || "",
                        link: isInPagesFolder ? `detail.html?id=${item.id}` : `pages/detail.html?id=${item.id}`
                    });
                }
            });
        }

        renderSuggestions(results, suggestionsBox);
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.remove("active");
        }
    });

    // Show suggestions again on focus if query exists
    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim().length >= 2) {
            suggestionsBox.classList.add("active");
        }
    });
}

function renderSuggestions(results, container) {
    container.innerHTML = "";
    if (results.length === 0) {
        const noResults = document.createElement("div");
        noResults.className = "suggestion-no-results";
        noResults.textContent = "No IDs found";
        container.appendChild(noResults);
    } else {
        results.slice(0, 5).forEach(item => {
            const a = document.createElement("a");
            a.className = "suggestion-item";
            a.href = item.link;

            const nameSpan = document.createElement("span");
            nameSpan.className = "suggestion-name";
            nameSpan.textContent = item.name;

            const descSpan = document.createElement("span");
            descSpan.className = "suggestion-desc";
            descSpan.textContent = item.tagline;

            a.appendChild(nameSpan);
            a.appendChild(descSpan);
            container.appendChild(a);
        });
    }
    container.classList.add("active");
}

// Back to Top Button
function addBackToTopButton() {
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.id = "backToTopBtn";
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    `;
    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}