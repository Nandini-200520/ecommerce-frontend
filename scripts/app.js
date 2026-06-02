document.addEventListener("DOMContentLoaded", () => {

    // HAMBURGER MENU 
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // CART COUNTER
    let count = 0;
    const cartCount = document.querySelector(".cart-count");

    document.querySelectorAll(".add").forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            cartCount.textContent = count;
        });
    });

});