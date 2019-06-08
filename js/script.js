var popup = document.querySelector('.modal');
var btnModal = document.querySelector('.btn-modal');

btnModal.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.toggle('modal-show');
});