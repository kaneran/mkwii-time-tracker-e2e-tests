import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { generateRandomTime } from "../utils";
import AddTimePage from "../_pageObjects/AddTimePage";

Given("the user visits the add track time page", () => {
  AddTimePage.visit();
});

When(/^the user selects (.*) and (.*)$/, (track, format) => {
  track && AddTimePage.selectTrack(track);
  format && AddTimePage.selectFormat(format);
});

And(/^enters a (.*) time$/, (timeState) => {
  if (timeState === 'valid') {
    const time = generateRandomTime();
    cy.wrap(time).as('time');
    AddTimePage.timeInput.type(time);
  }
  
});

And("submits the data", () => {
  AddTimePage.submitButton.click();
});

Then(/^the outcome should be (.*)$/, (outcome) => {
  AddTimePage.verifyOutcome(outcome);
});
