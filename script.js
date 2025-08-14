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
