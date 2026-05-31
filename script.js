// --- 1. LIGHT/DARK THEME TOGGLE HANDLER ---
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

// --- 2. MAGNETIC FLUID CUSTOM CURSOR HANDLER ---
const cursorRing = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.custom-cursor-dot');
const projectCards = document.querySelectorAll('.card');

let mouseX = 0, mouseY = 0; 
let ringX = 0, ringY = 0;   

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animateTrackingRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    
    requestAnimationFrame(animateTrackingRing);
}
animateTrackingRing();

// --- 3. PROJECT CARD EXPANSION EVENTS ---
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered');
    });
});
