// Select the bulb icon element from the HTML
const themeIcon = document.getElementById('theme-icon');

// Listen for a mouse click on the bulb
themeIcon.addEventListener('click', () => {
    // Check if the current theme attribute is set to light
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // If it's light, turn the bulb back ON (Switch to Dark Mode)
        document.documentElement.removeAttribute('data-theme');
    } else {
        // If it's dark, turn the bulb OFF (Switch to Light Mode)
        document.documentElement.setAttribute('data-theme', 'light');
    }
});
