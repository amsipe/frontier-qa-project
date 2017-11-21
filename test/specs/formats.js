var expect = require('chai').expect;

describe('currency format', () => {
    it('should have correct format for all currency elements', () => {
        browser.url('/');
        const currencySymbols = browser.elements('.price__currency');
        const priceDollars = browser.elements('.price__dollars');
        const priceCents = browser.elements('.price__cents');

        for(var i=0; i<currencySymbols.value.length; i++){
            let compareString = `${currencySymbols.value[i].getText()}${priceDollars.value[i].getText()}`,
            regex = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/,
            isFormatted = regex.test(compareString);
            expect(isFormatted).to.be.true;
        }
    })
})

describe('telephone number format', () => {

    var testPhone = function(str) {
        let regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g
        return regex.test(str);
    }
    
    it('should return true for the sanity check', () => {
        const testString = '555-555-5555';
        expect(testPhone(testString)).to.be.true;
    })

    it('should have all telephone numbers formatted correctly', () => {
        browser.url('/');
        const telphoneElements = browser.elements('span[data-fuse-format]');
        for(var i=0; i<telphoneElements.value.length; i++){
            let compareString = `${telphoneElements.value[i].getText()}`;
            expect(testPhone(compareString)).to.be.true;
        }
    })
})

