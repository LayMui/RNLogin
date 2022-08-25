# RNLogin
A POC to automate microsoft signin page

This POC consists of 2 automation test code
e2e-tests folder hold the codeceptJS 
tests folder hold the webdriverio

To start webdriverio:
in the root folder, run
```
yarn test:execute:ios
```

To start codeceptJS:
```
cd e2e-tests
appium &
yarn codeceptjs
```

Note: There is an issue with running codeceptJS
see e2e-tests/issue.md
