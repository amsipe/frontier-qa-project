var expect = require('chai').expect;

describe('forms', () => {
    it('should show error message with no input provided', () => {
        browser.url('/');
        browser.waitForExist('#form-address-check');
        browser.click('#js-track-form-check-availability');
        var errorHeight = browser.getCssProperty('.form__error=Address is required.','height');
        var hasHeight = errorHeight.parsed.value > 0;
        expect(hasHeight).to.be.true;
        
    })

    it('should remain on landing page if submitting invalid information', () => {
        browser.url('/');
        browser.waitForVisible('.js-track-form-zip');
        browser.addValue('.js-track-form-zip','invalid');
        browser.click('#js-track-form-check-availability');
        expect(browser.getUrl()).to.equal('https://internet.frontier.com/');
    })

    it('should navigate to pricing page on valid info submit', () => {
        browser.url('/');
        browser.waitForVisible('.js-track-form-zip');
        browser.addValue('.js-track-form-zip','12345');
        browser.click('#js-track-form-check-availability');
        browser.pause(2000);
        var newUrl = browser.getUrl();
        console.log(newUrl);
        expect(browser.getUrl()).to.equal(newUrl);
    })
})