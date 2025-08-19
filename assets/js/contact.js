/**
 * JavaScript pour la page contact
 * Gère le formulaire de contact et ses validations
 */

// Validation et soumission du formulaire de contact
function initContactForm() {
    const form = document.getElementById('contact-form');
    const charCount = document.getElementById('char-count');
    const messageTextarea = document.getElementById('message');
    
    if (!form) return;

    // Gestion du compteur de caractères
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            charCount.textContent = this.value.length;
            
            // Change la couleur si proche de la limite
            if (this.value.length > 450) {
                charCount.style.color = '#ef4444';
            } else if (this.value.length > 400) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = 'var(--text-muted)';
            }
        });
    }

    // Gestion de la soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Récupère le message de succès depuis i18n
        const successMessage = (window.I18N_DICT && window.I18N_DICT['contact.form.success']) || 'Merci !';
        alert(`${successMessage} ${name}!`);
        
        // Réinitialise le formulaire
        this.reset();
        if (charCount) charCount.textContent = '0';
        
        // Optionnel : Envoi réel des données
        // sendContactData(formData);
    });
}

// Validation en temps réel des champs
function initFieldValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        // Validation au blur (perte de focus)
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Style focus
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
            this.style.boxShadow = '0 0 0 3px rgba(201, 8, 42, 0.1)';
        });
        
        // Reset style au focus
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                validateField(this);
            }
        });
    });
}

// Fonction de validation d'un champ
function validateField(field) {
    const isRequired = field.hasAttribute('required');
    const isEmpty = !field.value.trim();
    const isEmail = field.type === 'email';
    const isValidEmail = field.validity.valid;
    
    if (isRequired && isEmpty) {
        setFieldError(field, 'Ce champ est obligatoire');
    } else if (isEmail && field.value && !isValidEmail) {
        setFieldError(field, 'Veuillez saisir une adresse email valide');
    } else {
        setFieldSuccess(field);
    }
}

// Applique les styles d'erreur
function setFieldError(field, message) {
    field.style.borderColor = '#ef4444';
    field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
    
    // Optionnel : afficher le message d'erreur
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Applique les styles de succès
function setFieldSuccess(field) {
    field.style.borderColor = 'var(--border-light)';
    field.style.boxShadow = '';
    
    // Cache le message d'erreur
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Animation des cartes de contact
function animateContactCards() {
    const contactCards = document.querySelectorAll('.contact-card, .card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                }, index * 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFieldValidation();
    animateContactCards();
});

// Ajout des styles CSS
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
    
    .form-input, .form-textarea {
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .contact-card, .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .contact-card:hover, .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
    }
    
    .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: none;
    }
`;
document.head.appendChild(style);
