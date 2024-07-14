export function scrollAnimation() {
    
    document.addEventListener('DOMContentLoaded', () => {

        ScrollReveal().reveal('.scroll', {
            duration: 900,
            origin: 'bottom',
            distance: '60px',
            delay: 200,
            reset: false
        });

        ScrollReveal().reveal('.scroll-tag', {
            duration: 1000,
            origin: 'top',
            distance: '10px',
            delay: 200,
            reset: false
        });

        ScrollReveal().reveal('.mywork-title', {
            duration: 1000,
            origin: 'bottom',
            distance: '40px',
            delay: 230,
            reset: false
        });

        ScrollReveal().reveal('.card-container', {
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            delay: 260,
            reset: false
        });

    });

};

