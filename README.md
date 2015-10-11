# Parse amount

Parse a string amount to a number of the minor amount with a best effort.

When typing an amount people mix up the use of decimal and thousand separators
and it only becomes harder when copy/pasting between different applications
with different locale settings.

This package does its best to guess the intended value.

```shell
npm install amount-parse --save
```

```js
var parse = require('amount-parse');

parse('1');	// 100
parse('1,5');	// 150
parse('1,51');	// 151
parse('1,000');	// 100000
parse('1.000');	// 100000
parse('1.000,1');	// 100010
parse('1,000.2');	// 100020
parse('1,000.25');	// 100025
```

```shell
$ parse-amount 1.234,56
1234.56
```
