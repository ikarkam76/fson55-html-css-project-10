const btns = document.querySelectorAll('.contacts__modal-button');
const modalOverlay = document.querySelector('.contacts__modal-overlay ');
const modals = document.querySelectorAll('.contacts__modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('contacts__modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('contacts__modal--visible');
		modalOverlay.classList.add('contacts__modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('contacts__modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('contacts__modal--visible');
		});
	}
});