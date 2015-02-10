// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.timerID;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition.call(this, top, left);
  Dancer.prototype.setPosition.call(this, top, left); // come back to this later********************
};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log(this);
    //the code to make them dance
    // var width = $(window).width();
    // var height = $(window).height();
    // var moveSize = Math.floor(Math.random()*200);
    // var negative = Math.round(Math.random()* 1) * -1;

    // moveSize = negative < 0 ? moveSize * -1 : moveSize;
    // var topBound,leftBound,bottomBound,rightBound;
    // topBound = 132;
    // leftBound = 100;
    // bottomBound = height-132;
    // rightBound = width-100;
    // var topPosition = parseInt(this.$node.css('top'),10);
    // var leftPosition = parseInt(this.$node.css('left'),10);
    // if(topPosition > topBound && topPosition < bottomBound){
    //   this.$node.animate({top: (topPosition+moveSize)},1000);
    // }
    // if(leftPosition > leftBound && leftPosition < rightBound){
    //   this.$node.animate({left: (leftPosition+moveSize)},1000);
    // }
    //^^^^^^
    this.timerID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
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
    clearTimeout(this.timerID);
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
