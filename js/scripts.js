var factorial = function(number) {
  if (number === 0) {
    return 1;
  }

  var product = 1;
  for (var multiplier = 1; multiplier <= number; multiplier += 1) {
    product *= multiplier;
  }
  return product;
};
