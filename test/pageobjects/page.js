/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openStage (path) {
         browser.url(path)
         browser.maximizeWindow()
    }
    openE2E (path) {
        browser.url(path)
        browser.maximizeWindow()
        browser.deleteCookies()
   }
    openProduction (path) {
        browser.url(path)
        browser.maximizeWindow()
        browser.deleteCookies()
   }
   async CaptureShotElement(element,name){
     await browser.saveElement(element,`${name}`,{})
     }
     async CompareShotElement(element,name){
     await browser.checkElement(await element,`${name}`,{})
         // await expect(await browser.checkElement(await SearchPage.BedsBathsDropdown,'Bedsdropdown3',{})).toEqual(0)
     }
     async SaveShot(name){
          await browser.saveScreen(`${name}`, {})
     }
     async CompareShot(name){
          await expect(
               await browser.checkScreen(`${name}`, {
          })).toEqual(0)
     } 
     async Scroll(){
        await browser.scroll(0, 3500)
    }
    async waitExistence(element) {
        const timeout = 5000; // Default timeout value
        await browser.waitForExist(`${element}`, timeout);
    }
    async Scroll_WaitForExist(element){
     await element.waitForExist({timeout: 5000})
     await element.scrollIntoView()
    }
    async waitForPageToLoad() {
     browser.waitUntil(
         () => {
             // You can customize this condition based on your application
             return browser.execute(() => document.readyState === 'complete');
         },
         {
             timeout: 7000,
             timeoutMsg: 'Page did not load within the specified time',
             interval: 500, // Polling interval in milliseconds
         }
     );   
 } 

 async waitForElementDisplayed(element) {
    const timeout = 5000; // Default timeout value
    return element.waitForDisplayed({ timeout });
}
}
    
       
     
         
   


   
    

