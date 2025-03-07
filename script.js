document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                this.textContent = "Hide Ingredients & Nutrition";
            } else {
                details.style.display = "none";
                this.textContent = "Show Ingredients & Nutrition";
            }
        });
    });

    // Implement search functionality
    const searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();
        const snackCards = document.querySelectorAll(".snack-card");

        snackCards.forEach(card => {
            const snackName = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = snackName.includes(searchText) ? "block" : "none";
        });
    });
});
