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
    var rainbowDancer = new RainbowDancer();
    expect(rainbowDancer).to.be.an.instanceof(Dancer);
  });

  it("veruca should grow", function() {
    veruca = new Veruca();
    sinon.spy(blinkyDancer.$node, 'toggle');
    expect(veruca.$node.css('width')).to.be.equal(10);
    veruca.step();
    clock.tick(1000);
    expect(veruca.$node.css('width')).to.be.equal(100);
  });

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
