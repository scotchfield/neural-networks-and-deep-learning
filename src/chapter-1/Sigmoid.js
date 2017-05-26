function Sigmoid (weights, bias) {
  this.weights = weights;
  this.bias = bias;
}

Sigmoid.prototype.sigmoid = function (z) {
  return 1 / (1 + Math.exp(-z));
}

Sigmoid.prototype.output = function (input) {
  var result = 0;

  input.forEach(function (x, i) {
    result += this.weights[i] * x;
  }, this);

  result -= this.bias;

  return this.sigmoid(result);
}

module.exports = Sigmoid;
