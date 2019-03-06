var product_card = document.querySelectorAll('.product_card_layer_1');


for (i = 0; i < product_card.length; i++ ) {  
  product_card[i].addEventListener('click', function () {
    if (this.classList.contains('product_card_selected_layer_1')) {
      this.classList.toggle('product_card_hover_layer_1');
    }
    this.classList.toggle('product_card_selected_layer_1');
  });
  product_card[i].addEventListener('mouseleave', function () {
    if (this.classList.contains('product_card_selected_layer_1')){
     this.classList.add('product_card_hover_layer_1');
    };
  });
}


