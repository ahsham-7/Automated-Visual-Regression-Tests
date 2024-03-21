import homePage from './home.page.js';
import Page from './page.js';
class NBS extends Page{
    openProduction(){
        super.openProduction('https://www.bayut.com/to-rent/property/uae/?map_active=true&commute_active=true')
       }
    openE2E(){
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/to-rent/property/uae/?map_active=true&commute_active=true')
    }

    get Walkthroughcard1(){
        return $('//div[@aria-label="Dialog"]')
    }
    get NextButton(){
        return $('//button[@aria-label="Next"]')
    }
    Ignore1stWalkthrough(){
        this.NextButton.click()
    }


}