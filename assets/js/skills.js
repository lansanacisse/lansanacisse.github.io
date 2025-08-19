/**
 * JavaScript pour la page compétences
 * Gère l'animation des barres de progression et autres interactions
 */

// Animation des barres de progression au scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress__bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const originalWidth = bar.style.width;
                
                // Réinitialise la barre à 0%
                bar.style.width = '0%';
                
                // Anime jusqu'à la largeur cible après un court délai
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-out';
                    bar.style.width = originalWidth;
                }, 100);
                
                // Arrête d'observer cette barre après l'animation
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Animation des cartes de compétences
function animateSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card, .card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Délai progressif pour l'animation en cascade
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }, index * 100);
                
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        cardObserver.observe(card);
    });
}

// Hover effects pour les cartes de compétences
function addHoverEffects() {
    const skillCards = document.querySelectorAll('.skill-card, .card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    animateProgressBars();
    animateSkillCards();
    addHoverEffects();
});

// Ajout du CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-card, .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .progress__bar {
        transition: width 0.3s ease;
    }
`;
document.head.appendChild(style);
