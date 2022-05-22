import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AddTimePage from "../_pageObjects/AddTimePage";

Given("the user visits the add track time page", () => {
  AddTimePage.visit();
});

When(/^the user selects (.*) and (.*)$/, (track, format) => {
  track && AddTimePage.selectTrack(track);
  format && AddTimePage.selectFormat(format);
});

And(/^enters (.*)$/, (time) => {
  time && AddTimePage.timeInput.type(time);
});

And("submits the data", () => {
  AddTimePage.submitButton.click();
});

Then(/^the outcome should be (.*)$/, (outcome) => {
  AddTimePage.verifyOutcome(outcome);
});
