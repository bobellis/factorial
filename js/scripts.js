var factorial = function(number) {
  if (number === 0) {
    return 1;
  }

  var product = 1;
  var multiplier = 1;
  while (multiplier <= number) {
    product *= multiplier;
    multiplier += 1;
  }
  return product;
};
