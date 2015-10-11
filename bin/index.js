#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));

var parse = require('../');

try {
	if (argv._.length === 0)
		throw new Error('Missing amount');

	console.log(parse(argv._[0]+''));
} catch( e ){
	console.error(e.message);
	process.exit(1);
}
