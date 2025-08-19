/**
 * Fichier JavaScript principal du portfolio
 * Contient toutes les fonctionnalités communes
 */

// Navigation mobile
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.nav__toggle');
    const isOpen = menu.classList.toggle('nav__menu--open');
    
    // Accessibilité / état
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    toggle.textContent = isOpen ? '✕' : '☰';
}

// Initialisation générale
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCanvas();
});

// Initialise la navigation
function initializeNavigation() {
    // Fermeture du menu en cliquant à l'extérieur
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('nav-menu');
        const toggle = document.querySelector('.nav__toggle');
        
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            if (menu.classList.contains('nav__menu--open')) {
                menu.classList.remove('nav__menu--open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Ouvrir le menu');
                toggle.textContent = '☰';
            }
        }
    });

    // Fermeture du menu après sélection d'un lien (mobile)
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const menu = document.getElementById('nav-menu');
                const toggle = document.querySelector('.nav__toggle');
                menu.classList.remove('nav__menu--open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Ouvrir le menu');
                toggle.textContent = '☰';
            }
        });
    });

    // Ajuste l'icône si on redimensionne (ex: rotation écran)
    window.addEventListener('resize', () => {
        const toggle = document.querySelector('.nav__toggle');
        const menu = document.getElementById('nav-menu');
        if (window.innerWidth > 768) {
            toggle.textContent = '☰';
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('nav__menu--open');
        }
    });
}

// Initialise le canvas d'arrière-plan animé (si présent)
function initializeCanvas() {
    const canvas = document.getElementById('bg-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Redimensionnement du canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Animation de particules en réseau
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Animation simple de particules
        const particles = [];
        const particleCount = Math.min(50, Math.floor(canvas.width / 40));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }

        // Mise à jour et rendu des particules
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Rebond sur les bords
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // Dessiner la particule
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(201, 8, 42, 0.1)';
            ctx.fill();
        });

        animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Démarre l'animation seulement si les animations sont supportées
    if (window.requestAnimationFrame) {
        animate();
    }

    // Nettoyage lors du déchargement de la page
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// Expose les fonctions globalement pour la compatibilité
window.toggleMenu = toggleMenu;
