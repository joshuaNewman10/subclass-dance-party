// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition.call(this, top, left);
  Dancer.prototype.setPosition.call(this, top, left); // come back to this later********************
};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log(this);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUp = function() {
    var height = $(window).height();
    var offset = ((height-32)/window.dancers.length)/2;
    var index = window.dancers.indexOf(this);
    var leftPosition;
    var topPosition;
    console.log(index);
    if( index % 2 === 0) {
      leftPosition = 100;
      topPosition = (index+1)*offset;
    } else {
      leftPosition = ($(window).width()) - 100;
      topPosition = index*offset;
    }
    this.$node.animate({
      top: topPosition,
      left: leftPosition
    },1000);
  };
