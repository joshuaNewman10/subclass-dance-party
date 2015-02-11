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

var PBJ = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<img class="PBJ" src="src/pbjtime.gif"></img>')
  PBJ.prototype.setPosition.call(this, top, left);
  this.$node.css({width:"85px",height:"80px",position:"absolute"});
};

PBJ.prototype = Object.create(Dancer.prototype);
PBJ.prototype.constructor = PBJ;

PBJ.prototype.step = function(){
  Dancer.prototype.step.call(this);

};
