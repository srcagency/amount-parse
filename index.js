'use strict'

module.exports = parse

function parse(amount, ds = getDecimalSeparator()) {
	const cleaned = amount.replace(new RegExp(`[^0-9${ds}]+`, 'g'), '')
	if (cleaned !== '') {
		const parts = cleaned.split(ds)
		if (parts.length === 1) {
			return {exponent: 0, value: Number.parseInt(parts[0], 10)}
		} else {
			const last = parts[parts.length - 1]
			return {
				exponent: last.length,
				value: Number.parseInt(parts.join(''), 10),
			}
		}
	}
}

function getDecimalSeparator() {
	return Intl.NumberFormat()
		.formatToParts(1.1)
		.find((part) => part.type === 'decimal').value
}
