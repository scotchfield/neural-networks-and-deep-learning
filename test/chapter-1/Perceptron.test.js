var assert = require('assert');

var Perceptron = require('../../src/chapter-1/Perceptron');


describe('Perceptron', function () {
  it('should work with simple weights and inputs', function () {
    var p = new Perceptron([1, 1], -1);

    assert.equal(0, p.output([0, 0]));
    assert.equal(1, p.output([1, 1]));
  })

  it('should work at the cheese festival', function () {
    var p = new Perceptron([6, 2, 2], -5);

    assert.equal(1, p.output([1, 0, 0]));
    assert.equal(0, p.output([0, 1, 1]));
  })

  it('should correctly emulate a NAND gate', function () {
    var p = new Perceptron([-2, -2], 3);

    assert.equal(1, p.output([0, 0]));
    assert.equal(1, p.output([0, 1]));
    assert.equal(1, p.output([1, 0]));
    assert.equal(0, p.output([1, 1]));
  })

})
