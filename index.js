'use strict';

module.exports = parse;

function parse( amount ){
	var groups = amount.split(/[\.\,]/);
	var last = groups[groups.length - 1];

	if (groups.length > 1 && last.length < 3)
		return parseInt(groups.slice(0, -1).join('') || 0, 10) * 100
			+ parseInt(last, 10) * (last.length === 2 ? 1 : 10)

	return parseInt(groups.join(''), 10) * 100;
}
