const palindromes = function (str) {
    const cleaned = str.toLowerCase().replace(/[a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

console.log(palindromes("A car, a man, a maraca"));
console.log(palindromes("Rats live on no evil star"));
console.log(palindromes("Lid off a daffodil"));
console.log(palindromes("Animal loots foliated detail of stool lamina"));
console.log(palindromes("A nut for a jar of tuna"));

// Do not edit below this line
module.exports = palindromes;
