(() => {
    const moreBtnRef = document.querySelector("[data-more-button]");
    const moreRef = document.querySelector("[data-more]");
    const moreBtnRef1 = document.querySelector("[data-more-button1]");
    const moreRef1 = document.querySelector("[data-more1]");
    const moreBtnRef2 = document.querySelector("[data-more-button2]");
    const moreRef2 = document.querySelector("[data-more2]");
    

    moreBtnRef.addEventListener("click", (evt) => {
        moreBtnRef.classList.toggle("is-open");

        moreRef.classList.toggle("is-open");
        if (!evt.target.classList.contains("is-open")) {
            evt.target.blur();
        }
    });
    moreBtnRef1.addEventListener("click", (evt) => {
        moreBtnRef1.classList.toggle("is-open");

        moreRef1.classList.toggle("is-open");
        if (!evt.target.classList.contains("is-open")) {
            evt.target.blur();
        }
    });
    moreBtnRef2.addEventListener("click", (evt) => {
        moreBtnRef2.classList.toggle("is-open");

        moreRef2.classList.toggle("is-open");
        if (!evt.target.classList.contains("is-open")) {
            evt.target.blur();
        }
    });
})();