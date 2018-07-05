"use strict"
var link = document.querySelector(".button__feedback");
var popup = document.querySelector(".popup-bg");
var close = popup.querySelector(".button__close");
var customer = popup.querySelector(".feedback-name");
var form = popup.querySelector("form");
var email = popup.querySelector(".feedback-email");
var textarea = popup.querySelector(".feedback-text");
var body = document.querySelector("body");

var onBodyClick = function(evt) {
  if (evt.target.contains(popup)) {
    popup.classList.remove("popup-show");
    body.removeEventListener('click', onBodyClick);
  }
}

var onFormClick = "";


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("customer");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}




link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    name.value = storage;
    email.value = storage;
    textarea.focus();
  } else {
    customer.focus();
  }
  body.addEventListener("click", onBodyClick);
  //document.querySelector('.popup-feedback').addEventListener(`click`, onFormClick);
  //evt.stopPropagation();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
  body.removeEventListener('click', onBodyClick);
});

form.addEventListener("submit", function (evt) {
  if (!customer.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.add("popup-error");
   // popup.offsetWidth = popup.offsetWidth;
  } else {
    if (isStorageSupport) {
      localStorage.setItem("customer", customer.value);
      localStorage.setItem("email", email.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }

});

/*Слайдер*/

var texts = document.querySelectorAll (".slider-title__nonumber");
var controls = document.querySelectorAll('.silder-btn');



var onControllClick = function() {
  var currentText = Number(document.querySelector('input:checked').dataset.index);

  for (var j = 0; j < controls.length; j++) {
    texts[j].classList.add("visually-hidden");
  }
  texts[currentText].classList.remove("visually-hidden");
};

for (var i = 0; i < controls.length; i++) {
  controls[i].dataset.index = i;
  controls[i].addEventListener('click', onControllClick);
}






