// Show additional details when the "View More" button is clicked
document.getElementById("view-more-btn").addEventListener("click", () => {
    const detailsSection = document.getElementById("details-section");
    detailsSection.classList.toggle("hidden");
    detailsSection.style.display = detailsSection.classList.contains("hidden") ? "none" : "block";
  });
  