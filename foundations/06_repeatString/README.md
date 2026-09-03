# Exercise 06 - repeatString

*** *jessi4twork* updateSection START (most recent first)
** September 02, 2026
  * Set parameters of function.
  * Created empty string to hold result.
  * Fixed loop to run by number parameter.
  * Formatted console log.
  * First npm test failed, edited parameters as required on readme.Second npm test passed.
*** *jessi4twork* updateSection END

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

This function will take two arguments, `string` and `num`. If `num` is a negative number, return the string `'ERROR'` instead.

Use loops to implement `repeatString` rather than using the builtin `String.prototype.repeat` which has the same behaviour.

*Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on. So read each exercise's README carefully to see what kinds of arguments will be expected.

## Hints

- What inputs does the function need to achieve its goal?
- How can you iteratively build up the final string, using one of the inputs to control the repetition?
