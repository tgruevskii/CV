document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".up");

    // Show the button when the user scrolls down 300 pixels
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 1,
            behavior: "smooth"
        });
    });
});
