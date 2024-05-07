import Page from './page.js'

class DldPage extends Page {
    openProduction() {
        super.openProduction('https://www.bayut.com/property-market-analysis/sale/')
    }
    openE2E() {
        super.openE2E('https://sl:getin1@bayut-e2e-development.dubizzle.dev/property-market-analysis/sale/')
    }
    openStage(){
        super.openE2E('https://sl:getin1@https//stage.bayut.sector.run')
    }
    get Buy(){
        return $('')
    }
    get TimeIntervalFilter(){
        return $('//span[text()="Last 12 months"]')
    }
    get TimeIntervaldropdown(){
        return $('//div[contains(@class, "_3f35dbb9") and contains(@class, "FilterDesign2022") and contains(@class, "_6d60a090")]')
    }
    get TimeIntervalValue1(){
        return $('//li[text()="Last month"]')
    }
    get TimeIntervalValue2(){
        return $('//li[text()="Last 3 months"]')
    }
    get TimeIntervalValue3(){
        return $('//li[text()="Last 6 months"]')
    }
    get TimeIntervalValue4(){
        return $('//li[text()="Last 12 months"]')
    }
    get TimeIntervalValue5(){
        return $('//li[text()="Last 3 years"]')
    }
   
    async SelectTimeInterval(a){
        switch(a){
            case "1 month":
                await this.waitForElementDisplayed(this.TimeIntervalValue1)
                await this.TimeIntervalValue1.click()
            break;
            case "3 months":
                await this.waitForElementDisplayed(this.TimeIntervalValue2)
                await this.TimeIntervalValue2.click()
            break;
            case "6 months":
                await this.waitForElementDisplayed(this.TimeIntervalValue3)
                await this.TimeIntervalValue3.click()
            break;
            case "12 months":
                await this.waitForElementDisplayed(this.TimeIntervalValue4)
                await this.TimeIntervalValue4.click()
            break;
            case "3 years":
                await this.waitForElementDisplayed(this.TimeIntervalValue5)
                await this.TimeIntervalValue5.click()
            break;
        
        }

    }


}
export default new DldPage()