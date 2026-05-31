// --- 1. LIGHT/DARK THEME TOGGLE HANDLER (Your Code) ---
const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = '💡';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🔌';
    }
});

// --- 2. AMBIENT BACKGROUND PARALLAX PHYSICS ENGINE (Wibify Interaction) ---
const heroSection = document.getElementById('interactive-hero');
const layers = document.querySelectorAll('.parallax-layer');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        // Find center points of the monitor screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate the vector offset of the pointer position from the center
        const moveX = e.clientX - centerX;
        const moveY = e.clientY - centerY;
        
        // Apply individual speeds dynamically to the design elements
        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = moveX * speed;
            const y = moveY * speed;
            
            if (layer.classList.contains('abstract-cosmic-core')) {
                layer.style.transform = `translate(${x}px, ${y}px)`;
            } else if (layer.classList.contains('glass-panel-accent')) {
                layer.style.transform = `rotate(-12deg) translate(${x - 30}px, ${y - 10}px)`;
            } else if (layer.classList.contains('orbital-glowing-ring')) {
                layer.style.transform = `rotateX(75deg) rotateY(-10deg) translate(${x}px, ${y}px)`;
            }
        });
    });
    
    // Smoothly spring components back to default coordinates when cursor leaves the hero area
    heroSection.addEventListener('mouseleave', () => {
        layers.forEach(layer => {
            if (layer.classList.contains('abstract-cosmic-core')) {
                layer.style.transform = `translate(0px, 0px)`;
            } else if (layer.classList.contains('glass-panel-accent')) {
                layer.style.transform = `rotate(-12deg) translate(-30px, -10px)`;
            } else if (layer.classList.contains('orbital-glowing-ring')) {
                layer.style.transform = `rotateX(75deg) rotateY(-10deg) translate(0px, 0px)`;
            }
        });
    });
}
