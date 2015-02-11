$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      (Math.random() * 2000) +500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.makeDanceButton').on('click', function(event) {
     window.dancers.forEach(function(dancer) {
        dancer.step();
     });
  });

  $('.lineUpButton').on('click', function() {

      window.dancers.forEach(function(dancer) {
        dancer.lineUp();
      });
  });

  $('.findPartnerButton').on('click', function(){
      window.dancers.forEach(function(dancer){
        dancer.moveClosest();
      });
  });

  var backgrounds = ["lilypads.jpg","U-Hall-Stage.jpg","foto-sala-vella.jpg","lights.jpg"];
  var currentBackground = 1;
  $('.backgroundButton').on('click', function(){
    var newBG = 'url(src/' +backgrounds[currentBackground] + ')';
    $('body').css({"background-image": newBG},500);
    if (currentBackground === backgrounds.length-1) currentBackground = 0;
    else currentBackground++;
  })


});


