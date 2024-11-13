import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory and filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the report directory for index.html
const reportDir = path.join(__dirname, 'gh-pages');



// Initialize HTML content for the report
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Regression Report</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      background-color: #4CAF50;
      color: white;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 20px 0;
    }
    .container {
      width: 80%;
      margin: 20px auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .test-section {
      margin-bottom: 40px;
    }
    .test-heading {
      font-size: 1.5em;
      margin-bottom: 20px;
      color: #333;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 10px;
    }
    .test-description {
      font-size: 1em;
      margin-bottom: 10px;
      color: #555;
    }
    .image-diff {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
    }
    .image-diff div {
      flex: 1;
      margin: 0 10px;
      text-align: center;
    }
    .image-diff button {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px;
      font-size: 1em;
      color: white;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .image-diff button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <h1>Visual Regression Report</h1>
  <div class="container">
`;

// Function to add a test result to the HTML report

function updateHTMLReport(testSuite, screenshotName, testDescription, diffGenerated) {
  const baseUrl = 'https://ahsham-7.github.io/Automated-Visual-Regression-Tests/images/';
  const sanitizedTestSuite = testSuite.replace(/ /g, '_');
  const sanitizedScreenshotName = screenshotName.replace(/ /g, '_');

  const baselineImageUrl = `${baseUrl}baseline/desktop_chrome/${sanitizedTestSuite}/${sanitizedScreenshotName}-.png`;
  const actualImageUrl = `${baseUrl}actual/desktop_chrome/${sanitizedTestSuite}/${sanitizedScreenshotName}-.png`;
  const diffImageUrl = `${baseUrl}diff/desktop_chrome/${sanitizedTestSuite}/${sanitizedScreenshotName}-.png`;

  htmlContent += `
  <div class="test-section">
      <div class="test-heading">${testSuite}</div>
      <div class="test-description">${testDescription}</div>
      <div class="image-diff">
          <div>
              <h3>Baseline</h3>
              <button onclick="window.open('${baselineImageUrl}', '_blank')">View Baseline</button>
          </div>
          <div>
              <h3>Actual</h3>
              <button onclick="window.open('${actualImageUrl}', '_blank')">View Actual</button>
          </div>
          ${diffGenerated ? `
          <div>
              <h3>Diff</h3>
              <button onclick="window.open('${diffImageUrl}', '_blank')">View Diff</button>
          </div>
          ` : ''}
      </div>
  </div>
  `;
}


// Function to write the final HTML report
function writeReport() {
  htmlContent += `
  </div>
  </body>
  </html>
  `;
  fs.mkdirSync(reportDir, { recursive: true });  // Ensure the directory exists
  fs.writeFileSync(path.join(reportDir, 'index.html'), htmlContent);  // Save report as index.html
  console.log('Report updated with test results!');
}

export { updateHTMLReport, writeReport };
