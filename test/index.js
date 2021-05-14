'use strict'

const test = require('tape')
const parse = require('../')

test(function (t) {
	t.deepEqual(parse('1'), {exponent: 0, value: 1})
	t.deepEqual(parse('1.5'), {exponent: 1, value: 15})
	t.deepEqual(parse('1.51'), {exponent: 2, value: 151})
	t.deepEqual(parse('1,000'), {exponent: 0, value: 1000})
	t.deepEqual(parse('1,000', ','), {exponent: 3, value: 1000})
	t.deepEqual(parse('1.000,1'), {exponent: 4, value: 10001})
	t.deepEqual(parse('1,000.2'), {exponent: 1, value: 10002})
	t.deepEqual(parse('1,000.25'), {exponent: 2, value: 100025})
	t.end()
})
