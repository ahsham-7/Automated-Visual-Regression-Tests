
import { addTestResult } from '../../reports/generateReport.js';

export default class Page {

    open(path, deleteCookies = false) {
        browser.url(path);
        browser.maximizeWindow();

        if (deleteCookies) {
            browser.deleteCookies();
        }
    }

    openStage(path) {
        browser.url(path);
        browser.maximizeWindow();
    }

    openE2E(path) {
        browser.url(path);
        browser.maximizeWindow();
        browser.deleteCookies();
    }

    openProduction(path) {
        browser.url(path);
        browser.maximizeWindow();
        browser.deleteCookies();
    }

    async CaptureShotElement(element, name) {
        await browser.saveElement(element, `${name}`, {});
    }

    async CompareShotElement(element, name) {
        await browser.checkElement(await element, `${name}`, {});
    }

    // Save actual screenshot to actualImages (normal)
    async SaveShot(name) {
        await browser.saveScreen(`${name}`, {});
    }

    // NEW: Save baseline screenshot to baselineFolder (production shots)
    async SaveBaselineShot(name) {
        await browser.saveBaselineScreen(`${name}`, {});
    }

    async CompareShot(name) {
        try {
            console.log(`Comparing screenshot with name: ${name}`);
            const result = await browser.checkScreen(name, {});

            console.log(`Comparison result for ${name}:`, result);

            if (result !== 0) {
                console.log('Differences detected in screenshots');
                return false;
            } else {
                console.log('No differences detected in screenshots');
                return true;
            }
        } catch (error) {
            console.error(`Error comparing screenshot ${name}: ${error.message}`);
            throw error;
        }
    }

    async Scroll() {
        await browser.scroll(0, 3500);
    }

    async waitExistence(element) {
        const timeout = 5000;
        await browser.waitForExist(`${element}`, timeout);
    }

    async ScrollElement(element) {
        await element.scrollIntoView({ block: 'center', inline: 'nearest' });
    }

    async Scroll_WaitForExist(element) {
        await element.waitForExist({ timeout: 5000 });
        await element.scrollIntoView();
    }

    async waitForElementDisplayed(element) {
        const timeout = 5000;
        return element.waitForDisplayed({ timeout });
    }

    get Username() {
        return $('//input[@id="username"]');
    }

    get Pass() {
        return $('//input[@id="password"]');
    }

    get LoginBtn() {
        return $('//button[text()="Log in"]');
    }

    async LogSite() {
        await this.Username.setValue('sl');
        await this.Pass.setValue('getin1');
        await this.LoginBtn.click();
    }



async compareEnvironments(testSuite, screenshotName, testDescription, prodUrl, stageUrl, pageAction = null) {
    // Step 1: Open Production and save baseline
    await this.openProduction(prodUrl, true);
    await browser.setWindowSize(1920, 1080); // Ensure resolution
    await this.waitForPageToLoad_SimpleCompare();

    if (pageAction) await pageAction();
    await browser.pause(1000);

    await browser.saveScreen(`${testSuite}/${screenshotName}`);

    // Step 2: Open Staging and compare
    await this.openStage(stageUrl, true);
    await browser.setWindowSize(1920, 1080); // Ensure resolution
    await this.waitForPageToLoad_SimpleCompare();
    await this.conditionalLogin_SimpleCompare();

    if (pageAction) await pageAction();
    await browser.pause(2000);

    const result = await browser.checkScreen(`${testSuite}/${screenshotName}`);
    const passed = result === 0;

    addTestResult({
        testSuite,
        screenshotName,
        testDescription,
        expectedImage: `images/expected/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        actualImage: `images/actual/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        diffImage: `images/diff/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        passed,
    });

    if (!passed) {
        throw new Error('Image differences detected');
    }
}



    async compareFullPageEnvironments(testSuite, screenshotName, testDescription, prodUrl, stageUrl, pageAction = null) {
    // Step 1: Open Production and save as baseline
    await this.openProduction(prodUrl, true);
    await browser.setWindowSize(1920, 1080); // Ensure resolution
    await this.waitForPageToLoad();

    if (pageAction) await pageAction();
    await browser.pause(1000);

    console.log('📸 Saving baseline from Production...');
    await browser.saveFullPageScreen(`${testSuite}/${screenshotName}`, {}, { fullPageScrollTimeout: 150 });

    // Step 2: Open Staging and compare as actual
    await this.openStage(stageUrl, true);
    await browser.setWindowSize(1920, 1080); // Ensure resolution
    await this.waitForPageToLoad();
    await this.conditionalLogin();

    if (pageAction) await pageAction();
    await browser.pause(2000);

    console.log('📸 Checking full page screen on Staging...');
    const result = await browser.checkFullPageScreen(`${testSuite}/${screenshotName}`, {}, { fullPageScrollTimeout: 150 });

    console.log('🧪 Full Page Comparison Result:', result);

    const mismatch = typeof result === 'number' ? result : parseFloat(result.misMatchPercentage || result[0]?.misMatchPercentage || 0);
    const passed = mismatch === 0;

    addTestResult({
        testSuite,
        screenshotName,
        testDescription,
        expectedImage: `images/expected/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        actualImage: `images/actual/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        diffImage: `images/diff/desktop_chrome/${testSuite}/${screenshotName}-.png`,
        passed,
    });

    if (!passed) {
        console.log(`❌ Visual mismatch detected: ${mismatch}%`);
        throw new Error(`Image differences detected (${mismatch}% mismatch)`);
    } else {
        console.log('✅ No visual differences detected.');
    }
}



//    async compareEnvironments(testSuite, screenshotName, testDescription, prodUrl, stageUrl, pageAction = null) {
//     // Step 1: Open Production and save baseline
//      await this.openProduction(prodUrl, true);
//     await this.waitForPageToLoad_SimpleCompare();

//     if (pageAction) await pageAction();
//     await browser.pause(1000);

//     await browser.saveScreen(`${testSuite}/${screenshotName}`);

//     // Step 2: Open Staging and compare
//     await this.openStage(stageUrl, true);
//     await this.waitForPageToLoad_SimpleCompare();
//     await this.conditionalLogin_SimpleCompare();

//     if (pageAction) await pageAction();
//     await browser.pause(2000);

//     const result = await browser.checkScreen(`${testSuite}/${screenshotName}`);

//     if (result !== 0) {
//         updateHTMLReport(testSuite, screenshotName, testDescription, true);
//         throw new Error('Image differences detected');
//     }
// }


// async compareFullPageEnvironments(testSuite, screenshotName, testDescription, prodUrl, stageUrl, pageAction = null) {
//     // Step 1: Open Production and save as baseline
//     this.openProduction(prodUrl, true);
//     await this.waitForPageToLoad();

//     if (pageAction) await pageAction();

//     await browser.pause(1000);
//     console.log('📸 Saving baseline from Production...');
//     await browser.saveFullPageScreen(`${testSuite}/${screenshotName}`, {}, { fullPageScrollTimeout: 150 });

//     // Step 2: Open Staging and compare as actual
//     this.openStage(stageUrl, true);
//     await this.waitForPageToLoad();
//     await this.conditionalLogin();

//     if (pageAction) await pageAction();

//     await browser.pause(2000);
//     console.log('📸 Checking full page screen on Staging...');
//     const result = await browser.checkFullPageScreen(`${testSuite}/${screenshotName}`, {}, { fullPageScrollTimeout: 150 });

//     console.log('🧪 Full Page Comparison Result:', result);

//     const mismatch = typeof result === 'number' ? result : parseFloat(result.misMatchPercentage || result[0]?.misMatchPercentage || 0);

//     if (mismatch > 0) {
//         console.log(`❌ Visual mismatch detected: ${mismatch}%`);
//         updateHTMLReport(testSuite, screenshotName, testDescription, true);
//         throw new Error(`Image differences detected (${mismatch}% mismatch)`);
//     } else {
//         console.log('✅ No visual differences detected.');
//         updateHTMLReport(testSuite, screenshotName, testDescription, false);
//     }
// }





    async conditionalLogin() {
        try {
            console.log("Waiting for the page to fully load...");
            await this.waitForPageToLoad();

            const loginForm = await $('//input[@name="username"]');
            const isLoginVisible = await loginForm.isDisplayed();

            if (isLoginVisible) {
                console.log("Login page detected. Attempting login...");
                await this.LogSite();

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

async waitForPageToLoad(timeout = 30000) {
    try {
        await browser.waitUntil(
            async () => {
                const readyState = await browser.execute(() => document.readyState);
                const bodyExists = await browser.execute(() => !!document.body && document.body.scrollHeight > 0);
                console.log(`🔍 readyState: ${readyState}, bodyExists: ${bodyExists}`);
                return readyState === 'complete' && bodyExists;
            },
            {
                timeout,
                interval: 1000,
                timeoutMsg: '❌ Page did not load or body not ready in expected time',
            }
        );
        await browser.pause(1000); // Optional pause for stability
    } catch (err) {
        console.warn('⚠️ Page load failed, attempting a refresh and retry...');
        await browser.refresh();
        await browser.pause(1500);
        await browser.waitUntil(
            async () => {
                const readyState = await browser.execute(() => document.readyState);
                const bodyExists = await browser.execute(() => !!document.body && document.body.scrollHeight > 0);
                return readyState === 'complete' && bodyExists;
            },
            {
                timeout,
                interval: 1000,
                timeoutMsg: '❌ Retry also failed: Page not ready after refresh',
            }
        );
    }
}


async waitForPageToLoad_SimpleCompare(timeout = 30000) {
    try {
        await browser.waitUntil(
            async () => {
                const state = await browser.execute(() => document.readyState);
                console.log('📄 readyState:', state);
                return state === 'complete';
            },
            {
                timeout,
                interval: 1000,
                timeoutMsg: '❌ Page did not reach readyState "complete"',
            }
        );
        await browser.pause(1000);
    } catch (err) {
        console.warn('⚠️ Initial load failed, refreshing and retrying...');
        await browser.refresh();
        await browser.pause(1500);
        await browser.waitUntil(
            async () => {
                const state = await browser.execute(() => document.readyState);
                return state === 'complete';
            },
            {
                timeout,
                interval: 1000,
                timeoutMsg: '❌ Retry failed: Page did not reach readyState "complete"',
            }
        );
    }
}





async conditionalLogin_SimpleCompare() {
    try {
        console.log("Checking if login is required on staging...");
        const loginForm = await $('//input[@name="username"]');
        const isLoginVisible = await loginForm.isDisplayed();

        if (isLoginVisible) {
            console.log("Login required. Attempting login...");
            await this.LogSite();
            await browser.pause(2000);
            console.log("Login successful.");
        } else {
            console.log("No login required.");
        }
    } catch (error) {
        console.error("Error in conditionalLogin_SimpleCompare():", error);
        throw new Error(`Login check failed: ${error.message}`);
    }
}




}
