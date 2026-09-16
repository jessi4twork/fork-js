# Exercise 15 - Get the Titles!

*** *jessi4twork* updateSection START (most recent first)
** September 16, 2026
  * Test passed on third try.
  * Second test failed. I deleted the given array and the console log.
  * First test failed so I move the given array from below the function to before it. 
  * Created an empty array and a for loop  after it nesting a statement that pushes the properties we want into a list.
  * I entered the given array outside the function.
*** *jessi4twork* updateSection END

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book', 'Book2']
```

## Hints

- You should use a built-in javascript method to do most of the work for you!
