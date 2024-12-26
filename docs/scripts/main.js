// This file contains the JavaScript code for the portfolio. 
// It may include functionality such as interactive elements, animations, or data fetching.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
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
            sideMenu.style.display = 'none';
        });
    });
});