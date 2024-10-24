import Page from './page.js';
class HomePage extends Page{
    openStage(){
        super.openStage('https://sl:getin1@stage.bayut.sector.run')
       }
    openProduction(){
        super.openProduction('https://www.bayut.com/')
       }
    openE2E () {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev')
    }
    get Footer(){
        return $('//div[@class="_6153b3d6"]')
    }
    get FeaturedAgencySection(){
        return $('//div[@class="_78064f71"]')
    }
    get PopularSearchesSection(){
        return $('//div[@class="fa2044b7"]')
    }
    get DiscoverPropertySection(){
        return $('//div[@class="_18c65957"]')
    }
    get QuickLinksCards(){
        return $('//div[@class="_18fac54f"]')
    }
    get Carousal(){
        return $('//div[@class="db481140"]')
    }
    get DubaiTransactionTab(){
        return $('//button[@aria-label="Transactions"]')
    }
    get ChatGptTab(){
        return $('//button[@aria-label="BayutGPT button"]')
    }

    
    async SaveShot(name){
        await browser.saveScreen(`${name}`, {})
   }
   async CompareShot(name){
        await expect(
             await browser.checkScreen(`${name}`, {
        })).toEqual(0)
   } 
   async waitforElementDisplay(x,y){
    await browser.waitUntil(async()=> {
      return (await y.isDisplayed())
    }, {
      timeout: x,
    })}
    // async waitExistence(element,time){
    //     await browser.waitForExist(element,time);
    // }
}
export default new HomePage();