const fibonacci = function(num) {
    const count = Number(num);
    if (count < 0) { return "OOPS";}
    if (count === 0) { return 0;}
    if (count === 1) { return 1;}

    let before = 0;
    let now = 1;

    for (let i = 1; i < count; i++) {
        let after = before + now;
        before = now;
        now = after;
    }
    return now;
};

console.log(fibonacci(4));
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
