var popup = document.querySelector('.modal');
var btnModal = document.querySelector('.btn-modal');
var form = popup.querySelector('.modal-booking-form');
var dateArrival = popup.querySelector('[name=arrival-date]');
var dateDeparture = popup.querySelector('[name=departure-date]');

popup.classList.add('modal-close');

btnModal.addEventListener('click', function(evt) {
	evt.preventDefault();
	if (popup.classList.contains('modal-close')) {
		popup.classList.remove('modal-close');
		popup.classList.add('modal-open');
	} else {
		popup.classList.add('modal-close');
		popup.classList.remove('modal-open');
	}
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
			evt.preventDefault();
			if (!popup.classList.contains('modal-close')) {
				popup.classList.add('modal-close');
				popup.classList.remove('modal-error');
				popup.classList.remove('modal-open');
			}
  }
});

form.addEventListener('submit', function(evt) {
	if (!dateArrival.value || !dateDeparture.value) {
		evt.preventDefault();
		popup.classList.remove('modal-error');
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add('modal-error');
	}
});