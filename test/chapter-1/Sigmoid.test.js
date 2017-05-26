var assert = require('assert');

var Sigmoid = require('../../src/chapter-1/Sigmoid');


describe('Sigmoid', function () {
  it('should provide a valid sigmoid function', function () {
    assert.equal(0.5, Sigmoid.prototype.sigmoid(0));

    // Multiply by 1000 and round the values to test with some precision.
    assert.equal(269, Math.round(Sigmoid.prototype.sigmoid(-1) * 1000));
    assert.equal(731, Math.round(Sigmoid.prototype.sigmoid(1) * 1000));
  })

  it('should work with known weights and inputs', function () {
    var p = new Sigmoid([1, 1], 0);

    // Multiply by 1000 and round the values to test with some precision.
    assert.equal(0.5, p.output([0, 0]));
    assert.equal(731, Math.round(p.output([0, 1]) * 1000));
    assert.equal(731, Math.round(p.output([1, 0]) * 1000));
    assert.equal(881, Math.round(p.output([1, 1]) * 1000));
  })
})
