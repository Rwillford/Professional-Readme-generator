// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache':
      badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
      break;

    case 'ISC':
      badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
      break;

    case 'MIT':
      badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      break;

    case 'IBM':
      badge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
      break;
    default:
      badge: ''
      break;
  }
  return badge

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      link = `(https://opensource.org/licenses/Apache-2.0)`
      break;

    case 'ISC':
      link = `(https://opensource.org/licenses/ISC)`
      break;

    case 'MIT':
      link = `(https://opensource.org/licenses/MIT)`
      break;

    case 'IBM':
      link = `(https://opensource.org/licenses/IPL-1.0)`
      break;

    default:
      link = ''
      break;
  }
  return link

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  } else {
    return (
      `${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}
      `
    )
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ##### GitHub Username
  https://www.github.com/${data.githubName}

  ##### Email
  You can reach at this email for any further questions
  ${data.email}
`;
}

module.exports = generateMarkdown;
