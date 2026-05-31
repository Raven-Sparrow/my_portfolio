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

// Tracking variables for positioning calculation loops
let mouseX = 0, mouseY = 0; // Current actual pixel point coordinates
let ringX = 0, ringY = 0;   // Animated fluid delay positioning tracking point

// Update target coordinates whenever user moves mouse inside window
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instantly lock the inner tiny tracking core dot to real-time pointer location
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

// Use animation loops to calculate smooth trailing effect for outer ring ring
function animateTrackingRing() {
    // 0.15 is the easing multiplier. Lower number = smoother/more delay trailing
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    
    requestAnimationFrame(animateTrackingRing);
}
// Initialize calculations
animateTrackingRing();

// --- 3. PROJECT CARD EXPANSION EVENTS ---
projectCards.forEach(card => {
    // Expand circle into text block when user mouse slides over target cards
    card.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered');
    });
    
    // Shrink circle back down to normal empty tracking ring when mouse leaves card area
    card.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered');
    });
});
