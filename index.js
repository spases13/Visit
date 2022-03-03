const loader = document.querySelector('.loader');
const Destination = document.querySelector('.Destination');

Destination.style.visibility = 'hidden';

window.addEventListener('load', _ => {
    Destination.style.visibility = 'visible';
    setTimeout(_ => {
        loader.style.display = 'none'
    }, 400);
});