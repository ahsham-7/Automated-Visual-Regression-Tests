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
   }
    openProduction (path) {
        browser.url(path)
        browser.maximizeWindow()
   }
   


   
    }

