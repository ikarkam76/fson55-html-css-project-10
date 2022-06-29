(() => {
    const readMoreBtn = document.querySelector('.readMoreBtn');
const aboutSubDesc = document.querySelector('.about__subdescription--more');


readMoreBtn.addEventListener('click', (e) => {
   aboutSubDesc.classList.toggle('show-more');
    readMoreBtn.classList.toggle('clicked');

})

})();