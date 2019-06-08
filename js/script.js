var popup = document.querySelector('.modal');
var btnModal = document.querySelector('.btn-modal');
var form = popup.querySelector('.modal-booking-form');
var dateArrival = popup.querySelector('[name=arrival-date]');
var dateDeparture = popup.querySelector('[name=departure-date]');

btnModal.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.toggle('modal-show');
	dateArrival.focus();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains('modal-show')) {
				popup.classList.remove('modal-show');
				popup.classList.remove('modal-error');
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