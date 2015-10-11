'use strict';

var test = require('tape');
var parse = require('../');

test(function( t ){
	t.equal(parse('1'), 100);
	t.equal(parse('1,5'), 150);
	t.equal(parse('1,51'), 151);
	t.equal(parse('1,000'), 100000);
	t.equal(parse('1.000'), 100000);
	t.equal(parse('1.000,1'), 100010);
	t.equal(parse('1,000.2'), 100020);
	t.equal(parse('1,000.25'), 100025);
	t.end();
});
