// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Content
  * [Installation](#Installation)
  * [Usage Information](#UsageInformation)
  * [Licenses](#Licenses)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Github Username](#Github)
  * [Email](#Email)
   
  ## Installation
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Licenses
  ${data.license} 

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ##### GitHub Username
  https://www.github.com/${data.githubName}

  ##### Email
  ${data.email}
`;
}

module.exports = generateMarkdown;