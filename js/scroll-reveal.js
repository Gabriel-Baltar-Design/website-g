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
            distance: '60px',
            delay: 230,
            reset: false
        });

        ScrollReveal().reveal('.service-1', {
            duration: 1000,
            origin: 'bottom',
            distance: '70px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.service-2', {
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.service-3', {
            duration: 1000,
            origin: 'bottom',
            distance: '90px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.service-4', {
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.card-container', {
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.about-reveal', {
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            delay: 290,
            reset: false
        });

        ScrollReveal().reveal('.contact-reveal', {
            duration: 1000,
            origin: 'bottom',
            distance: '80px',
            delay: 290,
            reset: false
        });


    });

};

