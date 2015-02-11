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

var Violet = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<img class="violet" src="violet.png"></img>')
  Violet.prototype.setPosition.call(this, top, left);
  // this.oldStep = Dancer.prototype.step;
  var that = this;
  this.$node.on('click',function(){
    that.pop(that);
  });
  // this.$node.addClass('violet');
};

Violet.prototype = Object.create(Dancer.prototype);
Violet.prototype.constructor = Dancer;

Violet.prototype.step = function(){
  this.$node.animate({width:'100px', height: '100px'}, 500);
  this.$node.animate({width:'50px', height: '50px'}, 500);
  // this.oldStep();
  Dancer.prototype.step.call(this); //refactor

};

Violet.prototype.pop = function(cx){  console.log(cx);
  clearTimeout(cx.timerID);
  cx.$node.animate({width:'1000px',height:'1000px'},500);
  setTimeout(function(){cx.$node.remove()},499);
}
