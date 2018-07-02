
var link = document.querySelector(".button__feedback");
var popup = document.querySelector(".popup-bg");
var close = popup.querySelector(".button__close");
var customer = popup.querySelector(".feedback-name");
var form = popup.querySelector("form");
var email = popup.querySelector(".feedback-email");
var textarea = popup.querySelector(".feedback-text");
var body = document.querySelector("body");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("customer");
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
    customer.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!customer.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.add("popup-error");
    popup.offsetWidth = popup.offsetWidth;
  }else {
    if (isStorageSupport) {
      localStorage.setItem("customer", customer.value);
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

body.addEventListener("click", function(evt){


  if (popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
  }
});

body.removeEventListener("click", function(evt){
  if (!popup.classList.contains("popup-show")){

  }
});







