$(document).ready(function() {
$('.row').css('margin-bottom',0);
// Set the date we're counting down to
//  var finalization = new Date("Mar 15, 2017 11:40:00").getTime();
var finalization = new Date($('#end').val());
$('.timermin').hide();
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = finalization - now;
    
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds.toString().length === 1) {
      seconds = '0' + seconds;
    }
    
    // Output the result in an element with id="demo"
    $('.timer').text(minutes + ":" + seconds);

    var timepercentage = distance / 900000;
    var percentagedone = Math.round((1 - timepercentage)*100);
    $('#timeline').width(percentagedone + '%');

    if(distance < 120000) {
      $('.submessage').text('¡Te quedan menos de dos minutos!');
      $('.submessage').css('color','#e83924');
      $('.timer').css('color', '#e83924');
      $('.timermin').css('color', '#e83924');

    }

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      $('.timer').hide();
      $('.timerout').text("TIEMPO AGOTADO");
      $('.timermin').hide();
      $('.submessage').hide();
      Materialize.toast('Tu tiempo se terminó, te redireccionaremos a nuestra web!', 2000, 'rounded');
      setTimeout(function() { 
          //window.location = "https://www.joinnus.com";
        }, 2000);

    }
  }, 1000);
});