$(document).ready(function(){
  resizeDiv();
  // animateBG();
});

window.onload = function () {
  // alert("It's loaded!");
  // $('.loadingLayer').css('display', 'none').delay(10000);
 }

window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();
  $('#headerwrap').css({'height': vph + 'px'});
  // $('.loadingLayer').css({'height': vph + 'px'});
}

function PlaySound() {
          var sound = document.getElementById("audio");
          sound.play()
      }

(function animateBG() {
    $('#headerwrap').animate({
        backgroundPosition: '+=1'
    }, 12, animateBG);
})();
