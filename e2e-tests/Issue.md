```
yarn codeceptjs
yarn run v1.22.18
$ codeceptjs run --steps
CodeceptJS v3.3.5 #StandWithUkraine
Using test root "/Users/a845751yara.com/poc/RNLogin/e2e-tests"

login --
  test something
2022-08-25T13:04:29.522Z ERROR webdriver: Request failed with status 500 due to unknown error: An unknown server-side error occurred while processing the command. Original error: Could not create simulator with name 'appiumTest-C65A7284-094E-4F98-8366-7630B4872CCD-simulator', device type id 'simulator', with runtime ids 'com.apple.CoreSimulator.SimRuntime.iOS-15-5'
2022-08-25T13:04:29.523Z ERROR webdriver: unknown error: An unknown server-side error occurred while processing the command. Original error: Could not create simulator with name 'appiumTest-C65A7284-094E-4F98-8366-7630B4872CCD-simulator', device type id 'simulator', with runtime ids 'com.apple.CoreSimulator.SimRuntime.iOS-15-5'
    at Object.getErrorFromResponseBody (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/utils.js:94:12)
    at WebDriverRequest._request (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/request.js:134:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Object.startWebDriverSession (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/utils.js:29:20)
    at async Function.newSession (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriver/build/index.js:35:45)
    at async Object.exports.remote (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/webdriverio/build/index.js:53:22)
    at async Appium._startBrowser (/Users/a845751yara.com/poc/RNLogin/e2e-tests/node_modules/codeceptjs/lib/helper/Appium.js:232:24)
Error: Can't connect to WebDriver.
Error: Failed to create session.
An unknown server-side error occurred while processing the command. Original error: Could not create simulator with name 'appiumTest-C65A7284-094E-4F98-8366-7630B4872CCD-simulator', device type id 'simulator', with runtime ids 'com.apple.CoreSimulator.SimRuntime.iOS-15-5'

Please make sure Selenium Server is running and accessible
  ✔ OK in 6ms


  OK  | 1 passed   // 8s
✨  Done in 11.67s.
```
