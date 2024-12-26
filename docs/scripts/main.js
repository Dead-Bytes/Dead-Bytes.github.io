// This file contains the JavaScript code for the portfolio. 
// It may include functionality such as interactive elements, animations, or data fetching.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('active');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Hide menu after clicking a link
            menu.style.display = 'none';
        });
    });
});