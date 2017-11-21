var expect = require('chai').expect;

describe('menu item anchors', () => {
    it('should have similar css for all main nav anchor elements', () => {
        browser.url('/');
        var menuAnchors = browser.elements('#menu-primary > li > a');
        var firstLinkColor = menuAnchors.value[0].getCssProperty('color');
        var firstLinkFontSize = menuAnchors.value[0].getCssProperty('font-size');
        var firstLinkDisplay = menuAnchors.value[0].getCssProperty('display');
        menuAnchors.value.forEach((anchor) => {
            var linkColor = anchor.getCssProperty('color');
            var linkFontSize = anchor.getCssProperty('font-size');
            var linkDisplay = anchor.getCssProperty('display');

            expect(linkColor.value).to.be.equal(firstLinkColor.value)
            expect(linkFontSize.value).to.be.equal(firstLinkFontSize.value)
            expect(linkDisplay.value).to.be.equal(firstLinkDisplay.value)
        })
    })

    it('should have same length and width for products section', () => {
        browser.url('/');
        var productDivs = browser.elements('.section--products-cta__item');
        var firstDivLength = productDivs.value[0].getCssProperty('height');
        var firstDivWidth = productDivs.value[0].getCssProperty('width');

        productDivs.value.forEach((div) => {
            var divLength = div.getCssProperty('height');
            var divWidth = div.getCssProperty('width');

            expect(divLength.value).to.be.equal(firstDivLength.value);
            expect(divWidth.value).to.be.equal(firstDivWidth.value)
        })
    })

    it('should have same css for all footer links', () => {
        browser.url('/');
        var footerLinks = browser.elements('.nav-footer__list-item--link');
        var firstLinkColor = footerLinks.value[0].getCssProperty('color');
        var firstLinkFontSize = footerLinks.value[0].getCssProperty('font-size');
        var firstLinkDisplay = footerLinks.value[0].getCssProperty('display');

        footerLinks.value.forEach((link) => {
            var linkColor = link.getCssProperty('color');
            var linkFontSize = link.getCssProperty('font-size');
            var linkDisplay = link.getCssProperty('display');

            expect(linkColor.value).to.be.equal(firstLinkColor.value)
            expect(linkFontSize.value).to.be.equal(firstLinkFontSize.value)
            expect(linkDisplay.value).to.be.equal(firstLinkDisplay.value)
        })
    })
})