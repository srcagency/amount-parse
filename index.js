'use strict'

module.exports = parse

function parse(amount, opts = {}) {
	const ds = opts.ds || getDecimalSeparator(opts.locale)
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

function getDecimalSeparator(locale) {
	return Intl.NumberFormat(locale)
		.formatToParts(1.1)
		.find((part) => part.type === 'decimal').value
}
