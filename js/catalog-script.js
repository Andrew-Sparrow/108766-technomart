var button_buy = document.querySelector(".buy");
var popup_item_added = document.querySelector(".popup-item-added");
var close_buy = popup_item_added.querySelector(".popup-close");


button_buy.addEventListener("click", function(evt){
  // evt.preventDefault();
  popup_item_added.classList.add("item-added-show");
});

close_buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_item_added.classList.remove("item-added-show");
});
