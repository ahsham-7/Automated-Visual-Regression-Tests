import { join } from "path";

export const config = {
  runner: "local",
  path: "/",
  specs: [
    "./test/specs/agentHomepage.specs.js",
    "./test/specs/floorPlan.specs.js"
  ],
  maxInstances: 2, // Limit for GitHub Actions reliability

  capabilities: Array.from({ length: 2 }).map((_, index) => ({
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        `--user-data-dir=/tmp/chrome-profile-${Date.now()}-${index}`, // ✅ unique profile
        '--window-size=1920,1080',
        '--disable-blink-features=AutomationControlled',
        '--disable-infobars',
        '--disable-popup-blocking',
        '--disable-notifications'
      ],
      excludeSwitches: ['enable-automation'],
      useAutomationExtension: false
    }
  })),

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
  }

};
