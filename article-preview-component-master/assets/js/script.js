const shareButton = document.querySelector('.share__button');
const shareOptions = document.querySelector('.share__option');

shareButton.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    shareButton.classList.toggle('active');
});