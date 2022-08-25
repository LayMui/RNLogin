export const config: CodeceptJS.MainConfig = {
  tests: 'login-test',
  output: './outputs',
  helpers: {
    Appium: {
      app: '../tests/apps/RNLogin.app',
      platform: 'iOS',
      device: 'simulator',
      port: 4723,
      path: '/wd/hub',
      desiredCapabilities:{
        deviceName: 'iPhone 13',
        platformVersion: '15.5',
        platformName: 'iOS',
        automationName: 'XCUITest',
        launchTimeout: 40000,
        autoDismissAlerts: true,
        showIOSLog: true,
        enableAsyncExecuteFromHttps: true,
        noReset: false,
        noSign: true,

      }


    }
  },
  include: {},
  name: 'RNLogin'
}
