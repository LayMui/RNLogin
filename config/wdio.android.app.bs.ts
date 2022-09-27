import { join } from 'path'
import { config } from './wdio.conf'

// ============
// Specs
// ============
config.specs = ['./tests/features/*.feature']

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    platformName: 'Android',
    platformVersion: '10.0',
    deviceName: 'Google Pixel 4',
    app:
      process.env.BROWSERSTACK_APP_ID_ANDROID ||
      'bs://939fe9e9c2ee58076154a79c2411330e32a9f5a9',
    newCommandTimeout: 240,
    'browserstack.idleTimeout': 300,
    'browserstack.networkLogs': 'true',
    'browserstack.acceptInsecureCerts': 'true',
    autoAcceptAlerts: 'true',
    autoDismissAlerts: 'true',
    autoGrantPermissions: 'true',
    build: process.env.BROWSERSTACK_BUILD_NAME,
    name: 'RNLogin',
  },
];

exports.config = config;
