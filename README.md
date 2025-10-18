# Workflow repo for the CA
This project was created as part of the Workflow Assignment in the Noroff Front-End Development course. The goal of this task was to set up and maintain a professional development workflow using modern tools for linting, formatting, testing, and automation.

## Purpose

The purpose of this project was to practice a clean and structured workflow that reflects industry standards. The workflow includes ESLint, Prettier, Husky, lint-staged, Vitest, and Playwright, all working together to ensure consistent and error-free code.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nestorillo/workflow-repo-ca.git
   ```

2. Navigate to the project folder:
   ```bash
   cd workflow-repo-ca
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Linting and Formatting

Run ESLint to check for problems:
```bash
npx eslint .
```

Run Prettier to check or format files:
```bash
npx prettier . --check
npx prettier . --write
```

Both ESLint and Prettier are used together to maintain consistent coding style and avoid syntax issues.

## Husky and lint-staged

Husky is configured with a pre-commit hook that automatically runs ESLint and Prettier before every commit. If there are any linting or formatting issues, the commit will be blocked until the problems are fixed.

You can see this configuration inside the "lint-staged" section of the package.json file.

## Unit Testing with Vitest

Vitest is used for running unit tests. To run all unit tests, use:
```bash
npm run test
```

The example tests are located inside the /tests folder. All unit tests are passing successfully.

## End-to-End Testing with Playwright

Playwright is used for automated browser testing across Chromium, Firefox, and WebKit.

To run Playwright tests:
```bash
npx playwright test
```

The results are displayed in the terminal and a full HTML report opens automatically.

Note: The login tests require real user credentials or mock API data to pass completely. The configuration and structure are fully implemented, which is the main focus of this assignment.

## Technologies Used

- Node.js and npm  
- ESLint (linting and code quality)  
- Prettier (code formatting)  
- Husky and lint-staged (Git hooks automation)  
- Vitest (unit testing)  
- Playwright (end-to-end testing)  
- Tailwind CSS (styling from the base project)

## What I Learned

Through this assignment, I learned how to configure and integrate multiple workflow tools into one project, automate code quality checks before every commit, run and understand both unit and end-to-end tests, and maintain a clean and organized development process following modern best practices.

## Notes

All tools were successfully installed, configured, and tested. The workflow is now fully functional and ready for continuous development or deployment.

Author: Néstor Polo  
Course: Noroff – Front-End Development  
Assignment: Workflow (CA)
