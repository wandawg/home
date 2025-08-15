// Open the modal with dynamic content + fade-in effect
function openModal(title, prize, fee, organiser, rules, registerLink) {
    const modal = document.getElementById('tournamentModal');
    
    // Update modal content
    modal.querySelector('h2').textContent = title;
    const paragraphs = modal.querySelectorAll('p');
    paragraphs[0].textContent = prize;
    paragraphs[1].textContent = fee;
    paragraphs[2].textContent = organiser;
    paragraphs[3].textContent = rules;

    // Update register link
    modal.querySelector('a').href = registerLink;

    // Show modal with fade-in
    modal.classList.add('show');
}

// Close modal when clicking X
document.querySelector('.close').onclick = function() {
    closeModal();
};

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('tournamentModal');
    if (event.target === modal) {
        closeModal();
    }
};

function closeModal() {
    const modal = document.getElementById('tournamentModal');
    modal.classList.remove('show');
}
