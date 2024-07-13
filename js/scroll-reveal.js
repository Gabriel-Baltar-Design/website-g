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

    });

};

