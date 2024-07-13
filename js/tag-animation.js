export function tagAnimation() {

    document.addEventListener('DOMContentLoaded', () => {
    
    const tag = document.querySelector(".tag-work-available span");
    const mobileTag = document.querySelector(".tag-work-available-mobile span");

    setInterval( () => {
        tag.style.opacity = (tag.style.opacity === '0') ? '1' : '0';
        mobileTag.style.opacity = (mobileTag.style.opacity === '0') ? '1' : '0';
    }, 700);

    });

}