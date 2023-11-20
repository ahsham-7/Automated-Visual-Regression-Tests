import Page from './page.js';
class findmyagenthome extends Page {
    openProduction(){
        super.openProduction('https://www.bayut.com/companies/')
       }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.herokuapp.com/companies/')
    }

    
    get LocationDropdown (){
       // return $('//div[@class="_3eb9be10 _9a03d150 FilterDesign2022 _81fd71fe"]')
        return $('/html/body/div[2]/div[2]/div/div/div[2]/div/div/div[2]/div')
    }
    get Locationfield(){
      return $('//div[@aria-label="Location filter" and @class="c97c9f73 b271fafb"]')
    }
    get Inputfield(){
      return $('//div[@aria-label="Location filter"]/input[@placeholder="Enter location"]')
    }

    async CitiesCarousal(){
      await browser.scroll(0,550)
    }
  
    async waitforElementDisplay(x,y){
      await browser.waitUntil(async()=> {
        return (await y.isDisplayed())
      }, {
        timeout: x,
      })}


    async waitforPageLoad(){
        await browser.waitUntil(
             async() => await browser.execute(() => document.readyState === 'complete'),
             {
               timeout: 60 * 1000, // 60 seconds
               timeoutMsg: 'Message on failure'
             }
           )}
}
export default new findmyagenthome();