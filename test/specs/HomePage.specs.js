import { log } from 'console'
import LoginPage from '../pageobjects/login.page.js'
import SearchPage from '../pageobjects/search.page.js'
import findmyagenthome from '../pageobjects/findmyagenthome.page.js'
import truvalue from '../pageobjects/truvalue.page.js'
import { CaptureShotElement } from '../utilities/helper.js'
import truvaluesearch from '../pageobjects/truvaluesearch.page.js'
import homePage from '../pageobjects/home.page.js'
import languageSwitcher from '../pageobjects/languageswitcher.page.js'
describe("HomePage Suit", async () => {
    // it("Verify Bottom Screen", async()=>{
    //     homePage.openE2E()
    //     await homePage.Footer.scrollIntoView()
    //     await homePage.FeaturedAgencySection.waitForExist({ timeout: 3000 });
    //     await homePage.CompareShot('BottomScreen')
    //     homePage.openProduction()
    //     await homePage.Footer.scrollIntoView()
    //     await homePage.FeaturedAgencySection.waitForExist({ timeout: 3000 });
    //     await homePage.CompareShot('BottomScreen')
    //     }),
    //     it("Verify Popluar Searches Section", async()=>{
    //     homePage.openE2E()
    //     await homePage.PopularSearchesSection.waitForExist({ timeout: 5000 });
    //     await homePage.PopularSearchesSection.scrollIntoView()
    //     await homePage.SaveShot('HomePage/Popular Searches')
    //     homePage.openProduction()
    //     await homePage.PopularSearchesSection.waitForExist({ timeout: 5000 });
    //     await homePage.PopularSearchesSection.scrollIntoView()
    //     await homePage.CompareShot('HomePage/Popular Searches')
    //     }),
    // it("Verify Discover More about Real Estate Market section", async()=>{
    //     homePage.openE2E()
    //     await homePage.Scroll_WaitForExist(homePage.DiscoverPropertySection)
    //     await homePage.SaveShot('HomePage/Discover more about the UAE real estate market')
    //     homePage.openProduction()
    //     await homePage.Scroll_WaitForExist(homePage.DiscoverPropertySection)
    //     await homePage.CompareShot('HomePage/Discover more about the UAE real estate market')
    //     }),
    // it("Verify QuickLinks cards ", async()=>{
    //     homePage.openE2E()
    //     await homePage.Scroll_WaitForExist(homePage.QuickLinksCards)
    //     await homePage.SaveShot('HomePage/Quick Links cards NBS,MBS,TruValue')
    //     homePage.openProduction()
    //     await homePage.Scroll_WaitForExist(homePage.QuickLinksCards)
    //     await homePage.CompareShot('HomePage/Quick Links cards NBS,MBS,TruValue')
    //     }),
    // it("Verify Dubai Transactions Tab", async () => {
    //     homePage.openE2E()
    //     await homePage.DubaiTransactionTab.click()
    //     await homePage.SaveShot('HomePage/Dubai Transactions Tab')
    //     homePage.openProduction()
    //     await homePage.DubaiTransactionTab.click()
    //     await homePage.CompareShot('HomePage/Dubai Transactions Tab')
    // }),
    // it("Verify ChatGPT Tab", async () => {
    //     homePage.openE2E()
    //     await homePage.ChatGptTab.click()
    //     await homePage.SaveShot('HomePage/ChatGPT Tab')
    //     homePage.openProduction()
    //     await homePage.ChatGptTab.click()
    //     await homePage.CompareShot('HomePage/ChatGPT Tab')
    // }),
    // it("Verify Language Drop Down", async () => {
    //     homePage.openE2E()
    //     await languageSwitcher.VerifyIsArabicPopup()
    //     await homePage.SaveShot('HomePage/Language DropDown')
    //     homePage.openProduction()
    //     await languageSwitcher.VerifyIsArabicPopup()
    //     await homePage.CompareShot('HomePage/Language DropDown')
    // }),
    // it("Verify English is selected on Language Drop Down", async () => {
    //     homePage.openE2E()
    //     await languageSwitcher.VerifyIsEnglishPopup()
    //     await homePage.SaveShot('HomePage/English Language DropDown')
    //     homePage.openProduction()
    //     await languageSwitcher.VerifyIsEnglishPopup()
    //     await homePage.CompareShot('HomePage/English Language DropDown')
    // }),

    it('Verify Carousals via Backward button', async () => {
        homePage.openE2E()
        await homePage.waitforElementDisplay(3000,homePage.BackwardBtn)
        let desiredText = "Explorer Real Estate"
        let elementText =''
        while (elementText !== desiredText) {
          await homePage.BackwardBtn.click();
          await homePage.waitforElementDisplay(3000,homePage.AgencyCarousalElement)
          elementText = await homePage.AgencyCarousalElement.getText();
          if (elementText === desiredText) {
            console.log('Desired text found:', elementText);
            break;
          }
        }
    })




})