import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory and filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the report directory for index.html
const reportDir = path.join(__dirname, 'gh-pages'); // Adjusted to match the YAML deployment path

// Base URL for GitHub Pages images
const baseUrl = 'https://ahsham-7.github.io/Automated-Visual-Regression-Tests/images/';

// Initialize HTML content for the report
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Regression Report</title>
  <style>
    /* CSS styles here */
  </style>
</head>
<body>
  <h1>Visual Regression Report</h1>
  <div class="container">
`;

// Function to add a test result to the HTML report
function updateHTMLReport(testSuite, screenshotName, testDescription, diffGenerated) {
  const sanitizedTestSuite = testSuite.replace(/ /g, '_');
  const sanitizedScreenshotName = screenshotName.replace(/ /g, '_');

  const nameWithDash = `${sanitizedTestSuite}/${sanitizedScreenshotName}-`;

  const baselineImageUrl = `${baseUrl}baseline/${nameWithDash}.png`;
  const actualImageUrl = `${baseUrl}actual/${nameWithDash}.png`;
  const diffImageUrl = `${baseUrl}diff/${nameWithDash}.png`;

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
