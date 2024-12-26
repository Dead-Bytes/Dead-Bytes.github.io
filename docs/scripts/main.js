// This file contains the JavaScript code for the portfolio. 
// It may include functionality such as interactive elements, animations, or data fetching.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeButton = document.getElementById('close-menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            toggleButton.classList.toggle('active');
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            toggleButton.classList.remove('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .side-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Hide side menu after clicking a link
            sideMenu.classList.remove('active');
            toggleButton.classList.remove('active');
        });
    });
});