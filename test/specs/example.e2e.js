
import { log } from 'console'
import LoginPage from '../pageobjects/login.page.js'
import SearchPage from '../pageobjects/search.page.js'
import findmyagenthome from '../pageobjects/findmyagenthome.page.js'
import truvalue  from '../pageobjects/truvalue.page.js'
import {CaptureShotElement} from '../utilities/helper.js'
import truvaluesearch from '../pageobjects/truvaluesearch.page.js'
describe('Login Page', () => {
    //     it('should login with valid credentials', async () => {

    //            LoginPage.open()
    //             browser.pause(3000)
    //             await browser.scroll(0, 3500)
    //             await LoginPage.CountryDropdown.click()
    //             await browser.pause(1000)
    //             await browser.saveScreen('New9', {
    //             })

    //                 await browser.url('https://www.bayut.com/')
    //                 await browser.pause(3000)
    //                 await browser.scroll(0, 2500)
    //                 await LoginPage.CountryDropdown.click()
    //                 await browser.pause(1000)
    //                 await expect(
    //                     await (browser).checkScreen('New9', {
    //                         /* some options */
    //                     })

    //                 ).toEqual(0)



    //     }),
    //     it('Area Unit DropDown', async () => {
    //         LoginPage.open()
    //         await browser.pause(3000)
    //         await LoginPage.SettingsButton.click()
    //         await browser.pause(2000)
    //         await browser.saveScreen('SettingsDropdown', {
    //         })
    //         await browser.url('https://www.bayut.com/')
    //         await browser.pause(3000)
    //         await LoginPage.SettingsButton.click()
    //         await expect(
    //             await browser.checkScreen('SettingsDropdown', {
    //         })).toEqual(0)
    // }),
    // it('Popular Links', async () => {
    //     LoginPage.openStage()
    //     await browser.pause(3000)
    //     await browser.scroll(0, 1650)
    //     await browser.pause(1000)
    //     await browser.saveScreen('Popular Links', {
    //     })
    //     LoginPage.openProduction()
    //     await browser.pause(3000)
    //     await browser.scroll(0, 1620)
    //     await browser.pause(1000)
    //     await expect(
    //         await browser.checkScreen('Popular Links', {
    //         })).toEqual(0)

    // }),
    // it('Backgorund Image',async() =>{
    //       LoginPage.openE2E()
    //       await browser.scroll(0,90)
    //       await browser.saveScreen('Background Image',{})
    //       LoginPage.openProduction()
    //       await browser.scroll(0,90)
    //       await expect(
    //       await browser.checkScreen('Background Image',{})).toEqual(0) 
    // }),
    // it('HomePage Rent DropDown', async()=>{
    //     LoginPage.openE2E()
    //     await LoginPage.HomePageRentDropdownOpen()
    //     await browser.saveScreen('Rent Dropdown',{})
    //     LoginPage.openProduction()
    //     await browser.pause(3000)
    //     await LoginPage.HomePageRentDropdownOpen()
    //     await expect(await browser.checkScreen('Rent Dropdown',{})).toEqual(0)
    // }),
    //    it('HomePage Buy Dropdown', async()=>{
    //    LoginPage.openE2E()
    //    await LoginPage.HomePageBuyDropdownOpen()
    //    await browser.saveScreen('Buy Dropdown',{
    //    })
    //    LoginPage.openProduction()
    //    await LoginPage.HomePageBuyDropdownOpen()
    //    expect(await browser.checkScreen('Buy Dropdown',{})).toEqual(0)
    //    }),
         // it('Verify Discover Projects', async() =>{
         //    LoginPage.openE2E()
         //    await LoginPage.pausescroll(3000,0,1290)
         //    await browser.saveScreen('Discover Projects',{})
         //    LoginPage.openProduction()
         //    await LoginPage.pausescroll(3000,0,1290)
         //    await expect(await browser.checkScreen('Discover Projects',{})).toEqual(0)
         // })

      //    it('Dropdown individual check', async() =>{
      //       SearchPage.openE2E()
      //       await SearchPage.SortingFilter.click()
      //       await browser.pause(2000)
      //       await browser.saveElement(
      //          await SearchPage.SortingFilterFullDropdown,
      //          'firstButtonElement',
      //          {

      //          }
      //      )
      //      SearchPage.openProduction()
      //      await SearchPage.SortingFilter.click()
      //       await browser.pause(2000)
      //      await expect(
      //       await browser.checkElement(
      //       await SearchPage.SortingFilterFullDropdown  ,
      //           'firstButtonElement',
      //           {
      //           }
      //       )
      //   ).toEqual(0)
      
      //    })
   //    it('Verify Buy Filter Drop Down', async() =>{
   //          SearchPage.openE2E()
   //          await SearchPage.PurposeFilter.click()
   //          await SearchPage.BuyDropdown.click()  
   //          browser.pause(2000)
   //          SearchPage.ElementBuyFilterFullDropdown.waitForExist({ timeout: 3000 })
   //            await browser.saveElement(
   //       await SearchPage.SortingFilterFullDropdown,
   //       'firstButtonElement2',
   //       {

   //       }
   //   )
   
  
   //          SearchPage.openProduction()
   //          await SearchPage.PurposeFilter.click()
   //          await SearchPage.BuyDropdown.click()
   //          browser.pause(2000)
   //          SearchPage.ElementBuyFilterFullDropdown.waitForExist({ timeout: 3000 }) 
   //             await expect(
   //    await browser.checkElement(
   //       await SearchPage.SortingFilterFullDropdown  ,
   //           'firstButtonElement2',
   //           {
   //           }
   //       )
   //   ).toEqual(0)
   //       })
//    it('More Filter', async () =>{
//        SearchPage.openE2E()
//        await SearchPage.MoreFilterFullDropdown()
//        await browser.pause(2000)
//        await browser.saveElement(
//          await SearchPage.MoreFilterFullDropdown,
//          'firstButtonElement3',{})
//      SearchPage.openProduction()
//      await SearchPage.MoreFilterFullDropdown()
//       await browser.pause(2000)
//      await expect(
//       await browser.checkElement(
//       await SearchPage.MoreFilterFullDropdown  ,
//           'firstButtonElement3',
//           {
//           }
//       )
//   ).toEqual(0)
// })
         // it('Price Filter Dropdown', async()=>{
         // SearchPage.openE2E()
         // await browser.pause(2000)
         // await SearchPage.PriceFilter.click()
         // await browser.pause(2000)
         // await browser.saveElement(
         // await SearchPage.PriceFilterDropdown, 'PriceFilterDropdown',{})
         // SearchPage.openProduction()
         // await browser.pause(2000)
         // await SearchPage.PriceFilter.click()
         // await browser.pause(2000)
         // await expect(await browser.checkElement(await SearchPage.PriceFilterDropdown,'PriceFilterDropdown',{})).toEqual(0)
         // }) 
         // it('Property Type Filter', async()=>{
         //    SearchPage.openE2E()
         //    await SearchPage.PropertyType.click()
         //    await SearchPage.waitforElementDisplay(3000,SearchPage.PropertyTypeDropdown)
         //    await browser.saveElement(
         //       await SearchPage.PropertyTypeDropdown, 'Property Type Dropdown',{})
         //        SearchPage.openProduction()
         //      await SearchPage.waitforPageLoad()
         //       await SearchPage.PropertyType.click()
         //    await SearchPage.waitforElementDisplay(3000,SearchPage.PropertyTypeDropdown)
         //    await expect(await browser.checkElement(await SearchPage.PropertyTypeDropdown,'Property Type Dropdown',{})).toEqual(0)
            
         // })
         // it('Beds&Baths', async()=>{
         //    SearchPage.openE2E()
         //    await SearchPage.BedsFilter.click()
         //    await SearchPage.waitforElementDisplay(3000,SearchPage.BedsBathsDropdown)
         //    await SearchPage.BedsSelection_2.click()
         //    await SearchPage.BedsSelection_3.click()
         //    SearchPage.CaptureShotElement(SearchPage.BedsBathsDropdown,'Bedsdropdown3')
         //    // await browser.saveElement(
         //    // await SearchPage.BedsBathsDropdown, 'BedsDropdown',{})
         //    SearchPage.openProduction()
         //    await SearchPage.waitforPageLoad()
         //    await SearchPage.BedsFilter.click()
         //    await SearchPage.waitforElementDisplay(3000,SearchPage.BedsBathsDropdown)
         //    await SearchPage.BedsSelection_2.click()
         //    await SearchPage.BedsSelection_3.click()
         //    // await expect(await browser.checkElement(await SearchPage.BedsBathsDropdown,'Bedsdropdown3',{})).toEqual(0)
         //     await expect(SearchPage.CompareShotElement).toEqual(0)
         // }),

         // it('Quick Filters', async()=>{
         //    SearchPage.openE2E()
         //    await SearchPage.TruCheck.click()
         //    await SearchPage.FloorPlans.click()
         //    await SearchPage.waitforElementDisplay(5000,SearchPage.QuickFiltersSection)
         //    await SearchPage.CaptureShotElement(SearchPage.QuickFiltersSection,'Quick Filters')
         //    SearchPage.openProduction()
         //    await SearchPage.waitforPageLoad()
         //    await SearchPage.TruCheck.click()
         //    await SearchPage.FloorPlans.click()
         //    await SearchPage.waitforElementDisplay(3000,SearchPage.QuickFiltersSection)
         //    await expect(await browser.checkElement(await SearchPage.QuickFiltersSection,'Quick Filters',{})).toEqual(0)


         // })
         // it('Find My Agent Cities', async()=>{
         //    findmyagenthome.openE2E()
         //    await findmyagenthome.waitforPageLoad()
         //    await findmyagenthome.Cities()
         //    await browser.saveScreen('Cities List Agency Page', {
         //            })
         //            findmyagenthome.openProduction()
         //            await findmyagenthome.waitforPageLoad()
         //            await findmyagenthome.CitiesCarousal()
         //            await expect(
         //                    await browser.checkScreen('Cities List Agency Page', {
         //                    })).toEqual(0)
            
         // }),
      //   it('Find My Agent HomePage & Agencies carousal check',async()=>{
      //          findmyagenthome.openE2E()
      //          await findmyagenthome.waitforPageLoad()
      //          await browser.saveScreen('FindMyagenthomepage & Agencies carousal check', {
      //               })
      //         await findmyagenthome.openProduction()
      //         await findmyagenthome.waitforPageLoad()
      //               await expect(
      //          await browser.checkScreen('FindMyagenthomepage & Agencies carousal check', {
      //                            })).toEqual(0)
      //   }),
      // it("Verify Location Dropdown", async()=>{
      //          findmyagenthome.openE2E()
      //          await findmyagenthome.waitforPageLoad()
      
      //          //await findmyagenthome.waitforElementDisplay(3000,findmyagenthome.Locationfield)
      //          // await findmyagenthome.Locationfield.doubleClick()
      //          await findmyagenthome.Inputfield.setValue('Dubai')
      //          await browser.pause(5000)
      //          await findmyagenthome.waitforElementDisplay(5000,findmyagenthome.LocationDropdown)
      //          await browser.saveElement(findmyagenthome.LocationDropdown, 'FMA Location dropdown',{})
      //          findmyagenthome.openProduction
      //          await findmyagenthome.waitforPageLoad()
      //          await findmyagenthome.waitforElementDisplay(3000,findmyagenthome.Locationfield)
      //          await findmyagenthome.Locationfield.setValue('Marina')
      //          await findmyagenthome.waitforElementDisplay(3000,findmyagenthome.LocationDropdown)
      //          await expect(await browser.checkElement(findmyagenthome.LocationDropdown,'FMA Location dropdown',{})).toEqual(0)

      // })
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
            //  it('TruValue Mandatory Fields', async()=>{
            //    truvalue.openE2E()
            //    await truvalue.GetEstimate.click()
            //    await browser.saveScreen('TruValue Mandatory Fields',{})
            //    truvalue.openProduction()
            //    await truvalue.GetEstimate.click()
            //    await expect(await browser.checkScreen('TruValue Mandatory Fields',{}
            //    )).toEqual(0)
            // })
               // it('TruValue Search Field', async()=>{
               //    truvaluesearch.openStage()
               //    await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
               //    await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
               //    await truvaluesearch.Close_Button_Popup.click()
               //    await truvaluesearch.TruvalueFilter.waitForClickable({ timeout: 3000 })
               //    await browser.saveElement(await truvaluesearch.TruvalueFilter,'TruValue Search Page filters',{})
               //    truvaluesearch.openProduction()
               //    await truvaluesearch.TellMePopup.waitForClickable({ timeout: 3000 })
               //    await truvaluesearch.Close_Button_Popup.waitForClickable({ timeout: 3000 })
               //    await truvaluesearch.Close_Button_Popup.click()
               //    await truvaluesearch.TruvalueFilter.waitForClickable({ timeout: 3000 })
               //    await expect(await browser.checkElement(await truvaluesearch.TruvalueFilter,'TruValue Search Page filters',{}
               //    )).toEqual(0)
               // })
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
            


