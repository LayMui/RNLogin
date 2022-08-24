import {join} from 'path';
import {config} from './wdio.conf';

// ============
// Specs
// ============
config.specs = ['./tests/features/*.feature'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.capabilities = [
  {
    platformName: 'iOS',
    platformVersion: '15.5',
    deviceName: 'iPhone 13',
    app:
      process.env.BROWSERSTACK_APP_ID_IOS ||
      'bs://bb1ed1e8844282257b22d4add768e4c812538d26',
    newCommandTimeout: 240,
    'browserstack.idleTimeout': 300,
    'browserstack.networkLogs': 'true',
    'browserstack.acceptInsecureCerts': 'true',
    autoAcceptAlerts: 'true',
    autoDismissAlerts: 'true',
    autoGrantPermissions: 'true',
    build: process.env.BROWSERSTACK_BUILD_NAME,
    name: 'User Management Universal Login',
  },
];

exports.config = config;
