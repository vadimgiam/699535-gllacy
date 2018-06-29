
var link = document.querySelector(".button__feedback");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".button__close");
var name = popup.querySelector(".feedback-name");
var form = popup.querySelector("form");
var email = popup.querySelector(".feedback-email");
var textarea = popup.querySelector(".feedback-text");


var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    name.value = storage;
    email.value = storage;
    textarea.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.add("popup-error");
    popup.offsetWidth = popup.offsetWidth;
  }else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      }
  }

});

window.addEventListener("keydown", function(evt){
if(evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("popup-show")) {
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
}
}

});










