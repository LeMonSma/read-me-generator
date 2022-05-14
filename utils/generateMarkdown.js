

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
    
    
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
    ## Contributing: 
    ${data.contribution}
    ## Tests: 
    ${data.test}
    ## Questions: 
    ${data.github}
    Please reach out to me at ${data.email} with any Questions.
  `;
}

module.exports = generateMarkdown