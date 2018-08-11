var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var bmi = function(weight, height) {
  return (weight / (height * height)) * 703;
};

var ctof = function(c) {
  return c * (9/5) + 32;
};

//var number1 = parseInt(prompt("What is your weight in lbs:"));
// var number2 = parseInt(prompt("What is your height in inches:"));
// var result = bmi(number1, number2);
var cel = parseInt(prompt("What is the temp in C:"));
var result = ctof(cel);

alert(result);
