// --- 1. SINGLE-PAGE SWITCH ENGINE ---
function switchPage(pageId) {
    const views = document.querySelectorAll('.page-view');
    views.forEach(view => view.classList.remove('active-view'));

    const targetView = document.getElementById(`view-${pageId}`);
    if (targetView) {
        targetView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// --- 2. HANGING BULB THEME TOGGLE ---
const bulbTrigger = document.getElementById('bulb-trigger');

if (bulbTrigger) {
    bulbTrigger.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
}

// --- 3. PARALLAX HERO MOUSE MOVEMENT ---
const heroSection = document.getElementById('interactive-hero');
const layers = document.querySelectorAll('.parallax-layer');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = e.clientX - centerX;
        const moveY = e.clientY - centerY;

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
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