import DetailPage from '../pageobjects/detail.page.js'
import { updateHTMLReport, writeReport } from '../../reports/generateReport.js'
import { error } from 'console';
describe("Detail Page Suite", async ()=>{
  after(() => {
    writeReport(); // Write the report after all tests
  });
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

    it('tc 5', async ()=>{
      const testSuite='Detail Page'
      const screenshotName='Schools in Map View'
      const testDescription='Verify Appearence of School in Map View'

      try{
         DetailPage.openStage()
         await DetailPage.LogSite()
        await DetailPage.OpenSchoolsMapview()
        await DetailPage.SaveShot(`${testSuite}/${screenshotName}`)
        DetailPage.openProduction()
           await DetailPage.waitForPageToLoad()
        await DetailPage.OpenSchoolsMapview()
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`)
      if(!result){
        updateHTMLReport(testSuite,screenshotName,testDescription,true)
        throw new Error('Image differences detected');
      }
      }
      catch(error){
        if (error.message.includes('Image differences detected')) {
          console.error('Image difference found:', error);
      } else {
          console.error('Test execution failed:', error);
      }
      throw error; // Re-throw the error to ensure the test fails
  
      }

    
    })

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
      // })

      

    //   it('Verify Property Information Section', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.ViewPropertyInfoSection()
    //     await DetailPage.SaveShot('Detail Page/Property Info Section')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.ViewPropertyInfoSection()
    //     await DetailPage.CompareShot('Detail Page/Property Info Section')
    //   }),

    //   it('Verify Property Overview Section', async ()=>{
    //     DetailPage.openStage()
    //     await DetailPage.PropertyOverview.scrollIntoView()
    //     await DetailPage.SaveShot('Detail Page/Property Description')
    //     DetailPage.openProduction()
    //     await DetailPage.waitForPageToLoad()
    //     await DetailPage.PropertyOverview.scrollIntoView()
    //     await DetailPage.CompareShot('Detail Page/Property Description')
    //   }),

      // it('Verify Regulatory Information Section', async ()=>{
      //   const testSuite = 'Detail Page'
      //   const testDescription = 'Verify Regulatory Information Section'
      //   const screenshotName = 'Regulatory Info Section'
      //   try{
      //   DetailPage.openStage()
      //   await DetailPage.ViewRegulatoryInfo()
      //   await DetailPage.SaveShot(`${testSuite}/${screenshotName}`)
      //   DetailPage.openProduction()
      //   await DetailPage.waitForPageToLoad()
      //   await DetailPage.ViewRegulatoryInfo()
      //   const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`)
      //   if(!result){
      //     updateHTMLReport(testSuite,screenshotName,testDescription,true)
      //     throw new Error('Image differences detected');
      //   }
      //   }
      //   catch(error){
      //     if (error.message.includes('Image differences detected')) {
      //       console.error('Image difference found:', error);
      //   } else {
      //       console.error('Test execution failed:', error);
      //   }
      //   throw error; // Re-throw the error to ensure the test fails
    
      //   }

      // }),

    
  //   it('Verify Agent/Agency card', async () => {
  //     const testSuite = 'Detail Page'; 
  //     const screenshotName = 'Agent_Agency Card'; 
  //     const testDescription = 'Verify Agent/Agency card';
  //     try {
  //         // Stage environment
  //         DetailPage.openStage();
  //         //await DetailPage.View_Agent_AgencyCard();
  //         await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
  
  //         // Production environment
  //         DetailPage.openProduction();
  //         await DetailPage.waitForPageToLoad();
         
  //         await DetailPage.View_Agent_AgencyCard();
  
  //         const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
  //         if (!result) {
  //             updateHTMLReport(testSuite, screenshotName, testDescription, true);
  //             throw new Error('Image differences detected'); // Explicitly throw an error to fail the test
  //         }
  //     } catch (error) {
  //         if (error.message.includes('Image differences detected')) {
  //             console.error('Image difference found:', error);
  //         } else {
  //             console.error('Test execution failed:', error);
  //         }
  //         throw error; // Re-throw the error to ensure the test fails
  //     }
  // })

//   it('Verify Full Amenities Section', async () => {
//     const testSuite = 'Detail Page';
//     const screenshotName = 'Full Amenities Section';
//     const testDescription = 'Verify Full Amenities Section';
//     try {
//         // Stage environment
//         DetailPage.openStage();
//         await DetailPage.ViewFullAmenities();
//         await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);

//         // Production environment
//         DetailPage.openProduction();
//         await DetailPage.waitForPageToLoad();
//         await DetailPage.ViewFullAmenities();
//         const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
//         if (!result) {
//             updateHTMLReport(testSuite, screenshotName, testDescription, true);
//             throw new Error('Image differences detected'); // Explicitly throw an error to fail the test
//         }
//     } catch (error) {
//         if (error.message.includes('Image differences detected')) {
//             console.error('Image difference found:', error);
//         } else {
//             console.error('Test execution failed:', error);
//         }
//         throw error; // Re-throw the error to ensure the test fails
//     }

       
//   }),
//   it('Verify Appearance of Hospital section in Map View', async () => {
//     const testSuite = 'Detail Page';
//     const screenshotName = 'Hospitals in Map View';
//     const testDescription = 'Verify Appearance of Hospital section in Map View';

//     try {
//         // Stage environment
//         DetailPage.openStage();
//         await DetailPage.OpenHospitalsMapview();
//         await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);

//         // Production environment
//         DetailPage.openProduction();
//         await DetailPage.waitForPageToLoad();
//         await DetailPage.OpenHospitalsMapview();

//         // Compare screenshots and update the report if differences are detected
//         const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
//         if (!result) {
//             updateHTMLReport(testSuite, screenshotName, testDescription, true);
//             throw new Error('Image differences detected'); // Explicitly throw an error to fail the test
//         }
//     } catch (error) {
//         if (error.message.includes('Image differences detected')) {
//             console.error('Image difference found:', error);
//         } else {
//             console.error('Test execution failed:', error);
//         }
//         throw error; // Re-throw the error to ensure the test fails
//     }
// });







  

  
  

    
    
})