// When the page loads, trigger the animation
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("page-loaded");

    // Handle link clicks for exit animation
    document.querySelectorAll("a").forEach(link => {
        if (link.href && !link.href.includes("#") && !link.target) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                document.body.classList.add("page-exit");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 600); // Match transition duration
            });
        }
    });
});

function openModal(title, prize, fee, organiser, rules, formLink) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrize").innerText = prize;
    document.getElementById("modalFee").innerText = fee;
    document.getElementById("modalOrganiser").innerText = organiser;
    document.getElementById("modalRules").innerText = rules;
    document.getElementById("registerLink").href = formLink;
    document.getElementById("tournamentModal").style.display = "block";
}

function closeModal() {
    document.getElementById("tournamentModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("tournamentModal")) {
        closeModal();
    }
}
