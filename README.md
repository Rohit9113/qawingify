# Automated Testing with Cypress
This repository contains automated tests written using Cypress for testing a web application's login and home pages.

## Getting Started
To get started with running the automated tests locally, follow these steps:

## Prerequisites
1. Node.js (version 14 or higher) must be installed on your machine.
2. Make sure you have a stable internet connection.

## Installation
1. Clone this repository to your local machine:

``git clone <repository_url>``

2. Navigate to the cloned directory:

``cd Autometion-Testing``

3. Install the dependencies using npm:

``npm install``

4. Configuration
1. Open the ``cypress/config.js`` file and configure any necessary settings.

2. Make sure to update the URL in the cypress/e2e/1-getting-started/login.cy.js and cypress/e2e/1-getting-started/home.cy.js files to match the URL of the application you are testing.

## Running the Tests
To run the automated tests, execute the following command in your terminal:

npx cypress open

This command will execute the Cypress test runner, which will open a browser window and run the specified test cases.

## Test Cases

### Login Page

- `should be able to log in with valid credentials`
  - Description: Tests if the user can successfully log in with valid credentials.
  - Steps:
    1. Visit the login page.
    2. Enter a valid username and password.
    3. Click the submit button.
  - Expected Outcome: The user should be logged in and redirected to the Home page.

- `should display an error message with invalid credentials`
  - Description: Tests if an error message is displayed when logging in with invalid credentials.
  - Steps:
    1. Visit the login page.
    2. Enter an invalid username and password.
    3. Click the submit button.
  - Expected Outcome: An error message should be displayed.

### Home Page

- `should sort the transaction table when clicking on the AMOUNT header`
  - Description: Tests if the transaction table is sorted correctly when the AMOUNT header is clicked.
  - Steps:
    1. Log in to the application.
    2. Click on the AMOUNT header in the transaction table.

## License

This project is licensed under the MIT License.
