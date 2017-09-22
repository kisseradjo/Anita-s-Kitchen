$(document).ready(function() {
  //opening the navigation
  $('#open-nav').click(function(e) {
    e.preventDefault();
    //animating the navigation in 2 seconds
    $('nav').animate({
      left: "0"
    }, 2000);
    $('#open-nav').hide("slow");
  });
  //Closing the navigation
  $('#close-nav').click(function(e) {
    e.preventDefault();
    //animating the navigation in 2 seconds
    $('nav').animate({
      left: "-100%"
    }, 2000);
    $('#open-nav').show("slow");

  });
});
