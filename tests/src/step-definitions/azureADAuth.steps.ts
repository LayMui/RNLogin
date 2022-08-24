import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import HomePage from '../page-objects/HomePage';
import SigninPage from '../page-objects/SigninPage';

import { setTimeout } from 'timers/promises';
import { config } from '../../../config/wdio.conf'

Given('{string} is at the app to login via Azure', async (actor) => {
  await HomePage.selectADZureLogin()
});

When(
  '{string} provides email to sign in',
  async function (pronoun, table: DataTable) {
    const email = table.hashes()[0].email;
    
    await SigninPage.enterEmail(email)
   
    
  },
);
 
Then('{string} is able to access the app', async function (pronoun) {
 
});

