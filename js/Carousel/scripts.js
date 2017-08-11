
/*

   Table Of Content

   1. 新品介紹 Carousel
   2. btn
   3. CountDown Timer
   4. Ajaxchimp for Subscribe Form
   5. Video and Google Map Popup
   6. Detail Box ( Slider by Owl Carousel )
   7.


*/

    /**新品介紹 Carousel**/
    $(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<6;i++) {
    itemToClone = itemToClone.next();

    if (!itemToClone.length) {
    itemToClone = $(this).siblings(':first');
    }

    itemToClone.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });


    });

/**新品介紹 Carousel:END**/
