# Exercise 14 - Fibonacci

*** *jessi4twork* updateSection START (most recent first)
** September 14, 2026
  * Test passed on second try.
  * Fixed failure by converting input into a numeric var (count), updating loops to use it, and adding condition for when count equals 1.
  * First try failed due to npt test string inputs and specific base cases.
  * Created tracking vars (before, now) and a loop to update them using a third var (after) to advance the chain.
  * Started function with num as parameter and added guard clauses to immediately return values if num is less than 0 or equal to 0.
*** *jessi4twork* updateSection END

Create a function that returns a specific member of the Fibonacci sequence (series of numbers in which each number is the sum of the two preceding numbers). To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. (i.e. starting at 1, not 0).

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

If given a negative number, the function should return `"OOPS"`.