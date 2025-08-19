/**
 * JavaScript pour la page blog
 * Gère la newsletter et les interactions spécifiques au blog
 */

// Gestion de la newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupère le message de succès depuis i18n ou utilise un message par défaut
            const successMessage = window.I18N_DICT?.['blog.newsletter.success'] || 'Merci pour votre inscription !';
            
            // Affiche le message de succès
            alert(successMessage);
            
            // Réinitialise le formulaire
            this.reset();
            
            // Optionnel : Analytics ou envoi réel des données
            // sendNewsletterData(formData);
        });
    }

    // Animation au scroll pour les cartes d'articles
    const articleCards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    articleCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        cardObserver.observe(card);
    });
});

// Ajout du CSS d'animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
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
