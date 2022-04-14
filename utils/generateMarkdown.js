
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let licenseInput = `${data.license}`;
    // return licenseInput;
    if (licenseInput == 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (licenseInput == 'BSD 3-Clause') {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if (licenseInput == 'Apache') {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    let licenseInput = `${data.license}`;
    if (licenseInput == 'MIT') {
        return "https://opensource.org/licenses/MIT"
    } else if (licenseInput == 'BSD 3-Clause') {
        return "https://opensource.org/licenses/BSD-3-Clause"
    } else if (licenseInput == 'Apache') {
        return "https://opensource.org/licenses/Apache-2.0"
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInput) {
    if (!licenseInput) {
        return ''
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
    
    ${renderLicenseBadge(data)}
   ## Table of Contents:
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#tests)
    - [Questions](#Questions)
    ## Description: 
    ${data.description}
    ## Installation: 
    ${data.installation}
    ## Usage: 
    ${data.usage}
    ## License: 
    'This project is licensed under ${data.license}: ${renderLicenseLink(data)}
    ## Contributing: 
    ${data.contribution}
    ## Tests: 
    ${data.test}
    ## Questions: 
    ${data.github}
    Please reach out to me at ${data.email} with any additional questions, comments, or concerns!
  `;
}

module.exports = generateMarkdown