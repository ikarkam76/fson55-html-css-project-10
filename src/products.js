(() => {
    const moreBtnRef = document.querySelector("[data-more-button]");
    const moreRef = document.querySelector("[data-more]");
    const moreBtnRef1 = document.querySelector("[data-more-button1]");
    const moreRef1 = document.querySelector("[data-more1]");
    const moreBtnRef2 = document.querySelector("[data-more-button2]");
    const moreRef2 = document.querySelector("[data-more2]");
    

    moreBtnRef.addEventListener("click", () => {
        moreBtnRef.classList.toggle("is-open");

        moreRef.classList.toggle("is-open");
        moreBtnRef.blur();
    });
    moreBtnRef1.addEventListener("click", () => {
        moreBtnRef1.classList.toggle("is-open");

        moreRef1.classList.toggle("is-open");
        moreBtnRef1.blur();
    });
    moreBtnRef2.addEventListener("click", () => {
        moreBtnRef2.classList.toggle("is-open");

        moreRef2.classList.toggle("is-open");
        moreBtnRef2.blur();
    });
})();