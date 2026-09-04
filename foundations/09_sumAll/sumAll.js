const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    const start = Math.min(num1, num2);
    const stop = Math.max(num1, num2);

    let sum = 0;
    for(let i = start; i <= stop; i++) {
        sum = sum + i;
    }
    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
