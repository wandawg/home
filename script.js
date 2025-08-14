// Auto-glow on page load
document.addEventListener("DOMContentLoaded", function() {
    // Glow the header
    const header = document.querySelector("header");
    header.classList.add("glow-effect");
    setTimeout(() => header.classList.remove("glow-effect"), 1500);

    // Glow each tournament card in sequence
    const cards = document.querySelectorAll(".tournament-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("auto-glow");
            setTimeout(() => card.classList.remove("auto-glow"), 1200);
        }, index * 400); // delay each card glow
    });
});

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

// Trigger glowing header on page load
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    if (header) {
        header.classList.add("glow-effect");
        setTimeout(() => {
            header.classList.remove("glow-effect");
        }, 1500); // Remove after animation ends
    }
});

// Auto-glow tournament cards on page load
const tournamentCards = document.querySelectorAll(".tournament-card");
tournamentCards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.add("auto-glow");
        setTimeout(() => {
            card.classList.remove("auto-glow");
        }, 1200); // remove after glow animation
    }, index * 300); // stagger each card's glow
});

// Get modal & close button
const modal = document.getElementById("tournamentModal");
const closeBtn = modal.querySelector(".close");

// Open modal
document.querySelectorAll(".open-tournament").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
