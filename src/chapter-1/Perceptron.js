function Perceptron (weights, bias) {
  this.weights = weights;
  this.bias = bias;
}

Perceptron.prototype.output = function (input) {
  var result = 0;

  input.forEach(function (x, i) {
    result += this.weights[i] * x;
  }, this);

  return result + this.bias <= 0 ? 0 : 1;
}

module.exports = Perceptron;
