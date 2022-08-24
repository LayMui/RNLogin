import Page from './page';
import { config } from '../../../config/wdio.conf'
import { setTimeout } from 'timers/promises';

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  NEXT: '~Next',
  CONTINUE: '~Continue',
  EMAIL: '~Enter your email, phone, or Skype.'


  // IOS
 
  // ANDROID
 
};

class SigninPage extends Page {

  async continue()
  {
        await $(SELECTORS.CONTINUE).waitForDisplayed();
        await $(SELECTORS.CONTINUE).touchAction('tap');
  }

  async enterEmail(email) {
        this.continue()
          await $(SELECTORS.EMAIL).waitForDisplayed();
          await $(SELECTORS.EMAIL).touchAction('tap');
          await $(SELECTORS.EMAIL).setValue(email)    
  }

    open() {
    return super.open('signin');
  }
}

export default new SigninPage();
