// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var RainbowDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function(){
  var rgbColors = [];
  for (var i = 0; i<3; i++){
    rgbColors.push(Math.floor(Math.random() * 255));
  }
  var newColor = 'rgb('+rgbColors[0]+','+rgbColors[1]+','+rgbColors[2]+')';
  this.$node.css('border-color',newColor);
  this.$node.animate({borderColor: newColor}, this.timeBetweenSteps);
  Dancer.prototype.step.call(this); // refactor

};
