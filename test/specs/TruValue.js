import { log } from 'console'
import LoginPage from '../pageobjects/login.page.js'
import SearchPage from '../pageobjects/search.page.js'
import findmyagenthome from '../pageobjects/findmyagenthome.page.js'
import truvalue  from '../pageobjects/truvalue.page.js'
import {CaptureShotElement} from '../utilities/helper.js'
import truvaluesearch from '../pageobjects/truvaluesearch.page.js'

describe("TruValue Suit",() =>{

   // THIS IS MY CHANGE ( MUSA )

// it("Verify Agency Search Location Field in TruValue page", async()=>{
            //    truvalue.openProduction()
            //   await truvalue.Scroll(800)
            //   await truvalue.AgencyInputField.setValue('Dub')
            //   await truvalue.AgencyLocationDropdown.waitForClickable({ timeout: 3000 })
            //   await browser.saveScreen('TruValue Agency Search Field', {})

            //    truvalue.openE2E()
            //    await truvalue.Scroll(800)
            //   await truvalue.AgencyInputField.setValue('Dub')
            //   await truvalue.AgencyLocationDropdown.waitForClickable({ timeout: 3000 })
            //   await expect(await browser.checkScreen('TruValue Agency Search Field', {
            //  })).toEqual(0)

            //  })
            // it('Verify TruValue Landing page FAQ1',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq1)
            //    await truvalue.Faq1.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq1whole)
            //    await browser.saveScreen('Faq1',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq1)
            //    await truvalue.Faq1.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq1whole)
            //    await expect(await browser.checkScreen('Faq1',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ2',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq2)
            //    await truvalue.Faq2.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq2whole)
            //    await browser.saveScreen('Faq2',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq2)
            //    await truvalue.Faq2.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq2whole)
            //    await expect(await browser.checkScreen('Faq2',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ3',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq3)
            //    await truvalue.Faq3.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq3whole)
            //    await browser.saveScreen('Faq3',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq3)
            //    await truvalue.Faq3.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq3whole)
            //    await expect(await browser.checkScreen('Faq3',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ4',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq4)
            //    await truvalue.Faq4.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq4whole)
            //    await browser.saveScreen('Faq4',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq4)
            //    await truvalue.Faq4.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq4whole)
            //    await expect(await browser.checkScreen('Faq4',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ5',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq5)
            //    await truvalue.Faq5.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq5whole)
            //    await browser.saveScreen('Faq5',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq5)
            //    await truvalue.Faq5.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq5whole)
            //    await expect(await browser.checkScreen('Faq5',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ6',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1550)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq6)
            //    await truvalue.Faq6.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq6whole)
            //    await browser.saveScreen('Faq6',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1550)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq6)
            //    await truvalue.Faq6.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq6whole)
            //    await expect(await browser.checkScreen('Faq6',{})).toEqual(0)
            // })
            // it('Verify TruValue Landing page FAQ7',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq7)
            //    await truvalue.Faq7.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq7whole)
            //    await browser.saveScreen('Faq7',{})
               
            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(1650)
            //    await truvalue.waitforElementDisplay(5000,truvalue.Faq7)
            //    await truvalue.Faq7.click()
            //    await truvalue.waitforElementDisplay(3000,truvalue.Faq7whole)
            //    await expect(await browser.checkScreen('Faq7',{})).toEqual(0)
            // })
            // it('Verify TruValue center ',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.Scroll(570)
            //    await truvalue.waitForElementExistance(truvalue.TruvalueCenter)
            //    await browser.saveScreen('TruValue Center div',{})

            //    truvalue.openProduction()
            //    await truvalue.waitforPageLoad()
            //    await truvalue.Scroll(570)
            //    await truvalue.waitForElementExistance(truvalue.TruvalueCenter)
            //    await expect(await browser.checkScreen('TruValue Center div',{})).toEqual(0)
            //    })
            // it('Default Puporse',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.PurposeFilter.click()
            //    await truvalue.waitForElementExistance(truvalue.PurposeDropdown)
            //    await browser.saveScreen('TruValue Purpose',{})
            //     truvalue.openProduction()
            //    await truvalue.PurposeFilter.click()
            //    await truvalue.waitForElementExistance(truvalue.PurposeDropdown)
            //    await expect(await browser.checkScreen('TruValue Purpose',{}
            //    )).toEqual(0)
            // })
            //    it('Tru Value Location filter', async()=>{
            //       truvalue.openE2E()
            //       await truvalue.Locationfield.addValue('Dubai')
            //       await truvalue.LocationDropdown.waitForClickable({ timeout: 3000 })
            //       await browser.saveScreen('TruValue Location field',{})
            //       truvalue.openProduction()
            //       await truvalue.Locationfield.addValue('Dubai')
            //       await truvalue.LocationDropdown.waitForClickable({ timeout: 3000 })
            //       await expect(await browser.checkScreen('TruValue Location field',{}
            //       )).toEqual(0)
            // })
            // it('TruValue property type',async()=>{
            //    truvalue.openE2E()
            //    await truvalue.PropertyType.click()
            //    await truvalue.PropertyTypeDropdown.waitForClickable({ timeout: 3000 })
            //    await browser.saveScreen('TruValue Property type',{})
            //    truvalue.openProduction()
            //    await truvalue.PropertyType.click()
            //    await truvalue.PropertyTypeDropdown.waitForClickable({ timeout: 3000 })
            //    await expect(await browser.checkScreen('TruValue Property type',{}
            //    )).toEqual(0)
            // })
            // it('TruValue Beds Filter', async()=>{
            //    truvalue.openE2E()
            //    await truvalue.BedsFilter.click()
            //    await truvalue.BedsFilterDropdown.waitForClickable({ timeout: 3000 })
            //    await browser.saveScreen('TruValue Beds Filter',{})
            //    truvalue.openProduction()
            //    await truvalue.BedsFilter.click()
            //    await truvalue.BedsFilterDropdown.waitForClickable({ timeout: 3000 })
            //    await expect(await browser.checkScreen('TruValue Beds Filter',{}
            //    )).toEqual(0)
            // })
            // it('TruValue Baths Filter', async()=>{
            //    truvalue.openE2E()
            //    await truvalue.BathsFilter.click()
            //    await truvalue.BathsFilterDropdown.waitForClickable({ timeout: 3000 })
            //    await browser.saveScreen('TruValue Baths Filter',{})
            //    truvalue.openProduction()
            //    await truvalue.BathsFilter.click()
            //    await truvalue.BathsFilterDropdown.waitForClickable({ timeout: 3000 })
            //    await expect(await browser.checkScreen('TruValue Baths Filter',{}
            //    )).toEqual(0)
            // })
             it('TruValue Mandatory Fields', async()=>{
               truvalue.openE2E()
               await truvalue.GetEstimate.click()
               await browser.saveScreen('TruValue Mandatory Fields',{})
               truvalue.openProduction()
               await truvalue.GetEstimate.click()
               await expect(await browser.checkScreen('TruValue Mandatory Fields',{}
               )).toEqual(0)
            }),
               it('TruValue Search Field', async()=>{
                  truvaluesearch.openStage()
                  await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
                  await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
                  await truvaluesearch.Close_Button_Popup.click()
                  await truvaluesearch.TruvalueFilter.waitForClickable({ timeout: 3000 })
                  await browser.saveElement(await truvaluesearch.TruvalueFilter,'TruValue Search Page filters',{})
                  truvaluesearch.openProduction()
                  await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
                  await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
                  await truvaluesearch.Close_Button_Popup.click()
                  await truvaluesearch.TruvalueFilter.waitForClickable({ timeout: 3000 })
                  await expect(await browser.checkElement(await truvaluesearch.TruvalueFilter,'TruValue Search Page filters',{}
                  )).toEqual(0)
               }),
               it('Verify TruValue Card', async()=>{
                truvaluesearch.openStage()
                await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
                await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
                await truvaluesearch.Close_Button_Popup.click()
                await truvaluesearch.TruValueCard.waitForClickable({ timeout: 3000 })
                await browser.saveElement(await truvaluesearch.TruValueCard,'TruValue Card',{})
                truvaluesearch.openProduction()
                await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
                await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
                await truvaluesearch.Close_Button_Popup.click()
                await truvaluesearch.TruValueCard.waitForClickable({ timeout: 3000 })
                await expect(await browser.checkElement(await truvaluesearch.TruValueCard,'TruValue Card',{}
                )).toEqual(0)
             })
})