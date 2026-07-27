function goTo(page) {
    window.location.href = page;
}

function safe(id, fn) {
    const el = document.getElementById(id);
    if (el) fn(el);
}

safe("panini", el => el.addEventListener("click", () => goTo("panini.html")));
safe("paste", el => el.addEventListener("click", () => goTo("primi.html")));
safe("carne", el => el.addEventListener("click", () => goTo("secondi.html")));
safe("bevande-alcoliche", el => el.addEventListener("click", () => goTo("bevandeAlcoliche.html")));
safe("back-button", el => el.addEventListener("click", () => goTo("index.html")));

const backBtn = document.getElementById("back-button");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage !== "index.html") {
            goTo("index.html");
        }
    });
}
