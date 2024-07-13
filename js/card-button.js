export function cardAnimation() {

    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        
        const buttonDescription = card.querySelector(".button-description");

        const cardImage = card.querySelector(".card img");


        card.addEventListener('mouseover', () => {

            buttonDescription.classList.add("active");
            cardImage.style.transform = 'scale(1.05)';

        });

        card.addEventListener('mouseout', () => {

            buttonDescription.classList.remove("active");
            cardImage.style.transform = 'scale(1.0)';

        });

    });


}