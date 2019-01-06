var button_about = document.querySelector(".write-us");
var popup_feedback = document.querySelector(".popup-feedback");
var close_feedback = popup_feedback.querySelector(".popup-close-feedback");

var button_buy = document.querySelectorAll(".buy");
var popup_item_added = document.querySelector(".popup-item-added");
var close_buy = popup_item_added.querySelector(".popup-close");

var your_name = popup_feedback.querySelector("input[name=your-name]");
var form_feedback = popup_feedback.querySelector("form");
var email = popup_feedback.querySelector("input[name=email]");
var isStorageSupport = true;
var escButton = 27;

var map_link = document.querySelector(".map-button");
var map_popup = document.querySelector(".popup-map");
var map_close = map_popup.querySelector(".popup-map-close");

var storage = "";

try {
  storage = localStorage.getItem("your_name");
} catch (err) {
  isStorageSupport = false;
}

for (var i = 0; i < button_buy.length; i++) {
  var result = button_buy[i];
  result.addEventListener('click', function() {
    popup_item_added.classList.add("item-added-show");
  });
}

close_buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_item_added.classList.remove("item-added-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == escButton) {
    if (popup_item_added.classList.contains("item-added-show")) {
      popup_item_added.classList.remove("item-added-show");
    }
  }
});


button_about.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_feedback.classList.add("popup-feedback-show");

  if (storage) {
    your_name.value = storage;
    email.focus();
  } else {
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

  if (!your_name.value || !email.value) {
    evt.preventDefault();
    popup_feedback.classList.remove("popup-feedback-error");
    popup_feedback.offsetWidth = popup_feedback.offsetWidth;
    popup_feedback.classList.add("popup-feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("your_name", your_name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == escButton) {
    evt.preventDefault();
    if (popup_feedback.classList.contains("popup-feedback-show")) {
      popup_feedback.classList.remove("popup-feedback-show");
      popup_feedback.classList.remove("popup-feedback-error");
    }
  }
});

map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.add("popup-map-show");
});

map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == escButton) {
    if (map_popup.classList.contains("popup-map-show")) {
      map_popup.classList.remove("popup-map-show");
    }
  }
});
