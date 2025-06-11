
$(document)
  .ready(function() {

    $('.menu .item').tab();
    $('.ui.accordion').accordion();
    $('.ui.dropdown').dropdown();
    $('.popup-link').popup();

    $('#toggle').click(function(){
      $('.ui.sidebar').sidebar('toggle');
    });
    
  })
;