Hello , this is a module for **searching**

## How to use : 

- config :

```javascript
const search = require('search-dot-js')
```

- how to search : 

```javascript
search("l","hello world hello","hello") // [0 , 5]

search("g","hello world hello","hello") // [ [0 , 5] , [ 12 , 17 ] ]
```

- what is operator : 

Operators specify the type of search operation, operator l only finishes the operation by finding an item, but the g operator completes the search, generally using the operator l for conditional operations, of course there is no limit to this .

- Other uses : 

```javascript
if(search('l','hello world','home')){
    console.log(true)
}else{
    console.log(false)
}

// false 

if(search('l','hello world','hello')){
    console.log(true)
}else{
    console.log(false)
}

// true
```