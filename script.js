function scrollToRoutine() {
    document.getElementById("routine").scrollIntoView({
        behavior: "smooth"
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function editRoutine(card) {
    let activity = prompt("Enter your activity:");
    if (activity) {
        card.querySelector("span").innerText = activity;
    }
}
function editRoutine(card) {
    let activity = prompt("Enter your activity:");
    if (activity) {
        card.querySelector("span").innerText = activity;
        localStorage.setItem(card.id, activity);
    }
}

window.onload = function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let saved = localStorage.getItem(card.id);
        if (saved) {
            card.querySelector("span").innerText = saved;
        }
    });
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}