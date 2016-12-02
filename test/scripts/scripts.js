// // YouTube API
// var tag = document.createElement('script');
// tag.src = "http://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

/* from https://css-tricks.com/play-button-youtube-and-vimeo-api/ */
// When the API is loaded this function gets called
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  player.pauseVideo();
}

$(document).ready(function() {
  // Smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  // hide overlay on click, play video background
  $('.hero-head, .hero-foot').css({ opacity: 0 });
  $('#title').css({ opacity: 0 });

  $('.overlay').on('click', function() {
    $('html').css({ 'overflow-y': 'auto' });
    $('html, body').animate({ scrollTop: 0 }, 1);
    $('.hero.overlay').animate({ opacity: 0 }, 800);

    setTimeout(function() {
      $('.hero.overlay').remove();
      $('#title').animate({ opacity: 1 }, 400);
    }, 2000);
    setTimeout(function() {
      $('.hero-head, .hero-foot').animate({ opacity: 1 }, 1200);
    }, 3000);

    player.playVideo();
  });


  // mobile menu
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    $('.nav-menu').toggleClass('is-active');
  });


  var currentSection = 0;

  // horizontal scroll
  $('.right-arrow *').on('click', function() {
    currentSection--;
    if (currentSection <= -6) return false;
    var marginLeft = currentSection * 100;
    $('.content-section').animate({ 'margin-left': marginLeft + 'vw' }, 100);
    return false;
  });

  $('.left-arrow *').on('click', function() {
    currentSection++;
    if (currentSection >= 0) return false;
    var marginLeft = currentSection * 100;
    $('.content-section').animate({ 'margin-left': marginLeft + 'vw' }, 100);
    return false;
  });
});
