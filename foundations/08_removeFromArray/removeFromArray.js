const removeFromArray = function(arr, obj) {
    const removeItem = arr.indexOf(obj);
    if (removeItem > -1) {
        arr.splice(removeItem, 1);
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
// 