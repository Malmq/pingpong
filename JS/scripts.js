
// Business Logic
var pingPonged = function(number) {
  if ((number % 3 === 0) && (number % 15 !== 0)) {
    return "ping";
  }
  if ((number % 5 === 0) && (number % 15 !== 0)) {
    return "pong";
  }
  if (number % 15 === 0) {
    return "pingpong";
  }  else {
    return number;
    }
  debugger;
  var numberArray = [];
  debugger;
  var displayList = function(item) {
      numberArray.push(number);
  debugger;
  debugger;
    }
};

// https://stackoverflow.com/questions/46141450/create-li-from-loop-through-array-and-display-to-html-as-a-list




// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    // var result = pingPong(word);
    var result = pingPonged(number);
    $("#result").text(result);
    $("#result").show();
    debugger;
  });
});
