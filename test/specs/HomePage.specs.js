import { log } from 'console'
import LoginPage from '../pageobjects/login.page.js'
import SearchPage from '../pageobjects/search.page.js'
import findmyagenthome from '../pageobjects/findmyagenthome.page.js'
import truvalue from '../pageobjects/truvalue.page.js'
import { CaptureShotElement } from '../utilities/helper.js'
import truvaluesearch from '../pageobjects/truvaluesearch.page.js'
import HomePage from '../pageobjects/home.page.js'
import Page from '../pageobjects/page.js'
import languageSwitcher from '../pageobjects/languageswitcher.page.js'
describe("HomePage Suit", async () => {

    it("TC1", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage: Properties Tab");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify Properties Tab on HomePage",           
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/'
        );
    });

    it("TC2", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage: New Projects Tab");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify New Projects Tab on HomePage",
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/',
            async () => await HomePage.clickTab("New Projects")
        );
    });

      it("TC3", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage: DT Transactions Tab");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify Transactions Tab on HomePage",
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/',
            async () => await HomePage.clickTab("Transactions")
        );
    });

        it("TC4", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage: TruEstimate Tab");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify TruEstimate Tab on HomePage",
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/',
            async () => await HomePage.clickTab("TruEstimate")
        );
    });

       it("TC5", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage: Agents Tab");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify Agents Tab on HomePage",
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/',
            async () => await HomePage.clickTab("Agents")
        );
    });
    
          it("TC6", async () => {
        const formattedName = Page.formatScreenshot("Verify Homepage Country Switcher");
        await HomePage.compareEnvironments(
            'HomePage',
            formattedName,
            "Verify Homepage Country Switcher",
            'https://www.bayut.com/',
            'https://stage.bayut.sector.run/',
            async () => await HomePage.OpenCountrySwitcher()
        );
    });





    

    


})

    // it('Verify Carousals via Backward button', async () => {
    //     homePage.openE2E()
    //     await homePage.waitforElementDisplay(3000,homePage.BackwardBtn)
    //     let desiredText = "Explorer Real Estate"
    //     let elementText =''
    //     while (elementText !== desiredText) {
    //       await homePage.BackwardBtn.click();
    //       await homePage.waitforElementDisplay(3000,homePage.AgencyCarousalElement)
    //       elementText = await homePage.AgencyCarousalElement.getText();
    //       if (elementText === desiredText) {
    //         console.log('Desired text found:', elementText);
    //         break;
    //       }
    //     }
    // })




