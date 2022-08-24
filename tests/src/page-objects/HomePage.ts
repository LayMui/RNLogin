import Page from './page';
import { config } from '../../../config/wdio.conf'

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  // Using accessibilityLabel and testID
  LOGIN_VIA_AZURE_AD: '~loginviaAzure',
 // Need to use xpath on Browserstack devices

  // IOS

  // ANDROID
  
};

class HomePage extends Page {

  async selectADZureLogin() {
   // if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
     (await $(SELECTORS.LOGIN_VIA_AZURE_AD).waitForDisplayed()) &&
      (await $(SELECTORS.LOGIN_VIA_AZURE_AD).touchAction('tap'));
   // }
  }


  open() {
    return super.open('home');
  }
}

export default new HomePage();
