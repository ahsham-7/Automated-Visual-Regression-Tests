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

    // it('Verify Appearence of Schools section in Map View', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenSchoolsMapview()
    //     await DetailPage.SaveShot('Detail Page/Schools in Map View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenSchoolsMapview()
    //     await DetailPage.CompareShot('Detail Page/Schools in Map View')
    // }),

    // it('Verify Appearence of Restaurants section in Map View', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenRestaurantsMapview()
    //     await DetailPage.SaveShot('Detail Page/Restaurants in Map View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenRestaurantsMapview()
    //     await DetailPage.CompareShot('Detail Page/Restaurants in Map View')
    // }),

    // it('Verify Appearence of Hospital section in Map View', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.OpenHospitalsMapview()
    //     await DetailPage.SaveShot('Detail Page/Hospitals in Map View')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.OpenHospitalsMapview()
    //     await DetailPage.CompareShot('Detail Page/Hospitals in Map View')
    // }),

      // it('Verify Amenities Section', async ()=>{
      //   DetailPage.openStage()
      //   await DetailPage.ViewAmenities()
      //   await DetailPage.SaveShot('Detail Page/Amenities Section')
      //   DetailPage.openProduction()
      //   await DetailPage.waitForPageToLoad()
      //   await DetailPage.ViewAmenities()
      //   await DetailPage.CompareShot('Detail Page/Amenities Section')
      // }),

      // it('Verify Full Amenities Section', async ()=>{
      //   DetailPage.openStage()
      //   await DetailPage.ViewFullAmenities()
      //   await DetailPage.SaveShot('Detail Page/Full Amenities Section')
      //   DetailPage.openProduction()
      //   await DetailPage.waitForPageToLoad()
      //   await DetailPage.ViewFullAmenities()
      //   await DetailPage.CompareShot('Detail Page/Full Amenities Section')
      // }),

      // it('Verify Property Information Section', async ()=>{
      //   DetailPage.openStage()
      //   await DetailPage.ViewPropertyInfoSection()
      //   await DetailPage.SaveShot('Detail Page/Property Info Section')
      //   DetailPage.openProduction()
      //   await DetailPage.waitForPageToLoad()
      //   await DetailPage.ViewPropertyInfoSection()
      //   await DetailPage.CompareShot('Detail Page/Property Info Section')
      // }),

      // it('Verify Property Overview Section', async ()=>{
      //   DetailPage.openStage()
      //   await DetailPage.PropertyOverview.scrollIntoView()
      //   await DetailPage.SaveShot('Detail Page/Property Description')
      //   DetailPage.openProduction()
      //   await DetailPage.waitForPageToLoad()
      //   await DetailPage.PropertyOverview.scrollIntoView()
      //   await DetailPage.CompareShot('Detail Page/Property Description')
      // }),

      it('Verify Regulatory Information Section', async ()=>{
        DetailPage.openStage()
        await DetailPage.ViewRegulatoryInfo()
        await DetailPage.SaveShot('Detail Page/Regulatory Info Section')
        DetailPage.openProduction()
        await DetailPage.waitForPageToLoad()
        await DetailPage.ViewRegulatoryInfo()
        await DetailPage.CompareShot('Detail Page/Regulatory Info Section')
      })








    





        



    

    

})