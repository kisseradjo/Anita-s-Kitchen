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
// <?php
//     $email = $_POST['email'];
// ?>
// <?php
// if ($_POST['submit']) {
//     prompt {'"$email" has been successfully added to our mailing list';
// } else  echo {'<p>Something went wrong, go back and try again!</p>';
//     }
// ?>
