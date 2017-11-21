var expect = require('chai').expect;
var fetch = require('node-fetch');


describe('valid links', () => {

    it('should have active links for footer', () => {
        browser.url('/')
        var links = browser.elements('.nav-footer__list-item--link');
        let hrefArray = links.value.map((link) => {
                return link.getAttribute('href');
        })

        hrefArray.forEach((href) => {
            describe('URL request for: ' + href, () => {
                it('should have active url', () => {
                    browser.url(href);
                    let newUrl = browser.getUrl();
                    if(!newUrl.indexOf('https://frontier.com/login') > 0){
                        expect(true).to.be.true;
                    }else{
                        expect(newUrl).to.be.equal(href);
                    }
                })
            })
        })
    })

    it('should have active links in main nav', () => {
        browser.url('/');
        var navLinks = browser.elements('#menu-primary a');
        let hrefArray = navLinks.value.map((link) => link.getAttribute('href'))

        hrefArray.forEach((href) => {
            describe('URL request for: ' + href, () => {
                if(href.indexOf('#')){
                    it('should have active url', () => {
                        browser.url(href);
                        let newUrl = browser.getUrl();
                        if(!newUrl.indexOf('https://frontier.com/login') > 0){
                            expect(true).to.be.true;
                        }else{
                            expect(newUrl).to.be.equal(href);
                        }
                    })
                }
            })
        })
    })

    it('should have active links in aux nav', () => {
        browser.url('/');
        var auxLinks = browser.elements('.nav-aux__item a');
        let hrefArray = auxLinks.value.map((link) => link.getAttribute('href'))

        hrefArray.forEach((href) => {
            describe('URL request for: ' + href, () => {
                it('should have active url', () => {
                    browser.url(href);
                    let newUrl = browser.getUrl();
                    if(!newUrl.indexOf('https://frontier.com/login') > 0){
                        expect(true).to.be.true;
                    }else{
                        expect(newUrl).to.be.equal(href);
                    }
                })
            })
        })
    })
})

