// Hide the spoiler text
$('.spoiler span').hide();
// When the button is pressed
$('.spoiler').on('click', 'button', function(event) {
  //Show the spoiler text
  $(this).prev().show();
  //Hide the "Reveal Spoiler" button
  $(this).hide();
});


// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);
//Append to web page