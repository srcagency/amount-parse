# Parse amount

Parse a string amount according to the locale settings.

```shell
npm install amount-parse
```

```js
var parse = require('amount-parse');

// assuming a locale with a decimal separator of "."

parse('1') // {exponent: 0, value: 1}
parse('1.5') // {exponent: 1, value: 15}
parse('1.51') // {exponent: 2, value: 151}
parse('1,000') // {exponent: 0, value: 1000}
parse('1,000', ',') // {exponent: 3, value: 1000}
parse('1.000,1') // {exponent: 4, value: 10001}
parse('1,000.2') // {exponent: 1, value: 10002}
parse('1,000.25') // {exponent: 2, value: 100025}
```

```shell
$ parse-amount 1,234.56
{ exponent: 5, value: 123456 }
$ parse-amount --decimal-separator , 1,234.56
{ exponent: 2, value: 123456 }
```
