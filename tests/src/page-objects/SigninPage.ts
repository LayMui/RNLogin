import Page from './page';
import { config } from '../../../config/wdio.conf'
import { setTimeout } from 'timers/promises';

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  NEXT: '~Next',
  CONTINUE: '~Continue',
  EMAIL_IOS: '~Enter your email, phone, or Skype.',
  CANCEL: '~Cancel',
  EMAIL_ANDROID: '//*[@resource-id="i0116"]'


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
        if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'iOS') {
   
          await $(SELECTORS.EMAIL_IOS).waitForDisplayed();
          await $(SELECTORS.EMAIL_IOS).touchAction('tap');
          await $(SELECTORS.EMAIL_IOS).clearValue();  
          await $(SELECTORS.EMAIL_IOS).setValue(email)    
         
        }
        else {
          await $(SELECTORS.EMAIL_ANDROID).waitForDisplayed();
          await $(SELECTORS.EMAIL_ANDROID).touchAction('tap');
          await $(SELECTORS.EMAIL_ANDROID).clearValue();  
          await $(SELECTORS.EMAIL_ANDROID).setValue(email)    
        }

        await $(SELECTORS.NEXT).touchAction('tap')
  }

  async goToNext(){
    await $(SELECTORS.CANCEL).isDisplayed()
  }

    open() {
    return super.open('signin');
  }
}

export default new SigninPage();
