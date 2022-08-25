```
yarn codeceptjs
yarn run v1.22.18
$ codeceptjs run --steps
CodeceptJS v3.3.5 #StandWithUkraine
Using test root "/Users/a845751yara.com/poc/RNLogin/e2e-tests"

login --
  test something
2022-08-25T07:51:07.108Z ERROR webdriver: Request failed with status 500 due to session not created: A new session could not be created. Details: Appium's IosDriver does not support Xcode version 13.4.1. Apple has deprecated UIAutomation. Use the "XCUITest" automationName capability instead.
2022-08-25T07:51:07.108Z ERROR webdriver: session not created: A new session could not be created. Details: Appium's IosDriver does not support Xcode version 13.4.1. Apple has deprecated UIAutomation. Use the "XCUITest" automationName capability instead.
    at Object.getErrorFromResponseBody (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/utils.js:94:12)
    at WebDriverRequest._request (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/request.js:134:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Object.startWebDriverSession (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/utils.js:29:20)
    at async Function.newSession (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/index.js:35:45)
    at async Object.exports.remote (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriverio/build/index.js:53:22)
    at async Appium._startBrowser (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/codeceptjs/lib/helper/Appium.js:232:24)
Error: Can't connect to WebDriver.
Error: Failed to create session.
A new session could not be created. Details: Appium's IosDriver does not support Xcode version 13.4.1. Apple has deprecated UIAutomation. Use the "XCUITest" automationName capability instead.

Please make sure Selenium Server is running and accessible
  ✔ OK in 7ms
```
