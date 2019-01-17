var button_about = document.querySelector(".write-us");
var popup_feedback = document.querySelector(".popup-feedback");
var close_feedback = document.querySelector(".popup-close-feedback");
var your_name = document.querySelector("input[name=your-name]");
var form_feedback = document.querySelector(".feedback-form");
var email = document.getElementById("id-email");

var button_buy = document.querySelectorAll(".buy");
var popup_item_added = document.querySelector(".popup-item-added");
var close_buy = document.querySelector(".item-added-close");

var isStorageSupport = true;
var escButton = 27;

var map_link = document.querySelector(".map-button");
var map_popup = document.querySelector(".popup-map");
var map_close = document.querySelector(".popup-map-close");

var storage = "";

try {
  storage = localStorage.getItem("your_name");
}
catch (err) {
  isStorageSupport = false;
}

for (var i = 0; i < button_buy.length; i++) {
  var result = button_buy[i];
  result.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_item_added.classList.add("item-added-show");
  });
}

if (close_buy !== null) {
  close_buy.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_item_added.classList.remove("item-added-show");
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == escButton) {
    if (popup_item_added.classList.contains("item-added-show")) {
      popup_item_added.classList.remove("item-added-show");
    }
  }
});

if (button_about !== null) {
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
}

if (close_feedback !== null) {
  close_feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_feedback.classList.remove("popup-feedback-show");
    popup_feedback.classList.remove("popup-feedback-error");
  });
}

if (form_feedback !== null) {
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
}

if (popup_feedback !== null) {
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == escButton) {
      evt.preventDefault();
      if (popup_feedback.classList.contains("popup-feedback-show")) {
        popup_feedback.classList.remove("popup-feedback-show");
        popup_feedback.classList.remove("popup-feedback-error");
      }
    }
  });
}

if (map_link !== null) {
  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    map_popup.classList.add("popup-map-show");
  });
}

if (map_close !== null) {
  map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    map_popup.classList.remove("popup-map-show");
  });
}

if (map_popup !== null) {
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == escButton) {
      if (map_popup.classList.contains("popup-map-show")) {
        map_popup.classList.remove("popup-map-show");
      }
    }
  });
}
