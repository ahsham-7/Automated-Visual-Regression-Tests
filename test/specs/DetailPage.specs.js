import detailPage from '../pageobjects/detail.page.js'
import DetailPage from '../pageobjects/detail.page.js'

describe("Detail Page Suite", async ()=>{
    // it('Verify Detail Page default view', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.SaveShot('Detail Page/Detail Page default view')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.CompareShot('Detail Page/Detail Page default view')
    // }),

    // it('Verify Half Gallery View ', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenHalf_GalleryView()
    //     await DetailPage.SaveShot('Detail Page/Half Gallery View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenHalf_GalleryView()
    //     await DetailPage.CompareShot('Detail Page/Half Gallery View')
    // }),

    // it('Verify Full Gallery View ', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenFull_GalleryView()
    //     await DetailPage.SaveShot('Detail Page/Full Gallery View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenFull_GalleryView()
    //     await DetailPage.CompareShot('Detail Page/Full Gallery View')
    // }),

    // it('Verify Half Map View ', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenMapHalfGalleryView()

    //     await DetailPage.SaveShot('Detail Page/Half Map View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenMapHalfGalleryView()
       
    //     const isAllowBtnVisible = await DetailPage.AllowBtnVisible();
    //     if (isAllowBtnVisible) {
    //      await DetailPage.DontAllowButton.click();
    //     }

    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenMapHalfGalleryView()
      
    //     await DetailPage.CompareShot('Detail Page/Half Map View')
    // }),

    //  it('Verify Appearence of Location & Nearby Section', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.GoToLocation_NearbySection()
    //     await DetailPage.SaveShot('Detail Page/Location & Nearby Section')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.GoToLocation_NearbySection()
    //     await DetailPage.CompareShot('Detail Page/Location & Nearby Section')
    // }),

    it('Verify Appearence of Location section in Map View', async ()=>{
        DetailPage.openStage()
        await DetailPage.OpenLocationMapview()
        await DetailPage.SaveShot('Detail Page/Locations in Map View')
        DetailPage.openProduction()
        await DetailPage.waitForPageToLoad()
        await DetailPage.OpenLocationMapview()
        await DetailPage.CompareShot('Detail Page/Locations in Map View')
    })



        



    

    

})