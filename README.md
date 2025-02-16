# cypress-cucumber-framework

## Application under test
The feature files, step definitions and page objects were written for https://github.com/andreasneuber/automatic-test-sample-site.
Readme in this repo has further details how to set it up.

## Run tests locally

```
npm install
npm run test:all
```

## Run tests in CI
- In package.json, change line 8 to `"test": "cypress run --browser chrome --headless --spec \"**/*.feature\""`
