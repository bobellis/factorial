var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    return factorial(number - 1)*number
  }
};

$(function() {
  $("form#factorial").submit(function(event){
    var number = parseInt($("input#number").val());
    $("#result").text(factorial(number));
    event.preventDefault();
  });
});
