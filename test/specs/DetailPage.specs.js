import DetailPage from '../pageobjects/detail.page.js'
import { updateHTMLReport, writeReport } from '../../reports/generateReport.js'
import { error } from 'console';
describe("Detail Page Suite", async ()=>{
  after(() => {
    writeReport(); // Write the report after all tests
  });
  it('TC1', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Detail Page default view';
    const testDescription = 'Verify Detail Page default view';
  
    try {
      DetailPage.openStage();
      await DetailPage.LogSite();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error; // Re-throw the error to ensure the test fails
    }
  });
  
  it('TC2', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Half Gallery View';
    const testDescription = 'Verify Half Gallery View';
  
    try {
      DetailPage.openStage();
      await DetailPage.OpenHalf_GalleryView();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenHalf_GalleryView();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC3', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Full Gallery View';
    const testDescription = 'Verify Full Gallery View';
  
    try {
      DetailPage.openStage();
      await DetailPage.OpenFull_GalleryView();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenFull_GalleryView();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC4', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Half Map View';
    const testDescription = 'Verify Half Map View';
  
    try {
      DetailPage.openStage();
      await DetailPage.OpenMapHalfGalleryView();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenMapHalfGalleryView();
      
      const isAllowBtnVisible = await DetailPage.AllowBtnVisible();
      if (isAllowBtnVisible) {
        await DetailPage.DontAllowButton.click();
      }
  
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC5', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Location & Nearby Section';
    const testDescription = 'Verify Appearance of Location & Nearby Section';
  
    try {
      DetailPage.openStage();
      await DetailPage.GoToLocation_NearbySection();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.GoToLocation_NearbySection();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC6', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Schools in Map View';
    const testDescription = 'Verify Appearance of School in Map View';
  
    try {
      DetailPage.openStage();
      await DetailPage.LogSite();
      await DetailPage.OpenSchoolsMapview();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenSchoolsMapview();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC7', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Agent Profile View';
    const testDescription = 'Verify Appearance of Agent Profile';
  
    try {
      DetailPage.openStage();
      await DetailPage.LogSite();
      await DetailPage.OpenAgentProfile();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenAgentProfile();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC8', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Restaurants in Map View';
    const testDescription = 'Verify Appearance of Restaurants section in Map View';
  
    try {
      DetailPage.openStage();
      await DetailPage.OpenRestaurantsMapview();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenRestaurantsMapview();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  });
  
  it('TC9', async () => { 
    const testSuite = 'Detail Page';
    const screenshotName = 'Hospitals in Map View';
    const testDescription = 'Verify Appearance of Hospital section in Map View';
  
    try {
      DetailPage.openStage();
      await DetailPage.OpenHospitalsMapview();
      await DetailPage.SaveShot(`${testSuite}/${screenshotName}`);
      DetailPage.openProduction();
      await DetailPage.waitForPageToLoad();
      await DetailPage.OpenHospitalsMapview();
      
      const result = await DetailPage.CompareShot(`${testSuite}/${screenshotName}`);
      if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
      }
    } catch (error) {
      if (error.message.includes('Image differences detected')) {
        console.error('Image difference found:', error);
      } else {
        console.error('Test execution failed:', error);
      }
      throw error;
    }
  })
  
 
  })
  
  