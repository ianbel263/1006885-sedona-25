var popup=document.querySelector(".modal"),btnModal=document.querySelector(".btn-modal"),form=popup.querySelector(".modal-booking-form"),dateArrival=popup.querySelector("[name=arrival-date]"),dateDeparture=popup.querySelector("[name=departure-date]");popup.classList.add("modal-close"),btnModal.addEventListener("click",function(e){e.preventDefault(),popup.classList.contains("modal-close")?(popup.classList.remove("modal-close"),popup.classList.add("modal-open")):(popup.classList.add("modal-close"),popup.classList.remove("modal-open"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-close")||(popup.classList.add("modal-close"),popup.classList.remove("modal-error"),popup.classList.remove("modal-open")))}),form.addEventListener("submit",function(e){dateArrival.value&&dateDeparture.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});