#!/usr/bin/env node
'use strict'

const argv = require('minimist')(process.argv.slice(2))
const parse = require('../')

try {
	if (argv._.length === 0) throw new Error('Missing amount')

	console.log(
		parse(argv._[0] + '', {
			ds: argv['decimal-separator'],
			locale: argv.locale,
		})
	)
} catch (e) {
	console.error(e.message)
	process.exit(1)
}
