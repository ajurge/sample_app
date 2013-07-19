function updateCountdown() {
  // 140 characters max
  var left = 140 - jQuery('#micropost_content').val().length;
  jQuery(".countdown").css('color', 'gray');
  if(left == 0) {
    jQuery(".countdown").css('color', 'black');
  }
  if(left == 1) {
    var charactersLeft = ' character left.'
    jQuery(".countdown").css('color', 'black');
  }
  else if(left < 0){
    var charactersLeft = ' characters too many.'
    jQuery(".countdown").css('color', 'red');
  }
  else{
    var charactersLeft = ' characters left.'
  }
  jQuery('.countdown').text(Math.abs(left) + charactersLeft);

}

jQuery(document).ready(function($) {
  updateCountdown();
  $('#micropost_content').change(updateCountdown);
  $('#micropost_content').keyup(updateCountdown);
});