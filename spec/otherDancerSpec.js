describe("otherDancers", function() {

  var rainbowDancer;
  var veruca;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    // blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should be a dancer", function(){
    rainbowDancer = new RainbowDancer();
    veruca = new Veruca();
    expect(rainbowDancer).to.be.an.instanceof(Dancer);
    expect(veruca).to.be.an.instanceof(Dancer);
  });

  it("veruca should grow", function() {
    veruca = new Veruca(100, 100, 100);
    // sinon.spy(blinkyDancer.$node, 'toggle');
    // expect(veruca.$node.css('width')).to.be.equal('10px');
    veruca.step();
    clock.tick(1000);
    expect(veruca.$node).to.not.have.css('width',10);
  });

  // it("rainbows should rainbow", function(){
  //   var rainbow = new RainbowDancer(100,100, 100);
  //   console.log(rainbow);
  //   rainbow.step();
  //   expect(rainbow.$node).to.have.css('border-top-color','red');

  // })

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      blinkyDancer.step();
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
