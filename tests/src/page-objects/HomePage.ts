import Page from './page';
import { config } from '../../../config/wdio.conf'

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  // Using accessibilityLabel and testID
  LANGINPUT: '~langInput',
  ENVCHECKBOX_DEBUG: '~envCheckBlock_debug',
  ENVCHECKBOX_LOCAL: '~envCheckBlock_local',
  ENVCHECKBOX_STAGE: '~envCheckBlock_stage',
  REGIONCHECKBLOCK_INDIA: '~regionCheckBlock_INDIA',

  EMBEDDED: '~embedded',
  LOGIN: '~login',
  FORCE_LOGIN: '~forceLogin',
  LOGOUT: '~logOut',

  // Need to use xpath on Browserstack devices

  // IOS
  LANGINPUT_IOS: '//XCUIElementTypeTextField[@name="langInput"]',
  ENVCHECKBOX_DEBUG_IOS: '/XCUIElementTypeOther[@name="envCheckBlock_debug"]',
  ENVCHECKBOX_LOCAL_IOS: '//XCUIElementTypeOther[@name="envCheckBlock_local"]',
  ENVCHECKBOX_STAGE_IOS: '//XCUIElementTypeOther[@name="envCheckBlock_stage"]',
  ENVCHECKBOX_PREPROD_IOS: '//XCUIElementTypeOther[@name="envCheckBlock_preprod"]',
  ENVCHECKBOX_PRODUCTION_IOS: '//XCUIElementTypeOther[@name="envCheckBlock_production"]',

  // ANDROID
  LANGINPUT_ANDROID: '//android.widget.EditText[@content-desc="langInput"]',
  ENVCHECKBOX_DEBUG_ANDROID: '(//android.widget.CheckBox[@content-desc="envCheck"])[1]',
  ENVCHECKBOX_LOCAL_ANDROID: '(//android.widget.CheckBox[@content-desc="envCheck"])[2]',
  ENVCHECKBOX_STAGE_ANDROID: '(//android.widget.CheckBox[@content-desc="envCheck"])[3]',
  ENVCHECKBOX_PREPROD_ANDROID: '(//android.widget.CheckBox[@content-desc="envCheck"])[4]',
  ENVCHECKBOX_PRODUCTION_ANDROID: '(//android.widget.CheckBox[@content-desc="envCheck"])[5]',

  // IOS
  REGIONCHECKBLOCK_INDIA_IOS: '//XCUIElementTypeOther[@name="regionCheckBlock_INDIA"]',
  REGIONCHECKBLOCK_KENYA_IOS: '//XCUIElementTypeOther[@name="regionCheckBlock_KENYA"]',
  REGIONCHECKBLOCK_THAILAND_IOS: '//XCUIElementTypeOther[@name="regionCheckBlock_THAILAND"]',
  REGIONCHECKBLOCK_PHILIPPINES_IOS: '//XCUIElementTypeOther[@name="regionCheckBlock_PHILIPPINES"]',

  // ANDROID
  REGIONCHECKBLOCK_INDIA_ANDROID: '//android.view.ViewGroup[@content-desc="regionCheckBlock_INDIA"]',
  REGIONCHECKBLOCK_KENYA_ANDROID: '//android.view.ViewGroup[@content-desc="regionCheckBlock_KENYA"]',
  REGIONCHECKBLOCK_THAILAND_ANDROID: '//android.view.ViewGroup[@content-desc="regionCheckBlock_THAILAND"]',
  REGIONCHECKBLOCK_PHILIPPINES: '//android.view.ViewGroup[@content-desc="regionCheckBlock_PHILIPPINES"]',

 // IOS
 EMBEDDED_IOS:'//XCUIElementTypeButton[@name="embedded"]',
 FORCE_LOGIN_VIA_BROWSER_IOS: '//XCUIElementTypeButton[@name="forceLoginViaBrowser"]',
 FORCE_LOGOUT_VIA_BROWSER_IOS: '//XCUIElementTypeButton[@name="logoutViaBrowser"]',
 LOGIN_IOS: '//XCUIElementTypeButton[@name="login"]',
 FORCE_LOGIN_IOS: '//XCUIElementTypeButton[@name="forceLogin"]',
 LOGOUT_IOS: '//XCUIElementTypeButton[@name="logOut"]',
 

 // ANDROID
  EMBEDDED_ANDROID:'//android.widget.Button[@content-desc="embedded"]',
  FORCE_LOGIN_VIA_BROWSER_ANDROID: '//android.widget.Button[@content-desc="forceLoginViaBrowser"]',
  FORCE_LOGOUT_VIA_BROWSER_ANDROID: '//android.widget.Button[@content-desc="logoutViaBrowser"]',
  LOGIN_ANDROID: '//android.widget.Button[@content-desc="login"]',
  FORCE_LOGIN_ANDROID: '//android.widget.Button[@content-desc="forceLogin"]',
  LOGOUT_ANDROID: '//android.widget.Button[@content-desc="logOut"]',
  
};

class HomePage extends Page {

  setSessionID() {
    process.env['BROWSERSTACK_SESSIONID'] = driver.sessionId
    console.log('BROWSERSTACK_SESSIONID:' + process.env.BROWSERSTACK_SESSIONID)
  }

  async selectEmbeddedLogin() {
    this.setSessionID()
    if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
     (await $(SELECTORS.EMBEDDED_ANDROID).waitForDisplayed()) &&
      (await $(SELECTORS.EMBEDDED_ANDROID).touchAction('tap'));
    }
    else {
      (await $(SELECTORS.EMBEDDED_IOS).waitForDisplayed()) &&
      (await $(SELECTORS.EMBEDDED_IOS).touchAction('tap'));
    }
  }

  async selectWebViewLogin() {
    this.setSessionID()
    if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
    (await $(SELECTORS.ENVCHECKBOX_LOCAL_ANDROID).waitForDisplayed()) &&
    (await $(SELECTORS.ENVCHECKBOX_LOCAL_ANDROID).touchAction('tap'));
   
   // SrollToView not supported for mobile https://github.com/webdriverio/webdriverio/issues/6537
    (await $(SELECTORS.LOGIN_ANDROID).waitForDisplayed()) &&
      (await $(SELECTORS.LOGIN_ANDROID).touchAction('tap'));
    } else {
      (await $(SELECTORS.ENVCHECKBOX_LOCAL_IOS).waitForDisplayed()) &&
      (await $(SELECTORS.ENVCHECKBOX_LOCAL_IOS).touchAction('tap'));
      (await $(SELECTORS.LOGIN_IOS).waitForDisplayed()) &&
        (await $(SELECTORS.LOGIN_IOS).touchAction('tap'));
    }
  }

  async selectLogout() {
    if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
    (await $(SELECTORS.LOGOUT_ANDROID).waitForDisplayed()) &&
      (await $(SELECTORS.LOGOUT_ANDROID).touchAction('tap'));
    } else {
      (await $(SELECTORS.LOGOUT_IOS).waitForDisplayed()) &&
      (await $(SELECTORS.LOGOUT_IOS).touchAction('tap'));
    }
  }

  open() {
    return super.open('home');
  }
}

export default new HomePage();
