// This file contains the JavaScript code for the portfolio. 
// It may include functionality such as interactive elements, animations, or data fetching.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding an event listener to a button (if any)
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});