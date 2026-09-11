# Exercise 13 - Palindromes
** September 11, 2026
  * Passed the second test. I also learned that I only have to type the file name while in the directory containing the spec.js file.
  * The NPM test failed when using a for loop. To fix it, I omitted the loop and created two different baskets: one for the lowercase, character-replaced string, and another for the split, reverse, and join chain. It now returns true if the cleaned string matches the reversed string.
  * Previously, I created an empty string basket using the lowercase, split, reverse, and join chain with a for loop, nesting an if statement inside to check if the cleaned string matched the original string.
*** *jessi4twork* updateSection END

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

Some palindromes:

- A car, a man, a maraca.
- Rats live on no evil star.
- Lid off a daffodil.
- Animal loots foliated detail of stool lamina.
- A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```
