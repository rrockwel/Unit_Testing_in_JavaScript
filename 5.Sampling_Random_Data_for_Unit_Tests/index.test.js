const log = console.log;
const _ = require('lodash');
const should = require('chai').should();
// Import Exports from Index
const {
	getPerson,
	Person
} = require('./index');

describe('#basic mocha chai', () =>{
	it('should be true', () =>{
		true.should.be.true;
	})
})

describe('#index initial conditions', ()=>{
	it('initial person is an object', ()=>{
		const person = getPerson();
		_.isObject(person).should.be.true;
	})
	it('armor bonus by default is 0 wearing leatherArmor', ()=>{
		const person = getPerson();
		person.armorBonus.should.equal(0);
		// FIXME: should be 2 by default using leatherArmor
		// fix is to not reset armorBonus to 0
	})
});

describe('#Person', ()=>{
	describe('#rollDice',()=>{
		// Check to make sure Person class is present
		it('prints out Person', ()=>{
			log('Person:',Person);
		})

		// Check to make sure rollDice is within Person class
		it('prints out Person.rollDice', ()=>{
			log('Person.rollDice:', Person.rollDice);
		})

		// Check to make sure that rollDice actually returns finite number
		it('should return finite number', ()=>{
			const number = Person.rollDice(1,20);
			_.isFinite(number).should.be.true;
			// Print out random number created
			log('Number:',number);
		})

		// Check to make sure rollDice does not ever return a 0
		it('should not return 0 in a 1000 sample size', ()=>{
			const sample = new Array(10000);
			_.fill(sample, 0);
			const rollDiceSamples = _.map(sample, item => Person.rollDice(1,20))
			const anyZeroes = _.filter(rollDiceSamples, item => item === 0);
			anyZeroes.length.should.be.equal(0);

		})
	})
})
