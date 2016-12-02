$(document).ready(function(){
  
  
  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
    .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    //Play hadouken sound
    playHadouken();
    // Hide ready div
    $('.ryu-ready').hide();
    //Display throwing and hadouken div
    $('.ryu-throwing').show();
    
    //Animate hadouken
    //.finish will end the current animation, if it there is one, to begin a new one/
    $('.hadouken').finish().show().animate(
      {'left':'1050px'},
      500,
      function(){
        $('.hadouken').hide();
        $('.hadouken').css('left','659px');
      }
    );
    
    
    
    
  })
  .mouseup(function() {
    //Hide throwing div
    $('.ryu-throwing').hide();
    //Display ready div
    $('.ryu-ready').show();
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}