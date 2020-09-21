log = console.log

expect = require('chai').expect;
should = require('chai').should();

_ = require('lodash');

describe('#mocha basics', ()=>{
	// Unit Tests Here

	it('true should be true', ()=>{
		true.should.be.true;
	});
	it('I expect true to be true', ()=>{
		expect(true).to.be.true;
	})
})