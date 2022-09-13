import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import HomePage from '../page-objects/HomePage';

import { setTimeout } from 'timers/promises';

Given('{word} is at the app to login', async (actor) => {

  await HomePage.selectLogin()
});

When('{word} select a sport',
  async function (pronoun, table: DataTable) {
    const sport = table.hashes()[0].sport;
    console.log("B4 selectPicker")
    await HomePage.selectSport(sport)
    console.log("After selectPicker")
  },
);
 
Then('{word} is able to select', async function (pronoun) {
});

