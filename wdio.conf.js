import { join } from "path";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

// Apply Puppeteer Stealth Plugin
puppeteer.use(StealthPlugin());

export const config = {
    runner: "local",
    path: "/",
    specs: ['./test/specs/agentHomepage.specs.js','./test/specs/floorPlan.specs.js'], // Update as per your test structure
    maxInstances: 10,
    capabilities: [{
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                "--disable-blink-features=AutomationControlled",
                "--disable-infobars",
                "--no-sandbox",
                "--disable-dev-shm-usage",
                `--user-data-dir=/tmp/chrome-profile-${Math.floor(Math.random() * 10000)}`,
                "--disable-gpu",
                "--window-size=1920,1080",
                "--disable-popup-blocking",
                "--disable-notifications",
                "--remote-debugging-port=9222",
                "--disable-features=IsolateOrigins,site-per-process"
            ],
            excludeSwitches: ["enable-automation"],
            useAutomationExtension: false
        }
    }],
    logLevel: "info",
    outputDir: join(process.cwd(), "logs"), // Example usage of `join`
    framework: "mocha",
    reporters: [
        "spec",
        ["junit", {
            outputDir: "junit reporters",
            suiteNameFormat: /[^a-zA-Z0-9@]+/,
            outputFileFormat: function (options) {
                const date = new Date();
                const timestamp = date.toISOString().replace(/[:.]/g, "-");
                return `results-${options.cid}.${timestamp}.xml`;
            }
        }]
    ],
    services: [
        ["chromedriver"],
        ["image-comparison", {
            baselineFolder: join(process.cwd(), "./baseLineImages/"),
            formatImageName: "{tag}-{logName}",
            screenshotPath: join(process.cwd(), "./actualImages/"),
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
        }]
    ],

    mochaOpts: {
        ui: "bdd",
        timeout: 200000
    },

    /**
     * Puppeteer Integration Hooks (Handled manually)
     */
    beforeSession: async function () {
        global.puppeteerBrowser = await puppeteer.launch({ headless: false });
    },
    afterSession: async function () {
        if (global.puppeteerBrowser) {
            await global.puppeteerBrowser.close();
        }
    }
};
