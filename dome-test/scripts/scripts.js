$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function smoothScroll() {
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

  var team = {
    luca: 'http://www.domedesign.it/luca-rossi.html',
    jean: 'http://www.domedesign.it/jean-louis-salbego.html',
    orca: 'http://www.domedesign.it/laerte-schiavo.html',
    youssef: 'http://www.domedesign.it/youssef-dalima.html',
    muri: 'http://www.domedesign.it/nicola-murianni.html',
    elisa: 'http://www.domedesign.it/elisa-benetti.html'
  };
  $('path').on('click', function() {
    window.location = team[this.id.split('-')[0]];
  });

  $(function() {
    $('.toggleNav').on('click',function() {
      $('nav ul').toggleClass('open');
    });
  });
});
