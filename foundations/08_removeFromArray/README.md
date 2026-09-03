# Exercise 08 - removeFromArray

*** *jessi4twork* updateSection START (most recent first)
** September 03, 2026
  * Added two parameters for array and the index placement to remove.
  * Created result array to check where the item that needs to be removed is located.
  * Wrote if statement that if with splice to cut out the object if it exists, returning the updated array, and loggin it on console.
  * First npm test failed, I forgot to replace, the first parameter inside the if statement for splice. Second passed.
*** *jessi4twork* updateSection END

Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise.

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- You can manipulate the original array you pass into the function call or create a new array that is returned as the result, but the function should return the resulting array regardless of the approach.
- How to remove a single element from an array
- How to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
