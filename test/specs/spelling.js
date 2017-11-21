var expect = require('chai').expect;
var spell = require('spell-checker-js');

describe('spelling check', () => {
    spell.load('en');
    spell.load('./test/specs/custom_dictionary.txt');
    it('should pass the sanity check for misspelled words', () => {
        expect(spell.check('missspelled')).to.have.length(1);
        expect(spell.check('correct')).to.have.length(0);
    })

    it('should validate spelling for all text on the page', () => {
        browser.url('/');
        var allText = browser.getText('*');

        var allTextNoBlanks = allText.filter((text) => text !== '')
        allTextNoBlanks = allTextNoBlanks.map((text) => spell.check(text))
            .filter((textArray) => textArray.length > 0)

        var filteredAllText = allTextNoBlanks.map((textArray) => {
            var newArray = textArray.filter((text) => {
                var isInt = isNaN(parseInt(text));
                return isInt;
            })
            return newArray
        })

        filteredAllText = filteredAllText.filter((textArray) => textArray.length > 0)
        expect(filteredAllText).to.have.length(0); 
    })  
})
