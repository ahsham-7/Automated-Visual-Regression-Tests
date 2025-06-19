import { join } from "path";
import { clearReportData, writeReport } from './reports/generateReport.js';

export const config = {
  runner: "local",
  path: "/",
  specs: [
    "./test/specs/agentHomepage.specs.js",
    "./test/specs/floorPlan.specs.js"
  ],

  // ✅ Run multiple tests in parallel (change to 1 if stability is needed)
  maxInstances: 4,

  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--window-size=1920,1080',
        '--disable-blink-features=AutomationControlled',
        '--disable-infobars',
        '--disable-popup-blocking',
        '--disable-notifications'
      ],
      excludeSwitches: ['enable-automation'],
      useAutomationExtension: false
    }
  }],

  logLevel: "info",
  outputDir: join(process.cwd(), "logs"),

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
    "chromedriver",
    ["image-comparison", {
      baselineFolder: join(process.cwd(), "./baseLineImages/"),
      formatImageName: "{tag}-{logName}",
      screenshotPath: join(process.cwd(), "./actualImages/"),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true
    }]
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 200000
  },

  /**
   * ✅ Clear reportData.json before test run
   */
  onPrepare: function () {
    clearReportData();
    console.log('✅ Cleared previous report data.');
  },

  /**
   * ✅ Write report after all tests complete
   */
  onComplete: function () {
    writeReport();
    console.log('✅ Final report written.');
  }
};
