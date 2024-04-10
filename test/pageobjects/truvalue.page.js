import Page from './page.js';

class truvalue extends Page{
    openProduction(){
        super.openProduction('https://www.bayut.com/tru-value')
       }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/tru-value')
    }
get AgencyLocationDropdown(){
    return $('//div[@class="_3eb9be10 _9a03d150 FilterDesign2022 e3e8565c"]')
}
get AgencyInputField(){
    return $('//input[@class="a41c4dcc FilterDesign2022 bac8ce69"]')
}
get Faq1(){
   return $('//div[@class="_91cc64ee" and contains(text(), "How does")]')
}
get Faq1whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "How does")]/ancestor::div[2]')
}
get Faq2(){
    return $('//div[@class="_91cc64ee" and contains(text(), "considered to estimate")]')
}
get Faq2whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "considered to estimate")]/ancestor::div[2]')
}
get Faq3(){
    return $('//div[@class="_91cc64ee" and contains(text(), "provide estimated price ranges")]')
}
get Faq3whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "provide estimated price ranges")]/ancestor::div[2]')
}
get Faq4(){
    return $('//div[@class="_91cc64ee" and contains(text(), "often are the price estimations")]')
}
get Faq4whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "often are the price estimations")]/ancestor::div[2]')
}
get Faq5(){
    return $('//div[@class="_91cc64ee" and contains(text(), "the most accurate price")]')
}
get Faq5whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "the most accurate price")]/ancestor::div[2]')
}
get Faq6(){
    return $('//div[@class="_91cc64ee" and contains(text(), "check the accuracy")]')
}
get Faq6whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "check the accuracy")]/ancestor::div[2]')
}
get Faq7(){
    return $('//div[@class="_91cc64ee" and contains(text(), "get a valuation")]')
}
get Faq7whole(){
    return $('//div[@class="_91cc64ee" and contains(text(), "get a valuation")]/ancestor::div[2]')
}
get TruvalueCenter(){
    return $('//div[@class="a691c31d"and contains(text(), "What is")]/ancestor::section[1]')
}
get PurposeFilter(){
    return $('//label[text()="purpose"]/ancestor::div[1]')
}
get PurposeDropdown(){
    return $('div[class="_3f35dbb9 FilterDesign2022 _0caec95d"]')
}
get Locationfield(){
    return $('//input[@placeholder="Enter location" and @class="a41c4dcc FilterDesign2022 b8ab28f4"]')
}
get LocationDropdown(){
    return $('//div[@class="_3eb9be10 _9a03d150 FilterDesign2022 ef3b51bc"]/ul[@class="_65d3c306"]')
}
get PropertyType(){
    return $('//div[@aria-label="Category filter"]')
}
get PropertyTypeDropdown(){
    return $('//div[@class="_7d8106a0"]')
}
get BedsFilter(){
    return $('//div[@aria-label="Beds filter"]')
}
get BedsFilterDropdown(){
    return $('//div[@class="_3f35dbb9 FilterDesign2022 _9c9e24b1"]')
}
get BathsFilter(){
    return $('//div[@aria-label="Baths filter"]')
}
get BathsFilterDropdown(){
    return $('//div[@class="_3f35dbb9 FilterDesign2022 _9c9e24b1"]')
}
get GetEstimate(){
    return $('//button[@aria-label="Get estimate"]')
}
async Scroll(x){
await browser.scroll(0,x)
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
           async waitForElementExistance(x){
            if(x.isExisting()){
                return true
            }
            else{
                return false
            }
                
           }

}
export default new truvalue()