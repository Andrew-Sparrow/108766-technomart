var button_buy = document.querySelector(".buy");
var popup_item_added = document.querySelector(".popup-item-added");
var close_buy = popup_item_added.querySelector(".popup-close");
var escButton = 27;


button_buy.addEventListener("click", function(evt){
  // evt.preventDefault();
  popup_item_added.classList.add("item-added-show");
});

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
