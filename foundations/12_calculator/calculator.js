const add = function(num1, num2) {
  const total = num1 + num2;
  return total;
	
};

const subtract = function(num1, num2) {
  const difference = num1 - num2;
  return difference;
};

const sum = function(arr) {
  let sumAll = 0;
  
  for(let num of arr) {
    sumAll += num
  }
	return sumAll;
};

const multiply = function(arr) {
  let productAll = 0;
  
  for(let num of arr) {
    productAll *= num
  }
	return sumAll;
};

const power = function(base, expo) {
	const powAnswer = base ** expo 
  return powAnswer
};

const factorial = function(num) {
	let facAnswer = 1;

  for (let i = num; i > 0; i--) {
    facAnswer *= i;
  }

  return facAnswer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
