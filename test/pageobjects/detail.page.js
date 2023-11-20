import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailPage extends Page {
    openProduction(){
        super.openProduction('https://www.bayut.com/to-rent/property/uae/')
       }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.herokuapp.com/to-rent/property/uae/')
    }
    
}