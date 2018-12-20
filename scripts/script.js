var button_about = document.querySelector(".write-us");
var popup_feedback = document.querySelector(".popup-feedback");
var close_feedback = popup_feedback.querySelector(".popup-close-feedback");
var your_name = popup_feedback.querySelector("[name=your-name]");
var form_feedback = popup_feedback.querySelector("form");
var email = popup_feedback.querySelector("name[email]")
var isStorageSupport = true;

var map_link = document.querySelector(".map-button");
var map_popup = document.querySelector(".popup-map");
var map_close =  map_popup.querySelector(".popup-map-close");

var storage = "";

try {
  storage = localStorage.getItem("your_name");
}
catch (err) {
  isStorageSupport = false;
}

button_about.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_feedback.classList.add("popup-feedback-show");

  if (storage) {
    your_name.value = storage;
    email.focus();
  }
  else {
    your_name.focus();
  }

  your_name.focus();
});

close_feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_feedback.classList.remove("popup-feedback-show");
  popup_feedback.classList.remove("popup-feedback-error");
});

form_feedback.addEventListener("submit", function(evt) {
  if(!your_name.value || !email.value){
    evt.preventDefault();
    popup_feedback.classList.remove("popup-feedback-error");
    popup_feedback.offsetWidth = popup_feedback.offsetWidth;
    popup_feedback.classList.add("popup-feedback-error");
  }
  else {
    if(isStorageSupport) {
      localStorage.setItem("your_name", your_name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode == 27) {
    evt.preventDefault();
    if(popup_feedback.classList.contains("popup-feedback-show")){
      popup_feedback.classList.remove("popup-feedback-show");
      popup_feedback.classList.remove("popup-feedback-error");
    }
  }
});

map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("popup-map-show");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("popup-map-show")) {
      map_popup.classList.remove("popup-map-show");
    }
  }
});
