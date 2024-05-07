import DldPage from '../pageobjects/dld.page.js'

describe('Dld Page Suite', async () => {
    // it('Verify Dld Page Top Section', async () => {
    //     DldPage.openE2E()
    //     await DldPage.waitForPageToLoad()
    //     await DldPage.SaveShot('Dld top section')
    //     DldPage.openProduction()
    //     await DldPage.waitForPageToLoad()
    //    await DldPage.CompareShot('Dld top section')
    // }),

    it('Verify Selecting Time Interval: Duration(3 Years)', async () => {
        DldPage.openE2E()
       await DldPage.TimeIntervalFilter.click()
       await DldPage.waitForElementDisplayed(DldPage.TimeIntervaldropdown)
       await DldPage.TimeIntervaldropdown.click()
       let a="3 years"
        DldPage.SelectTimeInterval = async function(a="3 years"){
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
       await DldPage.SaveShot('Time Interval 3 Years')
        DldPage.openProduction()
       await DldPage.TimeIntervalFilter.click()
       await DldPage.waitForElementDisplayed(DldPage.TimeIntervaldropdown)
       await DldPage.TimeIntervaldropdown.click()

       DldPage.SelectTimeInterval = async function(a){
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
   
       await DldPage.CompareShot('Time Interval 3 Years')
    })


})