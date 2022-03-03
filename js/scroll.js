// Disappear navigation on scroll

let previousPosition = window.pageYOffset;
window.onscroll = () => {
    let currentPosition = window.pageYOffset;
    if (currentPosition > previousPosition) {
        const navigation = document.querySelector('#navigation')
        navigation.style.transition = "all .4s";
        navigation.style.top = "-10rem";
    } else {
        navigation.style.top = "0";
    }
    previousPosition = currentPosition;
}

// Smooth snapping to sections

const links = document.querySelectorAll('.navigation__text')
links.forEach(link => {
    link.addEventListener('click', handleClick);
})