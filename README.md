# random-string-bhutta

## How to install

```sh
 npm install random-string-bhutta
```

## How generate random string
```js
const RandomString = require('random-string-bhutta');

const string = RandomString();
console.log(string);
```
> This will generate random string with length of 12 characters if you want to generate random string with specific length then follow

```js
const length = 20;
const string = RandomString(20);
console.log(string);
```

> This will generate random string of 20 characters length