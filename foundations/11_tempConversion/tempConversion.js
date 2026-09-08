const convertToCelsius = function(f) {
  const resultFtoC = (f-32)*(5/9);
  return +resultFtoC.toFixed(1);
};
const convertToFahrenheit = function(c) {
    const resultCtoF = ((c * 1.8)+32);
    return +resultCtoF.toFixed(1);

};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
