var assert = require('assert');
var expect = require('chai').expect;



describe('images and graphics', () => {
    beforeEach(() => {
        browser.url('/');
    });
    it('should have the main logo displayed', () => {
        var mainLogo = browser.element('#js-track-logo').value.ELEMENT,
        isDisplayed = browser.elementIdDisplayed(mainLogo);
        expect(isDisplayed.value).to.be.true;

    })

    it('should have main background image displayed', () => {
        var mainSection = browser.element('.hero--home').value.ELEMENT,
        backgroundProp = browser.elementIdCssProperty(mainSection,'background-image'),
        defaultCheck = false;
        if(backgroundProp.value != 'none'){
            var isDisplayed = browser.elementIdDisplayed(mainSection);
            expect(isDisplayed.value).to.be.true;
            defaultCheck = true;
        }
        expect(defaultCheck,'main img catch').to.be.true;
    })

    it('should have section background images visible', () => {
        var addressElement = $('.section--address-check').value.ELEMENT,
            bundlesElement = $('.section--shop-bundles').value.ELEMENT,
            addressDisplayed = browser.elementIdDisplayed(addressElement),
            bundlesDisplayed = browser.elementIdDisplayed(bundlesElement)
        expect(addressDisplayed.value).to.be.true;
        expect(bundlesDisplayed.value).to.be.true;
    
    })
    it('should have all icons with .icons class visible', () => {
        var icons = browser.elements('.icon'),
            windowSize = browser.getViewportSize()
        for(var i=0; i< icons.value.length; i++){
            var icon = icons.value[i].ELEMENT,
            isVisible = browser.elementIdDisplayed(icon),
            parentDisplay = icons.value[i].$('..').getCssProperty('display');
 
            if(windowSize.width > 800 && parentDisplay.value == 'none'){
                continue;
            }
            expect(isVisible.value).to.be.true;
        }
    })

    it('should have images with .graphics class displayed', () => {
        var graphics = browser.elements('.graphic');
        for(var i=0; i< graphics.value.length; i++){
            var graphic = graphics.value[i].ELEMENT;
            var isDisplayed = browser.elementIdDisplayed(graphic);
            expect(isDisplayed.value).to.be.true;
        }
        
    })


})