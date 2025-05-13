/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { updateHTMLReport, writeReport } from '../../reports/generateReport.js';
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    open(path, deleteCookies = false) {
        browser.url(path);
        browser.maximizeWindow();
        
        if (deleteCookies) {
            browser.deleteCookies();
        }
    }
    
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

    //  async CompareShot(name){
    //      await expect(
    //            await browser.checkScreen(`${name}`, {
    //       })).toEqual(0)
    //  }

    async CompareShot(name) {
        try {
            console.log(`Comparing screenshot with name: ${name}`);
            const result = await browser.checkScreen(name, {});
            console.log(`Comparison result for ${name}:`, result);
    
            // Check if differences are found
            if (result !== 0) {
                console.log('Differences detected in screenshots');
                return false; // Return false to indicate differences found
            } else {
                console.log('No differences detected in screenshots');
                return true; // Return true to indicate no differences found
            }
        } catch (error) {
            console.error(`Error comparing screenshot ${name}: ${error.message}`);
            throw error; // Rethrow to ensure test failure
        }
    }
    

    
     async Scroll(){
        await browser.scroll(0, 3500)
    }
    async waitExistence(element) {
        const timeout = 5000; // Default timeout value
        await browser.waitForExist(`${element}`, timeout);
    }
    async ScrollElement(element) {
        await element.scrollIntoView({ block: 'center', inline: 'nearest' });
    }
    
    async Scroll_WaitForExist(element){
     await element.waitForExist({timeout: 5000})
     await element.scrollIntoView()
    }


 async waitForElementDisplayed(element) {
    const timeout = 5000; // Default timeout value
    return element.waitForDisplayed({ timeout });
}

get Username(){
    return $('//input[@id="username"]')
}
get Pass(){
    return $('//input[@id="password"]')
}
get LoginBtn(){
    return $('//button[text()="Log in"]')
}

async LogSite() {
    await this.Username.setValue('sl')
    await this.Pass.setValue('getin1')
    await this.LoginBtn.click()
}
async compareEnvironments(testSuite, screenshotName, testDescription, stageUrl, prodUrl, pageAction = null) {
    this.open(stageUrl, true);
    await this.waitForPageToLoad();
    await this.conditionalLogin(); 

    if (pageAction) await pageAction();

    await this.SaveShot(`${testSuite}/${screenshotName}`);

    // Open production URL
    this.open(prodUrl, true);
    await this.waitForPageToLoad();

    if (pageAction) await pageAction();

    await browser.pause(2000);

    const result = await this.CompareShot(`${testSuite}/${screenshotName}`);

    if (!result) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error('Image differences detected');
    }
}

async compareFullPageEnvironments(testSuite, screenshotName, testDescription, stageUrl, prodUrl, pageAction = null) {
    this.open(stageUrl, true);
    await this.waitForPageToLoad();
    await this.conditionalLogin(); 

    if (pageAction) await pageAction();

    await browser.saveFullPageScreen(`${testSuite}/${screenshotName}`, { fullPageScrollTimeout: 150 });

    this.open(prodUrl, true);
    await this.waitForPageToLoad();

    if (pageAction) await pageAction();

    await browser.pause(2000);

    const result = await browser.checkFullPageScreen(`${testSuite}/${screenshotName}`, {
        fullPageScrollTimeout: 150
    });

    if (result.misMatchPercentage > 0) {
        updateHTMLReport(testSuite, screenshotName, testDescription, true);
        throw new Error(`Image differences detected (${result.misMatchPercentage}% mismatch)`);
    }
}



async conditionalLogin() {
    try {
        console.log("Waiting for the page to fully load...");
        await this.waitForPageToLoad(); // Ensure the page is fully loaded

        // Check if the login page is present by detecting a known login element
        const loginForm = await $('//input[@name="username"]'); // Update with actual login element
        const isLoginVisible = await loginForm.isDisplayed();

        if (isLoginVisible) {
            console.log("Login page detected. Attempting login...");
            await this.LogSite(); // Perform login

            // Wait for redirection after login
            await this.waitForPageToLoad();
            await browser.pause(2000);

            console.log("Login successful.");
        } else {
            console.log("No authentication required.");
        }

    } catch (error) {
        console.error("Error in conditionalLogin():", error);
        throw new Error(`Failed to handle login process: ${error.message}`);
    }
}
static formatScreenshot(description) {
    return description.replace(/\s+/g, '_');
}


// Add this method in your class
async waitForPageToLoad(timeout = 5000) {
    await browser.waitUntil(
        async () => await browser.execute('return document.readyState') === 'complete',
        {
            timeout,
            timeoutMsg: 'Page did not load within the expected time',
        }
    );
}



}
