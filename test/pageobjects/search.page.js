import Page from './page.js';
import {RandomBedsSelector} from '../utilities/helper.js'
class SearchPage extends Page{
    openProduction(){
        super.openProduction('https://www.bayut.com/to-rent/property/uae/')
       }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.herokuapp.com/to-rent/property/uae/')
    }
    get PurposeFilter(){
        return $('//div[@aria-label="Purpose filter"]')
    }
    get BuyDropdown(){
        return $('//button[@aria-label="Buy"]')
    }

    get TrucheckQuickFilter(){
        return $('//span[text()="TruCheck™ listings first"]')
    }
    get SortingFilterFullDropdown(){
        return $('//div[@class="_3f35dbb9 _53accf42"]')
    }
    get SortingFilter(){
        return $('//div[@aria-label="Sort by filter"]')
    }
    get ElementBuyFilterFullDropdown(){
       return $('//div[@class="_3f35dbb9 FilterDesign2022 _0caec95d"]')
    }
    get MoreFilterButton(){
       return $('//div[@aria-label="More filters"]')
    }
    get MoreFilterFullDropdown(){
        return $('//*[@id="large-search-form"]/div/div/div/div/div[6]/div[2]/div')
    }
    get PriceFilter(){
        return $('//div[@aria-label="Price filter"]')
    }
    get PriceFilterDropdown(){
        return $('//div[@class="_0a772a68"]/div[@class="_3f35dbb9 FilterDesign2022 _0fcbe30a FilterDesign2022"]')
    }
    get PropertyType(){
        return $('//div[@aria-label="Category filter"]')
    }
    get PropertyTypeDropdown(){
        return $('//div[@class="_3f35dbb9 FilterDesign2022 _4c9282ef FilterDesign2022"]')
    }
    get BedsFilter(){
        return $('//div[@aria-label="Beds & Baths filter" and @class="_3a42e70b af6ae78d _2001a005"]')
    }
    get BedsBathsDropdown(){
        return $('//div[@class="_3f35dbb9 FilterDesign2022 _7ff7b946"]')
    }
    get BedsSelection_2(){
        return $('//ul[@aria-label="Beds filter"]/li[text()="2"]')
    }
    get BedsSelection_3(){
        return $('//ul[@aria-label="Beds filter"]/li[text()="3"]')
    }
    get QuickFiltersSection(){
        return $('//div[@aria-label="Quick filters"]')
    }
    get TruCheck(){
        return $('//div[@aria-label="TruCheck listings first"]')
    }
    get FloorPlans(){
        return $('//div[@aria-label="Properties with floor plans"]')
    }
   
    async waitforPageLoad(){
       await browser.waitUntil(
            async() => await browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
          )}
      get MultipleBedsSelection (){
     const A= RandomBedsSelector(0,8)
     const B= RandomBedsSelector(0,8)
     if(A==B){
        const C= RandomBedsSelector(2,8)
        // return $('//ul[@aria-label="Beds filter"]/li[text()=%d]',C)
        return `//ul[@aria-label="Beds filter"]/li[text()=${C}]`
        // .$$('//ul[@aria-label="Beds filter"]/li[text()=%d]',A)
     }
     else{
        // return $('//ul[@aria-label="Beds filter"]/li[text()=%d]',A)
        return $`//ul[@aria-label="Beds filter"]/li[text()=${A}]`
        // .$$('//ul[@aria-label="Beds filter"]/li[text()=%d]',B)
     }
     
    }
   get Bedss(){
    const y= RandomBedsSelector(0,8)
    return y
    // const x= '//ul[@aria-label="Beds filter"]/li[text()=]'+"+"+y
    // return $(x)

    // return $(`//ul[@aria-label="Beds filter"]/li[text()=${y}]`)
    // return $('//ul[@aria-label="Beds filter"]/li[text()=%d]',y)
   }
    async waitforElementDisplay(x,y){
          await browser.waitUntil(async()=> {
            return (await y.isDisplayed())
          }, {
            timeout: x,
          })}

    async CaptureShotElement(element,name){
    await browser.saveElement(element,`${name}`,{})
    }
    async CompareShotElement(element,name){
    await browser.checkElement(await element,`${name}`,{})
        // await expect(await browser.checkElement(await SearchPage.BedsBathsDropdown,'Bedsdropdown3',{})).toEqual(0)
    }
           
            
        
                
          }

export default new SearchPage()