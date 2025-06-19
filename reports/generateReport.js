import fs from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const reportDataPath = join(__dirname, 'gh-pages', 'reportData.json');
const reportHtmlPath = join(__dirname, 'gh-pages', 'index.html');

// 🔄 Clear JSON
export function clearReportData() {
  if (!fs.existsSync(reportDataPath)) {
    fs.mkdirSync(path.dirname(reportDataPath), { recursive: true });
  }
  fs.writeFileSync(reportDataPath, JSON.stringify([]));
}

// 🧪 Add single test result
export function addTestResult({ testSuite, screenshotName, testDescription, passed }) {
  let reportData = [];

  if (fs.existsSync(reportDataPath)) {
    reportData = JSON.parse(fs.readFileSync(reportDataPath));
  }

  reportData.push({
    testSuite,
    screenshotName,
    testDescription,
    passed
  });

  fs.writeFileSync(reportDataPath, JSON.stringify(reportData, null, 2));
}

// 📝 Final report
export function writeReport() {
  const reportData = fs.existsSync(reportDataPath)
    ? JSON.parse(fs.readFileSync(reportDataPath))
    : [];

  const baseUrl = 'https://ahsham-7.github.io/Automated-Visual-Regression-Tests/images/';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Visual Regression Report</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }
    h1 {
      background: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .container {
      max-width: 1100px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
    }
    .test-section {
      border-bottom: 1px solid #ccc;
      padding: 20px 0;
    }
    .test-heading {
      font-size: 1.4em;
      margin-bottom: 10px;
      color: #333;
    }
    .test-description {
      margin-bottom: 10px;
      color: #666;
    }
    .image-diff {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .image-diff div {
      margin: 10px;
      text-align: center;
    }
    .image-diff button {
      background: #007bff;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .image-diff button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h1>Visual Regression Report</h1>
  <div class="container">
    ${reportData.map(test => {
      const suite = test.testSuite.replace(/ /g, '_');
      const name = test.screenshotName.replace(/ /g, '_');

      const expected = `${baseUrl}baseline/desktop_chrome/${suite}/${name}-.png`;
      const actual = `${baseUrl}actual/desktop_chrome/${suite}/${name}-.png`;
      const diff = `${baseUrl}diff/desktop_chrome/${suite}/${name}-.png`;

      return `
        <div class="test-section">
          <div class="test-heading">${test.testSuite} - ${test.screenshotName}</div>
          <div class="test-description">${test.testDescription}</div>
          <div class="test-description"><strong>Status:</strong> ${test.passed ? '✅ Passed' : '❌ Failed'}</div>
          <div class="image-diff">
            <div>
              <div><strong>Expected</strong></div>
              <a href="${expected}" target="_blank"><button>View</button></a>
            </div>
            <div>
              <div><strong>Actual</strong></div>
              <a href="${actual}" target="_blank"><button>View</button></a>
            </div>
            <div>
              <div><strong>Diff</strong></div>
              <a href="${diff}" target="_blank"><button>View</button></a>
            </div>
          </div>
        </div>
      `;
    }).join('')}
  </div>
</body>
</html>
`;

  fs.mkdirSync(path.dirname(reportHtmlPath), { recursive: true });
  fs.writeFileSync(reportHtmlPath, html);
}
