/**
 * JavaScript pour la page projets
 * Gère le filtrage des projets par catégorie
 */

// Filtrage des projets
function filterProjects(category, event) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    const noProjectsMsg = document.getElementById('no-projects');
    let visibleCount = 0;

    // Mise à jour des boutons actifs
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) {
        event.target.classList.add('active');
    }

    // Filtrage des projets
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            visibleCount++;
        } else {
            project.style.display = 'none';
        }
    });

    // Affichage du message "aucun projet"
    if (visibleCount === 0) {
        noProjectsMsg.classList.remove('hidden');
    } else {
        noProjectsMsg.classList.add('hidden');
    }
}

// Initialisation des filtres au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter les event listeners pour les boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const category = this.getAttribute('data-filter');
            filterProjects(category, event);
        });
    });

    // Animation d'apparition des cartes projet
    const projectCards = document.querySelectorAll('.project-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        cardObserver.observe(card);
    });
});

// Ajout du CSS pour l'animation via JavaScript
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
`;
document.head.appendChild(style);

// Expose les fonctions globalement pour la compatibilité
window.filterProjects = filterProjects;
