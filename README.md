Hello , this is a module for **searching**

## How to use :

- config :

```javascript
const search = require("search-dot-js");
```

- how to search :

```javascript
search("l", "hello world hello", "hello"); // [0 , 5]

search("g", "hello world hello", "hello"); // [ [0 , 5] , [ 12 , 17 ] ]

search("n", "hello world hello", "hello"); // 2
```

- Other uses :

```javascript
if (search("l", "hello world", "home")) {
  console.log(true);
} else {
  console.log(false);
}

// false

if (search("l", "hello world", "hello")) {
  console.log(true);
} else {
  console.log(false);
}

// true

let num = search("n", "hello world", "hello");

switch (num) {
  case 1:
    console.log("1 hello");
    break;
  case 2:
    console.log("2 hello");
    break;
  case false:
    console.log("0 hello");
    break;
}

// 1 hello
```

### Items before use :

- Recursive values ?

Return values vary in operators, we give you examples to understand this

```javascript
search("l", "hello world hello", "hello"); // [0 , 5]

search("l", "hello world hello", "home"); // false

search("g", "hello world hello", "hello"); // [ [0 , 5] , [ 12 , 17 ] ]

search("g", "hello world hello", "home"); // false

search("n", "hello world hello", "hello"); // 2

search("n", "hello world hello", "home"); // 0
```

- what is operator ?

Operators specify the type of search operation, operator l only finishes the operation by finding an item, but the g operator completes the search, generally using the operator l for conditional operations, of course there is no limit to this .

- What is An Operator n ?

This operator returns the number of available values, for example in the search for hello in hello world returns value 1, and if there are no values, the return value is false.

- Is it necessary to use the return value of the n operator in the if/else ?

yes, you can give you an examples to understand this

```javascript
if (search("n", "hello world hello", "home")) {
  console.log(true);
} else {
  console.log(false);
}

// false
```

```javascript
let num = search("n", "hello world", "hello");

switch (num) {
  case 1:
    console.log("1 hello");
    break;
  case 2:
    console.log("2 hello");
    break;
  case false:
    console.log("0 hello");
    break;
}

// 1 hello
```

- Which operator performs faster ?

Definitely the operator l because as soon as it finds the operation stops but the operator g checks the end of the text, so obviously l is faster, of course this issue is not very important in small operations and does not make much difference, but in large operations this issue is well felt

- Is it sensitive to types ?

Yes , you can't find 10 in "10"
