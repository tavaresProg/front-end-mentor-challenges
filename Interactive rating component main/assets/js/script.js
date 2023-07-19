const scores = document.querySelectorAll('.rating span');

function cleanButtons() {
    scores.forEach(score => {
        score.classList.remove('active');
    });
}

function saveRating() {
    let rating = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].classList.contains('active')) {
            rating = scores[i].innerText;
        }
    }
    return rating;
}

function changePage(rating) {
    const nextPage = document.querySelector('.thank-you');
    nextPage.style.opacity = 1;
    nextPage.style.visibility = 'visible';
    const score = document.querySelector("#score");
    score.innerText = rating;
}

scores.forEach(score => {
    score.addEventListener('click', () => {
        cleanButtons();
        score.classList.add('active');
    });
});

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const rating = saveRating();
    if (rating === 0) {
        alert('Por favor, nos avalie.');
    } else {
        changePage(rating);
    }
});