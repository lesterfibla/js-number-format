const expect = require('chai').expect
import {n, d, m} from '../dist/js-number-format.js';

describe('Pruebas de js-number-format', function(){

	it('Número sin decimales (decimal bajo) round', function(){
		const result = n(123456.12)
		expect(result).to.equal('123.456')
	})

	it('Número sin decimales (decimal alto) round', function(){
		const result = n(123456.78)
		expect(result).to.equal('123.457')
	})

	it('Número sin decimales (decimal alto) truncate', function(){
		const result = n(123456.78, true)
		expect(result).to.equal('123.456')
	})

	it('Número con 2 decimales', function(){
		const result = d(123456.78)
		expect(result).to.equal('123.456,78')
	})

	it('Moneda sin decimales round', function(){
		const result = m(123456.78)
		expect(result).to.equal('$ 123.457')
	})

	it('Moneda sin decimales truncate', function(){
		const result = m(123456.78, true)
		expect(result).to.equal('$ 123.456')
	})

})