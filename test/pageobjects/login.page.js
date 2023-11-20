import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
   openStage(){
    super.openStage('https://sl:getin1@stage2.bayut.com/')
   }
   openProduction(){
    super.openProduction('https://www.bayut.com/')
   }
   openE2E () {
    super.openE2E('https://sl:getin1@bayut-e2e-development.herokuapp.com')
}
    get Loginpopup (){
        return $('//button[@aria-label="Login"]')
    }
    get LoginPopDisplay(){
        return $('//div[@aria-label="Dialog"]')
    }
    get LanguageSwitcherBtn(){
        return $('//div[@aria-label="language switch button"]')
    }
    get CountryDropdown(){
        return $('//button[@class="_772bc943"]')
    }
    get SettingsButton(){
        return $('//button[@aria-label="Settings button"]')
    }
    get AreaDropdown(){
        return $('//button[@aria-label="Change area unit"]')
    }
    get AreaUnitDropdown(){
        return $('//div[@class="_711ff8a3"]')
    }
    get PurposeButton(){
        return $('//div[@name="purpose"]')
    }
    get BuyButton(){
        return $('//button[@aria-label="Buy"]')
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async VerifyLoginPopUp () {
     this.open()
       await browser.pause(2000)
       await browser.maximizeWindow()
       await this.Loginpopup.click()
       await browser.pause(2000)
       await browser.saveScreen('Loginpopup', {
    })
        await browser.url('https://www.bayut.com/')
       await browser.pause(2000)
      await this.Loginpopup.click()
      await browser.pause(2000)
    await expect(
        await browser.checkScreen('Loginpopup', {
            /* some options */
        })
    ).toEqual(0)
    }
   async VerifyLanguageSwitcher(){
      this.open()
     await browser.pause(2000)
     await this.LanguageSwitcherBtn.click()
     await browser.pause(1000)
     await browser.saveScreen('LanguageSwitcher', {
    })
    await browser.url('https://www.bayut.com/')
    await browser.pause(2000)
   await this.LanguageSwitcherBtn.click()
   await browser.pause(1000)
 await expect(
     await browser.checkScreen('LanguageSwitcher', {
         /* some options */
     })
 ).toEqual(0)
   }
   async BottomScreenSize(){
    this.open()
    await browser.pause(3000)
    await browser.scroll(0, 3500)
    await browser.pause(2000)
    await browser.saveScreen('BottomScreen', {
    })
        await browser.url('https://www.bayut.com/')
        await browser.pause(3000)
        await browser.scroll(0, 3500)
        await browser.pause(2000)
    await expect(
        await browser.checkScreen('BottomScreen', {
            /* some options */
        })
    ).toEqual(0)
    }
     async VerifyCountryDropdown(){
        this.open()
        browser.pause(3000)
        await browser.scroll(0, 3500)
        await this.CountryDropdown.click()
       this.CaptureShot('Screen1')
            await browser.url('https://www.bayut.com/')
            await browser.pause(3000)
            await browser.scroll(0, 3500)
            await this.CountryDropdown.click()
            await browser.pause(1000)
        this.CompareShot('Screen1')
    }
    async HomePageRentDropdownOpen(){
        await browser.pause(3000)
        await browser.scroll(0,90)
        await this.PurposeButton.click()
        await browser.pause(3000)
    }
    async HomePageBuyDropdownOpen(){
        await this.HomePageRentDropdownOpen()
        await browser.pause(3000)
        await this.BuyButton.click()
        await browser.pause(3000)
    }
    async pausescroll(time,x_axis,y_axis){
        await browser.pause(time)
        await browser.scroll(x_axis,y_axis)
        await browser.pause(time)
    }
   
}
export default new LoginPage();
