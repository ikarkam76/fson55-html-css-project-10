(() => {
    const readMoreBtn = document.querySelector('.readMoreBtn');
const aboutSubDesc = document.querySelector('.about__subdescription--more');


readMoreBtn.addEventListener('click', (evt) => {
   aboutSubDesc.classList.toggle('show-more');
    readMoreBtn.classList.toggle('clicked');
    if (!readMoreBtn.classList.value.split(' ').includes('clicked')) {
      readMoreBtn.blur();
    }
})

})();