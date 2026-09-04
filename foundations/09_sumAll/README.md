# Exercise 09 - sumAll

*** *jessi4twork* updateSection START (most recent first)
** September 04, 2026
  * Verified all tests passed successfully.
  * First npm test failed, resolved this ReferenceError crash by changing the final return statement to match the sum variable.
  * Fixed second/third test failures by changing loop from i < stop to i <= stop and correcting a typo where sum = sum + i was accidentally written as sum = sum + 1.
  * Utilized a simple for-loop to count from start to stop, adding each number to a running total.
  * Used Math.min and Math.max to ensure the loop runs correctly regardless of which number is passed first.
  * Added an if statement at the beginning to validate that both inputs are actual numbers.
*** *jessi4twork* updateSection END

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

If the function receives invalid arguments (such as negative numbers, non-integers, strings etc. - anything other than positive integers), it should return the string `'ERROR'`.

## Hints

- How will you ensure you're summing all integers within the correct range, no matter the order of the inputs?
- Think about your sum's starting value. Then, how can you make sure every single number from the smaller input to the larger one (including both) gets added to it?