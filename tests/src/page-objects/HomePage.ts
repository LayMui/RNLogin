import Page from './page';
import { config } from '../../../config/wdio.conf'

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  // Using accessibilityLabel and testID
  LOGIN_VIA_AZURE_AD: '~loginviaAzure',
  LOGIN: '~login',
  PICKER: '~pickerSelect'
 // Need to use xpath on Browserstack devices

  // IOS

  // ANDROID
  
};

class HomePage extends Page {

  setSessionID() {
    process.env['BROWSERSTACK_SESSIONID'] = driver.sessionId
    console.log('BROWSERSTACK_SESSIONID:' + process.env.BROWSERSTACK_SESSIONID)
  }

  async selectADZureLogin() {
    this.setSessionID();
   // if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
     (await $(SELECTORS.LOGIN_VIA_AZURE_AD).waitForDisplayed()) &&
      (await $(SELECTORS.LOGIN_VIA_AZURE_AD).touchAction('tap'));
   // }
  }
  async selectLogin() {
      (await $(SELECTORS.LOGIN).waitForDisplayed()) &&
       (await $(SELECTORS.LOGIN).touchAction('tap'));
   }


   async selectSport(sport) {
    (await $(SELECTORS.PICKER).waitForDisplayed()) &&
     (await $(SELECTORS.PICKER).touchAction('tap'));
     await $(SELECTORS.PICKER).setValue('football');
 }
 

  open() {
    return super.open('home');
  }
}

export default new HomePage();
