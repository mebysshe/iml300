$('document').ready(function () {
    $('#flower').click(function () {
            $('.pop-up').toggle();
        });
    $('#imgage1').click(function () {
        $('.infopanel').toggle(2000);     
        $(this).toggleClass("bigger");
        });
    $('.text_small').hover(function(){
  $('style').css("font-size","50%");
});
});

