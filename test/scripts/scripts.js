// // YouTube API
// let tag = document.createElement('script');
// tag.src = "http://www.youtube.com/player_api";
// let firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

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
  player.playVideo();
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

  $('.overlay').on('click', function() {
    $(this).animate({opacity: 0}, 400);
    player.playVideo();
    $(this).css({ display: 'none' });
  });

});
