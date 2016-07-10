(function() {
  'use strict';

  activateHome();

  function activateHome() {
    $('.home .cards a').hover(function() {
      $('#' + this.id + '-description')
        .css('opacity', 1);
    }, function() {
      $('#' + this.id + '-description')
        .css('opacity', 0);
    });
  }

})();