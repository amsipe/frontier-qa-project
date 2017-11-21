var expect = require('chai').expect;

describe('primary menu container', () => {
    it('should show a submenu when hovering over a main menu li', () => {
        browser.url('/');
        var mainMenuItems = browser.element('#menu-primary').elements('li.menu-item-has-children');
        mainMenuItems.value.forEach((item) => {
            item.moveToObject()
            var subMenuId = item.element('.sub-menu').value.ELEMENT
            var isDisplayed = browser.elementIdDisplayed(subMenuId)
            expect(isDisplayed.value).to.be.true;
        })
    })
})

describe('red buttons', () => {
    it('should change background color when hovering over a red button', () => {
        browser.url('/');
        var redButtons = browser.elements('.button--red');
        redButtons.value.forEach((button) => {
            var initialBgColor = button.getCssProperty('background-color');
            var buttonClasses = button.getAttribute('class');
            button.moveToObject();
            browser.pause(400);
            var hoverBgColor = button.getCssProperty('background-color'); 

            if(buttonClasses.indexOf('button--faux') > 0){
                expect(hoverBgColor.value).to.equal(initialBgColor.value);
            }else {
                expect(hoverBgColor.value).to.not.equal(initialBgColor.value);
            }
        })
    })
})

describe('footer links', () => {
    it('should change text color when hovering over footer links', () => {
        browser.url('/')
        var footerLinks = browser.elements('.nav-footer__menu-item');
        footerLinks.value.forEach((link) => {
            var initialColor = link.getCssProperty('color');
            link.moveToObject();
            var hoverColor = link.getCssProperty('color')
            expect(hoverColor.value).to.not.equal(initialColor);
        })
    })
})