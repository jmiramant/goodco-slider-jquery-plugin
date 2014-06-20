$.widget("ui.goodSlider", $.ui.slider, {

  options: {
    min: 0,
    max: 100,
    value: 50,
    animate: 'fast'
  },

  _sliderChange: function() {
    var self;
    this.sliderValue = this.value();
    this._backgroundAdjust(this.sliderValue);
    if (!this.moved) {
      self = this;
      this.moved = true;
      $(this.element).addClass("moved");
      return $('.ui-slider-handle').on('click', function(e,ui) {
        var $track;
        $track = $(this.element);
        $track.removeClass("confirm");
        $track.addClass("moved");
        return self._processQuestion();
      });
    }
  },

  _initialize: function() {
    var els = ["<div class='slide-bg-color' id='left'></div>",
               "<div class='slide-middle'></div>",
               "<div class='slide-bg-color' id='right'></div>"];
    for (i = 0; i < els.length; i++) {
      this.element.append(els[i]);
    }
  },

  _backgroundAdjust: function(v) {
    var $track, half;
    half = $(this.element).width() / 2;
    $track = $(this.element);
    if (v < 50) {
      $track.find('#right').css('width', 0);
      return $track.find('#left').css('width', half * (1 - (v / 50)) - 10);
    } else {
      $track.find('#left').css('width', 0);
      return $track.find('#right').css('width', half * ((v - 50) / 50) - 10);
    }
  },

  _processQuestion: function(e, ui) {
    console.log(this.sliderValue);
  },

  _create: function( ) {
    this._initialize();
    this._super();
  },

  _change: function(e, s) {
    this._sliderChange();
  }

});

// Example init
$( document ).ready(function() {
  $('.good-slider').goodSlider();
});