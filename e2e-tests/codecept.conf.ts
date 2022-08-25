export const config: CodeceptJS.MainConfig = {
  tests: 'login-test',
  output: './outputs',
  helpers: {
    Appium: {
      app: '../tests/apps/RNLogin.app',
      platform: 'iOS',
      device: 'emulator',
      deviceName: 'iPhone 13',
      platformVersion: '15.5',
      automationName: 'XCUITest',

    }
  },
  include: {},
  name: 'RNLogin'
}
