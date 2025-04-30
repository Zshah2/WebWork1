// Popup Data (Dynamic Content)
const popupData = {
    "Time Management": "Use a planner, set time blocks, and avoid distractions to stay productive. Break tasks into smaller parts and prioritize them based on urgency.",
    "Effective Note-Taking": "Try methods like Cornell Notes, Mind Mapping, and Active Recall. Writing by hand improves memory retention.",
    "Focus Techniques": "Use Pomodoro, eliminate distractions, and take short breaks for better focus. Meditation and music can also help."
};

// Open Popup Function
function openPopup(title) {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupText").textContent = popupData[title] || "More information coming soon!";
    document.getElementById("popupCard").style.display = "flex";
}

// Close Popup Function
function closePopup() {
    document.getElementById("popupCard").style.display = "none";
}

// Attach Click Events to All "Learn More" Buttons
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function() {
        const title = this.getAttribute("data-topic");
        openPopup(title);
    });
});

// Close Popup When Clicking Outside of It
window.onclick = function(event) {
    if (event.target.id === "popupCard") {
        closePopup();
    }
};
